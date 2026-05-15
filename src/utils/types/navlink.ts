interface NavLinkItem {
  label: string;
  icon: React.ReactNode;
  href: string;
  isExternal?: boolean;
}

interface TopNavProps {
  logoSrc?: string;
  logoAlt?: string;
  items?: NavLinkItem[];
}