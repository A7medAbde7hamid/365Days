import type { CurriculumDay } from '../types'

const MDN = 'https://developer.mozilla.org/en-US/docs'

/** Phase 4 — Backend Development (days 91–120). */
export const PHASE_4_DAYS: CurriculumDay[] = [
  {
    dayNumber: 91,
    phaseSlug: 'backend',
    kind: 'lesson',
    titleEn: 'Node.js Basics',
    titleAr: 'Basics Node.js',
    topic: 'Node.js',
    estimatedMinutes: 90,
    objectiveEn: 'Run a basic Node.js script, understand the REPL, and module system (require/export).',
    objectiveAr: 'Run a basic Node.js script, understand the REPL, and module system (require/export).',
    lessonEn:
      'Node.js brings JavaScript to the server. The REPL lets you evaluate expressions interactively. Every file is a module, and module.exports exposes public API. CommonJS (require) is the default until ES modules are configured. Understanding the module lifecycle (load -> evaluate -> export) is the foundation for everything that follows.',
    lessonAr:
      'Node.js brings JavaScript to the server. The REPL lets you evaluate expressions interactively. Every file is a module, and module.exports exposes public API. CommonJS (require) is the default until ES modules are configured. Understanding the module lifecycle (load -> evaluate -> export) is the foundation for everything that follows.',
    tasks: [
      {
        en: 'Create a folder backend-day-91 and run node -e "console.log(hello)"',
        ar: 'Create a folder backend-day-91 and run node -e "console.log(hello)"'
      },
      {
        en: 'Write a script that require two different modules and logs a value from each',
        ar: 'Write a script that require two different modules and logs a value from each'
      },
      {
        en: 'Create a module that exports a single function and import it in another file',
        ar: 'Create a module that exports a single function and import it in another file'
      }
    ],
    exerciseEn: 'Write a small Node.js app that exports a add(a, b) function and calls it from a separate script.',
    exerciseAr: 'Write a small Node.js app that exports a add(a, b) function and calls it from a separate script.',
    deliverableEn: 'Two files: a module and a script that imports and uses it.',
    deliverableAr: 'Two files: a module and a script that imports and uses it.',
    resources: [
      { title: 'MDN: Node.js basics', url: MDN + '/Learn/A/server-side/Node_about', kind: 'official' },
      { title: 'MDN: Module system', url: MDN + '/Learn/A/modules/Introduction_to_modules', kind: 'official' }
    ],
    challengeEn: 'Create a module that exports an HTTP server on port 3000 and returns Hello on the root path.',
    challengeAr: 'Create a module that exports an HTTP server on port 3000 and returns Hello on the root path.',
    prerequisites: [],
    criteriaEn: ['Module file uses module.exports', 'Importing script runs without errors'],
    criteriaAr: ['Module file uses module.exports', 'Importing script runs without errors']
  },
  {
    dayNumber: 92,
    phaseSlug: 'backend',
    kind: 'lesson',
    titleEn: 'HTTP and the Request-Response Cycle',
    titleAr: 'HTTP and the Request-Response Cycle',
    topic: 'HTTP',
    estimatedMinutes: 90,
    objectiveEn: 'Explain methods, status codes, headers, and the difference between GET and POST.',
    objectiveAr: 'Explain methods, status codes, headers, and the difference between GET and POST.',
    lessonEn:
      'HTTP is the language of the web. GET retrieves a representation; POST submits data for processing. Status codes in the 2xx range signal success, 4xx signal client errors, and 5xx signal server errors. Headers carry metadata (content type, authentication, caching). Every response should set a meaningful content-type header.',
    lessonAr:
      'HTTP is the language of the web. GET retrieves a representation; POST submits data for processing. Status codes in the 2xx range signal success, 4xx signal client errors, and 5xx signal server errors. Headers carry metadata (content type, authentication, caching). Every response should set a meaningful content-type header.',
    tasks: [
      {
        en: 'Use curl -I to fetch headers for three different URLs and record the status code',
        ar: 'Use curl -I to fetch headers for three different URLs and record the status code'
      },
      {
        en: 'Write a one-sentence description of what each 2xx, 4xx, and 5xx class means',
        ar: 'Write a one-sentence description of what each 2xx, 4xx, and 5xx class means'
      },
      {
        en: 'Add a Content-Type: text/plain header to a manual Node.js response',
        ar: 'Add a Content-Type: text/plain header to a manual Node.js response'
      }
    ],
    exerciseEn: 'Use curl to test a local Node.js server for successful and error status codes.',
    exerciseAr: 'Use curl to test a local Node.js server for successful and error status codes.',
    deliverableEn: 'A text file listing the status codes you observed and what they mean.',
    deliverableAr: 'A text file listing the status codes you observed and what they mean.',
    resources: [
      { title: 'MDN: HTTP status code', url: MDN + '/HTTP/Reference/Status', kind: 'official' },
      { title: 'MDN: Fetch API', url: MDN + '/fetch', kind: 'official' }
    ],
    challengeEn: 'Write a brief client-side note comparing GET vs POST for submitting a form.',
    challengeAr: 'Write a brief client-side note comparing GET vs POST for submitting a form.',
    prerequisites: [91],
    criteriaEn: ['Can distinguish GET from POST', 'Can explain what a 404 status code means'],
    criteriaAr: ['Can distinguish GET from POST', 'Can explain what a 404 status code means']
  },
  {
    dayNumber: 93,
    phaseSlug: 'backend',
    kind: 'practice',
    titleEn: 'Intro to Express',
    titleAr: 'Intro to Express',
    topic: 'Express',
    estimatedMinutes: 100,
    objectiveEn: 'Set up an Express server, define a route, and listen on a port.',
    objectiveAr: 'Set up an Express server, define a route, and listen on a port.',
    lessonEn:
      'Express is the de-facto web framework for Node.js. app.listen(port) starts the server, app.METHOD(path, handler) defines routes. Middleware functions (req, res, next) have access to the request and response objects and the next middleware function in the application\'s request-processing cycle. "Hello, world" is the traditional first Express app.',
    lessonAr:
      'Express is the de-facto web framework for Node.js. app.listen(port) starts the server, app.METHOD(path, handler) defines routes. Middleware functions (req, res, next) have access to the request and response objects and the next middleware function in the application\'s request-processing cycle. "Hello, world" is the traditional first Express app.',
    tasks: [
      {
        en: 'Initialize an npm project and install Express',
        ar: 'Initialize an npm project and install Express'
      },
      {
        en: 'Create a server file that listens on port 3000 and responds "Hello" on the root path',
        ar: 'Create a server file that listens on port 3000 and responds "Hello" on the root path'
      },
      {
        en: 'Add a second route /about that responds with a JSON object',
        ar: 'Add a second route /about that responds with a JSON object'
      }
    ],
    exerciseEn: 'Start an Express server that responds JSON {"status":"ok"} on /health.',
    exerciseAr: 'Start an Express server that responds JSON {"status":"ok"} on /health.',
    deliverableEn: 'A running Express server with at least two routes.',
    deliverableAr: 'A running Express server with at least two routes.',
    resources: [
      { title: 'MDN: Express framework', url: MDN + '/Express', kind: 'reference' },
      { title: 'Express.js Guide', url: 'https://expressjs.com/en/guide/routing.html', kind: 'reference' }
    ],
    challengeEn: 'Add a route that logs the request method and URL, then responds with "received".',
    challengeAr: 'Add a route that logs the request method and URL, then responds with "received".',
    prerequisites: [92],
    criteriaEn: ['Server starts without crashing', 'Two routes are registered'],
    criteriaAr: ['Server starts without crashing', 'Two routes are registered']
  },
  {
    dayNumber: 94,
    phaseSlug: 'backend',
    kind: 'project',
    titleEn: 'REST API Boilerplate',
    titleAr: 'REST API Boilerplate',
    topic: 'REST API',
    estimatedMinutes: 120,
    objectiveEn: 'Build a minimal API with GET, POST, PUT, DELETE routes and in-memory storage.',
    objectiveAr: 'Build a minimal API with GET, POST, PUT, DELETE routes and in-memory storage.',
    lessonEn:
      'A basic REST API CRUD scaffold. Each route follows app.METHOD(path, handler). Use an in-memory JavaScript object as the "database". Validate the request body with body-parser or Express\'s built-in middleware. Return appropriate status codes and JSON shapes for each operation.',
    lessonAr:
      'A basic REST API CRUD scaffold. Each route follows app.METHOD(path, handler). Use an in-memory JavaScript object as the "database". Validate the request body with body-parser or Express\'s built-in middleware. Return appropriate status codes and JSON shapes for each operation.',
    tasks: [
      {
        en: 'Set up Express, body-parser, and an empty object const data = {}',
        ar: 'Set up Express, body-parser, and an empty object const data = {}'
      },
      {
        en: 'Implement GET /items – return the whole data object as JSON',
        ar: 'Implement GET /items – return the whole data object as JSON'
      },
      {
        en: 'Implement POST /items – add a new item to the data object',
        ar: 'Implement POST /items – add a new item to the data object'
      },
      {
        en: 'Implement PUT /items/:id – update an existing item',
        ar: 'Implement PUT /items/:id – update an existing item'
      },
      {
        en: 'Implement DELETE /items/:id – remove an item',
        ar: 'Implement DELETE /items/:id – remove an item'
      }
    ],
    exerciseEn: 'Start the API and test all four routes with curl or Postman.',
    exerciseAr: 'Start the API and test all four routes with curl or Postman.',
    deliverableEn: 'A functional API with CRUD endpoints and an in-memory store.',
    deliverableAr: 'A functional API with CRUD endpoints and an in-memory store.',
    resources: [
      { title: 'MDN: Introducing REST', url: MDN + '/Rest', kind: 'official' },
      { title: 'Express body-parser', url: 'https://expressjs.com/en/resources/body-parser.html', kind: 'reference' }
    ],
    challengeEn: 'Add a PATCH /items/:id route that partially updates an item.',
    challengeAr: 'Add a PATCH /items/:id route that partially updates an item.',
    prerequisites: [93],
    criteriaEn: ['All four CRUD routes respond with JSON', 'Status codes are appropriate (200, 201, 404, etc.)'],
    criteriaAr: ['All four CRUD routes respond with JSON', 'Status codes are appropriate (200, 201, 404, etc.)']
  },
  {
    dayNumber: 95,
    phaseSlug: 'backend',
    kind: 'review',
    titleEn: 'Backend Review and Consolidation',
    titleAr: 'Backend Review and Consolidation',
    topic: 'Review',
    estimatedMinutes: 70,
    objectiveEn: 'Re-read the API you built and fix weaknesses: route duplication, missing status codes, unhandled errors.',
    objectiveAr: 'Re-read the API you built and fix weaknesses: route duplication, missing status codes, unhandled errors.',
    lessonEn:
      'A deliberate review day. Re-read the routes you wrote, look for: routes that overlap, status codes that are missing for edge cases, try-catch blocks that are absent, and any place where the server might crash on bad input. Then run every curl test you can think of.',
    lessonAr:
      'A deliberate review day. Re-read the routes you wrote, look for: routes that overlap, status codes that are missing for edge cases, try-catch blocks that are absent, and any place where the server might crash on bad input. Then run every curl test you can think of.',
    tasks: [
      {
        en: 'List the five biggest mistakes you made in days 91-94 and fix each',
        ar: 'List the five biggest mistakes you made in days 91-94 and fix each'
      },
      {
        en: 'Add try-catch around each route handler and log the error',
        ar: 'Add try-catch around each route handler and log the error'
      },
      {
        en: 'Run curl against every route and verify the status code and body',
        ar: 'Run curl against every route and verify the status code and body'
      }
    ],
    exerciseEn: 'Take your API and add validation for POST body – reject missing required fields.',
    exerciseAr: 'Take your API and add validation for POST body – reject missing required fields.',
    deliverableEn: 'A cleaned-up API plus a written list of mistakes fixed.',
    deliverableAr: 'A cleaned-up API plus a written list of mistakes fixed.',
    resources: [
      { title: 'MDN: Error handling', url: MDN + '/Learn/Server-side/Express/Error_handling', kind: 'official' }
    ],
    challengeEn: 'Add a route that gracefully handles a non-existent resource (404 with a JSON error body).',
    challengeAr: 'Add a route that gracefully handles a non-existent resource (404 with a JSON error body).',
    prerequisites: [94],
    criteriaEn: ['Every route has a try-catch', '404 responds with JSON error'],
    criteriaAr: ['Every route has a try-catch', '404 responds with JSON error']
  },
  {
    dayNumber: 96,
    phaseSlug: 'backend',
    titleAr: 'Write an async function that fetches data from an API and logs the result.',
    titleEn: 'Async Functions and Promises',
    topic: 'Async JavaScript',
    kind: 'lesson',
    estimatedMinutes: 90,
    objectiveEn: 'Write async/await, understand how it wraps Promises, and avoid common pitfalls.',
    objectiveAr: 'Write async/await, understand how it wraps Promises, and avoid common pitfalls.',
    lessonEn:
      'async marks a function as asynchronous. await pauses execution until the Promise resolves. All await expressions must be inside async functions. Unhandled rejections crash the process — always try/catch around await. Promise.all settles all promises concurrently; Promise.race picks the first that settles.',
    lessonAr:
      'async marks a function as asynchronous. await pauses execution until the Promise resolves. All await expressions must be inside async functions. Unhandled rejections crash the process — always try/catch around await. Promise.all settles all promises concurrently; Promise.race picks the first that settles.',
    tasks: [
      {
        en: 'Write a function that fetches two URLs concurrently with Promise.all and logs both results',
        ar: 'Write a function that fetches two URLs concurrently with Promise.all and logs both results'
      },
      {
        en: 'Write a function that races two promises and logs the first result',
        ar: 'Write a function that races two promises and logs the first result'
      }
    ],
    exerciseEn: 'Write an async function that fetches data from an API and logs the result.',
    exerciseAr: 'Write an async function that fetches data from an API and logs the result.',
    deliverableEn: 'A script with async/await that fetches two URLs and logs both results.',
    deliverableAr: 'A script with async/await that fetches two URLs and logs both results.',
    resources: [
      { title: 'MDN: Async functions', url: MDN + '/Learn/JavaScript/Asynchronous/Async_await', kind: 'official' },
      { title: 'MDN: Promise', url: MDN + '/Web/API/Promise', kind: 'official' }
    ],
    challengeEn: 'Write a function that awaits three promises sequentially and logs each result.',
    challengeAr: 'Write a function that awaits three promises sequentially and logs each result.',
    prerequisites: [92],
    criteriaEn: ['Function uses async/await syntax', 'try/catch around each await'],
    criteriaAr: ['Function uses async/await syntax', 'try/catch around each await']
  },
  {
    dayNumber: 97,
    phaseSlug: 'backend',
    kind: 'lesson',
    titleEn: 'Authentication Basics',
    titleAr: 'Basics Authentication',
    topic: 'Authentication',
    estimatedMinutes: 90,
    objectiveEn: 'Understand HTTP authentication, cookies, and stateless token-based auth.',
    objectiveAr: 'Understand HTTP authentication, cookies, and stateless token-based auth.',
    lessonEn:
      'HTTP authentication is built into the protocol. Basic auth sends base64-encoded credentials on every request. Digest auth uses a challenge-response flow. Stateless token-based auth (e.g. JWT) encodes user identity in a signed token that the server verifies. Each approach has trade-offs for security and scalability.',
    lessonAr:
      'HTTP authentication is built into the protocol. Basic auth sends base64-encoded credentials on every request. Digest auth uses a challenge-response flow. Stateless token-based auth (e.g. JWT) encodes user identity in a signed token that the server verifies. Each approach has trade-offs for security and scalability.',
    tasks: [
      {
        en: 'Use curl -u to authenticate with Basic auth and observe the header',
        ar: 'Use curl -u to authenticate with Basic auth and observe the header'
      },
      {
        en: 'Implement a simple JWT verification middleware',
        ar: 'Implement a simple JWT verification middleware'
      },
      {
        en: 'Compare session-based auth vs token-based auth trade-offs',
        ar: 'Compare session-based auth vs token-based auth trade-offs'
      },
      {
        en: 'Decode a JWT payload without verification to see its structure',
        ar: 'Decode a JWT payload without verification to see its structure'
      }
    ],
    exerciseEn: 'Decode a JWT token and identify the header, claims, and signature sections.',
    exerciseAr: 'Decode a JWT token and identify the header, claims, and signature sections.',
    deliverableEn: 'A script that decodes a JWT and prints its sections.',
    deliverableAr: 'A script that decodes a JWT and prints its sections.',
    resources: [
      { title: 'OWASP Authentication Cheatsheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html', kind: 'official' },
      { title: 'JWT.io', url: 'https://jwt.io/', kind: 'reference' }
    ],
    challengeEn: 'Create a JWT with a subject and expiration, then verify it with a secret.',
    challengeAr: 'Create a JWT with a subject and expiration, then verify it with a secret.',
    prerequisites: [91],
    criteriaEn: ['Can explain Basic/Digest/JWT auth', 'Can decode a JWT'],
    criteriaAr: ['Can explain Basic/Digest/JWT auth', 'Can decode a JWT']
  },
  {
    dayNumber: 98,
    phaseSlug: 'backend',
    kind: 'lesson',
    titleEn: 'HTTP Cookies and Sessions',
    titleAr: 'Cookies and Sessions',
    topic: 'Cookies',
    estimatedMinutes: 90,
    objectiveEn: 'Set HttpOnly cookies, manage session lifetimes, and prevent common cookie attacks.',
    objectiveAr: 'Set HttpOnly cookies, manage session lifetimes, and prevent common cookie attacks.',
    lessonEn:
      'Cookies store state in the browser. HttpOnly prevents JavaScript access. Secure ensures cookies are sent only over HTTPS. SameSite mitigates CSRF. Session stores data server-side and identifies the user via a cookie. Short session timeouts reduce risk.',
    lessonAr:
      'Cookies store state in the browser. HttpOnly prevents JavaScript access. Secure ensures cookies are sent only over HTTPS. SameSite mitigates CSRF. Session stores data server-side and identifies the user via a cookie. Short session timeouts reduce risk.',
    tasks: [
      {
        en: 'Set a cookie with HttpOnly and Secure flags via res.cookie',
        ar: 'Set a cookie with HttpOnly and Secure flags via res.cookie'
      },
      {
        en: 'Configure SameSite=Strict in your server setup',
        ar: 'Configure SameSite=Strict in your server setup'
      },
      {
        en: 'Implement a simple session middleware that stores user ID',
        ar: 'Implement a simple session middleware that stores user ID'
      },
      {
        en: 'Demonstrate the risk of missing Secure flag on HTTP',
        ar: 'Demonstrate the risk of missing Secure flag on HTTP'
      }
    ],
    exerciseEn: 'Set a cookie and verify the flags using DevTools.',
    exerciseAr: 'Set a cookie and verify the flags using DevTools.',
    deliverableEn: 'A server that sets a cookie with all security flags.',
    deliverableAr: 'A server that sets a cookie with all security flags.',
    resources: [
      { title: 'OWASP Cookie Cheatsheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Cookie_Cheat_Sheet.html', kind: 'official' },
      { title: 'MDN: Set-Cookie', url: MDN + '/en-US/docs/Web/HTTP/Headers/Set-Cookie', kind: 'official' }
    ],
    challengeEn: 'Set a cookie with HttpOnly; confirm it cannot be read from JavaScript.',
    challengeAr: 'Set a cookie with HttpOnly; confirm it cannot be read from JavaScript.',
    prerequisites: [97],
    criteriaEn: ['Cookie has HttpOnly flag', 'Cookie has Secure flag', 'SameSite is set'],
    criteriaAr: ['Cookie has HttpOnly flag', 'Cookie has Secure flag', 'SameSite is set']
  },
  {
    dayNumber: 99,
    phaseSlug: 'backend',
    kind: 'practice',
    titleEn: 'Rate Limiting and Input Validation',
    titleAr: 'Rate Limiting and Validation',
    topic: 'Security',
    estimatedMinutes: 100,
    objectiveEn: 'Protect your API from abuse with rate limiting and strict input validation.',
    objectiveAr: 'Protect your API from abuse with rate limiting and strict input validation.',
    lessonEn:
      'Rate limiting caps how many requests a client can make in a time window. Use a library like express-rate-limit or implement a token bucket. Input validation rejects malformed data early. Never trust client input; validate type, range, and format on the server. Combine with error handling to avoid leaking stack traces.',
    lessonAr:
      'Rate limiting caps how many requests a client can make in a time window. Use a library like express-rate-limit or implement a token bucket. Input validation rejects malformed data early. Never trust client input; validate type, range, and format on the server. Combine with error handling to avoid leaking stack traces.',
    tasks: [
      {
        en: 'Install and configure express-rate-limit with 100 requests per minute',
        ar: 'Install and configure express-rate-limit with 100 requests per minute'
      },
      {
        en: 'Validate that an email field contains a valid email address',
        ar: 'Validate that an email field contains a valid email address'
      },
      {
        en: 'Reject requests with a body larger than 10KB',
        ar: 'Reject requests with a body larger than 10KB'
      },
      {
        en: 'Combine rate limiting and validation in a single middleware',
        ar: 'Combine rate limiting and validation in a single middleware'
      }
    ],
    exerciseEn: 'Add rate limiting and email validation to an existing Express route.',
    exerciseAr: 'Add rate limiting and email validation to an existing Express route.',
    deliverableEn: 'An Express route that rate-limits and validates its input.',
    deliverableAr: 'An Express route that rate-limits and validates its input.',
    resources: [
      { title: 'npmjs.com/express-rate-limit', url: 'https://www.npmjs.com/package/express-rate-limit', kind: 'reference' },
      { title: 'OWASP Input Validation', url: 'https://owasp.org/www-project-cheat-sheets/cheatsheets/Input_Validation_Cheat_Sheet.html', kind: 'official' }
    ],
    challengeEn: 'Configure rate limiting to block an IP after 10 failed attempts.',
    challengeAr: 'Configure rate limiting to block an IP after 10 failed attempts.',
    prerequisites: [98],
    criteriaEn: ['Rate limiting active', 'Invalid email rejected', 'Body size check active'],
    criteriaAr: ['Rate limiting active', 'Invalid email rejected', 'Body size check active']
  },
  {
    dayNumber: 100,
    phaseSlug: 'backend',
    kind: 'project',
    titleEn: 'User Authentication API',
    titleAr: 'Auth API',
    topic: 'Authentication project',
    estimatedMinutes: 120,
    objectiveEn: 'Build a login/register API with JWTs, cookie-based sessions, and rate limiting.',
    objectiveAr: 'Build a login/register API with JWTs, cookie-based sessions, and rate limiting.',
    lessonEn:
      'Combine everything from the previous days: register a user (hash the password), login (issue a JWT and set a cookie), protect a route with the JWT middleware, and apply rate limiting to the login endpoint. Handle password confirmation and email format validation.',
    lessonAr:
      'Combine everything from the previous days: register a user (hash the password), login (issue a JWT and set a cookie), protect a route with the JWT middleware, and apply rate limiting to the login endpoint. Handle password confirmation and email format validation.',
    tasks: [
      {
        en: 'Implement registration with password hashing and email validation',
        ar: 'Implement registration with password hashing and email validation'
      },
      {
        en: 'Implement login that issues a JWT and sets a cookie',
        ar: 'Implement login that issues a JWT and sets a cookie'
      },
      {
        en: 'Protect a route with JWT verification middleware',
        ar: 'Protect a route with JWT verification middleware'
      },
      {
        en: 'Add rate limiting to the login endpoint',
        ar: 'Add rate limiting to the login endpoint'
      }
    ],
    exerciseEn: 'Full auth API: register, login, protected profile endpoint, rate-limited login.',
    exerciseAr: 'Full auth API: register, login, protected profile endpoint, rate-limited login.',
    deliverableEn: 'An Express API with registration, login, JWT auth, cookies, and rate limiting.',
    deliverableAr: 'An Express API with registration, login, JWT auth, cookies, and rate limiting.',
    resources: [
      { title: 'MDN: Password hashing', url: MDN + '/en-US/docs/Learn/Server-side/Express/applications#password_hashing', kind: 'official' },
      { title: 'bcrypt.js', url: 'https://www.npmjs.com/package/bcrypt', kind: 'reference' }
    ],
    challengeEn: 'Add a refresh-token flow using a separate cookie and revocation list.',
    challengeAr: 'Add a refresh-token flow using a separate cookie and revocation list.',
    prerequisites: [97, 99],
    criteriaEn: ['Registration validates email and password', 'Login issues JWT + cookie', 'Protected route returns user data', 'Login is rate-limited'],
    criteriaAr: ['Registration validates email and password', 'Login issues JWT + cookie', 'Protected route returns user data', 'Login is rate-limited']
  },
  {
    dayNumber: 101,
    phaseSlug: 'backend',
    kind: 'review',
    titleEn: 'Backend Review and Consolidation',
    titleAr: 'Backend Review and Consolidation',
    topic: 'Review',
    estimatedMinutes: 70,
    objectiveEn: 'Re-read your auth API and fix: missing try-catch, invalid JWT secrets, insecure cookie settings.',
    objectiveAr: 'Re-read your auth API and fix: missing try-catch, invalid JWT secrets, insecure cookie settings.',
    lessonEn:
      'A review day. Take your auth API from day 100 and re-examine it. Look for: try-catch blocks missing around async operations, JWT secret being a hard-coded string, cookies missing HttpOnly/Secure/SameSite, any route that writes user data without validation. Fix each issue and run your test suite.',
    lessonAr:
      'يوم مراجعة. خذ api المصادقة من اليوم 100 وأعاده تذكر للبحث عن: try-catch blocks ناقصة حول العمليات.async operations, JWT secret being a hard-coded string, cookies missing HttpOnly/Secure/SameSite, any route that writes user data without validation. Fix each issue and run your test suite.',
    tasks: [
      {
        en: 'List the five biggest mistakes in your auth API and fix each',
        ar: 'List the five biggest mistakes in your auth API and fix each'
      },
      {
        en: 'Add try-catch around each async route handler and log the error',
        ar: 'Add try-catch around each async route handler and log the error'
      },
      {
        en: 'Replace any hard-coded JWT secret with an environment variable',
        ar: 'Replace any hard-coded JWT secret with an environment variable'
      },
      {
        en: 'Verify every cookie has HttpOnly, Secure, and SameSite set',
        ar: 'Verify every cookie has HttpOnly, Secure, and SameSite set'
      }
    ],
    exerciseEn: 'Take your auth API and apply all security fixes from days 97-100.',
    exerciseAr: 'Take your auth API and apply all security fixes from days 97-100.',
    deliverableEn: 'A cleaned-up auth API plus a written list of security fixes.',
    deliverableAr: 'A cleaned-up auth API plus a written list of security fixes.',
    resources: [
      { title: 'OWASP API Security', url: 'https://owasp.org/www-project-api-security/', kind: 'official' }
    ],
    challengeEn: 'Add rotation for your JWT secret without invalidating existing tokens.',
    challengeAr: 'Add rotation for your JWT secret without invalidating existing tokens.',
    prerequisites: [100],
    criteriaEn: ['Try-catch around all async routes', 'JWT secret from env', 'All cookies have security flags'],
    criteriaAr: ['Try-catch around all async routes', 'JWT secret from env', 'All cookies have security flags']
  },
  {
    dayNumber: 102,
    phaseSlug: 'backend',
    kind: 'lesson',
    titleEn: 'Error Handling and Logging',
    titleAr: 'Handling Errors and Logging',
    topic: 'Error Handling',
    estimatedMinutes: 90,
    objectiveEn: 'Structure errors with custom classes, log contextual data, and avoid leaking secrets.',
    objectiveAr: 'Structure errors with custom classes, log contextual data, and avoid leaking secrets.',
    lessonEn:
      'Every app will encounter errors. Build a custom error class with status and message. Use a structured logger (winston, pino) that captures request ID, user ID, and duration. Never log passwords or tokens. Always redact sensitive data before writing to disk or sending to external systems.',
    lessonAr:
      'سيواجه التطبيق أخطاء في وقت ما. صمم فئة خطأ مخصصة تحتوي على الحالة والرسالة. استخدم مسجلًا منظمًا (winston, pino) يسجل طلب ID والمستخدم ومدة المعالجة. nunca تدوّن كلمات المرور أو التوكنات. احذف البيانات الحساسة قبل كتابتها على disk أو إرسالها لنظم خارجية.',
    tasks: [
      {
        en: 'Create a custom error class with status property and message',
        ar: 'Create a custom error class with status property and message'
      },
      {
        en: 'Configure a logger with request ID correlation',
        ar: 'Configure a logger with request ID correlation'
      },
      {
        en: 'Redact sensitive fields from an error before logging',
        ar: 'Redact sensitive fields from an error before logging'
      },
      {
        en: 'Write a middleware that catches async errors and forwards to error handler',
        ar: 'Write a middleware that catches async errors and forwards to error handler'
      }
    ],
    exerciseEn: 'Build a custom error class and a logger middleware for an Express app.',
    exerciseAr: 'Build a custom error class and a logger middleware for an Express app.',
    deliverableEn: 'A custom error class and an Express error-handling middleware.',
    deliverableAr: 'A custom error class and an Express error-handling middleware.',
    resources: [
      { title: 'Winston docs', url: 'https://github.com/winstonjs/winston', kind: 'reference' },
      { title: 'MDN: Error objects', url: MDN + '/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error', kind: 'official' }
    ],
    challengeEn: 'Create an error class that maps HTTP status codes to error types',
    challengeAr: 'Create an error class that maps HTTP status codes to error types',
    prerequisites: [91],
    criteriaEn: ['Custom error class with status', 'Logger correlates request ID', 'Redacts passwords from logs'],
    criteriaAr: ['فئة خطأ مخصصة تحتوي على الحالة', 'مسجل يرتبط بـ request ID', 'يحذف كلمات المرور من السجلات']
  },
  {
    dayNumber: 103,
    phaseSlug: 'backend',
    kind: 'lesson',
    titleEn: 'API Versioning',
    titleAr: 'توثيق API',
    topic: 'API Design',
    estimatedMinutes: 90,
    objectiveEn: 'Support multiple API versions concurrently and deprecate old endpoints gracefully.',
    objectiveAr: 'Support multiple API versions concurrently and deprecate old endpoints gracefully.',
    lessonEn:
      'URL versioning (/v1/resources, /v2/resources) and header versioning (Accept: v2) are two common approaches. Deprecate endpoints with a Link header and a JSON body explaining the migration path. Keep old versions running until all clients have migrated.',
    lessonAr:
      'التمكين من ترقيم versioning URLs (/v1/resources, /v2/resources) أو عبر الرؤوس (Accept: v2) هي نهجان شائعان. retire endpoints برفع Header Link وتقديم جسم JSON يشرح طريق الهجرة. احتفظ بالإصدارات القديمة حتى migrates جميع clients.',
    tasks: [
      {
        en: 'Add a /v2 route alongside existing /v1 routes',
        ar: 'Add a /v2 route alongside existing /v1 routes'
      },
      {
        en: 'Return a Link header with rel="deprecation" for a v1 endpoint',
        ar: 'Return a Link header with rel="deprecation" for a v1 endpoint'
      },
      {
        en: 'Document the migration path from v1 to v2 in the response body',
        ar: 'Document the migration path from v1 to v2 in the response body'
      },
      {
        en: 'Test that both v1 and v2 endpoints return correct data',
        ar: 'Test that both v1 and v2 endpoints return correct data'
      }
    ],
    exerciseEn: 'Version an existing Express route for v1 and v2, and add deprecation headers.',
    exerciseAr: 'Version an existing Express route for v1 and v2, and add deprecation headers.',
    deliverableEn: 'An Express route available at both /v1 and /v2 with deprecation headers for v1.',
    deliverableAr: 'An Express route available at both /v1 and /v2 with deprecation headers for v1.',
    resources: [
      { title: 'MDN: Link header', url: MDN + '/en-US/docs/HTTP/Headers/Link', kind: 'official' },
      { title: 'API Design Patterns', url: 'https://apihandbook.dev/', kind: 'reference' }
    ],
    challengeEn: 'Add a Link header with deprecation for a v1 endpoint and verify with curl',
    challengeAr: 'Add a Link header with deprecation for a v1 endpoint and verify with curl',
    prerequisites: [91],
    criteriaEn: ['v1 and v2 routes both functional', 'Link header present on v1', 'Deprecation message in body'],
    criteriaAr: ['v1 و v2 routes both functional', 'Link header موجود على v1', 'رسالة deprecation في الجسم']
  },
  {
    dayNumber: 104,
    phaseSlug: 'backend',
    kind: 'practice',
    titleEn: 'Integration Testing',
    titleAr: 'Tests تكامل',
    topic: 'Testing',
    estimatedMinutes: 100,
    objectiveEn: 'Write integration tests that spin up a real HTTP server and test API endpoints.',
    objectiveAr: 'Write integration tests that spin up a real HTTP server and test API endpoints.',
    lessonEn:
      'Integration tests start the server and hit real endpoints. Use supertest to make requests. Test happy paths and error cases. Clean up the database after each test. Aim for fast feedback; keep integration tests separate from unit tests.',
    lessonAr:
      'tests التكامل تبدأ التشغيل الخادم وترسل طلبات للمنفذ الحقيقي. استخدم supertest لإرسال طلبات. اختبر الحالات happy paths والأخطاء. أنهِ قاعدة البيانات بعد كل اختبار. احتفظ بالاختبارات التكامل سريعة؛ وفصلها عن الاختبارات الوحدات.',
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
    exerciseEn: 'Write an integration test suite for the auth API (register, login, protected route).',
    exerciseAr: 'Write an integration test suite for the auth API (register, login, protected route).',
    deliverableEn: 'A Vitest test file that covers the auth API endpoints.',
    deliverableAr: 'A Vitest test file that covers the auth API endpoints.',
    resources: [
      { title: 'supertest', url: 'https://github.com/visionmedia/supertest', kind: 'reference' },
      { title: 'Vitest docs', url: 'https://vitest.dev/', kind: 'official' }
    ],
    challengeEn: 'Write an integration test that a deprecated v1 endpoint returns 410 Gone',
    challengeAr: 'Write an integration test that a deprecated v1 endpoint returns 410 Gone',
    prerequisites: [102],
    criteriaEn: ['supertest installed', 'Test covers register/login/protected', 'Database reset with beforeEach'],
    criteriaAr: ['supertest已安装', 'Test covers register/login/protected', 'Database reset with beforeEach']
  },
  {
    dayNumber: 105,
    phaseSlug: 'backend',
    kind: 'project',
    titleEn: 'Full Authentication System',
    titleAr: 'نظام المصادقة الكامل',
    topic: 'Authentication project',
    estimatedMinutes: 120,
    objectiveEn: 'Build a complete auth system: registration, login, JWT cookies, refresh tokens, and rate limiting.',
    objectiveAr: 'Build a complete auth system: registration, login, JWT cookies, refresh tokens, and rate limiting.',
    lessonEn:
      'Combine all the pieces from previous days: register (hash password, create user), login (issue access JWT in cookie, refresh token in separate httpOnly cookie), protect routes with JWT middleware, refresh token flow, and rate-limited login. Add password reset via email.',
    lessonAr:
      'دمج كل القطع من الأيام السابقة: التسجيل (تجزئة كلمة المرور، إنشاء المستخدم), تسجيل الدخول (إصدار JWT في cookie، توكن التحديث في cookie منفصل httpOnly), حماية routes بواسطة Middleware JWT, تدفق refresh token, وتطبيق تقييد rate limiting على endpoint تسجيل الدخول. إضافة إعادة تعيين كلمة المرور عبر البريد الإلكتروني.',
    tasks: [
      {
        en: 'Implement password reset request with email validation',
        ar: 'Implement password reset request with email validation'
      },
      {
        en: 'Issue access JWT and refresh token on login',
        ar: 'Issue access JWT and refresh token on login'
      },
      {
        en: 'Protect a route with JWT verification and refresh token rotation',
        ar: 'Protect a route with JWT verification and refresh token rotation'
      },
      {
        en: 'Add rate limiting and email verification flow',
        ar: 'Add rate limiting and email verification flow'
      }
    ],
    exerciseEn: 'Full auth system: register, login, JWT cookies, refresh tokens, rate limiting, password reset.',
    exerciseAr: 'Full auth system: register, login, JWT cookies, refresh tokens, rate limiting, password reset.',
    deliverableEn: 'An Express API with complete auth: register, login, JWT cookies, refresh tokens, rate limiting, password reset.',
    deliverableAr: 'An Express API with complete auth: register, login, JWT cookies, refresh tokens, rate limiting, password reset.',
    resources: [
      { title: 'MDN: Password reset', url: MDN + '/en-US/docs/Learn/Server-side/Express/applications#password_reset', kind: 'official' },
      { title: 'npmjs.com/express-rate-limit', url: 'https://www.npmjs.com/package/express-rate-limit', kind: 'reference' }
    ],
    challengeEn: 'Add refresh token revocation on logout and verify old tokens are rejected',
    challengeAr: 'Add refresh token revocation on logout and verify old tokens are rejected',
    prerequisites: [101, 103],
    criteriaEn: ['Register hashes password', 'Login issues JWT + two cookies', 'Protected route verified', 'Rate-limited login', 'Password reset flow'],
    criteriaAr: ['تجزئة كلمة المرور في التسجيل', 'تسجيل دخولIssues JWT + كوكيز', 'مسار Protected route verified', 'تسجيل دخول rate-limited', 'تدفق إعادة تعيين كلمة المرور']
  },
  {
    dayNumber: 106,
    phaseSlug: 'backend',
    kind: 'review',
    titleEn: 'Backend Review and Consolidation',
    titleAr: 'Backend Review and Consolidation',
    topic: 'Review',
    estimatedMinutes: 70,
    objectiveEn: 'Re-read your full auth system and fix: missing try-catch, invalid JWT secrets, insecure cookie settings, missing rate limiting.',
    objectiveAr: 'Re-read your full auth system and fix: missing try-catch, invalid JWT secrets, insecure cookie settings, missing rate limiting.',
    lessonEn:
      'A review day. Take your full auth system from day 105 and re-examine it. Look for: try-catch blocks missing around async operations, JWT secret being a hard-coded string, cookies missing HttpOnly/Secure/SameSite, any route that writes user data without validation, rate limiting missing from login. Fix each issue and run your test suite.',
    lessonAr:
      'يوم مراجعة. خذ system المصادقة الكامل من اليوم 105 وأعاده تذكر للبحث عن: try-catch blocks ناقصة حول العمليات.async operations, JWT secret being a hard-coded string, cookies missing HttpOnly/Secure/SameSite, any route that writes user data without validation, rate limiting missing from login. Fix each issue and run your test suite.',
    tasks: [
      {
        en: 'List the ten biggest mistakes in your auth system and fix each',
        ar: 'List the ten biggest mistakes in your auth system and fix each'
      },
      {
        en: 'Add try-catch around each async route handler and log the error',
        ar: 'Add try-catch around each async route handler and log the error'
      },
      {
        en: 'Replace any hard-coded JWT secret with an environment variable',
        ar: 'Replace any hard-coded JWT secret with an environment variable'
      },
      {
        en: 'Verify every cookie has HttpOnly, Secure, and SameSite set',
        ar: 'Verify every cookie has HttpOnly, Secure, and SameSite set'
      },
      {
        en: 'Add rate limiting to the login endpoint if not already present',
        ar: 'Add rate limiting to the login endpoint if not already present'
      }
    ],
    exerciseEn: 'Take your auth system and apply all security fixes from days 97-105.',
    exerciseAr: 'Take your auth system and apply all security fixes from days 97-105.',
    deliverableEn: 'A cleaned-up auth system plus a written list of security fixes.',
    deliverableAr: 'A cleaned-up auth system plus a written list of security fixes.',
    resources: [
      { title: 'OWASP API Security', url: 'https://owasp.org/www-project-api-security/', kind: 'official' }
    ],
    challengeEn: 'Add rotation for your JWT secret without invalidating existing tokens.',
    challengeAr: 'Add rotation for your JWT secret without invalidating existing tokens.',
    prerequisites: [105],
    criteriaEn: ['Try-catch around all async routes', 'JWT secret from env', 'All cookies have security flags', 'Rate limiting active'],
    criteriaAr: ['Try-catch around all async routes', 'JWT secret from env', 'All cookies have security flags', 'Rate limiting active']
  },
  {
    dayNumber: 107,
    phaseSlug: 'backend',
    kind: 'lesson',
    titleEn: 'Docker and Containerization',
    titleAr: 'Docker وتغليف',
    topic: 'DevOps',
    estimatedMinutes: 90,
    objectiveEn: 'Build, run, and debug Docker containers; expose services via ports and volumes.',
    objectiveAr: 'Build, run, and debug Docker containers; expose services via ports and volumes.',
    lessonEn:
      'Docker packages an app and its dependencies into a portable container. `docker run` starts a container, `-p` maps ports, and `-v` mounts volumes. A `Dockerfile` automates image build with `FROM`, `RUN`, `CMD`, and `EXPOSE`. Containers are ephemeral by design; persist data with named volumes or bind mounts.',
    lessonAr:
      'Docker يغلف التطبيق واعتماءاته في حاوية نقلة. `docker run` يشغّل الحاوية، و`-p`Mapping المنافذ، و`-v` mounting volumes. ملف `Dockerfile` آلي image build بـ `FROM`, `RUN`, `CMD`, و `EXPOSE`. الحاويات مؤقتة بطبيعتها؛ جهَّز البيانات بحجوم مسمَّاة أو mountbind.',
    tasks: [
      {
        en: 'Write a Dockerfile that runs node -e "console.log(hello)"',
        ar: 'Write a Dockerfile that runs node -e "console.log(hello)"'
      },
      {
        en: 'Run a container exposing port 3000 and test with curl',
        ar: 'Run a container exposing port 3000 and test with curl'
      },
      {
        en: 'Mount a named volume and persist data across restarts',
        ar: 'Mount a named volume and persist data across restarts'
      },
      {
        en: 'List running containers and their port mappings',
        ar: 'List running containers and their port mappings'
      }
    ],
    exerciseEn: 'Dockerize a simple Node.js app and run it with port mapping.',
    exerciseAr: 'Dockerize a simple Node.js app and run it with port mapping.',
    deliverableEn: 'A Dockerfile and a running container accessible via localhost.',
    deliverableAr: 'A Dockerfile and a running container accessible via localhost.',
    resources: [
      { title: 'Docker docs', url: 'https://docs.docker.com/', kind: 'official' },
      { title: 'MDN: Docker', url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Docker', kind: 'reference' }
    ],
    challengeEn: 'Reduce the image size by removing unnecessary layers',
    challengeAr: 'Reduce the image size by removing unnecessary layers',
    prerequisites: [91],
    criteriaEn: ['Dockerfile creates working container', 'Container responds on mapped port', 'Named volume persists data'],
    criteriaAr: ['Dockerfile creates working container', 'Container responds on mapped port', 'Named volume persists data']
  },
  {
    dayNumber: 108,
    phaseSlug: 'backend',
    kind: 'lesson',
    titleEn: 'CI/CD Pipelines',
    titleAr: 'circles/Direct',
    topic: 'CI/CD',
    estimatedMinutes: 90,
    objectiveEn: 'Set up automated testing and deployment with GitHub Actions or GitLab CI.',
    objectiveAr: 'Set up automated testing and deployment with GitHub Actions or GitLab CI.',
    lessonEn:
      'A CI pipeline runs on every push: install deps, run tests, build the image, and deploy. Use actions/checkout, setup-node, and your custom test/script steps. Configure secrets for credentials. Deploy to a platform (Render, Fly.io, Railway) via their CLI or API. Enable rollbacks on failure.',
    lessonAr:
      'أنبوبة CI تعمل على كل push: dependencies,tests, image build, deploy. استخدم actions/checkout, setup-node, والخطواتustom test/script.Configure secrets for credentials. Deploy to a platform (Render, Fly.io, Railway) via their CLI or API. Enable rollbacks on failure.',
    tasks: [
      {
        en: 'Create a GitHub Actions workflow that runs tests on push',
        ar: 'Create a GitHub Actions workflow that runs tests on push'
      },
      {
        en: 'Add a step to build a Docker image',
        ar: 'Add a step to build a Docker image'
      },
      {
        en: 'Configure deployment to a platform of your choice',
        ar: 'Configure deployment to a platform of your choice'
      },
      {
        en: 'Test that a failed build marks the run as red',
        ar: 'Test that a failed build marks the run as red'
      }
    ],
    exerciseEn: 'Set up a CI pipeline that tests and deploys your app on every push.',
    exerciseAr: 'Set up a CI pipeline that tests and deploys your app on every push.',
    deliverableEn: 'A .github/workflows CI file that tests and deploys your app.',
    deliverableAr: 'A .github/workflows CI file that tests and deploys your app.',
    resources: [
      { title: 'GitHub Actions docs', url: 'https://docs.github.com/en/actions', kind: 'official' },
      { title: 'CI/CD handbook', url: 'https://cicdhandbook.dev/', kind: 'reference' }
    ],
    challengeEn: 'Add a pipeline step that runs a security scan on the Docker image',
    challengeAr: 'Add a pipeline step that runs a security scan on the Docker image',
    prerequisites: [107],
    criteriaEn: ['Workflow runs on push', 'Tests pass', 'Image builds successfully'],
    criteriaAr: ['تنفيذ التشغيل على كل push', 'الاختبارات تنجح', 'الصورة تُبنى successfully']
  },
  {
    dayNumber: 109,
    phaseSlug: 'backend',
    kind: 'practice',
    titleEn: 'Observability: Logging and Metrics',
    titleAr: 'الرصُّاقبة: السِّجِّل والمقاييس',
    topic: 'Observability',
    estimatedMinutes: 100,
    objectiveEn: 'Instrument your app with structured logs and export metrics to Prometheus.',
    objectiveAr: 'Instrument your app with structured logs and export metrics to Prometheus.',
    lessonEn:
      'Structured logs use JSON with a consistent field set (timestamp, level, requestId, duration). Metrics expose counters and gauges via a /metrics endpoint. Prometheus scrapes the endpoint; Grafana visualizes it. Avoid logging PII; redact before emitting.',
    lessonAr:
      'السِّجِّل المنظم يستخدم JSON بمجال ثابت (timestamp, level, requestId, duration). المقاييس تعرض counters ومؤشرات عبر endpoint /metrics. Prometheus يسحب endpoint; Grafana تُظهره. احذف PII من السِّجِّل; احمرِّ قبل الإخراج.',
    tasks: [
      {
        en: 'Configure a logger to output JSON structured logs',
        ar: 'Configure a logger to output JSON structured logs'
      },
      {
        en: 'Add a /metrics endpoint that exposes a request counter',
        ar: 'Add a /metrics endpoint that exposes a request counter'
      },
      {
        en: 'Set up Prometheus to scrape the /metrics endpoint',
        ar: 'Set up Prometheus to scrape the /metrics endpoint'
      },
      {
        en: 'Redact sensitive data from a log line before emitting',
        ar: 'Redact sensitive data from a log line before emitting'
      }
    ],
    exerciseEn: 'Instrument an Express app with structured logs and a /metrics endpoint.',
    exerciseAr: 'Instrument an Express app with structured logs and a /metrics endpoint.',
    deliverableEn: 'An Express app that logs JSON and exposes Prometheus-compatible metrics.',
    deliverableAr: 'Express app that logs JSON and exposes Prometheus-compatible metrics.',
    resources: [
      { title: 'Prometheus docs', url: 'https://prometheus.io/docs/', kind: 'official' },
      { title: 'Winston structured logs', url: 'https://github.com/winstonjs/winston', kind: 'reference' }
    ],
    challengeEn: 'Add a gauge that tracks the app uptime in seconds',
    challengeAr: 'Add a gauge that tracks the app uptime in seconds',
    prerequisites: [108],
    criteriaEn: ['Logger outputs JSON', '/metrics endpoint works', 'Prometheus can scrape it'],
    criteriaAr: ['السِّجِّل يصدر JSON', 'ينتهي التشغيل /metrics', 'يمكن لـ Prometheus جلبه']
  },
  {
    dayNumber: 110,
    phaseSlug: 'backend',
    kind: 'project',
    titleEn: 'Containerized Full-Stack App',
    titleAr: 'تطبيق كامل التَّغليف',
    topic: 'Full-stack project',
    estimatedMinutes: 120,
    objectiveEn: 'Dockerize a full-stack app (frontend + backend) with separate containers, networking, and a shared volume for data.',
    objectiveAr: 'Dockerize a full-stack app (frontend + backend) with separate containers, networking, and a shared volume for data.',
    lessonEn:
      'Use multi-stage builds to keep the final image slim. Define services in docker-compose.yml: backend, frontend, and a postgres or redis volume. Network the services under a custom bridge network. Expose the frontend on port 80 and the backend on its API port.',
    lessonAr:
      'استخدم Builds متعددة المراحل للحفاظ على image slim. عرف الخدمات في docker-compose.yml: backend, frontend, و postgres أو redis volume. شبكة الخدمات تحت شبكة جسر مخصصة. تعرضfrontend على المنفذ 80 و backend على منفذ API.',
    tasks: [
      {
        en: 'Write a multi-stage Dockerfile for the backend',
        ar: 'Write a multi-stage Dockerfile for the backend'
      },
      {
        en: 'Write a Dockerfile for a React frontend',
        ar: 'Write a Dockerfile for a React frontend'
      },
      {
        en: 'Configure docker-compose.yml with backend, frontend, and a db service',
        ar: 'Configure docker-compose.yml with backend, واجهة أمامية, and a db service'
      },
      {
        en: 'Run docker-compose up and verify both containers are healthy',
        ar: 'Run docker-compose up and verify both containers are healthy'
      }
    ],
    exerciseEn: 'Dockerize a full-stack app with docker-compose and verify both services run.',
    exerciseAr: 'Dockerize a full-stack app with docker-compose and verify both services run.',
    deliverableEn: 'docker-compose.yml and Dockerfiles for backend and frontend',
    deliverableAr: 'docker-compose.yml and Dockerfiles for backend and frontend.',
    resources: [
      { title: 'Docker Compose docs', url: 'https://docs.docker.com/compose/', kind: 'official' },
      { title: 'Multi-stage builds', url: 'https://docs.docker.com/build/building/multi-stage/', kind: 'reference' }
    ],
    challengeEn: 'Add a healthcheck to each service in docker-compose.yml',
    challengeAr: 'Add a healthcheck to each service in docker-compose.yml',
    prerequisites: [107, 109],
    criteriaEn: ['Backend Dockerfile multi-stage', 'Frontend Dockerfile works', 'docker-compose up runs both', 'Healthchecks pass'],
    criteriaAr: ['Dockerfile backend multi-stage', 'Dockerfile frontend تعمل', 'docker-compose up runs both', 'healthchecks pass']
  },
  {
    dayNumber: 111,
    phaseSlug: 'backend',
    kind: 'review',
    titleEn: 'Backend Review and Consolidation',
    titleAr: 'Backend Review and Consolidation',
    topic: 'Review',
    estimatedMinutes: 70,
    objectiveEn: 'Re-read your backend projects and fix: missing Dockerfiles, broken CI, unclear logs.',
    objectiveAr: 'Re-read your backend projects and fix: missing Dockerfiles, broken CI, unclear logs.',
    lessonEn:
      'A review day. Take your backend work from days 97-110 and re-examine it. Look for: missing Dockerfiles or broken CI pipelines, logging that isn\'t structured or redacted, poorly named services in docker-compose, any route that writes user data without validation. Fix each issue and run your test suite.',
    lessonAr:
      'يوم مراجعة. خذ مشاريع backend من الأيام 97-110 وأعاده构型 للبحث عن: missing Dockerfiles or broken CI pipelines, logging that isn\'t structured or redacted, poorly named services in docker-compose, any route that writes user data without validation. Fix each issue and run your test suite.',
    tasks: [
      {
        en: 'List the ten biggest mistakes in your backend work and fix each',
        ar: 'List the ten biggest mistakes in your backend work and fix each'
      },
      {
        en: 'Add structured JSON logging to any service that lacks it',
        ar: 'Add structured JSON logging to any service that lacks it'
      },
      {
        en: 'Fix any docker-compose service name conflicts',
        ar: 'Fix any docker-compose service name conflicts'
      },
      {
        en: 'Run your full test suite and fix any newly broken tests',
        ar: 'Run your full test suite and fix any newly broken tests'
      }
    ],
    exerciseEn: 'Take your backend work and apply all improvements from days 97-110.',
    exerciseAr: 'Take your backend work and apply all improvements from days 97-110.',
    deliverableEn: 'A consolidated backend portfolio with Docker, CI, and observability.',
    deliverableAr: 'A consolidated backend portfolio with Docker, CI, and observability.',
    resources: [
      { title: 'OWASP API Security', url: 'https://owasp.org/www-project-api-security/', kind: 'official' }
    ],
    challengeEn: 'Add a rollback step to your CI pipeline and verify it restores the previous version.',
    challengeAr: 'Add a rollback step to your CI pipeline and verify it restores the previous version.',
    prerequisites: [110],
    criteriaEn: ['All Dockerfiles present', 'CI pipeline green', 'Structured logs in all services'],
    criteriaAr: ['جميع Dockerfiles موجودة', 'تنباخ CI أخضر', 'سجِّلJSON structured in all services']
  },
  {
    dayNumber: 112,
    phaseSlug: 'backend',
    kind: 'lesson',
    titleEn: 'Cache Basics',
    titleAr: 'Basics Cache',
    topic: 'Caching',
    estimatedMinutes: 90,
    objectiveEn: 'Understand caching layers, HTTP headers, and prevent stale data.',
    objectiveAr: 'Understand caching layers, HTTP headers, and prevent stale data.',
    lessonEn:
      'Caching improves performance by storing frequently accessed data closer to the client. Use Cache-Control headers to manage freshness, and ETag for conditional requests. Avoid caching sensitive data. A simple in-memory cache can reduce database load significantly.',
    lessonAr:
      'تحسين الأداء عن طريق تخزين البيانات المستخدمة frequently closer to the client. استخدم Cache-Control headers لإدارة الانتعاش، وETag للطلبات الشرطية. تجنب تخزين البيانات الحساسة. Cache بسيط في الذاكرة يمكن أن يقلل حمل database significantly.',
    tasks: [
      {
        en: 'Set a Cache-Control header on a route to set max-age=3600',
        ar: 'Set a Cache-Control header on a route to set max-age=3600'
      },
      {
        en: 'Demonstrate an ETag-based conditional request',
        ar: 'Demonstrate an ETag-based conditional request'
      },
      {
        en: 'Configure a basic in-memory cache with a TTL of 5 minutes',
        ar: 'Configure a basic in-memory cache with a TTL of 5 minutes'
      },
      {
        en: 'Avoid caching passwords in any cache layer',
        ar: 'Avoid caching passwords in any cache layer'
      }
    ],
    exerciseEn: 'Add Cache-Control headers and ETag support to an existing Express route.',
    exerciseAr: 'Add Cache-Control headers and ETag support to an existing Express route.',
    deliverableEn: 'An Express route with Cache-Control and ETag headers.',
    deliverableAr: 'Express route with Cache-Control and ETag headers.',
    resources: [
      { title: 'MDN: HTTP caching', url: MDN + '/en-US/docs/Web/HTTP/Caching', kind: 'official' },
      { title: 'Express session cache', url: 'https://www.npmjs.com/package/express-session', kind: 'reference' }
    ],
    challengeEn: 'Configure a cache that invalidates on data update',
    challengeAr: 'Configure a cache that invalidates on data update',
    prerequisites: [107],
    criteriaEn: ['Cache-Control header set', 'ETag generated', 'Passwords not cached'],
    criteriaAr: ['Header Cache-Control set', 'ETag Generated', 'passwords not cached']
  },
  {
    dayNumber: 113,
    phaseSlug: 'backend',
    kind: 'lesson',
    titleEn: 'Error Handling and Retries',
    titleAr: 'Handling Errors and Retries',
    topic: 'Error Handling',
    estimatedMinutes: 90,
    objectiveEn: 'Implement graceful error handling and exponential backoff strategies.',
    objectiveAr: 'Implement graceful error handling and exponential backoff strategies.',
    lessonEn:
      'Network requests can fail transiently. Use exponential backoff (1s, 2s, 4s, 8s) with a max retry count. Distinguish between client errors (4xx) and server errors (5xx) — never retry on 4xx. Use a library like p-retry or implement the pattern manually.',
    lessonAr:
      'يمكن أن تفشل طلبات الشبكة بشكل مؤقت. استخدم экспоненциальный回退 مع حد أقصى لعدد المحاولات. 구분 بين أخطاء العميل (4xx) وأخطاء الخادم (5xx) — never retry on 4xx. Use a library like p-retry or implement the pattern manually.',
    tasks: [
      {
        en: 'Implement a retry function with exponential backoff (max 3 attempts)',
        ar: 'Implement a retry function with exponential backoff (max 3 attempts)'
      },
      {
        en: 'Differentiate between retryable (5xx) and non-retryable (4xx) errors',
        ar: 'Differentiate between retryable (5xx) and non-retryable (4xx) errors'
      },
      {
        en: 'Use p-retry to wrap a failing HTTP request',
        ar: 'Use p-retry to wrap a failing HTTP request'
      },
      {
        en: 'Log each retry attempt with duration and error type',
        ar: 'Log each retry attempt with duration and error type'
      }
    ],
    exerciseEn: 'Create a retry utility with exponential backoff and use it to call an external API.',
    exerciseAr: 'Create a retry utility with exponential backoff and use it to call an external API.',
    deliverableEn: 'A retry utility function and a test script that uses it.',
    deliverableAr: 'A retry utility function and a test script that uses it.',
    resources: [
      { title: 'MDN: Fetch API', url: MDN + '/fetch', kind: 'official' },
      { title: 'p-retry npm package', url: 'https://www.npmjs.com/package/p-retry', kind: 'reference' }
    ],
    challengeEn: 'Implement a retry that gives up after 5 failed attempts with jitter',
    challengeAr: 'Implement a retry that gives up after 5 failed attempts with jitter',
    prerequisites: [112],
    criteriaEn: ['Function retries with exponential backoff', 'Max 3 attempts', 'Logs each attempt'],
    criteriaAr: ['Function retries with exponential backoff', 'Max 3 attempts', 'Logs each attempt']
  },
  {
    dayNumber: 114,
    phaseSlug: 'backend',
    kind: 'practice',
    titleEn: 'API Versioning Deep Dive',
    titleAr: 'توثيق API عميق',
    topic: 'API Design',
    estimatedMinutes: 100,
    objectiveEn: 'Support multiple API versions with separate schemas and tailored responses.',
    objectiveAr: 'Support multiple API versions with separate schemas and tailored responses.',
    lessonEn:
      'Versioning can be URL-based (/v1, /v2) or header-based (Accept: v2). Each version may have a different data shape. Use a library like express-version-router or implement custom middleware. Document the deprecation policy for each version.',
    lessonAr:
      'يمكن أن يكون الترقيم Based on URL (/v1, /v2) or header-based (Accept: v2). Each version may have a different data shape. Use a library like express-version-router or implement custom middleware. Document the deprecation policy for each version.',
    tasks: [
      {
        en: 'Add a /v2 version of an existing route with a different response shape',
        ar: 'Add a /v2 version of an existing route with a different response shape'
      },
      {
        en: 'Configure a header-based version acceptor',
        ar: 'Configure a header-based version acceptor'
      },
      {
        en: 'Document the differences between v1 and v2 responses',
        ar: 'Document the differences between v1 and v2 responses'
      },
      {
        en: 'Test that v1 and v2 routes return their respective shapes',
        ar: 'Test that v1 and v2 routes return their respective shapes'
      }
    ],
    exerciseEn: 'Version an existing Express route for v1 and v2 with different response shapes.',
    exerciseAr: 'Version an existing Express route for v1 and v2 with different response shapes.',
    deliverableEn: 'An Express route available at /v1 and /v2 with distinct response schemas.',
    deliverableAr: 'Express route available at /v1 and /v2 with distinct response schemas.',
    resources: [
      { title: 'express-version-router', url: 'https://www.npmjs.com/package/express-version-router', kind: 'reference' },
      { title: 'API Design Patterns', url: 'https://apihandbook.dev/', kind: 'reference' }
    ],
    challengeEn: 'Add a v3 route that deprecates v2 with a Link header',
    challengeAr: 'Add a v3 route that deprecates v2 with a Link header',
    prerequisites: [113],
    criteriaEn: ['v1 and v2 routes functional', 'v3 deprecation header', 'Distinct response shapes'],
    criteriaAr: ['v1 و v2 routes functional', 'Header deprecation v2', 'أشكال response distinct']
  },
  {
    dayNumber: 115,
    phaseSlug: 'backend',
    kind: 'project',
    titleEn: 'Rate Limiting and Throttling',
    titleAr: 'Rate Limiting and Throttling',
    topic: 'Security',
    estimatedMinutes: 120,
    objectiveEn: 'Implement sliding window and token bucket rate limiting strategies.',
    objectiveAr: 'Implement sliding window and token bucket rate limiting strategies.',
    lessonEn:
      'Rate limiting caps requests in a time window. Sliding window tracks requests per time interval. Token bucket allows burst up to a cap. Combine with IP-based and user-based limits. Return 429 with a Retry-After header when the limit is exceeded.',
    lessonAr:
      'تحديد الحد الأقصى للطلبات في نافذة زمنية. sliding window تتبع الطلبات لكل فترة زمنية. token bucket يسمح بالاندفاع حتى الحد الأقصى..Combine with IP-based and user-based limits. Return 429 with a Retry-After header when the limit is exceeded.',
    tasks: [
      {
        en: 'Install and configure express-rate-limit with a sliding window of 100 requests per 15 minutes',
        ar: 'Install and configure express-rate-limit with a sliding window of 100 requests per 15 minutes'
      },
      {
        en: 'Implement a token bucket algorithm with a cap of 50 and refill rate of 10 per minute',
        ar: 'Implement a token bucket algorithm with a cap of 50 and refill rate of 10 per minute'
      },
      {
        en: 'Apply rate limiting to the login endpoint with a 429 response',
        ar: 'Apply rate limiting to the login endpoint with a 429 response'
      },
      {
        en: 'Combine IP-based and user-based rate limiting',
        ar: 'Combine IP-based and user-based rate limiting'
      }
    ],
    exerciseEn: 'Set up rate limiting on an Express route with 429 handling.',
    exerciseAr: 'Set up rate limiting on an Express route with a 429 response.',
deliverableEn: 'Express route with rate limiting and 429 Retry-After header.',
    deliverableAr: 'Express route with rate limiting and 429 Retry-After header.',
    resources: [
      { title: 'npmjs.com/express-rate-limit', url: 'https://www.npmjs.com/package/express-rate-limit', kind: 'reference' },
      { title: 'OWASP Rate Limiting', url: 'https://owasp.org/www-project-cheat-sheets/cheatsheets/Rate_Limiting_Cheat_Sheet.html', kind: 'official' }
    ],
    challengeEn: 'Configure token bucket that allows 10 burst requests then refills at 5/min',
    challengeAr: 'Configure token bucket that allows 10 burst requests then refills at 5/min',
    prerequisites: [114],
    criteriaEn: ['Sliding window active', 'Token bucket with cap', '429 response on limit', 'IP + user combined'],
    criteriaAr: ['sliding window active', 'Token bucket with cap', '429 response on limit', 'IP + user combined']
  },
  {
    dayNumber: 116,
    phaseSlug: 'backend',
    kind: 'review',
    titleEn: 'Backend Review and Consolidation',
    titleAr: 'Backend Review and Consolidation',
    topic: 'Review',
    estimatedMinutes: 70,
    objectiveEn: 'Re-read your backend projects and fix: missing rate limiting, unhandled errors, missing cache headers.',
    objectiveAr: 'Re-read your backend projects and fix: missing rate limiting, unhandled errors, missing cache headers.',
    lessonEn:
      'A review day. Take your backend work from days 97-115 and re-examine it. Look for: missing rate limiting configurations, unhandled async errors, cache headers missing or improperly set, any route that writes user data without validation. Fix each issue and run your test suite.',
    lessonAr:
      'يوم مراجعة. خذ مشاريع backend من الأيام 97-115 وأعاده构型 للبحث عن: missing rate limiting configurations, unhandled async errors, cache headers missing or improperly set, any route that writes user data without validation. Fix each issue and run your test suite.',
    tasks: [
      {
        en: 'List the fifteen biggest mistakes in your backend work and fix each',
        ar: 'List the fifteen biggest mistakes in your backend work and fix each'
      },
      {
        en: 'Add rate limiting to any service that lacks it',
        ar: 'Add rate limiting to any service that lacks it'
      },
      {
        en: 'Add try-catch around each async route handler and log the error',
        ar: 'Add try-catch around each async route handler and log the error'
      },
      {
        en: 'Add Cache-Control and ETag headers to services that lack them',
        ar: 'Add Cache-Control and ETag headers to services that lack them'
      }
    ],
    exerciseEn: 'Take your backend work and apply all improvements from days 97-115.',
    exerciseAr: 'Take your backend work and apply all improvements from days 97-115.',
    deliverableEn: 'A consolidated backend portfolio with rate limiting, caching, and error handling.',
    deliverableAr: 'Consolidated backend portfolio with rate limiting, caching, and error handling.',
    resources: [
      { title: 'OWASP API Security', url: 'https://owasp.org/www-project-api-security/', kind: 'official' }
    ],
    challengeEn: 'Add a rollback and cache invalidation step to your CI pipeline.',
    challengeAr: 'Add a rollback and cache invalidation step to your CI pipeline.',
    prerequisites: [115],
    criteriaEn: ['Rate limiting active', 'Try-catch around all async routes', 'Cache headers on all services'],
    criteriaAr: ['Rate limiting active', 'Try-catch around all async routes', 'Cache headers on all services']
  },
  {
    dayNumber: 117,
    phaseSlug: 'backend',
    kind: 'lesson',
    titleEn: 'GraphQL Basics',
    titleAr: 'Basics GraphQL',
    topic: 'GraphQL',
    estimatedMinutes: 90,
    objectiveEn: 'Write GraphQL queries, mutations, and understand the schema language.',
    objectiveAr: 'Write GraphQL queries, mutations, and understand the schema language.',
    lessonEn:
      'GraphQL allows clients to request exactly the data they need. A schema defines types and their relationships. Queries retrieve data, mutations modify it. Use introspection to explore the schema. Prevent deep queries with depth limits.',
    lessonAr:
      'يسمح GraphQL للعملاء بطلب البيانات بالضبط التي تحتاجها. defines schema types and their relationships. Queries retrieve data, mutations modify it. Use introspection to explore the schema. Prevent deep queries with depth limits.',
    tasks: [
      {
        en: 'Define a simple GraphQL type for a User with name and email',
        ar: 'Define a simple GraphQL type for a User with name and email'
      },
      {
        en: 'Write a GraphQL query to fetch a user by ID',
        ar: 'Write a GraphQL query to fetch a user by ID'
      },
      {
        en: 'Write a GraphQL mutation to create a new user',
        ar: 'Write a GraphQL mutation to create a new user'
      },
      {
        en: 'Set up depth limiting on a GraphQL server',
        ar: 'Set up depth limiting on a GraphQL server'
      }
    ],
    exerciseEn: 'Create a GraphQL schema and query for a user profile.',
    exerciseAr: 'Create a GraphQL schema and query for a user profile.',
    deliverableEn: 'A GraphQL schema with User type and a working query.',
    deliverableAr: 'GraphQL schema with User type and a working query.',
    resources: [
      { title: 'GraphQL docs', url: 'https://graphql.org/learn/', kind: 'official' },
      { title: 'Apollo Server', url: 'https://www.apollographql.com/docs/apollo-server/', kind: 'reference' }
    ],
    challengeEn: 'Add a nested query that fetches a user and their posts in one request',
    challengeAr: 'Add a nested query that fetches a user and their posts in one request',
    prerequisites: [116],
    criteriaEn: ['User type defined', 'Query fetches user by ID', 'Mutation creates user', 'Depth limiting active'],
    criteriaAr: ['User type defined', 'Query fetches user by ID', 'Mutation creates user', 'Depth limiting active']
  },
  {
    dayNumber: 118,
    phaseSlug: 'backend',
    kind: 'lesson',
    titleEn: 'WebSockets',
    titleAr: 'WebSockets',
    topic: 'Real-time',
    estimatedMinutes: 90,
    objectiveEn: 'Set up a WebSocket server, handle connections, and broadcast messages.',
    objectiveAr: 'Set up a WebSocket server, handle connections, and broadcast messages.',
    lessonEn:
      'WebSockets enable full-duplex communication over a single TCP connection. Use the ws library to accept connections, send and receive messages. Broadcast to all connected clients or targeted recipients. Secure WebSockets (wss://) require HTTPS.',
    lessonAr:
      'WebSockets enable full-duplex communication over a single TCP connection. Use the ws library to accept connections, send and receive messages. Broadcast to all connected clients or targeted recipients. Secure WebSockets (wss://) require HTTPS.',
    tasks: [
      {
        en: 'Set up a basic WebSocket server with the ws library',
        ar: 'Set up a basic WebSocket server with the ws library'
      },
      {
        en: 'Handle connection and disconnection events',
        ar: 'Handle connection and disconnection events'
      },
      {
        en: 'Broadcast a message to all connected clients',
        ar: 'Broadcast a message to all connected clients'
      },
      {
        en: 'Send a targeted message to a specific client',
        ar: 'Send a targeted message to a specific client'
      }
    ],
    exerciseEn: 'Create a WebSocket server that broadcasts messages to all clients.',
    exerciseAr: 'Create a WebSocket server that broadcasts messages to all clients.',
    deliverableEn: 'A WebSocket server that broadcasts messages.',
    deliverableAr: 'WebSocket server that broadcasts messages.',
    resources: [
      { title: 'ws docs', url: 'https://github.com/websockets/ws', kind: 'official' },
      { title: 'MDN: WebSockets', url: MDN + '/en-US/docs/Web/API/WebSockets_API', kind: 'reference' }
    ],
    challengeEn: 'Implement a chat room where clients can join and receive messages from others',
    challengeAr: 'Implement a chat room where clients can join and receive messages from others',
    prerequisites: [117],
    criteriaEn: ['Server accepts connections', 'Broadcast works', 'Targeted send works'],
    criteriaAr: ['Server accepts connections', 'Broadcast يعمل', 'إرسال مستهدف يعمل']
  },
  {
    dayNumber: 119,
    phaseSlug: 'backend',
    kind: 'practice',
    titleEn: 'Integration Tests with Supertest',
    titleAr: 'Tests تكامل',
    topic: 'Testing',
    estimatedMinutes: 100,
    objectiveEn: 'Write integration tests that cover WebSocket and HTTP endpoints.',
    objectiveAr: 'Write integration tests that cover WebSocket and HTTP endpoints.',
    lessonEn:
      'Integration tests spin up the real server and test endpoints. Use supertest for HTTP. For WebSocket, use the ws library test utilities. Test both happy paths and error cases. Clean up resources after each test.',
    lessonAr:
      'tests التكامل تبدأ التشغيل الخادم وترسل طلبات للمنفذ الحقيقي. استخدم supertest لإرسال طلبات. For WebSocket, استخدم utilities اختبار مكتبة ws. Test both happy paths and error cases. Clean up resources after each test.',
    tasks: [
      {
        en: 'Write integration tests for the auth API using supertest',
        ar: 'Write integration tests for the auth API using supertest'
      },
      {
        en: 'Write WebSocket connection and message tests',
        ar: 'Write WebSocket connection and message tests'
      },
      {
        en: 'Use beforeEach to reset state between tests',
        ar: 'Use beforeEach to reset state between tests'
      },
      {
        en: 'Assert response codes, bodies, and WebSocket messages',
        ar: 'Assert response codes, bodies, and WebSocket messages'
      }
    ],
    exerciseEn: 'Write an integration test suite covering auth and WebSocket.',
    exerciseAr: 'Write an integration test suite covering auth and WebSocket.',
deliverableEn: 'A Vitest test file covering auth API and WebSocket.',
    deliverableAr: 'Vitest test file covering auth API and WebSocket.',
    resources: [
      { title: 'supertest', url: 'https://github.com/visionmedia/supertest', kind: 'reference' },
      { title: 'Vitest docs', url: 'https://vitest.dev/', kind: 'official' }
    ],
    challengeEn: 'Write a WebSocket test that a broadcast message is received by all clients',
    challengeAr: 'Write a WebSocket test that a broadcast message is received by all clients',
    prerequisites: [118],
    criteriaEn: ['supertest installed', 'WebSocket tests cover connect/send', 'beforeEach resets state'],
    criteriaAr: ['supertest已安装', 'WebSocket tests cover connect/send', 'beforeEach resets state']
  },
  {
    dayNumber: 120,
    phaseSlug: 'backend',
    kind: 'project',
    titleEn: 'Full Backend Capstone',
    titleAr: 'Backend Capstone Project',
    topic: 'Capstone',
    estimatedMinutes: 150,
    objectiveEn: 'Build a complete backend API with auth, rate limiting, caching, WebSockets, and integration tests.',
    objectiveAr: 'Build a complete backend API with auth, rate limiting, caching, WebSockets, and integration tests.',
    lessonEn:
      'Combine everything from the previous days: authentication with JWT cookies, rate limiting on login, Cache-Control and ETag headers, WebSocket chat, and a full Vitest integration test suite. This is the capstone project for Phase 4.',
    lessonAr:
      'Integrate everything من الأيام السابقة: authentication مع JWT cookies, rate limiting على login, Cache-Control و ETag headers, WebSocket chat, and a full Vitest integration test suite. This is the capstone project for Phase 4.',
    tasks: [
      {
        en: 'Implement authentication with JWT cookies and rate-limited login',
        ar: 'Implement authentication with JWT cookies and rate-limited login'
      },
      {
        en: 'Add Cache-Control and ETag headers to all relevant routes',
        ar: 'Add Cache-Control and ETag headers to all relevant routes'
      },
      {
        en: 'Set up a WebSocket chat server with broadcast and targeted messaging',
        ar: 'Set up a WebSocket chat server with broadcast and targeted messaging'
      },
      {
        en: 'Write a Vitest integration test suite covering auth, rate limiting, and WebSocket',
        ar: 'Write a Vitest integration test suite covering auth, rate limiting, and WebSocket'
      }
    ],
    exerciseEn: 'Build the complete backend capstone with all features and tests.',
    exerciseAr: 'Build the complete backend capstone with all features and tests.',
    deliverableEn: 'A complete backend API with auth, rate limiting, caching, WebSockets, and integration tests.',
    deliverableAr: 'Complete backend API with auth, rate limiting, caching, WebSockets, and integration tests.',
    resources: [
      { title: 'All previous MDN and npm references', url: MDN + '/en-US/docs', kind: 'reference' }
    ],
    challengeEn: 'Add private rooms to the WebSocket chat with per-room messaging',
    challengeAr: 'Add private rooms to the WebSocket chat with per-room messaging',
    prerequisites: [117, 118, 119],
    criteriaEn: ['Auth operational', 'Rate limiting active', 'Cache headers present', 'WebSocket chat functional', 'Integration tests passing'],
    criteriaAr: ['Operational auth', 'Rate limiting active', 'Headers present', 'WebSocket chat functional', 'Integration tests passing']
  }
]