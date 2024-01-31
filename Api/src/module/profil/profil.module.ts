import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Commentaire, Jaime, Profil, Publication} from "./model/entity";
import {ProfilController} from "./controller/profil.controller";
import {PublicationController} from "./controller/publication.controller";
import {CommentaireController} from "./controller/commentaire.controller";
import {JaimeController} from "./controller/jaime.controller";
import {ProfilService} from "./service/profil.service";
import {PublicationService} from "./service/publication.service";
import {CommentaireService} from "./service/commentaire.service";
import {JaimeService} from "./service/jaime.service";

@Module({
    imports: [TypeOrmModule.forFeature([Profil, Publication, Commentaire, Jaime])],
    controllers: [ProfilController, PublicationController, CommentaireController, JaimeController],
    providers: [ProfilService, PublicationService, CommentaireService, JaimeService]
})
export class ProfilModule {}
