export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

// サイト情報(型定義)
export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    x: string;
    github: string;
  };
};

// ナビゲーション情報(型定義)
export type MarketingConfig = {
  mainNav: NavItem[];
};
