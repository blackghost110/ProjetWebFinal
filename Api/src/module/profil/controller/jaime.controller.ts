import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {Jaime} from "../model/entity";
import {JaimeCreatePayload} from "../model/payload/jaime-create.payload";
import {JaimeService} from "../service/jaime.service";

@ApiBearerAuth('access-token')
@ApiTags('Jaime')
@Controller('jaime')
export class JaimeController {
    constructor(private readonly service: JaimeService) {
    }
    @Post('create')
    create(@Body() payload: JaimeCreatePayload): Promise<Jaime> {
        return this.service.create(payload);
    }
    @Get('detail/:id')
    detail(@Param('id') id: string): Promise<Jaime> {
        return this.service.detail(id);
    }
    @Get('list')
    getAll(): Promise<Jaime[]> {
        return this.service.getAll();
    }
    @Delete('delete/:id')
    delete(@Param('id') id: string): Promise<void> {
        return this.service.delete(id);
    }
}