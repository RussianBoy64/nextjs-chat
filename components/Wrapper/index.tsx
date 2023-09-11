import styles from "./wrapper.module.scss";

interface wrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: wrapperProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
