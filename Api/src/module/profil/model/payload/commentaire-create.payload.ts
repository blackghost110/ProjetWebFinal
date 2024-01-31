import {IsOptional, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Jaime, Publication} from "../entity";
import {Credential} from "../../../../security";


export class CommentaireCreatePayload {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 50)
    contenu: string;

    @ApiProperty()
    @IsOptional()
    commenteur: Credential

    @ApiProperty()
    @IsOptional()
    publication: Publication;

    @ApiProperty()
    @IsOptional()
    jaimes:Jaime[];
}