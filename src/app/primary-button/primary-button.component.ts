import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true, // ✅ Required when using 'imports' in a standalone component
  imports: [],
  template: `
    <button class="primary-btn" (click)="btnClicked.emit()">
      {{ label}}
    </button>
  `,
  styleUrls: ['primary-button.component.scss']
})
export class PrimaryButtonComponent {
  @Input() label: string = '';
  @Output() btnClicked = new EventEmitter<void>();
}
