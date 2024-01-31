import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutes} from "../../../shared/routes/enum/route.enum";
import {ApiService} from "../../../shared/api/service/api.service";

@Component({
  selector: 'app-dashboard-home-page',
  standalone: true,
    imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './dashboard-home-page.component.html',
  styleUrls: ['./dashboard-home-page.component.scss']
})
export class DashboardHomePageComponent implements OnInit {
  routes = AppRoutes;

  title = 'app';
  private readonly api: ApiService = inject(ApiService);
  ngOnInit(): void {
    this.api.get('').subscribe((data) => {
      console.log('my data', data);
    })
  }
}
