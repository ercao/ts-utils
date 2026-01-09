import { EMPTY_STRING } from "./string";
import * as dateFns from "date-fns";
import { zhCN } from "date-fns/locale";

export * from "date-fns";

/**
 * 将时间格式化为YYYY-MM-DD HH:mm:ss的格式
 * @param datetime 时间
 * @param nullString 时间不合规比如为null时，返回的字符串
 * */
export const dateTimeFormater = (
  datetime: number | string | Date | null | undefined,
  format: string = "yyyy-MM-dd HH:mm",
  nullString: string = EMPTY_STRING,
  allowLongTerm: boolean = true
) => {
  if (
    datetime == null ||
    datetime == EMPTY_STRING ||
    dateFns.isSameDay(datetime, SQL_SERVER_DEFAULT_DATETIME)
  ) {
    return nullString;
  }

  if (allowLongTerm && isLongTermDate(datetime)) {
    return "长期有效";
  }

  // console.log("datetime", datetime);
  return dateFns.format(new Date(datetime), format);
};

/**
 * 将时间格式化为YYYY-MM-DD的格式
 * */
export const dateFormater = (date: any, nullString = EMPTY_STRING) => {
  return dateTimeFormater(date, "yyyy-MM-dd", nullString);
};

export const numToWeekDay = (num: number) => {
  switch (num) {
    case 1:
      return "星期一";
    case 2:
      return "星期二";
    case 3:
      return "星期三";
    case 4:
      return "星期四";
    case 5:
      return "星期五";
    case 6:
      return "星期六";
    case 0:
      return "星期日";
    default:
      return "未知";
  }
};

/**
 * 将秒数格式化为 human 可读格式
 */
export const formatShortDuration = (seconds: number) => {
  if (seconds === 0) {
    return "0秒";
  }

  const duration = dateFns.intervalToDuration({
    start: 0,
    end: seconds * 1000,
  });
  // const nonZeroDuration = Object.fromEntries(Object.entries(duration).filter(([_, value]) => value !== 0));
  return dateFns
    .formatDuration(duration, { locale: zhCN, zero: false })
    .replace(" ", "");
};

/// SQL Server 默认日期
export const SQL_SERVER_DEFAULT_DATETIME = new Date(1900, 0, 1);

/// 长期有效日期
export const LONG_TERM_DATE = new Date(9999, 0, 1);
// dateFns.format(new Date(9999, 0, 1), "yyyy-MM-dd'T'HH:mm:ssXXX", { locale: zhCN });

/// 是否是长期有效时间
export const isLongTermDate = (date: dateFns.DateArg<Date>) => {
  if (!date) return false;
  return dateFns.isSameDay(date, LONG_TERM_DATE);
};
