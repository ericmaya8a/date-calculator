import { addDays } from "date-fns";

export type Holydays = { [key: string]: string[] };

export function getDateFromString(date: string) {
  const year = Number(date.substring(0, 4));
  const month = Number(date.substring(5, 7)) - 1;
  const day = Number(date.substring(8));
  return new Date(year, month, day);
}

function parseDate(date: Date) {
  return {
    day: date.getDate(),
    dayNumber: date.getDay(),
    month: date.getMonth(),
  };
}

function isWeekDay(dayNumber: number) {
  return dayNumber !== 6 && dayNumber !== 0;
}

export function handleNonWorkingDays(date: Date, days: number, hD: Holydays) {
  while (days > 0) {
    date = addDays(date, 1);
    const { dayNumber, day, month } = parseDate(date);
    const isHolyday =
      hD[month].includes(day.toString()) && isWeekDay(dayNumber);
    if (isWeekDay(dayNumber) && !isHolyday) {
      days--;
    }
  }
  return date;
}

export function setStringToArray(value: string) {
  return value.replace(/\s/g, "").split(",");
}
