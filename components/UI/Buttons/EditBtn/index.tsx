import Pencil from "@/public/svg/Pencil";

import styles from "../btn.module.scss";

export enum editBtnColors {
  light,
  dark,
}

interface editBtnProps {
  color: editBtnColors;
}

const EditBtn: React.FC<editBtnProps> = ({ color }) => {
  const btnStyles = `${styles.messageBtn} ${
    color === editBtnColors.light ? styles.messageBtn_light : styles.messageBtn_dark
  }`;

  return (
    <button className={btnStyles}>
      <Pencil />
    </button>
  );
};

export default EditBtn;
