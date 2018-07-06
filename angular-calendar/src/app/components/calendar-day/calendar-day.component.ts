import { Component, Input, OnInit } from '@angular/core';

import { Day } from '../../models/day';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnInit {
  @Input() day:Day;

  constructor() { }

  ngOnInit() {
  }

}
