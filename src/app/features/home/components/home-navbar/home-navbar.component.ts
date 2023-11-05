import { Component, OnInit, inject } from '@angular/core';
import { finalize } from 'rxjs';
import { SessionSignalsService } from 'src/app/core/services/session-signals.service';
import { SessionService } from 'src/app/core/services/session.service';
import { destroy } from 'src/app/core/utils/destroy.function';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss'],
})
export class HomeNavbarComponent implements OnInit {
  private destroy$ = destroy();
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
    this.sessionService
      .initSessionCountdown()
      .pipe(this.destroy$())
      .subscribe((timeLeft) => {
        this.rxjsCounter = timeLeft as string;
      });
  }
}
