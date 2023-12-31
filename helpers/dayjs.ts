import dayjs from "dayjs";

export type typeShtamp = dayjs.Dayjs;

export enum ITimeFormat {
  date = "D/M/YYYY",
  dateShtamp = "YYYY-MM-DD",
  time = "HH:mm A",
  timeShtamp = "HH-mm",
}

export interface IDate {
  date: string;
  dateShtamp: string;
}

export interface ITime {
  time: string;
  timeShtamp: string;
}

type getDate = () => IDate;
type getTime = () => ITime;

export const getDate: getDate = () => {
  const dateData = dayjs();
  const date: string = dateData.format(ITimeFormat.date);
  const stamp: string = dateData.format(ITimeFormat.dateShtamp);
  return { date: date, dateShtamp: stamp };
};

export const getTime: getTime = () => {
  const timeData = dayjs();
  const time: string = timeData.format(ITimeFormat.time);
  const shtamp: string = timeData.format(ITimeFormat.timeShtamp);
  return { time: time, timeShtamp: shtamp };
};
