#!/usr/bin/env python3
import re, os

# ============================================================
# Phase 11: Add days 319-335 (17 days) after day 318
# ============================================================
with open('src/features/curriculum/days/phase-11.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find day 318 entry end and closing bracket
day318_marker = 'dayNumber: 318'
idx = content.find(day318_marker)
if idx < 0:
    print("Could not find day 318 in phase-11.ts")
else:
    end_search_start = idx + len(day318_marker)
    end_idx = content.find('},', end_search_start)
    if end_idx < 0:
        print("Could not find end of day 318 entry")
    else:
        close_bracket = content.rfind(']')
        if close_bracket < 0:
            print("Could not find closing bracket")
        else:
            insert_point = end_idx + 2
            
            new_days_text = """  {
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
    criteriaAr: ['Can design a phishing simulation', 'Can measure click-through rates']
  }"""

            new_content = content[:insert_point] + new_days_text + content[close_bracket:]
            
            with open('src/features/curriculum/days/phase-11.ts', 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print("Successfully added 17 missing days (319-335) to phase-11.ts")
            old_count = len(re.findall(r'dayNumber: (\d+)', content))
            new_count = len(re.findall(r'dayNumber: (\d+)', new_content))
            print(f"Day count: {old_count} -> {new_count}")
PYEOF