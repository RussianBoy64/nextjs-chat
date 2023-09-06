import MessageForm from "@/UI/MessageForm";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <MessageForm />
    </footer>
  );
};

export default Footer;
