import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {BaseEntity} from "@common/model/entity/base.entity";
import { Credential } from "../../../../security";
import {Publication} from "./publication.entity";
import {Jaime} from "./jaime.entity";


@Entity()
export class Commentaire extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    idCommentaire: string;

    @Column({length: 400, nullable: true})
    contenu: string;

    @ManyToOne(() => Publication, {cascade: true, eager: true, onDelete: "CASCADE"})
    @JoinColumn({referencedColumnName: 'idPublication', name: 'idPublication'})
    idPublication: string;

    @ManyToOne(() => Credential, (credential) => credential.commentaires, {eager:true})
    @JoinColumn({referencedColumnName:'credential_id', name:'credential_id'})
    credential_id: string

    @OneToMany(
        ()=>Jaime, (jaime)=> jaime.credential_id, {cascade:true,eager:false})
    jaimes:Jaime[];
}