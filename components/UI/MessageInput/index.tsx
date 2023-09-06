"use client";

import { ChangeEventHandler } from "react";

import styles from "./messageInput.module.scss";

const MessageInput = () => {
  const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const textarea = event.target;
    textarea.style.height = "25px";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  return (
    <textarea
      className={styles.messageInput}
      placeholder="Start typing..."
      title="Type message here"
      onChange={onChangeHandler}
    />
  );
};

export default MessageInput;
