import { getTime } from "helpers/dayjs";
import { IMessage } from "@/store/chatStore";

import PhotoGrid from "../PhotoGrid";
import EditBtn, { editBtnColors } from "../UI/Buttons/EditBtn";
import RemoveBtn, { removeBtnColors } from "../UI/Buttons/RemoveBtn";
import ReadIndicator from "@/public/svg/ReadIndicator";

import styles from "./opponentMessage.module.scss";
import Image from "next/image";

interface opponentMessageProps {
  messageData: IMessage;
  withTip: boolean;
}

const OpponentMessage: React.FC<opponentMessageProps> = ({ messageData, withTip }) => {
  const { time, timeShtamp } = getTime(messageData.timeShtamp);
  const messageStyle = `${styles.opponentMessage} ${
    withTip ? styles.opponentMessage_tip : ""
  }`;
  const isPhotos = messageData.photo.length > 0;

  return (
    <div className={styles.wrapper}>
      {messageData.authorAvatar && (
        <div className={styles.avatar}>
          <Image
            className={styles.avatar__img}
            src={messageData.authorAvatar.src}
            alt={`${messageData.authorName}-photo`}
            width={32}
            height={32}
          />
        </div>
      )}

      <div className={messageStyle}>
        <div className={styles.opponentMessage__content}>
          <div className={styles.opponentMessage__opponent}>
            <span className={styles.opponent__name}>{messageData.authorName}</span>
            <span className={styles.opponent__position}>
              {messageData.authorPosition}
            </span>
          </div>

          <p className={styles.opponentMessage__text}>{messageData.text}</p>

          {isPhotos && <PhotoGrid images={messageData.photo} />}
        </div>
        <div className={styles.opponentMessage__controls}>
          <EditBtn color={editBtnColors.dark} />
          <RemoveBtn color={removeBtnColors.dark} />
        </div>
        <time className={styles.opponentMessage__timeShtamp} dateTime={timeShtamp}>
          {time}
        </time>
        <ReadIndicator />
      </div>
    </div>
  );
};

export default OpponentMessage;
