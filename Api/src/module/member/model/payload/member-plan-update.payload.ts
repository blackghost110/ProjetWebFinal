import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";


export class MemberPlanUpdatePayload {
    @ApiProperty()
    @IsNotEmpty()
    @Length(26, 26)
    member_plan_id: string;
/*
        @IsOptional()
        @IsEnum(MemberPlanType)
        type: MemberPlanType;*/

    @ApiProperty()
    @IsNotEmpty()
    @IsOptional()
    @Length(1, 80)
    title: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    description: string;

    @ApiProperty()
    @IsOptional()
    @Length(1, 40)
    picture: string;

    @ApiProperty()
    @IsNumber()
    @ IsOptional ()
    price: number;

    @ApiProperty()
    @IsNumber()
    @ IsOptional ()
    nb_month: number;
/*
        @IsOptional()
        @IsEnum(MemberPlanPaymentType)
        payment: MemberPlanPaymentType;*/

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    cumulative: boolean;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    nb_training: number;
/*
        @IsOptional()
        @IsEnum(MemberPlanFreqTrainingType)
        freq_training: MemberPlanFreqTrainingType;*/
}