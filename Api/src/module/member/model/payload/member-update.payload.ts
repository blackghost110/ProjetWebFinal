import {IsArray, IsBoolean, IsDate, IsEmail, IsNotEmpty, IsOptional, IsString, Length} from "class-validator";
import {MemberSubscription} from "../entity";
import {Address} from "@common/model";
import {ApiCodeResponse} from "@common/api/data/enum";
import {ApiProperty} from "@nestjs/swagger";

export class MemberUpdatePayload {
    @ApiProperty()
    @IsNotEmpty({message: ApiCodeResponse.MEMBER_PAYLOAD_MEMBER_ID_MANDATORY})
    @Length(26, 26,{message: ApiCodeResponse.MEMBER_PAYLOAD_MEMBER_ID_LENGTH_ERROR})
    member_id: string;

    @ApiProperty()
    @IsString({message: ApiCodeResponse.MEMBER_PAYLOAD_FIRSTNAME_IS_NOT_STRING})
    @IsOptional()
    @Length(1, 50, {message: ApiCodeResponse.MEMBER_PAYLOAD_FIRSTNAME_LENGTH_ERROR})
    firstname: string;

    @ApiProperty()
    @IsString({message: ApiCodeResponse.MEMBER_PAYLOAD_LASTNAME_IS_NOT_STRING})
    @IsOptional()
    @Length(1, 50, {message: ApiCodeResponse.MEMBER_PAYLOAD_LASTNAME_LENGTH_ERROR})
    lastname: string;

    @ApiProperty()
    @IsDate({message: ApiCodeResponse.MEMBER_PAYLOAD_BIRTHDATE_IS_NOT_VALID})
    @IsOptional()
    birthdate: Date;

    @ApiProperty()
    @IsEmail(undefined, {message: ApiCodeResponse.MEMBER_PAYLOAD_MAIL_IS_NOT_VALID})
    @IsOptional()
    @Length(1, 50, {message: ApiCodeResponse.MEMBER_PAYLOAD_MAIL_LENGTH_ERROR})
    mail: string;

    @ApiProperty()
    @IsOptional()
    @Length(1, 50, {message: ApiCodeResponse.MEMBER_PAYLOAD_PHONE_LENGTH_ERROR})
    phone: string;

    @ApiProperty()
    @IsOptional()
    @Length(1, 34, {message: ApiCodeResponse.MEMBER_PAYLOAD_IBAN_LENGTH_ERROR})
    iban: string;

    @ApiProperty()
    @IsOptional()
    @Length(1, 10, {message: ApiCodeResponse.MEMBER_PAYLOAD_ACTIVATION_CODE_LENGTH_ERROR})
    code_activation: string;

    @ApiProperty()
    @IsOptional()
    @IsArray({message: ApiCodeResponse.MEMBER_PAYLOAD_SUBSCRIPTION_NOT_VALID})
    subscriptions: MemberSubscription[];

    @ApiProperty()
    @IsOptional()
    address: Address

    @ApiProperty()
    @IsOptional()
    @IsBoolean({message:ApiCodeResponse.MEMBER_PAYLOAD_ACTIVE_INVALID})
    active: boolean
}