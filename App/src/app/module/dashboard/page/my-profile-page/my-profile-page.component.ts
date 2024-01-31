import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from "../../component/sidebar/sidebar.component";

@Component({
  selector: 'app-my-profile-page',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './my-profile-page.component.html',
  styleUrls: ['./my-profile-page.component.scss']
})
export class MyProfilePageComponent {

}
