import { Injectable, Signal, computed, signal } from '@angular/core';
import { ESessionCountdown } from '../config/session.enum';

@Injectable({ providedIn: 'root' })
export class SessionSignalsService {
  private minutes = signal(ESessionCountdown.MINUTES);
  private seconds = signal(ESessionCountdown.SECONDS);
  private timeRemainingInSeconds = signal(this.minutes() * 60 + this.seconds());

  remainingTime = `15:00`;

  initSessionCountdown(): void {
    const countdown = signal(this.timeRemainingInSeconds());
    countdown.update(() => countdown());

    setInterval(() => {
      if (countdown() > 0) {
        countdown.update(() => countdown() - 1);
        this.minutes.set(Math.floor(countdown() / 60));
        this.seconds.set(countdown() % 60);
        this.remainingTime = `${this.formatTime(this.minutes)}:${this.formatTime(this.seconds)}`
      }
    }, 1000);
  }

  private formatTime(time: Signal<number>): string {
    return computed(() => (time() < 10 ? `0${time()}` : time().toString()))();
  }
}
