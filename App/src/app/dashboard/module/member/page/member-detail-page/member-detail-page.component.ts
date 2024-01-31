import {Component, inject, Input, OnInit, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MemberService} from "../../member.service";

@Component({
  selector: 'app-member-detail-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './member-detail-page.component.html',
  styleUrls: ['./member-detail-page.component.scss']
})
export class MemberDetailPageComponent {
  @Input() id!:string;
  readonly memberService = inject(MemberService)

  member: WritableSignal<string> = signal('no body');




}
