import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-practising-directives',
  templateUrl: './practising-directives.component.html',
  styleUrls: ['./practising-directives.component.css'],
  styles: ['.backgroundColor{color: green}']
})
export class PractisingDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  display = false;
  timestampList = ['Mon Sep 28 2020, 10:15:41 pm', 'Mon Sep 28 2020, 10:16:00 pm'];

  displayContent() {
    this.display = !this.display;
  }
  uploadTimestamp() {
    var currentMinute = moment().format("ddd MMM D YYYY ,h:mm:ss a");
    this.timestampList.push(currentMinute)
  }

}
