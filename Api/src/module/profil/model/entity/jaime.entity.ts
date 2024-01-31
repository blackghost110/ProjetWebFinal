import {Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "@common/model/entity/base.entity";
import { Credential } from "../../../../security";
import {Publication} from "./publication.entity";
import {Commentaire} from "./commentaire.entity";


@Entity()
export class Jaime extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    idLike: string;

    @ManyToOne(() => Credential, (credential) => credential.publications, {eager:false})
    @JoinColumn({referencedColumnName:'credential_id', name:'credential_id_fk'})
    jaimeur: Credential

    @ManyToOne(() => Publication, {cascade: true, eager: false})
    @JoinColumn({referencedColumnName: 'idPublication', name: 'idPublication_fk'})
    publication: Publication;

    @ManyToOne(() => Commentaire, {cascade: true, eager: false})
    @JoinColumn({referencedColumnName: 'idCommentaire', name: 'idCommentaire_fk'})
    commentaire: Commentaire;

}