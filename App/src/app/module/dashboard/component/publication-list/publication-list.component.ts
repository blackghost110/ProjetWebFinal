import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicationService} from "../../service/publication.service";
import {ProfilService} from "../../service/profil.service";

@Component({
  selector: 'app-publication-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.scss']
})
export class PublicationListComponent {


    readonly publicationService: PublicationService = inject(PublicationService);
    readonly profilService: ProfilService = inject(ProfilService);


    ngOnInit(): void {
        this.publicationService.publicationList();
        this.profilService.profilGet();
        this.publicationService.publicationDetail();
    }


    // afficherCom(id_publication:string) ---> afficherCom(id_publication:string) ---> BACKEND :afficherCom(id_publication:string) WHERE id_publication = id_publication


}
