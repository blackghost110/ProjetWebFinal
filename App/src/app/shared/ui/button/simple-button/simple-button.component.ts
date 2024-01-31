import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.scss']
})
export class SimpleButtonComponent {
  @Input() title: string = 'Click me';
  @Output() onClick = new EventEmitter<void>()

}
