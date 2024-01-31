import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';


import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';
import { SecurityService } from './service/security.service';
import {RefreshTokenPayload, SignInPayload, SignupPayload} from "./model";
import {Public, User} from "@common/config/metadata";
import { Credential} from "./model";

@ApiBearerAuth('access-token')
@ApiTags('Account')
@Controller('account')
export class SecurityController {
    constructor(private readonly service: SecurityService) {}

    // ici Post = demande d'information par un @Body (car information sensible, sans body lien = /account/signin?username=username&pass...)
    @Public()
    @Post('signin')
    public signIn(@Body() payload: SignInPayload) {
        return this.service.signIn(payload);
    }
    @Public()
    @Post('signup')
    public signUp(@Body() payload: SignupPayload) {
        return this.service.signup(payload);
    }
    @Public()
    @Post('refresh')
    public refresh(@Body() payload: RefreshTokenPayload) {
        return this.service.refresh(payload);
    }
    @Get('me')
    public me(@User() user: Credential) {
        return user;
    }
    @Delete('delete/:id')
    public delete(@Param('id') id: string) {
        return this.service.delete(id);
    }
}



