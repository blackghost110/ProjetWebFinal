import {
    Column,
    Entity, JoinColumn, OneToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import {BaseEntity} from "@common/model/entity/base.entity";
import {Credential} from "../../../../security";



@Entity()
export class Profil extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    idProfil: string;

    @Column({length: 50, nullable: true})
    nom: string;

    @Column({length: 50, nullable: true})
    prenom: string;

    @Column({length: 200, nullable: true})
    description: string;

    @Column({length: 50, nullable: true})
    status: string;

    @Column({length: 100, nullable: true})
    photoProfil: string;

    @Column({length: 34, nullable: true})
    email: string;

    @OneToOne(() => Credential, {eager: true, onDelete: "CASCADE"})
    @JoinColumn({referencedColumnName: 'credential_id', name: 'credential_id'})
    credential_id: string;


}