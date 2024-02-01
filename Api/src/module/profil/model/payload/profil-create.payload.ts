import { IsEmail, IsOptional, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";


export class ProfilCreatePayload {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 50)
    nom: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 50)
    prenom: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 300)
    description: string;

    @ApiProperty()
    @IsOptional()
    @Length(1, 50)
    status: string;

    @ApiProperty()
    @IsOptional()
    @Length(1, 50)
    photoProfil: string;

    @ApiProperty()
    @IsEmail()
    @IsOptional()
    @Length(1, 34)
    email: string;

    @ApiProperty()
    @IsOptional()
    credential_id: string;

}