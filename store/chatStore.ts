import { create } from "zustand";
import { persist } from "zustand/middleware";

import dayjs from "dayjs";
import { ITime, getTime } from "helpers/dayjs";
import { StaticImageData } from "next/image";
import USERS, { userIds } from "users/users";

export interface IMessage {
  messageId: number;
  authorId: number;
  authorName?: string;
  authorPosition?: string;
  authorAvatar?: StaticImageData | string;
  text: string;
  photo: string[];
  timeShtamp: ITime;
}

export type messageToSend = Pick<IMessage, "authorId" | "text" | "photo">;
export type messageToEdit = Pick<IMessage, "messageId" | "text" | "photo">;

interface chatState {
  messagesMap: { [key: string]: number };
  messages: IMessage[];
  isBotWriting: boolean;
  addMessage: (messageData: messageToSend) => void;
  editMessage: (messageData: messageToEdit) => void;
  removeMessage: (messageId: number) => void;
  setIsBotWriting: (isWriting: boolean) => void;
}

export const chatStore = create<chatState>()(
  persist(
    (set) => ({
      messagesMap: {},
      messages: [],
      isBotWriting: false,
      addMessage: ({ authorId, text, photo }) =>
        set((state) => {
          const messageId = dayjs().valueOf();
          const messageIndex = state.messages.length;
          const message: IMessage = {
            messageId,
            authorId: authorId,
            authorName: USERS[authorId].name,
            authorPosition: USERS[authorId].position,
            authorAvatar: USERS[authorId].avatar,
            text,
            photo,
            timeShtamp: getTime(),
          };
          const updatedMessageMap = {
            ...state.messagesMap,
            [`${messageId}`]: messageIndex,
          };

          const isBotWriting = authorId !== userIds.Vova ? false : state.isBotWriting;

          return {
            isBotWriting: isBotWriting,
            messagesMap: updatedMessageMap,
            messages: [...state.messages, message],
          };
        }),
      editMessage: ({ messageId, text, photo }) =>
        set((state) => {
          const messageIndex = state.messagesMap[messageId];
          const messageToEdit = state.messages[messageIndex];

          messageToEdit.text = text;
          messageToEdit.photo = photo;

          state.messages.splice(messageIndex, 1, messageToEdit);

          return {
            messages: [...state.messages],
          };
        }),
      removeMessage: (messageId) =>
        set((state) => {
          const messageIndex = state.messagesMap[messageId];

          state.messages.splice(messageIndex, 1);

          const updatedMessageMap = Object.fromEntries(
            state.messages.map((message, index) => [message.messageId, index])
          );

          return {
            messagesMap: updatedMessageMap,
            messages: [...state.messages],
          };
        }),
      setIsBotWriting: (isWriting) => set({ isBotWriting: isWriting }),
    }),
    {
      name: "chat-storage",
    }
  )
);
