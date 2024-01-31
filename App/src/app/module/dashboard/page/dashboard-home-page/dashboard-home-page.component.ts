import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from "../../component/sidebar/sidebar.component";
import {PostMainComponent} from "../../component/post-main/post-main.component";
import {YourPageComponent} from "../../component/your-page/your-page.component";
import {RecentActivityComponent} from "../../component/recent-activity/recent-activity.component";
import {PublicationListComponent} from "../../component/publication-list/publication-list.component";

@Component({
  selector: 'app-dashboard-home-page',
  standalone: true,
  imports: [CommonModule, SidebarComponent, PostMainComponent, YourPageComponent, RecentActivityComponent, PublicationListComponent],
  templateUrl: './dashboard-home-page.component.html',
  styleUrls: ['./dashboard-home-page.component.scss']
})
export class DashboardHomePageComponent {

}
