import { getTime } from "helpers/dayjs";
import { IMessage } from "@/store/chatStore";
import ReadIndicator from "@/public/svg/ReadIndicator";

import styles from "./myMessage.module.scss";

interface messageProps {
  messageData: IMessage;
  withTip: boolean;
}

const Message: React.FC<messageProps> = ({ messageData, withTip }) => {
  const { time, timeShtamp } = getTime(messageData.timeShtamp);
  const messageStyle = `${styles.myMessage} ${withTip ? styles.myMessage_tip : ""}`;

  return (
    <div className={messageStyle}>
      <p className={styles.myMessage__text}>{messageData.text}</p>
      <time className={styles.myMessage__timeShtamp} dateTime={timeShtamp}>
        {time}
      </time>
      <ReadIndicator />
    </div>
  );
};

export default Message;
