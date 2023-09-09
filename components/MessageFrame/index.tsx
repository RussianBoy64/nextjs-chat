import dayjs from "dayjs";
import BOTS, { botsNames } from "bots/bots";
import img1 from "@/public/C1Lfg6V_PYE.jpg";
import img2 from "@/public/jdz6Ks7tRrM.jpg";
import img3 from "@/public/rpWukAIpAwI.jpg";

import MyMessage from "@/components/MyMessage";

import styles from "./messageFrame.module.scss";

const myMessage1 = {
  authorId: 42,
  text: "Hi team 👋",
  photo: [],
  timeShtamp: dayjs(),
};

const myMessage2 = {
  authorId: 42,
  text: "Anyone on for lunch today ajdfkajddfjak jjk jakjdf kajdkfj jj akdjfk jakj kajd kjadkfj kaj akdjf kajdfk aj jadjf kajkjdfkajdf jakjdf lkdajd lkjalkd jkaj kjakldfj klajdkfjakjeijfiqaif ianco noknaw knkwn kanfkl ald kafiwif woinf won wonf lskdflsdndfl nsldfn wnf ownfowe nflkn flkwnkldnfklnfklwn klnsdkldfnlk wnownfoiwn ksndfklnlskdnflk nwnow ",
  photo: [img1, img2],
  timeShtamp: dayjs(),
};

const myMessage3 = {
  authorId: 42,
  text: "Hi team 👋",
  photo: [img1, img2, img3],
  timeShtamp: dayjs(),
};

const botMessage1 = {
  authorId: 4,
  authorName: BOTS[botsNames.Aubrey].name,
  authorAvatar: BOTS[botsNames.Aubrey].avatar,
  text: "I was thinking the cafe downtown",
  photo: [img1],
  timeShtamp: dayjs(),
};

const botMessage2 = {
  authorId: 4,
  authorName: BOTS[botsNames.Aubrey].name,
  authorAvatar: BOTS[botsNames.Aubrey].avatar,
  text: "But limited vegan options @Janet!",
  photo: [img1, img2, img3, img1, img2],
  timeShtamp: dayjs().hour(23),
};

const botMessage3 = {
  authorId: 6,
  authorName: BOTS[botsNames.Aubrey].name,
  authorAvatar: BOTS[botsNames.Aubrey].avatar,
  text: "But limited vegan options @Janet!",
  photo: [img1, img2, img3, img1],
  timeShtamp: dayjs().hour(7),
};

const MessageFrame: React.FC = () => {
  return (
    <div className={styles.messageFrame}>
      <div className={styles.messageFrame__content}>
        <MyMessage messageData={myMessage1} withTip={true} />
        <MyMessage messageData={myMessage2} withTip={false} />
        <MyMessage messageData={myMessage3} withTip={false} />
        <MyMessage messageData={botMessage1} withTip={false} />
        <MyMessage messageData={botMessage2} withTip={true} />
        <MyMessage messageData={botMessage3} withTip={true} />
      </div>
    </div>
  );
};

export default MessageFrame;
