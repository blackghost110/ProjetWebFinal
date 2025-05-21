import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicationService} from "../../service/publication.service";
import {CommentaireService} from "../../service/commentaire.service";
import {JaimeService} from "../../service/jaime.service";

@Component({
  selector: 'app-recent-activity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.scss']
})
export class RecentActivityComponent implements OnInit{

  readonly publicationService: PublicationService = inject(PublicationService);
  readonly commentaireService: CommentaireService = inject(CommentaireService);
  readonly jaimeService: JaimeService = inject(JaimeService);

  ngOnInit() {
    this.publicationService.publicationList();
    this.publicationService.publicationDernier();
    this.commentaireService.commentaireDernier();
    this.jaimeService.jaimeDernier();

  }


}


