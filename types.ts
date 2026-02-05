
export type Language = 'ar' | 'en';
export type Theme = 'light' | 'dark';

export interface NavItem {
  label: { ar: string; en: string };
  href: string;
}

export interface Service {
  id: number;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  icon: string;
  image: string;
}

export interface Stat {
  label: { ar: string; en: string };
  value: string;
  suffix: string;
}
