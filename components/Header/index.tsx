import USERS, { userIds } from "users/users";

import Image from "next/image";
import MenuBtn from "@/UI/Buttons/MenuBtn";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.header__avatarList}>
        {USERS.map((user) => {
          if (user.id !== userIds.Vova)
            return (
              <li className={styles.header__avatar} key={user.id}>
                <Image
                  className={styles.header__avatarImg}
                  src={user.avatar.src}
                  alt={`${user.name} avatar`}
                  fill
                  sizes={"32"}
                  key={user.id}
                />
              </li>
            );
        })}
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
