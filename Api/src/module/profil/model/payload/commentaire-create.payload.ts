import {IsOptional, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";



export class CommentaireCreatePayload {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 500)
    contenu: string;

    @ApiProperty()
    @IsOptional()
    credential_id: string;

    @ApiProperty()
    @IsOptional()
    idPublication: string;


}