import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {Observable, tap} from "rxjs";
import {ApiURI} from "../../../shared/api/enum/api-uri";
import {PublicationCreatePayload} from "../data/payload/publication-create.payload";
import {ApiService} from "../../../shared/api/service/api.service";
import {PublicationDto} from "../../model/publication.dto";
import {ApiResponse} from "@shared";
import {CredentialDto} from "../../model/credential.dto";

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private readonly api: ApiService = inject(ApiService);


  // Signal
  list$:WritableSignal<PublicationDto[]> = signal([]);

  publicationUsername$:WritableSignal<CredentialDto> = signal({username: ""});

  public publicationCreate(payload: PublicationCreatePayload): Observable<any> {
    return this.api.post(ApiURI.PUBLICATION_CREATE, payload);
  }
  public publicationList(): void {
    this.api.get(ApiURI.PUBLICATION_LIST).pipe(tap((response:ApiResponse)=>{
      this.list$.set(response.data);
      console.log(response);
    })).subscribe()
  }

  public publicationDetail():void {
    this.api.get(ApiURI.PUBLICATION_DETAIL).pipe(tap((response:ApiResponse)=>{
      //améliorer voir les notes de cours
      this.publicationUsername$.set(response.data);
      //console.log(response);
    })).subscribe();
  }



}
