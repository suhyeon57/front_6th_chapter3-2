import { repeatingDates } from '../../utils/repeatingDates';

describe('repeatingDates', () => {
  it('매일 반복 --> 시작일부터 종료일까지 매일 생성한다', () => {
    const result = repeatingDates('2025-10-01', {
      type: 'daily',
      interval: 1,
      endDate: '2025-10-05',
    });
    expect(result).toEqual(['2025-10-01', '2025-10-02', '2025-10-03', '2025-10-04', '2025-10-05']);
  });

  it('매주 반복 --> 시작일부터 종료일까지 매주 생성한다', () => {});

  it('매월 반복 --> 31일에 시작하면 31일이 있는 달에만 생성한다', () => {});

  it('매년 반복 --> 윤년 2월 29일에 시작하면 2월 29일이 있는 해에만 생성한다', () => {});
});
