import {inject, Injectable} from '@angular/core';
import {SignInPayload} from "../data/payload";
import {Observable, of} from "rxjs";
import {SignUpPayload} from "../data/payload/sign-up.payload";
import {ApiService} from "../../shared/api/service/api.service";
import {ApiURI} from "../../shared/api/enum/api-uri";
import {ApiResponse} from "@shared";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private readonly api:ApiService = inject(ApiService);

  public signIn(payload: SignInPayload): Observable<ApiResponse> {
    return this.api.post(ApiURI.SIGN_IN, payload);
  }
  public signUp(payload: SignUpPayload):Observable<ApiResponse>{
    return this.api.post(ApiURI.SIGN_UP, payload);
  }
  public me():Observable<any>{
    return of(null)
  }



}
