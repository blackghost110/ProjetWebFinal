import {IsArray, IsBoolean, IsDate, IsEmail, IsOptional, IsString, Length} from "class-validator";
import {MemberSubscription} from "../entity";
import {ApiCodeResponse} from "@common/api/data/enum";
import {ApiProperty} from "@nestjs/swagger";
import {Address} from "@common/model";

export class MemberCreatePayload {
    @ApiProperty()
    @IsString({message : ApiCodeResponse.CREDENTIAL_DELETE_ERROR})
    @IsOptional()
    @Length(1, 50)
    firstname: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 50)
    lastname: string;

    @ApiProperty()
    @IsDate()
    @IsOptional()
    birthdate: Date;

    @ApiProperty()
    @IsEmail()
    @IsOptional()
    @Length(1, 50)
    mail: string;

    @ApiProperty()
    @IsOptional()
    @Length(1, 50)
    phone: string;

    @ApiProperty()
    @IsOptional()
    @Length(1, 34)
    iban: string;

    @ApiProperty()
    @IsOptional()
    @Length(1, 10)
    code_activation: string;

    @ApiProperty()
    @IsOptional()
    @IsArray()
    subscriptions: MemberSubscription[];

    @ApiProperty()
    @IsOptional()
    address: Address

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    active: boolean
}