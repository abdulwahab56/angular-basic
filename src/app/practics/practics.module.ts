import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountComponent } from './count/count.component';
import { IfConditionComponent } from './if-condition/if-condition.component';

@NgModule({
  declarations: [CountComponent, IfConditionComponent],
  imports: [CommonModule],
  exports: [CountComponent, IfConditionComponent],
})
export class PracticsModule {}
