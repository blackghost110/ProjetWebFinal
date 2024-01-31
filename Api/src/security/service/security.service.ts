import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {TokenService} from "../jwt";
import {Repository} from "typeorm";
import {isNil} from "lodash";
import {
    CredentialDeleteException,
    SignupException,
    UserAlreadyExistException,
    UserNotFoundException
                            } from "../security.exception";
import {RefreshTokenPayload, SignInPayload, SignupPayload, Credential, Token} from "../model";
import {comparePassword, encryptPassword} from "../utils/password.encoder";
import {Builder} from "builder-pattern";

@Injectable()
export class SecurityService {
    constructor(@InjectRepository(Credential) private readonly repository: Repository<Credential>,
                                              private readonly tokenService: TokenService) {
    }

    // soit detail(credential_id: string)
    async detail(id: string): Promise<Credential> {               // soit {credential_id}
        const result: Credential = await this.repository.findOneBy({credential_id: id});

        if (!(isNil(result))) {
            return result;
        }
        throw new UserNotFoundException();
    }

    async signIn(payload: SignInPayload): Promise<Token> {
        let result: Credential = await this.repository.findOneBy({username: payload.username});

        if (!isNil(result) && await comparePassword(payload.password, result.password)) {
            return this.tokenService.getTokens(result);
        }
        throw new UserNotFoundException();
    }

    async signup(payload: SignupPayload): Promise<Credential | null> {
        const result: Credential | null = await this.repository.findOneBy({username: payload.username});

        if (!isNil(result)) {
            throw new UserAlreadyExistException();
        }
        try {
            const encryptedPassword: string = await encryptPassword(payload.password);
            return this.repository.save(Builder<Credential>()
                .username(payload.username)
                .password(encryptedPassword)
                .mail(payload.mail)
                .build());
        } catch (e) {
            throw new SignupException();
        }
    }

    async refresh(payload: RefreshTokenPayload): Promise<Token> {
        return this.tokenService.refresh(payload);
    }

    async delete(id): Promise<void> {
        try {
            // verif credential
            const detail: Credential = await this.detail(id);
            await this.tokenService.deleteFor(detail);
            await this.repository.remove(detail);
        } catch (e) {
            // on se retrouve ici si detail leve une exception
            throw new CredentialDeleteException();
        }
    }



}
