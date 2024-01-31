import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormFieldEnum, SignInUpField, SignInUpFormConfig, SignInUpFormType} from "../data";

@Injectable({
  providedIn: 'root'
})
export class SecurityFormUtilsService {

  public static signInFormGroup(): FormGroup {
    return new FormGroup<any>({
      username: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
      password: new FormControl<string>('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    })
  }

  public static signUpFormGroup(): FormGroup {
    return new FormGroup<any>({
      [FormFieldEnum.USERNAME]:     new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
      [FormFieldEnum.PASSWORD]:     new FormControl<string>('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      [FormFieldEnum.CONFIRMATION]: new FormControl<string>('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      [FormFieldEnum.MAIL]:        new FormControl<string>('', [Validators.required, Validators.email])
    })
  }

  public static signInFormConfig(): SignInUpFormConfig {
    const formGroup: FormGroup = SecurityFormUtilsService.signInFormGroup()
    return {
      formGroup,
      type: SignInUpFormType.SIGN_IN,
      fields:[
        SecurityFormUtilsService.getUsernameField(formGroup),
        SecurityFormUtilsService.getPasswordField(formGroup) ]
    }
  }

  public static signUpFormConfig(): SignInUpFormConfig {
    const formGroup: FormGroup = SecurityFormUtilsService.signUpFormGroup()
    return {
      formGroup,
      type: SignInUpFormType.SIGN_UP,
      fields:[
        SecurityFormUtilsService.getUsernameField(formGroup),
        SecurityFormUtilsService.getPasswordField(formGroup),
        SecurityFormUtilsService.getConfirmationField(formGroup),
        SecurityFormUtilsService.getMailField(formGroup)
      ]
    }
  }




  public static getUsernameField(formGroup: FormGroup):SignInUpField {
    return {
      label: 'username',
      inputType: 'text',
      placeHolder: 'Entrez votre identifiant',
      control: SecurityFormUtilsService.getFormControl(formGroup, FormFieldEnum.USERNAME)
    }
  }
  public static getPasswordField(formGroup: FormGroup):SignInUpField {
    return {
      label: 'Mot de passe',
      inputType: 'password',
      placeHolder: 'Entrez votre mot de passe',
      control: SecurityFormUtilsService.getFormControl(formGroup, FormFieldEnum.PASSWORD)
    }
  }
  public static getConfirmationField(formGroup: FormGroup):SignInUpField {
    return {
      label: 'Confirmation',
      inputType: 'password',
      placeHolder: 'Entrez votre confirmation',
      control: SecurityFormUtilsService.getFormControl(formGroup, FormFieldEnum.CONFIRMATION)
    }
  }
  public static getMailField(formGroup: FormGroup):SignInUpField {
    return {
      label: 'Mail',
      inputType: 'email',
      placeHolder: 'Entrez votre email',
      control: SecurityFormUtilsService.getFormControl(formGroup, FormFieldEnum.MAIL)
    }
  }

  public static getFormControl(formGroup: FormGroup, controlName: string): FormControl {
    return formGroup.get(controlName) as FormControl
  }

}
