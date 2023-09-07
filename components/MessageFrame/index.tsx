import dayjs from "dayjs";
import BOTS, { botsNames } from "bots/bots";
import MyMessage from "@/components/MyMessage";

import styles from "./messageFrame.module.scss";

const myMessage1 = {
  authorId: 42,
  text: "Hi team 👋",
  timeShtamp: dayjs(),
};

const myMessage2 = {
  authorId: 42,
  text: "Anyone on for lunch today",
  timeShtamp: dayjs(),
};

const botMessage1 = {
  authorId: 4,
  authorName: BOTS[botsNames.Aubrey].name,
  authorAvatar: BOTS[botsNames.Aubrey].avatar,
  text: "I was thinking the cafe downtown",
  timeShtamp: dayjs(),
};

const botMessage2 = {
  authorId: 4,
  authorName: BOTS[botsNames.Aubrey].name,
  authorAvatar: BOTS[botsNames.Aubrey].avatar,
  text: "But limited vegan options @Janet!",
  timeShtamp: dayjs().hour(23),
};

const MessageFrame: React.FC = () => {
  return (
    <div className={styles.messageFrame}>
      <MyMessage messageData={myMessage1} withTip={true} />
      <MyMessage messageData={myMessage2} withTip={false} />
      <MyMessage messageData={botMessage1} withTip={false} />
      <MyMessage messageData={botMessage2} withTip={true} />
    </div>
  );
};

export default MessageFrame;
