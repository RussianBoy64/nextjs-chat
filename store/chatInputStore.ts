import { StaticImageData } from "next/image";
import { MutableRefObject } from "react";
import { create } from "zustand";

import img1 from "@/public/C1Lfg6V_PYE.jpg";
import img2 from "@/public/jdz6Ks7tRrM.jpg";
import img3 from "@/public/rpWukAIpAwI.jpg";

interface chatInputState {
  inputValue: string;
  inputPhotos: string[];
  input: MutableRefObject<HTMLTextAreaElement> | null;
  messageToEditId: number | null;

  setInputValue: (text: string) => void;
  clearInputValue: () => void;
  addPhotos: (photosToAdd: string[]) => void;
  removePhoto: (photoIdx: number) => void;
  setInput: (input: MutableRefObject<HTMLTextAreaElement>) => void;
  setMessageToEditId: (messageId: number | null) => void;
}

export const chatInputStore = create<chatInputState>((set) => ({
  inputValue: "",
  inputPhotos: [],
  input: null,
  messageToEditId: null,

  setInputValue: (text) => set({ inputValue: text }),
  clearInputValue: () => set({ inputValue: "", inputPhotos: [] }),
  addPhotos: (photosToAdd) =>
    set(() => {
      return { inputPhotos: photosToAdd };
    }),
  removePhoto: (photoIdx) =>
    set((state) => {
      state.inputPhotos.splice(photoIdx, 1);
      return { inputPhotos: state.inputPhotos };
    }),
  setInput: (input) => set({ input: input }),
  setMessageToEditId: (messageId) => set({ messageToEditId: messageId }),
}));
