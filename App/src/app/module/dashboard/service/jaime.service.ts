import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {Observable, tap} from "rxjs";
import {ApiURI} from "../../../shared/api/enum/api-uri";
import {ApiService} from "../../../shared/api/service/api.service";
import {JaimeCreatePayload} from "../data/payload/jaime-create.payload";
import {ApiResponse} from "@shared";
import {JaimeDto} from "../data/model/jaime.dto";

@Injectable({
  providedIn: 'root'
})
export class JaimeService {

  private readonly api: ApiService = inject(ApiService);

  listJaimePubli$:WritableSignal<JaimeDto[]> = signal([]);
  dernierLike$:WritableSignal<{
    idLike: string;
    idPublication: string;
    idCommentaire: string;
    created: string;
    credential_id: { username: string }
  }> = signal( {
    credential_id: {username: ""},
    idLike: "",
    idPublication: "",
    idCommentaire: "",
    created: ""
  });

  public jaimeCreate(payload: JaimeCreatePayload): Observable<any> {
    return this.api.post(ApiURI.JAIME_CREATE, payload);
  }

  public jaimePublicationList(idPublication: string): void {
    this.api.get(`${ApiURI.JAIME_PUBLICATION_LIST}/${idPublication}`).pipe(tap((response:ApiResponse)=>{
      this.listJaimePubli$.set(response.data);
      console.log(response);
    })).subscribe()
  }

  public jaimeDernier(): void {
    this.api.get(ApiURI.JAIME_LAST).pipe(tap((response:ApiResponse)=>{
      this.dernierLike$.set(response.data);
      console.log(response);
    })).subscribe()
  }


}
