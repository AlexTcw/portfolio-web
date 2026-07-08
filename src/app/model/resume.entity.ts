export type ResumeEntityArray = ResumeEntity[];
export type ResumeEntity = {
  id: number;
  name: string;
  details: ResumeDetailsArray;
};
export type ResumeDetailsArray = ResumeDetails[];
export type ResumeDetails = {
  img: number;
  title?: string;
  subtitle?: string;
  link?: string;
  legend?: string;
};
