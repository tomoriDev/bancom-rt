import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [CommonModule, MatProgressBarModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class CoreComponentsModule {}
