import TrashCan from "@/public/svg/TrashCan";

import styles from "../btn.module.scss";

export enum removeBtnColors {
  light,
  dark,
}

interface removeBtnProps {
  color: removeBtnColors;
}

const RemoveBtn: React.FC<removeBtnProps> = ({ color }) => {
  const btnStyles = `${styles.messageBtn} ${
    color === removeBtnColors.light ? styles.messageBtn_light : styles.messageBtn_dark
  }`;

  return (
    <button className={btnStyles}>
      <TrashCan />
    </button>
  );
};

export default RemoveBtn;
