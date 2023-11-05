import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoreComponentsModule } from 'src/app/core/components/core-components.module';

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './landing-navbar.component.html',
  styleUrls: ['./landing-navbar.component.scss'],
  standalone: true,
  imports: [NgOptimizedImage, CoreComponentsModule, CommonModule],
})
export class LandingNavbarComponent {
  isMenuOpen = false;

  constructor(private router: Router) {}

  toggle() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  redirectToLogin() {
    this.router.navigate(['/auth']);
  }
}
