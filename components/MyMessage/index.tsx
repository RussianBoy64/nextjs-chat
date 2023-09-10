import { IMessage } from "@/store/chatStore";

import PhotoGrid from "../PhotoGrid";
import EditBtn, { editBtnColors } from "../UI/Buttons/EditBtn";
import RemoveBtn, { removeBtnColors } from "../UI/Buttons/RemoveBtn";
import ReadIndicator from "@/public/svg/ReadIndicator";

import styles from "./myMessage.module.scss";

interface messageProps {
  messageData: IMessage;
  withTip: boolean;
}

const Message: React.FC<messageProps> = ({ messageData, withTip }) => {
  const { time, timeShtamp } = messageData.timeShtamp;
  const messageStyle = `${styles.myMessage} ${withTip ? styles.myMessage_tip : ""}`;
  const isPhotos = messageData.photo.length > 0;
  messageData.text;

  return (
    <div className={messageStyle}>
      <div className={styles.myMessage__content}>
        <p className={styles.myMessage__text}>{messageData.text}</p>

        {isPhotos && <PhotoGrid images={messageData.photo} />}
      </div>

      <div className={styles.myMessage__controls}>
        <EditBtn messageId={messageData.messageId} color={editBtnColors.light} />
        <RemoveBtn messageId={messageData.messageId} color={removeBtnColors.light} />
      </div>

      <time className={styles.myMessage__timeShtamp} dateTime={timeShtamp}>
        {time}
      </time>

      <ReadIndicator />
    </div>
  );
};

export default Message;
