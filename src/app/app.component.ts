import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'counter app run ';
  count = 0;
  counter(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }
}
