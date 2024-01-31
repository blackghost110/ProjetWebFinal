import {FormControl, FormGroup} from "@angular/forms";
import {PublicationCreateType, SignInUpFormType} from "../enum";

export interface SignInUpFormConfig {
  formGroup: FormGroup;
  type: SignInUpFormType,
  fields: SignInUpField[];
}

export interface SignInUpField {
  label: string;
  placeHolder: string;
  inputType: string;
  control: FormControl;
}

export interface PublicationCreateFormConfig {
  formGroup: FormGroup;
  type: PublicationCreateType,
  fields: PublicationCreateField[];
}

export interface PublicationCreateField {
  placeHolder: string;
  inputType: string;
  control: FormControl;
}
