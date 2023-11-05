import { Injectable, inject } from '@angular/core';
import { Observable, finalize, map, take, tap, timer } from 'rxjs';
import { ESessionCountdown } from '../config/session.enum';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class SessionService {
  minutes = ESessionCountdown.MINUTES;
  seconds = ESessionCountdown.SECONDS;
  timeRemainingInSeconds = this.minutes * 60 + this.seconds;

  router = inject(Router);

  setSessionCountdown(): Observable<string> {
    return timer(0, 1000).pipe(
      take(this.timeRemainingInSeconds + 1),
      map((time) => this.timeRemainingInSeconds - time),
      tap((time) => {
        this.minutes = Math.floor(time / 60);
        this.seconds = time % 60;
      }),
      map(
        () =>
          `${this.formatTime(this.minutes)}:${this.formatTime(this.seconds)}`
      ),
      finalize(() => this.clearSession())
    );
  }

  clearSession() {
    sessionStorage.clear();
    this.router.navigate(['/auth']);
  }

  private formatTime(time: number): string {
    return time < 10 ? `0${time}` : time.toString();
  }
}
