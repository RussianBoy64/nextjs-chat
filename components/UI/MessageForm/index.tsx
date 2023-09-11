"use client";

import { ChangeEventHandler, useRef } from "react";
import { chatInputStore } from "@/store/chatInputStore";
import { chatStore, messageToEdit, messageToSend } from "@/store/chatStore";
import { getAnswerFromBot, userIds } from "users/users";

import SmileBtn from "@/UI/Buttons/SmileBtn";
import MessageInput from "../MessageInput";
import UploadBtn from "../Buttons/UploadBtn";
import SendBtn from "../Buttons/SendBtn";
import UploadBar from "../UploadBar";

import styles from "./messageForm.module.scss";

const MessageForm = () => {
  const inputRef = useRef(null);
  const [inputValue, inputPhotos, clearInputValue, messageToEditId, setMessageToEditId] =
    chatInputStore((state) => [
      state.inputValue,
      state.inputPhotos,
      state.clearInputValue,
      state.messageToEditId,
      state.setMessageToEditId,
    ]);
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
        text: inputValue,
        photo: inputPhotos,
      };

      editMessage(editedMessage);
      clearInputValue();
      setMessageToEditId(null);
    } else {
      const message: messageToSend = {
        authorId: userIds.Vova,
        text: inputValue,
        photo: inputPhotos,
      };

      const textToAnswer = message.text;
      const isPhoto = message.photo.length > 0;

      addMessage(message);
      clearInputValue();
      getAnswerFromBot(textToAnswer, isPhoto, addMessage, isBotWriting);
    }
  };

  return (
    <form className={styles.messageForm} onSubmit={onSubmitHendler}>
      <SmileBtn />
      <MessageInput inputRef={inputRef} />
      <UploadBtn />
      <SendBtn isDisabled={inputValue === "" && inputPhotos.length === 0} />
      <UploadBar />
    </form>
  );
};

export default MessageForm;
