import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicationService} from "../../service/publication.service";

@Component({
  selector: 'app-recent-activity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.scss']
})
export class RecentActivityComponent implements OnInit{

  readonly publicationService: PublicationService = inject(PublicationService)

  ngOnInit() {
    this.publicationService.publicationList();
  }

  formatTimeAgo(date: Date): string {
    if (!date) {
      return 'Date non définie';
    }

    const currentDate = new Date();
    const diffInSeconds = Math.floor((currentDate.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) {
      return `Il y a ${diffInSeconds} secondes`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);

    if (diffInMinutes < 60) {
      return `Il y a ${diffInMinutes} minutes`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);

    if (diffInHours < 24) {
      return `Il y a ${diffInHours} heures`;
    }

    const diffInDays = Math.floor(diffInHours / 24);

    return `Il y a ${diffInDays} jours`;
  }


}


