import { Component, OnInit } from '@angular/core';

import { GetCalendarService } from '../../services/get-calendar.service';
import { Day } from '../../models/day';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calendarService: GetCalendarService;
  calendarData: Array<Array<Day>>;
  displayDate: string;

  constructor(calendarService: GetCalendarService) { 
    this.calendarService = calendarService;
  }

  ngOnInit() {
    this.calendarData = this.calendarService.countCalendarArray();
    this.displayDate = this.calendarService.getCurrentFormattedDate();
  }

  public onNextMonth() {
    this.calendarData = this.calendarService.nextMonth();
    this.displayDate = this.calendarService.getCurrentFormattedDate();
  }

  public onPrevMonth() {
    this.calendarData = this.calendarService.prevMonth();
    this.displayDate = this.calendarService.getCurrentFormattedDate();
  }
}
