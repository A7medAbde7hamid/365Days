import type { CurriculumDay } from '../types'

const MDN = 'https://developer.mozilla.org/en-US/docs'

/** Phase 11 — Security & Compliance (days 301–335). */
export const PHASE_11_DAYS: CurriculumDay[] = [
  {
    dayNumber: 301,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Application Security Fundamentals',
    titleAr: 'Application Security Fundamentals',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Understand the OWASP Top 10 and common web application vulnerabilities.',
    objectiveAr: 'Understand the OWASP Top 10 and common web application vulnerabilities.',
    lessonEn:
      'The OWASP Top 10 is the standard awareness document outlining the most critical security risks to web applications. Major risks include Injection, Broken Authentication, Sensitive Data Exposure, XML External Entities (XXE), Broken Access Control, Security Misconfiguration, Cross-Site Scripting (XSS), Insecure Deserialization, Using Components with Known Vulnerabilities, and Failure to Restrict URL Access.',
    lessonAr:
      'OWASP Top 10 هو المستند المعياري الذي يOutline أخطر مخاطر الأمن لبرامج الويب. المخاطر الرئيسية تشمل حقن، مصادقة معطلة، كشف بيانات حساسة،عناصر خارجية XML (XXE), تحكم الوصول معطّل, إعدادات أمان معطّلة, XSS, تحليل غير آمن, استخدام مكونات بها ثغرات معروفة, وفشل في تقييد الوصول إلى الروابط.',
    tasks: [
      {
        en: 'List the OWASP Top 10 and briefly describe each risk',
        ar: 'List the OWASP Top 10 and briefly describe each risk'
      },
      {
        en: 'Identify a SQL injection vulnerability in a code snippet',
        ar: 'Identify a SQL injection vulnerability in a code snippet'
      },
      {
        en: 'Identify a cross-site scripting (XSS) vulnerability in a code snippet',
        ar: 'Identify a cross-site scripting (XSS) vulnerability in a code snippet'
      },
      {
        en: 'Describe mitigations for the top three OWASP risks',
        ar: 'Describe mitigations for the top three OWASP risks'
      }
    ],
    exerciseEn: 'Identify and propose mitigations for OWASP Top 10 risks in a sample application.',
    exerciseAr: 'Identify and propose mitigations for OWASP Top 10 risks in a sample application.',
    deliverableEn: 'A list of OWASP Top 10 risks with mitigations.',
deliverableAr: 'List of OWASP Top 10 risks with mitigations.',
    resources: [
      { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', kind: 'reference' }
    ],
    challengeEn: 'Write a parameterized query that prevents SQL injection',
    challengeAr: 'Write a parameterized query that prevents SQL injection',
    prerequisites: [],
    criteriaEn: ['Can list OWASP Top 10', 'Can identify SQL injection', 'Can identify XSS', 'Can describe mitigations for top 3'],
    criteriaAr: ['Can list OWASP Top 10', 'Can identify SQL injection', 'Can identify XSS', 'Can describe mitigations for top 3']
  },
  {
    dayNumber: 302,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Authentication and Authorization',
    titleAr: 'Authentication and Authorization',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Understand the difference between authentication and authorization, and implement secure auth flows.',
    objectiveAr: 'Understand the difference between authentication and authorization, and implement secure auth flows.',
    lessonEn:
      'Authentication is the process of verifying who a user is (e.g., via credentials). Authorization is the process of deciding what resources a user is allowed to access. Secure auth flows include password hashing, token-based auth (JWT), and role-based access control (RBAC).',
    lessonAr:
      'Authentication is the process of verifying who a user is (e.g., via credentials). Authorization is the process of deciding what resources a user is allowed to access. Secure auth flows include password hashing, token-based auth (JWT), and role-based access control (RBAC).',
    tasks: [
      {
        en: 'Describe the difference between authentication and authorization',
        ar: 'Describe the difference between authentication and authorization'
      },
      {
        en: 'Implement a login flow with password hashing and JWT issuance',
        ar: 'Implement a login flow with password hashing and JWT issuance'
      },
      {
        en: 'Implement a route protected by JWT authentication and RBAC',
        ar: 'Implement a route protected by JWT authentication and RBAC'
      },
      {
        en: 'Describe the risk of storing passwords in plain text',
        ar: 'Describe the risk of storing passwords in plain text'
      }
    ],
    exerciseEn: 'Implement a secure authentication flow with hashing and JWT.',
    exerciseAr: 'Implement a secure authentication flow with hashing and JWT.',
    deliverableEn: 'A secure authentication flow implementation.',
deliverableAr: 'Authentication flow implementation.',
    resources: [
      { title: 'OWASP Authentication Cheatsheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html', kind: 'reference' }
    ],
    challengeEn: 'Implement a refresh token flow with rotation and revocation',
    challengeAr: 'Implement a refresh token flow with rotation and revocation',
    prerequisites: [301],
    criteriaEn: ['Can describe auth vs authorization', 'Can implement login with hashing and JWT', 'Can protect a route with JWT and RBAC', 'Can describe password plaintext risks'],
    criteriaAr: ['Can describe auth vs authorization', 'Can implement login with hashing and JWT', 'Can protect a route with JWT and RBAC', 'Can describe password plaintext risks']
  },
  {
    dayNumber: 303,
    phaseSlug: 'security-compliance',
    kind: 'project' as const,
    titleEn: 'Secure Authentication API',
    titleAr: 'Secure Authentication API',
    topic: 'Security project',
    estimatedMinutes: 120,
    objectiveEn: 'Build a secure authentication API with password hashing, JWT issuance, and route protection via middleware.',
    objectiveAr: 'Build a secure authentication API with password hashing, JWT issuance, and route protection via middleware.',
    lessonEn:
      'This project combines everything from previous days: a registration endpoint that hashes passwords, a login endpoint that issues JWTs, and a middleware that protects routes based on JWT validation and user roles.',
    lessonAr:
      'هذا المشروع يجمع كل ما سبق: endpoint تسجيل دخول that hashes passwords, endpoint issuance JWTs, and middleware that protects routes based on JWT validation and user roles.',
    tasks: [
      {
        en: 'Implement a registration endpoint that hashes passwords with bcrypt',
        ar: 'Implement a registration endpoint that hashes passwords with bcrypt'
      },
      {
        en: 'Implement a login endpoint that issues JWTs and sets secure cookies',
        ar: 'Implement a login endpoint that issues JWTs and sets secure cookies'
      },
      {
        en: 'Implement middleware that validates JWT and checks user roles',
        ar: 'Implement middleware that validates JWT and checks user roles'
      },
      {
        en: 'Test the full auth flow: register, login, and access a protected route',
        ar: 'Test the full auth flow: register, login, and access a protected route'
      }
    ],
    exerciseEn: 'Build a complete secure authentication API.',
    exerciseAr: 'Build a complete secure authentication API.',
    deliverableEn: 'A secure authentication API with registration, login, and protected routes.',
deliverableAr: 'Secure authentication API.',
    resources: [
      { title: 'Bcrypt npm package', url: 'https://www.npmjs.com/package/bcrypt', kind: 'reference' }
    ],
    challengeEn: 'Add password reset functionality with token-based reset',
    challengeAr: 'Add password reset functionality with token-based reset',
    prerequisites: [302],
    criteriaEn: ['Registration hashes password', 'Login issues JWT + cookie', 'Protected route verified', 'Full auth flow tested'],
    criteriaAr: ['Registration hashes password', 'Login issues JWT + cookie', 'Protected route verified', 'Full auth flow tested']
  },
  {
    dayNumber: 304,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Data Encryption and Cryptography',
    titleAr: 'Data Encryption and Cryptography',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Understand the basics of encryption, symmetric and asymmetric keys, and when to use each.',
    objectiveAr: 'Understand the basics of encryption, symmetric and asymmetric keys, and when to use each.',
    lessonEn:
      'Encryption protects data confidentiality. Symmetric encryption uses the same key for encryption and decryption (e.g., AES). Asymmetric encryption uses a pair of keys (public/private, e.g., RSA). Use symmetric for data at rest/ in transit, and asymmetric for key exchange and digital signatures.',
    lessonAr:
      'Encryption protects data confidentiality. Symmetric encryption uses the same key for encryption and decryption (e.g., AES). Asymmetric encryption uses a pair of keys (public/private, e.g., RSA). Use symmetric for data at rest/ in transit, and asymmetric for key exchange and digital signatures.',
    tasks: [
      {
        en: 'Describe the difference between symmetric and asymmetric encryption',
        ar: 'Describe the difference between symmetric and asymmetric encryption'
      },
      {
        en: 'Encrypt and decrypt a string using symmetric encryption (AES)',
        ar: 'Encrypt and decrypt a string using symmetric encryption (AES)'
      },
      {
        en: 'Generate a key pair and use asymmetric encryption to encrypt a message',
        ar: 'Generate a key pair and use asymmetric encryption to encrypt a message'
      },
      {
        en: 'Describe use cases for symmetric vs asymmetric encryption',
        ar: 'Describe use cases for symmetric vs asymmetric encryption'
      }
    ],
    exerciseEn: 'Implement symmetric and asymmetric encryption in a sample application.',
    exerciseAr: 'Implement symmetric and asymmetric encryption in a sample application.',
    deliverableEn: 'An implementation of symmetric and asymmetric encryption.',
deliverableAr: 'Implementation of symmetric and asymmetric encryption.',
    resources: [
      { title: 'MDN: Encryption', url: MDN + '/en-US/docs/Web/Security/Crypto', kind: 'reference' }
    ],
    challengeEn: 'Generate a key pair and use the private key to sign a message, then verify with the public key',
    challengeAr: 'Generate a key pair and use the private key to sign a message, then verify with the public key',
    prerequisites: [303],
    criteriaEn: ['Can describe symmetric vs asymmetric', 'Can encrypt/decrypt with AES', 'Can generate key pair and encrypt', 'Can describe use cases'],
    criteriaAr: ['Can describe symmetric vs asymmetric', 'Can encrypt/decrypt with AES', 'Can generate key pair and encrypt', 'Can describe use cases']
  },
  {
    dayNumber: 305,
    phaseSlug: 'security-compliance',
    kind: 'project' as const,
    titleEn: 'Encryption Implementation',
    titleAr: 'Encryption Implementation',
    topic: 'Security project',
    estimatedMinutes: 120,
    objectiveEn: 'Implement symmetric encryption for data at rest and asymmetric encryption for key exchange in a sample application.',
    objectiveAr: 'Implement symmetric encryption for data at rest and asymmetric encryption for key exchange in a sample application.',
    lessonEn:
      'This project involves implementing AES encryption for encrypting data in a database, and RSA key exchange for securely sharing keys between services.',
    lessonAr:
      'ينطوي هذا المشروع على تطبيق تشفير AES لتشفير البيانات في قاعدة بيانات، وتشفير RSA لتداول المفاتيح بين الخدمات بأمان.',
    tasks: [
      {
        en: 'Implement AES-256 encryption and decryption for a data object',
        ar: 'Implement AES-256 encryption and decryption for a data object'
      },
      {
        en: 'Generate an RSA key pair and use the public key to encrypt a symmetric key',
        ar: 'Generate an RSA key pair and use the public key to encrypt a symmetric key'
      },
      {
        en: 'Use the private key to decrypt the symmetric key and use it to decrypt the data',
        ar: 'Use the private key to decrypt the symmetric key and use it to decrypt the data'
      },
      {
        en: 'Verify that the encrypted data can be round-tripped (encrypt -> decrypt -> original)',
        ar: 'Verify that the encrypted data can be round-tripped (encrypt -> decrypt -> original)'
      }
    ],
    exerciseEn: 'Implement encryption and decryption round-trip for data at rest and key exchange.',
    exerciseAr: 'Implement encryption and decryption round-trip for data at rest and key exchange.',
    deliverableEn: 'Encryption implementation with round-trip verification.',
deliverableAr: 'Encryption implementation with round-trip verification.',
    resources: [
      { title: 'Node crypto docs', url: 'https://nodejs.org/api/crypto.html', kind: 'reference' }
    ],
    challengeEn: 'Implement a hybrid system that uses symmetric encryption for data and asymmetric encryption for key exchange',
    challengeAr: 'Implement a hybrid system that uses symmetric encryption for data and asymmetric encryption for key exchange',
    prerequisites: [304],
    criteriaEn: ['AES-256 encryption/decryption works', 'RSA key pair generated and works', 'Hybrid system encrypts and decrypts data', 'Round-trip verified'],
    criteriaAr: ['AES-256 encryption/decryption works', 'RSA key pair generated and works', 'Hybrid system encrypts and decrypts data', 'Round-trip verified']
  },
  {
    dayNumber: 306,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Security Headers and HTTPS',
    titleAr: 'Security Headers and HTTPS',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Understand the importance of security headers and HTTPS for protecting web applications.',
    objectiveAr: 'Understand the importance of security headers and HTTPS for protecting web applications.',
    lessonEn:
      'Security headers (set via Helmet.js) protect against common attacks like XSS and clickjacking. HTTPS encrypts traffic between the client and server, preventing eavesdropping and man-in-the-middle attacks. Always use HTTPS in production and set appropriate security headers.',
    lessonAr:
      'Security headers (set via Helmet.js) protect against common attacks like XSS and clickjacking. HTTPS encrypts traffic between the client and server, preventing eavesdropping and man-in-the-middle attacks. Always use HTTPS in production and set appropriate security headers.',
    tasks: [
      {
        en: 'Describe the security headers that Helmet.js sets and their purpose',
        ar: 'Describe the security headers that Helmet.js sets and their purpose'
      },
      {
        en: 'Configure Helmet.js in an Express application',
        ar: 'Configure Helmet.js in an Express application'
      },
      {
        en: 'Explain why HTTPS is essential for web applications',
        ar: 'Explain why HTTPS is essential for web applications'
      },
      {
        en: 'Configure a redirect from HTTP to HTTPS',
        ar: 'Configure a redirect from HTTP to HTTPS'
      }
    ],
    exerciseEn: 'Set up Helmet.js and HTTPS redirect in an Express application.',
    exerciseAr: 'Set up Helmet.js and HTTPS redirect in an Express application.',
    deliverableEn: 'An Express app with Helmet.js and HTTPS redirect.',
deliverableAr: 'Express app with Helmet.js and HTTPS redirect.',
    resources: [
      { title: 'Helmet.js docs', url: 'https://github.com/helmetjs/helmet', kind: 'reference' }
    ],
    challengeEn: 'Add a Content Security Policy (CSP) header to the Express app',
    challengeAr: 'Add a Content Security Policy (CSP) header to the Express app',
    prerequisites: [305],
    criteriaEn: ['Helmet.js configured', 'HTTPS redirect configured', 'CSP header added'],
    criteriaAr: ['Helmet.js configured', 'HTTPS redirect configured', 'CSP header added']
  },
  {
    dayNumber: 307,
    phaseSlug: 'security-compliance',
    kind: 'project' as const,
    titleEn: 'Security Hardening',
    titleAr: 'Security Hardening',
    topic: 'Security project',
    estimatedMinutes: 120,
    objectiveEn: 'Harden an Express application with security headers, HTTPS, and dependency updates.',
    objectiveAr: 'Harden an Express application with security headers, HTTPS, and dependency updates.',
    lessonEn:
      'This is the capstone project for Phase 11. Combine security headers (Helmet.js), HTTPS enforcement, and dependency updating to produce a hardened production-ready Express application.',
    lessonAr:
      '这是 capstone project لـ Phase 11. Combine security headers (Helmet.js), HTTPS enforcement, and dependency updating to produce a hardened production-ready Express application.',
    tasks: [
      {
        en: 'Install and configure Helmet.js with all available modules',
        ar: 'Install and configure Helmet.js with all available modules'
      },
      {
        en: 'Configure the Express app to redirect HTTP to HTTPS',
        ar: 'Configure the Express app to redirect HTTP to HTTPS'
      },
      {
        en: 'Update all dependencies to their latest secure versions',
        ar: 'Update all dependencies to their latest secure versions'
      },
      {
        en: 'Run a security scan (e.g., OWASP ZAP) and document the results',
        ar: 'Run a security scan and document the results'
      }
    ],
    exerciseEn: 'Harden an Express application for production.',
    exerciseAr: 'Harden an Express application for production.',
    deliverableEn: 'A hardened Express application with security headers, HTTPS, and updated dependencies.',
deliverableAr: 'Hardened Express application.',
    resources: [
      { title: 'OWASP ZAP', url: 'https://owasp.org/www-project-vulnerability/', kind: 'reference' }
    ],
    challengeEn: 'Add a strict Transport Security (HSTS) header and configure it for a 1-year max-age',
    challengeAr: 'Add a strict Transport Security (HSTS) header and configure it for a 1-year max-age',
    prerequisites: [306],
    criteriaEn: ['Helmet.js installed and configured', 'HTTP to HTTPS redirect', 'Dependencies updated', 'Security scan run'],
    criteriaAr: ['Helmet.js installed and configured', 'HTTP to HTTPS redirect', 'Dependencies updated', 'Security scan run']
  },
  {
    dayNumber: 308,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Compliance and Regulatory Standards',
    titleAr: 'Compliance and Regulatory Standards',
    topic: 'Compliance',
    estimatedMinutes: 90,
    objectiveEn: 'Understand common compliance standards (GDPR, HIPAA) and requirements for data privacy and security.',
    objectiveAr: 'Understand common compliance standards (GDPR, HIPAA) and requirements for data privacy and security.',
    lessonEn:
      'GDPR (General Data Protection Regulation) and HIPAA (Health Insurance Portability and Accountability Act) are major regulatory frameworks for data privacy and security. GDPR applies to personal data of EU citizens and requires consent, data minimization, and the right to be forgotten. HIPAA applies to protected health information (PHI) and requires safeguards, breach notification, and access controls.',
    lessonAr:
      'GDPR (General Data Protection Regulation) و HIPAA (قانون حامل التأمين الصحي) هما إطارات تنظيمية كبرى للخصوصية وأمن البيانات. ينطبق GDPR على بياناتpersonal data of EU citizens وينت consent, data minimization, and the right to be forgotten. ينطبق HIPAA على protected health information (PHI) ويطلب safeguards, breach notification, and access controls.',
    tasks: [
      {
        en: 'Identify the key requirements of GDPR for a web application',
        ar: 'Identify the key requirements of GDPR for a web application'
      },
      {
        en: 'Identify the key requirements of HIPAA for a health-related application',
        ar: 'Identify the key requirements of HIPAA for a health-related application'
      },
      {
        en: 'Describe the rights of data subjects under GDPR',
        ar: 'Describe the rights of data subjects under GDPR'
      },
      {
        en: 'Implement a data deletion endpoint that fulfills the right to be forgotten',
        ar: 'Implement a data deletion endpoint that fulfills the right to be forgotten'
      }
    ],
    exerciseEn: 'Identify compliance requirements and implement a data deletion endpoint.',
    exerciseAr: 'Identify compliance requirements and implement a data deletion endpoint.',
    deliverableEn: 'A compliance requirements analysis and a data deletion endpoint.',
deliverableAr: 'Compliance requirements analysis and data deletion endpoint.',
    resources: [
      { title: 'GDPR guidelines', url: 'https://gdpr.eu/', kind: 'reference' }
    ],
    challengeEn: 'Implement a data export endpoint that allows data subjects to download their data',
    challengeAr: 'Implement a data export endpoint that allows data subjects to download their data',
    prerequisites: [307],
    criteriaEn: ['Can identify GDPR requirements', 'Can identify HIPAA requirements', 'Can describe data subject rights', 'Can implement data deletion endpoint'],
    criteriaAr: ['Can identify GDPR requirements', 'Can identify HIPAA requirements', 'Can describe data subject rights', 'Can implement data deletion endpoint']
  },
  {
    dayNumber: 309,
    phaseSlug: 'security-compliance',
    kind: 'project' as const,
    titleEn: 'GDPR Compliance Module',
    titleAr: 'GDPR Compliance Module',
    topic: 'Compliance project',
    estimatedMinutes: 120,
    objectiveEn: 'Build a GDPR compliance module for a web application: data consent, data deletion, and data export endpoints.',
    objectiveAr: 'Build a GDPR compliance module for a web application: data consent, data deletion, and data export endpoints.',
    lessonEn:
      'This project involves building the GDPR compliance features into an application: a consent collection endpoint, a data deletion endpoint that fulfills the right to be forgotten, and a data export endpoint that allows data subjects to download their data.',
    lessonAr:
      'يتضمن هذا المشروع بناء ميزات الامتثال لـ GDPR في تطبيق: endPoint جمع consent, endPoint حذف البيانات fulfilling the right to be forgotten, and endPoint تصدير البيانات that allows data subjects to download their data.',
    tasks: [
      {
        en: 'Implement a data consent collection endpoint',
        ar: 'Implement a data consent collection endpoint'
      },
      {
        en: 'Implement a data deletion endpoint that fulfills the right to be forgotten',
        ar: 'Implement a data deletion endpoint that fulfills the right to be forgotten'
      },
      {
        en: 'Implement a data export endpoint that allows data subjects to download their data',
        ar: 'Implement a data export endpoint that allows data subjects to download their data'
      },
      {
        en: 'Test the GDPR compliance endpoints and verify they work correctly',
        ar: 'Test the GDPR compliance endpoints and verify they work correctly'
      }
    ],
    exerciseEn: 'Build a GDPR compliance module with consent, deletion, and export endpoints.',
    exerciseAr: 'Build a GDPR compliance module with consent, deletion, and export endpoints.',
    deliverableEn: 'A GDPR compliance module with consent, deletion, and export endpoints.',
deliverableAr: 'GDPR compliance module.',
    resources: [
      { title: 'GDPR guidelines', url: 'https://gdpr.eu/', kind: 'reference' }
    ],
    challengeEn: 'Add audit logging to the deletion and export endpoints',
    challengeAr: 'Add audit logging to the deletion and export endpoints',
    prerequisites: [308],
    criteriaEn: ['Consent endpoint works', 'Deletion endpoint fulfills right to be forgotten', 'Export endpoint works and allows data download', 'Tests pass'],
    criteriaAr: ['Consent endpoint works', 'Deletion endpoint fulfills right to be forgotten', 'Export endpoint works and allows data download', 'Tests pass']
  },
  {
    dayNumber: 310,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Security Testing',
    titleAr: 'Security Testing',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Understand how to test for common security vulnerabilities in a CI pipeline.',
    objectiveAr: 'Understand how to test for common security vulnerabilities in a CI pipeline.',
    lessonEn:
      'Security testing should be integrated into the CI pipeline to catch vulnerabilities early. Common tests include: static code analysis (SAST), dependency scanning (Snyk), and dynamic analysis (DAST). Integrate these tests to block merges when vulnerabilities are found.',
    lessonAr:
      'Safety testing should be integrated into the CI pipeline to catch vulnerabilities early. Common tests include: static code analysis (SAST), dependency scanning (Snyk), and dynamic analysis (DAST). Integrate these tests to block merges when vulnerabilities are found.',
    tasks: [
      {
        en: 'Describe the difference between SAST, DAST, and IAST',
        ar: 'Describe the difference between SAST, DAST, and IAST'
      },
      {
        en: 'Configure a SAST scan in the CI pipeline',
        ar: 'Configure a SAST scan in the CI pipeline'
      },
      {
        en: 'Configure a dependency scanning step in the CI pipeline',
        ar: 'Configure a dependency scanning step in the CI pipeline'
      },
      {
        en: 'Set up a pipeline step that blocks merges when high-severity vulnerabilities are found',
        ar: 'Set up a pipeline step that blocks merges when high-severity vulnerabilities are found'
      }
    ],
    exerciseEn: 'Integrate security testing into a CI pipeline.',
    exerciseAr: 'Integrate security testing into a CI pipeline.',
    deliverableEn: 'A CI pipeline with security testing steps that block on high severity.',
deliverableAr: 'CI pipeline with security testing.',
    resources: [
      { title: 'Snyk docs', url: 'https://snyk.io/docs/', kind: 'reference' }
    ],
    challengeEn: 'Configure the pipeline to block on any critical severity vulnerability',
    challengeAr: 'Configure the pipeline to block on any critical severity vulnerability',
    prerequisites: [308],
    criteriaEn: ['Can describe SAST/DAST/IAST', 'Can configure SAST scan', 'Can configure dependency scanning', 'Can set up merge blocking'],
    criteriaAr: ['Can describe SAST/DAST/IAST', 'Can configure SAST scan', 'Can configure dependency scanning', 'Can set up merge blocking']
  },
  {
    dayNumber: 311,
    phaseSlug: 'security-compliance',
    kind: 'project' as const,
    titleEn: 'Security Testing Pipeline',
    titleAr: 'Security Testing Pipeline',
    topic: 'Security project',
    estimatedMinutes: 120,
    objectiveEn: 'Integrate security testing (SAST, dependency scanning) into a CI pipeline and configure it to block merges on high-severity vulnerabilities.',
    objectiveAr: 'Integrate security testing (SAST, dependency scanning) into a CI pipeline and configure it to block merges on high-severity vulnerabilities.',
    lessonEn:
      'This project integrates security testing into the CI pipeline. Add steps for static code analysis and dependency scanning, and configure the pipeline to fail when high-severity vulnerabilities are detected.',
    lessonAr:
      'ينطوي هذا المشروع على دمج Safety testing في مسار CI. Add steps for static code analysis and dependency scanning, and configure the pipeline to fail when high-severity vulnerabilities are detected.',
    tasks: [
      {
        en: 'Add a SAST scan step (e.g., using Snyk or CodeQL) to the CI pipeline',
        ar: 'Add a SAST scan step (e.g., using Snyk or CodeQL) to the CI pipeline'
      },
      {
        en: 'Add a dependency scanning step to the CI pipeline',
        ar: 'Add a dependency scanning step to the CI pipeline'
      },
      {
        en: 'Configure the pipeline to block merges when high-severity vulnerabilities are found',
        ar: 'Configure the pipeline to block merges when high-severity vulnerabilities are found'
      },
      {
        en: 'Test the pipeline by introducing a vulnerability and verifying it blocks the merge',
        ar: 'Test the pipeline by introducing a vulnerability and verifying it blocks the merge'
      }
    ],
    exerciseEn: 'Integrate security testing into a CI pipeline and verify it blocks on high severity.',
    exerciseAr: 'Integrate security testing into a CI pipeline and verify it blocks on high severity.',
    deliverableEn: 'A CI pipeline with integrated security testing that blocks on high severity.',
deliverableAr: 'CI pipeline with integrated security testing.',
    resources: [
      { title: 'Snyk docs', url: 'https://snyk.io/docs/', kind: 'reference' }
    ],
    challengeEn: 'Configure the pipeline to also warn on medium-severity vulnerabilities',
    challengeAr: 'Configure the pipeline to also warn on medium-severity vulnerabilities',
    prerequisites: [310],
    criteriaEn: ['SAST scan added', 'Dependency scanning added', 'Pipeline blocks on high severity', 'Tested by introducing a vulnerability'],
    criteriaAr: ['SAST scan added', 'Dependency scanning added', 'Pipeline blocks on high severity', 'Tested by introducing a vulnerability']
  },
  {
    dayNumber: 312,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Incident Response and Recovery',
    titleAr: 'Incident Response and Recovery',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Understand the incident response process: detection, containment, eradication, and recovery.',
    objectiveAr: 'Understand the incident response process: detection, containment, eradication, and recovery.',
    lessonEn:
      'When a security incident occurs, the response process includes: Detection (identifying the incident), Containment (limiting the impact), Eradication (removing the root cause), and Recovery (restoring normal operations). Have a plan in place before an incident occurs.',
    lessonAr:
      'عندما occurs حادث أمني, يشمل عملية الاستجابة: Detection (Identifying the incident), Containment (limiting the impact), Eradication ( removing the root cause), and Recovery (restoring normal operations). Have a plan in place before an incident occurs.',
    tasks: [
      {
        en: 'Describe the four stages of incident response: detection, containment, eradication, and recovery',
        ar: 'Describe the four stages of incident response: detection, containment, eradication, and recovery'
      },
      {
        en: 'Identify indicators of a security incident (e.g., unusual traffic, failed logins)',
        ar: 'Identify indicators of a security incident (e.g., unusual traffic, failed logins)'
      },
      {
        en: 'Describe a containment strategy for a data breach',
        ar: 'Describe a containment strategy for a data breach'
      },
      {
        en: 'Describe the steps for post-incident recovery and lessons learned',
        ar: 'Describe the steps for post-incident recovery and lessons learned'
      }
    ],
    exerciseEn: 'Create an incident response plan for a sample application.',
    exerciseAr: 'Create an incident response plan for a sample application.',
    deliverableEn: 'An incident response plan.',
deliverableAr: 'Incident response plan.',
    resources: []
  },
  {
    dayNumber: 313,
    phaseSlug: 'security-compliance',
    kind: 'project' as const,
    titleEn: 'Incident Response Plan',
    titleAr: 'Incident Response Plan',
    topic: 'Security project',
    estimatedMinutes: 120,
    objectiveEn: 'Create an incident response plan for a sample application, including detection, containment, eradication, and recovery steps.',
    objectiveAr: 'Create an incident response plan for a sample application, including detection, containment, eradication, and recovery steps.',
    lessonEn:
      'This is the penultimate project for Phase 11. Create a documented incident response plan that includes detection indicators, containment strategies, eradication steps, and recovery procedures.',
    lessonAr:
      '这是 penultimate project لـ Phase 11. Create a documented incident response plan that includes detection indicators, containment strategies, eradication steps, and recovery procedures.',
    tasks: [
      {
        en: 'Identify indicators of a security incident for the application',
        ar: 'Identify indicators of a security incident for the application'
      },
      {
        en: 'Define a containment strategy for a potential data breach',
        ar: 'Define a containment strategy for a potential data breach'
      },
      {
        en: 'Define eradication steps for common attack vectors',
        ar: 'Define eradication steps for common attack vectors'
      },
      {
        en: 'Define recovery steps and a post-incident review process',
        ar: 'Define recovery steps and a post-incident review process'
      }
    ],
    exerciseEn: 'Create an incident response plan for the application.',
    exerciseAr: 'Create an incident response plan for the application.',
    deliverableEn: 'An incident response plan document.',
deliverableAr: 'Incident response plan document.',
    resources: []
  },
  {
    dayNumber: 314,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Security Awareness and Training',
    titleAr: 'Security Awareness and Training',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Understand the importance of security awareness training for developers and users, and best practices for creating effective training.',
    objectiveAr: 'Understand the importance of security awareness training for developers and users, and best practices for creating effective training.',
    lessonEn:
      'Security awareness training helps developers and users understand the risks and how to mitigate them. Best practices: regular training sessions, phishing simulations, clear reporting procedures, and keeping security top-of-mind throughout the development lifecycle.',
    lessonAr:
      'Security awareness training helps developers and users understand the risks and how to mitigate them. Best practices: regular training sessions, phishing simulations, clear reporting procedures, and keeping security top-of-mind throughout the development lifecycle.',
    tasks: [
      {
        en: 'Describe the key topics that should be covered in security awareness training',
        ar: 'Describe the key topics that should be covered in security awareness training'
      },
      {
        en: 'Design a phishing simulation exercise',
        ar: 'Design a phishing simulation exercise'
      },
      {
        en: 'Define clear reporting procedures for security incidents',
        ar: 'Define clear reporting procedures for security incidents'
      },
      {
        en: 'Plan a regular training schedule for the team',
        ar: 'Plan a regular training schedule for the team'
      }
    ],
    exerciseEn: 'Design a security awareness training program for a development team.',
    exerciseAr: 'Design a security awareness training program for a development team.',
    deliverableEn: 'A security awareness training program design.',
deliverableAr: 'Training program design.',
    resources: []
  },
  {
    dayNumber: 315,
    phase_slug: 'security-compliance',
    kind: 'project' as const,
    titleEn: 'Security Awareness Program',
    titleAr: 'Security Awareness Program',
    topic: 'Security project',
    estimatedMinutes: 120,
    objectiveEn: 'Design and document a security awareness training program for the team, including phishing simulations and clear reporting procedures.',
    objectiveAr: 'Design and document a security awareness training program for the team, including phishing simulations and clear reporting procedures.',
    lessonEn:
      'This is the final project for Phase 11. Design a security awareness training program that includes regular sessions, phishing simulations, clear reporting procedures, and a schedule for ongoing training.',
    objectiveAr: 'Design and document a security awareness training program for the team, including phishing simulations and clear reporting procedures.',
    lessonEn:
      'This is the final project for Phase 11. Design a security awareness training program that includes regular sessions, phishing simulations, clear reporting procedures, and a schedule for ongoing training.',
    lessonAr:
      '这是 final project لـ Phase 11. Design a security awareness training program that includes regular sessions, phishing simulations, clear reporting procedures, and a schedule for ongoing training.',
    tasks: [
      {
        en: 'Design a security awareness training program with regular sessions',
        ar: 'Design a security awareness training program with regular sessions'
      },
      {
        en: 'Design a phishing simulation exercise',
        ar: 'Design a phishing simulation exercise'
      },
      {
        en: 'Define clear reporting procedures for security incidents',
        ar: 'Define clear reporting procedures for security incidents'
      },
      {
        en: 'Plan a regular training schedule for the team',
        ar: 'Plan a regular training schedule for the team'
      }
    ],
    exerciseEn: 'Design and document a security awareness training program.',
    exerciseAr: 'Design and document a security awareness training program.',
    deliverableEn: 'A security awareness training program design documented.',
deliverableAr: 'Training program design documented.',
    resources: []
  },
  {
    dayNumber: 316,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Secure Software Development Lifecycle (SSDLC)',
    titleAr: 'Secure Software Development Lifecycle (SSDLC)',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Understand how to integrate security into every phase of the Software Development Lifecycle.',
    objectiveAr: 'Understand how to integrate security into every phase of the Software Development Lifecycle.',
    lessonEn:
      'SSDLC integrates security activities into each phase of the SDLC: planning, design, implementation, testing, deployment, and maintenance. Key activities: threat modeling, secure design reviews, code review checklists, security testing, and post-deployment monitoring.',
    lessonAr:
      'SSDLC integrates security activities into each phase of the SDLC: planning, design, implementation, testing, deployment, and maintenance. Key activities: threat modeling, secure design reviews, code review checklists, security testing, and post-deployment monitoring.',
    tasks: [
      {
        en: 'Describe the key activities of an SSDLC',
        ar: 'Describe the key activities of an SSDLC'
      },
      {
        en: 'Perform a threat model for a sample feature',
        ar: 'Perform a threat model for a sample feature'
      },
      {
        en: 'Add a security review check item to the code review process',
        ar: 'Add a security review check item to the code review process'
      },
      {
        en: 'Describe how security testing fits into the deployment phase',
        ar: 'Describe how security testing fits into the deployment phase'
      }
    ],
    exerciseEn: 'Describe the SSDLC for a given project and add a security review item to the code review process.',
    exerciseAr: 'Describe the SSDLC for a given project and add a security review item to the code review process.',
    deliverableEn: 'An SSDLC description and a code review check item.',
deliverableAr: 'SSDLC description and code review check item.',
    resources: []
  },
  {
    dayNumber: 317,
    phaseSlug: 'security-compliance',
    kind: 'project' as const,
    titleEn: 'SSDLC Implementation',
    titleAr: 'SSDLC Implementation',
    topic: 'Security project',
    estimatedMinutes: 120,
    objectiveEn: 'Implement SSDLC practices: threat modeling, secure code review checklists, and security testing integrated into the CI pipeline.',
    objectiveAr: 'Implement SSDLC practices: threat modeling, secure code review checklists, and security testing integrated into the CI pipeline.',
    lessonEn:
      'This is a capstone project that ties together the SSDLC practices learned throughout Phase 11. Implement threat modeling, add security check items to code reviews, and integrate security testing into the CI pipeline.',
    lessonAr:
      'capstone project that ties together the SSDLC practices learned throughout Phase 11. Implement threat modeling, add security check items to code reviews, and integrate security testing into the CI pipeline.',
    tasks: [
      {
        en: 'Perform a threat model for the application',
        ar: 'Perform a threat model for the application'
      },
      {
        en: 'Add a security review check item to the code review checklist',
        ar: 'Add a security review check item to the code review checklist'
      },
      {
        en: 'Integrate a security testing step into the CI pipeline',
        ar: 'Integrate a security testing step into the CI pipeline'
      },
      {
        en: 'Document the SSDLC practices and verify they are followed',
        ar: 'Document the SSDLC practices and verify they are followed'
      }
    ],
    exerciseEn: 'Implement SSDLC practices and document the process.',
    exerciseAr: 'Implement SSDLC practices and document the process.',
    deliverableEn: 'SSDLC implementation documented and verified in the pipeline.',
deliverableAr: 'SSDLC implementation documented and verified.',
    resources: []
  },
  {
    dayNumber: 318,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Summary and Key Takeaways',
    titleAr: 'Summary and Key Takeaways',
    topic: 'Review',
    estimatedMinutes: 70,
    objectiveEn: 'Summarize the key concepts covered in Phase 11: application security, authentication, encryption, compliance, security testing, incident response, and SSDLC. Ensure all projects compile and function correctly. Document key takeaways and carry forward to Phase 12.',
    objectiveAr: 'Summarize the key concepts covered in Phase 11: application security, authentication, encryption, compliance, security testing, incident response, and SSDLC. Ensure all projects compile and function correctly. Document key takeaways and carry forward to Phase 12.',
    lessonEn:
      'Phase 11 covered Security & Compliance over 15 days. Key takeaways: OWASP Top 10, authentication and authorization, encryption (symmetric/asymmetric), GDPR/HIPAA compliance, security testing in CI, incident response, and SSDLC integration. Ensure all projects compile and function correctly. Document key takeaways and carry forward to Phase 12.',
    lessonAr:
      'Phase 11Covered Security & Compliance over 15 days. Key takeaways: OWASP Top 10, authentication and authorization, encryption (symmetric/asymmetric), GDPR/HIPAA compliance, security testing in CI, incident response, and SSDLC integration. Ensure all projects compile and function correctly. Document key takeaways and carry forward to Phase 12.',
    tasks: [
      {
        en: 'Summarize the key concepts covered in Phase 11',
        ar: 'Summarize the key concepts covered in Phase 11'
      },  {
    dayNumber: 319,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Security Baseline Hardening',
    titleAr: 'تعزيز الوضع الأمني الأساسي',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Apply security hardening measures to a Linux server including user minimization, firewall configuration, and service disabling.',
    objectiveAr: 'Apply security hardening measures to a Linux server including user minimization, firewall configuration, and service disabling.',
    lessonEn:
      'Security hardening is the process of reducing attack surface by minimizing users, disabling unnecessary services, and configuring a firewall. A hardened server is more resistant to brute-force attacks and exploitation.',
    lessonAr:
      'Security hardening is the process of reducing attack surface by minimizing users, disabling unnecessary services, and configuring a firewall. A hardened server is more resistant to brute-force attacks and exploitation.',
    tasks: [
      {
        en: 'Harden a Ubuntu 22.04 server by disabling root login',
        ar: 'Harden a Ubuntu 22.04 server by disabling root login'
      },
      {
        en: 'Configure UFW firewall',
        ar: 'Configure UFW firewall'
      },
      {
        en: 'Remove unnecessary packages',
        ar: 'Remove unnecessary packages'
      },
      {
        en: 'Apply security updates',
        ar: 'Apply security updates'
      }
    ],
    exerciseEn: 'Harden a Ubuntu 22.04 server following the steps above.',
    exerciseAr: 'Harden a Ubuntu 22.04 server following the steps above.',
    deliverableEn: 'A hardened Ubuntu 22.04 server with documented changes.',
    deliverableAr: 'A hardened Ubuntu 22.04 server with documented changes.',
    resources: [
      {
        title: 'Ubuntu Security Guide',
        url: 'https://wiki.ubuntu.com/SecurityTeam',
        kind: 'official'
      },
      {
        title: 'OWASP Linux Hardening',
        url: 'https://owasp.org/www-project-linux-hardening/',
        kind: 'reference'
      }
    ],
    challengeEn: 'Harden a test server and document all changes.',
    challengeAr: 'Harden a test server and document all changes.',
    prerequisites: [],
    criteriaEn: ['Can disable root login', 'Can configure UFW', 'Can remove unnecessary packages'],
    criteriaAr: ['Can disable root login', 'Can configure UFW', 'Can remove unnecessary packages']
  },
  {
    dayNumber: 320,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'OWASP Top 10 2021',
    titleAr: 'OWASP Top 10 2021',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Describe the OWASP Top 10 most critical web application security risks and mitigation strategies.',
    objectiveAr: 'Describe the OWASP Top 10 most critical web application security risks and mitigation strategies.',
    lessonEn:
      'The OWASP Top 10 represents the most critical web application security risks, including Injection, Cross-Site Scripting (XSS), Broken Authentication, and more. Understanding these risks is essential for building secure applications.',
    lessonAr:
      'The OWASP Top 10 represents the most critical web application security risks, including Injection, Cross-Site Scripting (XSS), Broken Authentication, and more. Understanding these risks is essential for building secure applications.',
    tasks: [
      {
        en: 'Identify XSS vulnerabilities in a sample application',
        ar: 'Identify XSS vulnerabilities in a sample application'
      },
      {
        en: 'Implement Content Security Policy (CSP) headers',
        ar: 'Implement Content Security Policy (CSP) headers'
      },
      {
        en: 'Test for injection vulnerabilities',
        ar: 'Test for injection vulnerabilities'
      },
      {
        en: 'Document risk mitigation strategies',
        ar: 'Document risk mitigation strategies'
      }
    ],
    exerciseEn: 'Identify and document OWASP Top 10 risks in a test application.',
    exerciseAr: 'Identify and document OWASP Top 10 risks in a test application.',
    deliverableEn: 'A documented analysis of OWASP Top 10 risks.',
    deliverableAr: 'A documented analysis of OWASP Top 10 risks.',
    resources: [
      {
        title: 'OWASP Top 10',
        url: 'https://owasp.org/www-project-top-ten/',
        kind: 'official'
      },
      {
        title: 'OWASP Cheat Sheet Series',
        url: 'https://owasp.org/www-project-cheat-sheets/',
        kind: 'reference'
      }
    ],
    challengeEn: 'Perform a security audit using OWASP Top 10 checklists.',
    challengeAr: 'Perform a security audit using OWASP Top 10 checklists.',
    prerequisites: [],
    criteriaEn: ['Can identify OWASP Top 10 risks', 'Can recommend mitigations'],
    criteriaAr: ['Can identify OWASP Top 10 risks', 'Can recommend mitigations']
  },
  {
    dayNumber: 321,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Authentication and Session Management',
    titleAr: 'إدارة authentication and session',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Explain secure authentication practices including password hashing, salting, and multi-factor authentication.',
    objectiveAr: 'Explain secure authentication practices including password hashing, salting, and multi-factor authentication.',
    lessonEn:
      'Secure authentication requires password hashing with bcrypt or argon2, salting, and multi-factor authentication (MFA). Implementing MFA significantly reduces the risk of account compromise.',
    lessonAr:
      'Secure authentication requires password hashing with bcrypt or argon2, salting, and multi-factor authentication (MFA). Implementing MFA significantly reduces the risk of account compromise.',
    tasks: [
      {
        en: 'Implement bcrypt password storage with salt rounds',
        ar: 'Implement bcrypt password storage with salt rounds'
      },
      {
        en: 'Configure a login flow with MFA support',
        ar: 'Configure a login flow with MFA support'
      },
      {
        en: 'Test authentication with weak and strong passwords',
        ar: 'Test authentication with weak and strong passwords'
      },
      {
        en: 'Document authentication security decisions',
        ar: 'Document authentication security decisions'
      }
    ],
    exerciseEn: 'Implement bcrypt password storage and configure MFA.',
    exerciseAr: 'Implement bcrypt password storage and configure MFA.',
    deliverableEn: 'A user authentication system with bcrypt and MFA.',
    deliverableAr: 'A user authentication system with bcrypt and MFA.',
    resources: [
      {
        title: 'Bcrypt docs',
        url: 'https://www.npmjs.com/package/bcrypt',
        kind: 'official'
      },
      {
        title: 'OWASP Authentication Cheat Sheet',
        url: 'https://owasp.org/www-project-authentication-cheat-sheet/',
        kind: 'reference'
      }
    ],
    challengeEn: 'Implement MFA for a user login flow.',
    challengeAr: 'Implement MFA for a user login flow.',
    prerequisites: [],
    criteriaEn: ['Can implement bcrypt password storage', 'Can configure MFA'],
    criteriaAr: ['Can implement bcrypt password storage', 'Can configure MFA']
  },
  {
    dayNumber: 322,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Input Validation and Sanitization',
    titleAr: 'Input validation and sanitization',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Implement server-side input validation using express-validator or equivalent, and prevent injection attacks.',
    objectiveAr: 'Implement server-side input validation using express-validator or equivalent, and prevent injection attacks.',
    lessonEn:
      'Input validation and sanitization prevent injection attacks (SQLi, XSS) by validating and cleaning all user input. Server-side validation is essential as client-side validation can be bypassed.',
    lessonAr:
      'Input validation and sanitization prevent injection attacks (SQLi, XSS) by validating and cleaning all user input. Server-side validation is essential as client-side validation can be bypassed.',
    tasks: [
      {
        en: 'Write validation rules for user registration preventing SQLi and XSS',
        ar: 'Write validation rules for user registration preventing SQLi and XSS'
      },
      {
        en: 'Use express-validator to sanitize input',
        ar: 'Use express-validator to sanitize input'
      },
      {
        en: 'Test for SQL injection vulnerabilities',
        ar: 'Test for SQL injection vulnerabilities'
      },
      {
        en: 'Test for XSS vulnerabilities',
        ar: 'Test for XSS vulnerabilities'
      }
    ],
    exerciseEn: 'Implement input validation and sanitization for a form.',
    exerciseAr: 'Implement input validation and sanitization for a form.',
    deliverableEn: 'A form with server-side validation and sanitization.',
    deliverableAr: 'A form with server-side validation and sanitization.',
    resources: [
      {
        title: 'Express-validator docs',
        url: 'https://express-validator.com',
        kind: 'official'
      },
      {
        title: 'OWASP Injection Cheat Sheet',
        url: 'https://owasp.org/www-project-cheat-sheets/Category Injection Cheat Sheet',
        kind: 'reference'
      }
    ],
    challengeEn: 'Implement input validation and sanitization for a registration form.',
    challengeAr: 'Implement input validation and sanitization for a registration form.',
    prerequisites: [],
    criteriaEn: ['Can validate and sanitize input', 'Can test for injection'],
    criteriaAr: ['Can validate and sanitize input', 'Can test for injection']
  },
  {
    dayNumber: 323,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Security Headers',
    titleAr: 'Security headers',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Implement security headers (HSTS, X-Frame-Options, X-Content-Type-Options) in an Express application using Helmet middleware.',
    objectiveAr: 'Implement security headers (HSTS, X-Frame-Options, X-Content-Type-Options) in an Express application using Helmet middleware.',
    lessonEn:
      'Security headers protect against common attacks. Helmet.js sets HSTS, X-Frame-Options, X-Content-Type-Options, and other headers automatically. Implementing them is a simple yet effective security measure.',
    lessonAr:
      'Security headers protect against common attacks. Helmet.js sets HSTS, X-Frame-Options, X-Content-Type-Options, and other headers automatically. Implementing them is a simple yet effective security measure.',
    tasks: [
      {
        en: 'Configure Helmet middleware in an Express app',
        ar: 'Configure Helmet middleware in an Express app'
      },
      {
        en: 'Set HSTS header with a 1-year max-age',
        ar: 'Set HSTS header with a 1-year max-age'
      },
      {
        en: 'Set X-Frame-Options to DENY',
        ar: 'Set X-Frame-Options to DENY'
      },
      {
        en: 'Set X-Content-Type-Options to nosniff',
        ar: 'Set X-Content-Type-Options to nosniff'
      }
    ],
    exerciseEn: 'Add Helmet middleware to an Express application.',
    exerciseAr: 'Add Helmet middleware to an Express application.',
    deliverableEn: 'An Express app with security headers configured.',
    deliverableAr: 'An Express app with security headers configured.',
    resources: [
      {
        title: 'Helmet docs',
        url: 'https.github.com/helmetjs/helmet',
        kind: 'official'
      },
      {
        title: 'OWASP Security Headers Cheat Sheet',
        url: 'https://owasp.org/www-project-security-headers/',
        kind: 'reference'
      }
    ],
    challengeEn: 'Implement security headers using Helmet for your application.',
    challengeAr: 'Implement security headers using Helmet for your application.',
    prerequisites: [],
    criteriaEn: ['Can configure Helmet middleware', 'Can set HSTS, X-Frame-Options, X-Content-Type-Options'],
    criteriaAr: ['Can configure Helmet middleware', 'Can set HSTS, X-Frame-Options, X-Content-Type-Options']
  },
  {
    dayNumber: 324,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'API Security',
    titleAr: 'API Security',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Design a secure REST API with rate limiting, input validation, and authentication using JWT.',
    objectiveAr: 'Design a secure REST API with rate limiting, input validation, and authentication using JWT.',
    lessonEn:
      'A secure REST API requires rate limiting to prevent abuse, input validation to prevent injection, and JWT authentication with refresh token rotation for secure access.',
    lessonAr:
      'A secure REST API requires rate limiting to prevent abuse, input validation to prevent injection, and JWT authentication with refresh token rotation for secure access.',
    tasks: [
      {
        en: 'Implement rate limiting with express-rate-limit',
        ar: 'Implement rate limiting with express-rate-limit'
      },
      {
        en: 'Configure JWT authentication with refresh token rotation',
        ar: 'Configure JWT authentication with refresh token rotation'
      },
      {
        en: 'Test API endpoints for security vulnerabilities',
        ar: 'Test API endpoints for security vulnerabilities'
      },
      {
        en: 'Document API security design',
        ar: 'Document API security design'
      }
    ],
    exerciseEn: 'Implement rate limiting and JWT authentication for an API.',
    exerciseAr: 'Implement rate limiting and JWT authentication for an API.',
    deliverableEn: 'A secure API with rate limiting and JWT auth.',
    deliverableAr: 'A secure API with rate limiting and JWT auth.',
    resources: [
      {
        title: 'Express-rate-limit docs',
        url: 'https://github.com/alexanderzobnin/express-rate-limit',
        kind: 'official'
      },
      {
        title: 'OWASP API Security',
        url: 'https://owasp.org/www-project-api-security/',
        kind: 'reference'
      }
    ],
    challengeEn: 'Implement rate limiting and JWT auth for your API.',
    challengeAr: 'Implement rate limiting and JWT auth for your API.',
    prerequisites: [],
    criteriaEn: ['Can implement rate limiting', 'Can configure JWT authentication'],
    criteriaAr: ['Can implement rate limiting', 'Can configure JWT authentication']
  },
  {
    dayNumber: 325,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Security Testing',
    titleAr: 'Security testing',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Perform SQL injection (SQLi) and Cross-Site Scripting (XSS) penetration testing on a test application using OWASP ZAP or Burp Suite.',
    objectiveAr: 'Perform SQL injection (SQLi) and Cross-Site Scripting (XSS) penetration testing on a test application using OWASP ZAP or Burp Suite.',
    lessonEn:
      'Penetration testing identifies vulnerabilities before attackers do. OWASP ZAP and Burp Suite are leading tools for finding XSS, SQLi, and other web vulnerabilities.',
    lessonAr:
      'Penetration testing identifies vulnerabilities before attackers do. OWASP ZAP and Burp Suite are leading tools for finding XSS, SQLi, and other web vulnerabilities.',
    tasks: [
      {
        en: 'Run OWASP ZAP or Burp Suite on a test application',
        ar: 'Run OWASP ZAP or Burp Suite on a test application'
      },
      {
        en: 'Identify XSS and SQLi vulnerabilities',
        ar: 'Identify XSS and SQLi vulnerabilities'
      },
      {
        en: 'Report findings and recommend mitigations',
        ar: 'Report findings and recommend mitigations'
      },
      {
        en: 'Remediate identified vulnerabilities',
        ar: 'Remediate identified vulnerabilities'
      }
    ],
    exerciseEn: 'Perform a penetration test on a sample application.',
    exerciseAr: 'Perform a penetration test on a sample application.',
    deliverableEn: 'A penetration test report with findings and remediations.',
    deliverableAr: 'A penetration test report with findings and remediations.',
    resources: [
      {
        title: 'OWASP ZAP',
        url: 'https://www.zaproxy.org/',
        kind: 'official'
      },
      {
        title: 'Burp Suite docs',
        url: 'https://portswigger.net/burp/documentation',
        kind: 'reference'
      }
    ],
    challengeEn: 'Run a penetration test and report findings.',
    challengeAr: 'Run a penetration test and report findings.',
    prerequisites: [],
    criteriaEn: ['Can run a penetration test', 'Can report findings'],
    criteriaAr: ['Can run a penetration test', 'Can report findings']
  },
  {
    dayNumber: 326,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Compliance Frameworks',
    titleAr: 'إطارات compliance',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Explain the requirements of SOC 2, ISO 27001, or GDPR as they relate to software development and data handling, and map a data flow to GDPR consent and erasure.',
    objectiveAr: 'Explain the requirements of SOC 2, ISO 27001, or GDPR as they relate to software development and data handling, and map a data flow to GDPR consent and erasure.',
    lessonEn:
      'Compliance frameworks like SOC 2, ISO 27001, and GDPR impose requirements on how data is handled, stored, and erased. Mapping data flows ensures compliance with consent and erasure requests.',
    lessonAr:
      'Compliance frameworks like SOC 2, ISO 27001, and GDPR impose requirements on how data is handled, stored, and erased. Mapping data flows ensures compliance with consent and erasure.',
    tasks: [
      {
        en: 'Map a data flow to GDPR consent and erasure requirements',
        ar: 'Map a data flow to GDPR consent and erasure requirements'
      },
      {
        en: 'Explain SOC 2 Trust Services Criteria',
        ar: 'Explain SOC 2 Trust Services Criteria'
      },
      {
        en: 'Explain ISO 27001 requirements',
        ar: 'Explain ISO 27001 requirements'
      },
      {
        en: 'Document compliance mapping for a sample application',
        ar: 'Document compliance mapping for a sample application'
      }
    ],
    exerciseEn: 'Map a sample data flow to GDPR consent erasure.',
    exerciseAr: 'Map a sample data flow to GDPR consent erasure.',
    deliverableEn: 'A GDPR compliance mapping document.',
    deliverableAr: 'A GDPR compliance mapping document.',
    resources: [
      {
        title: 'GDPR docs',
        url: 'https://eur-lex.europa.eu',
        kind: 'official'
      },
      {
        title: 'ISO 27001 docs',
        url: 'https://www.iso.org/standard/',
        kind: 'reference'
      }
    ],
    challengeEn: 'Map a data flow to GDPR consent and erasure requirements.',
    challengeAr: 'Map a data flow to GDPR consent and erasure requirements.',
    prerequisites: [],
    criteriaEn: ['Can map data flow to GDPR', 'Can explain compliance frameworks'],
    criteriaAr: ['Can map data flow to GDPR', 'Can explain compliance frameworks']
  },
  {
    dayNumber: 327,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Secure DevOps Pipeline',
    titleAr: 'DevOps Pipeline Secure',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Integrate security scanning (SAST, DAST, dependency-check) into a CI/CD pipeline.',
    objectiveAr: 'Integrate security scanning (SAST, DAST, dependency-check) into a CI/CD pipeline.',
    lessonEn:
      'Security scanning in the CI/CD pipeline ensures that code is vetted before deployment. SAST (Static Application Security Testing), DAST (Dynamic Application Security Testing), and dependency-check identify vulnerabilities at different stages.',
    lessonAr:
      'Security scanning in the CI/CD pipeline ensures that code is vetted before deployment. SAST (Static Application Security Testing), DAST (Dynamic Application Security Testing), and dependency-check identify vulnerabilities at different stages.',
    tasks: [
      {
        en: 'Configure GitHub Actions to run Bandit (SAST)',
        ar: 'Configure GitHub Actions to run Bandit (SAST)'
      },
      {
        en: 'Configure GitHub Actions to run Trivy (DAST)',
        ar: 'Configure GitHub Actions to run Trivy (DAST)'
      },
      {
        en: 'Configure GitHub Actions to run OWASP Dependency-Check',
        ar: 'Configure GitHub Actions to run OWASP Dependency-Check'
      },
      {
        en: 'Fail the build on high-severity vulnerabilities',
        ar: 'Fail the build on high-severity vulnerabilities'
      }
    ],
    exerciseEn: 'Integrate security scanning into a GitHub Actions workflow.',
    exerciseAr: 'Integrate security scanning into a GitHub Actions workflow.',
    deliverableEn: 'A GitHub Actions workflow with security scanning.',
    deliverableAr: 'A GitHub Actions workflow with security scanning.',
    resources: [
      {
        title: 'Bandit docs',
        url: 'https://github.com/PyCQA/bandit',
        kind: 'official'
      },
      {
        title: 'OWASP Dependency-Check docs',
        url: 'https://owasp.org/www-project-dependency-check/',
        kind: 'reference'
      }
    ],
    challengeEn: 'Integrate Bandit, Trivy, and Dependency-Check into a workflow and fail on high severity.',
    challengeAr: 'Integrate Bandit, Trivy, and Dependency-Check into a workflow and fail on high severity.',
    prerequisites: [],
    criteriaEn: ['Can configure SAST, DAST, and dependency-check', 'Can fail build on high severity'],
    criteriaAr: ['Can configure SAST, DAST, and dependency-check', 'Can fail build on high severity']
  },
  {
    dayNumber: 328,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Encryption and Key Management',
    titleAr: 'Encryption and Key Management',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Implement envelope encryption using AWS KMS for data at rest, and explain key rotation policies.',
    objectiveAr: 'Implement envelope encryption using AWS KMS for data at rest, and explain key rotation policies.',
    lessonEn:
      'Envelope encryption uses a data key to encrypt data and a Key Management Service (KMS) to encrypt the data key. Key rotation policies ensure keys are rotated regularly without data loss.',
    lessonAr:
      'Envelope encryption uses a data key to encrypt data and a Key Management Service (KMS) to encrypt the data key. Key rotation policies ensure keys are rotated regularly without data loss.',
    tasks: [
      {
        en: 'Encrypt a database field using AWS KMS',
        ar: 'Encrypt a database field using AWS KMS'
      },
      {
        en: 'Decrypt a database field using AWS KMS in application code',
        ar: 'Decrypt a database field using AWS KMS in application code'
      },
      {
        en: 'Configure key rotation policy',
        ar: 'Configure key rotation policy'
      },
      {
        en: 'Test encryption and decryption workflow',
        ar: 'Test encryption and decryption workflow'
      }
    ],
    exerciseEn: 'Implement envelope encryption with AWS KMS.',
    exerciseAr: 'Implement envelope encryption with AWS KMS.',
    deliverableEn: 'A workflow with envelope encryption and KMS key rotation.',
    deliverableAr: 'A workflow with envelope encryption and KMS key rotation.',
    resources: [
      {
        title: 'AWS KMS docs',
        url: 'https://docs.aws.amazon.com/kms',
        kind: 'official'
      },
      {
        title: 'Envelope encryption pattern',
        url: 'https://docs.aws.amazon.com/kms/latest/developerguide/envelope-encryption.html',
        kind: 'reference'
      }
    ],
    challengeEn: 'Implement envelope encryption and key rotation with AWS KMS.',
    challengeAr: 'Implement envelope encryption and key rotation with AWS KMS.',
    prerequisites: [],
    criteriaEn: ['Can encrypt with KMS', 'Can configure key rotation'],
    criteriaAr: ['Can encrypt with KMS', 'Can configure key rotation']
  },
  {
    dayNumber: 329,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Incident Response',
    titleAr: 'Incident Response',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Create an incident response plan with containment, eradication, and recovery steps for a data breach scenario.',
    objectiveAr: 'Create an incident response plan with containment, eradication, and recovery steps for a data breach scenario.',
    lessonEn:
      'An incident response plan defines roles, communication channels, and steps for containment, eradication, and recovery after a data breach. A well-practiced plan reduces damage and recovery time.',
    lessonAr:
      'An incident response plan defines roles, communication channels, and steps for containment, eradication, and recovery after a data breach. A well-practiced plan reduces damage and recovery time.',
    tasks: [
      {
        en: 'Define roles and communication channels for a security team',
        ar: 'Define roles and communication channels for a security team'
      },
      {
        en: 'Create containment steps for a breach',
        ar: 'Create containment steps for a breach'
      },
      {
        en: 'Create eradication steps to remove the threat',
        ar: 'Create eradication steps to remove the threat'
      },
      {
        en: 'Create recovery steps to restore normal operation',
        ar: 'Create recovery steps to restore normal operation'
      }
    ],
    exerciseEn: 'Create an incident response plan for a data breach scenario.',
    exerciseAr: 'Create an incident response plan for a data breach scenario.',
    deliverableEn: 'An incident response plan document.',
    deliverableAr: 'An incident response plan document.',
    resources: [
      {
        title: 'NIST IR docs',
        url: 'https://www.nist.gov/incident-response',
        kind: 'official'
      }
    ],
    challengeEn: 'Create an incident response plan for a compromised production environment.',
    challengeAr: 'Create an incident response plan for a compromised production environment.',
    prerequisites: [],
    criteriaEn: ['Can define roles and communication', 'Can create containment steps'],
    criteriaAr: ['Can define roles and communication', 'Can create containment steps']
  },
  {
    dayNumber: 330,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Secure Coding Practices - Part 1',
    titleAr: 'Secure Coding Practices - Part 1',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Apply secure coding principles to prevent the top 5 most common vulnerabilities in Node applications using parameterized queries and output encoding.',
    objectiveAr: 'Apply secure coding principles to prevent the top 5 most common vulnerabilities in Node applications using parameterized queries and output encoding.',
    lessonEn:
      'Secure coding principles prevent the most common vulnerabilities. Parameterized queries prevent SQL injection, and output encoding prevents XSS. Applying these principles is fundamental to building secure applications.',
    lessonAr:
      'Secure coding principles prevent the most common vulnerabilities. Parameterized queries prevent SQL injection, and output encoding prevents XSS. Applying these principles is fundamental to building secure applications.',
    tasks: [
      {
        en: 'Demonstrate remediation of SQL injection using parameterized queries',
        ar: 'Demonstrate remediation of SQL injection using parameterized queries'
      },
      {
        en: 'Demonstrate output encoding to prevent XSS',
        ar: 'Demonstrate output encoding to prevent XSS'
      },
      {
        en: 'Apply input validation for user inputs',
        ar: 'Apply input validation for user inputs'
      },
      {
        en: 'Document secure coding decisions',
        ar: 'Document secure coding decisions'
      }
    ],
    exerciseEn: 'Remediate a SQL injection vulnerability and add output encoding.',
    exerciseAr: 'Remediate a SQL injection vulnerability and add output encoding.',
    deliverableEn: 'A remediated code sample with parameterized queries and output encoding.',
    deliverableAr: 'A remediated code sample with parameterized queries and output encoding.',
    resources: [
      {
        title: 'OWASP Node Security',
        url: 'https://owasp.org/www-project-node-security/',
        kind: 'reference'
      }
    ],
    challengeEn: 'Remediate a SQL injection and add XSS protection to a Node endpoint.',
    challengeAr: 'Remediate a SQL injection and add XSS protection to a Node endpoint.',
    prerequisites: [],
    criteriaEn: ['Can use parameterized queries', 'Can apply output encoding'],
    criteriaAr: ['Can use parameterized queries', 'Can apply output encoding']
  },
  {
    dayNumber: 331,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Secure Coding Practices - Part 2',
    titleAr: 'Secure Coding Practices - Part 2',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Apply secure coding principles to prevent the next 5 most common vulnerabilities, including XSS remediation with CSP and output encoding.',
    objectiveAr: 'Apply secure coding principles to prevent the next 5 most common vulnerabilities.',
    lessonEn:
      'Building on Part 1, this session covers additional secure coding principles. XSS remediation with Content Security Policy (CSP) and output encoding are essential for web application security.',
    lessonAr:
      'Building on Part 1, this session covers additional secure coding principles. XSS remediation with Content Security Policy (CSP) and output encoding are essential for web application security.',
    tasks: [
      {
        en: 'Demonstrate XSS remediation using CSP and output encoding',
        ar: 'Demonstrate XSS remediation using CSP and output encoding'
      },
      {
        en: 'Apply additional input validation',
        ar: 'Apply additional input validation'
      },
      {
        en: 'Document secure coding decisions for Part 2',
        ar: 'Document secure coding decisions for Part 2'
      },
      {
        en: 'Remediate a second common vulnerability',
        ar: 'Remediate a second common vulnerability'
      }
    ],
    exerciseEn: 'Remediate an XSS vulnerability using CSP and output encoding.',
    exerciseAr: 'Remediate an XSS vulnerability using CSP and output encoding.',
    deliverableEn: 'A remediated code sample with CSP and output encoding.',
    deliverableAr: 'A remediated code sample with CSP and output encoding.',
    resources: [
      {
        title: 'CSP Generator',
        url: 'https://csp.ezyang.com/',
        kind: 'reference'
      },
      {
        title: 'OWASP XSS Prevention',
        url: 'https://cheatsheetseries.owasp.org/cheatsheets/XSS_Prevention_Cheat_Sheet/',
        kind: 'reference'
      }
    ],
    challengeEn: 'Remediate an XSS vulnerability using CSP and output encoding.',
    challengeAr: 'Remediate an XSS vulnerability using CSP and output encoding.',
    prerequisites: [],
    criteriaEn: ['Can implement CSP', 'Can apply output encoding'],
    criteriaAr: ['Can implement CSP', 'Can apply output encoding']
  },
  {
    dayNumber: 332,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Privacy by Design',
    titleAr: 'Privacy by Design',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Explain privacy by design principles and implement data minimization, purpose limitation, and user consent in an application.',
    objectiveAr: 'Explain privacy by design principles and implement data minimization, purpose limitation, and user consent in an application.',
    lessonEn:
      'Privacy by design embeds privacy into the engineering process. Data minimization, purpose limitation, and user consent ensure that personal data is handled responsibly and ethically.',
    lessonAr:
      'Privacy by design embeds privacy into the engineering process. Data minimization, purpose limitation, and user consent ensure that personal data is handled responsibly and ethically.',
    tasks: [
      {
        en: 'Implement a privacy settings page allowing users to export, delete, or restrict data',
        ar: 'Implement a privacy settings page allowing users to export, delete, or restrict data'
      },
      {
        en: 'Implement data minimization (collect only what is needed)',
        ar: 'Implement data minimization (collect only what is needed)'
      },
      {
        en: 'Implement purpose limitation',
        ar: 'Implement purpose limitation'
      },
      {
        en: 'Implement user consent mechanisms',
        ar: 'Implement user consent mechanisms'
      }
    ],
    exerciseEn: 'Implement a privacy settings page with export, delete, and restrict options.',
    exerciseAr: 'Implement a privacy settings page with export, delete, and restrict options.',
    deliverableEn: 'A privacy settings page with data control options.',
    deliverableAr: 'A privacy settings page with data control options.',
    resources: [
      {
        title: 'Privacy by Design docs',
        url: 'https://www.privacybydesign.ca',
        kind: 'official'
      }
    ],
    challengeEn: 'Implement a privacy settings page with data control options.',
    challengeAr: 'Implement a privacy settings page with data control options.',
    prerequisites: [],
    criteriaEn: ['Can implement data minimization', 'Can implement user consent'],
    criteriaAr: ['Can implement data minimization', 'Can implement user consent']
  },
  {
    dayNumber: 333,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Zero Trust Architecture',
    titleAr: 'Zero Trust Architecture',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Explain the Zero Trust model: never trust, always verify, and implement micro-segmentation for lateral movement prevention.',
    objectiveAr: 'Explain the Zero Trust model: never trust, always verify, and implement micro-segmentation for lateral movement prevention.',
    lessonEn:
      'Zero Trust operates on the principle of never trust, always verify. Micro-segmentation restricts lateral movement between services, limiting the impact of a compromise.',
    lessonAr:
      'Zero Trust operates on the principle of never trust, always verify. Micro-segmentation restricts lateral movement between services, limiting the impact of a compromise.',
    tasks: [
      {
        en: 'Explain the Zero Trust model',
        ar: 'Explain the Zero Trust model'
      },
      {
        en: 'Implement micro-segmentation using Kubernetes NetworkPolicies',
        ar: 'Implement micro-segmentation using Kubernetes NetworkPolicies'
      },
      {
        en: 'Restrict pod communication to only required services',
        ar: 'Restrict pod communication to only required services'
      },
      {
        en: 'Document the Zero Trust architecture for your environment',
        ar: 'Document the Zero Trust architecture for your environment'
      }
    ],
    exerciseEn: 'Implement micro-segmentation using Kubernetes NetworkPolicies.',
    exerciseAr: 'Implement micro-segmentation using Kubernetes NetworkPolicies.',
    deliverableEn: 'A NetworkPolicy that restricts pod communication.',
    deliverableAr: 'A NetworkPolicy that restricts pod communication.',
    resources: [
      {
        title: 'Kubernetes NetworkPolicy docs',
        url: 'https://kubernetes.io/docs/concepts/services-networking/network-policies/',
        kind: 'official'
      }
    ],
    challengeEn: 'Implement micro-segmentation using Kubernetes NetworkPolicies.',
    challengeAr: 'Implement micro-segmentation using Kubernetes NetworkPolicies.',
    prerequisites: [],
    criteriaEn: ['Can implement NetworkPolicy', 'Can restrict pod communication'],
    criteriaAr: ['Can implement NetworkPolicy', 'Can restrict pod communication']
  },
  {
    dayNumber: 334,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Secure Software Supply Chain',
    titleAr: 'Secure Software Supply Chain',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Explain the risks of open-source component vulnerabilities and implement SBOM (Software Bill of Materials) tracking using Syft and CycloneDX.',
    objectiveAr: 'Explain the risks of open-source component vulnerabilities and implement SBOM (Software Bill of Materials) tracking using Syft and CycloneDX.',
    lessonEn:
      'Open-source components introduce supply chain risks. SBOMs track all dependencies, and tools like Syft and CycloneDX generate and analyze SBOMs to identify vulnerabilities.',
    lessonAr:
      'Open-source components introduce supply chain risks. SBOMs track all dependencies, and tools like Syft and CycloneDX generate and analyze SBOMs to identify vulnerabilities.',
    tasks: [
      {
        en: 'Generate an SBOM for a sample application using Syft',
        ar: 'Generate an SBOM for a sample application using Syft'
      },
      {
        en: 'Analyze the SBOM using CycloneDX',
        ar: 'Analyze the SBOM using CycloneDX'
      },
      {
        en: 'Identify and remediate vulnerable dependencies',
        ar: 'Identify and remediate vulnerable dependencies'
      },
      {
        en: 'Document the SBOM and remediation plan',
        ar: 'Document the SBOM and remediation plan'
      }
    ],
    exerciseEn: 'Generate an SBOM and identify vulnerable dependencies.',
    exerciseAr: 'Generate an SBOM and identify vulnerable dependencies.',
    deliverableEn: 'An SBOM with vulnerability analysis and remediation plan.',
    deliverableAr: 'An SBOM with vulnerability analysis and remediation plan.',
    resources: [
      {
        title: 'Syft docs',
        url: 'https://github.com/package-url/syft',
        kind: 'official'
      },
      {
        title: 'CycloneDX docs',
        url: 'https://cyclonedx.github.io/spec/',
        kind: 'reference'
      }
    ],
    challengeEn: 'Generate an SBOM and identify all vulnerable dependencies.',
    challengeAr: 'Generate an SBOM and identify all vulnerable dependencies.',
    prerequisites: [],
    criteriaEn: ['Can generate an SBOM', 'Can identify vulnerable dependencies'],
    criteriaAr: ['Can generate an SBOM', 'Can identify vulnerable dependencies']
  },
  {
    dayNumber: 335,
    phaseSlug: 'security-compliance',
    kind: 'lesson' as const,
    titleEn: 'Security Awareness and Training',
    titleAr: 'Security Awareness and Training',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Design and deliver a security awareness training program for development teams covering phishing, social engineering, and secure development lifecycle (SDL).',
    objectiveAr: 'Design and deliver a security awareness training program for development teams covering phishing, social engineering, and secure development lifecycle (SDL).',
    lessonEn:
      'Security awareness training educates developers about phishing, social engineering, and the secure development lifecycle (SDL). A trained team is the first line of defense against social engineering attacks.',
    lessonAr:
      'Security awareness training educates developers about phishing, social engineering, and the secure development lifecycle (SDL). A trained team is the first line of defense against social engineering attacks.',
    tasks: [
      {
        en: 'Design a phishing simulation exercise',
        ar: 'Design a phishing simulation exercise'
      },
      {
        en: 'Measure team member click-through rates',
        ar: 'Measure team member click-through rates'
      },
      {
        en: 'Report findings and recommend training',
        ar: 'Report findings and recommend training'
      },
      {
        en: 'Design SDL training modules',
        ar: 'Design SDL training modules'
      }
    ],
    exerciseEn: 'Design and deliver a security awareness training session.',
    exerciseAr: 'Design and deliver a security awareness training session.',
    deliverableEn: 'A security awareness training program and session.',
    deliverableAr: 'A security awareness training program and session.',
    resources: [
      {
        title: 'SANS Security Awareness',
        url: 'https://www.sans.com/security-awareness/',
        kind: 'official'
      }
    ],
    challengeEn: 'Design and deliver a phishing simulation and report findings.',
    challengeAr: 'Design and deliver a phishing simulation and report findings.',
    prerequisites: [],
    criteriaEn: ['Can design a phishing simulation', 'Can measure click-through rates'],
    criteriaAr: ['Can design a phishing simulation', 'Can measure click-through rates'],
  }]