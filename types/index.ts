export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  github?: string
  featured?: boolean
}

export interface Skill {
  category: string
  items: string[]
}

export interface Experience {
  company: string
  position: string
  period: string
  description: string
}

export interface Service {
  icon: string
  title: string
  description: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  image?: string
}
