import {Component, inject, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from "../../component/sidebar/sidebar.component";
import {PublicationService} from "../../service/publication.service";
import {ProfilService} from "../../service/profil.service";
import {CommentaireService} from "../../service/commentaire.service";
import {ReactiveFormsModule} from "@angular/forms";
import {CommentaireCreatePayload} from "../../data/payload/commentaire-create.payload";
import {ProfilUpdatePayload} from "../../data/payload/profil-update.payload";
import {ProfilUpdateFormConfig, SignInUpFormConfig} from "../../../../security/data";

@Component({
  selector: 'app-my-profile-page',
  standalone: true,
  imports: [CommonModule, SidebarComponent, ReactiveFormsModule],
  templateUrl: './my-profile-page.component.html',
  styleUrls: ['./my-profile-page.component.scss']
})
export class MyProfilePageComponent implements OnInit{

  @Input({required: true}) config!: ProfilUpdateFormConfig;
  readonly profilService: ProfilService = inject(ProfilService);

  ngOnInit(): void {
    this.profilService.profilGet();

  }

  modifier() {
    const payload: ProfilUpdatePayload = {

      ...this.config.formGroup.value
    };
    console.log('payload', payload);
    this.profilService.profilUpdate(payload as ProfilUpdatePayload).subscribe();
    alert("Profil Modifié")

  }

}
