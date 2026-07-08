export type ProjectCardEntities = ProjectCardEntity[];

export type ProjectCardEntity = {
  id: number;
  name: string;
  description: string;
  badges: ProjectBadges;
  details: ProjectDetails;
};

export type ProjectDetails = {
  imgUrls: string[];
  detailedDescription: string;
  githubUrl: string;
};

export type ProjectBadges = ProjectBadge[];

export type ProjectBadge = {
  id: number;
  name: string;
  color: string;
  type: string;
};
