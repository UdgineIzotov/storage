import { TestBed, inject } from '@angular/core/testing';

import { GetCalendarService } from './get-calendar.service';

describe('GetCalendarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCalendarService]
    });
  });

  it('should be created', inject([GetCalendarService], (service: GetCalendarService) => {
    expect(service).toBeTruthy();
  }));
});
