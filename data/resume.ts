export type Profile = {
  name: string;
  role: string;
  summary: string;
  location: string;
  avatar: string;
};

export type Contact = {
  email: string;
  phone?: string;
  website?: string;
  github?: string;
  linkedin?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
};

export type Skill = {
  category: string;
  items: string[];
};

export type Project = {
  name: string;
  description: string;
  url?: string;
  tags: string[];
};

export type Resume = {
  profile: Profile;
  contact: Contact;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
};

export const siteUrl = "https://seu-site.exemplo.com";

export const resume: Resume = {
  profile: {
    name: "Matheus de Oliveira Marques",
    role: "Desenvolvedor(a) Frontend Pleno",
    summary:
      "Desenvolvedor(a) com foco em interfaces web modernas, acessíveis e performáticas. Apaixonado(a) por React e pelo ecossistema JavaScript.Sou um profissional que atua em diversas áreas de desenvolvimento.Minhas habilidades abrangem desenvolvimento Full Stack, com expertise em linguagens como SQL Server, PHP, HTML, CSS, JavaScript, ReactJS e React Native. Experiência em Vtex, Lambda e API Gateway.Sou motivado por desafios e busco sempre o melhor para a equipe e para a empresa",
    location: "Carapicuiba, São Paulo",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQH6kWGRDOhnvw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705887959898?e=1788998400&v=beta&t=jv5VKMLWdYtJlocl2QTAJqNvFW58mUKj7QzUyZsOIss",
  },
  contact: {
    email: "theu1421@gmail.com",
    phone: "+55 11949367940",
    website: "",
    github: "https://github.com/Matheus-de-Oliveira-Marques",
    linkedin: "https://www.linkedin.com/in/matheus-de-oliveira-marques-459529156/",
  },
  experiences: [
    {
      company: "Quality Digital",
      role: "DESENVOLVEDOR WEB FULL STACK- PLENO",
      period: "2024 — atual",
      description:
        "Desenvolvimento e manutenção de interfaces web com React e TypeScript. Construção de loja e-commerce , utilizando ambiente Vtex,Grapqhl,Scss,React,Typescript, JavasCript, CSS",
      highlights: [
        "Criação de componentes reutilizáveis",
        "Correção de bugs e melhorias de UX",
        "Implementação de novas funcionalidades no produto principal",
        "Melhoria de performance e acessibilidade das telas",
        "Colaboração com design e backend em entregas contínuas",
        "Trabalhando em grandes clientes como , americanas, tena, fastShop, Atacadão"
      ],
    },
    {
      company: "Maeztra",
      role: "DESENVOLVEDOR FRONT END - PLENO",
      period: "2023 — 2023",
      description:
        "Desenvolvimento e manutenção de interfaces web com React e TypeScript. Construção de loja e-commerce , utilizando ambiente Vtex,Grapqhl,Scss,React,Typescript, JavasCript, CSS",
      highlights: [
        "Criação de componentes reutilizáveis",
        "Correção de bugs e melhorias de UX",
        "Implementação de novas funcionalidades no produto principal",
        "Melhoria de performance e acessibilidade das telas",
        "Colaboração com design e backend em entregas contínuas"
      ],
    },
    {
      company: "Trade Up",
      role: "DESENVOLVEDOR WEB FULL STACK - PLENO",
      period: "2023 — 2023",
      description:
        "Construção e criação de fluxos como arquitetura e desenvolvimento de aplicativo voltado a ecommerce",
      highlights: [
        "Criação de componentes reutilizáveis",
        "Criação de arquitetura do projeto",
        "Implementação de novas funcionalidades no produto principal",
        "Colaboração com design e backend em entregas contínuas"
      ],
    },
      {
      company: "Corebiz",
      role: "DESENVOLVEDOR FRONT END - PLENO",
      period: "2020 — 2021",
      description:
        "Desenvolvimento e manutenção de interfaces web com React e TypeScript. Construção de loja e-commerce , utilizando ambiente Vtex,Grapqhl,Scss,React,Typescript, JavasCript, CSS",
      highlights: [
        "Criação de componentes reutilizáveis",
        "Correção de bugs e melhorias de UX",
        "Implementação de novas funcionalidades no produto principal",
        "Melhoria de performance e acessibilidade das telas",
        "Colaboração com design e backend em entregas contínuas",
        "Trabalhando em grandes clientes como , motorola US, Lenovo",
        "Líder técnico em projetos internacionais",
        "Utilizição de HTML, CSS, Javascript puro, para aplicações oracle"
      ],
    },
      {
      company: "Integra IT",
      role: "DESENVOLVEDOR FRONT END - PLENO",
      period: "2021 — 2023",
      description:
        "Desenvolvimento e manutenção de interfaces web com React e TypeScript. ",
      highlights: [
        "Desenvolvimento em ERP rockit, tendi integrações com canais de vendas, utilizando React para o desenvolvimento de telas e aplicações, e aplicações vinda da Amazon, Lambda, APIGataway.",
        "Utilizando Git para organização e criação de tasks.",
        "Suporte para clientes que utilizam o ERP.",
        "Treinamentos sobre a plataforma"
        ],
    },
     {
      company: "Mobly",
      role: "ESTÁGIO - DESENVOLVEDOR FULL STACK",
      period: "2019 — 2020",
      description:
        "Desenvolvimento e manutenção de interfaces web com React e TypeScript. ",
      highlights: [
        "Desenvolvimento de aplicação legadas para aplicações funcionais, utilizando React para o front e PhP , MySql para backend",
        "Utilização de metodologias ágeis como Cambam, Scrum",
        "Correção de bugs e melhorias de UX",
        "Implementação de novas funcionalidades no produto principal"
        ],
    },
  ],
  education: [
    {
      institution: "Fiap",
      degree: "MBA em Engenharia de Software",
      period: "2025 — 2026",
    },
     {
      institution: "FATEC",
      degree: "Sistemas Para Internet",
      period: "2017 — 2021",
    },
  ],
  skills: [
    {
      category: "Linguagens",
      items: ["JavaScript", "TypeScript", "HTML", "CSS", "PHP", "MySQL"],
    },
    {
      category: "Frameworks e bibliotecas",
      items: ["React", "Next.js", "Tailwind", "CSS", "SCSS", "Synfony", "Laravel"],
    },
    {
      category: "Ferramentas",
      items: ["Git", "VS Code", "Figma", "Amazon", "Lambda", "APIGataway", "Jira"],
    },
  ],
  projects: [
    {
      name: "Fast Shop",
      description:
        "Desenvolvimento do site Eccom, junto com o time de desenvolvimento.",
      url: "https://site.fastshop.com.br",
      tags: ["Next.js", "TypeScript", "React", "JSONC", "Vtex", "Graphql", "Scss"],
    },
     {
      name: "TCL",
      description:
        "Desenvolvimento do site Eccom, junto com o time de desenvolvimento.",
      url: "https://www.lojatcl.com.br/",
      tags: ["Next.js", "TypeScript", "React", "JSONC", "Vtex", "Graphql", "Scss"],
    },
    {
      name: "Lenovo Support USA",
      description:
        "Desenvolviemento de projeto freelancer interno, construido para time Lenovo",
      url: "https://pcsupport.lenovo.com/id/en",
      tags: ["HTML", "CSS", "Javascript"],
    },
     {
      name: "Motorola Support",
      description:
        "Desenvolviemento de projeto freelancer interno, construido para time Motorola",
      url: "https://en-us.support.motorola.com/",
      tags: ["HTML", "CSS", "Javascript"],
    },
     {
      name: "New Balance",
      description:
        "Desenvolviemento de projeto freelancer interno, construido para time Lenovo",
      url: "https://www.newbalance.com.br/",
      tags: [ "TypeScript", "React", "JSONC", "Vtex", "Graphql", "Scss"],
    },
  ],
};
