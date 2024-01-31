import {Injectable, Logger} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {JwtService} from "@nestjs/jwt";
import {configManager} from "@common/config/config.manager";
import {Builder} from "builder-pattern";
import {ConfigKey} from "@common/config/enum";
import {TokenExpiredException, TokenGenerationException} from "../security.exception";
import {RefreshTokenPayload, Credential, Token} from "../model";


@Injectable()
export class TokenService {
    // permettra de logger proprement les erreurs et autre info
    private readonly logger = new Logger(TokenService.name);

    constructor(@InjectRepository(Token) private readonly repository: Repository<Token>,
                @InjectRepository(Credential) private readonly credentialRepository: Repository<Credential>,
                private jwtService: JwtService) {
    }

    async getTokens(credential: Credential): Promise<Token> { //promise operation non-blocante
        try {
            // delete from token where credential_id = credentialId
            await this.repository.delete({credential}); // await : attend la fin de l'operation
            const payload = {sub: credential.credential_id};
            const token = await this.jwtService.signAsync(payload, {
                secret: configManager.getValue(ConfigKey.JWT_TOKEN_SECRET),
                expiresIn: configManager.getValue(ConfigKey.JWT_TOKEN_EXPIRE_IN)
            });
            const refreshToken = await this.jwtService.signAsync(payload, {
                secret: configManager.getValue(ConfigKey.JWT_REFRESH_TOKEN_SECRET),
                expiresIn: configManager.getValue(ConfigKey.JWT_REFRESH_TOKEN_EXPIRE_IN)
            });
            await this.repository.upsert( // pas .save car il va se referencer au tokenId alors qu'ici on en a pas, donc ici .upsert se base sur l'option choisie
                Builder<Token>()
                    .token(token)
                    .refreshToken(refreshToken)
                    .credential(credential)
                    .build(),
                ['credential']
            )
            return this.repository.findOneBy({token: token});
        } catch (e) {
            this.logger.error(e.message);
            throw new TokenGenerationException();
        }
    }
    // supprimer un enregistrement de la table Token pour un credential
    async deleteFor(credential: Credential): Promise<void> {
        await this.repository.delete({credential})
    }

//PIPELINE question sur comment TOUT cela marche /////////////////////////////////
    // permet de demander un nouveau token sans devoir a se reconnecter
    async refresh(payload: RefreshTokenPayload): Promise<Token> {
        try {
            // verifie si le token est expire (par rapport a la date du token), si oui il est catch
            const id = this.jwtService.verify(payload.refresh, {secret:
                    configManager.getValue(ConfigKey.JWT_REFRESH_TOKEN_SECRET)}).sub; // si refreshToken est valide, extrait le sub et stocke dans id
            const credential = await this.credentialRepository.findOneBy({credential_id: id});
            return await this.getTokens(credential);
        } catch (e) {
            this.logger.error(e.message);
            throw new TokenExpiredException();
        }
    }
}