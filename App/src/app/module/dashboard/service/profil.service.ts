import {inject, Injectable, signal, WritableSignal} from "@angular/core";
import {ApiService} from "../../../shared/api/service/api.service";
import {tap} from "rxjs";
import {ApiURI} from "../../../shared/api/enum/api-uri";
import {ApiResponse} from "@shared";
import {ProfilDto} from "../../model/profil.dto";

@Injectable({
    providedIn: 'root'
})
export class ProfilService {

    private readonly api: ApiService = inject(ApiService);


    // Signal
    Profil$:WritableSignal<ProfilDto> = signal( {
        credential_id: {username: ""},
        photoProfil: "",
        description: "",
        status: "",
        email: "",
        nom: "",
        prenom: "",
        idProfil: ""
    });

    public profilGet(): void {
        this.api.get(ApiURI.PROFIL_LIST).pipe(tap((response:ApiResponse)=>{
            this.Profil$.set(response.data);
            console.log(response);
        })).subscribe()
    }



}
