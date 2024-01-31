import {Exclude} from 'class-transformer';
import {CreateDateColumn, UpdateDateColumn} from 'typeorm';
export abstract class BaseEntity {

    @Exclude({ toPlainOnly: true }) //pas afficher cette donnee a l'appel
    @CreateDateColumn() //decorateur dit a nestjs, date seconde de creation
    created: Date;

    @Exclude({ toPlainOnly: true })
    @UpdateDateColumn()
    updated: Date;
}