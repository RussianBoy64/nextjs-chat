type MessageInputHeightSetter = (textarea: HTMLTextAreaElement) => void;

const setMessageInputHeight: MessageInputHeightSetter = (textarea) => {
  textarea.style.height = "25px";
  textarea.style.height = textarea.scrollHeight + "px";
};

export default setMessageInputHeight;
