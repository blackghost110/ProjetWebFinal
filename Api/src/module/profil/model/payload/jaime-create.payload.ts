import {IsOptional} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Commentaire, Publication} from "../entity";
import {Credential} from "../../../../security";


export class JaimeCreatePayload {
    @ApiProperty()
    @IsOptional()
    jaimeur: Credential;

    @ApiProperty()
    @IsOptional()
    publication: Publication;

    @ApiProperty()
    @IsOptional()
    commentaire: Commentaire;
}