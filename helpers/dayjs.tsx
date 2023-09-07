import dayjs from "dayjs";

export type typeShtamp = dayjs.Dayjs;

export enum ITimeFormat {
  date = "D/M/YYYY",
  dateShtamp = "YYYY-MM-DD",
  time = "HH:MM A",
  timeShtamp = "HH-MM",
}

export interface IDate {
  date: string;
  dateShtamp: string;
}

export interface ITime {
  time: string;
  timeShtamp: string;
}

type getDate = (timeShtamp?: dayjs.Dayjs) => IDate;
type getTime = (timeShtamp?: dayjs.Dayjs) => ITime;

export const getDate: getDate = (timeShtamp) => {
  const dateData = timeShtamp || dayjs();
  const date: string = dateData.format(ITimeFormat.date);
  const stamp: string = dateData.format(ITimeFormat.dateShtamp);
  return { date: date, dateShtamp: stamp };
};

export const getTime: getTime = (timeShtamp) => {
  const timeData = timeShtamp || dayjs();
  const time: string = timeData.format(ITimeFormat.time);
  const shtamp: string = timeData.format(ITimeFormat.timeShtamp);
  return { time: time, timeShtamp: shtamp };
};
