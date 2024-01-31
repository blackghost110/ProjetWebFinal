import {
    Column,
    CreateDateColumn,
    Entity, JoinColumn, OneToMany, OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import {Exclude} from "class-transformer";
import {Commentaire, Jaime, Profil, Publication} from "../../../module/profil/model/entity";
@Entity()
export class Credential {
    @PrimaryGeneratedColumn("uuid")
    credential_id: string;

    @Column({nullable: false, unique: true})
    username: string;

    @Exclude({ toPlainOnly: true})
    @Column({nullable: true})
    password: string;

    @Column({nullable: false, unique: true})
    mail: string;

    @Column({default: true})
    active: boolean;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @OneToOne(() => Profil, {cascade: true, eager: true})
    @JoinColumn({referencedColumnName: 'idProfil', name: 'idProfil_fk'})
    profil: Profil;

    @OneToMany(
        ()=>Publication, (publication)=> publication.posteur, {cascade:true,eager:true})
    publications:Publication[];

    @OneToMany(
        ()=>Commentaire, (commentaire)=> commentaire.commenteur, {cascade:true,eager:true})
    commentaires:Commentaire[];

    @OneToMany(
        ()=>Jaime, (jaime)=> jaime.jaimeur, {cascade:true,eager:true})
    jaimes:Jaime[];

}