import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Commentaire} from "../model/entity";
import {FindManyOptions, Repository} from "typeorm";
import {Builder} from "builder-pattern";
import {
    CommentaireCreateException, CommentaireDeleteException, CommentaireListException, CommentaireNotFoundException,
} from "../profil.exception";
import {isNil} from "lodash";
import {CommentaireCreatePayload} from "../model/payload/commentaire-create.payload";
import {Credential} from "../../../security";

@Injectable()
export class CommentaireService {
    constructor(@InjectRepository(Commentaire) private readonly repository: Repository<Commentaire>) {}
    async create(user: Credential, payload: CommentaireCreatePayload): Promise<Commentaire> {
        try {
            return await this.repository.save(Builder<Commentaire>()
                .contenu(payload.contenu)
                .credential_id(user.credential_id)
                .idPublication(payload.idPublication)
                .build());
        } catch (e) {
            throw new CommentaireCreateException();
        }
    }
    async detail(id: string): Promise<Commentaire> {
        const result = await this.repository.findOneBy({idCommentaire: id});
        if (!(isNil(result))) {
            return result;
        }
        throw new CommentaireNotFoundException();
    }

    async getAll(): Promise<Commentaire[]> {
        try {
            return await this.repository.find();
        } catch (e) {
            throw new CommentaireListException();
        }
    }
    async getAllByIdPublication(idPublication: string): Promise<Commentaire[]> {
        try {
            return await this.repository.find({ where: { idPublication } });
        } catch (e) {
            throw new CommentaireListException();
        }
    }
    async getAllByUser(id:string): Promise<Commentaire[]> {
        const coms: FindManyOptions<Commentaire> = {
            where: { credential_id: id },
        };

        const results = await this.repository.find(coms);

        if (results.length > 0) {
            return results;
        }

        // Exception here
        throw new Error('Aucun commentaire trouvé pour l\'identifiant de la credential fourni.');
    }

    async delete(id: string): Promise<void> {
        try {
            const detail = await this.detail(id);
            await this.repository.remove(detail);
        } catch (e) {
            throw new CommentaireDeleteException();
        }
    }
}
