const CONTENT = {
  pt: {
    meta: {
      title: "Lucas Balani — Desenvolvedor Backend .NET Pleno",
      description:
        "Desenvolvedor Backend .NET Pleno com foco em sistemas críticos de healthtech e Agentic AI / Agent Engineering.",
    },
    nav: {
      about: "Sobre",
      experience: "Experiência",
      skills: "Skills",
      certifications: "Formação",
      contact: "Contato",
      toggleLabel: "EN",
    },
    hero: {
      kicker: "Desenvolvedor Backend .NET Pleno",
      name: "Lucas Balani",
      headline: "C# · Microsserviços · Agentic AI & Agent Engineering",
      location: "Ribeirão Preto, SP — aberto a oportunidades remotas",
      ctaCv: "Baixar currículo",
      ctaContact: "Fale comigo",
    },
    about: {
      title: "Sobre",
      paragraphs: [
        "Sou Desenvolvedor Backend .NET Pleno com foco em sistemas críticos para o setor de saúde (healthtech), e também construo e uso ferramentas de IA agêntica (agentic AI) para acelerar engenharia de software no dia a dia.",
        "Há mais de 4 anos desenvolvendo soluções .NET, atuo desde 2024 na plataforma de protocolos assistenciais da Hapvida NotreDame Intermédica — um motor de regras que orquestra a autorização e execução de protocolos médicos hospitalares, cobrindo cerca de 15 tipos de tratamento, com arquitetura distribuída em C#, ASP.NET Core, microsserviços, CQRS, Dapper e SQL Server.",
        "No dia a dia, desenho e evoluo microsserviços .NET, integro dados legados (Oracle) via padrão Anti-Corruption Layer, trabalho com cache distribuído (Redis) e testes automatizados. Em paralelo, construo e utilizo ativamente ferramentas de IA agêntica com Claude Code — orquestração de agentes especializados por função e skills próprias por domínio.",
      ],
    },
    experience: {
      title: "Experiência",
      items: [
        {
          role: "Desenvolvedor de Software Backend Pleno | .NET",
          company: "Hapvida NotreDame Intermédica",
          period: "Fev 2025 — Atual · Remoto",
          bullets: [
            "Projetei e implementei o motor de lógica condicional do construtor de protocolos — hoje 100% dos protocolos assistenciais ativos da plataforma rodam sobre esse motor.",
            "Desenvolvi a seleção de itens entre protocolos executados simultaneamente, evitando envio duplicado de prescrições — cobrindo 7 tipos de tratamento.",
            "Desenvolvi suporte a procedimentos e materiais especiais (OPME) no motor de protocolos assistenciais.",
            "Entreguei de ponta a ponta a prescrição de alta hospitalar, implementando simultaneamente nos 3 serviços da arquitetura (BFF, motor de protocolos e integração com dados legados).",
            "Reestruturei a estratégia de cache distribuído (Redis), reduzindo o tempo de resposta do endpoint de listagem de exames de ~15s para ~3s (~80% mais rápido).",
            "Uso Claude Code e ferramentas de IA agêntica no dia a dia — depuração de bugs em produção, análise de logs assistida por IA e skills próprias para tarefas recorrentes.",
          ],
        },
        {
          role: "Desenvolvedor de Software Backend Pleno | .NET",
          company: "5by5 | Soluções em Sistemas (alocado na Hapvida)",
          period: "Ago 2024 — Fev 2025 · Remoto",
          bullets: [
            "Participação ativa no desenvolvimento inicial de microsserviços, da definição de arquitetura à implementação.",
            "Desenvolvimento back-end em C#/.NET da lógica central de protocolos de internação.",
            "Microsserviço com padrão Anti-Corruption Layer (ACL) para integração e isolamento da base Oracle.",
            "Aplicação do padrão CQRS visando escalabilidade e manutenção do código, em times ágeis.",
          ],
        },
        {
          role: "Desenvolvedor de Software Fullstack | .NET · TypeScript · React",
          company: "ValorUp Tech",
          period: "Fev 2023 — Ago 2024 · Híbrido",
          bullets: [
            "Liderou o squad Nexxus, do time de inovação da empresa, com metodologia ágil Scrum.",
            "Desenvolveu integrações com APIs de IA generativa (OpenAI/DALL·E), Amazon e PayPal.",
            "Atuou em desenvolvimento fullstack com .NET, TypeScript e React, incluindo atendimento direto a clientes.",
          ],
        },
        {
          role: "Desenvolvedor de Software Backend | .NET · VB.NET",
          company: "OuroWeb — Ribeirão Preto, SP",
          period: "Out 2021 — Fev 2023",
          bullets: [
            "Liderou squad de desenvolvimento de software.",
            "Implementou integrações com o sistema de gestão de armazém AlcisWMS.",
            "Atuou com metodologia ágil Scrum e customizações de ERP.",
          ],
        },
      ],
    },
    skills: {
      title: "Skills",
      groups: [
        {
          name: "Linguagens & Frameworks",
          items: ["C#", ".NET / .NET Core", "ASP.NET Core", "TypeScript", "JavaScript"],
        },
        {
          name: "Arquitetura & Dados",
          items: [
            "Microsserviços",
            "CQRS",
            "Anti-Corruption Layer (ACL)",
            "Entity Framework",
            "Dapper (ORM)",
            "Refit",
            "SQL Server",
            "Oracle",
            "Redis",
          ],
        },
        { name: "Mensageria & Realtime", items: ["RabbitMQ", "SignalR"] },
        { name: "DevOps & Ferramentas", items: ["Docker", "Kubernetes", "Azure DevOps", "GitHub", "Jenkins"] },
        { name: "Frontend", items: ["React", "Angular"] },
        {
          name: "IA & Automação",
          agent: true,
          items: ["Claude Code", "Agentic AI / Agent Engineering", "Orquestração multiagente", "Prompt Engineering"],
        },
      ],
    },
    education: {
      title: "Formação & Certificações",
      degree: {
        title: "Licenciatura em Ciência da Computação",
        place: "Estácio",
        period: "Fev 2020 — Jun 2026 (em andamento)",
      },
      certifications: [
        { title: "Foundational C# with Microsoft", issuer: "freeCodeCamp", date: "Jun 2024" },
        { title: "Cisco Cybersecurity Essentials", issuer: "Cisco", date: "Mai 2020" },
      ],
    },
    contact: {
      title: "Contato",
      subtitle: "Aberto a oportunidades remotas como Desenvolvedor(a) Backend .NET Pleno, com espaço para Agentic AI / Agent Engineering.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      ctaCv: "Baixar currículo (PDF)",
    },
    footer: "Feito com HTML, Tailwind CSS e JS puro.",
  },

  en: {
    meta: {
      title: "Lucas Balani — Mid-level .NET Backend Developer",
      description:
        "Mid-level .NET Backend Developer focused on critical healthtech systems and Agentic AI / Agent Engineering.",
    },
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      certifications: "Education",
      contact: "Contact",
      toggleLabel: "PT",
    },
    hero: {
      kicker: "Mid-level .NET Backend Developer",
      name: "Lucas Balani",
      headline: "C# · Microservices · Agentic AI & Agent Engineering",
      location: "Ribeirão Preto, Brazil — open to remote opportunities",
      ctaCv: "Download résumé",
      ctaContact: "Get in touch",
    },
    about: {
      title: "About",
      paragraphs: [
        "I'm a mid-level .NET Backend Developer focused on critical systems for the healthcare industry (healthtech), and I also build and use agentic AI tooling to speed up day-to-day software engineering.",
        "With 4+ years building .NET solutions, since 2024 I've worked on Hapvida NotreDame Intermédica's care-protocol platform — a rules engine that orchestrates authorization and execution of hospital medical protocols, covering around 15 treatment types, with a distributed architecture in C#, ASP.NET Core, microservices, CQRS, Dapper and SQL Server.",
        "Day to day, I design and evolve .NET microservices, integrate legacy data (Oracle) via the Anti-Corruption Layer pattern, work with distributed caching (Redis) and automated testing. In parallel, I actively build and use agentic AI tooling with Claude Code — orchestrating role-specialized agents and domain-specific skills.",
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Mid-level Backend Software Developer | .NET",
          company: "Hapvida NotreDame Intermédica",
          period: "Feb 2025 — Present · Remote",
          bullets: [
            "Designed and implemented the protocol builder's conditional-logic engine — today 100% of the platform's active care protocols run on this engine.",
            "Built item-selection across simultaneously executed protocols, avoiding duplicate prescriptions — covering 7 treatment types.",
            "Built support for special procedures and materials (OPME) in the care-protocol engine.",
            "Delivered end-to-end the hospital discharge prescription feature, implementing it simultaneously across the 3 architecture services (BFF, protocol engine, and legacy data integration).",
            "Redesigned the distributed caching (Redis) strategy, cutting the exam-listing endpoint's response time from ~15s to ~3s (~80% faster).",
            "Use Claude Code and agentic AI tooling daily — production bug debugging, AI-assisted log analysis, and custom skills for recurring tasks.",
          ],
        },
        {
          role: "Mid-level Backend Software Developer | .NET",
          company: "5by5 | Soluções em Sistemas (staffed at Hapvida)",
          period: "Aug 2024 — Feb 2025 · Remote",
          bullets: [
            "Active participation in initial microservices development, from architecture definition to implementation.",
            "Backend development in C#/.NET of the core admission-protocol logic.",
            "Microservice with the Anti-Corruption Layer (ACL) pattern to integrate and isolate the Oracle database.",
            "Applied the CQRS pattern for scalability and maintainability, working in agile teams.",
          ],
        },
        {
          role: "Fullstack Software Developer | .NET · TypeScript · React",
          company: "ValorUp Tech",
          period: "Feb 2023 — Aug 2024 · Hybrid",
          bullets: [
            "Led the Nexxus squad within the company's innovation team, using agile Scrum methodology.",
            "Built integrations with generative AI APIs (OpenAI/DALL·E), Amazon and PayPal.",
            "Worked on fullstack development with .NET, TypeScript and React, including direct client support.",
          ],
        },
        {
          role: "Backend Software Developer | .NET · VB.NET",
          company: "OuroWeb — Ribeirão Preto, Brazil",
          period: "Oct 2021 — Feb 2023",
          bullets: [
            "Led a software development squad.",
            "Implemented integrations with the AlcisWMS warehouse management system.",
            "Worked with agile Scrum methodology and ERP customizations.",
          ],
        },
      ],
    },
    skills: {
      title: "Skills",
      groups: [
        {
          name: "Languages & Frameworks",
          items: ["C#", ".NET / .NET Core", "ASP.NET Core", "TypeScript", "JavaScript"],
        },
        {
          name: "Architecture & Data",
          items: [
            "Microservices",
            "CQRS",
            "Anti-Corruption Layer (ACL)",
            "Entity Framework",
            "Dapper (ORM)",
            "Refit",
            "SQL Server",
            "Oracle",
            "Redis",
          ],
        },
        { name: "Messaging & Realtime", items: ["RabbitMQ", "SignalR"] },
        { name: "DevOps & Tools", items: ["Docker", "Kubernetes", "Azure DevOps", "GitHub", "Jenkins"] },
        { name: "Frontend", items: ["React", "Angular"] },
        {
          name: "AI & Automation",
          agent: true,
          items: ["Claude Code", "Agentic AI / Agent Engineering", "Multi-agent orchestration", "Prompt Engineering"],
        },
      ],
    },
    education: {
      title: "Education & Certifications",
      degree: {
        title: "B.A. in Computer Science",
        place: "Estácio",
        period: "Feb 2020 — Jun 2026 (in progress)",
      },
      certifications: [
        { title: "Foundational C# with Microsoft", issuer: "freeCodeCamp", date: "Jun 2024" },
        { title: "Cisco Cybersecurity Essentials", issuer: "Cisco", date: "May 2020" },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Open to remote opportunities as a Mid-level .NET Backend Developer, with room for Agentic AI / Agent Engineering.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      ctaCv: "Download résumé (PDF)",
    },
    footer: "Built with HTML, Tailwind CSS and vanilla JS.",
  },
};
