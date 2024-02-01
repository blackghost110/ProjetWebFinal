import { inject, Injectable} from '@angular/core';
import {SignInPayload} from "../data/payload";
import {Observable, tap} from "rxjs";
import {SignUpPayload} from "../data/payload/sign-up.payload";
import {ApiService} from "../../shared/api/service/api.service";
import {ApiURI} from "../../shared/api/enum/api-uri";
import {ApiResponse} from "@shared";
import {TokenService} from "../../shared/api/service/token.service";
import {Router} from "@angular/router";
import {AppNode} from "../../shared/routes/enum/node.enum";
import {Token} from "../../shared/api/model/token";


@Injectable({
  providedIn: 'root'
})

export class SecurityService {


  private readonly api: ApiService = inject(ApiService);
  private readonly tokenService: TokenService = inject(TokenService);
  private readonly router: Router = inject(Router);

  constructor() {}

  public signIn(payload: SignInPayload): Observable<ApiResponse> {
    return this.api.post(ApiURI.SIGN_IN, {...payload, socialLogin: false}).pipe(
        tap((response: ApiResponse) => {
          //if success then goToDashboard and save token
          if (response.result) {
            this.tokenService.setToken({...response.data, isEmpty: false});
          }
        })
    );
  }

  public signUp(payload: SignUpPayload): Observable<ApiResponse> {
    return this.api.post(ApiURI.SIGN_UP, {...payload, socialLogin: false}).pipe(
        tap((response: ApiResponse) => {
          //if success then goToDashboard and save token
          if (response.result) {
            this.tokenService.setToken({...response.data, isEmpty: false});
          }
        })
    );
  }

  public logOut(): void {
    this.tokenService.setToken({token: '', refreshToken: '', isEmpty: true});
  }

  public me() {
    this.api.get(ApiURI.ME).pipe(tap((response: ApiResponse) => {
      if (response.result) {
        //this.account$.set(this.accountUtils.fromDTO(response.data)); // COMMENTAIREEEEEEEEEE
        //http://localhost:4200/landing/01HGR2MZ0WE5QS7P8W14ARP6QR
        if (!window.location.pathname.startsWith('/' + AppNode.REDIRECT_TO_AUTHENTICATED)
            && !window.location.pathname.startsWith('/landing')) {
          this.router.navigate([AppNode.REDIRECT_TO_AUTHENTICATED]).then();
        }
      } else {
        this.router.navigate([AppNode.REDIRECT_TO_PUBLIC]).then();
      }
    })).subscribe();
  }

  private handleAuthenticatedChange(token: Token): void {
    if (!token.isEmpty) {
      this.me();
    } else {
      this.router.navigate([AppNode.REDIRECT_TO_PUBLIC]).then();
    }
  }





}




