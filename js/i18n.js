const WHATSAPP_NUMBER = '5511945741566';
const WHATSAPP_TEXT = {
  en: "Hi Gustavo, I found your portfolio and would like to talk about a project.",
  pt: "Olá Gustavo, vim pelo seu portfólio e gostaria de conversar sobre um projeto.",
};

const translations = {
  'nav.about': { en: 'About', pt: 'Sobre' },
  'nav.experience': { en: 'Experience', pt: 'Experiência' },
  'nav.services': { en: 'Services', pt: 'Serviços' },
  'nav.skills': { en: 'Skills', pt: 'Skills' },
  'nav.projects': { en: 'Projects', pt: 'Projetos' },
  'nav.contact': { en: 'Contact', pt: 'Contato' },
  'nav.cta': { en: 'Get in touch', pt: 'Fale comigo' },

  'hero.eyebrow': { en: '// available for new projects', pt: '// disponível para novos projetos' },
  'hero.role': {
    en: 'Full Stack <span class="accent">Developer</span> — .NET Backend Specialist, APIs &amp; Microservices',
    pt: 'Desenvolvedor <span class="accent">Full Stack</span> — Especialista em Backend .NET, APIs &amp; Microsserviços',
  },
  'hero.desc': {
    en: `7+ years building REST APIs, async workers, and microservices architectures
        at companies like Havan and Itaú Unibanco. I also handle Angular/React front-ends and help
        teams on demand: fixing bugs, deploying to AWS/Azure, or unblocking a stuck deploy.`,
    pt: `Mais de 7 anos construindo APIs REST, workers assíncronos e arquiteturas de microsserviços
        em empresas como Havan e Itaú Unibanco. Também assumo telas em Angular/React e ajudo
        times pontualmente: corrigir bugs, subir um projeto na AWS/Azure ou destravar um
        deploy que travou.`,
  },
  'hero.viewProjects': { en: 'View projects', pt: 'Ver projetos' },

  'about.tag': { en: '01 · About', pt: '01 · Sobre' },
  'about.title': { en: 'Backend is where I think best.', pt: 'Backend é onde eu penso melhor.' },
  'about.p1': {
    en: `Backend developer with 7+ years of experience in retail (Havan), banking
        (Itaú Unibanco), and consulting (Cognizant). Specialist in C# and .NET — from .NET Framework
        to .NET 10 — working with REST APIs, workers, microservices, and high-volume integrations via
        RabbitMQ and Kafka. Solid experience with Clean Architecture, DDD, CQRS, and SOLID, relational
        and NoSQL databases, plus resilience practices (retry, outbox, reprocessing),
        observability, and CI/CD in production environments with agile teams.`,
    pt: `Desenvolvedor backend com mais de 7 anos de experiência em varejo (Havan), setor bancário
        (Itaú Unibanco) e consultoria (Cognizant). Especialista em C# e .NET — do .NET Framework ao
        .NET 10 — com atuação em APIs REST, workers, microsserviços e integrações de alto volume via
        RabbitMQ e Kafka. Experiência sólida em Clean Architecture, DDD, CQRS e SOLID, bancos
        relacionais e NoSQL, além de práticas de resiliência (retry, outbox, reprocessamento),
        observabilidade e CI/CD em ambientes de produção com times ágeis.`,
  },
  'about.p2': {
    en: `I work as an independent developer for companies and squads that need a new API,
        an asynchronous processing service, or help designing/migrating a monolith
        architecture to microservices.`,
    pt: `Atendo como desenvolvedor autônomo para empresas e squads que precisam de uma API nova,
        um serviço de processamento assíncrono, ou ajuda para desenhar/migrar uma arquitetura
        de monolito para microsserviços.`,
  },

  'exp.tag': { en: '02 · Experience', pt: '02 · Experiência' },
  'exp.title': { en: 'A track record built in production', pt: 'Trajetória construída em produção' },
  'exp.role': { en: 'Software Developer Analyst', pt: 'Analista Desenvolvedor de Software' },
  'exp.havan.period': { en: 'Apr 2021 — Jul 2026', pt: 'abr 2021 — jul 2026' },
  'exp.havan.intro': {
    en: `Worked across the <strong>CRM</strong> and <strong>Logistics</strong> teams, developing,
            analyzing, and maintaining REST APIs, workers, and microservices critical to the company's operations.`,
    pt: `Atuação nas equipes de <strong>CRM</strong> e <strong>Logística</strong>, no desenvolvimento,
            análise e manutenção de APIs REST, workers e microsserviços críticos para a operação da companhia.`,
  },
  'exp.havan.crm': {
    en: `<strong>CRM:</strong> maintained and evolved WhatsApp, email, SMS, and push notification services,
            with integrations to Salesforce Marketing Cloud and imports via Pentaho. Built a WhatsApp messaging
            microservice (RabbitMQ queue, persistence with a tracking GUID, retry-enabled worker, and a status-lookup endpoint)
            and .NET 10 workers for resilient reprocessing of URL shortening and overdue invoice notifications.`,
    pt: `<strong>CRM:</strong> manutenção e evolução dos serviços de envio de WhatsApp, e-mail, SMS e push notification,
            com integrações ao Salesforce Marketing Cloud e importações via Pentaho. Desenvolvi um microsserviço de envio
            de WhatsApp (fila RabbitMQ, persistência com GUID de rastreio, worker com retry e endpoint de consulta de status)
            e workers em .NET 10 para reprocessamento resiliente de encurtamento de URLs e notificação de faturas em atraso.`,
  },
  'exp.havan.log': {
    en: `<strong>Logistics:</strong> backend for the driver app (departure, arrival, seal registration, and cargo
            loading), refactored Genexus projects into .NET Core (seal validation, cargo dispatch, smart warehousing),
            and inter-service communication via RabbitMQ and SOAP integrations.`,
    pt: `<strong>Logística:</strong> backend do aplicativo de motoristas (saída, chegada, lacração e abastecimento de
            cargas), refatoração de projetos Genexus para .NET Core (validação de lacres, expedição de cargas, armazenamento
            inteligente) e comunicação entre microsserviços via RabbitMQ e integrações SOAP.`,
  },
  'exp.cognizant.client': { en: '(assigned to Itaú Unibanco)', pt: '(alocado no Itaú Unibanco)' },
  'exp.cognizant.period': { en: 'Dec 2018 — Apr 2021', pt: 'dez 2018 — abr 2021' },
  'exp.cognizant.intro': {
    en: `Contracted work at Itaú Unibanco, on the <strong>Real Estate</strong> and
            <strong>Consortium</strong> teams, developing and maintaining internal systems supporting customer service.`,
    pt: `Atuação terceirizada no Itaú Unibanco, nas equipes dos setores <strong>Imobiliário</strong> e
            <strong>Consórcio</strong>, desenvolvendo e mantendo sistemas internos de apoio ao atendimento.`,
  },
  'exp.cognizant.imob': {
    en: `<strong>Real Estate:</strong> owned the customer retention service and contributed to
            refactoring the Agiliza project — consolidating customer data from different areas of the bank
            via web scraping and REST APIs, used daily by service staff.`,
    pt: `<strong>Imobiliário:</strong> responsável pelo serviço de retenção de clientes e participação na
            refatoração do projeto Agiliza — consolidação de informações de clientes de diferentes áreas do banco
            via web scraping e APIs REST, usado diariamente pelos funcionários no atendimento.`,
  },
  'exp.cognizant.consorcio': {
    en: `<strong>Consortium:</strong> developed and maintained REST APIs, MVC applications, and console
            apps automating business routines, including OCR automation for document reading.`,
    pt: `<strong>Consórcio:</strong> desenvolvimento e manutenção de APIs REST, aplicações MVC e console
            applications de automação de rotinas de negócio, incluindo automação de OCR para leitura de documentos.`,
  },

  'services.tag': { en: '03 · Services', pt: '03 · Serviços' },
  'services.title': { en: 'How I can help', pt: 'Como posso ajudar' },
  'services.subtitle': {
    en: 'From a brand-new project to one-off support on something already in production.',
    pt: 'Do projeto novo do zero ao apoio pontual em algo que já está em produção.',
  },
  'services.apis': {
    en: 'Design and development of REST APIs from scratch, with authentication, validation, and documentation (Swagger).',
    pt: 'Design e desenvolvimento de APIs REST do zero, com autenticação, validação e documentação (Swagger).',
  },
  'services.microTitle': { en: 'Microservices &amp; Messaging', pt: 'Microsserviços &amp; Mensageria' },
  'services.microDesc': {
    en: 'Design of event-driven architectures with Kafka/RabbitMQ, resilient queues, and the outbox pattern.',
    pt: 'Desenho de arquiteturas orientadas a eventos com Kafka/RabbitMQ, filas resilientes e padrão outbox.',
  },
  'services.frontend': {
    en: 'Front-end screens and integrations consuming your APIs — from a simple form to an admin dashboard.',
    pt: 'Telas e integrações de frontend consumindo suas APIs — de um formulário a um painel administrativo.',
  },
  'services.deploy': {
    en: 'Deploying projects to AWS or Azure, containerization with Docker, and CI/CD pipelines with GitHub Actions.',
    pt: 'Subida de projetos na AWS ou Azure, containerização com Docker e pipelines de CI/CD com GitHub Actions.',
  },
  'services.bugsTitle': { en: 'Bug fixes &amp; one-off support', pt: 'Correção de bugs &amp; suporte pontual' },
  'services.bugsDesc': {
    en: 'Inherited a project nobody maintains anymore? I diagnose it, fix it, and leave it documented.',
    pt: 'Herdou um projeto que ninguém mais mantém? Ajudo a diagnosticar, corrigir e deixar documentado.',
  },
  'services.archTitle': { en: 'Architecture consulting', pt: 'Consultoria de arquitetura' },
  'services.archDesc': {
    en: 'Review of an existing project or a migration plan from monolith to microservices.',
    pt: 'Revisão de um projeto existente ou plano de migração de monolito para microsserviços.',
  },

  'skills.tag': { en: '04 · Stack', pt: '04 · Stack' },
  'skills.title': { en: 'Everyday tools', pt: 'Ferramentas do dia a dia' },
  'skills.langTitle': { en: 'Languages &amp; Frameworks', pt: 'Linguagens &amp; Frameworks' },
  'skills.msgTitle': { en: 'Messaging &amp; Streaming', pt: 'Mensageria &amp; Streaming' },
  'skills.dataTitle': { en: 'Data', pt: 'Dados' },
  'skills.archTitle': { en: 'Architecture', pt: 'Arquitetura' },
  'skills.qaTitle': { en: 'Quality', pt: 'Qualidade' },
  'skills.integrationTests': { en: 'Integration tests', pt: 'Testes de integração' },

  'proj.tag': { en: '05 · Projects', pt: '05 · Projetos' },
  'proj.title': { en: "Some systems I've built", pt: 'Alguns sistemas que construí' },
  'proj.subtitle': {
    en: 'Portfolio and study projects with public code on GitHub — architecture designed for production, not just prototypes.',
    pt: 'Projetos de estudo e portfólio com código público no GitHub — arquitetura pensada para produção, não só protótipo.',
  },
  'proj.viewGithub': { en: 'View on GitHub →', pt: 'Ver no GitHub →' },
  'proj.tryDemo': { en: 'Try the live demo →', pt: 'Testar demo ao vivo →' },
  'proj.more': { en: 'More projects and experiments at', pt: 'Mais projetos e experimentos em' },
  'proj.microservicesTag': { en: 'Microservices', pt: 'Microsserviços' },
  'proj.architectureTag': { en: 'Architecture', pt: 'Arquitetura' },
  'proj.realtimeTag': { en: 'Real-time', pt: 'Tempo real' },
  'proj.messagingTag': { en: 'Messaging', pt: 'Mensageria' },

  'proj.trocoDesc': {
    en: 'A loyalty platform that converts purchase change into points tied to a customer ID. The API validates and persists transactions in Oracle idempotently using the <strong>outbox</strong> pattern; a Worker consumes events via RabbitMQ and credits points, with a dead-letter queue for failures.',
    pt: 'Plataforma de fidelidade que converte troco de compras em pontos por CPF. API valida e persiste transações no Oracle de forma idempotente com padrão <strong>outbox</strong>; um Worker consome eventos via RabbitMQ e credita pontos, com dead-letter queue para falhas.',
  },
  'proj.whatsappDesc': {
    en: 'A WhatsApp integration platform structured in layers (Domain, Application, Infrastructure, API, and Worker), deployed on AWS — designed to process messages asynchronously and at scale.',
    pt: 'Plataforma de integração com WhatsApp estruturada em camadas (Domain, Application, Infrastructure, API e Worker), com deploy em AWS — projetada para processar mensagens de forma assíncrona e escalável.',
  },
  'proj.ecommerceDesc': {
    en: 'A microservices-architecture API communicating via Kafka: Catalog, Order, and Notification services, MongoDB database, Azure deployment, and a CI/CD pipeline with GitHub Actions.',
    pt: 'API em arquitetura de microsserviços com comunicação via Kafka: Catalog, Order e Notification Service, banco MongoDB, deploy no Azure e pipeline de CI/CD com GitHub Actions.',
  },
  'proj.eventDrivenDesc': {
    en: 'A teaching example of event-driven architecture in .NET, with clear layer separation (Domain, Application, Infrastructure) to demonstrate the flow of domain events.',
    pt: 'Exemplo didático de arquitetura orientada a eventos em .NET, com separação clara de camadas (Domain, Application, Infrastructure) para demonstrar o fluxo de eventos de domínio.',
  },
  'proj.signalrDesc': {
    en: 'A real-time chat built with SignalR on an ASP.NET Core API, consumed by an Angular front-end — bidirectional communication over WebSockets.',
    pt: 'Chat em tempo real com SignalR em uma API ASP.NET Core, consumido por um front-end em Angular — comunicação bidirecional via WebSockets.',
  },
  'proj.rabbitmqDesc': {
    en: 'A REST API with an asynchronous consumer that reacts to events published via RabbitMQ to generate reports on demand, without blocking the original request.',
    pt: 'API REST com um consumer assíncrono que reage a eventos publicados via RabbitMQ para gerar relatórios sob demanda, sem bloquear a requisição original.',
  },
  'proj.parallelismDesc': {
    en: 'Hands-on studies of asynchronous and parallel programming patterns in C#, applied to batch-processing scenarios.',
    pt: 'Estudos práticos de padrões de programação assíncrona e paralela em C#, aplicados a cenários de processamento em lote.',
  },
  'proj.gatewayDesc': {
    en: 'A .NET API Gateway built with Ocelot, routing and aggregating calls to internal services, with health checks and resilience via Polly (retry/circuit breaker).',
    pt: 'API Gateway em .NET com Ocelot, roteando e agregando chamadas para serviços internos, com health checks e resiliência via Polly (retry/circuit breaker).',
  },
  'proj.importflowDesc': {
    en: 'A high-throughput file import pipeline (target: 1 million rows in under 2 hours), built with Clean Architecture, CQRS, the outbox pattern, and an async worker for background processing.',
    pt: 'Pipeline de importação de arquivos de alta vazão (meta de 1 milhão de linhas em menos de 2 horas), em Clean Architecture com CQRS, outbox pattern e worker assíncrono para processamento em background.',
  },

  'contact.tag': { en: '06 · Contact', pt: '06 · Contato' },
  'contact.title': { en: "Let's talk about your project?", pt: 'Bora conversar sobre o seu projeto?' },
  'contact.subtitle': {
    en: `Message me directly on WhatsApp or send an email describing what you need —
        a new API, a processing worker, a migration to microservices, or architecture
        consulting. I respond fast.`,
    pt: `Me chame direto no WhatsApp ou mande um e-mail contando o que você precisa —
        API nova, worker de processamento, migração para microsserviços ou consultoria
        de arquitetura. Respondo rápido.`,
  },
  'contact.chatNow': { en: 'Chat now →', pt: 'Conversar agora →' },
  'contact.emailLabel': { en: 'Email', pt: 'E-mail' },
  'contact.connect': { en: 'Connect →', pt: 'Conectar →' },
  'contact.formNote': {
    en: "Prefer to leave a message? Fill it in and I'll get back to you by email.",
    pt: 'Prefere deixar uma mensagem? Preencho e te retorno por e-mail.',
  },
  'contact.namePlaceholder': { en: 'Your name', pt: 'Seu nome' },
  'contact.emailPlaceholder': { en: 'Your email', pt: 'Seu e-mail' },
  'contact.messagePlaceholder': { en: 'Tell me a bit about the project...', pt: 'Conte um pouco sobre o projeto...' },
  'contact.send': { en: 'Send message', pt: 'Enviar mensagem' },

  'footer.role': { en: 'Gustavo de Lima — .NET Backend Developer', pt: 'Gustavo de Lima — Desenvolvedor Backend .NET' },

  'meta.title': { en: 'Gustavo de Lima — .NET Backend Developer', pt: 'Gustavo de Lima — Desenvolvedor Backend .NET' },
  'meta.description': {
    en: 'Gustavo de Lima — Freelance backend developer specializing in REST APIs, event-driven microservices, and workers in .NET, Kafka, and RabbitMQ.',
    pt: 'Gustavo de Lima — Desenvolvedor backend freelancer especializado em APIs REST, microsserviços orientados a eventos e workers em .NET, Kafka e RabbitMQ.',
  },
  'a11y.enlargeImage': { en: 'Enlarge image', pt: 'Ampliar imagem' },
  'toast.emailCopied': { en: 'Email copied: ', pt: 'E-mail copiado: ' },
  'form.sending': { en: 'Sending...', pt: 'Enviando...' },
  'form.sent': { en: "Message sent! I'll get back to you soon.", pt: 'Mensagem enviada! Retorno em breve.' },
  'form.error': { en: 'Something went wrong. Try WhatsApp or email instead.', pt: 'Algo deu errado. Tente pelo WhatsApp ou e-mail.' },
};

function getLang() {
  return localStorage.getItem('gustavo_dev_lang') || 'en';
}

function applyWhatsappLinks(lang) {
  const text = encodeURIComponent(WHATSAPP_TEXT[lang]);
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  document.querySelectorAll('[data-i18n-href="whatsapp"]').forEach((el) => {
    el.setAttribute('href', href);
  });
}

function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'pt') lang = 'en';

  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const entry = translations[key];
    if (entry) el.innerHTML = entry[lang];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const entry = translations[key];
    if (entry) el.setAttribute('placeholder', entry[lang]);
  });

  applyWhatsappLinks(lang);

  const titleEl = document.getElementById('pageTitle');
  if (titleEl) titleEl.textContent = translations['meta.title'][lang];
  const descEl = document.getElementById('pageDescription');
  if (descEl) descEl.setAttribute('content', translations['meta.description'][lang]);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
  });

  localStorage.setItem('gustavo_dev_lang', lang);
  window.currentLang = lang;
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
});

setLanguage(getLang());
