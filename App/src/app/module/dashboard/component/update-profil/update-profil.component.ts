import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfilUpdateFormConfig} from "../../../../security/data";
import {ProfilService} from "../../service/profil.service";
import {ProfilUpdatePayload} from "../../data/payload/profil-update.payload";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-update-profil',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.scss']
})
export class UpdateProfilComponent {

  @Input({required: true}) config!: ProfilUpdateFormConfig;
  readonly profilService: ProfilService = inject(ProfilService);


  modifier() {
    const payload: ProfilUpdatePayload = {
      idProfil: "string",
      ...this.config.formGroup.value
    };
    console.log('payload', payload);
    this.profilService.profilUpdate(payload as ProfilUpdatePayload).subscribe();
    alert("Profil Modifié")
  }
}
