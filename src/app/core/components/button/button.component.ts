import { Component, Input } from '@angular/core';
import { TButton } from '../../interfaces/button.type';

@Component({
  selector: 'app-core-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input({ required: true }) variant: TButton = 'text';
  @Input({ required: true }) text: string = '';
}
