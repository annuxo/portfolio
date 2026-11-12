export interface Profile {
  name: string
  role: string
  tagline: string
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
  bio: string
  photo: string | null
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Project {
  title: string
  subtitle: string
  period: string
  problem: string
  approach: string
  outcome: string
  tags: string[]
  link: string | null
}

export interface Education {
  degree: string
  institution: string
  year: string
  score: string
}

export interface Certification {
  name: string
  issuer: string
  year: string
  // Path to a PDF in /public (relative to site root). If present, the card becomes clickable.
  file?: string
}

export interface Experience {
  company: string
  title: string
  period: string
  summary: string
  achievements: string[]
  // Optional certificate / completion letter shown on the card
  certificate?: string
}

export interface LeadershipRole {
  role: string
  organisation: string
  period: string
  highlights: string[]
}
