import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Builder} from "builder-pattern";
import {isNil} from "lodash";
import {Profil} from "../model/entity";
import {ProfilCreatePayload} from "../model/payload/profil-create.payload";
import {
    ProfilCreateException,
    ProfilDeleteException,
    ProfilListException,
    ProfilNotFoundException, ProfilUpdateException
} from "../profil.exception";
import {ProfilUpdatePayload} from "../model/payload/profil-update.payload";

@Injectable()
export class ProfilService {
    constructor(@InjectRepository(Profil) private readonly repository: Repository<Profil>) {}
    async create(payload: ProfilCreatePayload): Promise<Profil> {
        try {
            const newProfil = Object.assign(new Profil(), Builder<Profil>()
                .nom(payload.nom)
                .prenom(payload.prenom)
                .description(payload.description)
                .status(payload.status)
                .photoProfil(payload.photoProfil)
                .email(payload.email)
                .build());
            return await this.repository.save(newProfil);
        } catch (e) {
            throw new ProfilCreateException();
        }
    }
    async detail(id: string): Promise<Profil> {
        const result = await this.repository.findOneBy({idProfil: id});
        if (!(isNil(result))) {
            return result;
        }
        throw new ProfilNotFoundException();
    }

    async getAll(): Promise<Profil[]> {
        try {
            return await this.repository.find();
        } catch (e) {
            throw new ProfilListException();
        }
    }

    async update(payload: ProfilUpdatePayload): Promise<Profil> {
        try {
            let detail = await this.detail(payload.idProfil);
            detail.nom = payload.nom;
            detail.prenom = payload.prenom;
            detail.description = payload.description;
            detail.status = payload.status;
            detail.photoProfil = payload.photoProfil;
            detail.email = payload.email;
            return await this.repository.save(detail);
        } catch (e) {
            throw new ProfilUpdateException();
        }
    }

    async delete(id: string): Promise<void> {
        try {
            const detail = await this.detail(id);
            await this.repository.remove(detail);
        } catch (e) {
            throw new ProfilDeleteException();
        }
    }

}

