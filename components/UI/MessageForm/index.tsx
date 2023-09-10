"use client";

import { ChangeEventHandler, useRef } from "react";
import { chatInputStore } from "@/store/chatInputStore";
import { chatStore, messageToEdit, messageToSend } from "@/store/chatStore";
import { getAnswerFromBot, userIds } from "users/users";

import SmileBtn from "@/UI/Buttons/SmileBtn";
import MessageInput from "../MessageInput";
import UploadBtn from "../Buttons/UploadBtn";
import SendBtn from "../Buttons/SendBtn";

import styles from "./messageForm.module.scss";

const MessageForm = () => {
  const inputRef = useRef(null);
  const [inpuValue, setInputValue, messageToEditId, setMessageToEditId] = chatInputStore(
    (state) => [
      state.inputValue,
      state.setInputValue,
      state.messageToEditId,
      state.setMessageToEditId,
    ]
  );
  const [addMessage, editMessage, isBotWriting] = chatStore((state) => [
    state.addMessage,
    state.editMessage,
    state.setIsBotWriting,
  ]);

  const onSubmitHendler: ChangeEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (messageToEditId) {
      const editedMessage: messageToEdit = {
        messageId: messageToEditId,
        text: inpuValue,
        photo: [],
      };

      editMessage(editedMessage);
      setInputValue("");
      setMessageToEditId(null);
    } else {
      const message: messageToSend = {
        authorId: userIds.Vova,
        text: inpuValue,
        photo: [],
      };

      const textToAnswer = message.text;
      const isPhoto = message.photo.length > 0;

      addMessage(message);
      setInputValue("");
      getAnswerFromBot(textToAnswer, isPhoto, addMessage, isBotWriting);
    }
  };

  return (
    <form className={styles.messageForm} onSubmit={onSubmitHendler}>
      <SmileBtn />
      <MessageInput inputRef={inputRef} />
      <UploadBtn />
      <SendBtn isDisabled={inpuValue === ""} />
    </form>
  );
};

export default MessageForm;
