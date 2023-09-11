import { StaticImageData } from "next/image";

import vovaAvatar from "@/avatars/vova.webp";
import janetAvatar from "@/avatars/janet.webp";
import nicoleAvatar from "@/avatars/nicole.webp";
import AubreyAvatar from "@/avatars/aubrey.webp";
import JavAvatar from "@/avatars/jav.webp";
import { messageToSend } from "@/store/chatStore";

export interface IUser {
  id: number;
  name: string;
  position: string;
  avatar: StaticImageData;
}

export enum userIds {
  Vova,
  Janet,
  Nicole,
  Aubrey,
  Jav,
}

const USERS = [
  { id: userIds.Vova, name: "Vova", position: "Developer", avatar: vovaAvatar },
  { id: userIds.Janet, name: "Janet", position: "Product", avatar: janetAvatar },
  { id: userIds.Nicole, name: "Nicole", position: "Engineering", avatar: nicoleAvatar },
  { id: userIds.Aubrey, name: "Aubrey", position: "Product", avatar: AubreyAvatar },
  { id: userIds.Jav, name: "Jav", position: "Developer", avatar: JavAvatar },
];

export const getAnswerFromBot = (
  messageToAnswer: string,
  isPhoto: boolean,
  sendAnswer: (messageData: messageToSend) => void,
  setIsBotWriting: (isWriting: boolean) => void
) => {
  const messageLowerCase = messageToAnswer.toLocaleLowerCase();
  const message: messageToSend = {
    authorId: 1,
    text: "Hello user!",
    photo: [],
  };
  const timeOut = Math.floor(Math.random() * 2000) + 300;

  if (messageLowerCase.includes("janet")) {
    message.authorId = userIds.Janet;
  } else if (messageLowerCase.includes("nicole")) {
    message.authorId = userIds.Nicole;
  } else if (messageLowerCase.includes("aubrey")) {
    message.authorId = userIds.Aubrey;
  } else if (messageLowerCase.includes("jav")) {
    message.authorId = userIds.Jav;
  } else {
    message.authorId = Math.floor(Math.random() * 4) + 1;
  }

  const botData = USERS[message.authorId];

  if (messageLowerCase.includes("bye")) message.text = "Good bye!";

  if (isPhoto) {
    message.text = "Nice photo! Looak at my avatar.";
    message.photo.push(botData.avatar);
  }

  setIsBotWriting(true);
  setTimeout(() => {
    sendAnswer(message);
  }, timeOut);
};

export default USERS;
