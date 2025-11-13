'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function SkillsContent() {
  const code = `// yetenekler.tsx

type SkillLevel = "Expert" | "Advanced" | "Intermediate" | "Beginner";

const skills = {
  frontend: {
    React: "Advanced",
    NextJS: "Advanced",
    JavaScript: "Advanced",
    TypeScript: "Intermediate",
    TailwindCSS: "Advanced",
    Bootstrap: "Advanced",
    HTML_CSS: "Expert",
    jQuery: "Intermediate",
    Redux: "Intermediate",
    "React Router": "Advanced",
    "React Hooks": "Advanced",
    Sass: "Intermediate",
    Webpack: "Intermediate",
    Vite: "Intermediate",
  },
  backend: {
    "C#": "Advanced",
    ".NET Core": "Advanced",
    ".NET Framework": "Advanced",
    "ASP.NET MVC": "Advanced",
    "ASP.NET Web API": "Advanced",
    NodeJS: "Intermediate",
    Express: "Intermediate",
    "Entity Framework": "Advanced",
    LINQ: "Advanced",
    "SignalR": "Intermediate",
    "Web Sockets": "Intermediate",
    Dapper: "Intermediate",
    "Dependency Injection": "Advanced",
    AutoMapper: "Advanced",
  },
  database: {
    "SQL Server": "Advanced",
    "T-SQL": "Advanced",
    MongoDB: "Intermediate",
    MySQL: "Intermediate",
    PostgreSQL: "Beginner",
    Redis: "Intermediate",
    "Database Design": "Advanced",
    "Stored Procedures": "Advanced",
    Indexing: "Intermediate",
    "Query Optimization": "Intermediate",
  },
  gamedev: {
    Unity: "Advanced",
    "C# for Games": "Advanced",
    "2D Game Dev": "Advanced",
    "3D Game Dev": "Intermediate",
    "Game Design": "Intermediate",
    "Unity UI": "Advanced",
    "Unity Physics": "Intermediate",
    "Unity Animation": "Intermediate",
    "Scriptable Objects": "Advanced",
    "Unity Prefabs": "Advanced",
  },
  tools: {
    Git: "Advanced",
    GitHub: "Advanced",
    "Visual Studio": "Expert",
    "VS Code": "Expert",
    Docker: "Intermediate",
    Postman: "Advanced",
    "Azure DevOps": "Intermediate",
    Jira: "Intermediate",
    NPM: "Advanced",
    Yarn: "Intermediate",
    "Git Flow": "Advanced",
    Swagger: "Advanced",
  },
  cloud_devops: {
    Azure: "Intermediate",
    "Azure App Service": "Intermediate",
    "Azure Functions": "Beginner",
    "CI/CD": "Intermediate",
    "GitHub Actions": "Intermediate",
    Vercel: "Advanced",
    Netlify: "Intermediate",
  },
  testing: {
    "Unit Testing": "Intermediate",
    xUnit: "Intermediate",
    NUnit: "Intermediate",
    "Integration Testing": "Beginner",
    Moq: "Intermediate",
    Jest: "Beginner",
  },
  architecture: {
    "RESTful API": "Advanced",
    "Microservices": "Intermediate",
    "Clean Architecture": "Intermediate",
    "Onion Architecture": "Intermediate",
    "Design Patterns": "Intermediate",
    "SOLID Principles": "Advanced",
    "Repository Pattern": "Advanced",
    "CQRS": "Beginner",
    "MVC Pattern": "Advanced",
  },
  methodologies: {
    Agile: "Intermediate",
    Scrum: "Intermediate",
    Kanban: "Intermediate",
    "Code Review": "Advanced",
    "Pair Programming": "Intermediate",
  },
  other: {
    JSON: "Expert",
    XML: "Advanced",
    JWT: "Advanced",
    OAuth: "Intermediate",
    "API Security": "Intermediate",
    Localization: "Intermediate",
    "Error Handling": "Advanced",
    Logging: "Advanced",
  }
};

export default skills;`;

  return (
    <SyntaxHighlighter
      language="typescript"
      style={vscDarkPlus}
      showLineNumbers
      customStyle={{
        margin: 0,
        padding: '2rem',
        background: '#1e1e1e',
        fontSize: '15px',
        lineHeight: '1.6',
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
}
