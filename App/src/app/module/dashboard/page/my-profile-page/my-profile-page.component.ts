import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from "../../component/sidebar/sidebar.component";
import {ProfilService} from "../../service/profil.service";
import {ReactiveFormsModule} from "@angular/forms";
import {ProfilUpdateFormConfig} from "../../../../security/data";
import {UpdateProfilComponent} from "../../component/update-profil/update-profil.component";
import {ProfilFormUtilsService} from "../../service/profil-form-utils.service";

@Component({
  selector: 'app-my-profile-page',
  standalone: true,
  imports: [CommonModule, SidebarComponent, ReactiveFormsModule, UpdateProfilComponent],
  templateUrl: './my-profile-page.component.html',
  styleUrls: ['./my-profile-page.component.scss']
})
export class MyProfilePageComponent implements OnInit{

  readonly config: ProfilUpdateFormConfig = ProfilFormUtilsService.profilUpdateFormConfig();

  ngOnInit(): void {
    this.profilService.profilGet();
  }
  readonly profilService: ProfilService = inject(ProfilService);



/*


  modifier() {
    const payload: ProfilUpdatePayload = {
      ...this.config.formGroup.value
    };
    console.log('payload', payload);
    this.profilService.profilUpdate(payload as ProfilUpdatePayload).subscribe();
    alert("Profil Modifié")
  }*/

}
