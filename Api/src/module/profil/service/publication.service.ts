import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Publication} from "../model/entity";
import {FindManyOptions, Repository} from "typeorm";
import {Builder} from "builder-pattern";
import {
    PublicationCreateException, PublicationDeleteException, PublicationListException, PublicationNotFoundException
} from "../profil.exception";
import {isNil} from "lodash";
import {PublicationCreatePayload} from "../model/payload/publication-create.payload";
import {Credential} from "../../../security";

@Injectable()
export class PublicationService {
    constructor(@InjectRepository(Publication) private readonly repository: Repository<Publication>) {}
    async create(user: Credential, payload: PublicationCreatePayload): Promise<Publication> {
        try {
            return await this.repository.save(Builder<Publication>()
                .contenu(payload.contenu)
                .typePublication(payload.typePublication)
                .credential_id(user.credential_id)
                .build());
        } catch (e) {
            throw new PublicationCreateException();
        }
    }


    /*
        async create(payload: PublicationCreatePayload): Promise<Publication> {
            try {
                const newPublication = Object.assign(new Publication(), Builder<Publication>()
                    .contenu(payload.contenu)
                    .typePublication(payload.typePublication)
                    .posteur(payload.posteur)
                    .commentaires(payload.commentaires)
                    .jaimes(payload.jaimes)
                    .build());
                return await this.repository.save(newPublication);
            } catch (e) {
                throw new PublicationCreateException();
            }
        }

        */











    async publicationDetail(id:string): Promise<Publication[]> {
        const options: FindManyOptions<Publication> = {
            where: { credential_id: id },
        };

        const results = await this.repository.find(options);

        if (results.length > 0) {
            return results;
        }

        // Exception here
        throw new Error('Aucune publication trouvée pour l\'identifiant de la credential fourni.');
    }


    async detail(id: string): Promise<Publication> {
        const result = await this.repository.findOneBy({idPublication: id});
        if (!(isNil(result))) {
            return result;
        }
        throw new PublicationNotFoundException();
    }

    async getAll(): Promise<Publication[]> {
        try {
            return await this.repository.find();
        } catch (e) {
            throw new PublicationListException();
        }
    }

    async delete(id: string): Promise<void> {
        try {
            const detail = await this.detail(id);
            await this.repository.remove(detail);
        } catch (e) {
            throw new PublicationDeleteException();
        }
    }
}
