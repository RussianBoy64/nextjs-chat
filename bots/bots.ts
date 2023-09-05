import { StaticImageData } from "next/image";

import janetAvatar from "@/avatars/janet.png";
import nicoleAvatar from "@/avatars/nicole.png";
import AubreyAvatar from "@/avatars/aubrey.png";
import JavAvatar from "@/avatars/jav.png";

interface IBot {
  id: number;
  name: string;
  position: string;
  avatar: StaticImageData;
}

const BOTS = [
  { id: 0, name: "Janet", position: "Product", avatar: janetAvatar },
  { id: 1, name: "Nicole", position: "Engineering", avatar: nicoleAvatar },
  { id: 2, name: "Aubrey", position: "Product", avatar: AubreyAvatar },
  { id: 3, name: "Jav", position: "Developer", avatar: JavAvatar },
];

export default BOTS;
