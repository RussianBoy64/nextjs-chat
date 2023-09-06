import SmileBtn from "@/UI/Buttons/SmileBtn";
import MessageInput from "../MessageInput";
import UploadBtn from "../Buttons/UploadBtn";

import styles from "./messageForm.module.scss";
import SendBtn from "../Buttons/SendBtn";

const MessageForm = () => {
  return (
    <form className={styles.messageForm}>
      <SmileBtn />
      <MessageInput />
      <UploadBtn />
      <SendBtn />
    </form>
  );
};

export default MessageForm;
