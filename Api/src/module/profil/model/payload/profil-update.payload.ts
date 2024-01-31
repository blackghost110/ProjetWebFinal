import {ApiCodeResponse} from "@common/api/data/enum";
import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsOptional} from "class-validator";


export class ProfilUpdatePayload {
    @ApiProperty()
    @IsNotEmpty({message: ApiCodeResponse.MEMBER_PAYLOAD_MEMBER_ID_MANDATORY})
    idProfil: string;

    @ApiProperty()
    @IsOptional()
    nom: string;

    @ApiProperty()
    @IsOptional()
    prenom: string;

    @ApiProperty()
    @IsOptional()
    description: string;

    @ApiProperty()
    @IsOptional()
    status: string;

    @ApiProperty()
    @IsOptional()
    photoProfil: string;

    @ApiProperty()
    @IsOptional()
    email: string;

}