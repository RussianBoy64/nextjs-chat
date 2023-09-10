"use client";

import useStore from "hooks/useStore";
import { chatStore } from "@/store/chatStore";

import DateInfo from "@/components/DateInfo";
import MessageFrame from "@/components/MessageFrame";
import Typing from "@/components/UI/Typing";

export default function Home() {
  const isBotWriting = useStore(chatStore, (state) => state.isBotWriting);

  return (
    <main>
      <DateInfo />
      <MessageFrame />
      {isBotWriting && <Typing />}
    </main>
  );
}
