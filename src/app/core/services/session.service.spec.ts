import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SessionService } from './session.service';
import { Router } from '@angular/router';
import { ESessionCountdown } from '../config/session.enum';
import { RouterTestingModule } from '@angular/router/testing';

describe('SessionService', () => {
  let service: SessionService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [SessionService],
    });

    service = TestBed.inject(SessionService);
    router = TestBed.inject(Router);
  });

  describe('when initSessionCountdown', () => {
    it('#should initialize session countdown', fakeAsync(() => {
      let actualTime = '';
      spyOn(service, 'clearSession');

      const subscription = service
        .initSessionCountdown()
        .subscribe((timeRemaining) => {
          actualTime = timeRemaining;
        });
      tick((ESessionCountdown.MINUTES * 60 + ESessionCountdown.SECONDS) * 1000);
      subscription.unsubscribe();

      expect(service.clearSession).toHaveBeenCalled();
    }));
  });

  describe('when clearSession', () => {
    it('#should format time correctly', () => {
      const spyNavigate = spyOn(router, 'navigate');

      service.clearSession();

      expect(spyNavigate).toHaveBeenCalled();
    });
  });

  describe('when formatTime', () => {
    it('#should add a zero if number is less than 10', () => {
      const numberToTest = 5;

      const formattedTime = service['formatTime'](numberToTest);

      expect(formattedTime).toBe('05');
    });
  });
});
