import type { TechnologyName } from "../atoms/tag";

export type ProjectItens = {
  title: string;
  description: string;
  img: string;
  tags: TechnologyName[];
  link: string;
};
