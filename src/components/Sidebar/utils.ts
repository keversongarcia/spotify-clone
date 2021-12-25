import { IconType } from "react-icons";
import { HiHome } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import { BiLibrary } from "react-icons/bi";
import { GiHearts } from "react-icons/gi";
import { TiPlus } from "react-icons/ti";
import { CgMediaPodcast } from "react-icons/cg";

interface SidebarProps {
  name: string;
  href: string;
  icon: IconType;
}

const sidebar: SidebarProps[] = [
  {
    name: "Início",
    href: "/",
    icon: HiHome,
  },
  {
    name: "Buscar",
    href: "/search",
    icon: RiSearchLine,
  },
  {
    name: "Sua Biblioteca",
    href: "/collection",
    icon: BiLibrary,
  },
];

const subSidebar = [
  {
    name: "Criar playlist",
    href: "/",
    icon: TiPlus,
  },
  {
    name: "Músicas curtidas",
    href: "/collection/tracks",
    icon: GiHearts,
  },
  {
    name: "Seus episódios",
    href: "/collection/episodes",
    icon: CgMediaPodcast,
  },
];

export { sidebar, subSidebar };
