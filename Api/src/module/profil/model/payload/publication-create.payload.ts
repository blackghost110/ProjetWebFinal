import {IsOptional, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Credential} from "../../../../security";

export class PublicationCreatePayload {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 300)
    contenu: string;

    @ApiProperty()
    @IsOptional()
    @Length(1, 50)
    typePublication: string;

    @ApiProperty()
    @IsOptional()
    posteur: Credential

}