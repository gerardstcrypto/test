import { HelperComponent } from "../types";

export const helperComponents: Record<string, HelperComponent[]> = {
  task: [
    {
      id: "senior-ts",
      title: "Senior TypeScript Engineer",
      category: "task",
      content: "You are tasked as a Senior Software Engineer specialized in TypeScript with extensive experience in enterprise applications.",
      description: "Sets the context as a TypeScript expert",
    },
    {
      id: "frontend-arch",
      title: "Frontend Architect",
      category: "task",
      content: "You are a Frontend Architect with expertise in scalable application design, micro-frontends, and modern build systems.",
      description: "Focuses on architectural decisions",
    },
    {
      id: "full-stack",
      title: "Full Stack Developer",
      category: "task",
      content: "You are a Full Stack Developer with expertise in both frontend (React, Next.js) and backend (Node.js, PostgreSQL) development.",
      description: "Full stack context",
    },
    {
      id: "ui-expert",
      title: "UI/UX Expert",
      category: "task",
      content: "You are a UI/UX Expert with deep knowledge of design systems, accessibility, and user interaction patterns.",
      description: "UI/UX focused role",
    },
    {
      id: "perf-expert",
      title: "Performance Expert",
      category: "task",
      content: "You are a Performance Optimization Expert specializing in web vitals, bundle optimization, and runtime performance.",
      description: "Performance optimization focus",
    },
  ],
  criteria: [
    {
      id: "types-only",
      title: "Types Only",
      category: "criteria",
      content: "Use only types, no interfaces. Prefer union types and utility types where appropriate.",
      description: "Enforces type-only implementations",
    },
    {
      id: "solid",
      title: "SOLID Principles",
      category: "criteria",
      content: "Implement the solution following SOLID principles, especially Single Responsibility and Interface Segregation.",
      description: "Ensures SOLID compliance",
    },
    {
      id: "clean-code",
      title: "Clean Code",
      category: "criteria",
      content: "Follow clean code principles with meaningful names, single responsibility, and proper documentation.",
      description: "Clean code guidelines",
    },
    {
      id: "testing",
      title: "Testing Required",
      category: "criteria",
      content: "Include comprehensive unit tests with React Testing Library, integration tests, and E2E tests with Cypress.",
      description: "Testing requirements",
    },
    {
      id: "accessibility",
      title: "Accessibility",
      category: "criteria",
      content: "Ensure WCAG 2.1 AA compliance, proper ARIA labels, keyboard navigation, and screen reader support.",
      description: "Accessibility requirements",
    },
    {
      id: "performance",
      title: "Performance",
      category: "criteria",
      content: "Optimize for Core Web Vitals, implement proper code splitting, and ensure efficient re-renders.",
      description: "Performance requirements",
    },
  ],
  folder: [
    {
      id: "feature-folders",
      title: "Feature Folders",
      category: "folder",
      content: `Create a feature-based folder structure:
/features
  /auth
    /components
    /hooks
    /services
    /types
    /utils
  /dashboard
    /components
    /hooks
    /services
    /types
    /utils
  /settings
    /components
    /hooks
    /services
    /types
    /utils
/shared
  /components
  /hooks
  /services
  /types
  /utils
/styles
  /themes
  /components
  /utils`,
      description: "Comprehensive feature folder structure",
    },
    {
      id: "next-folders",
      title: "Next.js App Router",
      category: "folder",
      content: `Create a Next.js app router structure:
/app
  /api
    /auth
    /users
    /settings
  /(routes)
    /(auth)
    /(dashboard)
    /(settings)
  /components
    /ui
    /forms
    /layouts
  /lib
    /utils
    /validations
    /constants
  /hooks
    /auth
    /data
    /ui
  /styles
    /themes
    /components`,
      description: "Next.js app router structure",
    },
    {
      id: "monorepo",
      title: "Monorepo Structure",
      category: "folder",
      content: `Create a monorepo structure:
/apps
  /web
  /admin
  /docs
/packages
  /ui
  /utils
  /config
  /types
/tools
  /scripts
  /testing
  /ci
/docs
  /architecture
  /api
  /deployment`,
      description: "Monorepo project structure",
    },
  ],
  custom: [],
};