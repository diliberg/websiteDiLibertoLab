import { DivideIcon as LucideIcon } from 'lucide-react';

export type Publication = {
  title: string;
  link: string;
};

export type Study = {
  title: string;
  description: string;
  image?: string;
  publications?: Publication[];
};

export type ResearchArea = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  bgPattern: string;
  keyStudies: Study[];
};