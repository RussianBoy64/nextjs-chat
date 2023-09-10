import { MutableRefObject } from "react";
import { create } from "zustand";

interface chatInputState {
  inputValue: string;
  setInputValue: (text: string) => void;
  input: MutableRefObject<HTMLTextAreaElement> | null;
  setInput: (input: MutableRefObject<HTMLTextAreaElement>) => void;
  messageToEditId: number | null;
  setMessageToEditId: (messageId: number | null) => void;
}

export const chatInputStore = create<chatInputState>((set) => ({
  inputValue: "",
  setInputValue: (text) => set({ inputValue: text }),
  input: null,
  setInput: (input) => set({ input: input }),
  messageToEditId: null,
  setMessageToEditId: (messageId) => set({ messageToEditId: messageId }),
}));
