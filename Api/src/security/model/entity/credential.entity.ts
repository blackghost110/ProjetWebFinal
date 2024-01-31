import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';
import {Exclude} from "class-transformer";

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



}