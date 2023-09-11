"use client";

import { MouseEventHandler } from "react";
import { chatInputStore } from "@/store/chatInputStore";
import { IMessage, chatStore } from "@/store/chatStore";

import Pencil from "@/public/svg/Pencil";

import styles from "../btn.module.scss";

export enum editBtnColors {
  light,
  dark,
}

interface editBtnProps {
  messageId: number;
  color: editBtnColors;
}

const EditBtn: React.FC<editBtnProps> = ({ messageId, color }) => {
  const [messagesMap, messages] = chatStore((state) => [
    state.messagesMap,
    state.messages,
  ]);
  const [setInputValue, addPhotos, setMessageToEditId] = chatInputStore((state) => [
    state.setInputValue,
    state.addPhotos,
    state.setMessageToEditId,
  ]);
  const messageToEdit: IMessage = messages[messagesMap[messageId]];
  const btnStyles = `${styles.messageBtn} ${
    color === editBtnColors.light ? styles.messageBtn_light : styles.messageBtn_dark
  }`;

  const onClickHandler: MouseEventHandler = () => {
    setMessageToEditId(messageId);
    setInputValue(messageToEdit.text);
    addPhotos(messageToEdit.photo);
  };

  return (
    <button className={btnStyles} onClick={onClickHandler} title="Edit message">
      <Pencil />
    </button>
  );
};

export default EditBtn;
