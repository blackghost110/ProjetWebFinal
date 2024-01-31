import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignInUpFormComponent} from "../../component/sign-in-up-form/sign-in-up-form.component";
import {SecurityFormUtilsService} from "../../service/security-form-utils.service";
import {SignInUpFormConfig} from "../../data";

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [CommonModule, SignInUpFormComponent],
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent {

  readonly config: SignInUpFormConfig = SecurityFormUtilsService.signUpFormConfig();
}
