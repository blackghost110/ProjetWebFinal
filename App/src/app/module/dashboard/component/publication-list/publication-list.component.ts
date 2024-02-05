import {Component, inject, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicationService} from "../../service/publication.service";
import {ProfilService} from "../../service/profil.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommentaireCreatePayload} from "../../data/payload/commentaire-create.payload";
import {CommentaireService} from "../../service/commentaire.service";
import {CommentaireCreateFormConfig} from "../../../../security/data";
import {JaimeCreatePayload} from "../../data/payload/jaime-create.payload";
import {JaimeService} from "../../service/jaime.service";



@Component({
  selector: 'app-publication-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.scss']
})
export class PublicationListComponent implements OnInit{

  @Input({required: true}) config!: CommentaireCreateFormConfig;


  readonly publicationService: PublicationService = inject(PublicationService);
  readonly profilService: ProfilService = inject(ProfilService);
  readonly commentaireService: CommentaireService = inject(CommentaireService)
  readonly jaimeService: JaimeService = inject(JaimeService);
  idPublicationChoisi: string | null = null;
  idPublicationChoisiJaime: string | null = null;


  ngOnInit(): void {
    this.publicationService.publicationList();
    this.profilService.profilGet();

  }



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

  afficherCommentaire(idPublication: string) {
    if (this.idPublicationChoisi === idPublication) {
      this.idPublicationChoisi = null;
    } else {
      this.idPublicationChoisi = idPublication;
      this.commentaireService.CommentaireList(idPublication);
    }
  }
  afficherLike(idPublication: string) {
      this.idPublicationChoisiJaime = idPublication;
      this.jaimePublication(idPublication);
      this.jaimeService.jaimePublicationList(idPublication);
  }
  supprimerPublication(idPublication: string): void {
    this.publicationService.deletePublication(idPublication);
    alert("Publication supprimée avec succès");
  }


  jaimePublication(idPublication: string) {
    const payload: JaimeCreatePayload = {
      credential_id: {},
      idPublication,
      ...this.config.formGroup.value
    };
    console.log('payload', payload);
    this.jaimeService.jaimeCreate(payload as JaimeCreatePayload).subscribe();
    this.jaimeService.jaimePublicationList(idPublication);
  }
}
