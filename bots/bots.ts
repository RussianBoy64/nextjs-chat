import { StaticImageData } from "next/image";

import janetAvatar from "@/avatars/janet.webp";
import nicoleAvatar from "@/avatars/nicole.webp";
import AubreyAvatar from "@/avatars/aubrey.webp";
import JavAvatar from "@/avatars/jav.webp";

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
