import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommentaireService} from "../../service/commentaire.service";
import {PublicationService} from "../../service/publication.service";

@Component({
  selector: 'app-your-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './your-page.component.html',
  styleUrls: ['./your-page.component.scss']
})
export class YourPageComponent implements OnInit{

  readonly commentaireService: CommentaireService = inject(CommentaireService)

  readonly publicationService: PublicationService = inject(PublicationService);
  ngOnInit() {
    this.commentaireService.CommentaireListUser();
    this.publicationService.getPublicationListUser();
  }


}
