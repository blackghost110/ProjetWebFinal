import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicationService} from "../../service/publication.service";
import {ProfilService} from "../../service/profil.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommentaireCreatePayload} from "../../data/payload/commentaire-create.payload";
import {CommentaireService} from "../../service/commentaire.service";
import {CommentaireCreateFormConfig} from "../../../../security/data";



@Component({
  selector: 'app-publication-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.scss']
})
export class PublicationListComponent {

  @Input({required: true}) config!: CommentaireCreateFormConfig;


  readonly publicationService: PublicationService = inject(PublicationService);
  readonly profilService: ProfilService = inject(ProfilService);
  readonly commentaireService: CommentaireService = inject(CommentaireService)



  ngOnInit(): void {
    this.publicationService.publicationList();
    this.profilService.profilGet();
    this.publicationService.publicationDetail();


  }



    // afficherCom(id_publication:string) ---> afficherCom(id_publication:string) ---> BACKEND :afficherCom(id_publication:string) WHERE id_publication = id_publication




  Commenter(idPublication: string) {
    const payload: CommentaireCreatePayload = {
      credential_id: {},
      idPublication,
      ...this.config.formGroup.value
    };
    console.log('payload', payload);
    this.commentaireService.commentaireCreate(payload as CommentaireCreatePayload).subscribe();
    alert("Commentaire Posté")

  }




}
