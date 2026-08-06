export interface IBasics {
  name: string;
  image: string;
}

export interface IProject {
  basics: IBasics;
  description: string;
  link?: string;
  frontendRepoLink?: string;
  backendRepoLink?: string;
}

export enum ESkillCategories {
  AI = "AI",
  LANGUAGES = "Languages",
  DATABASES = "Databases",
  FRAMEWORKS = "Frameworks",
  CLOUD = "Cloud",
}

export interface ISkill {
  basics: IBasics;
  category: ESkillCategories;
  needsInvert?: boolean;
}
