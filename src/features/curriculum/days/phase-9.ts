import type { CurriculumDay } from '../types'

const MDN = 'https://developer.mozilla.org/en-US/docs'

/** Phase 9 — AI Integration (days 241–270). */
export const PHASE_9_DAYS: CurriculumDay[] = [
  {
    dayNumber: 241,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Introduction to AI and Large Language Models',
    titleAr: 'Introduction to AI and Large Language Models',
    topic: 'AI',
    estimatedMinutes: 90,
    objectiveEn: 'Understand what Large Language Models are, how they work, and the basics of prompting.',
    objectiveAr: 'Understand what Large Language Models are, how they work, and the basics of prompting.',
    lessonEn:
      'Large Language Models (LLMs) are deep learning models trained on vast amounts of text. They can understand context, generate human-like text, and perform tasks like summarization, translation, and code generation. Prompt engineering is the art of crafting inputs that elicit the desired output from the model.',
    lessonAr:
      'Large Language Models (LLMs) are deep learning models trained on vast amounts of text. They can understand context, generate human-like text, and perform tasks like summarization, translation, and code generation. Prompt engineering is the art of crafting inputs that elicit the desired output from the model.',
    tasks: [
      {
        en: 'Describe what an LLM is and give two examples',
        ar: 'Describe what an LLM is and give two examples'
      },
      {
        en: 'Write a basic prompt to get the model to summarize a text',
        ar: 'Write a basic prompt to get the model to summarize a text'
      },
      {
        en: 'Identify the components of a good prompt: clear task, context, format',
        ar: 'Identify the components of a good prompt: clear task, context, format'
      },
      {
        en: 'Experiment with different prompt styles and compare outputs',
        ar: 'Experiment with different prompt styles and compare outputs'
      }
    ],
    exerciseEn: 'Write three different prompts for the same task and compare the outputs.',
    exerciseAr: 'Write three different prompts for the same task and compare the outputs.',
    deliverableEn: 'Three prompts and a comparison of their outputs.',
deliverableAr: 'Three prompts and a comparison of their outputs.',
    resources: [
      { title: 'OpenAI Docs', url: 'https://platform.openai.com/docs', kind: 'official' }
    ],
    challengeEn: 'Write a prompt that gets the model to write a function that returns the factorial of a number',
    challengeAr: 'Write a prompt that gets the model to write a function that returns the factorial of a number',
    prerequisites: [],
    criteriaEn: ['Can describe LLM', 'Can write a basic prompt', 'Can identify prompt components'],
    criteriaAr: ['Can describe LLM', 'Can write a basic prompt', 'Can identify prompt components']
  },
  {
    dayNumber: 242,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Prompt Engineering Basics',
    titleAr: 'Prompt Engineering Basics',
    topic: 'AI Prompting',
    estimatedMinutes: 90,
    objectiveEn: 'Learn techniques for effective prompting: few-shot, chain-of-thought, and role-playing.',
    objectiveAr: 'Learn techniques for effective prompting: few-shot, chain-of-thought, and role-playing.',
    lessonEn:
      'Few-shot prompts provide examples in the input. Chain-of-thought prompts ask the model to think step by step. Role-playing prompts ask the model to adopt a persona. These techniques significantly improve the quality of outputs.',
    lessonAr:
      'Few-shot prompts provide examples in the input. Chain-of-thought prompts ask the model to think step by step. Role-playing prompts ask the model to adopt a persona. These techniques significantly improve the quality of outputs.',
    tasks: [
      {
        en: 'Write a few-shot prompt for a classification task with two examples',
        ar: 'Write a few-shot prompt for a classification task with two examples'
      },
      {
        en: 'Write a chain-of-thought prompt for a math problem',
        ar: 'Write a chain-of-thought prompt for a math problem'
      },
      {
        en: 'Write a role-playing prompt that asks the model to act as a senior developer',
        ar: 'Write a role-playing prompt that asks the model to act as a senior developer'
      },
      {
        en: 'Compare the outputs of the three prompting techniques',
        ar: 'Compare the outputs of the three prompting techniques'
      }
    ],
    exerciseEn: 'Write prompts using all three techniques and compare the results.',
    exerciseAr: 'Write prompts using all three techniques and compare the results.',
    deliverableEn: 'Three prompts (few-shot, chain-of-thought, role-playing) and output comparisons.',
deliverableAr: 'Three prompts and output comparisons.',
    resources: [
      { title: 'Prompt Engineering Guide', url: 'https://promptengineeringguide.org', kind: 'reference' }
    ],
    challengeEn: 'Write a chain-of-thought prompt that solves a logic puzzle',
    challengeAr: 'Write a chain-of-thought prompt that solves a logic puzzle',
    prerequisites: [241],
    criteriaEn: ['Can write a few-shot prompt', 'Can write a chain-of-thought prompt', 'Can write a role-playing prompt', 'Can compare outputs'],
    criteriaAr: ['Can write a few-shot prompt', 'Can write a chain-of-thought prompt', 'Can write a role-playing prompt', 'Can compare outputs']
  },
  {
    dayNumber: 243,
    phaseSlug: 'ai-integration',
    kind: 'project' as const,
    titleEn: 'AI-Powered Code Review Tool',
    titleAr: 'AI-Powered Code Review Tool',
    topic: 'AI project',
    estimatedMinutes: 120,
    objectiveEn: 'Build a tool that uses an LLM to review code and suggest improvements.',
    objectiveAr: 'Build a tool that uses an LLM to review code and suggest improvements.',
    lessonEn:
      'LLMs can be used to review code for style, potential bugs, and best practices. Build a tool that sends code to an LLM and displays the review response. Include a way for the user to accept or reject suggestions.',
    lessonAr:
      'LLMs can be used to review code for style, potential bugs, and best practices. Build a tool that sends code to an LLM and displays the review response. Include a way for the user to accept or reject suggestions.',
    tasks: [
      {
        en: 'Set up an API call to an LLM with a code review prompt',
        ar: 'Set up an API call to an LLM with a code review prompt'
      },
      {
        en: 'Parse the LLM response and extract suggestions',
        ar: 'Parse the LLM response and extract suggestions'
      },
      {
        en: 'Build a UI that displays suggestions and allows accept/reject',
        ar: 'Build a UI that displays suggestions and allows accept/reject'
      },
      {
        en: 'Test the tool with a sample code file',
        ar: 'Test the tool with a sample code file'
      }
    ],
    exerciseEn: 'Build an AI-powered code review tool that suggests improvements.',
    exerciseAr: 'Build an AI-powered code review tool that suggests improvements.',
    deliverableEn: 'A working code review tool with LLM suggestions.',
deliverableAr: 'AI-powered code review tool with suggestions.',
    resources: [
      { title: 'OpenAI API reference', url: 'https://platform.openai.com/docs/api-reference', kind: 'reference' }
    ],
    challengeEn: 'Add a feature that lets users add custom review rules',
    challengeAr: 'Add a feature that lets users add custom review rules',
    prerequisites: [242],
    criteriaEn: ['API call works', 'Suggestions parsed and displayed', 'UI with accept/reject', 'Tool tested with sample code'],
    criteriaAr: ['API call works', 'Suggestions parsed and displayed', 'UI with accept/reject', 'Tool tested with sample code']
  },
  {
    dayNumber: 244,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Token Usage and Cost Management',
    titleAr: 'Token Usage and Cost Management',
    topic: 'AI Cost',
    estimatedMinutes: 90,
    objectiveEn: 'Understand how token usage is counted and strategies to minimize costs when using LLMs.',
    objectiveAr: 'Understand how token usage is counted and strategies to minimize costs when using LLMs.',
    lessonEn:
      'LLM providers charge based on the number of tokens (input + output). Strategies to minimize costs include: keeping prompts concise, using efficient models for the task, caching responses, and truncating unnecessary context. Always monitor token usage in the provider dashboard.',
    lessonAr:
      'LLM providers charge based on the number of tokens (input + output). Strategies to minimize costs include: keeping prompts concise, using efficient models for the task, caching responses, and truncating unnecessary context. Always monitor token usage in the provider dashboard.',
    tasks: [
      {
        en: 'Count the tokens in a given prompt and completion',
        ar: 'Count the tokens in a given prompt and completion'
      },
      {
        en: 'Identify strategies to reduce token usage in a given use case',
        ar: 'Identify strategies to reduce token usage in a given use case'
      },
      {
        en: 'Set up a budget alert in the LLM provider dashboard',
        ar: 'Set up a budget alert in the LLM provider dashboard'
      },
      {
        en: 'Compare the cost of different models for the same task',
        ar: 'Compare the cost of different models for the same task'
      }
    ],
    exerciseEn: 'Calculate the cost of a sample prompt using the model\'s pricing',
    exerciseAr: 'Calculate the cost of a sample prompt using the model\'s pricing',
    deliverableEn: 'A cost calculation for a sample prompt.',
deliverableAr: 'Cost calculation for a sample prompt.',
    resources: [
      { title: 'OpenAI pricing', url: 'https://openai.com/pricing', kind: 'reference' }
    ],
    challengeEn: 'Write a prompt that achieves the same output with 20% fewer tokens',
    challengeAr: 'Write a prompt that achieves the same output with 20% fewer tokens',
    prerequisites: [243],
    criteriaEn: ['Can count tokens', 'Can identify cost-saving strategies', 'Can set up budget alert', 'Can compare model costs'],
    criteriaAr: ['Can count tokens', 'Can identify cost-saving strategies', 'Can set up budget alert', 'Can compare model costs']
  },
  {
    dayNumber: 245,
    phaseSlug: 'ai-integration',
    kind: 'project' as const,
    titleEn: 'AI Chatbot for Customer Support',
    titleAr: 'AI Chatbot for Customer Support',
    topic: 'AI project',
    estimatedMinutes: 120,
    objectiveEn: 'Build a chatbot that answers frequently asked questions using an LLM with a constrained knowledge base.',
    objectiveAr: 'Build a chatbot that answers frequently asked questions using an LLM with a constrained knowledge base.',
    lessonEn:
      'A chatbot for customer support can handle common queries without human intervention. Build a system that retrieves answers from a constrained knowledge base and uses an LLM to format the response. Include fallback for unanswered questions.',
    lessonAr:
      'Chatbot لدعم العملاء يمكنه التعامل مع الاستفسارات الشائعة دون تدخل بشري.ابن نظام يسترجع الإجابات من قاعدة معرفة مقيدة ويستخدم LLM لصياغة الاستجابة.包含 fallback for unanswered questions.',
    tasks: [
      {
        en: 'Create a knowledge base with frequently asked questions and answers',
        ar: 'Create a knowledge base with frequently asked questions and answers'
      },
      {
        en: 'Set up an API route that retrieves an answer from the knowledge base',
        ar: 'Set up an API route that retrieves an answer from the knowledge base'
      },
      {
        en: 'Build a chat interface that sends user queries to the LLM',
        ar: 'Build a chat interface that sends user queries to the LLM'
      },
      {
        en: 'Implement fallback responses for unanswered questions',
        ar: 'Implement fallback responses for unanswered questions'
      }
    ],
    exerciseEn: 'Build a chatbot that answers FAQs with fallback handling.',
    exerciseAr: 'Build a chatbot that answers FAQs with fallback handling.',
    deliverableEn: 'A chatbot with a knowledge base and fallback responses.',
deliverableAr: 'Chatbot with knowledge base and fallback responses.',
    resources: [
      { title: 'OpenAI Cookbook', url: 'https://github.com/openai/openai-cookbook', kind: 'reference' }
    ],
    challengeEn: 'Add a source attribution feature that cites the knowledge base entry used',
    challengeAr: 'Add a source attribution feature that cites the knowledge base entry used',
    prerequisites: [244],
    criteriaEn: ['Knowledge base created', 'API route retrieves answers', 'Chat interface works', 'Fallback implemented'],
    criteriaAr: ['Knowledge base created', 'API route retrieves answers', 'Chat interface works', 'Fallback implemented']
  },
  {
    dayNumber: 246,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Ethical AI and Bias Mitigation',
    titleAr: 'Ethical AI and Bias Mitigation',
    topic: 'AI Ethics',
    estimatedMinutes: 90,
    objectiveEn: 'Understand the ethical implications of AI and strategies for bias mitigation.',
    objectiveAr: 'Understand the ethical implications of AI and strategies for bias mitigation.',
    lessonEn:
      'AI systems can perpetuate or amplify biases present in training data. Ethical AI practices include: using diverse training data, testing for bias, transparency about model limitations, and human oversight for high-stakes decisions.',
    lessonAr:
      'AI systems can perpetuate or amplify biases present in training data. Ethical AI practices include: using diverse training data, testing for bias, transparency about model limitations, and human oversight for high-stakes decisions.',
    tasks: [
      {
        en: 'Identify a potential bias in an AI system',
        ar: 'Identify a potential bias in an AI system'
      },
      {
        en: 'Describe the ethical implications of deploying an AI system without bias testing',
        ar: 'Describe the ethical implications of deploying an AI system without bias testing'
      },
      {
        en: 'Implement a human-in-the-loop review for high-stakes AI decisions',
        ar: 'Implement a human-in-the-loop review for high-stakes AI decisions'
      },
      {
        en: 'Write a transparency statement about the model\'s limitations',
        ar: 'Write a transparency statement about the model\'s limitations'
      }
    ],
    exerciseEn: 'Identify and document a bias mitigation strategy for a given AI use case.',
    exerciseAr: 'Identify and document a bias mitigation strategy for a given AI use case.',
    deliverableEn: 'A bias mitigation strategy document.',
deliverableAr: 'Bias mitigation strategy document.',
    resources: [
      { title: 'Guidelines for Ethical AI', url: 'https://www.nist.gov/publications/guidelines-ethical-ai', kind: 'reference' }
    ],
    challengeEn: 'Write a transparency statement for a chatbot that limits its domain',
    challengeAr: 'Write a transparency statement for a chatbot that limits its domain',
    prerequisites: [245],
    criteriaEn: ['Can identify bias', 'Can describe ethical implications', 'Can implement human-in-the-loop', 'Can write transparency statement'],
    criteriaAr: ['Can identify bias', 'Can describe ethical implications', 'Can implement human-in-the-loop', 'Can write transparency statement']
  },
  {
    dayNumber: 247,
    phaseSlug: 'ai-integration',
    kind: 'project' as const,
    titleEn: 'AI-Powered Content Generator',
    titleAr: 'AI-Powered Content Generator',
    topic: 'AI project',
    estimatedMinutes: 120,
    objectiveEn: 'Build a tool that generates blog posts or articles using an LLM with a defined topic and style guide.',
    objectiveAr: 'Build a tool that generates blog posts or articles using an LLM with a defined topic and style guide.',
    lessonEn:
      'LLMs can generate content given a topic and style guide. Build a tool that takes a topic, style, and length, and uses an LLM to generate the content. Include a way to edit and regenerate.',
    lessonAr:
      'LLMs can generate content given a topic and style guide. Build a tool that takes a topic, style, and length, and uses an LLM to generate the content. Include a way to edit and regenerate.',
    tasks: [
      {
        en: 'Define a topic, style guide, and length for a blog post',
        ar: 'Define a topic, style guide, and length for a blog post'
      },
      {
        en: 'Set up an API call to an LLM with the generation prompt',
        ar: 'Set up an API call to an LLM with the generation prompt'
      },
      {
        en: 'Build a UI that takes topic, style, and length as input',
        ar: 'Build a UI that takes topic, style, and length as input'
      },
      {
        en: 'Display the generated content with options to edit or regenerate',
        ar: 'Display the generated content with options to edit or regenerate'
      }
    ],
    exerciseEn: 'Build a content generation tool with topic, style, and length controls.',
    exerciseAr: 'Build a content generation tool with topic, style, and length controls.',
    deliverableEn: 'A content generation tool with controls and generated output.',
deliverableAr: 'Content generation tool with controls and output.',
    resources: [
      { title: 'OpenAI Cookbook', url: 'https://github.com/openai/openai-cookbook', kind: 'reference' }
    ],
    challengeEn: 'Add a feature that saves generated content to a database',
    challengeAr: 'Add a feature that saves generated content to a database',
    prerequisites: [246],
    criteriaEn: ['Topic, style, and length defined', 'API call works', 'UI with input controls', 'Content generated and editable'],
    criteriaAr: ['Topic, style, and length defined', 'API call works', 'UI with input controls', 'Content generated and editable']
  },
  {
    dayNumber: 248,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Integrating AI into Existing Applications',
    titleAr: 'Integrating AI into Existing Applications',
    topic: 'AI Integration',
    estimatedMinutes: 90,
    objectiveEn: 'Learn patterns for integrating AI features into existing full-stack applications.',
    objectiveAr: 'Learn patterns for integrating AI features into existing full-stack applications.',
    lessonEn:
      'AI can be integrated into existing applications as a feature: AI-assisted search, content generation, or code suggestions. Key patterns include: backend API routes for AI calls, client-side UI for input/output, and rate limiting to prevent abuse.',
    lessonAr:
      'AI can be integrated into existing applications as a feature: AI-assisted search, content generation, or code suggestions. Key patterns include: backend API routes for AI calls, client-side UI for input/output, and rate limiting to prevent abuse.',
    tasks: [
      {
        en: 'Design a backend API route that accepts a prompt and returns LLM output',
        ar: 'Design a backend API route that accepts a prompt and returns LLM output'
      },
      {
        en: 'Build a client-side UI component that sends a prompt and displays the response',
        ar: 'Build a client-side UI component that sends a prompt and displays the response'
      },
      {
        en: 'Implement rate limiting and abuse prevention for AI calls',
        ar: 'Implement rate limiting and abuse prevention for AI calls'
      },
      {
        en: 'Test the integration end-to-end',
        ar: 'Test the integration end-to-end'
      }
    ],
    exerciseEn: 'Integrate an AI feature into a sample application.',
    exerciseAr: 'Integrate an AI feature into a sample application.',
    deliverableEn: 'An integrated AI feature in a full-stack application.',
deliverableAr: 'Integrated AI feature in full-stack application.',
    resources: []
  },
  {
    dayNumber: 249,
    phaseSlug: 'ai-integration',
    kind: 'project' as const,
    titleEn: 'AI Feature in Full-Stack Application',
    titleAr: 'AI Feature in Full-Stack Application',
    topic: 'AI project',
    estimatedMinutes: 120,
    objectiveEn: 'Integrate an AI feature (e.g., AI-assisted search or content generation) into a full-stack application with proper error handling and rate limiting.',
    objectiveAr: 'Integrate an AI feature (e.g., AI-assisted search or content generation) into a full-stack application with proper error handling and rate limiting.',
    lessonEn:
      'This is the capstone project for Phase 9. Integrate an AI feature into the full-stack application built in earlier phases. Include error handling, rate limiting, and a fallback for when the AI service is unavailable.',
    lessonAr:
      'This is the capstone project for Phase 9. Integrate an AI feature into the full-stack application built in earlier phases. Include error handling, rate limiting, and a fallback for when the AI service is unavailable.',
    tasks: [
      {
        en: 'Add an AI-assisted search endpoint to the backend',
        ar: 'Add an AI-assisted search endpoint to the backend'
      },
      {
        en: 'Build a client-side component that sends search queries to the AI',
        ar: 'Build a client-side component that sends search queries to the AI'
      },
      {
        en: 'Implement rate limiting and error handling for the AI calls',
        ar: 'Implement rate limiting and error handling for the AI calls'
      },
      {
        en: 'Test the integration and verify fallbacks work',
        ar: 'Test the integration and verify fallbacks work'
      }
    ],
    exerciseEn: 'Integrate an AI feature into the full-stack application.',
    exerciseAr: 'Integrate an AI feature into the full-stack application.',
    deliverableEn: 'A full-stack application with an integrated AI feature.',
deliverableAr: 'Full-stack application with integrated AI feature.',
    resources: []
  },
  {
    dayNumber: 250,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'AI Security and Prompt Injection',
    titleAr: 'AI Security and Prompt Injection',
    topic: 'AI Security',
    estimatedMinutes: 90,
    objectiveEn: 'Understand prompt injection attacks and how to prevent them when building AI-enabled applications.',
    objectiveAr: 'Understand prompt injection attacks and how to prevent them when building AI-enabled applications.',
    lessonEn:
      'Prompt injection is a security vulnerability where user input can modify the behavior of an LLM. Prevent it by: sanitizing user input, using system prompts to constrain the model\'s behavior, and never concatenating user input into prompts without validation.',
    lessonAr:
      'Prompt injection is a security vulnerability where user input can modify the behavior of an LLM. Prevent it by: sanitizing user input, using system prompts to constrain the model\'s behavior, and never concatenating user input into prompts without validation.',
    tasks: [
      {
        en: 'Identify a potential prompt injection vulnerability in a code snippet',
        ar: 'Identify a potential prompt injection vulnerability in a code snippet'
      },
      {
        en: 'Describe how system prompts can constrain model behavior',
        ar: 'Describe how system prompts can constrain model behavior'
      },
      {
        en: 'Implement input validation before sending to the LLM',
        ar: 'Implement input validation before sending to the LLM'
      },
      {
        en: 'Test that sanitized input prevents prompt injection',
        ar: 'Test that sanitized input prevents prompt injection'
      }
    ],
    exerciseEn: 'Implement prompt injection prevention in an AI-enabled application.',
    exerciseAr: 'Implement prompt injection prevention in an AI-enabled application.',
    deliverableEn: 'A code sample that prevents prompt injection.',
deliverableAr: 'Code sample that prevents prompt injection.',
    resources: [
      { title: 'OWASP LLM Security', url: 'https://owasp.org/www-project-lean/', kind: 'reference' }
    ],
    challengeEn: 'Write a sanitization function that removes dangerous prompt keywords',
    challengeAr: 'Write a sanitization function that removes dangerous prompt keywords',
    prerequisites: [248],
    criteriaEn: ['Can identify prompt injection', 'Can describe system prompts', 'Can implement input validation', 'Can test sanitization'],
    criteriaAr: ['Can identify prompt injection', 'Can describe system prompts', 'Can implement input validation', 'Can test sanitization']
  },
  {
    dayNumber: 251,
    phaseSlug: 'ai-integration',
    kind: 'project' as const,
    titleEn: 'AI Security Hardening',
    titleAr: 'AI Security Hardening',
    topic: 'AI Security project',
    estimatedMinutes: 120,
    objectiveEn: 'Harden an AI-enabled application against prompt injection and other security risks, and document the mitigations.',
    objectiveAr: 'Harden an AI-enabled application against prompt injection and other security risks, and document the mitigations.',
    lessonEn:
      'Security hardening for AI applications includes: input sanitization, system prompts, rate limiting, monitoring for abuse, and transparency about model limitations. Document all mitigations and test them regularly.',
    lessonAr:
      'Hardening for AI applications includes: input sanitization, system prompts, rate limiting, monitoring for abuse, and transparency about model limitations. Document all mitigations and test them regularly.',
    tasks: [
      {
        en: 'Implement input sanitization for all user prompts',
        ar: 'Implement input sanitization for all user prompts'
      },
      {
        en: 'Add a system prompt that constrains the model\'s behavior',
        ar: 'Add a system prompt that constrains the model\'s behavior'
      },
      {
        en: 'Configure rate limiting on AI API routes',
        ar: 'Configure rate limiting on AI API routes'
      },
      {
        en: 'Document the security mitigations and test them',
        ar: 'Document the security mitigations and test them'
      }
    ],
    exerciseEn: 'Harden an AI-enabled application and document the security mitigations.',
    exerciseAr: 'Harden an AI-enabled application and document the security mitigations.',
    deliverableEn: 'A hardening document with mitigations and test results.',
deliverableAr: 'Hardening document with mitigations and test results.',
    resources: []
  },
  {
    dayNumber: 252,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Model Fine-Tuning Basics',
    titleAr: 'Model Fine-Tuning Basics',
    topic: 'AI Fine-Tuning',
    estimatedMinutes: 90,
    objectiveEn: 'Understand the basics of fine-tuning a pre-trained model for a specific task.',
    objectiveAr: 'Understand the basics of fine-tuning a pre-trained model for a specific task.',
    lessonEn:
      'Fine-tuning adjusts a pre-trained model on a smaller, task-specific dataset. It is useful when you want the model to learn a specific style or task that is not well-supported by the base model. Key considerations: data quality, learning rate, and number of epochs.',
    lessonAr:
      'Fine-tuning adjusts a pre-trained model on a smaller, task-specific dataset. It is useful when you want the model to learn a specific style or task that is not well-supported by the base model. Key considerations: data quality, learning rate, and number of epochs.',
    tasks: [
      {
        en: 'Describe the difference between prompt engineering and fine-tuning',
        ar: 'Describe the difference between prompt engineering and fine-tuning'
      },
      {
        en: 'Prepare a small dataset for fine-tuning a model',
        ar: 'Prepare a small dataset for fine-tuning a model'
      },
      {
        en: 'Describe the training process: learning rate, epochs, and validation',
        ar: 'Describe the training process: learning rate, epochs, and validation'
      },
      {
        en: 'Identify a use case where fine-tuning is better than prompt engineering',
        ar: 'Identify a use case where fine-tuning is better than prompt engineering'
      }
    ],
    exerciseEn: 'Describe a fine-tuning use case and the key training parameters.',
    exerciseAr: 'Describe a fine-tuning use case and the key training parameters.',
    deliverableEn: 'A description of a fine-tuning use case and training parameters.',
deliverableAr: 'Description of a fine-tuning use case and training parameters.',
    resources: [
      { title: 'OpenAI Fine-Tuning Docs', url: 'https://platform.openai.com/docs/guides/fine-tuning', kind: 'reference' }
    ],
    challengeEn: 'Identify a use case where fine-tuning is better than prompt engineering',
    challengeAr: 'Identify a use case where fine-tuning is better than prompt engineering',
    prerequisites: [250],
    criteriaEn: ['Can describe difference', 'Can prepare a dataset', 'Can describe training process', 'Can identify use case'],
    criteriaAr: ['Can describe difference', 'Can prepare a dataset', 'Can describe training process', 'Can identify use case']
  },
  {
    dayNumber: 253,
    phaseSlug: 'ai-integration',
    kind: 'project' as const,
    titleEn: 'Fine-Tune a Model for a Specific Task',
    titleAr: 'Fine-Tune a Model for a Specific Task',
    topic: 'AI Fine-Tuning project',
    estimatedMinutes: 120,
    objectiveEn: 'Fine-tune a pre-trained model on a small dataset for a specific task (e.g., sentiment analysis).',
    objectiveAr: 'Fine-tune a pre-trained model on a small dataset for a specific task (e.g., sentiment analysis).',
    lessonEn:
      'Fine-tuning a model requires preparing a dataset, configuring the training job, and monitoring the results. This project walks through fine-tuning a model for sentiment analysis on a labeled review dataset.',
    lessonAr:
      'Fine-tuning a model requires preparing a dataset, configuring the training job, and monitoring the results. This project walks through fine-tuning a model for sentiment analysis on a labeled review dataset.',
    tasks: [
      {
        en: 'Prepare a labeled dataset for sentiment analysis (positive/negative)',
        ar: 'Prepare a labeled dataset for sentiment analysis (positive/negative)'
      },
      {
        en: 'Configure a fine-tuning job on the model with appropriate learning rate and epochs',
        ar: 'Configure a fine-tuning job on the model with appropriate learning rate and epochs'
      },
      {
        en: 'Run the fine-tuning job and monitor the loss curve',
        ar: 'Run the fine-tuning job and monitor the loss curve'
      },
      {
        en: 'Evaluate the fine-tuned model on a test set',
        ar: 'Evaluate the fine-tuned model on a test set'
      }
    ],
    exerciseEn: 'Fine-tune a model for sentiment analysis and report the results.',
    exerciseAr: 'Fine-tune a model for sentiment analysis and report the results.',
    deliverableEn: 'A fine-tuned model and evaluation results.',
deliverableAr: 'Fine-tuned model and evaluation results.',
    resources: [
      { title: 'OpenAI Fine-Tuning Docs', url: 'https://platform.openai.com/docs/guides/fine-tuning', kind: 'reference' }
    ],
    challengeEn: 'Compare the fine-tuned model to the base model on a sample of test inputs',
    challengeAr: 'Compare the fine-tuned model to the base model on a sample of test inputs',
    prerequisites: [252],
    criteriaEn: ['Dataset prepared', 'Fine-tuning configured', 'Loss curve monitored', 'Evaluation performed'],
    criteriaAr: ['Dataset prepared', 'Fine-tuning configured', 'Loss curve monitored', 'Evaluation performed']
  },
  {
    dayNumber: 254,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Multi-Modal AI Models',
    titleAr: 'Multi-Modal AI Models',
    topic: 'AI Multi-Modal',
    estimatedMinutes: 90,
    objectiveEn: 'Understand multi-modal models that can process text, images, and other media.',
    objectiveAr: 'Understand multi-modal models that can process text, images, and other media.',
    lessonEn:
      'Multi-modal models can accept multiple types of inputs, such as text and images. They can perform tasks like image captioning, visual question answering, and cross-modal retrieval. This opens new possibilities for AI-powered applications.',
    lessonAr:
      'Multi-modal models can accept multiple types of inputs, such as text and images. They can perform tasks like image captioning, visual question answering, and cross-modal retrieval. This opens new possibilities for AI-powered applications.',
    tasks: [
      {
        en: 'Describe a use case for a multi-modal model',
        ar: 'Describe a use case for a multi-modal model'
      },
      {
        en: 'Identify the input types a multi-modal model accepts',
        ar: 'Identify the input types a multi-modal model accepts'
      },
      {
        en: 'Write a prompt that includes both text and an image description',
        ar: 'Write a prompt that includes both text and an image description'
      },
      {
        en: 'Experiment with a multi-modal model and compare text-only vs multi-modal outputs',
        ar: 'Experiment with a multi-modal model and compare text-only vs multi-modal outputs'
      }
    ],
    exerciseEn: 'Experiment with a multi-modal model and describe the differences.',
    exerciseAr: 'Experiment with a multi-modal model and describe the differences.',
    deliverableEn: 'A description of a multi-modal use case and output comparison.',
deliverableAr: 'Description of a multi-modal use case and output comparison.',
    resources: [
      { title: 'OpenAI Multi-Modal Docs', url: 'https://platform.openai.com/docs/models/gpt-4-vision', kind: 'reference' }
    ],
    challengeEn: 'Write a multi-modal prompt that describes an image and asks a question about it',
    challengeAr: 'Write a multi-modal prompt that describes an image and asks a question about it',
    prerequisites: [253],
    criteriaEn: ['Can describe a use case', 'Can identify input types', 'Can write a multi-modal prompt', 'Can compare outputs'],
    criteriaAr: ['Can describe a use case', 'Can identify input types', 'Can write a multi-modal prompt', 'Can compare outputs']
  },
  {
    dayNumber: 255,
    phaseSlug: 'ai-integration',
    kind: 'project' as const,
    titleEn: 'Multi-Modal AI Demo',
    titleAr: 'Multi-Modal AI Demo',
    topic: 'AI project',
    estimatedMinutes: 120,
    objectiveEn: 'Build a demo that accepts an image and a text prompt and returns a combined response from a multi-modal model.',
    objectiveAr: 'Build a demo that accepts an image and a text prompt and returns a combined response from a multi-modal model.',
    lessonEn:
      'This demo showcases a multi-modal model that can see and understand images. Upload an image and add a text prompt, and the model will return a combined response. This is useful for applications like visual search and image description.',
    lessonAr:
      'Demo showcases multi-modal model that can see and understand images. Upload an image and add a text prompt, and the model will return a combined response. Useful for visual search and image description.',
    tasks: [
      {
        en: 'Set up an API route that accepts an image and a text prompt',
        ar: 'Set up an API route that accepts an image and a text prompt'
      },
      {
        en: 'Build a client-side UI that allows image upload and prompt input',
        ar: 'Build a client-side UI that allows image upload and prompt input'
      },
      {
        en: 'Call the multi-modal model and display the response',
        ar: 'Call the multi-modal model and display the response'
      },
      {
        en: 'Test the demo with sample images and prompts',
        ar: 'Test the demo with sample images and prompts'
      }
    ],
    exerciseEn: 'Build a multi-modal AI demo with image upload and text prompt.',
    exerciseAr: 'Build a multi-modal AI demo with image upload and text prompt.',
    deliverableEn: 'A working multi-modal AI demo.',
deliverableAr: 'Multi-modal AI demo.',
    resources: [
      { title: 'OpenAI Vision Docs', url: 'https://platform.openai.com/docs/models/gpt-4-vision', kind: 'reference' }
    ],
    challengeEn: 'Add a feature that describes the uploaded image in detail',
    challengeAr: 'Add a feature that describes the uploaded image in detail',
    prerequisites: [254],
    criteriaEn: ['API route accepts image and prompt', 'UI allows upload and input', 'Model response displayed', 'Tested with samples'],
    criteriaAr: ['API route accepts image and prompt', 'UI allows upload and input', 'Model response displayed', 'Tested with samples']
  },
  {
    dayNumber: 256,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'AI Agents and Tool Use',
    titleAr: 'AI Agents and Tool Use',
    topic: 'AI Agents',
    estimatedMinutes: 90,
    objectiveEn: 'Understand AI agents that can use tools (functions) to extend their capabilities.',
    objectiveAr: 'Understand AI agents that can use tools (functions) to extend their capabilities.',
    lessonEn:
      'AI agents can call external functions to retrieve data, perform calculations, or interact with other systems. This enables the model to go beyond text generation and perform actions in the real world. Key concepts: tool definitions, function calling, and result handling.',
    lessonAr:
      'AI agents can call external functions to retrieve data, perform calculations, or interact with other systems. This enables the model to go beyond text generation and perform actions in the real world. Key concepts: tool definitions, function calling, and result handling.',
    tasks: [
      {
        en: 'Describe how an AI agent can use a tool to retrieve real-time data',
        ar: 'Describe how an AI agent can use a tool to retrieve real-time data'
      },
      {
        en: 'Define a tool (function) for the agent to call',
        ar: 'Define a tool (function) for the agent to call'
      },
      {
        en: 'Set up function calling in the LLM API request',
        ar: 'Set up function calling in the LLM API request'
      },
      {
        en: 'Handle the tool result and present it to the user',
        ar: 'Handle the tool result and present it to the user'
      }
    ],
    exerciseEn: 'Set up an AI agent that can call a tool to retrieve real-time data.',
    exerciseAr: 'Set up an AI agent that can call a tool to retrieve real-time data.',
    deliverableEn: 'An agent that can call a tool and present the result.',
deliverableAr: 'Agent that can call a tool and present the result.',
    resources: [
      { title: 'OpenAI Function Calling Docs', url: 'https://platform.openai.com/docs/functions', kind: 'reference' }
    ],
    challengeEn: 'Set up an agent that calls a weather API tool and displays the result',
    challengeAr: 'Set up an agent that calls a weather API tool and displays the result',
    prerequisites: [255],
    criteriaEn: ['Can describe agent tool use', 'Can define a tool', 'Can set up function calling', 'Can handle tool result'],
    criteriaAr: ['Can describe agent tool use', 'Can define a tool', 'Can set up function calling', 'Can handle tool result']
  },
  {
    dayNumber: 257,
    phaseSlug: 'ai-integration',
    kind: 'project' as const,
    titleEn: 'AI Agent with Tool Use',
    titleAr: 'AI Agent with Tool Use',
    topic: 'AI Agents project',
    estimatedMinutes: 120,
    objectiveEn: 'Build an AI agent that can call a tool (e.g., a calculator or search API) and use the result to answer a user query.',
    objectiveAr: 'Build an AI agent that can call a tool (e.g., a calculator or search API) and use the result to answer a user query.',
    lessonEn:
      'This project builds on the function calling concepts to create a fully working AI agent. The agent receives a user query, decides if a tool is needed, calls the tool, and uses the result to formulate the final answer.',
    lessonAr:
      'بناء على مفاهيم calling الوظائف، ينشئ هذا المشروع وكيل ذكاء اصطناعي يعمل بالكامل. يتلقى الوكيل查询 من المستخدم، determines if a tool is needed, calls the tool, and uses the result to formulate the final answer.',
    tasks: [
      {
        en: 'Define a calculator tool that takes two numbers and returns the result',
        ar: 'Define a calculator tool that takes two numbers and returns the result'
      },
      {
        en: 'Set up function calling for the calculator tool in the LLM API',
        ar: 'Set up function calling for the calculator tool in the LLM API request'
      },
      {
        en: 'Build a chat interface that sends queries to the agent',
        ar: 'Build a chat interface that sends queries to the agent'
      },
      {
        en: 'Test the agent with queries that require calculation',
        ar: 'Test the agent with queries that require calculation'
      }
    ],
    exerciseEn: 'Build an AI agent that can calculate and answer user queries.',
    exerciseAr: 'Build an AI agent that can calculate and answer user queries.',
    deliverableEn: 'An AI agent that can calculate and answer queries.',
deliverableAr: 'AI agent that can calculate and answer queries.',
    resources: [
      { title: 'OpenAI Function Calling Docs', url: 'https://platform.openai.com/docs/functions', kind: 'reference' }
    ],
    challengeEn: 'Add a search tool that the agent can call to find information',
    challengeAr: 'Add a search tool that the agent can call to find information',
    prerequisites: [256],
    criteriaEn: ['Calculator tool defined', 'Function calling set up', 'Chat interface works', 'Agent can calculate'],
    criteriaAr: ['Calculator tool defined', 'Function calling set up', 'Chat interface works', 'Agent can calculate']
  },
  {
    dayNumber: 258,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'AI Governance and Compliance',
    titleAr: 'AI Governance and Compliance',
    topic: 'AI Governance',
    estimatedMinutes: 90,
    objectiveEn: 'Understand the regulatory landscape for AI and practices for compliance.',
    objectiveAr: 'Understand the regulatory landscape for AI and practices for compliance.',
    lessonEn:
      'AI governance includes compliance with regulations like the EU AI Act, transparency requirements, and documentation standards. Practices include: risk assessments, impact statements, and maintaining model cards.',
    lessonAr:
      'AI governance includes compliance with regulations like the EU AI Act, transparency requirements, and documentation standards. Practices include: risk assessments, impact statements, and maintaining model cards.',
    tasks: [
      {
        en: 'Identify the key requirements of the EU AI Act',
        ar: 'Identify the key requirements of the EU AI Act'
      },
      {
        en: 'Describe the risk assessment process for an AI system',
        ar: 'Describe the risk assessment process for an AI system'
      },
      {
        en: 'Write a model card that documents the model\'s purpose, data, and limitations',
        ar: 'Write a model card that documents the model\'s purpose, data, and limitations'
      },
      {
        en: 'Implement a compliance checklist for AI projects',
        ar: 'Implement a compliance checklist for AI projects'
      }
    ],
    exerciseEn: 'Create a compliance checklist for a given AI project.',
    exerciseAr: 'Create a compliance checklist for a given AI project.',
    deliverableEn: 'A compliance checklist document.',
deliverableAr: 'Compliance checklist document.',
    resources: [
      { title: 'EU AI Act Summary', url: 'https://ec.europa.eu/info/publications/2021/04/20-ai-act-en', kind: 'reference' }
    ],
    challengeEn: 'Write a model card for a chatbot that limits its domain to customer support',
    challengeAr: 'Write a model card for a chatbot that limits its domain to customer support',
    prerequisites: [257],
    criteriaEn: ['Can identify EU AI Act requirements', 'Can describe risk assessment', 'Can write a model card', 'Can create a compliance checklist'],
    criteriaAr: ['Can identify EU AI Act requirements', 'Can describe risk assessment', 'Can write a model card', 'Can create a compliance checklist']
  },
  {
    dayNumber: 259,
    phaseSlug: 'ai-integration',
    kind: 'project' as const,
    titleEn: 'AI Governance Documentation',
    titleAr: 'AI Governance Documentation',
    topic: 'AI Governance project',
    estimatedMinutes: 120,
    objectiveEn: 'Create governance documentation for an AI project: model card, risk assessment, and compliance checklist.',
    objectiveAr: 'Create governance documentation for an AI project: model card, risk assessment, and compliance checklist.',
    lessonEn:
      'Governance documentation ensures that AI projects are transparent, accountable, and compliant. Create a model card, a risk assessment, and a compliance checklist for a given AI system.',
    lessonAr:
      'Governance documentation ensures that AI projects are transparent, accountable, and compliant. Create a model card, a risk assessment, and a compliance checklist for a given AI system.',
    tasks: [
      {
        en: 'Create a model card documenting the model\'s purpose, data, and limitations',
        ar: 'Create a model card documenting the model\'s purpose, data, and limitations'
      },
      {
        en: 'Perform a risk assessment for the AI system',
        ar: 'Perform a risk assessment for the AI system'
      },
      {
        en: 'Create a compliance checklist based on the EU AI Act',
        ar: 'Create a compliance checklist based on the EU AI Act'
      },
      {
        en: 'Document all findings and share with the team',
        ar: 'Document all findings and share with the team'
      }
    ],
    exerciseEn: 'Create governance documentation for a sample AI project.',
    exerciseAr: 'Create governance documentation for a sample AI project.',
    deliverableEn: 'Governance documentation: model card, risk assessment, and compliance checklist.',
deliverableAr: 'Governance documentation.',
    resources: []
  },
  {
    dayNumber: 260,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Emerging AI Trends',
    titleAr: 'Emerging AI Trends',
    topic: 'AI Trends',
    estimatedMinutes: 90,
    objectiveEn: 'Stay up-to-date with emerging AI trends: new model architectures, emerging use cases, and the future of AI.',
    objectiveAr: 'Stay up-to-date with emerging AI trends: new model architectures, emerging use cases, and the future of AI.',
    lessonEn:
      'The field of AI is rapidly evolving. Emerging trends include: new model architectures (Mixture-of-Experts, state-space models), multimodal capabilities that continue to improve, and the growing role of AI in software development, healthcare, and other industries.',
    lessonAr:
      'The field of AI is rapidly evolving. Emerging trends include: new model architectures (Mixture-of-Experts, state-space models), multimodal capabilities that continue to improve, and the growing role of AI in software development, healthcare, and other industries.',
    tasks: [
      {
        en: 'Research and summarize a recent AI development (last 6 months)',
        ar: 'Research and summarize a recent AI development (last 6 months)'
      },
      {
        en: 'Identify a trend that could impact the curriculum or your projects',
        ar: 'Identify a trend that could impact the curriculum or your projects'
      },
      {
        en: 'Discuss the potential future role of AI in full-stack development',
        ar: 'Discuss the potential future role of AI in full-stack development'
      },
      {
        en: 'Share your findings with the team or community',
        ar: 'Share your findings with the team or community'
      }
    ],
    exerciseEn: 'Research and share an emerging AI trend.',
    exerciseAr: 'Research and share an emerging AI trend.',
    deliverableEn: 'A summary of an emerging AI trend.',
deliverableAr: 'Summary of an emerging AI trend.',
    resources: []
  },
  {
    dayNumber: 261,
    phaseSlug: 'ai-integration',
    kind: 'project' as const,
    titleEn: 'Emerging AI Trends Presentation',
    titleAr: 'Emerging AI Trends Presentation',
    topic: 'AI Trends project',
    estimatedMinutes: 120,
    objectiveEn: 'Research and present an emerging AI trend, covering the development, potential impact, and implications for the curriculum.',
    objectiveAr: 'Research and present an emerging AI trend, covering the development, potential impact, and implications for the curriculum.',
    lessonEn:
      'This is the capstone project for Phase 9. Research an emerging AI trend, create a presentation covering the development, potential impact, and implications for the curriculum, and share it with the team.',
    lessonAr:
      'This is the capstone project for Phase 9. Research an emerging AI trend, create a presentation covering the development, potential impact, and implications for the curriculum, and share it with the team.',
    tasks: [
      {
        en: 'Research an emerging AI trend (last 6 months)',
        ar: 'Research an emerging AI trend (last 6 months)'
      },
      {
        en: 'Create a presentation covering the development, impact, and curriculum implications',
        ar: 'Create a presentation covering the development, impact, and curriculum implications'
      },
      {
        en: 'Share the presentation with the team',
        ar: 'Share the presentation with the team'
      },
      {
        en: 'Gather feedback and iterate on the presentation',
        ar: 'Gather feedback and iterate on the presentation'
      }
    ],
    exerciseEn: 'Research and present an emerging AI trend.',
    exerciseAr: 'Research and present an emerging AI trend.',
    deliverableEn: 'A presentation on an emerging AI trend.',
deliverableAr: 'Presentation on an emerging AI trend.',
    resources: []
  },
  {
    dayNumber: 262,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'AI Performance Optimization',
    titleAr: 'AI Performance Optimization',
    topic: 'AI Performance',
    estimatedMinutes: 90,
    objectiveEn: 'Strategies for optimizing AI model performance: inference speed, cost reduction, and resource efficiency.',
    objectiveAr: 'Strategies for optimizing AI model performance: inference speed, cost reduction, and resource efficiency.',
    lessonEn:
      'Optimizing AI performance includes: using smaller models (distillation), caching responses, batching requests, and using hardware acceleration (GPU/TPU). Monitor latency and cost to balance performance and budget.',
    lessonAr:
      'Strategies for optimizing AI performance include: using smaller models (distillation), caching responses, batching requests, and using hardware acceleration (GPU/TPU). Monitor latency and cost to balance performance and budget.',
    tasks: [
      {
        en: 'Identify strategies to reduce inference latency',
        ar: 'Identify strategies to reduce inference latency'
      },
      {
        en: 'Set up caching for repeated prompts',
        ar: 'Set up caching for repeated prompts'
      },
      {
        en: 'Compare the cost and latency of different models for the same task',
        ar: 'Compare the cost and latency of different models for the same task'
      },
      {
        en: 'Configure hardware acceleration if available',
        ar: 'Configure hardware acceleration if available'
      }
    ],
    exerciseEn: 'Optimize AI performance for a given use case.',
    exerciseAr: 'Optimize AI performance for a given use case.',
    deliverableEn: 'An optimization strategy with latency and cost improvements.',
deliverableAr: 'Optimization strategy with improvements.',
    resources: []
  },
  {
    dayNumber: 263,
    phaseSlug: 'ai-integration',
    kind: 'project' as const,
    titleEn: 'AI Performance Optimization',
    titleAr: 'AI Performance Optimization',
    topic: 'AI Performance project',
    estimatedMinutes: 120,
    objectiveEn: 'Apply optimization strategies to reduce inference latency and cost for a given AI use case, and measure the improvement.',
    objectiveAr: 'Apply optimization strategies to reduce inference latency and cost for a given AI use case, and measure the improvement.',
    lessonEn:
      'This project applies the optimization strategies learned to a real use case. Measure the before-and-after latency and cost, and document the changes made.',
    lessonAr:
      'Apply optimization strategies to reduce inference latency and cost for a given AI use case, and measure the improvement.',
    tasks: [
      {
        en: 'Measure the current latency and cost for a sample prompt',
        ar: 'Measure the current latency and cost for a sample prompt'
      },
      {
        en: 'Apply an optimization (e.g., caching, model distillation)',
        ar: 'Apply an optimization (e.g., caching, model distillation)'
      },
      {
        en: 'Measure the new latency and cost and compare',
        ar: 'Measure the new latency and cost and compare'
      },
      {
        en: 'Document the optimization changes and results',
        ar: 'Document the optimization changes and results'
      }
    ],
    exerciseEn: 'Apply optimization strategies and document the improvements.',
    exerciseAr: 'Apply optimization strategies and document the improvements.',
    deliverableEn: 'Optimization results with before-and-after measurements.',
deliverableAr: 'Optimization results with before-and-after measurements.',
    resources: []
  },
  {
    dayNumber: 264,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'AI Regulation and Future Policy',
    titleAr: 'AI Regulation and Future Policy',
    topic: 'AI Policy',
    estimatedMinutes: 90,
    objectiveEn: 'Understand the current and proposed regulatory landscape for AI, and best practices for staying compliant.',
    objectiveAr: 'Understand the current and proposed regulatory landscape for AI, and best practices for staying compliant.',
    lessonEn:
      'AI regulation is evolving rapidly. Current frameworks include the EU AI Act, US Executive Orders, and industry standards. Best practices: stay informed, implement compliance checks, and document decisions.',
    lessonAr:
      'AI regulation is evolving rapidly. Current frameworks include the EU AI Act, US Executive Orders, and industry standards. Best practices: stay informed, implement compliance checks, and document decisions.',
    tasks: [
      {
        en: 'Research a proposed AI regulation (e.g., upcoming state-level laws)',
        ar: 'Research a proposed AI regulation (e.g., upcoming state-level laws)'
      },
      {
        en: 'Identify how the regulation would impact your AI projects',
        ar: 'Identify how the regulation would impact your AI projects'
      },
      {
        en: 'Implement best practices for staying ahead of regulatory changes',
        ar: 'Implement best practices for staying ahead of regulatory changes'
      },
      {
        en: 'Document your compliance strategy',
        ar: 'Document your compliance strategy'
      }
    ],
    exerciseEn: 'Document a compliance strategy for a given AI project.',
    exerciseAr: 'Document a compliance strategy for a given AI project.',
    deliverableEn: 'A compliance strategy document.',
deliverableAr: 'Compliance strategy document.',
    resources: []
  },
  {
    dayNumber: 265,
    phaseSlug: 'ai-integration',
    kind: 'project' as const,
    titleEn: 'AI Regulation Compliance Strategy',
    titleAr: 'AI Regulation Compliance Strategy',
    topic: 'AI Policy project',
    estimatedMinutes: 120,
    objectiveEn: 'Develop a compliance strategy for an AI project, including documentation of current regulations and a plan to stay compliant as regulations evolve.',
    objectiveAr: 'Develop a compliance strategy for an AI project, including documentation of current regulations and a plan to stay compliant as regulations evolve.',
    lessonEn:
      'This is the final project for Phase 9. Develop a compliance strategy that documents current AI regulations, identifies how they impact your projects, and outlines a plan to stay compliant as regulations evolve.',
    lessonAr:
      'This is the final project for Phase 9. Develop a compliance strategy that documents current AI regulations, identifies how they impact your projects, and outlines a plan to stay compliant as regulations evolve.',
    tasks: [
      {
        en: 'Document the current AI regulations that apply to your project',
        ar: 'Document the current AI regulations that apply to your project'
      },
      {
        en: 'Identify the impact of the regulations on your AI system',
        ar: 'Identify the impact of the regulations on your AI system'
      },
      {
        en: 'Create a plan to stay compliant as regulations evolve',
        ar: 'Create a plan to stay compliant as regulations evolve'
      },
      {
        en: 'Share the compliance strategy with the team',
        ar: 'Share the compliance strategy with the team'
      }
    ],
    exerciseEn: 'Develop a compliance strategy for a sample AI project.',
    exerciseAr: 'Develop a compliance strategy for a sample AI project.',
    deliverableEn: 'A compliance strategy document shared with the team.',
deliverableAr: 'Compliance strategy document shared with the team.',
    resources: []
  },
  {
    dayNumber: 266,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'AI and Software Development Workflow',
    titleAr: 'AI and Software Development Workflow',
    topic: 'AI Development',
    estimatedMinutes: 90,
    objectiveEn: 'Integrate AI into the software development workflow: code generation, testing, and automation.',
    objectiveAr: 'Integrate AI into the software development workflow: code generation, testing, and automation.',
    lessonEn:
      'AI can be integrated into the development workflow to assist with code generation, test generation, and automation of repetitive tasks. Key tools: AI-assisted code completion, test generation from requirements, and automation scripts.',
    lessonAr:
      'AI can be integrated into the development workflow to assist with code generation, test generation, and automation of repetitive tasks. Key tools: AI-assisted code completion, test generation from requirements, and automation scripts.',
    tasks: [
      {
        en: 'Set up AI-assisted code completion in an IDE',
        ar: 'Set up AI-assisted code completion in an IDE'
      },
      {
        en: 'Generate test cases from a set of requirements using an LLM',
        ar: 'Generate test cases from a set of requirements using an LLM'
      },
      {
        en: 'Automate a repetitive development task with an AI script',
        ar: 'Automate a repetitive development task with an AI script'
      },
      {
        en: 'Evaluate the productivity gain from AI integration',
        ar: 'Evaluate the productivity gain from AI integration'
      }
    ],
    exerciseEn: 'Integrate AI into the development workflow and evaluate the gain.',
    exerciseAr: 'Integrate AI into the development workflow and evaluate the gain.',
    deliverableEn: 'An AI-integrated workflow and productivity evaluation.',
deliverableAr: 'AI-integrated workflow and productivity evaluation.',
    resources: []
  },
  {
    dayNumber: 267,
    phaseSlug: 'ai-integration',
    kind: 'project' as const,
    titleEn: 'AI in Development Workflow',
    titleAr: 'AI in Development Workflow',
    topic: 'AI Development project',
    estimatedMinutes: 120,
    objectiveEn: 'Integrate AI into the development workflow: code generation, test generation, and automation, and evaluate the productivity gain.',
    objectiveAr: 'Integrate AI into the development workflow: code generation, test generation, and automation, and evaluate the productivity gain.',
    lessonEn:
      'This is a capstone-like project for Phase 9. Integrate AI tools into the development workflow and measure the productivity gain compared to baseline.',
    lessonAr:
      'capstone-like project for Phase 9. Integrate AI tools into the development workflow and measure the productivity gain compared to baseline.',
    tasks: [
      {
        en: 'Set up AI-assisted code completion and generate code for a feature',
        ar: 'Set up AI-assisted code completion and generate code for a feature'
      },
      {
        en: 'Generate test cases from requirements using an LLM',
        ar: 'Generate test cases from requirements using an LLM'
      },
      {
        en: 'Automate a repetitive task with an AI script',
        ar: 'Automate a repetitive task with an AI script'
      },
      {
        en: 'Compare the time spent with and without AI integration',
        ar: 'Compare the time spent with and without AI integration'
      }
    ],
    exerciseEn: 'Integrate AI into the workflow and evaluate the productivity gain.',
    exerciseAr: 'Integrate AI into the development workflow and evaluate the gain.',
    deliverableEn: 'Productivity evaluation with AI integration.',
deliverableAr: 'Productivity evaluation with AI integration.',
    resources: []
  },
  {
    dayNumber: 268,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'AI Privacy and Data Protection',
    titleAr: 'AI Privacy and Data Protection',
    topic: 'AI Privacy',
    estimatedMinutes: 90,
    objectiveEn: 'Understand the privacy implications of using LLMs and strategies for data protection.',
    objectiveAr: 'Understand the privacy implications of using LLMs and strategies for data protection.',
    lessonEn:
      'LLMs process user input that may contain sensitive data. Privacy strategies: avoid sending PII to LLMs, use anonymization, and be aware of the provider\'s data retention policies.',
    lessonAr:
      'LLMs process user input that may contain sensitive data. Privacy strategies: avoid sending PII to LLMs, use anonymization, and be aware of the provider\'s data retention policies.',
    tasks: [
      {
        en: 'Identify what PII should not be sent to an LLM',
        ar: 'Identify what PII should not be sent to an LLM'
      },
      {
        en: 'Implement anonymization of user data before sending to the LLM',
        ar: 'Implement anonymization of user data before sending to the LLM'
      },
      {
        en: 'Research the data retention policy of the LLM provider',
        ar: 'Research the data retention policy of the LLM provider'
      },
      {
        en: 'Implement a privacy statement for users',
        ar: 'Implement a privacy statement for users'
      }
    ],
    exerciseEn: 'Implement privacy protection for an AI-enabled application.',
    exerciseAr: 'Implement privacy protection for an AI-enabled application.',
    deliverableEn: 'A privacy protection strategy and statement.',
deliverableAr: 'Privacy protection strategy and statement.',
    resources: [
      { title: 'OpenAI Data Usage Policy', url: 'https://openai.com/policies/data-usage', kind: 'reference' }
    ],
    challengeEn: 'Write a function that redacts PII from a prompt before sending it to the LLM',
    challengeAr: 'Write a function that redacts PII from a prompt before sending it to the LLM',
    prerequisites: [266],
    criteriaEn: ['Can identify PII', 'Can implement anonymization', 'Can research retention policy', 'Can write privacy statement'],
    criteriaAr: ['Can identify PII', 'Can implement anonymization', 'Can research retention policy', 'Can write privacy statement']
  },
  {
    dayNumber: 269,
    phaseSlug: 'ai-integration',
    kind: 'project' as const,
    titleEn: 'AI Privacy Implementation',
    titleAr: 'AI Privacy Implementation',
    topic: 'AI Privacy project',
    estimatedMinutes: 120,
    objectiveEn: 'Implement privacy protection for an AI-enabled application: PII redaction, anonymization, and a privacy statement for users.',
    objectiveAr: 'Implement privacy protection for an AI-enabled application: PII redaction, anonymization, and a privacy statement for users.',
    lessonEn:
      'This is the penultimate project for Phase 9. Implement PII redaction, anonymization strategies, and a user-facing privacy statement for an AI application.',
    lessonAr:
      'This is the penultimate project for Phase 9. Implement PII redaction, anonymization strategies, and a user-facing privacy statement for an AI application.',
    tasks: [
      {
        en: 'Write a function that redacts PII from a prompt',
        ar: 'Write a function that redacts PII from a prompt'
      },
      {
        en: 'Implement anonymization of user data before sending to the LLM',
        ar: 'Implement anonymization of user data before sending to the LLM'
      },
      {
        en: 'Research and document the LLM provider\'s data retention policy',
        ar: 'Research and document the LLM provider\'s data retention policy'
      },
      {
        en: 'Write a user-facing privacy statement',
        ar: 'Write a user-facing privacy statement'
      }
    ],
    exerciseEn: 'Implement privacy protection and document the strategy.',
    exerciseAr: 'Implement privacy protection and document the strategy.',
    deliverableEn: 'PII redaction function, anonymization strategy, and privacy statement.',
deliverableAr: 'PII redaction function', anonymization strategy, and privacy statement.',
    resources: [
      { title: 'OpenAI Data Usage Policy', url: 'https://openai.com/policies/data-usage', kind: 'reference' }
    ],
    challengeEn: 'Add a user control to opt-out of having data used for model training',
    challengeAr: 'Add a user control to opt-out of having data used for model training',
    prerequisites: [268],
    criteriaEn: ['PII redaction function works', 'Anonymization implemented', 'Retention policy documented', 'Privacy statement written'],
    criteriaAr: ['PII redaction function works', 'Anonymization implemented', 'Retention policy documented', 'Privacy statement written']
  },
  {
    dayNumber: 270,
    phase_slug: 'ai-integration',
    kind: 'review' as const,
    titleEn: 'Phase 9 AI Integration Review',
    titleAr: 'Review Phase 9 AI Integration',
    topic: 'Review',
    estimatedMinutes: 70,
    objectiveEn: 'Summarize the key concepts covered in Phase 9: prompt engineering, AI security, fine-tuning, multi-modal models, governance, and privacy. Ensure all projects compile and function correctly. Document key takeaways and carry forward to Phase 10.',
    objectiveAr: 'Summarize the key concepts covered in Phase 9: prompt engineering, AI security, fine-tuning, multi-modal models, governance, and privacy. Ensure all projects compile and function correctly. Document key takeaways and carry forward to Phase 10.',
    lessonEn:
      'Phase 9 covered AI Integration over 30 days. Key takeaways: prompt engineering techniques (few-shot, chain-of-thought, role-playing), AI security (prompt injection, prompt injection prevention), fine-tuning basics, multi-modal models, AI governance (EU AI Act, model cards), and privacy (PII redaction, data protection). Ensure all projects compile and function correctly. Document key takeaways and carry forward to Phase 10.',
    lessonAr:
      'Phase 9Covered AI Integration over 30 days. Key takeaways: prompt engineering techniques (few-shot, chain-of-thought, role-playing), AI security (prompt injection, prompt injection prevention), fine-tuning basics, multi-modal models, AI governance (EU AI Act, model cards), and privacy (PII redaction, data protection). Ensure all projects compile and function correctly. Document key takeaways and carry forward to Phase 10.',
    tasks: [
      {
        en: 'Summarize the key concepts covered in Phase 9',
        ar: 'Summarize the key concepts covered in Phase 9'
      },
      {
        en: 'Ensure all Phase 9 projects compile and function correctly',
        ar: 'Ensure all Phase 9 projects compile and function correctly'
      },
      {
        en: 'Document key takeaways and carry forward to Phase 10',
        ar: 'Document key takeaways and carry forward to Phase 10'
      },
      {
        en: 'Run the full Phase 9 test suite and verify it passes',
        ar: 'Run the full Phase 9 test suite and verify it passes'
      }
    ],
    exerciseEn: 'Complete the Phase 9 review and prepare for Phase 10.',
    exerciseAr: 'Complete the Phase 9 review and prepare for Phase 10.',
    deliverableEn: 'A reviewed Phase 9 codebase and key takeaways documented.',
deliverableAr: 'Reviewed Phase 9 codebase and key takeaways.',
    resources: [],
    challengeEn: 'Create a Phase 9 summary document covering all AI integration topics',
    challengeAr: 'Create a Phase 9 summary document covering all AI integration topics',
    prerequisites: [259],
    criteriaEn: ['Key concepts summarized', 'All projects working', 'Key takeaways documented', 'Test suite passing'],
    criteriaAr: ['Key concepts summarized', 'All projects working', 'Key takeaways documented', 'Test suite passing']
  }
]