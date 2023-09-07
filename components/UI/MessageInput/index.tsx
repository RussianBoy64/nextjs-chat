"use client";

import { ChangeEventHandler } from "react";
import setMessageInputHeight from "helpers/setMessageInputHeight";

import styles from "./messageInput.module.scss";

const MessageInput = () => {
  const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const textarea = event.target;
    setMessageInputHeight(textarea);
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
