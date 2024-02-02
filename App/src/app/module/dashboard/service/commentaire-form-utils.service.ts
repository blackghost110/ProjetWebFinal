import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {
  CommentaireCreateField,
  CommentaireCreateFormConfig,
  CommentaireCreateFormFieldEnum
} from "../../../security/data";

@Injectable({
  providedIn: 'root'
})
export class CommentaireFormUtilsService {

  public static commentaireCreateFormGroup(): FormGroup {
    return new FormGroup<any>({
      [CommentaireCreateFormFieldEnum.CONTENU]: new FormControl<string>('', [Validators.required]),
    })
  }

  public static commentaireCreateFormConfig(): CommentaireCreateFormConfig {
    const formGroup: FormGroup = CommentaireFormUtilsService.commentaireCreateFormGroup()
    return {
      formGroup,
      fields:[
        CommentaireFormUtilsService.getContenuField(formGroup) ]
    }
  }

  public static getContenuField(formGroup: FormGroup): CommentaireCreateField {
    return {
      control: CommentaireFormUtilsService.getFormControl(formGroup, CommentaireCreateFormFieldEnum.CONTENU)
    }
  }

  public static getFormControl(formGroup: FormGroup, controlName: string): FormControl {
    return formGroup.get(controlName) as FormControl
  }


}
