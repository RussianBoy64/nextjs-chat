import BOTS from "bots/bots";

import MenuBtn from "@/UI/Buttons/MenuBtn";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__avatarList}>
        {BOTS.map((bot) => (
          <button className={styles.header__avatar}>
            <img
              className={styles.header__avatarImg}
              src={bot.avatar.src}
              key={bot.id}
              alt={`${bot.name} avatar`}
            />
          </button>
        ))}
      </div>
      <div className={styles.header__chatInfo}>
        <h1 className={styles.header__chatName}>🦄 Team Unicorns</h1>
        <p className={styles.header__lastVisit}>last seen 45 minutes ago</p>
      </div>
      <MenuBtn />
    </header>
  );
};

export default Header;
