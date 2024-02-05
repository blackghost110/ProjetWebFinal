import {Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "@common/model/entity/base.entity";
import { Credential } from "../../../../security";
import {Publication} from "./publication.entity";
import {Commentaire} from "./commentaire.entity";


@Entity()
export class Jaime extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    idLike: string;

    @ManyToOne(() => Credential, {eager:true, onDelete: "CASCADE"})
    @JoinColumn({referencedColumnName:'credential_id', name:'credential_id'})
    credential_id: string

    @ManyToOne(() => Publication, {cascade: true, eager: false, onDelete: "CASCADE"})
    @JoinColumn({referencedColumnName: 'idPublication', name: 'idPublication'})
    idPublication: string;

    @ManyToOne(() => Commentaire, {cascade: true, eager: false, onDelete: "CASCADE"})
    @JoinColumn({referencedColumnName: 'idCommentaire', name: 'idCommentaire'})
    idCommentaire: string;

}