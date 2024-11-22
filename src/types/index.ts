import { ReactNode, SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TChildren = {
  children: ReactNode;
};


export interface IEducation {
  degree: string;
  image: string;
  institution: string;
  startDate: string; 
  endDate: string;   
  gpa: number;
  major: string;
  minor: string;
  courses: string[];
  achievements: string[];
} 