import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {Commentaire} from "../model/entity";
import {CommentaireCreatePayload} from "../model/payload/commentaire-create.payload";
import {CommentaireService} from "../service/commentaire.service";
import {User} from "@common/config";
import {Credential} from "../../../security";

@ApiBearerAuth('access-token')
@ApiTags('Commentaire')
@Controller('commentaire')
export class CommentaireController {
    constructor(private readonly service: CommentaireService) {
    }
    @Post('create')
    create(@User() user: Credential, @Body() payload: CommentaireCreatePayload): Promise<Commentaire> {
        return this.service.create(user, payload);
    }
    @Get('detail/:id')
    detail(@Param('id') id: string): Promise<Commentaire> {
        return this.service.detail(id);
    }
    @Get('list')
    getAll(): Promise<Commentaire[]> {
        return this.service.getAll();
    }
    @Get('list/:idPublication')
    getAllByIdPublication(@Param('idPublication') idPublication: string): Promise<Commentaire[]> {
        return this.service.getAllByIdPublication(idPublication);
    }
    @Get('list-user')
    getAllByUser(@User() user :  Credential): Promise<Commentaire[]> {
        return this.service.getAllByUser(user.credential_id);
    }
    @Delete('delete/:id')
    delete(@Param('id') id: string): Promise<void> {
        return this.service.delete(id);
    }
}