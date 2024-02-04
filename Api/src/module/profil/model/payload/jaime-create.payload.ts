import {IsOptional} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Commentaire, Publication} from "../entity";
import {Credential} from "../../../../security";


export class JaimeCreatePayload {
    @ApiProperty()
    @IsOptional()
    credential_id: string;

    @ApiProperty()
    @IsOptional()
    idPublication: string;

    @ApiProperty()
    @IsOptional()
    idCommentaire: string;
}