import { FolderIcon, HomeIcon, NewspaperIcon, UserIcon } from "./icons";
import { NavLinkItem } from "./types";

export const DEFAULT_ITEMS: NavLinkItem[] = [
    { label: "Home", icon: <HomeIcon />, href: "/" },
    { label: "About", icon: <UserIcon />, href: "/about" },
    { label: "Projects", icon: <FolderIcon />, href: "/projects" },
    {
        label: "Resume",
        icon: <NewspaperIcon />,
        href: "https://drive.google.com/file/d/1ZPPGFmGJTytVwUppRnjK-s6hVq2TeP-R/view?usp=sharing",
        isExternal: true,
    },
];