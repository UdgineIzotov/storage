import { Injectable } from '@angular/core';
import * as moment from 'moment';

import { Day } from '../models/day';
import { MON_YEAR_FORMAT } from '../constants/dateFormat';

@Injectable({
  providedIn: 'root'
})
export class GetCalendarService {
  date: Date;
  constructor() {
    this.date = new Date();
  }

  countCalendarArray(today: Date = this.date) {

    const year = today.getFullYear(), 
          month = today.getMonth();

    const startDay: number = (new Date(year, month, 1)).getDay(),
          endDay: number = (new Date(year, month + 1 , 0)).getDate();

    const prevDate: Date =   new Date(year, month, 0)     

    let isNotInMonth: boolean = true,
        dayNumber: number = 1;

    let daysArray: Array<Array<Day>> = [];

    for (var row = 0; row < 6; row++){
      daysArray.push([]);
    
      for (var col = 0; col < 7; col++) {
    debugger

        if (row === 0 && startDay === col){
          isNotInMonth = false;
        }
        if (dayNumber > endDay) {
          isNotInMonth = true;
        }
        const text: Day = new Day(
          isNotInMonth ? null : dayNumber++, 
          !isNotInMonth
        );
        daysArray[row].push(text);
      }
    }

    return daysArray;
  }

  nextMonth() {
    this.date.setMonth(this.date.getMonth() + 1);

    return this.countCalendarArray();
  }

  prevMonth() {
    this.date.setMonth(this.date.getMonth() - 1);

    return this.countCalendarArray();
  }

  getCurrentFormattedDate() {
    console.log(moment(this.date).format(MON_YEAR_FORMAT));
    return moment(this.date).format(MON_YEAR_FORMAT);
  }
}
