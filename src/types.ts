export interface PersonalInfo {
  name: string;
  primaryTitle: string;
  dateOfBirth: string;
  nationality: string;
  gender: string;
  phone: string;
  email: string;
  linkedIn: string;
  linkedInUrl: string;
  location: string;
  summary: string;
  academicFields: string[];
  practicalHighlights: string[];
  avatarUrl?: string;
}

export interface WorkExperience {
  id: string;
  organization: string;
  role: string;
  duration: string;
  period: string;
  website: string;
  description: string;
  practicalExperience: string[];
  department: string;
  location?: string;
  tag: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  fieldsOfStudy: string[];
  eqfLevel: number;
  educationLevel: string;
  credits: string;
  website: string;
  isCurrent?: boolean;
  cgpa?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    iconName?: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  levels?: string;
  issuingOrg: string;
  website: string;
  items?: string[];
  category: string;
}

export interface Project {
  id: string;
  title: string;
  duration: string;
  role: string;
  location: string;
  responsibilities: string[];
  imageUrl?: string;
  placeholderCategory: string;
  detailsNote?: string;
}

export interface Activity {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface Membership {
  id: string;
  organization: string;
  membershipType: string;
  memberId: string;
  website: string;
}

export interface LanguageSkill {
  language: string;
  type: string;
  understanding?: string;
  speaking?: string;
  writing?: string;
}

export interface Reference {
  id: string;
  name: string;
  position: string;
  organization: string;
  subOrganization?: string;
  phone: string;
  email: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Profile' | 'Construction Site' | 'Surveying' | 'Structural Work' | 'Engineering Drawings' | 'Project Documentation';
  caption: string;
  imageUrl: string;
  aspectRatio?: string;
  technicalNote?: string;
}
