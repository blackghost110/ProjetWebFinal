import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Jaime} from "../model/entity";
import {Repository} from "typeorm";
import {Builder} from "builder-pattern";
import {
    JaimeCreateException, JaimeDeleteException, JaimeListException, JaimeNotFoundException,
} from "../profil.exception";
import {isNil} from "lodash";
import {JaimeCreatePayload} from "../model/payload/jaime-create.payload";

@Injectable()
export class JaimeService {
    constructor(@InjectRepository(Jaime) private readonly repository: Repository<Jaime>) {}
    async create(payload: JaimeCreatePayload): Promise<Jaime> {
        try {
            const newJaime = Object.assign(new Jaime(), Builder<Jaime>()
                .jaimeur(payload.jaimeur)
                .publication(payload.publication)
                .commentaire(payload.commentaire)
                .build());
            return await this.repository.save(newJaime);
        } catch (e) {
            throw new JaimeCreateException();
        }
    }
    async detail(id: string): Promise<Jaime> {
        const result = await this.repository.findOneBy({idLike: id});
        if (!(isNil(result))) {
            return result;
        }
        throw new JaimeNotFoundException();
    }

    async getAll(): Promise<Jaime[]> {
        try {
            return await this.repository.find();
        } catch (e) {
            throw new JaimeListException();
        }
    }

    async delete(id: string): Promise<void> {
        try {
            const detail = await this.detail(id);
            await this.repository.remove(detail);
        } catch (e) {
            throw new JaimeDeleteException();
        }
    }

}
