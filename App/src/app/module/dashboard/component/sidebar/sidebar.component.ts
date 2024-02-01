import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppNode} from "../../../../shared/routes/enum/node.enum";
import {TokenService} from "../../../../shared/api/service/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

    private readonly tokenService: TokenService = inject(TokenService);
    private readonly router: Router = inject(Router);

    logOut(): void {
        console.log('');
        this.tokenService.setToken({ token: '', refreshToken: '', isEmpty: true });
        this.router.navigate(["account/", AppNode.SIGN_IN]).then();
    }

    redirectProfile() {
        this.router.navigate(["dashboard/", AppNode.PROFILE]).then();
    }
}
