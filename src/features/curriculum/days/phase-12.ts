import type { CurriculumDay } from '../types'

const MDN = 'https://developer.mozilla.org/en-US/docs'

/** Phase 12 — Capstone & Professional Practice (days 336–365). */
export const PHASE_12_DAYS: CurriculumDay[] = [
  {
    dayNumber: 336,
    phaseSlug: 'capstone-professional',
    kind: 'lesson' as const,
    titleEn: 'Capstone Project Planning',
    titleAr: 'Capstone Project Planning',
    topic: 'Capstone',
    estimatedMinutes: 90,
    objectiveEn: 'Plan a capstone project that integrates knowledge from across the curriculum and defines scope, goals, and deliverables.',
    objectiveAr: 'Plan a capstone project that integrates knowledge from across the curriculum and defines scope, goals, and deliverables.',
    lessonEn:
      'A capstone project is the culminating experience of the curriculum. It should integrate knowledge from multiple phases, solve a real-world problem, and produce a tangible deliverable. Define the project scope, goals, technologies, and success criteria with the team or mentor.',
    lessonAr:
      'Capstone project هو التجربة المركزة في نهاية المنهج. يجب أن يجمع معرفة من عدة فترات، ويحل مشكلة حقيقية، وينتج نتيجة ملموسة. حدد نطاق المشروع، الأهداف، technologies، ومعايير النجاح مع الفريق أو الموجه.',
    tasks: [
      {
        en: 'Define the capstone project idea and scope',
        ar: 'Define the capstone project idea and scope'
      },
      {
        en: 'Set clear goals and success criteria for the project',
        ar: 'Set clear goals and success criteria for the project'
      },
      {
        en: 'Identify the knowledge areas from the curriculum that will be integrated',
        ar: 'Identify the knowledge areas from the curriculum that will be integrated'
      },
      {
        en: 'Plan the project timeline and milestones',
        ar: 'Plan the project timeline and milestones'
      }
    ],
    exerciseEn: 'Create a capstone project proposal with scope, goals, and timeline.',
    exerciseAr: 'Create a capstone project proposal with scope, goals, and timeline.',
    deliverableEn: 'A capstone project proposal document.',
deliverableAr: 'Proposal document for capstone project.',
    resources: []
  },
  {
    dayNumber: 337,
    phaseSlug: 'capstone-professional',
    kind: 'project' as const,
    titleEn: 'Capstone Development Sprint 1',
    titleAr: 'Capstone Development Sprint 1',
    topic: 'Capstone',
    estimatedMinutes: 120,
    objectiveEn: 'Begin development of the capstone project: set up the repository, implement core features, and establish the development workflow.',
    objectiveAr: 'Begin development of the capstone project: set up the repository, implement core features, and establish the development workflow.',
    lessonEn:
      'Sprint 1 of the capstone project involves setting up the repository, implementing the core features identified in the planning phase, and establishing the development workflow (branching strategy, CI pipeline, code review process).',
    lessonAr:
      'Sprint 1 من المشروع المركّز involves setting up the repository, implementing the core features identified in the planning phase, and establishing the development workflow (branching strategy, CI pipeline, code review process).',
    tasks: [
      {
        en: 'Set up the repository with proper folder structure and README',
        ar: 'Set up the repository with proper folder structure and README'
      },
      {
        en: 'Implement the core feature(s) identified in the project plan',
        ar: 'Implement the core feature(s) identified in the project plan'
      },
      {
        en: 'Set up the CI pipeline to run tests on every push',
        ar: 'Set up the CI pipeline to run tests on every push'
      },
      {
        en: 'Establish the branching strategy (e.g., GitFlow or trunk-based development)',
        ar: 'Establish the branching strategy (e.g., GitFlow or trunk-based development)'
      }
    ],
    exerciseEn: 'Begin capstone development with repository setup and core features.',
    exerciseAr: 'Begin capstone development with repository setup and core features.',
    deliverableEn: 'A repository with core features implemented and CI pipeline configured.',
deliverableAr: 'Repository with core features and CI pipeline.',
    resources: []
  },
  {
    dayNumber: 338,
    phaseSlug: 'capstone-professional',
    kind: 'project' as const,
    titleEn: 'Capstone Development Sprint 2',
    titleAr: 'Capstone Development Sprint 2',
    topic: 'Capstone',
    estimatedMinutes: 120,
    objectiveEn: 'Continue capstone development: implement additional features, integrate external services, and fix bugs from Sprint 1.',
    objectiveAr: 'Continue capstone development: implement additional features, integrate external services, and fix bugs from Sprint 1.',
    lessonEn:
      'Sprint 2 involves implementing additional features, integrating external services (e.g., APIs, databases), and addressing any bugs or issues identified during Sprint 1 testing.',
    lessonAr:
      'Sprint 2 يتضمن implementing additional features, integrating external services (e.g., APIs, databases), and addressing any bugs or issues identified during Sprint 1 testing.',
    tasks: [
      {
        en: 'Implement additional features as defined in the project plan',
        ar: 'Implement additional features as defined in the project plan'
      },
      {
        en: 'Integrate external services (e.g., database, API, third-party service)',
        ar: 'Integrate external services (e.g., database, API, third-party service)'
      },
      {
        en: 'Run Sprint 1 bugs through the fix cycle',
        ar: 'Run Sprint 1 bugs through the fix cycle'
      },
      {
        en: 'Add integration tests for the new features and services',
        ar: 'Add integration tests for the new features and services'
      }
    ],
    exerciseEn: 'Continue capstone development with additional features and service integration.',
    exerciseAr: 'Continue capstone development with additional features and service integration.',
    deliverableEn: 'A capstone project with additional features and integrated services.',
deliverableAr: 'Capstone with features and integrated services.',
    resources: []
  },
  {
    dayNumber: 339,
    phaseSlug: 'capstone-professional',
    kind: 'project' as const,
    titleEn: 'Capstone Development Sprint 3',
    titleAr: 'Capstone Development Sprint 3',
    topic: 'Capstone',
    estimatedMinutes: 120,
    objectiveEn: 'Finalize capstone development: polish UI, add documentation, and prepare for deployment.',
    objectiveAr: 'Finalize capstone development: polish UI, add documentation, and prepare for deployment.',
    lessonEn:
      'Sprint 3 is the final development sprint. Polish the user interface, add comprehensive documentation (README, API docs, usage guides), and prepare the application for deployment to a staging or production environment.',
    lessonAr:
      'Sprint 3 هو sprint التطوير النهائي. Polish the user interface, add comprehensive documentation (README, API docs, usage guides), and prepare the application for deployment to a staging or production environment.',
    tasks: [
      {
        en: 'Polish the user interface and fix any usability issues',
        ar: 'Polish the user interface and fix any usability issues'
      },
      {
        en: 'Add comprehensive documentation (README, API docs, usage guides)',
        ar: 'Add comprehensive documentation (README, API docs, usage guides)'
      },
      {
        en: 'Set up deployment scripts and deploy to a staging environment',
        ar: 'Set up deployment scripts and deploy to a staging environment'
      },
      {
        en: 'Conduct final testing and verify all features work as expected',
        ar: 'Conduct final testing and verify all features work as expected'
      }
    ],
    exerciseEn: 'Finalize capstone development with polish, documentation, and deployment preparation.',
    exerciseAr: 'Finalize capstone development with polish, documentation, and deployment preparation.',
    deliverableEn: 'A polished capstone project with documentation and deployment preparation.',
deliverableAr: 'Polished capstone with documentation and deployment prep.',
    resources: []
  },
  {
    dayNumber: 340,
    phaseSlug: 'capstone-professional',
    kind: 'lesson' as const,
    titleEn: 'Code Review Best Practices',
    titleAr: 'Code Review Best Practices',
    topic: 'Professional Practice',
    estimatedMinutes: 90,
    objectiveEn: 'Understand the best practices for effective code reviews, including checklist items, feedback quality, and merge criteria.',
    objectiveAr: 'Understand the best practices for effective code reviews, including checklist items, feedback quality, and merge criteria.',
    lessonEn:
      'Effective code reviews improve code quality, share knowledge across the team, and catch bugs before merge. Best practices: use a checklist, focus on readability and correctness, provide constructive feedback, and define clear merge criteria (e.g., all review comments resolved, tests passing).',
    lessonAr:
      'Effective code reviews improve code quality, share knowledge across the team, and catch bugs before merge. Best practices: use a checklist, focus on readability and correctness, provide constructive feedback, and define clear merge criteria (e.g., all review comments resolved, tests passing).',
    tasks: [
      {
        en: 'Describe the elements of an effective code review checklist',
        ar: 'Describe the elements of an effective code review checklist'
      },
      {
        en: 'Provide constructive feedback on a sample pull request',
        ar: 'Provide constructive feedback on a sample pull request'
      },
      {
        en: 'Define merge criteria for the team (e.g., all comments resolved, tests passing)',
        ar: 'Define merge criteria for the team (e.g., all comments resolved, tests passing)'
      },
      {
        en: 'Practice reviewing a pull request and leaving quality feedback',
        ar: 'Practice reviewing a pull request and leaving quality feedback'
      }
    ],
    exerciseEn: 'Review a pull request using a checklist and provide quality feedback.',
    exerciseAr: 'Review a pull request using a checklist and provide quality feedback.',
    deliverableEn: 'A code review with checklist and feedback on a sample PR.',
deliverableAr: 'Code review with feedback on sample PR.',
    resources: []
  },
  {
    dayNumber: 341,
    phaseSlug: 'capstone-professional',
    kind: 'project' as const,
    titleEn: 'Code Review Practice',
    titleAr: 'Code Review Practice',
    topic: 'Professional Practice',
    estimatedMinutes: 120,
    objectiveEn: 'Practice code reviews on the capstone project: review pull requests, leave checklist-based feedback, and verify merge criteria are met.',
    objectiveAr: 'Practice code reviews on the capstone project: review pull requests, leave checklist-based feedback, and verify merge criteria are met.',
    lessonEn:
      'This project involves practicing code reviews on the capstone project. Team members will open pull requests, and reviewers will use a checklist to leave feedback, ensuring all criteria (code quality, tests, documentation) are addressed before merge.',
    lessonAr:
      'ينطوي هذا المشروع على ممارسة مراجعة الأكواد على المشروع المركّز. سيقوم أعضاء الفريق بفتح طلبات سحب، وسيستخدم المراجعون قائمة_Checklist لتقديم ملاحظات، مع ضمان معالجة جميع المعايير (جودة الأكواد، الاختبارات، الوثائق) قبل الدمج.',
    tasks: [
      {
        en: 'Open a pull request with a feature or bug fix from the capstone',
        ar: 'Open a pull request with a feature or bug fix from the capstone'
      },
      {
        en: 'Review the pull request using a checklist (code quality, tests, documentation)',
        ar: 'Review the pull request using a checklist (code quality, tests, documentation)'
      },
      {
        en: 'Leave constructive feedback and request changes where needed',
        ar: 'Leave constructive feedback and request changes where needed'
      },
      {
        en: 'Verify that merge criteria are met (e.g., all comments resolved, tests passing)',
        ar: 'Verify that merge criteria are met (e.g., all comments resolved, tests passing)'
      }
    ],
    exerciseEn: 'Practice code reviews on the capstone project.',
    exerciseAr: 'Practice code reviews on the capstone project.',
    deliverableEn: 'Code reviews on the capstone project with checklist feedback.',
deliverableAr: 'Code reviews on capstone with feedback.',
    resources: []
  },
  {
    dayNumber: 342,
    phaseSlug: 'capstone-professional',
    kind: 'lesson' as const,
    titleEn: 'Technical Writing and Documentation',
    titleAr: 'Technical Writing and Documentation',
    topic: 'Professional Practice',
    estimatedMinutes: 90,
    objectiveEn: 'Understand the principles of technical writing and how to produce clear, concise, and useful documentation for developers and users.',
    objectiveAr: 'Understand the principles of technical writing and how to produce clear, concise, and useful documentation for developers and users.',
    lessonEn:
      'Good technical documentation is essential for maintainability and onboarding. Principles: know your audience, be concise, use consistent terminology, include examples, and keep documentation up to date. Documentation types: README, API docs, user guides, and architecture diagrams.',
    lessonAr:
      'Good technical documentation is essential for maintainability and onboarding. Principles: know your audience, be concise, use consistent terminology, include examples, and keep documentation up to date. Documentation types: README, API docs, user guides, and architecture diagrams.',
    tasks: [
      {
        en: 'Identify the audience for a piece of technical documentation',
        ar: 'Identify the audience for a piece of technical documentation'
      },
      {
        en: 'Write a clear and concise README for a sample project',
        ar: 'Write a clear and concise README for a sample project'
      },
      {
        en: 'Write an API documentation page with endpoints and examples',
        ar: 'Write an API documentation page with endpoints and examples'
      },
      {
        en: 'Keep documentation up to date as the project evolves',
        ar: 'Keep documentation up to date as the project evolves'
      }
    ],
    exerciseEn: 'Write documentation (README and API docs) for a sample project.',
    exerciseAr: 'Write documentation (README and API docs) for a sample project.',
    deliverableEn: 'README and API documentation for a sample project.',
deliverableAr: 'Documentation for sample project.',
    resources: []
  },
  {
    dayNumber: 343,
    phaseSlug: 'capstone-professional',
    kind: 'project' as const,
    titleEn: 'Documentation Sprint',
    titleAr: 'Documentation Sprint',
    topic: 'Documentation',
    estimatedMinutes: 120,
    objectiveEn: 'Produce comprehensive documentation for the capstone project: README, API docs, user guides, and architecture diagrams.',
    objectiveAr: 'Produce comprehensive documentation for the capstone project: README, API docs, user guides, and architecture diagrams.',
    lessonEn:
      'This sprint is dedicated to producing all the documentation for the capstone project: a README that explains setup and running, API documentation with endpoints and examples, a user guide, and an architecture diagram.',
    lessonAr:
      'هذا sprint مخصص لإنتاج كل وثائق المشروع المركّز: README يشرح الإعداد والتشغيل، وثائق API مع النقاط والمثال،ガイド مستخدم، ورسوم بيانية للهندسة المعمارية.',
    tasks: [
      {
        en: 'Write a README that covers installation, setup, and how to run the project',
        ar: 'Write a README that covers installation, setup, and how to run the project'
      },
      {
        en: 'Write API documentation that covers all endpoints, request/response shapes, and examples',
        ar: 'Write API documentation that covers all endpoints, request/response shapes, and examples'
      },
      {
        en: 'Write a user guide that covers common tasks and workflows',
        ar: 'Write a user guide that covers common tasks and workflows'
      },
      {
        en: 'Create an architecture diagram that shows the system design and component relationships',
        ar: 'Create an architecture diagram that shows the system design and component relationships'
      }
    ],
    exerciseEn: 'Produce comprehensive documentation for the capstone project.',
    exerciseAr: 'Produce comprehensive documentation for the capstone project.',
    deliverableEn: 'Comprehensive documentation: README, API docs, user guide, and architecture diagram.',
deliverableAr: 'Documentation comprehensive: README', API docs, user guide, and architecture diagram.',
    resources: []
  },
  {
    dayNumber: 344,
    phaseSlug: 'capstone-professional',
    kind: 'lesson' as const,
    titleEn: 'Portfolio and Personal Branding',
    titleAr: 'Portfolio and Personal Branding',
    topic: 'Professional Practice',
    estimatedMinutes: 90,
    objectiveEn: 'Understand how to present your work in a portfolio and build a personal brand as a developer.',
    objectiveAr: 'Understand how to present your work in a portfolio and build a personal brand as a developer.',
    lessonEn:
      'A developer portfolio showcases your projects, skills, and experience. Include case studies that describe the problem, your solution, the technologies used, and the results. Build a personal brand by contributing to open source, writing technical articles, and maintaining an active presence on professional platforms.',
    lessonAr:
      'م portfolio للمطور يعرض Projects, skills, and experience. Include case studies that describe the problem, your solution, the technologies used, and the results. Build a personal brand by contributing to open source, writing technical articles, and maintaining an active presence on professional platforms.',
    tasks: [
      {
        en: 'Describe the elements of an effective developer portfolio',
        ar: 'Describe the elements of an effective developer portfolio'
      },
      {
        en: 'Write a case study for the capstone project (problem, solution, technologies, results)',
        ar: 'Write a case study for the capstone project'
      },
      {
        en: 'Set up a professional presence (e.g., LinkedIn, GitHub, personal website)',
        ar: 'Set up a professional presence (e.g., LinkedIn, GitHub, personal website)'
      },
      {
        en: 'Plan content for writing technical articles or blog posts',
        ar: 'Plan content for writing technical articles or blog posts'
      }
    ],
    exerciseEn: 'Create or update a developer portfolio and plan personal branding activities.',
    exerciseAr: 'Create or update a developer portfolio and plan personal branding activities.',
    deliverableEn: 'A developer portfolio and a personal branding plan.',
deliverableAr: 'Portfolio and personal branding plan.',
    resources: []
  },
  {
    dayNumber: 345,
    phaseSlug: 'capstone-professional',
    kind: 'project' as const,
    titleEn: 'Portfolio and Branding Setup',
    titleAr: 'Portfolio and Branding Setup',
    topic: 'Professional Practice',
    estimatedMinutes: 120,
    objectiveEn: 'Create or update a developer portfolio, including the capstone project as a case study, and set up personal branding channels.',
    objectiveAr: 'Create or update a developer portfolio, including the capstone project as a case study, and set up personal branding channels.',
    lessonEn:
      'This is the penultimate project for Phase 12. Create or update a developer portfolio, include the capstone project as a case study with problem, solution, technologies, and results, and set up channels (GitHub, LinkedIn, personal website) for personal branding.',
    lessonAr:
      'هذا هو المشروع قبل الأخير لـ Phase 12. Create or update a developer portfolio, include the capstone project as a case study with problem, solution, technologies, and results, and set up channels (GitHub, LinkedIn, personal website) for personal branding.',
    tasks: [
      {
        en: 'Create or update a developer portfolio website',
        ar: 'Create or update a developer portfolio website'
      },
      {
        en: 'Write a case study for the capstone project (problem, solution, technologies, results)',
        ar: 'Write a case study for the capstone project'
      },
      {
        en: 'Set up GitHub profile and repositories to showcase the work',
        ar: 'Set up GitHub profile and repositories to showcase the work'
      },
      {
        en: 'Set up a LinkedIn profile and personal website (optional)',
        ar: 'Set up a LinkedIn profile and personal website (optional)'
      }
    ],
    exerciseEn: 'Create or update a developer portfolio and set up personal branding channels.',
    exerciseAr: 'Create or update a developer portfolio and set up personal branding channels.',
    deliverableEn: 'A developer portfolio with capstone case study and branding channels set up.',
deliverableAr: 'Portfolio with capstone case study and branding channels.',
    resources: []
  },
  {
    dayNumber: 346,
    phaseSlug: 'capstone-professional',
    kind: 'lesson' as const,
    titleEn: 'Transition to the Workforce',
    titleAr: 'Transition to the Workforce',
    topic: 'Professional Practice',
    estimatedMinutes: 90,
    objectiveEn: 'Understand the job search process: resume writing, interview preparation, and negotiating offers.',
    objectiveAr: 'Understand the job search process: resume writing, interview preparation, and negotiating offers.',
    lessonEn:
      'Transitioning from learning to working involves: writing a developer resume that highlights skills and projects, preparing for technical interviews (coding challenges, system design), and negotiating job offers (salary, benefits, equity).',
    lessonAr:
      'الانتقال من التعلم إلى العمل involves: Writing a developer resume that highlights skills and projects, preparing for technical interviews (coding challenges, system design), and negotiating job offers (salary, benefits, equity).',
    tasks: [
      {
        en: 'Write a developer resume that highlights skills, projects, and experience',
        ar: 'Write a developer resume that highlights skills, projects, and experience'
      },
      {
        en: 'Prepare for a technical interview: coding challenge and system design question',
        ar: 'Prepare for a technical interview: coding challenge and system design question'
      },
      {
        en: 'Research salary ranges for the target role and location',
        ar: 'Research salary ranges for the target role and location'
      },
      {
        en: 'Practice negotiating a job offer',
        ar: 'Practice negotiating a job offer'
      }
    ],
    exerciseEn: 'Write a resume and prepare for a technical interview.',
    exerciseAr: 'Write a resume and prepare for a technical interview.',
    deliverableEn: 'A developer resume and interview preparation notes.',
deliverableAr: 'Resume and interview preparation notes.',
    resources: []
  },
  {
    dayNumber: 347,
    phaseSlug: 'capstone-professional',
    kind: 'project' as const,
    titleEn: 'Job Application Preparation',
    titleAr: 'Job Application Preparation',
    topic: 'Professional Practice',
    estimatedMinutes: 120,
    objectiveEn: 'Prepare job application materials: resume, cover letter, and portfolio. Practice technical interviews with coding challenges and system design questions.',
    objectiveAr: 'Prepare job application materials: resume, cover letter, and portfolio. Practice technical interviews with coding challenges and system design questions.',
    lessonEn:
      'This is the penultimate project for Phase 12. Prepare complete job application materials: a tailored resume, a cover letter for a target role, and a portfolio (GitHub + case studies). Practice technical interviews with coding challenges and system design questions.',
    lessonAr:
      'هذا هو المشروع قبل الأخير لـ Phase 12. Prepare complete job application materials: a tailored resume, a cover letter for a target role, and a portfolio (GitHub + case studies). Practice technical interviews with coding challenges and system design questions.',
    tasks: [
      {
        en: 'Tailor a resume for a target developer role, highlighting relevant skills and the capstone project',
        ar: 'Tailor a resume for a target developer role, highlighting relevant skills and the capstone project'
      },
      {
        en: 'Write a cover letter for a target role, explaining fit and interest',
        ar: 'Write a cover letter for a target role, explaining fit and interest'
      },
      {
        en: 'Set up the portfolio (GitHub + case studies) for the target role',
        ar: 'Set up the portfolio (GitHub + case studies) for the target role'
      },
      {
        en: 'Practice a coding challenge and a system design question',
        ar: 'Practice a coding challenge and a system design question'
      }
    ],
    exerciseEn: 'Prepare complete job application materials and practice interviews.',
    exerciseAr: 'Prepare complete job application materials and practice interviews.',
    deliverableEn: 'Tailored resume, cover letter, portfolio, and interview practice notes.',
deliverableAr: 'Application materials and interview practice.',
    resources: []
  },
  {
    dayNumber: 348,
    phaseSlug: 'capstone-professional',
    kind: 'lesson' as const,
    titleEn: 'Freelancing and Contract Work',
    titleAr: 'Freelancing and Contract Work',
    topic: 'Professional Practice',
    estimatedMinutes: 90,
    objectiveEn: 'Understand the basics of freelancing and contract work: finding clients, setting rates, and managing contracts.',
    objectiveAr: 'Understand the basics of freelancing and contract work: finding clients, setting rates, and managing contracts.',
    lessonEn:
      'Freelancing and contract work offer flexibility and variety. Key aspects: finding clients through platforms and networking, setting rates based on experience and market, and managing contracts with clear scopes, deliverables, and payment terms.',
    lessonAr:
      'Freelancing and contract work offer flexibility and variety. Key aspects: finding clients through platforms and networking, setting rates based on experience and market, and managing contracts with clear scopes, deliverables, and payment terms.',
    tasks: [
      {
        en: 'Describe the key platforms for finding freelance work (e.g., Upwork, Toptal)',
        ar: 'Describe the key platforms for finding freelance work (e.g., Upwork, Toptal)'
      },
      {
        en: 'Set rates based on experience level and market research',
        ar: 'Set rates based on experience level and market research'
      },
      {
        en: 'Write a contract scope and deliverables document',
        ar: 'Write a contract scope and deliverables document'
      },
      {
        en: 'Define payment terms and invoicing process',
        ar: 'Define payment terms and invoicing process'
      }
    ],
    exerciseEn: 'Set up freelance rates and draft a contract scope.',
    exerciseAr: 'Set up freelance rates and draft a contract scope.',
    deliverableEn: 'Freelance rates and a contract scope document.',
deliverableAr: 'Freelance rates and contract scope.',
    resources: []
  },
  {
    dayNumber: 349,
    phaseSlug: 'capstone-professional',
    kind: 'project' as const,
    titleEn: 'Freelance Setup',
    titleAr: 'Freelance Setup',
    topic: 'Freelance',
    estimatedMinutes: 120,
    objectiveEn: 'Set up freelance contracting: define service offerings, set rates, and create a contract template for future client work.',
    objectiveAr: 'Set up freelance contracting: define service offerings, set rates, and create a contract template for future client work.',
    lessonEn:
      'This is the penultimate project for Phase 12. Define service offerings based on your skills, set competitive rates based on market research, and create a contract template with scope, deliverables, and payment terms.',
    lessonAr:
      'هذا هو المشروع قبل الأخير لـ Phase 12. Define service offerings based on your skills, set competitive rates based on market research, and create a contract template with scope, deliverables, and payment terms.',
    tasks: [
      {
        en: 'Define service offerings based on your skills and the capstone project',
        ar: 'Define service offerings based on your skills and the capstone project'
      },
      {
        en: 'Set rates based on market research (e.g., Upwork rates for your level)',
        ar: 'Set rates based on market research (e.g., Upwork rates for your level)'
      },
      {
        en: 'Create a contract template with scope, deliverables, and payment terms',
        ar: 'Create a contract template with scope, deliverables, and payment terms'
      },
      {
        en: 'Plan how to find the first client (platforms, networking)',
        ar: 'Plan how to find the first client (platforms, networking)'
      }
    ],
    exerciseEn: 'Set up freelance contracting with service offerings, rates, and a contract template.',
    exerciseAr: 'Set up freelance contracting with service offerings, rates, and a contract template.',
    deliverableEn: 'Service offerings, rates, and a contract template.',
deliverableAr: 'Service offerings', rates, and contract template.',
    resources: []
  },
  {
    dayNumber: 350,
    phaseSlug: 'capstone-professional',
    kind: 'lesson' as const,
    titleEn: 'Lifelong Learning and Keeping Skills Current',
    titleAr: 'Lifelong Learning and Keeping Skills Current',
    topic: 'Professional Practice',
    estimatedMinutes: 90,
    objectiveEn: 'Understand the importance of continuous learning in tech and strategies for keeping skills current.',
    objectiveAr: 'Understand the importance of continuous learning in tech and strategies for keeping skills current.',
    lessonEn:
      'Technology evolves rapidly. Strategies for keeping skills current: follow industry blogs and news, take regular courses, contribute to open source, attend meetups and conferences, and experiment with new tools and frameworks.',
    lessonAr:
      'Technology evolves rapidly. Strategies for keeping skills current: follow industry blogs and news, take regular courses, contribute to open source, attend meetups and conferences, and experiment with new tools and frameworks.',
    tasks: [
      {
        en: 'Identify three resources for staying current in tech (blogs, newsletters, podcasts)',
        ar: 'Identify three resources for staying current in tech'
      },
      {
        en: 'Plan a learning schedule (e.g., one course per month, one meetup per quarter)',
        ar: 'Plan a learning schedule'
      },
      {
        en: 'Experiment with a new tool or framework outside your comfort zone',
        ar: 'Experiment with a new tool or framework outside your comfort zone'
      },
      {
        en: 'Contribute to an open source project to keep skills sharp',
        ar: 'Contribute to an open source project to keep skills sharp'
      }
    ],
    exerciseEn: 'Plan a continuous learning strategy and experiment with a new tool.',
    exerciseAr: 'Plan a continuous learning strategy and experiment with a new tool.',
    deliverableEn: 'A continuous learning strategy and a new tool experiment.',
deliverableAr: 'Learning strategy and tool experiment.',
    resources: []
  },
  {
    dayNumber: 351,
    phaseSlug: 'capstone-professional',
    kind: 'project' as const,
    titleEn: 'Learning Plan',
    titleAr: 'Learning Plan',
    topic: 'Learning',
    estimatedMinutes: 120,
    objectiveEn: 'Create a personal learning plan for the next 12 months, including courses, tools to experiment with, and open source projects to contribute to.',
    objectiveAr: 'Create a personal learning plan for the next 12 months, including courses, tools to experiment with, and open source projects to contribute to.',
    lessonEn:
      'This is the penultimate project for Phase 12. Create a 12-month learning plan that includes formal courses, tools to experiment with, and open source projects to contribute to. Review and adjust the plan quarterly.',
    lessonAr:
      'هذا هو المشروع قبل الأخير لـ Phase 12. Create a 12-month learning plan that includes formal courses, tools to experiment with, and open source projects to contribute to. Review and adjust the plan quarterly.',
    tasks: [
      {
        en: 'Identify three courses or certifications to complete in the next 12 months',
        ar: 'Identify three courses or certifications to complete in the next 12 months'
      },
      {
        en: 'Identify three tools or frameworks to experiment with',
        ar: 'Identify three tools or frameworks to experiment with'
      },
      {
        en: 'Identify three open source projects to contribute to',
        ar: 'Identify three open source projects to contribute to'
      },
      {
        en: 'Create a quarterly review schedule for the learning plan',
        ar: 'Create a quarterly review schedule for the learning plan'
      }
    ],
    exerciseEn: 'Create a 12-month personal learning plan.',
    exerciseAr: 'Create a 12-month personal learning plan.',
    deliverableEn: 'A 12-month personal learning plan.',
deliverableAr: '12-month learning plan.',
    resources: []
  },
  {
    dayNumber: 352,
    phaseSlug: 'capstone-professional',
    kind: 'lesson' as const,
    titleEn: 'Community and Networking',
    titleAr: 'Community and Networking',
    topic: 'Professional Practice',
    estimatedMinutes: 90,
    objectiveEn: 'Understand the value of community and networking in tech, and strategies for building professional relationships.',
    objectiveAr: 'Understand the value of community and networking in tech, and strategies for building professional relationships.',
    lessonEn:
      'Community and networking can open doors to jobs, collaborations, and learning opportunities. Strategies: attend meetups and conferences, participate in online communities (e.g., Discord, Reddit), contribute to open source, and follow up with new contacts.',
    lessonAr:
      'Community and networking can open doors to jobs, collaborations, and learning opportunities. Strategies: attend meetups and conferences, participate in online communities (e.g., Discord, Reddit), contribute to open source, and follow up with new contacts.',
    tasks: [
      {
        en: 'Identify three tech communities or meetups to participate in',
        ar: 'Identify three tech communities or meetups to participate in'
      },
      {
        en: 'Participate in an online community or forum',
        ar: 'Participate in an online community or forum'
      },
      {
        en: 'Contribute to an open source project to build relationships',
        ar: 'Contribute to an open source project to build relationships'
      },
      {
        en: 'Follow up with new contacts and maintain the relationship',
        ar: 'Follow up with new contacts and maintain the relationship'
      }
    ],
    exerciseEn: 'Build a networking strategy and engage with three new contacts.',
    exerciseAr: 'Build a networking strategy and engage with three new contacts.',
    deliverableEn: 'A networking strategy and three new professional contacts.',
deliverableAr: 'Networking strategy and contacts.',
    resources: []
  },
  {
    dayNumber: 353,
    phaseSlug: 'capstone-professional',
    kind: 'project' as const,
    titleEn: 'Networking and Community Engagement',
    titleAr: 'Networking and Community Engagement',
    topic: 'Community',
    estimatedMinutes: 120,
    objectiveEn: 'Engage with a tech community: attend a meetup or conference, contribute to an open source project, and follow up with new contacts.',
    objectiveAr: 'Engage with a tech community: attend a meetup or conference, contribute to an open source project, and follow up with new contacts.',
    lessonEn:
      'This is the final project for Phase 12. Engage with a tech community by attending a meetup or conference, contributing to an open source project, and following up with new contacts to build professional relationships.',
    lessonAr:
      'هذا هو المشروع الأخير لـ Phase 12. Engage with a tech community by attending a meetup or conference, contributing to an open source project, and following up with new contacts to build professional relationships.',
    tasks: [
      {
        en: 'Attend a tech meetup or conference (in-person or virtual)',
        ar: 'Attend a tech meetup or conference (in-person or virtual)'
      },
      {
        en: 'Contribute to an open source project (first PR or issue)',
        ar: 'Contribute to an open source project (first PR or issue)'
      },
      {
        en: 'Follow up with at least three new contacts made at the event or in the community',
        ar: 'Follow up with at least three new contacts made at the event or in the community'
      },
      {
        en: 'Reflect on the experience and how it contributed to professional growth',
        ar: 'Reflect on the experience and how it contributed to professional growth'
      }
    ],
    exerciseEn: 'Engage with a tech community and build professional relationships.',
    exerciseAr: 'Engage with a tech community and build professional relationships.',
    deliverableEn: 'Community engagement experience and new professional contacts.',
deliverableAr: 'Community engagement experience and contacts.',
    resources: []
  },
  {
    dayNumber: 354,
    phaseSlug: 'capstone-professional',
    kind: 'lesson' as const,
    titleEn: 'Summary and Graduation',
    titleAr: 'Summary and Graduation',
    topic: 'Graduation',
    estimatedMinutes: 70,
    objectiveEn: 'Reflect on the entire curriculum journey, summarize key takeaways from all 12 phases, and celebrate the completion of the 365-day learning journey.',
    objectiveAr: 'Reflect on the entire curriculum journey, summarize key takeaways from all 12 phases, and celebrate the completion of the 365-day learning journey.',
    lessonEn:
      'You have completed the 365-day curriculum! Reflect on the journey through all 12 phases: from fundamentals to advanced TypeScript, databases, testing, AI, security, DevOps, and professional practice. Summarize the key takeaways and celebrate this achievement.',
    lessonAr:
      'Completed the 365-day curriculum! Reflect on the journey through all 12 phases: من fundamentals to advanced TypeScript, databases, testing, AI, security, DevOps, and professional practice. Summarize the key takeaways and celebrate this achievement.',
    lessonAr:
      'Completed the 365-day curriculum! Reflect on the journey through all 12 phases: من fundamentals to advanced TypeScript, databases, testing, AI, security, DevOps, and professional practice. Summarize the key takeaways and celebrate this achievement.',
    tasks: [
      {
        en: 'Summarize the key takeaways from all 12 phases of the curriculum',
        ar: 'Summarize the key takeaways from all 12 phases of the curriculum'
      },
      {
        en: 'Reflect on the journey and personal growth over the 365 days',
        ar: 'Reflect on the journey and personal growth over the 365 days'
      },
      {
        en: 'Celebrate the completion of the curriculum',
        ar: 'Celebrate the completion of the curriculum'
      }
    ],
    exerciseEn: 'Write a graduation reflection and celebrate the achievement.',
    exerciseAr: 'Write a graduation reflection and celebrate the achievement.',
    deliverableEn: 'A graduation reflection document.',
deliverableAr: 'Graduation reflection document.',
    resources: []
  },
  {
    dayNumber: 355,
    phaseSlug: 'capstone-professional',
    kind: 'project' as const,
    titleEn: 'Graduation Reflection',
    titleAr: 'Graduation Reflection',
    topic: 'Graduation',
    estimatedMinutes: 120,
    objectiveEn: 'Write a reflection on the 365-day curriculum journey, key learnings, personal growth, and future goals.',
    objectiveAr: 'Write a reflection on the 365-day curriculum journey, key learnings, personal growth, and future goals.',
    lessonEn:
      'This is the final project for Phase 12. Write a reflection on the entire 365-day journey, the key learnings from each phase, personal growth, and goals for the future.',
    lessonAr:
      'هذا هو المشروع الأخير لـ Phase 12. Write a reflection on the entire 365-day journey, the key learnings from each phase, personal growth, and goals for the future.',
    tasks: [
      {
        en: 'Write a reflection on the 365-day curriculum journey',
        ar: 'Write a reflection on the 365-day curriculum journey'
      },
      {
        en: 'Summarize key learnings from each phase',
        ar: 'Summarize key learnings from each phase'
      },
      {
        en: 'Reflect on personal growth over the 365 days',
        ar: 'Reflect on personal growth over the 365 days'
      },
      {
        en: 'Write down future goals and next steps',
        ar: 'Write down future goals and next steps'
      }
    ],
    exerciseEn: 'Write a graduation reflection with key learnings and future goals.',
    exerciseAr: 'Write a graduation reflection with key learnings and future goals.',
    deliverableEn: 'A graduation reflection document with key learnings and future goals.',
deliverableAr: 'Graduation reflection with learnings and goals.',
    resources: []
  },
  {
    dayNumber: 356,
    phaseSlug: 'capstone-professional',
    kind: 'lesson' as const,
    titleEn: 'Community Contributions',
    titleAr: 'Community Contributions',
    topic: 'Community',
    estimatedMinutes: 90,
    objectiveEn: 'Understand the impact of contributing to the developer community and strategies for sustained contributions.',
    objectiveAr: 'Understand the impact of contributing to the developer community and strategies for sustained contributions.',
    lessonEn:
      'Contributing to the developer community (open source, blogging, speaking, mentoring) has impact: skill development, visibility, and helping others. Strategies: start small (fix a bug, write a post), be consistent, and find your niche.',
    lessonAr:
      'Contributing to the developer community (open source, blogging, speaking, mentoring) has impact: skill development, visibility, and helping others. Strategies: start small (fix a bug, write a post), be consistent, and find your niche.',
    tasks: [
      {
        en: 'Describe the benefits of contributing to the developer community',
        ar: 'Describe the benefits of contributing to the developer community'
      },
      {
        en: 'Identify a way to contribute (e.g., fix a bug, write a post, speak at a meetup)',
        ar: 'Identify a way to contribute'
      },
      {
        en: 'Plan a sustained contribution schedule',
        ar: 'Plan a sustained contribution schedule'
      },
      {
        en: 'Track contributions and reflect on the impact',
        ar: 'Track contributions and reflect on the impact'
      }
    ],
    exerciseEn: 'Plan a sustained community contribution schedule.',
    exerciseAr: 'Plan a sustained community contribution schedule.',
    deliverableEn: 'A contribution schedule and reflection on impact.',
deliverableAr: 'Contribution schedule and impact.',
    resources: []
  },
  {
    dayNumber: 357,
    phaseSlug: 'capstone-professional',
    kind: 'project' as const,
    titleEn: 'Community Contribution',
    titleAr: 'Community Contribution',
    topic: 'Community',
    estimatedMinutes: 120,
    objectiveEn: 'Make a sustained contribution to the developer community: fix a bug in an open source project, write a technical blog post, or speak at a meetup, and track the impact.',
    objectiveAr: 'Make a sustained contribution to the developer community: fix a bug in an open source project, write a technical blog post, or speak at a meetup, and track the impact.',
    lessonEn:
      'This is the final project for Phase 12. Make a concrete contribution to the developer community: fix a bug in an open source project, write a technical blog post, or speak at a meetup. Track the contribution and reflect on the impact on your skills and network.',
    lessonAr:
      'هذا هو المشروع الأخير لـ Phase 12. Make a concrete contribution to the developer community: fix a bug in an open source project, write a technical blog post, or speak at a meetup. Track the contribution and reflect on the impact on your skills and network.',
    tasks: [
      {
        en: 'Fix a bug in an open source project and submit a PR',
        ar: 'Fix a bug in an open source project and submit a PR'
      },
      {
        en: 'Write a technical blog post and publish it',
        ar: 'Write a technical blog post and publish it'
      },
      {
        en: 'Speak at a meetup or conference (virtual or in-person)',
        ar: 'Speak at a meetup or conference'
      },
      {
        en: 'Track the contribution and reflect on the impact on skills and network',
        ar: 'Track the contribution and reflect on the impact on skills and network'
      }
    ],
    exerciseEn: 'Make a community contribution and track the impact.',
    exerciseAr: 'Make a community contribution and track the impact.',
    deliverableEn: 'A community contribution (PR, post, or talk) and impact reflection.',
deliverableAr: 'Contribution and impact reflection.',
    resources: []
  },
  {
    dayNumber: 358,
    phaseSlug: 'capstone-professional',
    kind: 'lesson' as const,
    titleEn: 'Final Reflections and Next Steps',
    titleAr: 'Final Reflections and Next Steps',
    topic: 'Graduation',
    estimatedMinutes: 70,
    objectiveEn: 'Final reflections on the 365-day journey, key takeaways, and next steps for continued growth as a developer.',
    objectiveAr: 'Final reflections on the 365-day journey, key takeaways, and next steps for continued growth as a developer.',
    lessonEn:
      'The 365-day curriculum is complete. Reflect on how far you have come, the skills you have built, and the path ahead. The journey continues with continued learning, building, and contributing to the developer community.',
    lessonAr:
      'The 365-day curriculum is complete. Reflect on how far you have come, the skills you have built, and the path ahead. The journey continues with continued learning, building, and contributing to the developer community.',
    tasks: [
      {
        en: 'Final reflection on the 365-day journey and key takeaways',
        ar: 'Final reflection on the 365-day journey and key takeaways'
      },
      {
        en: 'Identify next steps for continued growth as a developer',
        ar: 'Identify next steps for continued growth'
      },
      {
        en: 'Set goals for the next 6-12 months',
        ar: 'Set goals for the next 6-12 months'
      }
    ],
    exerciseEn: 'Write final reflections and set goals for the next phase of growth.',
    exerciseAr: 'Final reflections and set goals for the next phase of growth.',
    deliverableEn: 'Final reflections and next-step goals.',
deliverableAr: 'Reflections and goals.',
    resources: []
  },
  {
    dayNumber: 359,
    phaseSlug: 'capstone-professional',
    kind: 'project' as const,
    titleEn: 'Final Reflection and Next Steps',
    titleAr: 'Final Reflection and Next Steps',
    topic: 'Graduation',
    estimatedMinutes: 120,
    objectiveEn: 'Write a final reflection on the 365-day curriculum, key learnings, personal growth, and goals for the next 6-12 months. Set actionable next steps for continued development.',
    objectiveAr: 'Write a final reflection on the 365-day curriculum, key learnings, personal growth, and goals for the next 6-12 months. Set actionable next steps for continued development.',
    lessonEn:
      'This is the final project for Phase 12. Write a final reflection on the entire 365-day curriculum, the key learnings from each phase, personal growth over the journey, and actionable next steps for the next 6-12 months.',
    lessonAr:
      'هذا هو المشروع الأخير لـ Phase 12. Write a final reflection on the entire 365-day curriculum, the key learnings from each phase, personal growth over the journey, and actionable next steps for the next 6-12 months.',
    tasks: [
      {
        en: 'Write a final reflection on the 365-day curriculum',
        ar: 'Write a final reflection on the 365-day curriculum'
      },
      {
        en: 'Summarize key learnings from each phase',
        ar: 'Summarize key learnings from each phase'
      },
      {
        en: 'Reflect on personal growth over the 365 days',
        ar: 'Reflect on personal growth over the 365 days'
      },
      {
        en: 'Set actionable goals for the next 6-12 months',
        ar: 'Set actionable goals for the next 6-12 months'
      }
    ],
    exerciseEn: 'Write a final reflection with key learnings and actionable next steps.',
    exerciseAr: 'Write a final reflection with key learnings and actionable next steps.',
    deliverableEn: 'A final reflection document with key learnings and next-step goals.',
deliverableAr: 'Reflection document with learnings and goals.',
    resources: []
  },
  {
    dayNumber: 360,
    phaseSlug: 'capstone-professional',
    kind: 'lesson' as const,
    titleEn: 'Alumni Resources and Continuing Education',
    titleAr: 'Alumni Resources and Continuing Education',
    topic: 'Alumni',
    estimatedMinutes: 90,
    objectiveEn: 'Understand the resources available to alumni and opportunities for continuing education.',
    objectiveAr: 'Understand the resources available to alumni and opportunities for continuing education.',
    lessonEn:
      'As an alum of the 365-day curriculum, you have access to: alumni community, advanced courses, mentorship opportunities, and job placement resources. Continuing education options: specialized certifications, advanced workshops, and graduate-level courses in computer science.',
    lessonAr:
      'As an alum of the 365-day curriculum, you have access to: alumni community, advanced courses, mentorship opportunities, and job placement resources. Continuing education options: specialized certifications, advanced workshops, and graduate-level courses in computer science.',
    tasks: [
      {
        en: 'Identify the alumni resources available (community, mentorship, job placement)',
        ar: 'Identify the alumni resources available'
      },
      {
        en: 'Research continuing education options (certifications, advanced workshops)',
        ar: 'Research continuing education options'
      },
      {
        en: 'Plan a continuing education path based on career goals',
        ar: 'Plan a continuing education path'
      },
      {
        en: 'Connect with the alumni community',
        ar: 'Connect with the alumni community'
      }
    ],
    exerciseEn: 'Plan a continuing education path and connect with the alumni community.',
    exerciseAr: 'Plan a continuing education path and connect with the alumni community.',
    deliverableEn: 'A continuing education plan and alumni community connection.',
deliverableAr: 'Continuing education plan and community connection.',
    resources: []
  },
  {
    dayNumber: 361,
    phaseSlug: 'capstone-professional',
    kind: 'project' as const,
    titleEn: 'Alumni Onboarding',
    titleAr: 'Alumni Onboarding',
    topic: 'Alumni',
    estimatedMinutes: 120,
    objectiveEn: 'Onboard into the alumni community: connect with fellow graduates, explore continuing education options, and set goals for the next phase of your career.',
    objectiveAr: 'Onboard into the alumni community: connect with fellow graduates, explore continuing education options, and set goals for the next phase of your career.',
    lessonEn:
      'This is the final project for Phase 12. Onboard into the alumni community: connect with fellow graduates, explore continuing education options (certifications, workshops), and set goals for the next phase of your career.',
    lessonAr:
      'هذا هو المشروع الأخير لـ Phase 12. Onboard into the alumni community: connect with fellow graduates, explore continuing education options (certifications, workshops), and set goals for the next phase of your career.',
    tasks: [
      {
        en: 'Connect with fellow alumni through the community platform',
        ar: 'Connect with fellow alumni through the community platform'
      },
      {
        en: 'Research and list three continuing education options (certifications, workshops)',
        ar: 'Research and list three continuing education options'
      },
      {
        en: 'Set a goal for the next 6-12 months of your career',
        ar: 'Set a goal for the next 6-12 months'
      },
      {
        en: 'Reach out to an alumni mentor for guidance',
        ar: 'Reach out to an alumni mentor for guidance'
      }
    ],
    exerciseEn: 'Onboard into the alumni community and set career goals.',
    exerciseAr: 'Onboard into the alumni community and set career goals.',
    deliverableEn: 'Alumni onboarding complete with goals and mentor connection.',
deliverableAr: 'Alumni onboarding complete.',
    resources: []
  },
  {
    dayNumber: 362,
    phaseSlug: 'capstone-professional',
    kind: 'lesson' as const,
    titleEn: 'Alumni Success Stories',
    titleAr: 'Alumni Success Stories',
    topic: 'Alumni',
    estimatedMinutes: 90,
    objectiveEn: 'Read and reflect on alumni success stories to understand career paths and opportunities available to graduates.',
    objectiveAr: 'Read and reflect on alumni success stories to understand career paths and opportunities available to graduates.',
    lessonEn:
      'Learning from alumni success stories provides inspiration and insight into career paths. Read stories of graduates who have leveraged the curriculum to secure jobs, start businesses, or advance their careers.',
    lessonAr:
      'قراءة قصص نجاح الخريجين توفر الإلهام والرؤية إلىPaths المهنية. Read stories of graduates who have leveraged the curriculum to secure jobs, start businesses, or advance their careers.',
    tasks: [
      {
        en: 'Read 2-3 alumni success stories',
        ar: 'Read 2-3 alumni success stories'
      },
      {
        en: 'Identify common patterns and strategies that led to their success',
        ar: 'Identify common patterns and strategies that led to their success'
      },
      {
        en: 'Reflect on how these paths might apply to your career',
        ar: 'Reflect on how these paths might apply to your career'
      }
    ],
    exerciseEn: 'Read alumni stories and reflect on potential career paths.',
    exerciseAr: 'Read alumni stories and reflect on potential career paths.',
    deliverableEn: 'Reflection on alumni stories and potential career paths.',
deliverableAr: 'Reflection on stories and paths.',
    resources: []
  },
  {
    dayNumber: 363,
    phaseSlug: 'capstone-professional',
    kind: 'project' as const,
    titleEn: 'Alumni Success Reflection',
    titleAr: 'Alumni Success Reflection',
    topic: 'Alumni',
    estimatedMinutes: 120,
    objectiveEn: 'Reflect on 2-3 alumni success stories and identify takeaways that can inform your next career move.',
    objectiveAr: 'Reflect on 2-3 alumni success stories and identify takeaways that can inform your next career move.',
    lessonEn:
      'This is the final project for Phase 12. Reflect on 2-3 alumni success stories, identify the key takeaways and strategies that led to their success, and how they might inform your next career move.',
    lessonAr:
      'هذا هو المشروع الأخير لـ Phase 12. Reflect on 2-3 alumni success stories, identify the key takeaways and strategies that led to their success, and how they might inform your next career move.',
    tasks: [
      {
        en: 'Read 2-3 alumni success stories',
        ar: 'Read 2-3 alumni success stories'
      },
      {
        en: 'Identify the key takeaways and strategies that led to their success',
        ar: 'Identify the key takeaways and strategies that led to their success'
      },
      {
        en: 'Reflect on how these paths might apply to your career',
        ar: 'Reflect on how these paths might apply to your career'
      }
    ],
    exerciseEn: 'Reflect on alumni success stories and identify takeaways for your career.',
    exerciseAr: 'Reflect on alumni success stories and identify takeaways for your career.',
    deliverableEn: 'A reflection on alumni stories and takeaways for your career.',
deliverableAr: 'Reflection on stories and takeaways.',
    resources: []
  },
  {
    dayNumber: 364,
    phaseSlug: 'capstone-professional',
    kind: 'lesson' as const,
    titleEn: 'Curriculum Maintenance and Updates',
    titleAr: 'Curriculum Maintenance and Updates',
    topic: 'Maintenance',
    estimatedMinutes: 90,
    objectiveEn: 'Understand the process for maintaining and updating the curriculum to keep it current with industry trends and technologies.',
    objectiveAr: 'Understand the process for maintaining and updating the curriculum to keep it current with industry trends and technologies.',
    lessonEn:
      'The tech curriculum must be regularly maintained and updated to stay current with industry trends, new technologies, and evolving best practices. Process: monitor industry news, gather feedback from alumni and students, prioritize updates, and release new versions of curriculum content.',
    lessonAr:
      'The tech curriculum must be regularly maintained and updated to stay current with industry trends, new technologies, and evolving best practices. Process: monitor industry news, gather feedback from alumni and students, prioritize updates, and release new versions of curriculum content.',
    tasks: [
      {
        en: 'Describe the process for monitoring industry trends and curriculum relevance',
        ar: 'Describe the process for monitoring industry trends and curriculum relevance'
      },
      {
        en: 'Gather feedback from alumni and students on curriculum gaps',
        ar: 'Gather feedback from alumni and students on curriculum gaps'
      },
      {
        en: 'Priorite updates based on relevance and impact',
        ar: 'Prioritize updates based on relevance and impact'
      },
      {
        en: 'Release a new version of curriculum content',
        ar: 'Release a new version of curriculum content'
      }
    ],
    exerciseEn: 'Describe a process for curriculum maintenance and prioritize one update.',
    exerciseAr: 'Describe a process for curriculum maintenance and prioritize one update.',
    deliverableEn: 'A curriculum maintenance process and one prioritized update.',
deliverableAr: 'Maintenance process and update prioritized.',
    resources: []
  },
  {
    dayNumber: 365,
    phaseSlug: 'capstone-professional',
    kind: 'project' as const,
    titleEn: 'Curriculum Update Planning',
    titleAr: 'Curriculum Update Planning',
    topic: 'Maintenance',
    estimatedMinutes: 120,
    objectiveEn: 'Plan a curriculum update: identify one area to update, research current industry practices, and outline the update content.',
    objectiveAr: 'Plan a curriculum update: identify one area to update, research current industry practices, and outline the update content.',
    lessonEn:
      'This is the final project for Phase 12. Plan a curriculum update: identify one area that needs updating (e.g., a new technology, a changed best practice), research current industry practices, and outline the content for the update.',
    lessonAr:
      'هذا هو المشروع الأخير لـ Phase 12. Plan a curriculum update: identify one area that needs updating (e.g., a new technology, a changed best practice), research current industry practices, and outline the content for the update.',
    tasks: [
      {
        en: 'Identify one area of the curriculum that needs updating',
        ar: 'Identify one area of the curriculum that needs updating'
      },
      {
        en: 'Research current industry practices for that area',
        ar: 'Research current industry practices for that area'
      },
      {
        en: 'Outline the content for the curriculum update',
        ar: 'Outline the content for the curriculum update'
      },
      {
        en: 'Plan the release schedule for the updated content',
        ar: 'Plan the release schedule for the updated content'
      }
    ],
    exerciseEn: 'Plan a curriculum update with content outline and release schedule.',
    exerciseAr: 'Plan a curriculum update with content outline and release schedule.',
    deliverableEn: 'A curriculum update plan with content outline and release schedule.',
deliverableAr: 'Update plan with content outline and schedule.',
    resources: []
  }
]