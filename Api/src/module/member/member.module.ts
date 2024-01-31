import { Module } from '@nestjs/common';
import { MemberService } from './service/member.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { MemberController } from './controller/member.controller';
import {Address} from "@common/model";
import { MemberPlanService } from './service/member-plan.service';
import {Member, MemberPlan, MemberSubscription} from "./model/entity";
import {MemberPlanController} from "./controller/member-plan.controller";


@Module({
  imports: [TypeOrmModule.forFeature([Member, MemberPlan, MemberSubscription, Address])],
  controllers: [MemberController, MemberPlanController],
  providers: [MemberPlanService, MemberService]
})
export class MemberModule {}
