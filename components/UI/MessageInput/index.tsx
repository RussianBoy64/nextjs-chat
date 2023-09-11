"use client";

import { ChangeEventHandler, KeyboardEventHandler, MutableRefObject } from "react";
import { setMessageInputHeight } from "helpers/setMessageInputHeight";
import { chatInputStore } from "@/store/chatInputStore";
import { chatStore, messageToEdit, messageToSend } from "@/store/chatStore";
import { getAnswerFromBot, userIds } from "users/users";

import styles from "./messageInput.module.scss";

interface messageInputProps {
  inputRef: MutableRefObject<HTMLTextAreaElement> | MutableRefObject<null>;
}

const MessageInput: React.FC<messageInputProps> = ({ inputRef }) => {
  const [
    inputValue,
    inputPhotos,
    setInputValue,
    clearInputValue,
    messageToEditId,
    setMessageToEditId,
  ] = chatInputStore((state) => [
    state.inputValue,
    state.inputPhotos,
    state.setInputValue,
    state.clearInputValue,
    state.messageToEditId,
    state.setMessageToEditId,
  ]);
  const [addMessage, editMessage, isBotWriting] = chatStore((state) => [
    state.addMessage,
    state.editMessage,
    state.setIsBotWriting,
  ]);

  const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const textarea = event.target;
    setInputValue(textarea.value);
  };

  const onKeyDownHandler: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    const isCrtlPressed = event.ctrlKey;
    const isAltPressed = event.altKey;
    const isShiftPressed = event.shiftKey;

    if (isCrtlPressed || isAltPressed || isShiftPressed) return;

    const isEnterPressed = event.code === "Enter";
    const isNumpadEnterPressed = event.code === "NumpadEnter";

    if (isEnterPressed || isNumpadEnterPressed) {
      event.preventDefault();
      if (inputValue === "" && inputPhotos.length === 0) return;

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
    }
  };

  if (inputRef.current) {
    inputRef.current.value = inputValue;
    setMessageInputHeight(inputRef.current);
  }

  return (
    <textarea
      className={styles.messageInput}
      value={inputValue}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
      ref={inputRef}
      name="message"
      placeholder="Start typing..."
      title="Type message here"
    />
  );
};

export default MessageInput;
