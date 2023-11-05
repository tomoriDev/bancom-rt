import { DestroyRef, inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

export function destroy() {
  const subject = new Subject();

  inject(DestroyRef).onDestroy(() => {
    subject.next(true);
    subject.complete();
  });

  return () => takeUntil(subject.asObservable());
}
