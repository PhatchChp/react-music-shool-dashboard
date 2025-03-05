import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);
const tz = "Asia/Bangkok";

export const toDate = (date: string | number) => dayjs(date).tz(tz, true).format("DD/MM/YYYY");
export const toDateTime = (date: string | number) => dayjs(date).tz(tz, true).format("DD/MM/YYYY HH:mm:ss");
