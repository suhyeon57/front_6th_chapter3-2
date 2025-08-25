import { RepeatType } from '../types.ts';

export function repeatingDates(
  startDate: string,
  repeat: { type: RepeatType; interval: number; endDate?: string }
) {
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
}
