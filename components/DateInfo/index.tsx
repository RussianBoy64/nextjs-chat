import dayjs from "dayjs";

import styles from "./dateInfo.module.scss";

const NOW_DATE_FORMATE: string = "D/M/YYYY";
const NOW_DATE_STAMP: string = "YYYY-MM-DD";

const DateInfo = () => {
  const now = dayjs();
  const nowDate: string = now.format(NOW_DATE_FORMATE);
  const nowStamp: string = now.format(NOW_DATE_STAMP);

  return (
    <time className={styles.dateInfo} dateTime={nowStamp}>
      {nowDate}
    </time>
  );
};

export default DateInfo;
