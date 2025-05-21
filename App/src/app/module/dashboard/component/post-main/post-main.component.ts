import {Component, inject, Input, OnInit, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicationCreatePayload} from "../../data/payload/publication-create.payload";
import {PublicationCreateFormConfig} from "../../../../security/data";
import {PublicationService} from "../../service/publication.service";
import {ReactiveFormsModule} from "@angular/forms";
import {ProfilService} from "../../service/profil.service";



@Component({
  selector: 'app-post-main',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-main.component.html',
  styleUrls: ['./post-main.component.scss']
})
export class PostMainComponent implements OnInit {

  readonly publicationService: PublicationService = inject(PublicationService);
  readonly profilService: ProfilService = inject(ProfilService);

  @Input({required: true}) config!: PublicationCreateFormConfig;
  error$: WritableSignal<string> = signal('');

  ngOnInit() {
    this.profilService.getProfilUser();
  }


  save(): void {
    this.error$.set('');
    const payload: PublicationCreatePayload = {
      typePublication: 'text',
      posteur: {},
      ...this.config.formGroup.value
    };

    console.log('payload', payload);
    this.publicationService.publicationCreate(payload as PublicationCreatePayload).subscribe();
    alert("Publication Postée")
    window.location.reload();
  }



}
