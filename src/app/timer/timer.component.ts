import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs'

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    interval(1000).subscribe(count => {
      console.log(count);
    })
  }
}
