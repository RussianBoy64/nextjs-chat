"use client";

import USERS, { userIds } from "users/users";
import { getTime } from "helpers/dayjs";
import { useStore } from "zustand";
import { chatStore } from "@/store/chatStore";
import useMounted from "hooks/useMounted";
import img1 from "@/public/C1Lfg6V_PYE.jpg";
import img2 from "@/public/jdz6Ks7tRrM.jpg";
import img3 from "@/public/rpWukAIpAwI.jpg";

import MyMessage from "@/components/MyMessage";
import OpponentMessage from "../OpponentMessage";

import styles from "./messageFrame.module.scss";

const myMessage1 = {
  authorId: 42,
  text: "Hi team 👋",
  photo: [],
  timeShtamp: getTime(),
};

const myMessage2 = {
  authorId: 42,
  text: "Anyone on for lunch today ajdfkajddfjak jjk jakjdf kajdkfj jj akdjfk jakj kajd kjadkfj kaj akdjf kajdfk aj jadjf kajkjdfkajdf jakjdf lkdajd lkjalkd jkaj kjakldfj klajdkfjakjeijfiqaif ianco noknaw knkwn kanfkl ald kafiwif woinf won wonf lskdflsdndfl nsldfn wnf ownfowe nflkn flkwnkldnfklnfklwn klnsdkldfnlk wnownfoiwn ksndfklnlskdnflk nwnow ",
  photo: [img1, img2],
  timeShtamp: getTime(),
};

const myMessage3 = {
  authorId: 42,
  text: "Hi team 👋",
  photo: [img1, img2, img3],
  timeShtamp: getTime(),
};

const botMessage1 = {
  authorId: 4,
  authorName: USERS[userIds.Aubrey].name,
  authorPosition: USERS[userIds.Aubrey].position,
  authorAvatar: USERS[userIds.Aubrey].avatar,
  text: "I was thinking the cafe downtown",
  photo: [img1],
  timeShtamp: getTime(),
};

const botMessage2 = {
  authorId: 4,
  authorName: USERS[userIds.Janet].name,
  authorPosition: USERS[userIds.Janet].position,
  authorAvatar: USERS[userIds.Janet].avatar,
  text: "But limited vegan options @Janet!",
  photo: [img1, img2, img3, img1, img2],
  timeShtamp: getTime(),
};

const botMessage3 = {
  authorId: 6,
  authorName: USERS[userIds.Aubrey].name,
  authorPosition: USERS[userIds.Aubrey].position,
  authorAvatar: USERS[userIds.Aubrey].avatar,
  text: "But limited vegan options @Janet!",
  photo: [img1, img2, img3, img1],
  timeShtamp: getTime(),
};

const MessageFrame: React.FC = () => {
  const mounted = useMounted();
  const messages = useStore(chatStore, (state) => state.messages);

  if (!mounted) return null;

  return (
    <div className={styles.messageFrame}>
      <div className={styles.messageFrame__content}>
        {messages.map((message, index, messages) => {
          const withTip =
            index === 0 ? true : message.authorId !== messages[index - 1].authorId;
          return message.authorId === userIds.Vova ? (
            <MyMessage messageData={message} withTip={withTip} key={message.messageId} />
          ) : (
            <OpponentMessage
              messageData={message}
              withTip={withTip}
              key={message.messageId}
            />
          );
        })}
        {/* <MyMessage messageData={myMessage1} withTip={true} />
        <MyMessage messageData={myMessage2} withTip={false} />
        <OpponentMessage messageData={botMessage1} withTip={false} />
        <MyMessage messageData={botMessage1} withTip={false} />
        <OpponentMessage messageData={botMessage2} withTip={true} />
        <MyMessage messageData={botMessage3} withTip={true} /> */}
      </div>
    </div>
  );
};

export default MessageFrame;
