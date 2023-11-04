import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-feature-item',
  templateUrl: './landing-feature-item.component.html',
  styleUrls: ['./landing-feature-item.component.scss'],
})
export class LandingFeatureItemComponent {
  @Input({ required: true }) img = '';
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
}
