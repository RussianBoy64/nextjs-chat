type MessageInputHeightSetter = (textarea: HTMLTextAreaElement) => void;

export const setMessageInputHeight: MessageInputHeightSetter = (textarea) => {
  textarea.style.height = "25px";
  textarea.style.height = textarea.scrollHeight + "px";
};
