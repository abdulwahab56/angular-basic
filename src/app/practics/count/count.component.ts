import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
})
export class CountComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  count = 0;
  counter(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }
}
