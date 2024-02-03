import {inject, Injectable, signal, WritableSignal} from "@angular/core";
import {ApiService} from "../../../shared/api/service/api.service";
import {Observable, tap} from "rxjs";
import {ApiURI} from "../../../shared/api/enum/api-uri";
import {ApiResponse} from "@shared";
import {ProfilDto} from "../model/profil.dto";
import {ProfilUpdatePayload} from "../data/payload/profil-update.payload";

@Injectable({
    providedIn: 'root'
})
export class ProfilService {

    private readonly api: ApiService = inject(ApiService);


    // Signal
    profil$:WritableSignal<ProfilDto> = signal( {
      credential_id: {username: ""},
      nom: "",
      prenom: "",
      description: "",
      photoProfil: "",
      status: "",
      email: "",
      idProfil: ""
    });

    public profilGet(): void {
        this.api.get(ApiURI.PROFIL_LIST).pipe(
          tap((response:ApiResponse)=>{
            this.profil$.set(response.data);
            console.log(response);
        })).subscribe()
    }

  public profilUpdate(payload: ProfilUpdatePayload): Observable<any> {
    return this.api.put(ApiURI.PROFIL_UPDATE_USER, payload);
  }

}
