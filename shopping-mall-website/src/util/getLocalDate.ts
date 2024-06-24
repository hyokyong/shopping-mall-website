import DateFormatType from '@/const/dateFormatType';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'; // UTC 플러그인 가져오기
import timezone from 'dayjs/plugin/timezone'; // 타임존 플러그인 가져오기

dayjs.extend(utc);
dayjs.extend(timezone);

const getLocalDate = (date?: string, format: DateFormatType = DateFormatType.FULL_DATE_WITH_TIME): string => {
  if (!date) return '-';
  return dayjs.utc(date).local().format(format);
};

export default getLocalDate;
