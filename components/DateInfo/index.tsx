import { getDate } from "helpers/dayjs";

import styles from "./dateInfo.module.scss";

const DateInfo = () => {
  const { date, dateShtamp } = getDate();
  return (
    <time className={styles.dateInfo} dateTime={dateShtamp}>
      {date}
    </time>
  );
};

export default DateInfo;
