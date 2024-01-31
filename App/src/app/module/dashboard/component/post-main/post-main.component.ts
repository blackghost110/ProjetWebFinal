import {Component, inject, Input, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicationCreatePayload} from "../../data/payload/publication-create.payload";
import {PublicationCreateFormConfig} from "../../../../security/data";
import {PublicationService} from "../../service/publication.service";
import {ReactiveFormsModule} from "@angular/forms";



@Component({
  selector: 'app-post-main',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-main.component.html',
  styleUrls: ['./post-main.component.scss']
})
export class PostMainComponent {


  private readonly publicationService: PublicationService = inject(PublicationService);

  @Input({required: true}) config!: PublicationCreateFormConfig;
  error$: WritableSignal<string> = signal('');

  save(): void {
    this.error$.set('');
    const payload: PublicationCreatePayload = {
      ...this.config.formGroup.value
    };

    console.log('payload', payload);
    this.publicationService.publicationCreate(payload as PublicationCreatePayload).subscribe();
  }



}
