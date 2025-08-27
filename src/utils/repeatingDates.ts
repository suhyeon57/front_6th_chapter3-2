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
  if (repeat.type === 'yearly') {
    const dates = [];
    const start = new Date(startDate);
    const end = new Date(repeat.endDate!);

    let year = start.getFullYear();
    const month = start.getMonth();
    const day = start.getDate();

    while (true) {
      let temp;
      // 2월 29일에 시작한 경우, 반복마다 2월 29일을 시도
      if (month === 1 && day === 29) {
        temp = new Date(year, 1, 29);
        if (temp > end) break;
        if (temp.getDate() === 29 && temp.getMonth() === 1) {
          dates.push(temp.toISOString().split('T')[0]);
        }
      } else {
        temp = new Date(year, month, day);
        if (temp > end) break;
        dates.push(temp.toISOString().split('T')[0]);
      }
      year += repeat.interval;
    }

    return dates;
  }

  //   if (repeat.type === 'yearly') {
  //     const dates = [];
  //     const start = new Date(startDate);
  //     console.log('start', start.getFullYear());
  //     const end = new Date(repeat.endDate!);
  //     for (let d = start; d <= end; d.setFullYear(d.getFullYear() + repeat.interval)) {
  //       if (start.getDate() === 29 && start.getMonth() === 1) {
  //         if (d.getDate() === 29 && d.getMonth() === 1) {
  //           dates.push(d.toISOString().split('T')[0]);
  //         }
  //       } else {
  //         dates.push(d.toISOString().split('T')[0]);
  //       }
  //     }

  //     return dates;
  //   }
}
