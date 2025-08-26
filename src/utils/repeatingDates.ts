import { EventForm } from '../types.ts';

export function repeatingDates(eventForm: EventForm) {
  const { date: startDate, repeat } = eventForm;

  if (repeat.type === 'daily') {
    const dates = [];
    const start = new Date(startDate);
    const end = new Date(repeat.endDate!);
    for (let d = start; d <= end; d.setDate(d.getDate() + repeat.interval)) {
      dates.push(d.toISOString().split('T')[0]);
    }
    return dates;
  }

  if (repeat.type === 'weekly') {
    const dates = [];
    const start = new Date(startDate);
    const end = new Date(repeat.endDate!);
    for (let d = start; d <= end; d.setDate(d.getDate() + repeat.interval * 7)) {
      dates.push(d.toISOString().split('T')[0]);
    }
    return dates;
  }
  if (repeat.type === 'monthly') {
    const dates = [];
    const start = new Date(startDate);
    const end = new Date(repeat.endDate!);

    let year = start.getFullYear();
    let month = start.getMonth();
    const day = start.getDate();

    while (true) {
      const temp = new Date(year, month, day);
      if (temp > end) break;
      if (day === 31) {
        if (temp.getDate() === 31) dates.push(temp.toISOString().split('T')[0]);
      } else {
        dates.push(temp.toISOString().split('T')[0]);
      }
      month += repeat.interval;
      year += Math.floor(month / 12);
      month = month % 12;
    }

    return dates;
  }
}
