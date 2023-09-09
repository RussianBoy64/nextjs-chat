import { getTime } from "helpers/dayjs";
import { IMessage } from "@/store/chatStore";
import ReadIndicator from "@/public/svg/ReadIndicator";

import styles from "./myMessage.module.scss";
import PhotoGrid from "../PhotoGrid";

interface messageProps {
  messageData: IMessage;
  withTip: boolean;
}

const Message: React.FC<messageProps> = ({ messageData, withTip }) => {
  const { time, timeShtamp } = getTime(messageData.timeShtamp);
  const messageStyle = `${styles.myMessage} ${withTip ? styles.myMessage_tip : ""}`;
  const isPhotos = messageData.photo.length > 0;

  return (
    <div className={messageStyle}>
      <div className={styles.myMessage__content}>
        <p className={styles.myMessage__text}>{messageData.text}</p>

        {isPhotos && <PhotoGrid images={messageData.photo} />}
      </div>

      <time className={styles.myMessage__timeShtamp} dateTime={timeShtamp}>
        {time}
      </time>

      <ReadIndicator />
    </div>
  );
};

export default Message;
