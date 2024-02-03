import {FormControl, FormGroup} from "@angular/forms";
import {ProfilFormType, PublicationCreateType, SignInUpFormType} from "../enum";

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

export interface CommentaireCreateFormConfig {
  formGroup: FormGroup;
  //type: CommentaireCreateType,
  fields: CommentaireCreateField[];
}

export interface CommentaireCreateField {
  control: FormControl;
}

export interface ProfilUpdateFormConfig {
  formGroup: FormGroup;
  type: ProfilFormType,
  fields: ProfilUpdateField[];
}

export interface ProfilUpdateField {
  label: string;
  placeHolder: string;
  inputType: string;
  control: FormControl;
}

