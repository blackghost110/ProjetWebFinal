import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {Commentaire, Jaime} from "../model/entity";
import {JaimeCreatePayload} from "../model/payload/jaime-create.payload";
import {JaimeService} from "../service/jaime.service";
import {User} from "@common/config";
import {Credential} from "../../../security";

@ApiBearerAuth('access-token')
@ApiTags('Jaime')
@Controller('jaime')
export class JaimeController {
    constructor(private readonly service: JaimeService) {
    }
    @Post('create')
    create(@User() user: Credential, @Body() payload: JaimeCreatePayload): Promise<Jaime> {
        return this.service.create(user, payload);
    }
    @Get('detail/:id')
    detail(@Param('id') id: string): Promise<Jaime> {
        return this.service.detail(id);
    }
    @Get('list')
    getAll(): Promise<Jaime[]> {
        return this.service.getAll();
    }
    @Get('list/:idPublication')
    getAllByIdPublication(@Param('idPublication') idPublication: string): Promise<Jaime[]> {
        return this.service.getAllByIdPublication(idPublication);
    }
    @Delete('delete/:id')
    delete(@Param('id') id: string): Promise<void> {
        return this.service.delete(id);
    }
}