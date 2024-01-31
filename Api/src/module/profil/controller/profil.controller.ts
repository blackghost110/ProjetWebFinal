import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import { ProfilService } from '../service/profil.service';
import {Profil} from "../model/entity";
import {ProfilCreatePayload} from "../model/payload/profil-create.payload";
import {ProfilUpdatePayload} from "../model/payload/profil-update.payload";

@ApiBearerAuth('access-token')
@ApiTags('Profil')
@Controller('profil')
export class ProfilController {
    constructor(private readonly service: ProfilService) {
    }
    @Post('create')
    create(@Body() payload: ProfilCreatePayload): Promise<Profil> {
        return this.service.create(payload);
    }
    @Put('update')
    update(@Body() payload: ProfilUpdatePayload): Promise<Profil> {
        return this.service.update(payload);
    }
    @Get('detail/:id')
    detail(@Param('id') id: string): Promise<Profil> {
        return this.service.detail(id);
    }
    @Get('list')
    getAll(): Promise<Profil[]> {
        return this.service.getAll();
    }
    @Delete('delete/:id')
    delete(@Param('id') id: string): Promise<void> {
        return this.service.delete(id);
    }
}