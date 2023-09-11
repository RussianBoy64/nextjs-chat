"use client";

import { MouseEventHandler } from "react";
import { chatStore } from "@/store/chatStore";

import TrashCan from "@/public/svg/TrashCan";

import styles from "../btn.module.scss";
import { chatInputStore } from "@/store/chatInputStore";

export enum removeBtnColors {
  light,
  dark,
}

interface removeBtnProps {
  messageId: number;
  color: removeBtnColors;
}

const RemoveBtn: React.FC<removeBtnProps> = ({ messageId, color }) => {
  const [messageToEditId, setMessageToEditId, setInputValue] = chatInputStore((state) => [
    state.messageToEditId,
    state.setMessageToEditId,
    state.setInputValue,
  ]);
  const removeMassage = chatStore((state) => state.removeMessage);
  const btnStyles = `${styles.messageBtn} ${
    color === removeBtnColors.light ? styles.messageBtn_light : styles.messageBtn_dark
  }`;

  const onClickHandler: MouseEventHandler = () => {
    if (messageToEditId === messageId) {
      setMessageToEditId(null);
      setInputValue("");
    }

    removeMassage(messageId);
  };

  return (
    <button className={btnStyles} onClick={onClickHandler} title="Remove message">
      <TrashCan />
    </button>
  );
};

export default RemoveBtn;
