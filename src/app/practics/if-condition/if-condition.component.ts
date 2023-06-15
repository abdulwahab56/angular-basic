import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-condition',
  templateUrl: './if-condition.component.html',
  styleUrls: ['./if-condition.component.css'],
})
export class IfConditionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  show = false;
  color = 'blue';
  toggle() {
    this.show = !this.show;
  }
}
