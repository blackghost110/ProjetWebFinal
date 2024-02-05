import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {Observable, tap} from "rxjs";
import {ApiURI} from "../../../shared/api/enum/api-uri";
import {PublicationCreatePayload} from "../data/payload/publication-create.payload";
import {ApiService} from "../../../shared/api/service/api.service";
import {PublicationDto} from "../model/publication.dto";
import {ApiResponse} from "@shared";


@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private readonly api: ApiService = inject(ApiService);


  // Signal
  list$:WritableSignal<PublicationDto[]> = signal([]);
  listPubliUser$:WritableSignal<PublicationDto[]> = signal([]);
  //dernierPubli$:WritableSignal<PublicationDto> = signal([]);

  dernierPubli$:WritableSignal<{
    idPublication: string;
    created: string;
    typePublication: string;
    contenu: string;
    credential_id: { username: string }
  }> = signal( {
    credential_id: {username: ""},
    idPublication: "",
    created: "",
    contenu: "",
    typePublication: ""
  });


  //publicationUsername$:WritableSignal<CredentialDto> = signal({username: ""});

  public publicationCreate(payload: PublicationCreatePayload): Observable<any> {
    return this.api.post(ApiURI.PUBLICATION_CREATE, payload);
  }
  public publicationList(): void {
    this.api.get(ApiURI.PUBLICATION_LIST).pipe(tap((response:ApiResponse)=>{
      this.list$.set(response.data);
      console.log(response);
    })).subscribe()
  }

  public getPublicationListUser():void {
    this.api.get(ApiURI.PUBLICATION_LIST_USER).pipe(tap((response:ApiResponse)=>{
      this.listPubliUser$.set(response.data);
      console.log(response);
    })).subscribe();
  }

  public publicationDernier(): void {
    this.api.get(ApiURI.PUBLICATION_LAST).pipe(tap((response:ApiResponse)=>{
        this.dernierPubli$.set(response.data);
        console.log(response);
      })).subscribe()
  }

  public deletePublication(idPublication: string):void{
    this.api.delete(`${ApiURI.PUBLICATION_DELETE}/${idPublication}`).subscribe();
  }
}




