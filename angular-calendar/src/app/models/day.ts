import { Event } from './event';

interface IDay {
    number: number,
    isInMonth: boolean,
    events: Array<Event>

}

export class Day implements IDay {
    number: number;
    isInMonth: boolean;
    events: Array<Event>;

    constructor(number: number, isInMonth: boolean = true, events: Array<Event> = []) {
        this.number = number;
        this.isInMonth = isInMonth;
        this.events = events;
    }
}