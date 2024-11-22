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

export interface ISkill {
  name: string;
  percentage: number;
  image: string;
  description: string;
  yearsOfExperience: number;
  category?: string;
}