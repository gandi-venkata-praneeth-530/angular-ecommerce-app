import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button class="primary-btn" (click)="btnClicked.emit()">
      {{ label()}}
    </button>
  `,
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  label=input('');
  btnClicked=output()
}
