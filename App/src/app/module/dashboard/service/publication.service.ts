import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ApiURI} from "../../../shared/api/enum/api-uri";
import {PublicationCreatePayload} from "../data/payload/publication-create.payload";
import {ApiService} from "../../../shared/api/service/api.service";

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private readonly api: ApiService = inject(ApiService);

  public publicationCreate(payload: PublicationCreatePayload): Observable<any> {
    return this.api.post(ApiURI.PUBLICATION, payload);
  }



}
