import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutes} from "../../../shared/routes/enum/route.enum";
import {PostMainComponent} from "../component/post-main/post-main.component";
import {PublicationListComponent} from "../component/publication-list/publication-list.component";
import {SidebarComponent} from "../component/sidebar/sidebar.component";
import {YourPageComponent} from "../component/your-page/your-page.component";
import {RecentActivityComponent} from "../component/recent-activity/recent-activity.component";

@Component({
  selector: 'app-dashboard-router',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, PostMainComponent, PublicationListComponent, SidebarComponent, YourPageComponent, RecentActivityComponent],
  templateUrl: './dashboard-router.component.html',
  styleUrls: ['./dashboard-router.component.scss']
})
export class DashboardRouterComponent {
  routes = AppRoutes;

}
