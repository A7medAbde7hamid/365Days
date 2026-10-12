import type { CurriculumDay } from '../types'

const MDN = 'https://developer.mozilla.org/en-US/docs'

/** Phase 7 — Testing & QA (days 181–210). */
export const PHASE_7_DAYS: CurriculumDay[] = [
  {
    dayNumber: 181,
    phaseSlug: 'testing-qa',
    kind: 'lesson' as const,
    titleEn: 'Introduction to Testing',
    titleAr: 'Introduction to Testing',
    topic: 'Testing',
    estimatedMinutes: 90,
    objectiveEn: 'Understand the testing pyramid, unit vs integration vs end-to-end tests, and the test lifecycle.',
    objectiveAr: 'Understand the testing pyramid, unit vs integration vs end-to-end tests, and the test lifecycle.',
    lessonEn:
      'Testing follows a pyramid: unit tests at the base, integration tests in the middle, and end-to-end tests at the top. Unit tests are fast and isolated; integration tests verify interactions; E2E tests validate the full user journey. The test lifecycle includes setup, execution, and teardown.',
    lessonAr:
      'الاختبار يتبع الهرم: اختبارات الوحدة في القاعد، واختبارات التكامل في المنتصف، واختبارات النهاية إلى النهاية في الأعلى. اختبارات الوحدة سريعة ومعزولة، واختبارات التكامل تتحقق من التفاعلات، واختبارات النهاية إلى النهاية تحقق رحلة المستخدم الكاملة. يشمل دورة حياة الاختبار الإعداد والتنفيذ والإلغاء.',
    tasks: [
      {
        en: 'Identify which type of test (unit, integration, E2E) fits a given scenario',
        ar: 'Identify which type of test (unit, integration, E2E) fits a given scenario'
      },
      {
        en: 'Write a simple unit test for a function',
        ar: 'Write a simple unit test for a function'
      },
      {
        en: 'Describe the testing pyramid and when to use each level',
        ar: 'Describe the testing pyramid and when to use each level'
      },
      {
        en: 'Set up the test lifecycle: beforeEach, afterEach, beforeAll, afterAll',
        ar: 'Set up the test lifecycle: beforeEach, afterEach, beforeAll, afterAll'
      }
    ],
    exerciseEn: 'Classify three different scenarios into unit, integration, and E2E tests.',
    exerciseAr: 'Classify three different scenarios into unit, integration, and E2E tests.',
    deliverableEn: 'A classification of three scenarios by test type.',
deliverableAr: 'Classification of three scenarios by test type.',
    resources: [
      { title: 'Testing Pyramid guide', url: 'https://martinfowler.com/bliki/testingPyramid.html', kind: 'reference' }
    ],
    challengeEn: 'Write a test that sets up data in beforeEach and verifies it in afterEach',
    challengeAr: 'Write a test that sets up data in beforeEach and verifies it in afterEach',
    prerequisites: [],
    criteriaEn: ['Can identify test types', 'Can write a unit test', 'Can describe the pyramid'],
    criteriaAr: ['Can identify test types', 'Can write a unit test', 'Can describe the pyramid']
  },
  {
    dayNumber: 182,
    phaseSlug: 'testing-qa',
    kind: 'lesson' as const,
    titleEn: 'Unit Testing Fundamentals',
    titleAr: 'Unit Testing Fundamentals',
    topic: 'Testing',
    estimatedMinutes: 90,
    objectiveEn: 'Write unit tests with describe, it, and expect, and use mocks for dependencies.',
    objectiveAr: 'Write unit tests with describe, it, and expect, and use mocks for dependencies.',
    lessonEn:
      'Unit tests isolate a small piece of code and verify its behavior. Use describe to group tests, it to define a test case, and expect to make assertions. Use jest.fn() or mock libraries to mock dependencies.',
    lessonAr:
      'اختبارات الوحدة تعزل قطعة صغيرة من الكود وتتحقق من سلوكها. استخدم describe لتجميع الاختبارات، it لتحديد حالة اختبار، و expect للمطالبات. استخدم jest.fn() أو مكتباتmock للمdependencies.',
    tasks: [
      {
        en: 'Write a unit test for a function that adds two numbers',
        ar: 'Write a unit test for a function that adds two numbers'
      },
      {
        en: 'Use a mock to isolate the function from its dependencies',
        ar: 'Use a mock to isolate the function from its dependencies'
      },
      {
        en: 'Use describe to group related tests',
        ar: 'Use describe to group related tests'
      },
      {
        en: 'Use expect with matchers like toBe, toEqual, toBeNull',
        ar: 'Use expect with matchers like toBe, toEqual, toBeNull'
      }
    ],
    exerciseEn: 'Write a unit test suite for a calculator module.',
    exerciseAr: 'Write a unit test suite for a calculator module.',
    deliverableEn: 'A unit test suite for a calculator with at least three test cases.',
deliverableAr: 'Unit test suite calculator with at least three test cases.',
    resources: [
      { title: 'Vitest docs', url: 'https://vitest.dev/', kind: 'official' }
    ],
    challengeEn: 'Write a test that mocks a database call and verifies the function still works',
    challengeAr: 'Write a test that mocks a database call and verifies the function still works',
    prerequisites: [181],
    criteriaEn: ['Can write a test with describe/it/expect', 'Can use a mock', 'Can use matchers'],
    criteriaAr: ['Can write a test with describe/it/expect', 'Can use a mock', 'Can use matchers']
  },
  {
    dayNumber: 183,
    phaseSlug: 'testing-qa',
    kind: 'project' as const,
    titleEn: 'Unit Test Suite for API Handler',
    titleAr: 'Unit Test Suite for API Handler',
    topic: 'Testing project',
    estimatedMinutes: 120,
    objectiveEn: 'Build a unit test suite for an API handler that validates requests and responses.',
    objectiveAr: 'Build a unit test suite for an API handler that validates requests and responses.',
    lessonEn:
      'API handlers benefit from unit tests that verify request validation, response shaping, and error handling. Use mock objects to simulate the request and response, and test each branch of the handler.',
    lessonAr:
      'API handlers benefit from unit tests that verify request validation, response shaping, and error handling. Use mock objects to simulate the request and response, and test each branch of the handler.',
    tasks: [
      {
        en: 'Write a unit test for a GET handler that returns user data',
        ar: 'Write a unit test for a GET handler that returns user data'
      },
      {
        en: 'Write a unit test for a POST handler that validates input and returns 400 on failure',
        ar: 'Write a unit test for a POST handler that validates input and returns 400 on failure'
      },
      {
        en: 'Use a mock to simulate the request object',
        ar: 'Use a mock to simulate the request object'
      },
      {
        en: 'Use a mock to simulate the response object and verify the body',
        ar: 'Use a mock to simulate the response object and verify the body'
      }
    ],
    exerciseEn: 'Build a unit test suite for an API handler with at least four test cases.',
    exerciseAr: 'Build a unit test suite for an API handler with at least four test cases.',
    deliverableEn: 'A unit test suite for an API handler with four test cases.',
deliverableAr: 'Unit test suite API handler with four test cases.',
    resources: [
      { title: 'Vitest docs', url: 'https://vitest.dev/', kind: 'official' }
    ],
    challengeEn: 'Add a test that verifies the error handler returns the correct status code',
    challengeAr: 'Add a test that verifies the error handler returns the correct status code',
    prerequisites: [182],
    criteriaEn: ['GET handler test works', 'POST handler validates input', 'Mock request object', 'Mock response body verified'],
    criteriaAr: ['GET handler test works', 'POST handler validates input', 'Mock request object', 'Mock response body verified']
  },
  {
    dayNumber: 184,
    phaseSlug: 'testing-qa',
    kind: 'lesson' as const,
    titleEn: 'Integration Testing Fundamentals',
    titleAr: 'Integration Testing Fundamentals',
    topic: 'Testing',
    estimatedMinutes: 90,
    objectiveEn: 'Write integration tests that spin up a real server and test API endpoints.',
    objectiveAr: 'Write integration tests that spin up a real server and test API endpoints.',
    lessonEn:
      'Integration tests start the real server and hit real endpoints. Use supertest to make requests. Test happy paths and error cases. Clean up the database after each test. Aim for fast feedback; keep integration tests separate from unit tests.',
    lessonAr:
      'Integration tests تبدأ التشغيل الخادم وترسل طلبات للمنفذ الحقيقي. استخدم supertest لإرسال طلبات. اختبر الحالات happy paths والأخطاء. أنهِ قاعدة البيانات بعد كل اختبار. احتفظ بالاختبارات التكامل سريعة؛ وفصلها عن الاختبارات الوحدات.',
    tasks: [
      {
        en: 'Install supertest and write a test that GET /health returns 200',
        ar: 'Install supertest and write a test that GET /health returns 200'
      },
      {
        en: 'Write a test that POST /login fails with invalid credentials',
        ar: 'Write a test that POST /login fails with invalid credentials'
      },
      {
        en: 'Use beforeEach to reset the database state before each test',
        ar: 'Use beforeEach to reset the database state before each test'
      },
      {
        en: 'Assert response headers and JSON body shape',
        ar: 'Assert response headers and JSON body shape'
      }
    ],
    exerciseEn: 'Write an integration test suite for an auth API (register, login, protected route).',
    exerciseAr: 'Write an integration test suite for an auth API (register, login, protected route).',
    deliverableEn: 'A Vitest test file that covers the auth API endpoints.',
deliverableAr: 'Vitest test file that covers the auth API endpoints.',
    resources: [
      { title: 'supertest', url: 'https://github.com/visionmedia/supertest', kind: 'reference' },
      { title: 'Vitest docs', url: 'https://vitest.dev/', kind: 'official' }
    ],
    challengeEn: 'Write an integration test that a deprecated endpoint returns 410 Gone',
    challengeAr: 'Write an integration test that a deprecated endpoint returns 410 Gone',
    prerequisites: [183],
    criteriaEn: ['supertest installed', 'Test covers register/login/protected', 'Database reset with beforeEach'],
    criteriaAr: ['supertest已安装', 'Test covers register/login/protected', 'Database reset with beforeEach']
  },
  {
    dayNumber: 185,
    phaseSlug: 'testing-qa',
    kind: 'project' as const,
    titleEn: 'Integration Test Suite for Full API',
    titleAr: 'Integration Test Suite for Full API',
    topic: 'Testing project',
    estimatedMinutes: 120,
    objectiveEn: 'Write an integration test suite that covers the full API: auth, rate limiting, and WebSocket events.',
    objectiveAr: 'Write an integration test suite that covers the full API: auth, rate limiting, and WebSocket events.',
    lessonEn:
      'A full API integration test suite covers all endpoints and verifies they work together. Include tests for auth, rate-limited routes, and WebSocket event broadcasting. Use beforeEach to reset state and afterEach to clean up.',
    lessonAr:
      'Full API integration test suite covers all endpoints and verifies they work together. Include tests for auth, rate-limited routes, and WebSocket event broadcasting. Use beforeEach to reset state and afterEach to clean up.',
    tasks: [
      {
        en: 'Write integration tests for the auth API (register, login, protected route)',
        ar: 'Write integration tests for the auth API (register, login, protected route)'
      },
      {
        en: 'Write integration tests for rate-limited endpoints',
        ar: 'Write integration tests for rate-limited endpoints'
      },
      {
        en: 'Write WebSocket integration tests for event broadcasting',
        ar: 'Write integration tests for WebSocket event broadcasting'
      },
      {
        en: 'Use beforeEach to reset state and afterEach to clean up',
        ar: 'Use beforeEach to reset state and afterEach to clean up'
      }
    ],
    exerciseEn: 'Write a full integration test suite covering auth, rate limiting, and WebSocket.',
    exerciseAr: 'Write a full integration test suite covering auth, rate limiting, and WebSocket.',
    deliverableEn: 'A Vitest test file covering auth, rate limiting, and WebSocket.',
deliverableAr: 'Vitest test file covering auth, rate limiting, and WebSocket',
    resources: [
      { title: 'supertest', url: 'https://github.com/visionmedia/supertest', kind: 'reference' },
      { title: 'Vitest docs', url: 'https://vitest.dev/', kind: 'official' }
    ],
    challengeEn: 'Write a test that verifies a WebSocket broadcast is received by all connected clients',
    challengeAr: 'Write a test that verifies a WebSocket broadcast is received by all connected clients',
    prerequisites: [184],
    criteriaEn: ['Auth tests cover register/login/protected', 'Rate-limited tests pass', 'WebSocket broadcast test'],
    criteriaAr: ['Auth tests cover register/login/protected', 'Rate-limited tests pass', 'WebSocket broadcast test']
  },
  {
    dayNumber: 186,
    phaseSlug: 'testing-qa',
    kind: 'lesson' as const,
    titleEn: 'End-to-End Testing Fundamentals',
    titleAr: 'End-to-End Testing Fundamentals',
    topic: 'Testing',
    estimatedMinutes: 90,
    objectiveEn: 'Understand E2E testing with Playwright or Cypress, and the benefits of full browser automation.',
    objectiveAr: 'Understand E2E testing with Playwright or Cypress, and the benefits of full browser automation.',
    lessonEn:
      'E2E tests run the app in a real browser and simulate user interactions. Use Playwright or Cypress to navigate, click, fill forms, and assert outcomes. E2E tests are slower but validate the full user journey including UI, backend, and database.',
    lessonAr:
      'E2E tests run the app في browser حقيقي وتقلد تفاعلات المستخدم. استخدم Playwright أو Cypress للتنقل، النقر، تعبئة النماذج، وAssert النتائج. E2E tests are slower but validate the full user journey including UI, backend, and database.',
    tasks: [
      {
        en: 'Install Playwright and write a test that navigates to the homepage and clicks a button',
        ar: 'Install Playwright and write a test that navigates to the homepage and clicks a button'
      },
      {
        en: 'Use Playwright to fill a form and submit it',
        ar: 'Use Playwright to fill a form and submit it'
      },
      {
        en: 'Assert the resulting page contains expected text',
        ar: 'Assert the resulting page contains expected text'
      },
      {
        en: 'Describe the benefits of E2E testing vs unit/integration testing',
        ar: 'Describe the benefits of E2E testing vs unit/integration testing'
      }
    ],
    exerciseEn: 'Write an E2E test that navigates through a user flow and verifies the outcome.',
    exerciseAr: 'Write an E2E test that navigates through a user flow and verifies the outcome.',
    deliverableEn: 'An E2E test that navigates a user flow and verifies the outcome.',
deliverableAr: 'E2E test that navigates a user flow and verifies the outcome.',
    resources: [
      { title: 'Playwright docs', url: 'https://playwright.dev/docs/', kind: 'official' }
    ],
    challengeEn: 'Write an E2E test that logs in, performs an action, and verifies the result',
    challengeAr: 'Write an E2E test that logs in, performs an action, and verifies the result',
    prerequisites: [185],
    criteriaEn: ['Playwright installed', 'Test navigates to homepage', 'Form filled and submitted', 'Expected text asserted'],
    criteriaAr: ['Playwright installed', 'Test navigates to homepage', 'Form filled and submitted', 'Expected text asserted']
  },
  {
    dayNumber: 187,
    phaseSlug: 'testing-qa',
    kind: 'project' as const,
    titleEn: 'Full E2E Test Suite',
    titleAr: 'Full E2E Test Suite',
    topic: 'Testing project',
    estimatedMinutes: 120,
    objectiveEn: 'Write a complete E2E test suite that covers the full user journey: onboarding, login, feature usage, and logout.',
    objectiveAr: 'Write a complete E2E test suite that covers the full user journey: onboarding, login, feature usage, and logout.',
    lessonEn:
      'A complete E2E test suite covers the entire user journey from onboarding to logout. Include tests for account creation, login, using the main feature, and logging out. Use fixtures for test data and screenshots for visual regression.',
    lessonAr:
      'Complete E2E test suite covers the entire user journey from onboarding to logout. Include tests for account creation, login, using the main feature, and logging out. Use fixtures for test data and screenshots for visual regression.',
    tasks: [
      {
        en: 'Write an E2E test for account creation with valid data',
        ar: 'Write an E2E test for account creation with valid data'
      },
      {
        en: 'Write an E2E test for login with valid credentials',
        ar: 'Write an E2E test for login with valid credentials'
      },
      {
        en: 'Write an E2E test for using the main feature after login',
        ar: 'Write an E2E test for using the main feature after login'
      },
      {
        en: 'Write an E2E test for logout and verification of logged-out state',
        ar: 'Write an E2E test for logout and verification of logged-out state'
      }
    ],
    exerciseEn: 'Write a complete E2E test suite covering onboarding, login, feature usage, and logout.',
    exerciseAr: 'Write a complete E2E test suite covering onboarding, login, feature usage, and logout.',
    deliverableEn: 'A complete E2E test suite covering onboarding to logout.',
deliverableAr: 'Complete E2E test suite covering onboarding to logout.',
    resources: [
      { title: 'Playwright docs', url: 'https://playwright.dev/docs/', kind: 'official' }
    ],
    challengeEn: 'Add a screenshot at each step of the user journey for visual regression',
    challengeAr: 'Add a screenshot at each step of the user journey for visual regression',
    prerequisites: [186],
    criteriaEn: ['E2E test for account creation', 'E2E test for login', 'E2E test for feature usage', 'E2E test for logout'],
    criteriaAr: ['E2E test for account creation', 'E2E test for login', 'E2E test for feature usage', 'E2E test for logout']
  },
  {
    dayNumber: 188,
    phaseSlug: 'testing-qa',
    kind: 'lesson' as const,
    titleEn: 'Test Maintenance and Flaky Tests',
    titleAr: 'Test Maintenance and Flaky Tests',
    topic: 'Testing',
    estimatedMinutes: 90,
    objectiveEn: 'Identify and fix flaky tests, and implement strategies for reliable test suites.',
    objectiveAr: 'Identify and fix flaky tests, and implement strategies for reliable test suites.',
    lessonEn:
      'Flaky tests are tests that pass or fail randomly without code changes. Common causes include race conditions, improper test isolation, and external dependencies. Use retry strategies, improve isolation, and mock external services to reduce flakiness.',
    lessonAr:
      'Flaky tests are tests that pass or fail randomly without code changes. Common causes include race conditions, improper test isolation, and external dependencies. Use retry strategies, improve isolation, and mock external services to reduce flakiness.',
    tasks: [
      {
        en: 'Identify the cause of a flaky test in a given suite',
        ar: 'Identify the cause of a flaky test in a given suite'
      },
      {
        en: 'Implement a retry strategy for a flaky test',
        ar: 'Implement a retry strategy for a flaky test'
      },
      {
        en: 'Refactor a test to improve isolation',
        ar: 'Refactor a test to improve isolation'
      },
      {
        en: 'Mock external dependencies to reduce flakiness',
        ar: 'Mock external dependencies to reduce flakiness'
      }
    ],
    exerciseEn: 'Fix a flaky test in a test suite and document the fix.',
    exerciseAr: 'Fix a flaky test in a test suite and document the fix.',
    deliverableEn: 'A fixed test and a documentation of the fix.',
deliverableAr: 'Fixed test and documentation of the fix.',
    resources: []
  },
  {
    dayNumber: 189,
    phaseSlug: 'testing-qa',
    kind: 'project' as const,
    titleEn: 'Flaky Test Fix and Suite Refactoring',
    titleAr: 'Flaky Test Fix and Suite Refactoring',
    topic: 'Testing project',
    estimatedMinutes: 120,
    objectiveEn: 'Identify and fix all flaky tests in a suite, refactor for better isolation, and document the changes.',
    objectiveAr: 'Identify and fix all flaky tests in a suite, refactor for better isolation, and document the changes.',
    lessonEn:
      'A suite with flaky tests reduces confidence in the test results. Identify the root causes, refactor tests to improve isolation, add retry strategies where needed, and mock external services. Document all changes.',
    lessonAr:
      'A suite with flaky tests reduces confidence in the test results. Identify the root causes, refactor tests to improve isolation, add retry strategies where needed, and mock external services. Document all changes.',
    tasks: [
      {
        en: 'Identify three flaky tests and their root causes',
        ar: 'Identify three flaky tests and their root causes'
      },
      {
        en: 'Refactor each test to improve isolation',
        ar: 'Refactor each test to improve isolation'
      },
      {
        en: 'Add a retry strategy to any test that still flakes',
        ar: 'Add a retry strategy to any test that still flakes'
      },
      {
        en: 'Document the changes and verify the suite runs stable',
        ar: 'Document the changes and verify the suite runs stable'
      }
    ],
    exerciseEn: 'Fix all flaky tests and refactor the suite for reliability.',
    exerciseAr: 'Fix all flaky tests and refactor the suite for reliability.',
    deliverableEn: 'A stable test suite with documented fixes.',
deliverableAr: 'Stable test suite with documented fixes.',
    resources: []
  },
  {
    dayNumber: 190,
    phaseSlug: 'testing-qa',
    kind: 'lesson' as const,
    titleEn: 'Test Reporting and Analytics',
    titleAr: 'Test Reporting and Analytics',
    topic: 'Testing',
    estimatedMinutes: 90,
    objectiveEn: 'Generate test reports, track pass/fail rates over time, and use analytics to improve code quality.',
    objectiveAr: 'Generate test reports, track pass/fail rates over time, and use analytics to improve code quality.',
    lessonEn:
      'Test reports provide insights into code quality over time. Track pass/fail rates, flaky test rates, and code coverage. Use this data to prioritize refactoring and identify problematic areas.',
    lessonAr:
      'Test reports provide insights into code quality over time. Track pass/fail rates, flaky test rates, and code coverage. Use this data to prioritize refactoring and identify problematic areas.',
    tasks: [
      {
        en: 'Configure Vitest to generate an HTML report',
        ar: 'Configure Vitest to generate an HTML report'
      },
      {
        en: 'Track the pass rate over the last 10 runs',
        ar: 'Track the pass rate over the last 10 runs'
      },
      {
        en: 'Identify the most frequently failing tests',
        ar: 'Identify the most frequently failing tests'
      },
      {
        en: 'Use coverage data to prioritize refactoring areas',
        ar: 'Use coverage data to prioritize refactoring areas'
      }
    ],
    exerciseEn: 'Set up test reporting and identify areas for code improvement.',
    exerciseAr: 'Set up test reporting and identify areas for code improvement.',
    deliverableEn: 'A test report with pass/fail rates and coverage data.',
deliverableAr: 'Test report with pass/fail rates and coverage data.',
    resources: [
      { title: 'Vitest HTML report', url: 'https://vitest.dev/guide/report.html', kind: 'reference' }
    ],
    challengeEn: 'Set up an alert when the pass rate drops below 95%',
    challengeAr: 'Set up an alert when the pass rate drops below 95%',
    prerequisites: [188],
    criteriaEn: ['HTML report configured', 'Pass rate tracked', 'Failing tests identified', 'Coverage data available'],
    criteriaAr: ['HTML report configured', 'Pass rate tracked', 'Failing tests identified', 'Coverage data available']
  },
  {
    dayNumber: 191,
    phaseSlug: 'testing-qa',
    kind: 'project' as const,
    titleEn: 'Test Reporting Setup',
    titleAr: 'Test Reporting Setup',
    topic: 'Testing project',
    estimatedMinutes: 120,
    objectiveEn: 'Set up test reporting with Vitest HTML reports, track pass/fail rates, and configure alerts for low pass rates.',
    objectiveAr: 'Set up test reporting with Vitest HTML reports, track pass/fail rates, and configure alerts for low pass rates.',
    lessonEn:
      'A reporting setup provides visibility into test suite health. Configure Vitest HTML reports, set up CI integration to track pass rates over time, and add alerts when the pass rate drops below a threshold.',
    lessonAr:
      'A reporting setup provides visibility into test suite health. Configure Vitest HTML reports, set up CI integration to track pass rates over time, and add alerts when the pass rate drops below a threshold.',
    tasks: [
      {
        en: 'Configure Vitest HTML report in vite.config.ts',
        ar: 'Configure Vitest HTML report in vite.config.ts'
      },
      {
        en: 'Add a CI step to upload test reports',
        ar: 'Add a CI step to upload test reports'
      },
      {
        en: 'Set up an alert when the pass rate drops below 95%',
        ar: 'Set up an alert when the pass rate drops below 95%'
      },
      {
        en: 'Run the test suite and verify the report is generated',
        ar: 'Run the test suite and verify the report is generated'
      }
    ],
    exerciseEn: 'Set up test reporting and CI integration for pass rate tracking.',
    exerciseAr: 'Set up test reporting and CI integration for pass rate tracking.',
    deliverableEn: 'Test reporting setup with CI integration and alerts.',
deliverableAr: 'Test reporting setup with CI integration and alerts.',
    resources: [
      { title: 'Vitest HTML report', url: 'https://vitest.dev/guide/report.html', kind: 'reference' }
    ],
    challengeEn: 'Configure a Slack alert when pass rate drops below 90%',
    challengeAr: 'Configure a Slack alert when pass rate drops below 90%',
    prerequisites: [190],
    criteriaEn: ['HTML report configured', 'CI step added', 'Alert threshold set', 'Test suite runs in CI'],
    criteriaAr: ['HTML report configured', 'CI step added', 'Alert threshold set', 'Test suite runs in CI']
  },
  {
    phaseSlug: 'testing-qa',
    kind: 'lesson' as const,
    titleEn: 'Accessibility Testing',
    titleAr: 'Accessibility Testing',
    topic: 'Testing',
    estimatedMinutes: 90,
    objectiveEn: 'Write accessibility tests to verify ARIA labels, color contrast, and keyboard navigation.',
    objectiveAr: 'Write accessibility tests to verify ARIA labels, color contrast, and keyboard navigation.',
    lessonEn:
      'Accessibility ensures that applications are usable by people with disabilities. Use ARIA labels for screen readers, check color contrast ratios, and verify that all functionality is available via keyboard navigation.',
    lessonAr:
      'Accessibility ensures that applications are usable by people with disabilities. Use ARIA labels for screen readers, check color contrast ratios, and verify that all functionality is available via keyboard navigation.',
    tasks: [
      {
        en: 'Add ARIA labels to form inputs lacking them',
        ar: 'Add ARIA labels to form inputs lacking them'
      },
      {
        en: 'Check color contrast ratio meets WCAG AA standards',
        ar: 'Check color contrast ratio meets WCAG AA standards'
      },
      {
        en: 'Verify all functionality is available via keyboard (Tab navigation)',
        ar: 'Verify all functionality is available via keyboard (Tab navigation)'
      },
      {
        en: 'Run an accessibility audit using aXe or Lighthouse',
        ar: 'Run an accessibility audit using aXe or Lighthouse'
      }
    ],
    exerciseEn: 'Improve the accessibility of a form and run an audit.',
    exerciseAr: 'Improve the accessibility of a form and run an audit.',
    deliverableEn: 'A form with ARIA labels and an audit report.',
deliverableAr: 'Form with ARIA labels and an audit report.',
    resources: [
      { title: 'WCAG guidelines', url: 'https://www.w3.org/WAI/WCAG/', kind: 'reference' }
    ],
    challengeEn: 'Fix color contrast issues to meet WCAG AAA standards',
    challengeAr: 'Fix color contrast issues to meet WCAG AAA standards',
    prerequisites: [191],
    criteriaEn: ['ARIA labels added', 'Contrast meets WCAG AA', 'Keyboard navigation verified', 'Audit report generated'],
    criteriaAr: ['ARIA labels added', 'Contrast meets WCAG AA', 'Keyboard navigation verified', 'Audit report generated']
  },
  {
    dayNumber: 192,
    phaseSlug: 'testing-qa',
    kind: 'project' as const,
    titleEn: 'Accessibility Audit and Fixes',
    titleAr: 'Accessibility Audit and Fixes',
    topic: 'Testing project',
    estimatedMinutes: 120,
    objectiveEn: 'Run an accessibility audit, fix ARIA labels, color contrast, and keyboard navigation issues, and verify the fixes.',
    objectiveAr: 'Run an accessibility audit, fix ARIA labels, color contrast, and keyboard navigation issues, and verify the fixes.',
    lessonEn:
      'After running an audit, fix all identified issues: add missing ARIA labels, adjust colors to meet contrast standards, and ensure keyboard navigation works for all functionality. Re-run the audit to verify fixes.',
    lessonAr:
      'After running an audit, fix all identified issues: add missing ARIA labels, adjust colors to meet contrast standards, and ensure keyboard navigation works for all functionality. Re-run the audit to verify fixes.',
    tasks: [
      {
        en: 'Run Lighthouse accessibility audit and record the score',
        ar: 'Run Lighthouse accessibility audit and record the score'
      },
      {
        en: 'Add ARIA labels to form inputs that are missing them',
        ar: 'Add ARIA labels to form inputs that are missing them'
      },
      {
        en: 'Adjust colors to meet WCAG AA contrast ratio',
        ar: 'Adjust colors to meet WCAG AA contrast ratio'
      },
      {
        en: 'Verify keyboard navigation works for all interactive elements',
        ar: 'Verify keyboard navigation works for all interactive elements'
      },
      {
        en: 'Re-run the audit and verify the score improved',
        ar: 'Re-run the audit and verify the score improved'
      }
    ],
    exerciseEn: 'Fix all accessibility issues and verify the improved audit score.',
    exerciseAr: 'Fix all accessibility issues and verify the improved audit score.',
    deliverableEn: 'An accessibility audit with fixed issues and improved score.',
deliverableAr: 'Audit with fixed issues and improved score.',
    resources: [
      { title: 'Lighthouse docs', url: 'https://developers.google.com/web/tools/lighthouse', kind: 'reference' }
    ],
    challengeEn: 'Fix all color contrast issues to meet WCAG AAA for large text',
    challengeAr: 'Fix all color contrast issues to meet WCAG AAA for large text',
    prerequisites: [192],
    criteriaEn: ['Audit run and score recorded', 'ARIA labels added', 'Contrast adjusted to AA', 'Keyboard navigation verified', 'Re-audit shows improvement'],
    criteriaAr: ['Audit run and score recorded', 'ARIA labels added', 'Contrast adjusted to AA', 'Keyboard navigation verified', 'Re-audit shows improvement']
  },
  {
    dayNumber: 193,
    phaseSlug: 'testing-qa',
    kind: 'lesson' as const,
    titleEn: 'Performance Testing Fundamentals',
    titleAr: 'Performance Testing Fundamentals',
    topic: 'Testing',
    estimatedMinutes: 90,
    objectiveEn: 'Understand load testing, identify performance bottlenecks, and use profiling tools.',
    objectiveAr: 'Understand load testing, identify performance bottlenecks, and use profiling tools.',
    lessonEn:
      'Performance testing identifies bottlenecks under load. Use load testing tools to simulate multiple users, profile CPU and memory usage, and find slow queries or endpoints. Aim for acceptable response times and resource usage.',
    lessonAr:
      'Performance testing identifies bottlenecks under load. Use load testing tools to simulate multiple users, profile CPU and memory usage, and find slow queries or endpoints. Aim for acceptable response times and resource usage.',
    tasks: [
      {
        en: 'Use a load testing tool to simulate 100 concurrent users',
        ar: 'Use a load testing tool to simulate 100 concurrent users'
      },
      {
        en: 'Profile CPU and memory usage during peak load',
        ar: 'Profile CPU and memory usage during peak load'
      },
      {
        en: 'Identify the slowest endpoint in the application',
        ar: 'Identify the slowest endpoint in the application'
      },
      {
        en: 'Optimize the slowest endpoint and verify the improvement',
        ar: 'Optimize the slowest endpoint and verify the improvement'
      }
    ],
    exerciseEn: 'Run a load test and identify the slowest endpoint.',
    exerciseAr: 'Run a load test and identify the slowest endpoint.',
    deliverableEn: 'A load test report with the slowest endpoint identified.',
deliverableAr: 'Load test report with the slowest endpoint identified.',
    resources: []
  },
  {
    dayNumber: 194,
    phaseSlug: 'testing-qa',
    kind: 'project' as const,
    titleEn: 'Performance Test and Optimization',
    titleAr: 'Performance Test and Optimization',
    topic: 'Testing project',
    estimatedMinutes: 120,
    objectiveEn: 'Run a load test, identify bottlenecks, and optimize the slowest endpoint or query.',
    objectiveAr: 'Run a load test, identify bottlenecks, and optimize the slowest endpoint or query.',
    lessonEn:
      'A performance test demonstrates the application under load. Identify the slowest endpoints or queries, optimize them (indexing, caching, query optimization), and verify the improvement under the same load.',
    lessonAr:
      'A performance test demonstrates the application under load. Identify the slowest endpoints or queries, optimize them (indexing, caching, query optimization), and verify the improvement under the same load.',
    tasks: [
      {
        en: 'Run a load test with 100 concurrent users and record response times',
        ar: 'Run a load test with 100 concurrent users and record response times'
      },
      {
        en: 'Identify the slowest endpoint from the test results',
        ar: 'Identify the slowest endpoint from the test results'
      },
      {
        en: 'Apply an optimization (index, cache, or query fix)',
        ar: 'Apply an optimization (index, cache, or query fix)'
      },
      {
        en: 'Run the load test again and verify the response time improved',
        ar: 'Run the load test again and verify the response time improved'
      }
    ],
    exerciseEn: 'Run a load test, optimize the slowest endpoint, and verify the improvement.',
    exerciseAr: 'Run a load test, optimize the slowest endpoint, and verify the improvement.',
    deliverableEn: 'A load test report and optimization results.',
deliverableAr: 'Load test report and optimization results.',
    resources: []
  },
  {
    dayNumber: 195,
    phaseSlug: 'testing-qa',
    kind: 'lesson' as const,
    titleEn: 'Visual Regression Testing',
    titleAr: 'Visual Regression Testing',
    topic: 'Testing',
    estimatedMinutes: 90,
    objectiveEn: 'Use pixel comparison tools to detect UI changes between test runs.',
    objectiveAr: 'Use pixel comparison tools to detect UI changes between test runs.',
    lessonEn:
      'Visual regression testing compares screenshots between runs to detect unintended UI changes. Use tools like Percy or Chrome DevTools screenshot comparison. Configure thresholds to ignore minor anti-aliasing differences.',
    lessonAr:
      'Visual regression testing compares screenshots between runs to detect unintended UI changes. Use tools like Percy or Chrome DevTools screenshot comparison. Configure thresholds to ignore minor anti-aliasing differences.',
    tasks: [
      {
        en: 'Set up Percy or Chrome DevTools for screenshot comparison',
        ar: 'Set up Percy or Chrome DevTools for screenshot comparison'
      },
      {
        en: 'Take a baseline screenshot and compare it to a new run',
        ar: 'Take a baseline screenshot and compare it to a new run'
      },
      {
        en: 'Review differences and decide if they are intentional',
        ar: 'Review differences and decide if they are intentional'
      },
      {
        en: 'Configure thresholds to ignore anti-aliasing differences',
        ar: 'Configure thresholds to ignore anti-aliasing differences'
      }
    ],
    exerciseEn: 'Set up visual regression testing and review the first run differences.',
    exerciseAr: 'Set up visual regression testing and review the first run differences.',
    deliverableEn: 'A visual regression test setup with baseline and comparison screenshots.',
deliverableAr: 'Visual regression test setup with baseline and comparison screenshots.',
    resources: [
      { title: 'Percy docs', url: 'https://percy.io/docs/', kind: 'reference' }
    ],
    challengeEn: 'Fix a visual regression caused by a intentional UI change',
    challengeAr: 'Fix a visual regression caused by a intentional UI change',
    prerequisites: [193],
    criteriaEn: ['Tool set up', 'Baseline screenshot taken', 'Comparison run completed', 'Differences reviewed'],
    criteriaAr: ['Tool set up', 'Baseline screenshot taken', 'Comparison run completed', 'Differences reviewed']
  },
  {
    dayNumber: 196,
    phaseSlug: 'testing-qa',
    kind: 'project' as const,
    titleEn: 'Visual Regression Setup and Fix',
    titleAr: 'Visual Regression Setup and Fix',
    topic: 'Testing project',
    estimatedMinutes: 120,
    objectiveEn: 'Set up visual regression testing, capture a baseline, make an intentional UI change, and verify the detection.',
    objectiveAr: 'Set up visual regression testing, capture a baseline, make an intentional UI change, and verify the detection.',
    lessonEn:
      'Visual regression testing detects unintended UI changes. Set up the tool, capture a baseline screenshot, make a known change, and verify the test flags the change.',
    lessonAr:
      'Visual regression testing detects unintended UI changes. Set up the tool, capture a baseline screenshot, make a known change, and verify the test flags the change.',
    tasks: [
      {
        en: 'Set up the visual regression tool and capture a baseline screenshot',
        ar: 'Set up the visual regression tool and capture a baseline screenshot'
      },
      {
        en: 'Make an intentional UI change (e.g., change a margin or color)',
        ar: 'Make an intentional UI change (e.g., change a margin or color)'
      },
      {
        en: 'Run the visual regression test and verify it flags the change',
        ar: 'Run the visual regression test and verify it flags the change'
      },
      {
        en: 'Reset the change and verify the test passes when no unintended change exists',
        ar: 'Reset the change and verify the test passes when no unintended change exists'
      }
    ],
    exerciseEn: 'Set up visual regression testing and verify detection of intentional changes.',
    exerciseAr: 'Set up visual regression testing and verify detection of intentional changes.',
    deliverableEn: 'Visual regression test setup with baseline and verified detection.',
deliverableAr: 'Visual regression test setup with verified detection.',
    resources: [
      { title: 'Percy docs', url: 'https://percy.io/docs/', kind: 'reference' }
    ],
    challengeEn: 'Add a threshold configuration to ignore minor anti-aliasing differences',
    challengeAr: 'Add a threshold configuration to ignore minor anti-aliasing differences',
    prerequisites: [195],
    criteriaEn: ['Tool set up', 'Baseline captured', 'Intentional change made', 'Test flags the change', 'Reset and test passes'],
    criteriaAr: ['Tool set up', 'Baseline captured', 'Intentional change made', 'Test flags the change', 'Reset and test passes']
  },
  {
    dayNumber: 197,
    phaseSlug: 'testing-qa',
    kind: 'lesson' as const,
    titleEn: 'Security Testing Fundamentals',
    titleAr: 'Security Testing Fundamentals',
    topic: 'Testing',
    estimatedMinutes: 90,
    objectiveEn: 'Understand common security vulnerabilities and how to test for them: injection, XSS, CSRF, and authentication flaws.',
    objectiveAr: 'Understand common security vulnerabilities and how to test for them: injection, XSS, CSRF, and authentication flaws.',
    lessonEn:
      'Security testing identifies vulnerabilities that could be exploited. Test for SQL injection, XSS, CSRF, and authentication flaws. Use tools like OWASP ZAP and include security tests in the CI pipeline.',
    lessonAr:
      'Security testing identifies vulnerabilities that could be exploited. Test for SQL injection, XSS, CSRF, and authentication flaws. Use tools like OWASP ZAP and include security tests in the CI pipeline.',
    tasks: [
      {
        en: 'Write a test that attempts SQL injection on a form field',
        ar: 'Write a test that attempts SQL injection on a form field'
      },
      {
        en: 'Write a test that attempts XSS via a user input field',
        ar: 'Write a test that attempts XSS via a user input field'
      },
      {
        en: 'Write a test that verifies CSRF tokens are enforced',
        ar: 'Write a test that verifies CSRF tokens are enforced'
      },
      {
        en: 'Run a security scan using OWASP ZAP and review the results',
        ar: 'Run a security scan using OWASP ZAP and review the results'
      }
    ],
    exerciseEn: 'Write security tests for injection, XSS, and CSRF vulnerabilities.',
    exerciseAr: 'Write security tests for injection, XSS, and CSRF vulnerabilities.',
    deliverableEn: 'Security tests for injection, XSS, and CSRF.',
deliverableAr: 'Security tests for injection, XSS, and CSRF',
    resources: [
      { title: 'OWASP ZAP', url: 'https://owasp.org/www-project-vulnerability/', kind: 'reference' }
    ],
    challengeEn: 'Write a test that verifies input is sanitized before display',
    challengeAr: 'Write a test that verifies input is sanitized before display',
    prerequisites: [194],
    criteriaEn: ['SQL injection test written', 'XSS test written', 'CSRF test written', 'OWASP ZAP scan run'],
    criteriaAr: ['SQL injection test written', 'XSS test written', 'CSRF test written', 'OWASP ZAP scan run']
  },
  {
    dayNumber: 198,
    phaseSlug: 'testing-qa',
    kind: 'project' as const,
    titleEn: 'Security Test Suite',
    titleAr: 'Security Test Suite',
    topic: 'Testing project',
    estimatedMinutes: 120,
    objectiveEn: 'Build a security test suite that includes injection, XSS, CSRF, and authentication flaw tests, and integrate it into the CI pipeline.',
    objectiveAr: 'Build a security test suite that includes injection, XSS, CSRF, and authentication flaw tests, and integrate it into the CI pipeline.',
    lessonEn:
      'A security test suite provides regular checks for common vulnerabilities. Include tests for SQL injection, XSS, CSRF, and auth flaws. Integrate the suite into CI so it runs on every pull request.',
    lessonAr:
      'Security test suite provides regular checks for common vulnerabilities. Include tests for SQL injection, XSS, CSRF, and auth flaws. Integrate the suite into CI so it runs on every pull request.',
    tasks: [
      {
        en: 'Write a SQL injection test for a search endpoint',
        ar: 'Write a SQL injection test for a search endpoint'
      },
      {
        en: 'Write an XSS test for a comment submission field',
        ar: 'Write an XSS test for a comment submission field'
      },
      {
        en: 'Write a CSRF test that verifies token enforcement',
        ar: 'Write a CSRF test that verifies token enforcement'
      },
      {
        en: 'Integrate the security tests into the CI pipeline',
        ar: 'Integrate the security tests into the CI pipeline'
      }
    ],
    exerciseEn: 'Build a security test suite and integrate it into CI.',
    exerciseAr: 'Build a security test suite and integrate it into CI.',
    deliverableEn: 'A security test suite running in CI.',
deliverableAr: 'Security test suite running in CI.',
    resources: [
      { title: 'OWASP ZAP', url: 'https://owasp.org/www-project-vulnerability/', kind: 'reference' }
    ],
    challengeEn: 'Add a test that verifies sensitive data is not leaked in error messages',
    challengeAr: 'Add a test that verifies sensitive data is not leaked in error messages',
    prerequisites: [197],
    criteriaEn: ['SQL injection test in CI', 'XSS test in CI', 'CSRF test in CI', 'Auth flaw test in CI'],
    criteriaAr: ['SQL injection test in CI', 'XSS test in CI', 'CSRF test in CI', 'Auth flaw test in CI']
  },
  {
    dayNumber: 199,
    phaseSlug: 'testing-qa',
    kind: 'lesson' as const,
    titleEn: 'Continuous Integration for Tests',
    titleAr: 'Continuous Integration for Tests',
    topic: 'Testing',
    estimatedMinutes: 90,
    objectiveEn: 'Configure CI to run the test suite on every pull request, track results, and block merges on failure.',
    objectiveAr: 'Configure CI to run the test suite on every pull request, track results, and block merges on failure.',
    lessonEn:
      'CI ensures that every change is verified before merging. Configure the CI pipeline to run unit, integration, and E2E tests on every pull request. Track pass/fail rates over time and block merges when the suite fails.',
    lessonAr:
      'CI ensures that every change is verified before merging. Configure the CI pipeline to run unit, integration, and E2E tests on every pull request. Track pass/fail rates over time and block merges when the suite fails.',
    tasks: [
      {
        en: 'Configure GitHub Actions to run Vitest on every pull request',
        ar: 'Configure GitHub Actions to run Vitest on every pull request'
      },
      {
        en: 'Configure GitHub Actions to run Playwright E2E tests',
        ar: 'Configure GitHub Actions to run Playwright E2E tests'
      },
      {
        en: 'Set up status checks to block merges on test failure',
        ar: 'Set up status checks to block merges on test failure'
      },
      {
        en: 'Configure test result tracking and analytics in CI',
        ar: 'Configure test result tracking and analytics in CI'
      }
    ],
    exerciseEn: 'Set up CI to run the full test suite on every pull request.',
    exerciseAr: 'Set up CI to run the full test suite on every pull request.',
    deliverableEn: 'CI pipeline that runs the full test suite and blocks merges on failure.',
deliverableAr: 'CI pipeline that runs the full test suite and blocks merges on failure.',
    resources: [
      { title: 'GitHub Actions docs', url: 'https://docs.github.com/en/actions', kind: 'reference' }
    ],
    challengeEn: 'Configure CI to run security tests and block merges on vulnerability findings',
    challengeAr: 'Configure CI to run security tests and block merges on vulnerability findings',
    prerequisites: [198],
    criteriaEn: ['GitHub Actions runs Vitest', 'GitHub Actions runs Playwright', 'Status checks block merges', 'Test analytics configured'],
    criteriaAr: ['GitHub Actions runs Vitest', 'GitHub Actions runs Playwright', 'Status checks block merges', 'Test analytics configured']
  },
  {
    dayNumber: 200,
    phaseSlug: 'testing-qa',
    kind: 'project' as const,
    titleEn: 'CI Pipeline Setup',
    titleAr: 'CI Pipeline Setup',
    topic: 'Testing project',
    estimatedMinutes: 120,
    objectiveEn: 'Configure GitHub Actions to run the full test suite (unit, integration, E2E, security) on every pull request, with status checks to block merges.',
    objectiveAr: 'Configure GitHub Actions to run the full test suite (unit, integration, E2E, security) on every pull request, with status checks to block merges.',
    lessonEn:
      'A CI pipeline automates testing on every pull request. Configure GitHub Actions to run the full test suite, including unit, integration, E2E, and security tests. Set up status checks to block merges when any suite fails.',
    lessonAr:
      'A CI pipeline automates testing on every pull request. Configure GitHub Actions to run the full test suite, including unit, integration, E2E, and security tests. Set up status checks to block merges when any suite fails.',
    tasks: [
      {
        en: 'Create a GitHub Actions workflow that runs Vitest, Playwright, and security tests',
        ar: 'Create a GitHub Actions workflow that runs Vitest, Playwright, and security tests'
      },
      {
        en: 'Set up status checks in the repository settings to block merges on failure',
        ar: 'Set up status checks in the repository settings to block merges on failure'
      },
      {
        en: 'Configure test result analytics and pass rate tracking',
        ar: 'Configure test result analytics and pass rate tracking'
      },
      {
        en: 'Push a change and verify the CI pipeline runs and blocks on failure',
        ar: 'Push a change and verify the CI pipeline runs and blocks on failure'
      }
    ],
    exerciseEn: 'Set up a CI pipeline that runs the full test suite and blocks merges on failure.',
    exerciseAr: 'Set up a CI pipeline that runs the full test suite and blocks merges on failure.',
    deliverableEn: 'A GitHub Actions workflow that runs the full test suite and blocks merges on failure.',
deliverableAr: 'GitHub Actions workflow that runs the full test suite and blocks merges on failure.',
    resources: [
      { title: 'GitHub Actions docs', url: 'https://docs.github.com/en/actions', kind: 'reference' }
    ],
    challengeEn: 'Add a step to deploy to a staging environment if all tests pass',
    challengeAr: 'Add a step to deploy to a staging environment if all tests pass',
    prerequisites: [199],
    criteriaEn: ['Workflow runs Vitest, Playwright, security tests', 'Status checks block merges', 'Analytics configured', 'Deploy step conditional on passing'],
    criteriaAr: ['Workflow runs Vitest, Playwright, security tests', 'Status checks block merges', 'Analytics configured', 'Deploy step conditional on passing']
  },
  {
    dayNumber: 201,
    phaseSlug: 'testing-qa',
    kind: 'lesson' as const,
    titleEn: 'Test Documentation and Knowledge Sharing',
    titleAr: 'Test Documentation and Knowledge Sharing',
    topic: 'Testing',
    estimatedMinutes: 90,
    objectiveEn: 'Document the test suite, create a test guide, and share knowledge with the team.',
    objectiveAr: 'Document the test suite, create a test guide, and share knowledge with the team.',
    lessonEn:
      'Good test documentation helps new team members understand the test strategy and how to run tests. Create a test guide that covers the test types, how to run them, and how to add new tests. Share the guide with the team.',
    lessonAr:
      'Good test documentation helps new team members understand the test strategy and how to run tests. Create a test guide that covers the test types, how to run them, and how to add new tests. Share the guide with the team.',
    tasks: [
      {
        en: 'Create a test guide that covers test types, how to run them, and how to add new tests',
        ar: 'Create a test guide that covers test types, how to run them, and how to add new tests'
      },
      {
        en: 'Share the test guide with the team via the project wiki',
        ar: 'Share the test guide with the team via the project wiki'
      },
      {
        en: 'Document the test strategy and the reasoning behind test type choices',
        ar: 'Document the test strategy and the reasoning behind test type choices'
      },
      {
        en: 'Add onboarding tests documentation for new team members',
        ar: 'Add onboarding tests documentation for new team members'
      }
    ],
    exerciseEn: 'Create a test guide and share it with the team.',
    exerciseAr: 'Create a test guide and share it with the team.',
    deliverableEn: 'A test guide document shared with the team.',
deliverableAr: 'Test guide document shared with the team.',
    resources: []
  },
  {
    dayNumber: 202,
    phaseSlug: 'testing-qa',
    kind: 'project' as const,
    titleEn: 'Test Documentation and Onboarding',
    titleAr: 'Test Documentation and Onboarding',
    topic: 'Testing project',
    estimatedMinutes: 120,
    objectiveEn: 'Create a test guide, share it with the team, and add onboarding documentation for new team members.',
    objectiveAr: 'Create a test guide, share it with the team, and add onboarding documentation for new team members.',
    lessonEn:
      'Onboarding documentation helps new team members get started with the test suite. Include how to run tests, the test strategy, and who to contact for test-related questions.',
    lessonAr:
      'Onboarding documentation helps new team members get started with the test suite. Include how to run tests, the test strategy, and who to contact for test-related questions.',
    tasks: [
      {
        en: 'Write a test guide covering test types, test runners, and how to add new tests',
        ar: 'Write a test guide covering test types, test runners, and how to add new tests'
      },
      {
        en: 'Add onboarding documentation for new team members',
        ar: 'Add onboarding documentation for new team members'
      },
      {
        en: 'Share the guide and documentation via the project wiki',
        ar: 'Share the guide and documentation via the project wiki'
      },
      {
        en: 'Add a section for who to contact for test-related questions',
        ar: 'Add a section for who to contact for test-related questions'
      }
    ],
    exerciseEn: 'Create test documentation and onboarding material for the team.',
    exerciseAr: 'Create test documentation and onboarding material for the team.',
    deliverableEn: 'Test guide and onboarding documentation shared via the project wiki.',
deliverableAr: 'Test guide and onboarding documentation shared via the project wiki.',
    resources: []
  },
  {
    dayNumber: 203,
    phaseSlug: 'testing-qa',
    kind: 'lesson' as const,
    titleEn: 'Test Estimation and Planning',
    titleAr: 'Test Estimation and Planning',
    topic: 'Testing',
    estimatedMinutes: 90,
    objectiveEn: 'Estimate the effort required for testing, plan test coverage, and set goals for test completeness.',
    objectiveAr: 'Estimate the effort required for testing, plan test coverage, and set goals for test completeness.',
    lessonEn:
      'Test estimation helps plan the effort required for testing. Consider the number of features, the complexity of the codebase, and the types of tests needed. Set goals for test completeness (e.g., 80% of critical paths covered) and track progress.',
    lessonAr:
      'Test estimation helps plan the effort required for testing. Consider the number of features, the complexity of the codebase, and the types of tests needed. Set goals for test completeness (e.g., 80% of critical paths covered) and track progress.',
    tasks: [
      {
        en: 'Estimate the effort required to test a given feature',
        ar: 'Estimate the effort required to test a given feature'
      },
      {
        en: 'Plan test coverage for critical user paths',
        ar: 'Plan test coverage for critical user paths'
      },
      {
        en: 'Set a goal for test completeness (e.g., 80% of critical paths)',
        ar: 'Set a goal for test completeness (e.g., 80% of critical paths)'
      },
      {
        en: 'Track progress toward the goal and report regularly',
        ar: 'Track progress toward the goal and report regularly'
      }
    ],
    exerciseEn: 'Estimate testing effort and set a test completeness goal.',
    exerciseAr: 'Estimate testing effort and set a test completeness goal.',
    deliverableEn: 'An estimation and a test completeness goal.',
deliverableAr: 'Estimation and a test completeness goal.',
    resources: []
  },
  {
    dayNumber: 204,
    phaseSlug: 'testing-qa',
    kind: 'project' as const,
    titleEn: 'Test Planning and Estimation',
    titleAr: 'Test Planning and Estimation',
    topic: 'Testing project',
    estimatedMinutes: 120,
    objectiveEn: 'Create a test plan that estimates effort, plans coverage for critical paths, and sets a completeness goal. Report the plan to the team.',
    objectiveAr: 'Create a test plan that estimates effort, plans coverage for critical paths, and sets a completeness goal. Report the plan to the team.',
    lessonEn:
      'A test plan provides a roadmap for the testing effort. Estimate the time and resources needed, plan coverage for critical user paths, and set a goal for test completeness. Report the plan to the team and adjust as the project evolves.',
    lessonAr:
      'A test plan provides a roadmap for the testing effort. Estimate the time and resources needed, plan coverage for critical user paths, and set a goal for test completeness. Report the plan to the team and adjust as the project evolves.',
    tasks: [
      {
        en: 'Estimate the effort required to test all features in the application',
        ar: 'Estimate the effort required to test all features in the application'
      },
      {
        en: 'Plan test coverage for the top 5 critical user paths',
        ar: 'Plan test coverage for the top 5 critical user paths'
      },
      {
        en: 'Set a test completeness goal of 80% of critical paths',
        ar: 'Set a test completeness goal of 80% of critical paths'
      },
      {
        en: 'Report the plan to the team and document it in the project wiki',
        ar: 'Report the plan to the team and document it in the project wiki'
      }
    ],
    exerciseEn: 'Create a test plan and report it to the team.',
    exerciseAr: 'Create a test plan and report it to the team.',
    deliverableEn: 'A test plan document reported to the team.',
deliverableAr: 'Test plan document reported to the team.',
    resources: []
  },
  {
    dayNumber: 205,
    phaseSlug: 'testing-qa',
    kind: 'lesson' as const,
    titleEn: 'Retrospective and Continuous Improvement',
    titleAr: 'Retrospective and Continuous Improvement',
    topic: 'Testing',
    estimatedMinutes: 90,
    objectiveEn: 'Conduct a test retrospective, identify improvements, and implement changes for the next sprint.',
    objectiveAr: 'Conduct a test retrospective, identify improvements, and implement changes for the next sprint.',
    lessonEn:
      'A test retrospective reflects on what worked well and what could be improved. Identify actionable improvements and implement them in the next sprint. Continuous improvement ensures the test suite evolves with the project.',
    lessonAr:
      'A test retrospective reflects on what worked well and what could be improved. Identify actionable improvements and implement them in the next sprint. Continuous improvement ensures the test suite evolves with the project.',
    tasks: [
      {
        en: 'Run a retrospective on the test suite and identify what worked well',
        ar: 'Run a retrospective on the test suite and identify what worked well'
      },
      {
        en: 'Identify three improvements for the next sprint',
        ar: 'Identify three improvements for the next sprint'
      },
      {
        en: 'Implement the improvements in the next sprint',
        ar: 'Implement the improvements in the next sprint'
      },
      {
        en: 'Document the changes and track their impact in the next retrospective',
        ar: 'Document the changes and track their impact in the next retrospective'
      }
    ],
    exerciseEn: 'Conduct a retrospective and implement improvements for the next sprint.',
    exerciseAr: 'Conduct a retrospective and implement improvements for the next sprint.',
    deliverableEn: 'A retrospective document and implemented improvements.',
deliverableAr: 'Retrospective document and implemented improvements.',
    resources: []
  },
  {
    dayNumber: 206,
    phaseSlug: 'testing-qa',
    kind: 'project' as const,
    titleEn: 'Test Retrospective and Improvements',
    titleAr: 'Test Retrospective and Improvements',
    topic: 'Testing project',
    estimatedMinutes: 120,
    objectiveEn: 'Conduct a test retrospective, identify three improvements, implement them in the next sprint, and document the changes.',
    objectiveAr: 'Conduct a test retrospective, identify three improvements, implement them in the next sprint, and document the changes.',
    lessonEn:
      'A retrospective helps the team reflect on the test process and identify improvements. Identify three actionable items, implement them, and document the impact in the next retrospective.',
    lessonAr:
      ' retrospective helps the team reflect on the test process and identify improvements. Identify three actionable items, implement them, and document the impact in the next retrospective.',
    tasks: [
      {
        en: 'Run a retrospective on the test suite and identify what worked well',
        ar: 'Run a retrospective on the test suite and identify what worked well'
      },
      {
        en: 'Identify three improvements for the next sprint',
        ar: 'Identify three improvements for the next sprint'
      },
      {
        en: 'Implement the improvements in the next sprint',
        ar: 'Implement the improvements in the next sprint'
      },
      {
        en: 'Document the changes and track their impact in the next retrospective',
        ar: 'Document the changes and track their impact in the next retrospective'
      }
    ],
    exerciseEn: 'Conduct a retrospective and implement improvements.',
    exerciseAr: 'Conduct a retrospective and implement improvements.',
    deliverableEn: 'A retrospective document and implemented improvements.',
deliverableAr: 'Retrospective document and implemented improvements.',
    resources: []
  },
  {
    dayNumber: 207,
    phaseSlug: 'testing-qa',
    kind: 'lesson' as const,
    titleEn: 'Test Governance and Policies',
    titleAr: 'Test Governance and Policies',
    topic: 'Testing',
    estimatedMinutes: 90,
    objectiveEn: 'Establish test governance policies, including test ownership, review process, and compliance requirements.',
    objectiveAr: 'Establish test governance policies, including test ownership, review process, and compliance requirements.',
    lessonEn:
      'Test governance ensures that the test suite is maintained over the long term. Define test ownership (who owns which tests), a review process for new tests, and any compliance requirements (e.g., security tests must pass before merge).',
    lessonAr:
      'Test governance ensures that the test suite is maintained over the long term. Define test ownership (who owns which tests), a review process for new tests, and any compliance requirements (e.g., security tests must pass before merge).',
    tasks: [
      {
        en: 'Define test ownership for the suite (which team member owns which tests)',
        ar: 'Define test ownership for the suite (which team member owns which tests)'
      },
      {
        en: 'Create a review process for new tests (who reviews, what are the criteria)',
        ar: 'Create a review process for new tests (who reviews, what are the criteria)'
      },
      {
        en: 'Define compliance requirements (e.g., security tests must pass before merge)',
        ar: 'Define compliance requirements (e.g., security tests must pass before merge)'
      },
      {
        en: 'Document the governance policies and share with the team',
        ar: 'Document the governance policies and share with the team'
      }
    ],
    exerciseEn: 'Establish test governance policies and document them.',
    exerciseAr: 'Establish test governance policies and document them.',
    deliverableEn: 'Governance policies document shared with the team.',
deliverableAr: 'Governance policies document shared with the team.',
    resources: []
  },
  {
    dayNumber: 208,
    phaseSlug: 'testing-qa',
    kind: 'project' as const,
    titleEn: 'Test Governance Setup',
    titleAr: 'Test Governance Setup',
    topic: 'Testing project',
    estimatedMinutes: 120,
    objectiveEn: 'Define test ownership, create a review process for new tests, define compliance requirements, and document all policies.',
    objectiveAr: 'Define test ownership, create a review process for new tests, define compliance requirements, and document all policies.',
    lessonEn:
      'Governance policies ensure the test suite is maintainable over the long term. Define who owns which tests, how new tests are reviewed, and what compliance requirements exist. Document everything and share with the team.',
    lessonAr:
      'Governance policies ensure that the test suite is maintained over the long term. Define who owns which tests, how new tests are reviewed, and what compliance requirements exist. Document everything and share with the team.',
    tasks: [
      {
        en: 'Define test ownership for the suite and document it',
        ar: 'Define test ownership for the suite and document it'
      },
      {
        en: 'Create a review process for new tests and document the criteria',
        ar: 'Create a review process for new tests and document the criteria'
      },
      {
        en: 'Define compliance requirements (e.g., security tests must pass before merge) and document them',
        ar: 'Define compliance requirements and document them'
      },
      {
        en: 'Document all governance policies and share with the team',
        ar: 'Document all governance policies and share with the team'
      }
    ],
    exerciseEn: 'Set up test governance and document the policies.',
    exerciseAr: 'Set up test governance and document the policies.',
    deliverableEn: 'Governance policies document shared with the team.',
deliverableAr: 'Governance policies document shared with the team.',
    resources: []
  },
  {
    dayNumber: 209,
    phaseSlug: 'testing-qa',
    kind: 'lesson' as const,
    titleEn: 'Metrics and KPIs for Test Quality',
    titleAr: 'Metrics and KPIs for Test Quality',
    topic: 'Testing',
    estimatedMinutes: 90,
    objectiveEn: 'Track key metrics and KPIs for test quality: pass rate, flaky test rate, test coverage, and mean time to repair.',
    objectiveAr: 'Track key metrics and KPIs for test quality: pass rate, flaky test rate, test coverage, and mean time to repair.',
    lessonEn:
      'Metrics and KPIs provide quantitative data on test quality. Track pass rate over time, flaky test rate, test coverage percentage, and mean time to repair failed tests. Use this data to drive continuous improvement.',
    lessonAr:
      'Metrics and KPIs provide quantitative data on test quality. Track pass rate over time, flaky test rate, test coverage percentage, and mean time to repair failed tests. Use this data to drive continuous improvement.',
    tasks: [
      {
        en: 'Set up pass rate tracking over the last 20 runs',
        ar: 'Set up pass rate tracking over the last 20 runs'
      },
      {
        en: 'Calculate the flaky test rate (tests that fail randomly)',
        ar: 'Calculate the flaky test rate'
      },
      {
        en: 'Track test coverage percentage and identify areas with low coverage',
        ar: 'Track test coverage percentage and identify areas with low coverage'
      },
      {
        en: 'Measure mean time to repair for failed tests',
        ar: 'Measure mean time to repair for failed tests'
      }
    ],
    exerciseEn: 'Set up metrics and KPIs for test quality tracking.',
    exerciseAr: 'Set up metrics and KPIs for test quality tracking.',
    deliverableEn: 'A metrics dashboard with pass rate, flaky rate, coverage, and MTTR.',
deliverableAr: 'Metrics dashboard with pass rate, flaky rate, coverage, and MTTR',
    resources: []
  },
  {
    dayNumber: 210,
    phaseSlug: 'testing-qa',
    kind: 'review' as const,
    titleEn: 'Phase 7 Testing QA Review',
    titleAr: 'Review Phase 7 Testing QA',
    topic: 'Review',
    estimatedMinutes: 70,
    objectiveEn: 'Refactor your testing practices to cover the full spectrum: unit, integration, E2E, accessibility, performance, security, and visual regression. Ensure the CI pipeline runs the full suite and blocks merges on failure. Document key takeaways and carry forward to Phase 8.',
    objectiveAr: 'Refactor your testing practices to cover the full spectrum: unit, integration, E2E, accessibility, performance, security, and visual regression. Ensure the CI pipeline runs the full suite and blocks merges on failure. Document key takeaways and carry forward to Phase 8.',
    lessonEn:
      'Phase 7 covered testing and QA over 30 days. Key takeaways: the testing pyramid, unit/integration/E2E tests, flaky test strategies, accessibility testing, performance profiling, security testing, visual regression, CI pipeline configuration, test documentation, test planning, retrospectives, governance, and metrics. Ensure the CI pipeline runs the full suite and blocks merges on failure. Document key takeaways and carry forward to Phase 8.',
    lessonAr:
      'Phase 7 covered testing and QA over 30 days. Key takeaways: the testing pyramid, unit/integration/E2E tests, flaky test strategies, accessibility testing, performance profiling, security testing, visual regression, CI pipeline configuration, test documentation, test planning, retrospectives, governance, and metrics. Ensure the CI pipeline runs the full suite and blocks merges on failure. Document key takeaways and carry forward to Phase 8.',
    tasks: [
      {
        en: 'Refactor testing practices to cover the full spectrum',
        ar: 'Refactor testing practices to cover the full spectrum'
      },
      {
        en: 'Ensure CI pipeline runs the full suite and blocks merges on failure',
        ar: 'Ensure CI pipeline runs the full suite and blocks merges on failure'
      },
      {
        en: 'Document key takeaways and carry forward to Phase 8',
        ar: 'Document key takeaways and carry forward to Phase 8'
      },
      {
        en: 'Run the full test suite and verify it passes',
        ar: 'Run the full test suite and verify it passes'
      }
    ],
    exerciseEn: 'Complete the Phase 7 review and prepare for Phase 8.',
    exerciseAr: 'Complete the Phase 7 review and prepare for Phase 8.',
    deliverableEn: 'A reviewed and improved test suite and pipeline.',
deliverableAr: 'Reviewed and improved test suite and pipeline.',
    resources: [],
    challengeEn: 'Create a Phase 7 summary document covering all testing topics',
    challengeAr: 'Create a Phase 7 summary document covering all testing topics',
    prerequisites: [209],
    criteriaEn: ['Full spectrum coverage', 'CI pipeline blocking merges', 'Key takeaways documented', 'Full suite passes'],
    criteriaAr: ['Full spectrum coverage', 'CI pipeline blocking merges', 'Key takeaways documented', 'Full suite passes']
  }
]