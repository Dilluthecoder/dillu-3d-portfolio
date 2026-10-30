export interface Project {
  id: string;
  name: string;
  category: 'mern' | 'frontend' | 'cpp' | 'iot';
  description: string;
  techStack: string[];
  features: string[];
  repoUrl: string;
  liveUrl?: string;
  backendUrl?: string;
  status: string;
  screenshot: string;
  gallery?: string[];
  verified: boolean;
}

export interface Skill {
  name: string;
  category: 'programming' | 'web' | 'cs' | 'tools';
  description: string;
  highlight: string;
  icon: string;
}

export interface Certification {
  title: string;
  issuer: string;
  category: string;
  description: string;
  verified: boolean;
}

export interface Achievement {
  title: string;
  event: string;
  year: string;
  role: string;
  description: string;
}
