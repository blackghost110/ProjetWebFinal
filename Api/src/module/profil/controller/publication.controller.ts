import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {Publication} from "../model/entity";
import {PublicationService} from "../service/publication.service";
import {PublicationCreatePayload} from "../model/payload/publication-create.payload";
import {User} from "@common/config";
import {Credential} from "../../../security";

@ApiBearerAuth('access-token')
@ApiTags('Publication')
@Controller('publication')
export class PublicationController {
    constructor(private readonly service: PublicationService) {
    }
    @Post('create')
    create(@User() user: Credential, @Body() payload: PublicationCreatePayload): Promise<Publication> {
        return this.service.create(user, payload);
    }
    @Get('detail/:id')
    detail(@Param('id') id: string): Promise<Publication> {
        return this.service.detail(id);
    }

    @Get('publication-detail')
    publicationDetail(@User() user :  Credential): Promise<Publication[]> {
        return this.service.publicationDetail(user.credential_id);
    }
    @Get('list')
    getAll(): Promise<Publication[]> {
        return this.service.getAll();
    }
    @Delete('delete/:id')
    delete(@Param('id') id: string): Promise<void> {
        return this.service.delete(id);
    }
}