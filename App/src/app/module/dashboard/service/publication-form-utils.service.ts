import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {
  PublicationCreateField,
  PublicationCreateFormConfig,
  PublicationCreateFormFieldEnum, PublicationCreateType
} from "../../../security/data";

@Injectable({
  providedIn: 'root'
})
export class PublicationFormUtilsService {

  public static publicationCreateFormGroup(): FormGroup {
    return new FormGroup<any>({
      [PublicationCreateFormFieldEnum.CONTENU]: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
    })
  }

  public static publicationCreateFormConfig(): PublicationCreateFormConfig {
    const formGroup: FormGroup = PublicationFormUtilsService.publicationCreateFormGroup()
    return {
      formGroup,
      type: PublicationCreateType.TEXT,
      fields:[
        PublicationFormUtilsService.getContenuField(formGroup) ]
    }
  }

  public static getContenuField(formGroup: FormGroup): PublicationCreateField {
    return {
      inputType: 'text',
      placeHolder: 'What\'s happening ??',
      control: PublicationFormUtilsService.getFormControl(formGroup, PublicationCreateFormFieldEnum.CONTENU)
    }
  }

  public static getFormControl(formGroup: FormGroup, controlName: string): FormControl {
    return formGroup.get(controlName) as FormControl
  }


}
