import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Commentaire} from "../model/entity";
import {Repository} from "typeorm";
import {Builder} from "builder-pattern";
import {
    CommentaireCreateException, CommentaireDeleteException, CommentaireListException, CommentaireNotFoundException,
} from "../profil.exception";
import {isNil} from "lodash";
import {CommentaireCreatePayload} from "../model/payload/commentaire-create.payload";

@Injectable()
export class CommentaireService {
    constructor(@InjectRepository(Commentaire) private readonly repository: Repository<Commentaire>) {}
    async create(payload: CommentaireCreatePayload): Promise<Commentaire> {
        try {
            const newCommentaire = Object.assign(new Commentaire(), Builder<Commentaire>()
                .contenu(payload.contenu)
                .commenteur(payload.commenteur)
                .publication(payload.publication)
                .jaimes(payload.jaimes)

                .build());
            return await this.repository.save(newCommentaire);
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

    async delete(id: string): Promise<void> {
        try {
            const detail = await this.detail(id);
            await this.repository.remove(detail);
        } catch (e) {
            throw new CommentaireDeleteException();
        }
    }
}
