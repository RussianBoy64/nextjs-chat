"use client";

import { userIds } from "users/users";
import { useStore } from "zustand";
import { chatStore } from "@/store/chatStore";
import useMounted from "hooks/useMounted";
import { MutableRefObject, useEffect, useRef } from "react";

import MyMessage from "@/components/MyMessage";
import OpponentMessage from "../OpponentMessage";

import styles from "./messageFrame.module.scss";

const MessageFrame: React.FC = () => {
  const mounted = useMounted();
  const bottomDivRef: MutableRefObject<null | HTMLDivElement> = useRef(null);
  const messages = useStore(chatStore, (state) => state.messages);

  const scrollToBottom = () => {
    bottomDivRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

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
        <div ref={bottomDivRef}></div>
      </div>
    </div>
  );
};

export default MessageFrame;
