import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {ApiService} from "../../../shared/api/service/api.service";
import {Observable, tap} from "rxjs";
import {ApiURI} from "../../../shared/api/enum/api-uri";
import {CommentaireCreatePayload} from "../data/payload/commentaire-create.payload";
import {ApiResponse} from "@shared";
import {CommentaireDto} from "../data/model/commentaire.dto";


@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  private readonly api: ApiService = inject(ApiService);



  listComsPubli$:WritableSignal<CommentaireDto[]> = signal([]);
  listComsUser$:WritableSignal<CommentaireDto[]> = signal([]);

  dernierComs$:WritableSignal<{
    idPublication: string;
    created: string;
    idCommentaire: string;
    contenu: string;
    credential_id: { username: string }
  }> = signal( {
    credential_id: {username: ""},
    idPublication: "",
    idCommentaire: "",
    created: "",
    contenu: ""
  });

  //publicationUsername$:WritableSignal<CredentialDto> = signal({username: ""});

  public commentaireCreate(payload: CommentaireCreatePayload): Observable<any> {
    return this.api.post(ApiURI.COMMENTAIRE_CREATE, payload);
  }

  public CommentaireList(idPublication: string): void {
    this.api.get(`${ApiURI.COMMENTAIRE_LIST}/${idPublication}`).pipe(tap((response:ApiResponse)=>{
      this.listComsPubli$.set(response.data);
      console.log(response);
    })).subscribe()
  }

  public CommentaireListUser(): void {
    this.api.get(ApiURI.COMMENTAIRE_LIST_USER).pipe(tap((response:ApiResponse)=>{
      this.listComsUser$.set(response.data);
      console.log(response);
    })).subscribe()
  }

  public commentaireDernier(): void {
    this.api.get(ApiURI.COMMENTAIRE_LAST).pipe(tap((response:ApiResponse)=>{
      this.dernierComs$.set(response.data);
      console.log(response);
    })).subscribe()
  }

}
