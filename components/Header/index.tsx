import BOTS from "bots/bots";

import Image from "next/image";
import MenuBtn from "@/UI/Buttons/MenuBtn";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.header__avatarList}>
        {BOTS.map((bot) => (
          <li className={styles.header__avatar} key={bot.id}>
            <Image
              className={styles.header__avatarImg}
              src={bot.avatar.src}
              alt={`${bot.name} avatar`}
              fill
              sizes={"32"}
              key={bot.id}
            />
          </li>
        ))}
      </ul>
      <div className={styles.header__chatInfo}>
        <h1 className={styles.header__chatName}>🦄 Team Unicorns</h1>
        <p className={styles.header__lastVisit}>last seen 45 minutes ago</p>
      </div>
      <MenuBtn />
    </header>
  );
};

export default Header;
