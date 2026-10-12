import type { CurriculumDay } from '../types'



/** Phase 8 — TypeScript, Testing & Security (days 211–240). */

export const PHASE_8_DAYS: CurriculumDay[] = [

  {

    dayNumber: 211,

    phaseSlug: 'typescript-testing-security',

    kind: 'lesson' as const,

    titleEn: 'TypeScript Fundamentals',

    titleAr: 'Fundamentals TypeScript',

    topic: 'TypeScript',

    estimatedMinutes: 90,

    objectiveEn: 'Write type annotations, interfaces, and understand generics.',

    objectiveAr: 'Write type annotations, interfaces, and understand generics.',

    lessonEn:

      'TypeScript adds static typing to JavaScript. Interfaces describe the shape of objects. Generics enable reusable components that work with multiple types. Type inference reduces boilerplate. Understanding type compatibility is key to building maintainable code.',

    lessonAr:

      'TypeScript يضيف التصنيف الثابت إلى JavaScript. الواجهات تصف شكل الكائنات. التمكن من الجيمريك يمكّن من إنشاء مكونات قابلة لإعادة الاستخدام تعمل مع أنواع متعددة. ت inference يقلل من التكرار. فهم التوافق النوعي هو مفتاح بناء البرمجيات.',

    tasks: [

      {

        en: 'Add type annotations to a function parameters and return value',

        ar: 'Add type annotations to a function parameters and return value'

      },

      {

        en: 'Create an interface for a user object with name, email, and role',

        ar: 'Create an interface for a user object with name, email, and role'

      },

      {

        en: 'Create a generic identity function',

        ar: 'Create a generic identity function'

      },

      {

        en: 'Use type inference without explicit annotations where possible',

        ar: 'Use type inference without explicit annotations where possible'

      }

    ],

    exerciseEn: 'Refactor a small JS file with type annotations, interfaces, and a generic function.',

    exerciseAr: 'Refactor a small JS file with type annotations, interfaces, and a generic function.',

    deliverableEn: 'A TypeScript file with annotations, an interface, and a generic function.',

    deliverableAr: 'A TypeScript file with annotations, an interface, and a generic function.',

    resources: [

      { title: 'TypeScript docs', url: 'https://www.typescriptlang.org/docs/', kind: 'official' },

      { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/handbook/', kind: 'reference' }

    ],

    challengeEn: 'Create a generic utility type that extracts the return type of a function.',

    challengeAr: 'Create a generic utility type that extracts the return type of a function.',

    prerequisites: [],

    criteriaEn: ['Can add type annotations', 'Can create an interface'],

    criteriaAr: ['Can add type annotations', 'Can create an interface']

  },

  {

    dayNumber: 212,

    phaseSlug: 'typescript-testing-security',

    kind: 'lesson' as const,

    titleEn: 'Testing Fundamentals with Vitest',

    titleAr: 'Fundamentals Testing with Vitest',

    topic: 'Testing',

    estimatedMinutes: 90,

    objectiveEn: 'Write Vitest tests, use describe, it, expect, and handle async tests.',

    objectiveAr: 'Write Vitest tests, use describe, it, expect, and handle async tests.',

    lessonEn:

      'Vitest is a fast test runner that works seamlessly with Vite. Use describe to group tests, it to define a test case, and expect to make assertions. async/await tests are supported with the built-in timeout feature.',

    lessonAr:

      'Vitest هو من-runner اختبار سريع يعمل بشكل seamless مع Vite. استخدم describe لتجميع الاختبارات، it لتحديد حالة اختبار، و expect لإجراء المطالبات. تدعم اختبارات async/await مع ميزة timeout المدمجة.',

    tasks: [

      {

        en: 'Write a test that verifies a simple function returns the expected value',

        ar: 'Write a test that verifies a simple function returns the expected value'

      },

      {

        en: 'Use describe to group related tests',

        ar: 'Use describe to group related tests'

      },

      {

        en: 'Use expect with matchers like toBe, toEqual, toBeNull',

        ar: 'Use expect with matchers like toBe, toEqual, toBeNull'

      },

      {

        en: 'Write an async test that resolves after a timeout',

        ar: 'Write an async test that resolves after a timeout'

      }

    ],

    exerciseEn: 'Write a Vitest test suite for a function that adds two numbers, including positive and negative cases.',

    exerciseAr: 'Write a Vitest test suite for a function that adds two numbers, including positive and negative cases.',

    deliverableEn: 'A Vitest test file with at least three test cases.',

    deliverableAr: 'A Vitest test file with at least three test cases.',

    resources: [

      { title: 'Vitest docs', url: 'https://vitest.dev/', kind: 'official' },

      { title: 'Vitest Getting Started', url: 'https://vitest.dev/guide/', kind: 'reference' }

    ],

    challengeEn: 'Write a test that uses beforeEach and afterEach hooks.',

    challengeAr: 'Write a test that uses beforeEach and afterEach hooks.',

    prerequisites: [211],

    criteriaEn: ['Can write a test with describe/it/expect', 'Can write an async test'],

    criteriaAr: ['Can write a test with describe/it/expect', 'Can write an async test']

  },

  {

    dayNumber: 213,

    phaseSlug: 'typescript-testing-security',

    kind: 'practice' as const,

    titleEn: 'Security Basics: XSS and Injection Prevention',

    titleAr: 'Fundamentals Security',

    topic: 'Security',

    estimatedMinutes: 100,

    objectiveEn: 'Understand Cross-Site Scripting (XSS) and how to prevent it, and prevent SQL injection.',

    objectiveAr: 'Understand Cross-Site Scripting (XSS) and how to prevent it, and prevent SQL injection.',

    lessonEn:

      'XSS occurs when untrusted data is inserted into the DOM without proper escaping. Prevent it by escaping HTML, using textContent instead of innerHTML, and validating user input. SQL injection is prevented by using parameterized queries or prepared statements, never concatenating user input into SQL strings.',

    lessonAr:

      'يحدث XSS عند إدخال بيانات غير موثوقة إلى DOM دون تهريب صحيح. منعه بالهروب من HTML، استخدام textContent بدلاً من innerHTML، والتحقق من المدخلات. يتم منع حقن SQL باستخدام استعلامات جاهزة، never concatenating user input into SQL strings.',

    tasks: [

      {

        en: 'Escape HTML in a user-provided string using a library or manual escaping',

        ar: 'Escape HTML in a user-provided string using a library or manual escaping'

      },

      {

        en: 'Demonstrate the risk of innerHTML with untrusted data',

        ar: 'Demonstrate the risk of innerHTML with untrusted data'

      },

      {

        en: 'Write a parameterized SQL query using placeholders',

        ar: 'Write a parameterized SQL query using placeholders'

      },

      {

        en: 'Replace a string concatenation SQL query with a parameterized one',

        ar: 'Replace a string concatenation SQL query with a parameterized one'

      }

    ],

    exerciseEn: 'Take a vulnerable HTML snippet and rewrite it safely, using textContent and escaped data.',

    exerciseAr: 'Take a vulnerable HTML snippet and rewrite it safely, using textContent and escaped data.',

    deliverableEn: 'A safe HTML snippet with no XSS vulnerabilities.',

    deliverableAr: 'A safe HTML snippet with no XSS vulnerabilities.',

    resources: [

      { title: 'OWASP XSS Prevention', url: 'https://owasp.org/www-community/attacks/XSS/', kind: 'official' },

      { title: 'Parameterized Queries Guide', url: 'https://www.postgresql.org/docs/current/parameterized-queries.html', kind: 'reference' }

    ],

    challengeEn: 'Identify the XSS vulnerability in a given code snippet and fix it.',

    challengeAr: 'Identify the XSS vulnerability in a given code snippet and fix it.',

    prerequisites: [212],

    criteriaEn: ['Can explain XSS', 'Can escape HTML', 'Can write parameterized SQL'],

    criteriaAr: ['Can explain XSS', 'Can escape HTML', 'Can write parameterized SQL']

  },

  {

    dayNumber: 214,

    phaseSlug: 'typescript-testing-security',

    kind: 'project' as const,

    titleEn: 'Type-Safe Form Validation',

    titleAr: 'Form Validation Type-Safe',

    topic: 'TypeScript project',

    estimatedMinutes: 120,

    objectiveEn: 'Build a form with Zod schema validation, TypeScript types, and runtime safety.',

    objectiveAr: 'Build a form with Zod schema validation, TypeScript types, and runtime safety.',

    lessonEn:

      'Zod is a Type-first schema declaration and validation library. Define a schema for your form fields, and Zod will both validate data at runtime and generate TypeScript types. This ensures that the data your app receives is perfectly shaped, and you never have to manually parse or validate types.',

    lessonAr:

      'Zod هي مكتبة تأكيد والنمط-first schema declaration. عرف.schema لحقول نموذجك، وسيؤكد Zod التأكيد في وقت التشغيل وينتج أنواع TypeScript. هذا يضمن أن البيانات التي receives app are perfectly shaped, and you never have to manually parse or validate types.',

    tasks: [

      {

        en: 'Install Zod and define a schema for a login form (email, password)',

        ar: 'Install Zod and define a schema for a login form (email, password)'

      },

      {

        en: 'Use the schema to validate data at runtime',

        ar: 'Use the schema to validate data at runtime'

      },

      {

        en: 'Generate TypeScript types from the schema and use them in a component',

        ar: 'Generate TypeScript types from the schema and use them in a component'

      },

      {

        en: 'Build a component that displays validation errors beautifully',

        ar: 'Build a component that displays validation errors beautifully'

      }

    ],

    exerciseEn: 'Create a registration form with Zod that validates email format, password strength, and matches confirmation.',

    exerciseAr: 'Create a registration form with Zod that validates email format, password strength, and matches confirmation.',

    deliverableEn: 'A form component with Zod validation and TypeScript types.',

    deliverableAr: 'A form component with Zod validation and TypeScript types.',

    resources: [

      { title: 'Zod docs', url: 'https://zod.dev/', kind: 'official' },

      { title: 'TypeScript docs', url: 'https://www.typescriptlang.org/docs/', kind: 'official' }

    ],

    challengeEn: 'Add a schema that validates a date is not in the past.',

    challengeAr: 'Add a schema that validates a date is not in the past.',

    prerequisites: [212, 213],

    criteriaEn: ['Zod schema validates runtime', 'TypeScript types generated', 'Component displays errors'],

    criteriaAr: ['Zod schema validates runtime', 'TypeScript types generated', 'Component displays errors']

  },

  {

    dayNumber: 215,

    phaseSlug: 'typescript-testing-security',

    kind: 'review' as const,

    titleEn: 'TypeScript & Testing Review',

    titleAr: 'Review TypeScript and Testing',

    topic: 'Review',

    estimatedMinutes: 70,

    objectiveEn: 'Refactor your form validation to use type-safe patterns, and write a test suite for the validator.',

    objectiveAr: 'Refactor your form validation to use type-safe patterns, and write a test suite for the validator.',

    lessonEn:

      'A review day. Take your form validation code and refactor it to use Zod for schema-based validation and TypeScript for type safety. Then write a Vitest test suite that covers the validator\'s edge cases.',

    lessonAr:

      'يوم مراجعة. مراجعة كود تأكيد صحة النموذج واستخدام Zod للتأكيد، ثم اكتب مجموعة اختبارات Vitest تغطي الحالات الحدية.',

    tasks: [

      {

        en: 'Refactor your form to use Zod schema validation',

        ar: 'Refactor your form to use Zod schema validation'

      },

      {

        en: 'Write a Vitest test suite for the validator with at least three test cases',

        ar: 'Write a Vitest test suite for the validator with at least three test cases'

      },

      {

        en: 'Run the tests and verify they all pass',

        ar: 'Run the tests and verify they all pass'

      }

    ],

    exerciseEn: 'Refactor your form validation and write test cases for edge cases like invalid email format and mismatched passwords.',

    exerciseAr: 'Refactor your form validation and write test cases for edge cases like invalid email format and mismatched passwords.',

    deliverableEn: 'A refactored form with Zod and a passing Vitest test suite.',

    deliverableAr: 'A refactored form with Zod and a passing Vitest test suite.',

    resources: [

      { title: 'Vitest docs', url: 'https://vitest.dev/', kind: 'official' },

      { title: 'Zod docs', url: 'https://zod.dev/', kind: 'official' }

    ],

    challengeEn: 'Add a schema that validates a password must contain at least one number and one special character.',

    challengeAr: 'Add a schema that validates a password must contain at least one number and one special character.',

    prerequisites: [214],

    criteriaEn: ['Form uses Zod validation', 'Vitest suite runs without errors', 'Edge cases covered'],

    criteriaAr: ['Form uses Zod validation', 'Vitest suite runs without errors', 'Edge cases covered']

  },

  {

    dayNumber: 216,

    phaseSlug: 'typescript-testing-security',

    kind: 'lesson' as const,

    titleEn: 'CI/CD Pipeline Principles',

    titleAr: 'CI/CD Pipeline Principles',

    topic: 'CI/CD',

    estimatedMinutes: 90,

    objectiveEn: 'Understand the principles of continuous integration and continuous deployment, and the pipeline stages involved.',

    objectiveAr: 'Understand the principles of continuous integration and continuous deployment, and the pipeline stages involved.',

    lessonEn:

      'CI/CD automates the build, test, and deployment of applications. Key stages include source code checkout, dependency installation, testing, building the artifact, and deploying to target environments. Pipelines can be configured to run on every push or on a schedule.',

    lessonAr:

      'CI/CD automatize البناء، الاختبار، والنشر للتطبيقات. المراحل الرئيسية تشمل تحقق من الكود المصدر، تثبيت الاعتماديات، الاختبارات، بناء الصدارة، والنشر إلى بيئات الهدف. يمكن تكوين النُبُوبات للعمل على كل push أو according to a schedule.',

    tasks: [

      {

        en: 'Describe the CI/CD pipeline stages: checkout, build, test, deploy',

        ar: 'Describe the CI/CD pipeline stages: checkout, build, test, deploy'

      },

      {

        en: 'Explain the difference between CI and CD',

        ar: 'Explain the difference between CI and CD'

      },

      {

        en: 'Identify which tools can be used for each pipeline stage',

        ar: 'Identify which tools can be used for each pipeline stage'

      },

      {

        en: 'Configure a basic pipeline that runs tests on every push',

        ar: 'Configure a basic pipeline that runs tests on every push'

      }

    ],

    exerciseEn: 'Describe the CI/CD pipeline stages for a given project.',

    exerciseAr: 'Describe the CI/CD pipeline stages for a given project.',

    deliverableEn: 'A description of the CI/CD pipeline stages.',

deliverableAr: 'Description of the CI/CD pipeline stages.',

    resources: [

      { title: 'GitHub Actions docs', url: 'https://docs.github.com/en/actions', kind: 'reference' }

    ],

    challengeEn: 'Configure a pipeline that deploys to a staging environment after tests pass',

    challengeAr: 'Configure a pipeline that deploys to a staging environment after tests pass',

    prerequisites: [215],

    criteriaEn: ['Can describe pipeline stages', 'Can explain CI vs CD', 'Can identify tools', 'Pipeline runs on push'],

    criteriaAr: ['Can describe pipeline stages', 'Can explain CI vs CD', 'Can identify tools', 'Pipeline runs on push']

  },

  {

    dayNumber: 217,

    phaseSlug: 'typescript-testing-security',

    kind: 'project' as const,

    titleEn: 'Docker Multi-Stage Builds',

    titleAr: 'Docker Multi-Stage Builds',

    topic: 'DevOps',

    estimatedMinutes: 120,

    objectiveEn: 'Build a Docker multi-stage image that minimizes the final image size.',

    objectiveAr: 'Build a Docker multi-stage image that minimizes the final image size.',

    lessonEn:

      'Multi-stage builds use multiple FROM statements in a single Dockerfile. Each FROM can use a different base image. Artifacts from one stage can be copied to another. This enables building with a large image and producing a small production image.',

    lessonAr:

      'Builds Docker multi-stage تستخدم FROM statements متعددة في ملف Dockerfile واحد. كلFROM can use a different base image. Artifacts from one stage can be copied to another. This enables building with a large image and producing a small production image.',

    tasks: [

      {

        en: 'Write a Dockerfile with two stages: build and production',

        ar: 'Write a Dockerfile with two stages: build and production'

      },

      {

        en: 'Copy the built artifact from the build stage to the production stage',

        ar: 'Copy the built artifact from the build stage to the production stage'

      },

      {

        en: 'Verify the production image is smaller than the build image',

        ar: 'Verify the production image is smaller than the build image'

      },

      {

        en: 'Run the production container and verify it works',

        ar: 'Run the production container and verify it works'

      }

    ],

    exerciseEn: 'Build a multi-stage Dockerfile and verify the size reduction.',

    exerciseAr: 'Build a multi-stage Dockerfile and verify the size reduction.',

    deliverableEn: 'A multi-stage Dockerfile with a smaller production image.',

deliverableAr: 'Multi-stage Dockerfile with smaller production image.',

    resources: [

      { title: 'Docker multi-stage docs', url: 'https://docs.docker.com/build/building/multi-stage/', kind: 'reference' }

    ],

    challengeEn: 'Use a base image like alpine to further reduce the production image size',

    challengeAr: 'Use a base image like alpine to further reduce the production image size',

    prerequisites: [216],

    criteriaEn: ['Two stages defined', 'Artifact copied to production', 'Production image smaller', 'Container runs'],

    criteriaAr: ['Two stages defined', 'Artifact copied to production', 'Production image smaller', 'Container runs']

  },

  {

    dayNumber: 218,

    phaseSlug: 'typescript-testing-security',

    kind: 'lesson' as const,

    titleEn: 'Security Best Practices',

    titleAr: 'Security Best Practices',

    topic: 'Security',

    estimatedMinutes: 90,

    objectiveEn: 'Understand common web security vulnerabilities and how to mitigate them in full-stack applications.',

    objectiveAr: 'Understand common web security vulnerabilities and how to mitigate them in full-stack applications.',

    lessonEn:

      'Common vulnerabilities include XSS, SQL injection, CSRF, and insecure deserialization. Mitigations include input validation, output encoding, CSRF tokens, and using parameterized queries. Always keep dependencies updated.',

    lessonAr:

      'Common vulnerabilities include XSS, SQL injection, CSRF, and insecure deserialization. Mitigations include input validation, output encoding, CSRF tokens, and using parameterized queries. Always keep dependencies updated.',

    tasks: [

      {

        en: 'Identify a potential XSS vulnerability in a code snippet and suggest a mitigation',

        ar: 'Identify a potential XSS vulnerability in a code snippet and suggest a mitigation'

      },

      {

        en: 'Identify a potential SQL injection vulnerability and suggest parameterized queries',

        ar: 'Identify a potential SQL injection vulnerability and suggest parameterized queries'

      },

      {

        en: 'Implement a CSRF token pattern in a form submission',

        ar: 'Implement a CSRF token pattern in a form submission'

      },

      {

        en: 'Update a dependency to its latest secure version',

        ar: 'Update a dependency to its latest secure version'

      }

    ],

    exerciseEn: 'Apply security best practices to a sample codebase.',

    exerciseAr: 'Apply security best practices to a sample codebase.',

    deliverableEn: 'A codebase with security mitigations applied.',

deliverableAr: 'Codebase with security mitigations applied.',

    resources: [

      { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', kind: 'reference' }

    ],

    challengeEn: 'Add security headers (Helmet.js) to an Express application',

    challengeAr: 'Add security headers (Helmet.js) to an Express application',

    prerequisites: [217],

    criteriaEn: ['XSS mitigation identified', 'SQL injection parameterized queries', 'CSRF token implemented', 'Dependency updated'],

    criteriaAr: ['XSS mitigation identified', 'SQL injection parameterized queries', 'CSRF token implemented', 'Dependency updated']

  },

  {

    dayNumber: 219,

    phaseSlug: 'typescript-testing-security',

    kind: 'project' as const,

    titleEn: 'Security Headers and Authentication',

    titleAr: 'Security Headers and Authentication',

    topic: 'Security project',

    estimatedMinutes: 120,

    objectiveEn: 'Add security headers using Helmet.js and integrate JWT authentication middleware.',

    objectiveAr: 'Add security headers using Helmet.js and integrate JWT authentication middleware.',

    lessonEn:

      'Helmet.js sets secure HTTP headers to protect against common vulnerabilities. Integrate JWT authentication middleware to protect routes. Combine both for a more secure application.',

    lessonAr:

      'Helmet.js sets secure HTTP headers to protect against common vulnerabilities. Integrate JWT authentication middleware to protect routes. Combine both for a more secure application.',

    tasks: [

      {

        en: 'Install Helmet.js and configure it with secure headers',

        ar: 'Install Helmet.js and configure it with secure headers'

      },

      {

        en: 'Integrate JWT authentication middleware to protect a route',

        ar: 'Integrate JWT authentication middleware to protect a route'

      },

      {

        en: 'Combine Helmet.js and JWT middleware in an Express app',

        ar: 'Combine Helmet.js and JWT middleware in an Express app'

      },

      {

        en: 'Test that the route is protected and headers are present',

        ar: 'Test that the route is protected and headers are present'

      }

    ],

    exerciseEn: 'Build an Express app with Helmet.js and JWT authentication.',

    exerciseAr: 'Build an Express app with Helmet.js and JWT authentication.',

    deliverableEn: 'An Express app with security headers and JWT authentication.',

deliverableAr: 'Express app with security headers and JWT authentication.',

    resources: [

      { title: 'Helmet.js docs', url: 'https://github.com/helmetjs/helmet', kind: 'reference' }

    ],

    challengeEn: 'Add a content security policy (CSP) header using Helmet',

    challengeAr: 'Add a content security policy (CSP) header using Helmet',

    prerequisites: [218],

    criteriaEn: ['Helmet installed and configured', 'JWT middleware protects route', 'Both combined in app', 'Route tested and protected'],

    criteriaAr: ['Helmet已安装 and configured', 'JWT middleware protects route', 'Both combined in app', 'Route tested and protected']

  },

  {

    dayNumber: 220,

    phaseSlug: 'typescript-testing-security',

    kind: 'lesson' as const,

    titleEn: 'Error Handling and Debugging in Production',

    titleAr: 'Error Handling and Debugging in Production',

    topic: 'Production',

    estimatedMinutes: 90,

    objectiveEn: 'Implement error handling that captures context, logs securely, and provides meaningful error messages to users without leaking secrets.',

    objectiveAr: 'Implement error handling that captures context, logs securely, and provides meaningful error messages to users without leaking secrets.',

    lessonEn:

      'Error handling in production should capture context (request ID, user ID, timestamp) and log securely without exposing secrets. Provide user-friendly error messages and use error boundaries to prevent the entire app from crashing.',

    lessonAr:

      'Error handling in production should capture context (request ID, user ID, timestamp) and log securely without exposing secrets. Provide user-friendly error messages and use error boundaries to prevent the entire app from crashing.',

    tasks: [

      {

        en: 'Implement an error handler that captures request ID and user ID',

        ar: 'Implement an error handler that captures request ID and user ID'

      },

      {

        en: 'Log the error securely without exposing secrets',

        ar: 'Log the error securely without exposing secrets'

      },

      {

        en: 'Provide a user-friendly error message without leaking details',

        ar: 'Provide a user-friendly error message without leaking details'

      },

      {

        en: 'Use error boundaries to prevent the app from crashing on runtime errors',

        ar: 'Use error boundaries to prevent the app from crashing on runtime errors'

      }

    ],

    exerciseEn: 'Implement production-ready error handling for an Express app.',

    exerciseAr: 'Implement production-ready error handling for an Express app.',

    deliverableEn: 'An error handler that captures context and provides user-friendly messages.',

deliverableAr: 'Error handler that captures context and provides user-friendly messages.',

    resources: []

  },

  {

    dayNumber: 221,

    phaseSlug: 'typescript-testing-security',

    kind: 'project' as const,

    titleEn: 'Production Error Monitoring',

    titleAr: 'Production Error Monitoring',

    topic: 'Production',

    estimatedMinutes: 120,

    objectiveEn: 'Set up error monitoring with Sentry or a similar service, and configure alerts for critical errors.',

    objectiveAr: 'Set up error monitoring with Sentry or a similar service, and configure alerts for critical errors.',

    lessonEn:

      'Error monitoring services like Sentry capture exceptions in real-time, provide stack traces, and allow you to set up alerts for critical errors. Integrate the SDK into your application and verify that errors are captured.',

    lessonAr:

      'Error monitoring services like Sentry capture exceptions in real-time, provide stack traces, and allow you to set up alerts for critical errors. Integrate the SDK into your application and verify that errors are captured.',

    tasks: [

      {

        en: 'Install the Sentry SDK and configure it for your application',

        ar: 'Install the Sentry SDK and configure it for your application'

      },

      {

        en: 'Capture a test error and verify it appears in the Sentry dashboard',

        ar: 'Capture a test error and verify it appears in the Sentry dashboard'

      },

      {

        en: 'Configure an alert for critical errors (e.g., 500 errors)',

        ar: 'Configure an alert for critical errors (e.g., 500 errors)'

      },

      {

        en: 'Verify that error context includes request ID and user ID',

        ar: 'Verify that error context includes request ID and user ID'

      }

    ],

    exerciseEn: 'Set up error monitoring and verify errors are captured.',

    exerciseAr: 'Set up error monitoring and verify errors are captured.',

    deliverableEn: 'Sentry configured and a test error captured.',

deliverableAr: 'Sentry configured and a test error captured.',

    resources: [

      { title: 'Sentry docs', url: 'https://docs.sentry.io/platforms/javascript/', kind: 'reference' }

    ],

    challengeEn: 'Add breadcrumbs to capture the user journey leading up to an error',

    challengeAr: 'Add breadcrumbs to capture the user journey leading up to an error',

    prerequisites: [220],

    criteriaEn: ['Sentry SDK installed', 'Test error captured in dashboard', 'Alert configured for 500 errors', 'Error context includes request ID'],

    criteriaAr: ['Sentry SDK installed', 'Test error captured in dashboard', 'Alert configured for 500 errors', 'Error context includes request ID']

  },

  {

    dayNumber: 222,

    phaseSlug: 'typescript-testing-security',

    kind: 'lesson' as const,

    titleEn: 'Logging and Structured Logs',

    titleAr: 'Logging and Structured Logs',

    topic: 'Production',

    estimatedMinutes: 90,

    objectiveEn: 'Implement structured logging with consistent fields (timestamp, level, requestId, duration) and export to a log aggregator.',

    objectiveAr: 'Implement structured logging with consistent fields (timestamp, level, requestId, duration) and export to a log aggregator.',

    lessonEn:

      'Structured logs use JSON with a consistent field set (timestamp, level, requestId, duration). This enables searching, filtering, and analysis in log aggregators like ELK or Datadog. Never log passwords or tokens.',

    lessonAr:

      'السِّجِّل المنظم يستخدم JSON بمجال ثابت (timestamp, level, requestId, duration). هذا يمكِّن من البحث والفلترة والتحليل في أدوات تجميع السِّجِّل مثل ELK أو Datadog. Never log passwords or tokens.',

    tasks: [

      {

        en: 'Configure a logger to output JSON structured logs',

        ar: 'Configure a logger to output JSON structured logs'

      },

      {

        en: 'Add consistent fields: timestamp, level, requestId, and duration',

        ar: 'Add consistent fields: timestamp, level, requestId, and duration'

      },

      {

        en: 'Set up a log aggregator endpoint (ELK or Datadog)',

        ar: 'Set up a log aggregator endpoint (ELK or Datadog)'

      },

      {

        en: 'Verify that passwords are not present in any log',

        ar: 'Verify that passwords are not present in any log'

      }

    ],

    exerciseEn: 'Set up structured logging and verify the JSON output.',

    exerciseAr: 'Set up structured logging and verify the JSON output.',

    deliverableEn: 'A logger that outputs JSON with consistent fields.',

deliverableAr: 'Logger that outputs JSON with consistent fields.',

    resources: [

      { title: 'Winston docs', url: 'https://github.com/winstonjs/winston', kind: 'reference' }

    ],

    challengeEn: 'Set up log aggregation with ELK and verify logs are searchable',

    challengeAr: 'Set up log aggregation with ELK and verify logs are searchable',

    prerequisites: [221],

    criteriaEn: ['Logger outputs JSON', 'Consistent fields present', 'Log aggregator endpoint set up', 'No passwords in logs'],

    criteriaAr: ['Logger outputs JSON', 'Consistent fields present', 'Log aggregator endpoint set up', 'No passwords in logs']

  },

  {

    dayNumber: 223,

    phaseSlug: 'typescript-testing-security',

    kind: 'project' as const,

    titleEn: 'Observability Stack Setup',

    titleAr: 'Observability Stack Setup',

    topic: 'Production',

    estimatedMinutes: 120,

    objectiveEn: 'Set up a complete observability stack: structured logs, metrics (Prometheus), and tracing (OpenTelemetry).',

    objectiveAr: 'Set up a complete observability stack: structured logs, metrics (Prometheus), and tracing (OpenTelemetry).',

    lessonEn:

      'Observability combines logs, metrics, and traces to provide full visibility into the application. Use Prometheus for metrics, OpenTelemetry for tracing, and a log aggregator (ELK/Datadog) for logs. Configure dashboards and alerts.',

    lessonAr:

      'Observability combines logs, metrics, and traces to provide full visibility into the application. Use Prometheus for metrics, OpenTelemetry for tracing, and a log aggregator (ELK/Datadog) for logs. Configure dashboards and alerts.',

    tasks: [

      {

        en: 'Configure Prometheus to scrape metrics from your application',

        ar: 'Configure Prometheus to scrape metrics from your application'

      },

      {

        en: 'Set up OpenTelemetry tracing for key requests',

        ar: 'Set up OpenTelemetry tracing for key requests'

      },

      {

        en: 'Configure ELK or Datadog to aggregate structured logs',

        ar: 'Configure ELK or Datadog to aggregate structured logs'

      },

      {

        en: 'Create a dashboard that shows request rate, error rate, and latency',

        ar: 'Create a dashboard that shows request rate, error rate, and latency'

      }

    ],

    exerciseEn: 'Set up a complete observability stack with metrics, tracing, and logs.',

    exerciseAr: 'Set up a complete observability stack with metrics, tracing, and logs.',

    deliverableEn: 'An observability stack with metrics, tracing, and logs configured.',

deliverableAr: 'Observability stack with metrics, tracing, and logs configured',

    resources: [

      { title: 'Prometheus docs', url: 'https://prometheus.io/docs/', kind: 'reference' },

      { title: 'OpenTelemetry docs', url: 'https://opentelemetry.io/docs/', kind: 'reference' }

    ],

    challengeEn: 'Create an alert that triggers when error rate exceeds 5%',

    challengeAr: 'Create an alert that triggers when error rate exceeds 5%',

    prerequisites: [222],

    criteriaEn: ['Prometheus configured', 'OpenTelemetry tracing active', 'Log aggregator set up', 'Dashboard with rate/latency'],

    criteriaAr: ['Prometheus configured', 'OpenTelemetry tracing active', 'Log aggregator set up', 'Dashboard with rate/latency']

  },

  {

    dayNumber: 224,

    phaseSlug: 'typescript-testing-security',

    kind: 'lesson' as const,

    titleEn: 'Disaster Recovery and Backups',

    titleAr: 'Disaster Recovery and Backups',

    topic: 'Production',

    estimatedMinutes: 90,

    objectiveEn: 'Plan and test disaster recovery: backups, failover, and restoration procedures.',

    objectiveAr: 'Plan and test disaster recovery: backups, failover, and restoration procedures.',

    lessonEn:

      'Disaster recovery planning ensures that the application can recover from a catastrophic failure. Plan regular backups, test failover to secondary environments, and document restoration procedures. Aim for RTO (Recovery Time Objective) and RPO (Recovery Point Objective) targets.',

    lessonAr:

      'Disaster recovery planning ensures that the application can recover from a catastrophic failure. Plan regular backups, test failover to secondary environments, and document restoration procedures. Aim for RTO (Recovery Time Objective) and RPO (Recovery Point Objective) targets.',

    tasks: [

      {

        en: 'Document the backup and restoration procedure',

        ar: 'Document the backup and restoration procedure'

      },

      {

        en: 'Test failover to a secondary environment',

        ar: 'Test failover to a secondary environment'

      },

      {

        en: 'Define RTO and RPO targets for the application',

        ar: 'Define RTO and RPO targets for the application'

      },

      {

        en: 'Run a disaster recovery drill and document the results',

        ar: 'Run a disaster recovery drill and document the results'

      }

    ],

    exerciseEn: 'Document and test a disaster recovery procedure.',

    exerciseAr: 'Document and test a disaster recovery procedure.',

    deliverableEn: 'A documented disaster recovery procedure with RTO and RPO targets.',

deliverableAr: 'Documented disaster recovery procedure with RTO and RPO targets.',

    resources: []

  },

  {

    dayNumber: 225,

    phaseSlug: 'typescript-testing-security',

    kind: 'project' as const,

    titleEn: 'Disaster Recovery Drill',

    titleAr: 'Disaster Recovery Drill',

    topic: 'Production',

    estimatedMinutes: 120,

    objectiveEn: 'Run a disaster recovery drill: restore from backup, verify data integrity, and document the results.',

    objectiveAr: 'Run a disaster recovery drill: restore from backup, verify data integrity, and document the results.',

    lessonEn:

      'A disaster recovery drill tests the ability to recover from a failure. Restore from the latest backup, verify data integrity, and document the time taken and any issues encountered.',

    lessonAr:

      'Disaster recovery drill tests the ability to recover from a failure. Restore from the latest backup, verify data integrity, and document the time taken and any issues encountered.',

    tasks: [

      {

        en: 'Restore the database from the latest backup',

        ar: 'Restore the database from the latest backup'

      },

      {

        en: 'Verify data integrity by checking row counts and key values',

        ar: 'Verify data integrity by checking row counts and key values'

      },

      {

        en: 'Document the time taken and any issues encountered',

        ar: 'Document the time taken and any issues encountered'

      },

      {

        en: 'Run the drill again after fixes and compare results',

        ar: 'Run the drill again after fixes and compare results'

      }

    ],

    exerciseEn: 'Run a disaster recovery drill and document the results.',

    exerciseAr: 'Run a disaster recovery drill and document the results.',

    deliverableEn: 'Disaster recovery drill results with RTO and data integrity verification.',

deliverableAr: 'Drill results with RTO and data integrity verification.',

    resources: []

  },

  {

    dayNumber: 226,

    phaseSlug: 'typescript-testing-security',

    kind: 'lesson' as const,

    titleEn: 'API Rate Limiting and Throttling',

    titleAr: 'Rate Limiting and Throttling',

    topic: 'Security',

    estimatedMinutes: 90,

    objectiveEn: 'Implement advanced rate limiting strategies including per-user limits, IP-based limits, and burst allowances.',

    objectiveAr: 'Implement advanced rate limiting strategies including per-user limits, IP-based limits, and burst allowances.',

    lessonEn:

      'Rate limiting prevents abuse by caps on requests per time window. Per-user limits use identifiers like user IDs. IP-based limits track by IP address. Burst allowances allow a small number of excess requests before throttling kicks in.',

    lessonAr:

      'Rate limiting prevents abuse by caps on requests per time window. Per-user limits use identifiers like user IDs. IP-based limits track by IP address. Burst allowances allow a small number of excess requests before throttling kicks in.',

    tasks: [

      {

        en: 'Implement per-user rate limiting using user IDs',

        ar: 'Implement per-user rate limiting using user IDs'

      },

      {

        en: 'Implement IP-based rate limiting',

        ar: 'Implement IP-based rate limiting'

      },

      {

        en: 'Configure a burst allowance of 5 requests before throttling',

        ar: 'Configure a burst allowance of 5 requests before throttling'

      },

      {

        en: 'Test that the rate limiting middleware correctly blocks excess requests',

        ar: 'Test that the rate limiting middleware correctly blocks excess requests'

      }

    ],

    exerciseEn: 'Implement advanced rate limiting strategies in an Express app.',

    exerciseAr: 'Implement advanced rate limiting strategies in an Express app.',

    deliverableEn: 'Express middleware with per-user and IP-based rate limiting and burst allowances.',

deliverableAr: 'Express middleware with per-user and IP-based rate limiting and burst allowances.',

    resources: [

      { title: 'npmjs.com/express-rate-limit', url: 'https://www.npmjs.com/package/express-rate-limit', kind: 'reference' }

    ],

    challengeEn: 'Configure a sliding window rate limit of 100 requests per 15 minutes',

    challengeAr: 'Configure a sliding window rate limit of 100 requests per 15 minutes',

    prerequisites: [223],

    criteriaEn: ['Per-user limiting active', 'IP-based limiting active', 'Burst allowance configured', 'Middleware blocks excess requests'],

    criteriaAr: ['Per-user limiting active', 'IP-based limiting active', 'Burst allowance configured', 'Middleware blocks excess requests']

  },

  {

    dayNumber: 227,

    phaseSlug: 'typescript-testing-security',

    kind: 'project' as const,

    titleEn: 'Rate Limiting Integration',

    titleAr: 'Rate Limiting Integration',

    topic: 'Security project',

    estimatedMinutes: 120,

    objectiveEn: 'Integrate rate limiting into the application, combine with authentication middleware, and test the combined behavior.',

    objectiveAr: 'Integrate rate limiting into the application, combine with authentication middleware, and test the combined behavior.',

    lessonEn:

      'Rate limiting should be integrated with authentication to protect auth endpoints specifically. Apply stricter limits to login/register routes and more permissive limits to public endpoints. Test that the combined behavior works correctly.',

    lessonAr:

      'Rate limiting should be integrated with authentication to protect auth endpoints specifically. Apply stricter limits to login/register routes and more permissive limits to public endpoints. Test that the combined behavior works correctly.',

    tasks: [

      {

        en: 'Apply rate limiting to the login endpoint with a stricter limit',

        ar: 'Apply rate limiting to the login endpoint with a stricter limit'

      },

      {

        en: 'Apply more permissive rate limiting to public API endpoints',

        ar: 'Apply more permissive rate limiting to public API endpoints'

      },

      {

        en: 'Combine rate limiting with JWT authentication middleware',

        ar: 'Combine rate limiting with JWT authentication middleware'

      },

      {

        en: 'Test that login is rate-limited and public endpoints are not',

        ar: 'Test that login is rate-limited and public endpoints are not'

      }

    ],

    exerciseEn: 'Integrate rate limiting with authentication in an Express app.',

    exerciseAr: 'Integrate rate limiting with authentication in an Express app.',

    deliverableEn: 'Express app with rate limiting and authentication integrated.',

deliverableAr: 'Express app with rate limiting and authentication integrated.',

    resources: [

      { title: 'npmjs.com/express-rate-limit', url: 'https://www.npmjs.com/package/express-rate-limit', kind: 'reference' }

    ],

    challengeEn: 'Add a 429 response with Retry-After header when the limit is exceeded',

    challengeAr: 'Add a 429 response with Retry-After header when the limit is exceeded',

    prerequisites: [226],

    criteriaEn: ['Login endpoint rate-limited', 'Public endpoints permissive', 'JWT middleware combined', '429 with Retry-After tested'],

    criteriaAr: ['Login endpoint rate-limited', 'Public endpoints permissive', 'JWT middleware combined', '429 with Retry-After tested']

  },

  {

    dayNumber: 228,

    phaseSlug: 'typescript-testing-security',

    kind: 'review' as const,

    titleEn: 'Phase 8 TypeScript & Security Review',

    titleAr: 'Review Phase 8 TypeScript & Security',

    topic: 'Review',

    estimatedMinutes: 70,

    objectiveEn: 'Refactor your security and TypeScript projects to cover the advanced patterns covered in Phase 8: CI/CD, Docker, security best practices, error handling, error monitoring, structured logging, disaster recovery, and rate limiting. Ensure all projects compile with strict mode and no errors.',

    objectiveAr: 'Refactor your security and TypeScript projects to cover the advanced patterns covered in Phase 8: CI/CD, Docker, security best practices, error handling, error monitoring, structured logging, disaster recovery, and rate limiting. Ensure all projects compile with strict mode and no errors.',

    lessonEn:

      'Phase 8 covered TypeScript and security advanced patterns over 15 days. Key takeaways: CI/CD pipeline principles, Docker multi-stage builds, security best practices (OWASP Top 10), error handling in production, error monitoring with Sentry, structured logging, disaster recovery planning, and advanced rate limiting. Ensure all projects compile with strict mode and no errors.',

    lessonAr:

      'Phase 8 covered TypeScript and security advanced patterns over 15 days. Key takeaways: CI/CD pipeline principles, Docker multi-stage builds, security best practices (OWASP Top 10), error handling in production, error monitoring with Sentry, structured logging, disaster recovery planning, and advanced rate limiting. Ensure all projects compile with strict mode and no errors.',

    tasks: [

      {

        en: 'Refactor all Phase 8 projects to use advanced patterns',

        ar: 'Refactor all Phase 8 projects to use advanced patterns'

      },  {

    dayNumber: 229,

    phaseSlug: 'typescript-testing-security',

    kind: 'lesson' as const,

    titleEn: 'CSS Selectors and Specificity',

    titleAr: 'محددات selektor CSS و الشذايية',

    topic: 'TypeScript',

    estimatedMinutes: 90,

    objectiveEn: 'Master the cascade, specificity calculations, and inheritance patterns to predict styling application.',

    objectiveAr: 'اتقن عمليات التسلسل (cascade) وحسابات الشذايية و أنماط التوريث للتنبؤ بتطبيق التنسيقات',

    lessonEn:

      'CSS specificity determines how conflicts between competing rules are resolved. Understanding selector weight, inheritance, and the cascade order is essential for maintaining scalable stylesheets.',

    lessonAr:

      'حددانية الشذايية CSS تحدد كيف يتم حل النزاعات بين القواعد المتنافسة. فهم وزن المحددات، والتوريث، وترتيب التسلسل ضروري لتنظيم أنماط قابلة للصيانة.',

    tasks: [

      {

        en: 'Add type annotations to a function parameters and return value',

        ar: 'Add type annotations to a function parameters and return value'

      },

      {

        en: 'Create an interface for a user object with name, email, and role',

        ar: 'Create an interface for a user object with name, email, and role'

      },

      {

        en: 'Create a generic identity function',

        ar: 'Create a generic identity function'

      },

      {

        en: 'Use type inference without explicit annotations where possible',

        ar: 'Use type inference without explicit annotations where possible'

      }

    ],

    exerciseEn: 'Refactor a small JS file with type annotations, interfaces, and a generic function.',

    exerciseAr: 'Refactor a small JS file with type annotations, interfaces, and a generic function.',

    deliverableEn: 'A TypeScript file with annotations, an interface, and a generic function.',

    deliverableAr: 'A TypeScript file with annotations, an interface, and a generic function.',

    resources: [

      {

        title: 'MDN',

        url: 'https://developer.mozilla.org/en-US/docs',

        kind: 'official'

      },

      {

        title: 'TypeScript docs',

        url: 'https://www.typescriptlang.org/docs/',

        kind: 'official'

      }

    ],

    challengeEn: 'Practice the concepts learned in this day's lessons.',

    challengeAr: 'مارس المفاهيم التي learned في هذا اليوم's lessons.',

    prerequisites: [],

    criteriaEn: ['Can add type annotations', 'Can create an interface'],

    criteriaAr: ['Can add type annotations', 'Can create an interface']

  },

  {

    dayNumber: 230,

    phaseSlug: 'typescript-testing-security',

    kind: 'lesson' as const,

    titleEn: 'Responsive Design Patterns',

    titleAr: 'أنماط التصميم الاستجابة',

    topic: 'TypeScript',

    estimatedMinutes: 90,

    objectiveEn: 'Create a responsive typography scale using clamp(), rem units, and calc() for fluid scaling across breakpoints.',

    objectiveAr: 'قم بإنشاء مقياس طباعة ترددي باستخدام clamp() and rem units and calc() لل scaling سائل across breakpoints',

    lessonEn:

      'Fluid typography is essential for responsive design. Using clamp(), rem units, and calc() allows type to scale smoothly between breakpoints without breaking layout or accessibility.',

    lessonAr:

      'الطباعة الاستجابة ضرورية لتصميم الويب. باستخدام clamp() and rem units and calc() يسمح النوع بالتcaling سائل بين نقاط الكسر دون كسر التخطيط أو التوفرية.',

    tasks: [

      {

        en: 'Design a responsive typography scale using clamp(), rem, and calc() for three breakpoints',

        ar: 'Design a responsive typography scale using clamp() and rem and calc() for three breakpoints'

      },

      {

        en: 'Set up a scalable image strategy using srcset and sizes',

        ar: 'Set up a scalable image strategy using srcset and sizes'

      },

      {

        en: 'Test a responsive design on three real devices and report breakpoints',

        ar: 'Test a responsive design on three real devices and report breakpoints'

      },

      {

        en: 'Configure a basic CI pipeline using GitHub Actions that runs on every push to main',

        ar: 'Configure a basic CI pipeline using GitHub Actions that runs on every push to main'

      }

    ],

    exerciseEn: 'Set up a responsive typography scale and test on three devices.',

    exerciseAr: 'Set up a responsive typography scale and test on three devices.',

    deliverableEn: 'A responsive typography scale with clamp() and a responsive image strategy.',

    deliverableAr: 'A responsive typography scale with clamp() and a responsive image strategy.',

    resources: [

      {

        title: 'MDN',

        url: 'https://developer.mozilla.org/en-US/docs',

        kind: 'official'

      },

      {

        title: 'CSS-Tricks',

        url: 'https://css-tricks.com/',

        kind: 'reference'

      }

    ],

    challengeEn: 'Build a responsive page layout and test on mobile and desktop.',

    challengeAr: 'بناء صفحة استجابة واختبارها على الجوال وسطح المكتب.',

    prerequisites: [],

    criteriaEn: ['Can create a responsive typography scale', 'Can configure srcset and sizes'],

    criteriaAr: ['Can create a responsive typography scale', 'Can configure srcset and sizes']

  },

  {

    dayNumber: 231,

    phaseSlug: 'typescript-testing-security',

    kind: 'lesson' as const,

    titleEn: 'CSS Preflight and Reset',

    titleAr: 'المُخلِّصات الأساسية وإعادة الضبط',

    topic: 'TypeScript',

    estimatedMinutes: 90,

    objectiveEn: 'Create a normalized CSS baseline that preserves useful browser defaults while removing inconsistencies.',

    objectiveAr: 'قم بإنشاء baseline CSS normalized that preserves useful browser defaults while removing inconsistencies',

    lessonEn:

      'Browser default stylesheets vary significantly across user agents. A normalized baseline removes inconsistencies while preserving useful defaults, providing a consistent starting point for your project's custom styles.',

    lessonAr:

      'تختلف ملفات تنسيق المستعرض الافتراضية بشكل كبير عبر مستخدمين مختلفة. baseline normalized يزيل التناقضات مع الحفاظ على المفيد الافتراضي، مما يوفر نقطة بداية متسقة لأنماطك المخصصة.',

    tasks: [

      {

        en: 'Compare normalize.css and modern reset stylesheets',

        ar: 'Compare normalize.css and modern reset stylesheets'

      },

      {

        en: 'Create a reset stylesheet using vanilla CSS that removes all browser default styling',

        ar: 'Create a reset stylesheet using vanilla CSS that removes all browser default styling'

      },

      {

        en: 'Apply your reset at the top of your main stylesheet',

        ar: 'Apply your reset at the top of your main stylesheet'

      },

      {

        en: 'Test page rendering across Chrome, Firefox, and Safari',

        ar: 'Test page rendering across Chrome, Firefox, and Safari'

      }

    ],

    exerciseEn: 'Create a CSS reset that preserves meaningful browser defaults.',

    exerciseAr: 'Create a CSS reset that preserves meaningful browser defaults.',

    deliverableEn: 'A CSS reset file that normalizes browser defaults.',

    deliverableAr: 'A CSS reset file that normalizes browser defaults.',

    resources: [

      {

        title: 'MDN',

        url: 'https://developer.mozilla.org/en-US/docs',

        kind: 'official'

      },

      {

        title: 'CSS Reset FAQ',

        url: 'https://github.com/necolas/normalize.css/',

        kind: 'reference'

      }

    ],

    challengeEn: 'Choose a reset stylesheet and document your reasoning.',

    challengeAr: 'اختر ملف reset وضح سبب اختيارك.',

    prerequisites: [],

    criteriaEn: ['Can create a CSS reset', 'Can explain the difference between normalize and reset'],

    criteriaAr: ['Can create a CSS reset', 'Can explain the difference between normalize and reset']

  },

  {

    dayNumber: 232,

    phaseSlug: 'typescript-testing-security',

    kind: 'lesson' as const,

    titleEn: 'CSS Custom Properties for Theming',

    titleAr: 'خصائص CSS المخصصة لـ theming',

    topic: 'TypeScript',

    estimatedMinutes: 90,

    objectiveEn: 'Build a themable component using CSS variables and the :root selector with TypeScript types.',

    objectiveAr: 'بني مكونًا_themeable باستخدام CSS variables and the :root selector with TypeScript types',

    lessonEn:

      'CSS custom properties (--variables) enable dynamic theming (light/dark mode) without JavaScript. Combined with TypeScript types, they provide compile-time safety for your design tokens.',

    lessonAr:

      'المتغيرات CSS (--variables) enable dynamic theming (light/dark mode) بدون JavaScript. مصحوبة بـ TypeScript types, توفر أمان وقت التجميع لتصميم tokens.',

    tasks: [

      {

        en: 'Define a CSS custom properties scale for light and dark mode',

        ar: 'Define a CSS custom properties scale for light and dark mode'

      },

      {

        en: 'Build a themable component using CSS variables and the :root selector',

        ar: 'Build a themable component using CSS variables and the :root selector'

      },

      {

        en: 'Type-safe access to design tokens in a TypeScript component',

        ar: 'Type-safe access to design tokens in a TypeScript component'

      },

      {

        en: 'Convert an existing SASS map of colors to CSS custom properties',

        ar: 'Convert an existing SASS map of colors to CSS custom properties'

      }

    ],

    exerciseEn: 'Create a CSS variable themable component.',

    exerciseAr: 'Create a CSS variable themable component.',

    deliverableEn: 'A themable CSS component with type-safe design tokens.',

    deliverableAr: 'A themable CSS component with type-safe design tokens.',

    resources: [

      {

        title: 'CSS Tricks',

        url: 'https://css-tricks.com/using-css-custom-properties/',

        kind: 'reference'

      },

      {

        title: 'Smashing Magazine',

        url: 'https://www.smashingmagazine.com/2018/07/introducing-css-variables/',

        kind: 'reference'

      }

    ],

    challengeEn: 'Implement a light/dark mode toggle using CSS variables.',

    challengeAr: 'Implement a light/dark mode toggle using CSS variables.',

    prerequisites: [],

    criteriaEn: ['Can define CSS custom properties', 'Can build a themable component'],

    criteriaAr: ['Can define CSS custom properties', 'Can build a themable component']

  },

  {

    dayNumber: 233,

    phaseSlug: 'typescript-testing-security',

    kind: 'lesson' as const,

    titleEn: 'Accessibility in CSS',

    titleAr: 'التوفر في CSS',

    topic: 'TypeScript',

    estimatedMinutes: 90,

    objectiveEn: 'Ensure color contrast meets WCAG AA standards using a validation tool, and create a focus-visible style for keyboard navigation.',

    objectiveAr: 'قم بإنشاء Style focus-visible that improves keyboard navigation accessibility',

    lessonEn:

      'Accessibility in CSS involves color contrast, focus styles, and respecting user preferences like reduced motion. WCAG AA contrast ratios ensure content is perceivable for users with visual impairments.',

    lessonAr:

      'التوفر في CSS Involves color contrast, focus styles, and respecting user preferences like reduced motion. WCAG AA contrast ratios ensure content is perceivable for users with visual impairments.',

    tasks: [

      {

        en: 'Test color contrast using the WebAIM contrast checker',

        ar: 'Test color contrast using the WebAIM contrast checker'

      },

      {

        en: 'Create a focus-visible style that improves keyboard navigation',

        ar: 'Create a focus-visible style that improves keyboard navigation'

      },

      {

        en: 'Test a real webpage with a screen reader and report navigation order',

        ar: 'Test a real webpage with a screen reader and report navigation order'

      },

      {

        en: 'Set a prefers-reduced-motion media query to disable non-essential animations',

        ar: 'Set a prefers-reduced-motion media query to disable non-essential animations'

      }

    ],

    exerciseEn: 'Add accessible color contrast and focus-visible styles to a button component.',

    exerciseAr: 'Add accessible color contrast and focus-visible styles to a button component.',

    deliverableEn: 'A button component with WCAG AA contrast and focus-visible styles.',

    deliverableAr: 'A button component with WCAG AA contrast and focus-visible styles.',

    resources: [

      {

        title: 'WebAIM',

        url: 'https://webaim.org/resources/contrast/',

        kind: 'official'

      },

      {

        title: 'MDN Focus-visible',

        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible',

        kind: 'official'

      }

    ],

    challengeEn: 'Audit a webpage for color contrast and add focus styles.',

    challengeAr: 'مراجعة صفحة ويب لتباين اللون وإضافة styles focus.',

    prerequisites: [],

    criteriaEn: ['Can test color contrast', 'Can add focus-visible styles'],

    criteriaAr: ['Can test color contrast', 'Can add focus-visible styles']

  },

  {

    dayNumber: 234,

    phaseSlug: 'typescript-testing-security',

    kind: 'lesson' as const,

    titleEn: 'Performance Optimization',

    titleAr: 'تحسين الأداء',

    topic: 'TypeScript',

    estimatedMinutes: 90,

    objectiveEn: 'Implement will-change and content-visibility to improve rendering performance on complex pages.',

    objectiveAr: 'قم بتنفيذ will-change and content-visibility to improve rendering performance on complex pages',

    lessonEn:

      'The will-change property hints to the browser which properties will change, allowing it to optimize ahead of time. content-visibility is a powerful tool for skipping layout and paint work for off-screen content.',

    lessonAr:

      'will-change يتم إرشاد المتصفح لتغيير الخصائص، allowing it to optimize ahead of time. content-visibility is a powerful tool for skipping layout and paint work for off-screen content.',

    tasks: [

      {

        en: 'Implement will-change on a frequently animated element',

        ar: 'Implement will-change on a frequently animated element'

      },

      {

        en: 'Apply content-visibility to a large off-screen image gallery',

        ar: 'Apply content-visibility to a large off-screen image gallery'

      },

      {

        en: 'Measure page load performance before and after optimization',

        ar: 'Measure page load performance before and after optimization'

      },

      {

        en: 'Identify long tasks using the Performance API',

        ar: 'Identify long tasks using the Performance API'

      }

    ],

    exerciseEn: 'Add will-change and content-visibility to a product grid component.',

    exerciseAr: 'Add will-change and content-visibility to a product grid component.',

    deliverableEn: 'A product grid with performance optimizations.',

    deliverableAr: 'A product grid with performance optimizations.',

    resources: [

      {

        title: 'MDN',

        url: 'https://developer.mozilla.org/en-US/docs',

        kind: 'official'

      },

      {

        title: 'HTML5 Rocks',

        url: 'https://www.html5rocks.com/en/tutorials/performance/content-visibility/',

        kind: 'reference'

      }

    ],

    challengeEn: 'Implement content-visibility on a section of your site and measure the impact.',

    challengeAr: 'Implement content-visibility on a section of your site and measure the impact.',

    prerequisites: [],

    criteriaEn: ['Can implement will-change', 'Can apply content-visibility'],

    criteriaAr: ['Can implement will-change', 'Can apply content-visibility']

  },

  {

    dayNumber: 235,

    phaseSlug: 'typescript-testing-security',

    kind: 'lesson' as const,

    titleEn: 'CSS Architecture Best Practices',

    titleAr: 'أفضل الممارسات لهندسة CSS',

    topic: 'TypeScript',

    estimatedMinutes: 90,

    objectiveEn: 'Organize CSS using BEM methodology, partials, and modular components for maintainability.',

    objectiveAr: 'نظم CSS باستخدام BEM methodology, partials, and modular components for maintainability',

    lessonEn:

      'Maintainable CSS architecture relies on naming conventions (BEM), partials/partials, and modular components. This makes styles reusable, predictable, and easier to scale across a large codebase.',

    lessonAr:

      'هندسة أنماط قابلة للصيانة تعتمد على قواعد التسمية (BEM), partials/partials, and modular components. This makes styles reusable, predictable, and easier to scale across a large codebase.',

    tasks: [

      {

        en: 'Refactor a CSS file using BEM naming conventions',

        ar: 'Refactor a CSS file using BEM naming conventions'

      },

      {

        en: 'Organize CSS into partials imported via @import or @use',

        ar: 'Organize CSS into partials imported via @import or @use'

      },

      {

        en: 'Create a modular component with scoped CSS',

        ar: 'Create a modular component with scoped CSS'

      },

      {

        en: 'Document your CSS architecture and naming conventions',

        ar: 'Document your CSS architecture and naming conventions'

      }

    ],

    exerciseEn: 'Refactor existing CSS to use BEM and partials.',

    exerciseAr: 'Refactor existing CSS to use BEM and partials.',

    deliverableEn: 'A BEM-structured CSS architecture document.',

    deliverableAr: 'A BEM-structured CSS architecture document.',

    resources: [

      {

        title: 'Smashing Magazine',

        url: 'https://www.smashingmagazine.com/2018/01/writing-maintainable-css/',

        kind: 'reference'

      },

      {

        title: 'BEM Methodology',

        url: 'https://getbem.com/',

        kind: 'reference'

      }

    ],

    challengeEn: 'Refactor a legacy CSS file using BEM and document your conventions.',

    challengeAr: 'Refactor a legacy CSS file using BEM and document your conventions.',

    prerequisites: [],

    criteriaEn: ['Can refactor to BEM', 'Can organize partials'],

    criteriaAr: ['Can refactor to BEM', 'Can organize partials']

  },

  {

    dayNumber: 236,

    phaseSlug: 'typescript-testing-security',

    kind: 'lesson' as const,

    titleEn: 'CSS Scrollbar Styling',

    titleAr: 'تنسيق شريط التمرير في CSS',

    topic: 'TypeScript',

    estimatedMinutes: 90,

    objectiveEn: 'Style the scrollbar using ::-webkit-scrollbar and ::-webkit-scrollbar-thumb for cross-browser consistency while maintaining accessibility.',

    objectiveAr: 'قم بتنسيق scrollbar باستخدام ::-webkit-scrollbar and ::-webkit-scrollbar-thumb for cross-browser consistency while maintaining accessibility',

    lessonEn:

      'Styling the scrollbar with CSS pseudo-elements works in WebKit-based browsers. A consistent, accessible scrollbar design improves UX without impacting document flow or screen reader behavior.',

    lessonAr:

      'Styling the scrollbar with CSS pseudo-elements works in WebKit-based browsers. A consistent, accessible scrollbar design improves UX without impacting document flow or screen reader behavior.',

    tasks: [

      {

        en: 'Style the scrollbar using ::-webkit-scrollbar, ::-webkit-scrollbar-track, and ::-webkit-scrollbar-thumb',

        ar: 'Style the scrollbar using ::-webkit-scrollbar, ::-webkit-scrollbar-track, and ::-webkit-scrollbar-thumb'

      },

      {

        en: 'Ensure the scrollbar thumb has a minimum contrast ratio of 3:1 against the track',

        ar: 'Ensure the scrollbar thumb has a minimum contrast ratio of 3:1 against the track'

      },

      {

        en: 'Test scrollbar styling across Chrome, Firefox, and Edge',

        ar: 'Test scrollbar styling across Chrome, Firefox, and Edge'

      },

      {

        en: 'Add a preference-reduced-motion fallback for scrollbar animations',

        ar: 'Add a preference-reduced-motion fallback for scrollbar animations'

      }

    ],

    exerciseEn: 'Style the scrollbar on a long practice page.',

    exerciseAr: 'Style the scrollbar on a long practice page.',

    deliverableEn: 'A custom-styled scrollbar that matches the design system.',

    deliverableAr: 'A custom-styled scrollbar that matches the design system.',

    resources: [

      {

        title: 'CSS Tricks',

        url: 'https://css-tricks.com/almanac/properties/s/scrollbar/',

        kind: 'reference'

      },

      {

        title: 'MDN',

        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS::-webkit-scrollbar',

        kind: 'official'

      }

    ],

    challengeEn: 'Style a scrollbar to match your design system's color palette.',

    challengeAr: 'Style a scrollbar to match your design system's color palette.',

    prerequisites: [],

    criteriaEn: ['Can style the scrollbar', 'Can ensure accessibility contrast'],

    criteriaAr: ['Can style the scrollbar', 'Can ensure accessibility contrast']

  },

  {

    dayNumber: 237,

    phaseSlug: 'typescript-testing-security',

    kind: 'lesson' as const,

    titleEn: 'CSS Animation and Keyframes',

    titleAr: 'الAnimation و keyframes في CSS',

    topic: 'TypeScript',

    estimatedMinutes: 90,

    objectiveEn: 'Create a CSS animation keyframes sequence that respects the prefers-reduced-motion accessibility preference, providing hover states with transform transitions for visual feedback.',

    objectiveAr: 'قم بإنشاء تسلسل keyframes animation that respects the prefers-reduced-motion accessibility preference, providing hover states with transform transitions for visual feedback.',

    lessonEn:

      'CSS animations bring UI to life, but must respect user preferences. Using prefers-reduced-motion ensures that users with motion sensitivities are not disrupted. Transform transitions on hover provide visual feedback without triggering motion sensitivity.',

    lessonAr:

      'CSS animations bring UI to life, but must respect user preferences. Using prefers-reduced-motion ensures that users with motion sensitivities are not disrupted. Transform transitions on hover provide visual feedback without triggering motion sensitivity.',

    tasks: [

      {

        en: 'Create a keyframes animation that fades and scales an element',

        ar: 'Create a keyframes animation that fades and scales an element'

      },

      {

        en: 'Add a hover state with transform transition for visual feedback',

        ar: 'Add a hover state with transform transition for visual feedback'

      },

      {

        en: 'Add @media (prefers-reduced-motion: no-preference) to enable animations',

        ar: 'Add @media (prefers-reduced-motion: no-preference) to enable animations'

      },

      {

        en: 'Test animation accessibility with screen reader users',

        ar: 'Test animation accessibility with screen reader users'

      }

    ],

    exerciseEn: 'Create a hover animation that respects prefers-reduced-motion.',

    exerciseAr: 'Create a hover animation that respects prefers-reduced-motion.',

    deliverableEn: 'A CSS animation keyframes sequence with a hover state and reduced-motion fallback.',

    deliverableAr: 'A CSS animation keyframes sequence with a hover state and reduced-motion fallback.',

    resources: [

      {

        title: 'MDN',

        url: 'https://developer.mozilla.org/en-US/docs',

        kind: 'official'

      },

      {

        title: 'CSS Animation',

        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation',

        kind: 'official'

      }

    ],

    challengeEn: 'Create a hover state with transform transition and prefers-reduced-motion fallback.',

    challengeAr: 'Create a hover animation that respects prefers-reduced-motion.',

    prerequisites: [],

    criteriaEn: ['Can create keyframes animation', 'Can add prefers-reduced-motion fallback'],

    criteriaAr: ['Can create keyframes animation', 'Can add prefers-reduced-motion fallback']

  },

  {

    dayNumber: 238,

    phaseSlug: 'typescript-testing-security',

    kind: 'lesson' as const,

    titleEn: 'CSS Grid Advanced Layout',

    titleAr: 'CSS Grid Layout متقدم',

    topic: 'TypeScript',

    estimatedMinutes: 90,

    objectiveEn: 'Build a complex page layout using CSS Grid with named areas, automatic tracks, and responsive behavior.',

    objectiveAr: 'بني تخطيط صفحة معقدة باستخدام CSS Grid with named areas and automatic tracks وسلوكيات responsive',

    lessonEn:

      'CSS Grid is the most powerful layout mechanism available in modern CSS. Named areas, automatic tracks, and the dense keyword enable complex, responsive grid layouts that adapt to any screen size.',

    lessonAr:

      'CSS Grid هو آلية التخطيط الأكثر قوة المتاحة في CSS الحديث. named areas, automatic tracks, and the dense keyword enable complex, responsive grid layouts that adapt to any screen size.',

    tasks: [

      {

        en: 'Build a complex page layout using CSS Grid with named areas',

        ar: 'Build a complex page layout using CSS Grid with named areas'

      },

      {

        en: 'Implement masonry grid layout using CSS Grid and the dense keyword',

        ar: 'Implement masonry grid layout using CSS Grid and the dense keyword'

      },

      {

        en: 'Make the grid responsive using auto-fit and minmax()',

        ar: 'Make the grid responsive using auto-fit and minmax()'

      },

      {

        en: 'Test the grid layout across breakpoints and report findings',

        ar: 'Test the grid layout across breakpoints and report findings'

      }

    ],

    exerciseEn: 'Build a product grid layout using CSS Grid with named areas and auto-fit.',

    exerciseAr: 'Build a product grid layout using CSS Grid with named areas and auto-fit.',

    deliverableEn: 'A CSS Grid layout for a product gallery with named areas and auto-fit.',

    deliverableAr: 'A CSS Grid layout for a product gallery with named areas and auto-fit.',

    resources: [

      {

        title: 'CSS Tricks',

        url: 'https://css-tricks.com/snippets/css/complete-grid/',

        kind: 'reference'

      },

      {

        title: 'MDN',

        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid',

        kind: 'official'

      }

    ],

    challengeEn: 'Build a responsive dashboard layout using CSS Grid with named areas.',

    challengeAr: 'Build a responsive dashboard layout using CSS Grid with named areas.',

    prerequisites: [],

    criteriaEn: ['Can build a CSS Grid layout', 'Can use auto-fit and minmax()'],

    criteriaAr: ['Can build a CSS Grid layout', 'Can use auto-fit and minmax()']

  },

  {

    dayNumber: 239,

    phaseSlug: 'typescript-testing-security',

    kind: 'lesson' as const,

    titleEn: 'CSS Container Queries',

    titleAr: 'استعلامات الحاوية في CSS',

    topic: 'TypeScript',

    estimatedMinutes: 90,

    objectiveEn: 'Implement container queries to create truly component-based responsive designs that respond to parent container size, not just viewport.',

    objectiveAr: 'قم بتنفيذ container queries لإنشاء designs responsive truly component-based that respond to parent container size, not just viewport',

    lessonEn:

      'Container queries enable component-based responsiveness by reacting to the parent container's size rather than the viewport. This is the future of modular, reusable UI components.',

    lessonAr:

      'container queries enable component-based responsiveness by reacting to the parent container size rather than the viewport. This is the future of modular, reusable UI components.',

    tasks: [

      {

        en: 'Implement a container query using @container',

        ar: 'Implement a container query using @container'

      },

      {

        en: 'Build a component library that adapts based on container width',

        ar: 'Build a component library that adapts based on container width'

      },

      {

        en: 'Test component rendering at different container sizes',

        ar: 'Test component rendering at different container sizes'

      },

      {

        en: 'Combine container queries with CSS custom properties for theming',

        ar: 'Combine container queries with CSS custom properties for theming'

      }

    ],

    exerciseEn: 'Implement a container query to change component layout based on width.',

    exerciseAr: 'Implement a container query to change component layout based on width.',

    deliverableEn: 'A component using container queries to adapt its layout.',

    deliverableAr: 'A component using container queries to adapt its layout.',

    resources: [

      {

        title: 'MDN',

        url: 'https://developer.mozilla.org/en-US/docs',

        kind: 'official'

      },

      {

        title: 'Eric Portis - Container Queries',

        url: 'https://www.joshwcomeau.com/css/container-queries/',

        kind: 'reference'

      }

    ],

    challengeEn: 'Implement a container query to change a component's layout at a specific breakpoint.',

    challengeAr: 'Implement a container query to change a component layout at a specific breakpoint.',

    prerequisites: [],

    criteriaEn: ['Can implement a container query', 'Can build a responsive component library'],

    criteriaAr: ['Can implement a container query', 'Can build a responsive component library']

  },

  {

    dayNumber: 240,

    phaseSlug: 'typescript-testing-security',

    kind: 'lesson' as const,

    titleEn: 'CSS Filter Effects',

    titleAr: 'تأثيرات الفلتر في CSS',

    topic: 'TypeScript',

    estimatedMinutes: 90,

    objectiveEn: 'Apply CSS filter effects (blur, brightness, contrast) to create visual enhancements without impacting document flow.',

    objectiveAr: 'قم بتطبيق effect CSS filter (blur, brightness, contrast) لإنشاء enhancements مرئية without impacting document flow',

    lessonEn:

      'CSS filter effects (blur(), brightness(), contrast()) allow visual enhancements to be applied directly in the browser without modifying the document structure or requiring JavaScript.',

    lessonAr:

      'CSS filter effects (blur(), brightness(), contrast()) allow visual enhancements to be applied directly in the browser without modifying the document structure or requiring JavaScript.',

    tasks: [

      {

        en: 'Apply blur(), brightness(), and contrast() filter effects',

        ar: 'Apply blur(), brightness(), and contrast() filter effects'

      },

      {

        en: 'Combine multiple filter functions for complex visual effects',

        ar: 'Combine multiple filter functions for complex visual effects'

      },

      {

        en: 'Test filter effects across browser compatibility',

        ar: 'Test filter effects across browser compatibility'

      },

      {

        en: 'Add a prefers-reduced-motion fallback for filter animations',

        ar: 'Add a prefers-reduced-motion fallback for filter animations'

      }

    ],

    exerciseEn: 'Apply CSS filter effects to an image gallery.',

    exerciseAr: 'Apply CSS filter effects to an image gallery.',

    deliverableEn: 'An image gallery with CSS filter effects.',

    deliverableAr: 'An image gallery with CSS filter effects.',

    resources: [

      {

        title: 'MDN',

        url: 'https://developer.mozilla.org/en-US/docs',

        kind: 'official'

      },

      {

        title: 'CSS Filters',

        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter',

        kind: 'official'

      }

    ],

    challengeEn: 'Apply multiple filter effects to create a visually enhanced image gallery.',

    challengeAr: 'Apply multiple filter effects to create a visually enhanced image gallery.',

    prerequisites: [],

    criteriaEn: ['Can apply CSS filter effects', 'Can test browser compatibility'],

    criteriaAr: ['Can apply CSS filter effects', 'Can test browser compatibility']

  }]