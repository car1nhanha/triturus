export type TechnologyName =
  | "Go"
  | "Node.js"
  | "NestJS"
  | "TypeScript"
  | "Express"
  | "React"
  | "VUE"
  | "Next.js"
  | "React Native"
  | "Vite"
  | "TailwindCSS"
  | "Styled Components"
  | "PostgreSQL"
  | "MySQL"
  | "MongoDB"
  | "Redis"
  | "DynamoDB"
  | "AWS"
  | "AWS Lambda"
  | "Amazon S3"
  | "Amazon ECS"
  | "Amazon SQS"
  | "Amazon SNS"
  | "CloudWatch"
  | "Docker"
  | "LocalStack"
  | "RabbitMQ"
  | "Event-Driven Architecture"
  | "Jest"
  | "Supertest"
  | "Cypress"
  | "GitHub Actions"
  | "CI/CD"
  | "pnpm"
  | "Mercado Pago"
  | "Yuno"
  | "Twilio"
  | "AC7 Banking";

export type Technology = {
  name: TechnologyName;
  background: string;
  color?: string;
};

export const technologies: Technology[] = [
  { name: "Go", background: "#00ADD8", color: "#16181d" },
  { name: "Node.js", background: "#339933", color: "#16181d" },
  { name: "NestJS", background: "#E0234E", color: "#16181d" },
  { name: "TypeScript", background: "#3178C6", color: "#16181d" },
  { name: "Express", background: "#000000", color: "#FFFFFF" },
  { name: "React", background: "#61DAFB", color: "#16181d" },
  { name: "VUE", background: "#4FC08D", color: "#16181d" },
  { name: "Next.js", background: "#000000", color: "#FFFFFF" },
  { name: "React Native", background: "#61DAFB", color: "#16181d" },
  { name: "Vite", background: "#646CFF", color: "#16181d" },
  { name: "TailwindCSS", background: "#06B6D4", color: "#16181d" },
  { name: "Styled Components", background: "#DB7093", color: "#16181d" },
  { name: "PostgreSQL", background: "#4169E1", color: "#16181d" },
  { name: "MySQL", background: "#4479A1", color: "#16181d" },
  { name: "MongoDB", background: "#47A248", color: "#16181d" },
  { name: "Redis", background: "#DC382D", color: "#16181d" },
  { name: "DynamoDB", background: "#4053D6", color: "#16181d" },
  { name: "AWS", background: "#232F3E", color: "#FFFFFF" },
  { name: "AWS Lambda", background: "#FF9900", color: "#16181d" },
  { name: "Amazon S3", background: "#569A31", color: "#16181d" },
  { name: "Amazon ECS", background: "#FF9900", color: "#16181d" },
  { name: "Amazon SQS", background: "#FF4F8B", color: "#16181d" },
  { name: "Amazon SNS", background: "#FF4F8B", color: "#16181d" },
  { name: "CloudWatch", background: "#FF9900", color: "#16181d" },
  { name: "Docker", background: "#2496ED", color: "#16181d" },
  { name: "LocalStack", background: "#FBAA3D", color: "#16181d" },
  { name: "RabbitMQ", background: "#FF6600", color: "#16181d" },
  { name: "Event-Driven Architecture", background: "#6B7280", color: "#16181d" },
  { name: "Jest", background: "#C21325", color: "#16181d" },
  { name: "Supertest", background: "#000000", color: "#FFFFFF" },
  { name: "Cypress", background: "#17202C", color: "#FFFFFF" },
  { name: "GitHub Actions", background: "#2088FF", color: "#16181d" },
  { name: "CI/CD", background: "#0A0A0A", color: "#FFFFFF" },
  { name: "pnpm", background: "#F69220", color: "#16181d" },
  { name: "Mercado Pago", background: "#009EE3", color: "#16181d" },
  { name: "Yuno", background: "#6C5CE7", color: "#16181d" },
  { name: "Twilio", background: "#F22F46", color: "#16181d" },
  { name: "AC7 Banking", background: "#6B7280", color: "#16181d" },
];
