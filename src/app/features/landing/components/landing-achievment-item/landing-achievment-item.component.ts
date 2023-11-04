import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-achievment-item',
  templateUrl: './landing-achievment-item.component.html',
  styleUrls: ['./landing-achievment-item.component.scss'],
})
export class LandingAchievmentItemComponent {
  @Input({ required: true }) img = '';
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
}
