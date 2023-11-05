import { Component, OnInit, inject } from '@angular/core';
import { SessionSignalsService } from 'src/app/core/services/session-signals.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss'],
})
export class HomeNavbarComponent implements OnInit {
  sessionService = inject(SessionService);
  signalsSessionService = inject(SessionSignalsService);

  rxjsCounter = '';

  ngOnInit(): void {
    this.initSignalsCountdown();
    this.initRxJsCountdown();
  }

  initSignalsCountdown() {
    this.signalsSessionService.initSessionCountdown();
  }

  initRxJsCountdown() {
    this.sessionService.setSessionCountdown().subscribe((timeLeft) => {
      this.rxjsCounter = timeLeft;
    });
  }
}
