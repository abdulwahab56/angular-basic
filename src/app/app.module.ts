import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PracticsModule } from './practics/practics.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PracticsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
