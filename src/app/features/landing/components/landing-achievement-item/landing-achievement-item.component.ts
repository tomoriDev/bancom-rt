import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-achievement-item',
  templateUrl: './landing-achievement-item.component.html',
  styleUrls: ['./landing-achievement-item.component.scss'],
})
export class LandingAchievementItemComponent {
  @Input({ required: true }) img = '';
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
}
