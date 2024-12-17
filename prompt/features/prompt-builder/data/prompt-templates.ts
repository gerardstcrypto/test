import { PromptSection } from "../types";

type PromptTemplate = {
  name: string;
  description: string;
  sections: PromptSection[];
};

export const promptTemplates: Record<string, PromptTemplate> = {
  "react-component": {
    name: "React Component Creation",
    description: "Template for creating a new React component with best practices",
    sections: [
      {
        id: "header",
        type: "header",
        content: "You are a Senior React Developer with expertise in TypeScript and modern React patterns. Create a React component following these principles:\n- Use TypeScript with strict type checking\n- Implement proper component composition\n- Follow React best practices and hooks guidelines\n- Ensure accessibility standards",
        order: 0,
      },
      {
        id: "body",
        type: "body",
        content: "Create a component that:\n- Is properly typed with TypeScript\n- Uses modern React patterns\n- Implements proper error boundaries\n- Has comprehensive JSDoc documentation\n- Includes proper prop validation\n- Uses CSS-in-JS or CSS Modules for styling",
        order: 1,
      },
      {
        id: "footer",
        type: "footer",
        content: "Additional requirements:\n- Include unit tests with React Testing Library\n- Add storybook documentation\n- Ensure 100% test coverage\n- Follow accessibility guidelines",
        order: 2,
      },
    ],
  },
  "api-design": {
    name: "API Endpoint Design",
    description: "Template for designing RESTful API endpoints",
    sections: [
      {
        id: "header",
        type: "header",
        content: "You are a Senior Backend Developer specializing in RESTful API design. Create an API endpoint following these principles:\n- Follow REST best practices\n- Implement proper error handling\n- Use standard HTTP methods and status codes\n- Include proper validation",
        order: 0,
      },
      {
        id: "body",
        type: "body",
        content: "Design an API endpoint that:\n- Uses proper HTTP methods\n- Implements comprehensive input validation\n- Includes proper error responses\n- Has clear request/response schemas\n- Implements rate limiting\n- Uses proper authentication/authorization",
        order: 1,
      },
      {
        id: "footer",
        type: "footer",
        content: "Additional requirements:\n- Include OpenAPI/Swagger documentation\n- Add security headers\n- Implement proper logging\n- Add monitoring endpoints",
        order: 2,
      },
    ],
  },
  "nextjs-page": {
    name: "Next.js Page Creation",
    description: "Template for creating a new Next.js page with best practices",
    sections: [
      {
        id: "header",
        type: "header",
        content: "You are a Senior Next.js Developer with expertise in the App Router and React Server Components. Create a Next.js page following these principles:\n- Use the App Router architecture\n- Implement proper data fetching\n- Follow Next.js 14 best practices\n- Ensure SEO optimization",
        order: 0,
      },
      {
        id: "body",
        type: "body",
        content: "Create a Next.js page that:\n- Uses proper metadata\n- Implements proper loading states\n- Uses error boundaries\n- Implements proper caching strategies\n- Uses proper image optimization\n- Implements proper routing patterns",
        order: 1,
      },
      {
        id: "footer",
        type: "footer",
        content: "Additional requirements:\n- Include proper TypeScript types\n- Add proper error handling\n- Ensure accessibility\n- Implement proper SEO practices",
        order: 2,
      },
    ],
  },
  "database-schema": {
    name: "Database Schema Design",
    description: "Template for designing database schemas",
    sections: [
      {
        id: "header",
        type: "header",
        content: "You are a Senior Database Architect with expertise in schema design. Create a database schema following these principles:\n- Follow normalization rules\n- Implement proper indexing\n- Use appropriate data types\n- Consider scalability",
        order: 0,
      },
      {
        id: "body",
        type: "body",
        content: "Design a database schema that:\n- Uses proper relationships\n- Implements proper constraints\n- Includes proper indexes\n- Uses appropriate data types\n- Considers performance implications\n- Implements proper foreign keys",
        order: 1,
      },
      {
        id: "footer",
        type: "footer",
        content: "Additional requirements:\n- Include proper documentation\n- Add migration scripts\n- Consider backup strategies\n- Implement proper security measures",
        order: 2,
      },
    ],
  },
};