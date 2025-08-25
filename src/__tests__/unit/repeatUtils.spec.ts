import { repeatingDates } from '../../utils/repeatingDates';
import { Event } from '../../types';

describe('repeatingDates', () => {
  it('매일 반복 --> 시작일부터 종료일까지 매일 생성한다', () => {
    const events: Event[] = [
      {
        id: '1',
        title: '이벤트 1',
        date: '2025-10-01',
        startTime: '10:00',
        endTime: '11:00',
        description: '이벤트 1 설명',
        location: '이벤트 1 장소',
        category: '이벤트 1 카테고리',
        repeat: { type: 'daily', interval: 1, endDate: '2025-10-05' },
        notificationTime: 10,
      },
    ];
    const result = repeatingDates(events[0]);
    expect(result).toEqual(['2025-10-01', '2025-10-02', '2025-10-03', '2025-10-04', '2025-10-05']);
  });

  it('매주 반복 --> 시작일부터 종료일까지 매주 생성한다', () => {
    const events: Event[] = [
      {
        id: '1',
        title: '이벤트 1',
        date: '2025-10-01',
        startTime: '10:00',
        endTime: '11:00',
        description: '이벤트 1 설명',
        location: '이벤트 1 장소',
        category: '이벤트 1 카테고리',
        repeat: { type: 'weekly', interval: 1, endDate: '2025-10-18' },
        notificationTime: 10,
      },
    ];
    const result = repeatingDates(events[0]);
    expect(result).toEqual(['2025-10-01', '2025-10-08', '2025-10-15']);
  });

  it('매월 반복 --> 31일에 시작하면 31일이 있는 달에만 생성한다', () => {});

  it('매년 반복 --> 윤년 2월 29일에 시작하면 2월 29일이 있는 해에만 생성한다', () => {});
});
