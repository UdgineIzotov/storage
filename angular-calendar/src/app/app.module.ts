import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventsComponent } from './components/events/events.component';
import { CalendarDayComponent } from './components/calendar-day/calendar-day.component'
import { GetCalendarService } from './services/get-calendar.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    EventsComponent,
    CalendarDayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ GetCalendarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
