import type { CurriculumDay } from '../types'

const MDN = 'https://developer.mozilla.org/en-US/docs'

/** Phase 5 — Databases & Authentication (days 121–150). */
export const PHASE_5_DAYS: CurriculumDay[] = [
  {
    dayNumber: 121,
    phaseSlug: 'database-auth',
    kind: 'lesson',
    titleEn: 'SQL Fundamentals',
    titleAr: 'SQL Fundamentals',
    topic: 'SQL',
    estimatedMinutes: 90,
    objectiveEn: 'Write SELECT, INSERT, UPDATE, DELETE statements with proper syntax.',
    objectiveAr: 'Write SELECT, INSERT, UPDATE, DELETE statements with proper syntax.',
    lessonEn:
      'SQL is the standard language for relational databases. SELECT retrieves data, INSERT adds new rows, UPDATE modifies existing data, and DELETE removes rows. Master the basic syntax, including FROM, WHERE, GROUP BY, ORDER BY, and JOIN clauses. Understanding these operations is the foundation for all later database work.',
    lessonAr:
      'SQL هي اللغة القياسية لقواعد البيانات العلائقية. SELECT تسترجع البيانات، INSERT يضيف صفوفاً جديدة، UPDATE يعدِّل البيانات الموجودة، وحذف Eliminates rows. Master the basic syntax, including FROM, WHERE, GROUP BY, ORDER BY, and JOIN clauses. Understanding these operations is the foundation for all later database work.',
    tasks: [
      {
        en: 'Write a SELECT query retrieving all columns from the users table',
        ar: 'Write a SELECT query retrieving all columns from the users table'
      },
      {
        en: 'Write an INSERT statement adding a new user with name and email',
        ar: 'Write an INSERT statement adding a new user with name and email'
      },
      {
        en: 'Write a UPDATE statement changing a user\'s email',
        ar: 'Write a UPDATE statement changing a user\'s email'
      },
      {
        en: 'Write a DELETE statement removing a user by ID',
        ar: 'Write a DELETE statement removing a user by ID'
      }
    ],
    exerciseEn: 'Create a table, insert 3 rows, update one row\'s value, then delete one row. Script the whole sequence.',
    exerciseAr: 'Create a table, insert 3 rows, update one row\'s value, then delete one row. Script the whole sequence.',
    deliverableEn: 'A SQL script with SELECT, INSERT, UPDATE, and DELETE statements.',
    deliverableAr: 'A SQL script with SELECT, INSERT, UPDATE, and DELETE statements',
    resources: [
      { title: 'MDN: SQL introduction', url: MDN + '/Learn/Web/Structured_queries/SQL_basic_syntax', kind: 'official' },
      { title: 'W3Schools SQL Tutorial', url: 'https://www.w3schools.com/sql/', kind: 'reference' }
    ],
    challengeEn: 'Write a query that joins two tables and returns columns from both.',
    challengeAr: 'Write a query that joins two tables and returns columns from both.',
    prerequisites: [],
    criteriaEn: ['Can write a SELECT with WHERE clause', 'Can write an INSERT statement'],
    criteriaAr: ['Can write a SELECT with WHERE clause', 'Can write an INSERT statement']
  },
  {
    dayNumber: 122,
    phaseSlug: 'database-auth',
    kind: 'lesson',
    titleEn: 'Relational Database Design',
    titleAr: 'Relational Database Design',
    topic: 'Database Design',
    estimatedMinutes: 90,
    objectiveEn: 'Normalize a table to 3NF, define primary and foreign keys.',
    objectiveAr: 'Normalize a table to 3NF, define primary and foreign keys.',
    lessonEn:
      'Database design starts with understanding normal forms. First Normal Form (1NF) ensures atomic values. Second Normal Form (2NF) removes partial dependency. Third Normal Form (3NF) removes transitive dependency. Primary keys uniquely identify rows; foreign keys link tables together. A well-designed schema avoids data redundancy and ensures integrity.',
    lessonAr:
      'Database design starts with understanding normal forms. First Normal Form (1NF) ensures atomic values. Second Normal Form (2NF) removes partial dependency. Third Normal Form (3NF) removes transitive dependency. Primary keys uniquely identify rows; foreign keys link tables together. A well-designed schema avoids data redundancy and ensures integrity.',
    tasks: [
      {
        en: 'Identify the normal form of a given schema (1NF, 2NF, or 3NF)',
        ar: 'Identify the normal form of a given schema (1NF, 2NF, or 3NF)'
      },
      {
        en: 'Define a primary key for a new table',
        ar: 'Define a primary key for a new table'
      },
      {
        en: 'Define a foreign key referencing another table',
        ar: 'Define a foreign key referencing another table'
      },
      {
        en: 'Draw an ER diagram for a simple e-commerce schema',
        ar: 'Draw an ER diagram for a simple e-commerce schema'
      }
    ],
    exerciseEn: 'Normalize a given unnormalized schema to 3NF and draw the ER diagram.',
    exerciseAr: 'Normalize a given unnormalized schema to 3NF and draw the ER diagram.',
    deliverableEn: 'Normalized schema (3NF) and ER diagram.',
    deliverableAr: 'Normalized schema (3NF) and ER diagram.',
    resources: [
      { title: 'MDN: Database design', url: MDN + '/Learn/Server-side/SQL/Database_design', kind: 'official' },
      { title: 'ER Diagram Tool', url: 'https://dbdiagram.io/', kind: 'reference' }
    ],
    challengeEn: 'Design a database schema for a library system with books, members, and loans.',
    challengeAr: 'Design a database schema for a library system with books, members, and loans.',
    prerequisites: [121],
    criteriaEn: ['Can define primary and foreign keys', 'Can explain 3NF'],
    criteriaAr: ['Can define primary and foreign keys', 'Can explain 3NF']
  },
  {
    dayNumber: 123,
    phaseSlug: 'database-auth',
    kind: 'practice',
    titleEn: 'PostgreSQL Setup and psql',
    titleAr: 'PostgreSQL Setup and psql',
    topic: 'PostgreSQL',
    estimatedMinutes: 100,
    objectiveEn: 'Install PostgreSQL, connect via psql, and run basic commands.',
    objectiveAr: 'Install PostgreSQL, connect via psql, and run basic commands.',
    lessonEn:
      'PostgreSQL is the recommended database for this curriculum. Install it locally or use a cloud instance. The psql command-line tool runs queries, \\l lists databases, \\dt lists tables, and \\d shows table structure. Learn the prompt format and basic meta-commands.',
    lessonAr:
      'PostgreSQL is the recommended database for this curriculum. Install it locally or use a cloud instance. The psql command-line tool runs queries, \\l lists databases, \\dt lists tables, and \\d shows table structure. Learn the prompt format and basic meta-commands.',
    tasks: [
      {
        en: 'Install PostgreSQL and start the service',
        ar: 'Install PostgreSQL and start the service'
      },
      {
        en: 'Connect via psql and run \\l to list databases',
        ar: 'Connect via psql and run \\l to list databases'
      },
      {
        en: 'Create a new database named learning_db',
        ar: 'Create a new database named learning_db'
      },
      {
        en: 'Run \\dt to list tables in the new database',
        ar: 'Run \\dt to list tables in the new database'
      }
    ],
    exerciseEn: 'Install PostgreSQL, connect via psql, create a database, and list its tables.',
    exerciseAr: 'Install PostgreSQL, connect via psql, create a database, and list its tables.',
    deliverableEn: 'PostgreSQL installed and a new database created.',
    deliverableAr: 'PostgreSQL installed and a new database created',
    resources: [
      { title: 'PostgreSQL Documentation', url: 'https://www.postgresql.org/docs/', kind: 'official' },
      { title: 'psql cheat sheet', url: 'https://cheatsheets.training.gq/psql/', kind: 'reference' }
    ],
    challengeEn: 'Create a table with columns and insert 5 rows via psql.',
    challengeAr: 'Create a table with columns and insert 5 rows via psql.',
    prerequisites: [122],
    criteriaEn: ['PostgreSQL installed', 'Can connect via psql'],
    criteriaAr: ['PostgreSQL installed', 'Can connect via psql']
  },
  {
    dayNumber: 124,
    phaseSlug: 'database-auth',
    kind: 'project',
    titleEn: 'User Table Schema',
    titleAr: 'User Table Schema',
    topic: 'Database Project',
    estimatedMinutes: 120,
    objectiveEn: 'Design and create a users table with proper constraints, indexes, and a seed script.',
    objectiveAr: 'Design and create a users table with proper constraints, indexes, and a seed script.',
    lessonEn:
      'A production-ready users table needs a primary key, unique constraints on email, not-null constraints on required fields, and an index on frequently queried columns. Include a seed SQL script with test data. This table will be the foundation for authentication in later days.',
    lessonAr:
      'A production-ready users table needs a primary key, unique constraints on email, not-null constraints on required fields, and an index on frequently queried columns. Include a seed SQL script with test data. This table will be the foundation for authentication in later days.',
    tasks: [
      {
        en: 'Create a users table with id, name, email, password_hash, and created_at',
        ar: 'Create a users table with id, name, email, password_hash, and created_at'
      },
      {
        en: 'Add a unique constraint on email',
        ar: 'Add a unique constraint on email'
      },
      {
        en: 'Add an index on the email column',
        ar: 'Add an index on the email column'
      },
      {
        en: 'Write a seed script with 3 test users',
        ar: 'Write a seed script with 3 test users'
      }
    ],
    exerciseEn: 'Create the users table and run the seed script.',
    exerciseAr: 'Create the users table and run the seed script.',
    deliverableEn: 'A users table with constraints, index, and seed script.',
    deliverableAr: 'A users table with constraints, index, and seed script',
    resources: [
      { title: 'PostgreSQL Cheat Sheet', url: 'https://cheatsheets.training.gq/psql/', kind: 'reference' },
      { title: 'Index tutorial', url: 'https://www.postgresql.org/docs/current/indexes.html', kind: 'official' }
    ],
    challengeEn: 'Add a check constraint ensuring the email contains an @ sign.',
    challengeAr: 'Add a check constraint ensuring the email contains an @ sign.',
    prerequisites: [123],
    criteriaEn: ['Table created with primary key', 'Unique constraint on email', 'Index on email'],
    criteriaAr: ['Table created with primary key', 'Unique constraint on email', 'Index on email']
  },
  {
    dayNumber: 125,
    phaseSlug: 'database-auth',
    kind: 'review',
    titleEn: 'Database Review and Consolidation',
    titleAr: 'Database Review and Consolidation',
    topic: 'Review',
    estimatedMinutes: 70,
    objectiveEn: 'Re-read the schema you built and fix weaknesses: missing constraints, missing indexes, unclear naming.',
    objectiveAr: 'Re-read the schema you built and fix weaknesses: missing constraints, missing indexes, unclear naming.',
    lessonEn:
      'A deliberate review day. Re-read the tables you wrote, look for: missing NOT NULL constraints, missing INDEXes on foreign keys, inconsistent naming conventions. Then run your SQL scripts and verify they work end-to-end.',
    lessonAr:
      'A deliberate review day. Re-read the tables you wrote, look for: missing NOT NULL constraints, missing INDEXes on foreign keys, inconsistent naming conventions. Then run your SQL scripts and verify they work end-to-end.',
    tasks: [
      {
        en: 'List the five biggest mistakes you made in days 121–124 and fix each',
        ar: 'List the five biggest mistakes you made in days 121–124 and fix each'
      },
      {
        en: 'Add a NOT NULL constraint to every required column',
        ar: 'Add a NOT NULL constraint to every required column'
      },
      {
        en: 'Add an index on the foreign key column',
        ar: 'Add an index on the foreign key column'
      },
      {
        en: 'Run all your SQL scripts and verify they execute without error',
        ar: 'Run all your SQL scripts and verify they execute without error'
      }
    ],
    exerciseEn: 'Add a missing NOT NULL constraint and an index to your users table.',
    exerciseAr: 'Add a missing NOT NULL constraint and an index to your users table.',
    deliverableEn: 'A cleaned-up schema with constraints and indexes.',
    deliverableAr: 'A cleaned-up schema with constraints and indexes',
    resources: [
      { title: 'PostgreSQL Constraints', url: 'https://www.postgresql.org/docs/current/ddl-constraints.html', kind: 'official' }
    ],
    challengeEn: 'Add a unique index that also enforces case-insensitive email.',
    challengeAr: 'Add a unique index that also enforces case-insensitive email.',
    prerequisites: [124],
    criteriaEn: ['All required columns have NOT NULL', 'Index on foreign key column'],
    criteriaAr: ['All required columns have NOT NULL', 'Index on foreign key column']
  },
  {
    dayNumber: 126,
    phaseSlug: 'database-auth',
    kind: 'lesson',
    titleEn: 'Authentication Patterns',
    titleAr: 'Authentication Patterns',
    topic: 'Authentication',
    estimatedMinutes: 90,
    objectiveEn: 'Understand local auth, password hashing, and the difference between auth vs authorization.',
    objectiveAr: 'Understand local auth, password hashing, and the difference between auth vs authorization.',
    lessonEn:
      'Authentication verifies who someone is; authorization decides what they can do. Local auth uses a username and password stored in the database, typically with bcrypt or argon2 hashing. Never store plain-text passwords. The auth flow: sign-up (hash + store), sign-in (compare hash), sign-out (invalidate session).',
    lessonAr:
      'Authentication verifies who someone is; authorization decides what they can do. Local auth uses a username and password stored in the database, typically with bcrypt or argon2 hashing. Never store plain-text passwords. The auth flow: sign-up (hash + store), sign-in (compare hash), sign-out (invalidate session).',
    tasks: [
      {
        en: 'Research and write a short note on bcrypt vs argon2',
        ar: 'Research and write a short note on bcrypt vs argon2'
      },
      {
        en: 'Explain the difference between authentication and authorization in your own words',
        ar: 'Explain the difference between authentication and authorization in your own words'
      },
      {
        en: 'List the steps of the sign-up flow with hashing',
        ar: 'List the steps of the sign-up flow with hashing'
      }
    ],
    exerciseEn: 'Write a 3-step sign-up flow description with hashing.',
    exerciseAr: 'Write a 3-step sign-up flow description with hashing.',
    deliverableEn: 'A written description of the auth flow with hashing steps.',
    deliverableAr: 'A written description of the auth flow with hashing steps',
    resources: [
      { title: 'OWASP Password Storage', url: 'https://owasp.org/www-community/Password_Storage', kind: 'official' },
      { title: 'Bcrypt npm package', url: 'https://www.npmjs.com/package/bcrypt', kind: 'reference' }
    ],
    challengeEn: 'Describe how you would securely implement password reset.',
    challengeAr: 'Describe how you would securely implement password reset.',
    prerequisites: [125],
    criteriaEn: ['Can distinguish auth from authorization', 'Can list auth flow steps'],
    criteriaAr: ['Can distinguish auth from authorization', 'Can list auth flow steps']
  },
  {
    dayNumber: 127,
    phaseSlug: 'database-auth',
    kind: 'project',
    titleEn: 'Auth Schema and Seed',
    titleAr: 'Auth Schema and Seed',
    topic: 'Auth Project',
    estimatedMinutes: 120,
    objectiveEn: 'Create the authentication tables (users, sessions) with a seed script and hash passwords with bcrypt.',
    objectiveAr: 'Create the authentication tables (users, sessions) with a seed script and hash passwords with bcrypt.',
    lessonEn:
      'The auth schema includes a users table (id, name, email, password_hash, created_at) and a sessions table (id, user_id, token, expires_at). Use bcrypt to hash passwords in the seed script. This schema will be used by the Supabase Auth integration later.',
    lessonAr:
      'The auth schema includes a users table (id, name, email, password_hash, created_at) and a sessions table (id, user_id, token, expires_at). Use bcrypt to hash passwords in the seed script. This schema will be used by the Supabase Auth integration later.',
    tasks: [
      {
        en: 'Create a sessions table with id, user_id, token, and expires_at',
        ar: 'Create a sessions table with id, user_id, token, and expires_at'
      },
      {
        en: 'Write a seed script that hashes passwords with bcrypt and inserts 3 users',
        ar: 'Write a seed script that hashes passwords with bcrypt and inserts 3 users'
      },
      {
        en: 'Verify that passwords are stored as hashes, not plain text',
        ar: 'Verify that passwords are stored as hashes, not plain text'
      }
    ],
    exerciseEn: 'Create the sessions table and run the seed script with bcrypt hashing.',
    exerciseAr: 'Create the sessions table and run the seed script with bcrypt hashing.',
    deliverableEn: 'Auth schema with users and sessions tables, seeded with hashed passwords.',
    deliverableAr: 'Auth schema with users and sessions tables, seeded with hashed passwords',
    resources: [
      { title: 'Bcrypt npm package', url: 'https://www.npmjs.com/package/bcrypt', kind: 'reference' },
      { title: 'Supabase Auth overview', url: 'https://supabase.com/docs/guides/auth', kind: 'official' }
    ],
    challengeEn: 'Add a refresh token column to the sessions table.',
    challengeAr: 'Add a refresh token column to the sessions table.',
    prerequisites: [126],
    criteriaEn: ['Users table has password_hash column', 'Sessions table created', 'Seed script uses bcrypt'],
    criteriaAr: ['Users table has password_hash column', 'Sessions table created', 'Seed script uses bcrypt']
  },
  {
    dayNumber: 128,
    phaseSlug: 'database-auth',
    kind: 'lesson',
    titleEn: 'NoSQL Fundamentals',
    titleAr: 'NoSQL Fundamentals',
    topic: 'NoSQL',
    estimatedMinutes: 90,
    objectiveEn: 'Understand document-based databases, differenes between JSON and BSON, and basic CRUD operations.',
    objectiveAr: 'Understand document-based databases, differenes between JSON and BSON, and basic CRUD operations.',
    lessonEn:
      'NoSQL databases store data in flexible schemas. MongoDB uses BSON (binary JSON) format. CRUD operations are similar to SQL but without fixed schemas. Understand the trade-offs between consistency and flexibility.',
    lessonAr:
      'قواعد البيانات NoSQL تخزن البيانات في مخططات مرنة. MongoDB تستخدم BSON (JSON binary). العمليات CRUD مشابهة لـ SQL ولكن بدون مخططات ثابتة. فهمtrade-offs between consistency and flexibility.',
    tasks: [
      {
        en: 'Connect to a MongoDB instance and create a database',
        ar: 'Connect to a MongoDB instance and create a database'
      },
      {
        en: 'Insert a document into a collection',
        ar: 'Insert a document into a collection'
      },
      {
        en: 'Find documents matching a query filter',
        ar: 'Find documents matching a query filter'
      },
      {
        en: 'Update a document by ID',
        ar: 'Update a document by ID'
      }
    ],
    exerciseEn: 'Create a MongoDB collection and perform basic CRUD operations.',
    exerciseAr: 'Create a MongoDB collection and perform basic CRUD operations.',
    deliverableEn: 'A MongoDB collection with insert, find, update, and delete operations.',
    deliverableAr: 'Collection MongoDB مع عمليات insert, find, update, and delete.',
    resources: [
      { title: 'MDN: NoSQL introduction', url: MDN + '/Learn/NoSQL', kind: 'official' },
      { title: 'MongoDB University', url: 'https://university.mongodb.com/', kind: 'reference' }
    ],
    challengeEn: 'Write a query that aggregates data from two collections using $lookup',
    challengeAr: 'Write a query that aggregates data from two collections using $lookup',
    prerequisites: [127],
    criteriaEn: ['Can connect to MongoDB', 'Can CRUD a document', 'Can use $lookup'],
    criteriaAr: ['يمكن الاتصال بـ MongoDB', 'يمكن CRUD وثيقة', 'يمكن استخدام $lookup']
  },
  {
    dayNumber: 129,
    phaseSlug: 'database-auth',
    kind: 'lesson',
    titleEn: 'Database Migrations',
    titleAr: 'Database Migrations',
    topic: 'Migrations',
    estimatedMinutes: 90,
    objectiveEn: 'Write migration files, manage schema changes, and roll back changes safely.',
    objectiveAr: 'Write migration files, manage schema changes, and roll back changes safely.',
    lessonEn:
      'Migrations version your database schema. Use up and down functions to apply and revert changes. Never apply migrations directly to production without a backup. Test migrations in a development environment first.',
    lessonAr:
      ' migrations تنسخschema قاعدة البيانات. استخدم up and down functions لتطبيق وإلغاء التغييرات. Never apply migrations directly to production without a backup. Test migrations in a development environment first.',
    tasks: [
      {
        en: 'Write a migration that adds a column to the users table',
        ar: 'Write a migration that adds a column to the users table'
      },
      {
        en: 'Write a down migration that removes the column',
        ar: 'Write a down migration that removes the column'
      },
      {
        en: 'Run a migration using knex or prisma',
        ar: 'Run a migration using knex or prisma'
      },
      {
        en: 'Roll back the last migration and verify the schema reverts',
        ar: 'Roll back the last migration and verify the schema reverts'
      }
    ],
    exerciseEn: 'Write a migration file and run it against a test database.',
    exerciseAr: 'Write a migration file and run it against a test database.',
    deliverableEn: 'A migration file that adds and removes a column.',
    deliverableAr: 'Migration file that adds and removes a column.',
    resources: [
      { title: 'Knex migrations', url: 'https://knexjs.org/migrations.html', kind: 'reference' },
      { title: 'Prisma migrations', url: 'https://pris.ly/d/migrations', kind: 'reference' }
    ],
    challengeEn: 'Write a migration that adds a foreign key with a cascade on delete',
    challengeAr: 'Write a migration that adds a foreign key with a cascade on delete',
    prerequisites: [128],
    criteriaEn: ['Migration up adds column', 'Migration down removes column', 'Run and rollback work'],
    criteriaAr: ['Migration up adds column', 'Migration down removes column', 'Run and rollback work']
  },
  {
    dayNumber: 130,
    phaseSlug: 'database-auth',
    kind: 'practice',
    titleEn: 'Redis Caching',
    titleAr: 'Redis Caching',
    topic: 'Caching',
    estimatedMinutes: 100,
    objectiveEn: 'Install Redis, set key-value pairs, and use it as an application cache.',
    objectiveAr: 'Install Redis, set key-value pairs, and use it as an application cache.',
    lessonEn:
      'Redis is an in-memory data structure store used as a cache and message broker. Set key-value pairs with SET, and retrieve with GET. Use TTL for expiration. Publish/subscribe enables event broadcasting.',
    lessonAr:
      'Redis store بيانات في الذاكرة cache وتpub-sub message broker. Set key-value pairs مع SET, and retrieve مع GET. Use TTL for expiration. Publish/subscribe enables event broadcasting.',
    tasks: [
      {
        en: 'Install Redis and set a key-value pair with a TTL of 60 seconds',
        ar: 'Install Redis and set a key-value pair with a TTL of 60 seconds'
      },
      {
        en: 'Retrieve a value by key and verify the TTL',
        ar: 'Retrieve a value by key and verify the TTL'
      },
      {
        en: 'Use Redis as a rate limiter counter',
        ar: 'Use Redis as a rate limiter counter'
      },
      {
        en: 'Set up a Pub/Sub channel for event broadcasting',
        ar: 'Set up a Pub/Sub channel for event broadcasting'
      }
    ],
    exerciseEn: 'Set up Redis and demonstrate SET, GET, and TTL operations.',
exerciseAr: 'Set up Redis and demonstrate SET, GET, and TTL operations.',
    deliverableEn: 'Redis running with key-value operations and TTL.',
    deliverableAr: 'Redis running with key-value operations and TTL.',
    resources: [
      { title: 'Redis docs', url: 'https://redis.io/docs/', kind: 'official' },
      { title: 'Node Redis client', url: 'https://www.npmjs.com/package/redis', kind: 'reference' }
    ],
    challengeEn: 'Set up a Pub/Sub system that broadcasts a message to all subscribers',
    challengeAr: 'Set up a Pub/Sub system that broadcasts a message to all subscribers',
    prerequisites: [129],
    criteriaEn: ['Redis installed', 'SET/GET/TTL working', 'Pub/Sub broadcasting'],
    criteriaAr: ['Redis已安装', 'SET/GET/TTL working', 'Pub/Sub broadcasting']
  },
  {
    dayNumber: 131,
    phaseSlug: 'database-auth',
    kind: 'project',
    titleEn: 'Full-Text Search',
    titleAr: 'Full-Text Search',
    topic: 'Search',
    estimatedMinutes: 120,
    objectiveEn: 'Implement full-text search using PostgreSQL tsvector and pg_trgm.',
    objectiveAr: 'Implement full-text search using PostgreSQL tsvector and pg_trgm.',
    lessonEn:
      'PostgreSQL supports full-text search with tsvector and trigram extensions. Use to_tsquery for query parsing and @@ operator for ranking. pg_trgm provides similarity-based matching with % operator.',
    lessonAr:
      'PostgreSQL يدعم البحث النصي الكامل بـ tsvector و pg_trgm. Use to_tsquery for query parsing and @@ operator for ranking. pg_trgm provides similarity-based matching with % operator.',
    tasks: [
      {
        en: 'Enable the pg_trgm extension and create a trigram index',
        ar: 'Enable the pg_trgm extension and create a trigram index'
      },
      {
        en: 'Write a full-text search query using tsvector and to_tsquery',
        ar: 'Write a full-text search query using tsvector and to_tsquery'
      },
      {
        en: 'Query with similarity using % operator and pg_trgm',
        ar: 'Query with similarity using % operator and pg_trgm'
      },
      {
        en: 'Combine tf-idf ranking with similarity ranking',
        ar: 'Combine tf-idf ranking with similarity ranking'
      }
    ],
    exerciseEn: 'Set up full-text search on a articles table and query for similar titles.',
    exerciseAr: 'Set up full-text search on a articles table and query for similar titles.',
    deliverableEn: 'A PostgreSQL table with full-text search capability.',
    deliverableAr: 'PostgreSQL table مع capability البحث النصي الكامل.',
    resources: [
      { title: 'PostgreSQL tsvector', url: 'https://www.postgresql.org/docs/current/textsearch.html', kind: 'official' },
      { title: 'pg_trgm documentation', url: 'https://www.postgresql.org/docs/current/pgtrgm.html', kind: 'reference' }
    ],
    challengeEn: 'Rank results by combining tsvector ranking and trigram similarity',
    challengeAr: 'Rank results by combining tsvector ranking and trigram similarity',
    prerequisites: [130],
    criteriaEn: ['pg_trgm extension enabled', 'Trigram index created', 'Full-text query works'],
    criteriaAr: ['pg_trgm extension enabled', 'Trigram index created', 'Full-text query works']
  },
  {
    dayNumber: 132,
    phaseSlug: 'database-auth',
    kind: 'review',
    titleEn: 'Database Review and Consolidation',
    titleAr: 'Database Review and Consolidation',
    topic: 'Review',
    estimatedMinutes: 70,
    objectiveEn: 'Re-read your database work and fix: missing indexes, unoptimized queries, missing migration tests.',
    objectiveAr: 'Re-read your database work and fix: missing indexes, unoptimized queries, missing migration tests.',
    lessonEn:
      'A review day. Re-read the databases you built, look for: missing indexes on foreign keys, queries without WHERE clause optimization, migration scripts without down functions. Fix each issue and run your SQL scripts end-to-end.',
    lessonAr:
      'يوم مراجعة. revisit the databases you built, look for: missing indexes on foreign keys, queries without WHERE clause optimization, migration scripts without down functions. Fix each issue and run your SQL scripts end-to-end.',
    tasks: [
      {
        en: 'List the ten biggest mistakes in your database work and fix each',
        ar: 'List the ten biggest mistakes in your database work and fix each'
      },
      {
        en: 'Add missing indexes to foreign key columns',
        ar: 'Add missing indexes to foreign key columns'
      },
      {
        en: 'Optimize a slow query by adding a WHERE clause or index',
        ar: 'Optimize a slow query by adding a WHERE clause or index'
      },
      {
        en: 'Ensure every migration has a down function',
        ar: 'Ensure every migration has a down function'
      }
    ],
    exerciseEn: 'Fix the identified issues in your database schema and migrations.',
    exerciseAr: 'Fix the identified issues in your database schema and migrations.',
    deliverableEn: 'A cleaned-up database schema with indexes and complete migrations.',
    deliverableAr: 'Cleaned-up database schema with indexes and complete migrations.',
    resources: [
      { title: 'PostgreSQL Indexes', url: 'https://www.postgresql.org/docs/current/indexes.html', kind: 'official' }
    ],
    challengeEn: 'Add a partial index that only indexes active records',
    challengeAr: 'Add a partial index that only indexes active records',
    prerequisites: [131],
    criteriaEn: ['Indexes on foreign keys', 'Optimized query', 'All migrations have down functions'],
    criteriaAr: ['Indexes on foreign keys', 'Optimized query', 'All migrations have down functions']
  },
  {
    dayNumber: 133,
    phaseSlug: 'database-auth',
    kind: 'lesson',
    titleEn: 'Database Security',
    titleAr: 'Database Security',
    topic: 'Security',
    estimatedMinutes: 90,
    objectiveEn: 'Implement row-level security, parameterized queries, and audit logging.',
    objectiveAr: 'Implement row-level security, parameterized queries, and audit logging.',
    lessonEn:
      'Row-Level Security (RLS) restricts access to specific rows based on user roles. Always use parameterized queries to prevent injection. Audit logging tracks who accessed what data and when. Never store plain-text passwords or secrets.',
    lessonAr:
      'Row-Level Security (RLS) restricts access to specific rows based on user roles. Always use parameterized queries to prevent injection. Audit logging tracks who accessed what data and when. Never store plain-text passwords or secrets.',
    tasks: [
      {
        en: 'Enable RLS on a users table and create a policy for SELECT access',
        ar: 'Enable RLS on a users table and create a policy for SELECT access'
      },
      {
        en: 'Write a parameterized INSERT query for sensitive data',
        ar: 'Write a parameterized INSERT query for sensitive data'
      },
      {
        en: 'Set up audit logging for SELECT, INSERT, UPDATE, DELETE operations',
        ar: 'Set up audit logging for SELECT, INSERT, UPDATE, DELETE operations'
      },
      {
        en: 'Never log passwords or secret keys in any logger',
        ar: 'Never log passwords or secret keys in any logger'
      }
    ],
    exerciseEn: 'Enable RLS and write a parameterized query with audit logging.',
    exerciseAr: 'Enable RLS and write a parameterized query with audit logging.',
    deliverableEn: 'A users table with RLS enabled and audit logging configured.',
    deliverableAr: 'users table with RLS enabled and audit logging configured.',
    resources: [
      { title: 'PostgreSQL RLS', url: 'https://www.postgresql.org/docs/current/ddl-row-security.html', kind: 'official' },
      { title: 'OWASP Injection Prevention', url: 'https://owasp.org/www-project-cheat-sheets/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html', kind: 'official' }
    ],
    challengeEn: 'Create an RLS policy that allows users to only their own row',
    challengeAr: 'Create an RLS policy that allows users to only their own row',
    prerequisites: [132],
    criteriaEn: ['RLS enabled on users table', 'Parameterized query works', 'Audit logging active'],
    criteriaAr: ['RLS enabled on users table', 'Parameterized query works', 'Audit logging active']
  },
  {
    dayNumber: 134,
    phaseSlug: 'database-auth',
    kind: 'lesson',
    titleEn: 'API Rate Limiting Patterns',
    titleAr: 'Patterns Rate Limiting API',
    topic: 'Rate Limiting',
    estimatedMinutes: 90,
    objectiveEn: 'Implement per-endpoint rate limits and distinguish between public and authenticated endpoints.',
    objectiveAr: 'Implement per-endpoint rate limits and distinguish between public and authenticated endpoints.',
    lessonEn:
      'Not all endpoints should have the same rate limit. Public endpoints like search may have higher limits, while auth endpoints should be stricter. Use middleware to apply different limits per path, and store counters in Redis for distributed systems.',
    lessonAr:
      'لا يجب أن يكون الحد نفسه لجميع endpoints. endpoints public comme search May have higher limits, while auth endpoints should be stricter. Use middleware to apply different limits per path, and store counters in Redis for distributed systems.',
    tasks: [
      {
        en: 'Configure different rate limits for public vs authenticated endpoints',
        ar: 'Configure different rate limits for public vs authenticated endpoints'
      },
      {
        en: 'Use Redis to store rate limit counters in a distributed system',
        ar: 'Use Redis to store rate limit counters in a distributed system'
      },
      {
        en: 'Return a 429 with Retry-After header when the limit is exceeded',
        ar: 'Return a 429 with Retry-After header when the limit is exceeded'
      },
      {
        en: 'Test that auth endpoint has a lower limit than public endpoints',
        ar: 'Test that auth endpoint has a lower limit than public endpoints'
      }
    ],
    exerciseEn: 'Set up per-endpoint rate limiting with Redis backing.',
    exerciseAr: 'Set up per-endpoint rate limiting with Redis backing.',
deliverableEn: 'Express middleware with per-endpoint rate limits and Redis counters.',
    deliverableAr: 'Express middleware with per-endpoint rate limits and Redis counters.',
    resources: [
      { title: 'npmjs.com/express-rate-limit', url: 'https://www.npmjs.com/package/express-rate-limit', kind: 'reference' },
      { title: 'Redis docs', url: 'https://redis.io/docs/', kind: 'official' }
    ],
    challengeEn: 'Configure a burst-allowed limit that resets after inactivity',
    challengeAr: 'Configure a burst-allowed limit that resets after inactivity',
    prerequisites: [133],
    criteriaEn: ['Different limits per endpoint', 'Redis-backed counters', '429 with Retry-After'],
    criteriaAr: ['Different limits per endpoint', 'Redis-backed counters', '429 with Retry-After']
  },
  {
    dayNumber: 135,
    phaseSlug: 'database-auth',
    kind: 'project',
    titleEn: 'Database Observability',
    titleAr: 'Database Observability',
    topic: 'Observability',
    estimatedMinutes: 120,
    objectiveEn: 'Set up query monitoring, slow query logging, and connection pool metrics.',
    objectiveAr: 'Set up query monitoring, slow query logging, and connection pool metrics.',
    lessonEn:
      'Monitoring your database is critical for production. Log slow queries exceeding 100ms, track connection pool usage, and set up alerts for abnormal patterns. Use pg_stat_activity to view active queries and wait types.',
    lessonAr:
      'مonitoring your database is critical for production. Log slow queries exceeding 100ms, track connection pool usage, and set up alerts for abnormal patterns. Use pg_stat_activity to view active queries and wait types.',
    tasks: [
      {
        en: 'Enable slow query logging for queries exceeding 100ms',
        ar: 'Enable slow query logging for queries exceeding 100ms'
      },
      {
        en: 'Track connection pool usage and active connections',
        ar: 'Track connection pool usage and active connections'
      },
      {
        en: 'Query pg_stat_activity to find long-running queries',
        ar: 'Query pg_stat_activity to find long-running queries'
      },
      {
        en: 'Set up an alert for connections exceeding 80% of the pool',
        ar: 'Set up an alert for connections exceeding 80% of the pool'
      }
    ],
    exerciseEn: 'Configure slow query logging and query pg_stat_activity for active connections.',
    exerciseAr: 'Configure slow query logging and query pg_stat_activity for active connections.',
deliverableEn: 'Database monitoring configuration with slow query logs and connection metrics.',
    deliverableAr: 'Database monitoring configuration with slow query logs and connection metrics.',
    resources: [
      { title: 'PostgreSQL Monitoring', url: 'https://www.postgresql.org/docs/current/monitoring.html', kind: 'official' },
      { title: 'pg_stat_activity docs', url: 'https://www.postgresql.org/docs/current/monitoring-stats.html', kind: 'reference' }
    ],
    challengeEn: 'Set up a alert when the connection pool reaches 90% usage',
    challengeAr: 'Set up a alert when the connection pool reaches 90% usage',
    prerequisites: [134],
    criteriaEn: ['Slow query logging enabled', 'pg_stat_activity queryable', 'Alert at 80%'],
    criteriaAr: ['Slow query logging enabled', 'pg_stat_activity queryable', 'Alert at 80%']
  },
  {
    dayNumber: 136,
    phaseSlug: 'database-auth',
    kind: 'lesson',
    titleEn: 'Database Backups and Recovery',
    titleAr: 'Database Backups and Recovery',
    topic: 'Backup',
    estimatedMinutes: 90,
    objectiveEn: 'Schedule automated backups, test point-in-time recovery, and verify backup integrity.',
    objectiveAr: 'Schedule automated backups, test point-in-time recovery, and verify backup integrity.',
    lessonEn:
      'Automated backups protect against data loss. Use pg_dump for logical backups and continuous archiving for point-in-time recovery. Restore a backup to a different point in time and verify data integrity.',
    lessonAr:
      'Automated backups protect against data loss. Use pg_dump for logical backups and continuous archiving for point-in-time recovery. Restore a backup to a different point in time and verify data integrity.',
    tasks: [
      {
        en: 'Schedule a daily pg_dump backup and store it securely',
        ar: 'Schedule a daily pg_dump backup and store it securely'
      },
      {
        en: 'Test point-in-time recovery to a previous timestamp',
        ar: 'Test point-in-time recovery to a previous timestamp'
      },
      {
        en: 'Verify backup integrity by restoring to a test environment',
        ar: 'Verify backup integrity by restoring to a test environment'
      },
      {
        en: 'Document the backup and recovery procedure',
        ar: 'Document the backup and recovery procedure'
      }
    ],
    exerciseEn: 'Schedule a backup and test restoration to a previous point in time.',
    exerciseAr: 'Schedule a backup and test restoration to a previous point in time.',
deliverableEn: 'A tested backup and recovery procedure.',
    deliverableAr: 'Tested backup and recovery procedure.',
    resources: [
      { title: 'PostgreSQL Backup', url: 'https://www.postgresql.org/docs/current/backup.html', kind: 'official' },
      { title: 'pg_dump documentation', url: 'https://www.postgresql.org/docs/current/ref-pgdump.html', kind: 'reference' }
    ],
    challengeEn: 'Restore a backup to a different server and verify the data matches',
    challengeAr: 'Restore a backup to a different server and verify the data matches',
    prerequisites: [135],
    criteriaEn: ['Backup scheduled', 'Point-in-time recovery tested', 'Data integrity verified'],
    criteriaAr: ['Backup scheduled', 'Point-in-time recovery tested', 'Data integrity verified']
  },
  {
    dayNumber: 137,
    phaseSlug: 'database-auth',
    kind: 'lesson',
    titleEn: 'Connection Pooling',
    titleAr: 'Connection Pooling',
    topic: 'Performance',
    estimatedMinutes: 90,
    objectiveEn: 'Configure pgBouncer or PgPool for connection pooling and load balancing.',
    objectiveAr: 'Configure pgBouncer or PgPool for connection pooling and load balancing.',
    lessonEn:
      'Connection pooling reuses database connections to reduce overhead. pgBouncer is lightweight and widely used. Configure transaction-level pooling for simple queries and session-level for transactions. Load balance across multiple database servers.',
    lessonAr:
      'Connection pooling reuses database connections to reduce overhead. pgBouncer is lightweight and widely used. Configure transaction-level pooling for simple queries and session-level for transactions. Load balance across multiple database servers.',
    tasks: [
      {
        en: 'Install pgBouncer and configure transaction pooling',
        ar: 'Install pgBouncer and configure transaction pooling'
      },
      {
        en: 'Configure your application to connect to pgBouncer instead of directly to PostgreSQL',
        ar: 'Configure your application to connect to pgBouncer instead of directly to PostgreSQL'
      },
      {
        en: 'Test that connections are reused across requests',
        ar: 'Test that connections are reused across requests'
      },
      {
        en: 'Switch to session pooling for transactions that modify data',
        ar: 'Switch to session pooling for transactions that modify data'
      }
    ],
    exerciseEn: 'Set up pgBouncer and verify connection reuse.',
    exerciseAr: 'Set up pgBouncer and verify connection reuse.',
deliverableEn: 'pgBouncer configured with connection pooling and verified reuse.',
    deliverableAr: 'pgBouncer configured with connection pooling and verified reuse.',
    resources: [
      { title: 'pgBouncer docs', url: 'https://pgbouncer.org/config.html', kind: 'reference' },
      { title: 'PgPool documentation', url: 'https://www.pgpool.net/docs/', kind: 'reference' }
    ],
    challengeEn: 'Configure load balancing across two pgBouncer instances',
    challengeAr: 'Configure load balancing across two pgBouncer instances',
    prerequisites: [136],
    criteriaEn: ['pgBouncer installed', 'Connections reused', 'Switch to session pooling'],
    criteriaAr: ['pgBouncer installed', 'Connections reused', 'Switch to session pooling']
  },
  {
    dayNumber: 138,
    phaseSlug: 'database-auth',
    kind: 'project',
    titleEn: 'Database Migration Tool',
    titleAr: 'Database Migration Tool',
    topic: 'Migrations',
    estimatedMinutes: 120,
    objectiveEn: 'Build a migration tool with up, down, and dry-run modes, and test it against a test database.',
    objectiveAr: 'Build a migration tool with up, down, and dry-run modes, and test it against a test database.',
    lessonEn:
      'A custom migration tool helps manage schema changes across environments. Implement up (apply), down (revert), and dry-run (preview) modes. Test migrations against a test database before applying to production.',
    lessonAr:
      'A custom migration tool helps manage schema changes across environments. Implement up (apply), down (revert), and dry-run (preview) modes. Test migrations against a test database before applying to production.',
    tasks: [
      {
        en: 'Build a CLI tool that reads migration files and applies them',
        ar: 'Build a CLI tool that reads migration files and applies them'
      },
      {
        en: 'Implement a down function to revert each migration',
        ar: 'Implement a down function to revert each migration'
      },
      {
        en: 'Add a dry-run flag to preview changes without applying',
        ar: 'Add a dry-run flag to preview changes without applying'
      },
      {
        en: 'Run the tool against a test database and verify the schema',
        ar: 'Run the tool against a test database and verify the schema'
      }
    ],
    exerciseEn: 'Build and test a migration CLI tool with up, down, and dry-run modes.',
    exerciseAr: 'Build and test a migration CLI tool with up, down, and dry-run modes.',
deliverableEn: 'A working migration CLI tool with up/down/dry-run.',
    deliverableAr: 'A working migration CLI tool with up/down/dry-run.',
    resources: [
      { title: 'Inquirer.js', url: 'https://www.npmjs.com/package/inquirer', kind: 'reference' },
      { title: 'Path library', url: 'https://nodejs.org/docs/latest/api/path.html', kind: 'reference' }
    ],
    challengeEn: 'Add a seed step that runs after each migration up',
    challengeAr: 'Add a seed step that runs after each migration up',
    prerequisites: [137],
    criteriaEn: ['CLI tool with up/down/dry-run', 'Migrations applied to test DB', 'Seed runs after up'],
    criteriaAr: ['CLI tool with up/down/dry-run', 'Migrations applied to test DB', 'Seed runs after up']
  },
  {
    dayNumber: 139,
    phaseSlug: 'database-auth',
    kind: 'review',
    titleEn: 'Database Review and Consolidation',
    titleAr: 'Database Review and Consolidation',
    topic: 'Review',
    estimatedMinutes: 70,
    objectiveEn: 'Re-read your database work and fix: missing indexes, unoptimized queries, missing backup tests.',
    objectiveAr: 'Re-read your database work and fix: missing indexes, unoptimized queries, missing backup tests.',
    lessonEn:
      'A review day. Re-read the databases you built, look for: missing indexes on foreign keys, queries without WHERE clause optimization, migration scripts without backup verification. Fix each issue and run your SQL scripts end-to-end.',
    lessonAr:
      'يوم مراجعة. revisit the databases you built, look for: missing indexes on foreign keys, queries without WHERE clause optimization, migration scripts without backup verification. Fix each issue and run your SQL scripts end-to-end.',
    tasks: [
      {
        en: 'List the fifteen biggest mistakes in your database work and fix each',
        ar: 'List the fifteen biggest mistakes in your database work and fix each'
      },
      {
        en: 'Add missing indexes to foreign key columns',
        ar: 'Add missing indexes to foreign key columns'
      },
      {
        en: 'Optimize a slow query by adding a WHERE clause or index',
        ar: 'Optimize a slow query by adding a WHERE clause or index'
      },
      {
        en: 'Verify a backup can be restored successfully',
        ar: 'Verify a backup can be restored successfully'
      }
    ],
    exerciseEn: 'Fix the identified issues in your database schema and migrations.',
    exerciseAr: 'Fix the identified issues in your database schema and migrations.',
deliverableEn: 'A cleaned-up database schema with indexes and verified backups.',
    deliverableAr: 'Cleaned-up database schema with indexes and verified backups.',
    resources: [
      { title: 'PostgreSQL Indexes', url: 'https://www.postgresql.org/docs/current/indexes.html', kind: 'official' }
    ],
    challengeEn: 'Add a partial index that only indexes active records',
    challengeAr: 'Add a partial index that only indexes active records',
    prerequisites: [138],
    criteriaEn: ['Indexes on foreign keys', 'Optimized query', 'Backup verified'],
    criteriaAr: ['Indexes on foreign keys', 'Optimized query', 'Backup verified']
  },
  {
    dayNumber: 140,
    phaseSlug: 'database-auth',
    kind: 'lesson',
    titleEn: 'Geospatial Data',
    titleAr: 'Geospatial Data',
    topic: 'Geography',
    estimatedMinutes: 90,
    objectiveEn: 'Store and query geospatial data using PostGIS, and calculate distances between points.',
    objectiveAr: 'Store and query geospatial data using PostGIS, and calculate distances between points.',
    lessonEn:
      'PostGIS adds geospatial support to PostgreSQL. Use POINT, LineString, and Polygon types. Calculate distances with ST_Distance, and use index with GIST. Find points within a bounding box with ST_DWithin.',
    lessonAr:
      'PostGIS adds geospatial support to PostgreSQL. Use POINT, LineString, and Polygon types. Calculate distances with ST_Distance, and use index with GIST. Find points within a bounding box with ST_DWithin.',
    tasks: [
      {
        en: 'Enable PostGIS and create a table with a POINT column',
        ar: 'Enable PostGIS and create a table with a POINT column'
      },
      {
        en: 'Insert a few coordinates into the table',
        ar: 'Insert a few coordinates into the table'
      },
      {
        en: 'Query points within a bounding box',
        ar: 'Query points within a bounding box'
      },
      {
        en: 'Calculate the distance between two points in kilometers',
        ar: 'Calculate the distance between two points in kilometers'
      }
    ],
    exerciseEn: 'Set up a PostGIS table and query for points near a given location.',
    exerciseAr: 'Set up a PostGIS table and query for points near a given location.',
deliverableEn: 'A PostGIS table with points and distance queries.',
    deliverableAr: 'A PostGIS table with points and distance queries.',
    resources: [
      { title: 'PostGIS docs', url: 'https://postgis.net/docs/', kind: 'official' },
      { title: 'MDN: Geolocation', url: MDN + '/en-US/docs/Glossary/Geolocation', kind: 'reference' }
    ],
    challengeEn: 'Find all points within 5km of a given location',
    challengeAr: 'Find all points within 5km of a given location',
    prerequisites: [139],
    criteriaEn: ['PostGIS enabled', 'POINT column created', 'Bounding box query works', 'Distance calculated'],
    criteriaAr: ['PostGIS enabled', 'POINT column created', 'Bounding box query works', 'Distance calculated']
  },
  {
    dayNumber: 141,
    phaseSlug: 'database-auth',
    kind: 'lesson',
    titleEn: 'Database Sharding',
    titleAr: 'Database Sharding',
    topic: 'Scaling',
    estimatedMinutes: 90,
    objectiveEn: 'Understand sharding strategies, key-based partitioning, and the trade-offs of distributed databases.',
    objectiveAr: 'Understand sharding strategies, key-based partitioning, and the trade-offs of distributed databases.',
    lessonEn:
      'Sharding splits data across multiple databases based on a shard key. Choose a shard key that distributes load evenly. Trade-offs include increased complexity, cross-shard query limitations, and eventual consistency.',
    lessonAr:
      'Sharding splits data across multiple databases based on a shard key. Choose a shard key that distributes load evenly. Trade-offs include increased complexity, cross-shard query limitations, and eventual consistency.',
    tasks: [
      {
        en: 'Design a sharding strategy for a growing user table based on user ID range',
        ar: 'Design a sharding strategy for a growing user table based on user ID range'
      },
      {
        en: 'Write a query that routes to the correct shard based on a user ID',
        ar: 'Write a query that routes to the correct shard based on a user ID'
      },
      {
        en: 'Test a cross-shard query and note the limitations',
        ar: 'Test a cross-shard query and note the limitations'
      },
      {
        en: 'Document the sharding strategy and add a new shard',
        ar: 'Document the sharding strategy and add a new shard'
      }
    ],
    exerciseEn: 'Design and document a sharding strategy for a sample application.',
    exerciseAr: 'Design and document a sharding strategy for a sample application.',
deliverableEn: 'A sharding strategy document and a routing function.',
    deliverableAr: 'Strategy document and a routing function.',
    resources: [
      { title: 'Database Sharding', url: 'https://highscalability.com/blog/2011/1/10/database-sharding-strategies.html', kind: 'reference' },
      { title: 'MongoDB Sharding', url: 'https://www.mongodb.com/docs/sharding/', kind: 'reference' }
    ],
    challengeEn: 'Implement a function that adds a new shard and rebalances existing data',
    challengeAr: 'Implement a function that adds a new shard and rebalances existing data',
    prerequisites: [140],
    criteriaEn: ['Shard key design documented', 'Routing function works', 'Cross-shard limitations noted'],
    criteriaAr: ['Shard key design documented', 'Routing function works', 'Cross-shard limitations noted']
  },
  {
    dayNumber: 142,
    phaseSlug: 'database-auth',
    kind: 'project',
    titleEn: 'Database Hardening',
    titleAr: 'Database Hardening',
    topic: 'Security',
    estimatedMinutes: 120,
    objectiveEn: 'Harden a PostgreSQL server: disable remote connections, set password policy, and enable audit logging.',
    objectiveAr: 'Harden a PostgreSQL server: disable remote connections, set password policy, and enable audit logging.',
    lessonEn:
      'Production databases require hardening. Disable remote connections if not needed, enforce password complexity, and enable audit logging. Remove test accounts and restrict privileges to the minimum required.',
    lessonAr:
      'Production databases require hardening. Disable remote connections if not needed, enforce password complexity, and enable audit logging. Remove test accounts and restrict privileges to the minimum required.',
    tasks: [
      {
        en: 'Disable remote connections and use Unix socket only',
        ar: 'Disable remote connections and use Unix socket only'
      },
      {
        en: 'Set a password policy with minimum length and complexity',
        ar: 'Set a password policy with minimum length and complexity'
      },
      {
        en: 'Remove test accounts and restrict privileges',
        ar: 'Remove test accounts and restrict privileges'
      },
      {
        en: 'Enable audit logging and review the last 30 days of logs',
        ar: 'Enable audit logging and review the last 30 days of logs'
      }
    ],
    exerciseEn: 'Harden a PostgreSQL server following security best practices.',
    exerciseAr: 'Harden a PostgreSQL server following security best practices.',
    deliverableEn: 'A hardened PostgreSQL server configuration.',
deliverableAr: 'Hardened PostgreSQL server configuration.',
    resources: [
      { title: 'PostgreSQL Security', url: 'https://www.postgresql.org/docs/current/security.html', kind: 'official' },
      { title: 'CIS PostgreSQL Benchmark', url: 'https://www.cisecurity.org/benchmark/postgresql/', kind: 'reference' }
    ],
    challengeEn: 'Set up automatic audit log review and alert on suspicious activity',
    challengeAr: 'Set up automatic audit log review and alert on suspicious activity',
    prerequisites: [141],
    criteriaEn: ['Remote connections disabled', 'Password policy set', 'Test accounts removed', 'Audit logging enabled'],
    criteriaAr: ['Remote connections disabled', 'Password policy set', 'Test accounts removed', 'Audit logging enabled']
  },
  {
    dayNumber: 143,
    phaseSlug: 'database-auth',
    kind: 'review',
    titleEn: 'Database Review and Consolidation',
    titleAr: 'Database Review and Consolidation',
    topic: 'Review',
    estimatedMinutes: 70,
    objectiveEn: 'Re-read your database work and fix: missing hardening, unoptimized queries, missing sharding docs.',
    objectiveAr: 'Re-read your database work and fix: missing hardening, unoptimized queries, missing sharding docs.',
    lessonEn:
      'A review day. Re-read the databases you built, look for: security hardening missing, queries still unoptimized, sharding documentation absent. Fix each issue and run your SQL scripts end-to-end.',
    lessonAr:
      'يوم مراجعة. revisit the databases you built, look for: security hardening missing, queries still unoptimized, sharding documentation absent. Fix each issue and run your SQL scripts end-to-end.',
    tasks: [
      {
        en: 'List the twenty biggest mistakes in your database work and fix each',
        ar: 'List the twenty biggest mistakes in your database work and fix each'
      },
      {
        en: 'Apply security hardening to your PostgreSQL server',
        ar: 'Apply security hardening to your PostgreSQL server'
      },
      {
        en: 'Optimize one previously slow query',
        ar: 'Optimize one previously slow query'
      },
      {
        en: 'Add sharding documentation to your project wiki',
        ar: 'Add sharding documentation to your project wiki'
      }
    ],
    exerciseEn: 'Fix the identified issues and complete your database documentation.',
    exerciseAr: 'Fix the identified issues and complete your database documentation.',
    deliverableEn: 'A fully documented and hardened database setup.',
deliverableAr: 'Fully documented and hardened database setup.',
    resources: [
      { title: 'PostgreSQL Security', url: 'https://www.postgresql.org/docs/current/security.html', kind: 'official' }
    ],
    challengeEn: 'Set up a automated daily health check script for your database',
    challengeAr: 'Set up a automated daily health check script for your database',
    prerequisites: [142],
    criteriaEn: ['Security hardening applied', 'One query optimized', 'Sharding docs added'],
    criteriaAr: ['Security hardening applied', 'One query optimized', 'Sharding docs added']
  },
  {
    dayNumber: 144,
    phaseSlug: 'database-auth',
    kind: 'lesson',
    titleEn: 'Introduction to Cloud Databases',
    titleAr: 'Introduction to Cloud Databases',
    topic: 'Cloud',
    estimatedMinutes: 90,
    objectiveEn: 'Compare managed database services (Supabase, PlanetScale, AWS RDS) and choose one for production.',
    objectiveAr: 'Compare managed database services (Supabase, PlanetScale, AWS RDS) and choose one for production.',
    lessonEn:
      'Managed databases reduce operational overhead. Supabase offers PostgreSQL-native auth integration. PlanetScale provides branching and non-blocking deployments. AWS RDS offers enterprise features and backups. Choose based on your scaling needs and budget.',
    lessonAr:
      'Managed databases reduce operational overhead. Supabase offers PostgreSQL-native auth integration. PlanetScale provides branching and non-blocking deployments. AWS RDS offers enterprise features and backups. Choose based on your scaling needs and budget.',
    tasks: [
      {
        en: 'Compare Supabase, PlanetScale, and AWS RDS features and pricing',
        ar: 'Compare Supabase, PlanetScale, and AWS RDS features and pricing'
      },
      {
        en: 'Set up a small Supabase project as the production database',
        ar: 'Set up a small Supabase project as the production database'
      },
      {
        en: 'Migrate an existing schema to the chosen service',
        ar: 'Migrate an existing schema to the chosen service'
      },
      {
        en: 'Configure connection pooling and SSL for the production database',
        ar: 'Configure connection pooling and SSL for the production database'
      }
    ],
    exerciseEn: 'Evaluate three database services and set up one for the project.',
    exerciseAr: 'Evaluate three database services and set up one for the project.',
    deliverableEn: 'A chosen database service with an migrated schema and SSL configured.',
deliverableAr: 'Chosen database service with an migrated schema and SSL configured.',
    resources: [
      { title: 'Supabase Docs', url: 'https://supabase.com/docs', kind: 'official' },
      { title: 'PlanetScale Docs', url: 'https://planetscale.com/docs', kind: 'reference' }
    ],
    challengeEn: 'Set up read replicas in the chosen cloud database service',
    challengeAr: 'Set up read replicas in the chosen cloud database service',
    prerequisites: [143],
    criteriaEn: ['Services compared', 'Supabase project set up', 'Schema migrated', 'SSL configured'],
    criteriaAr: ['Services compared', 'Supabase project set up', 'Schema migrated', 'SSL configured']
  },
  {
    dayNumber: 145,
    phaseSlug: 'database-auth',
    kind: 'lesson',
    titleEn: 'Database API Design',
    titleAr: 'Database API Design',
    topic: 'API Design',
    estimatedMinutes: 90,
    objectiveEn: 'Design a clean database API with consistent naming, pagination, and filtering.',
    objectiveAr: 'Design a clean database API with consistent naming, pagination, and filtering.',
    lessonEn:
      'A consistent API improves developer experience. Use plural resource names, consistent filter query parameters (page, perPage, sort), and default pagination. Document the API shape and provide example requests.',
    lessonAr:
      'م API constant improves developer experience. Use plural resource names, consistent filter query parameters (page, perPage, sort), and default pagination. Document the API shape and provide example requests.',
    tasks: [
      {
        en: 'Design an API with consistent resource naming (e.g., /users, /items)',
        ar: 'Design an API with consistent resource naming (e.g., /users, /items)'
      },
      {
        en: 'Implement pagination with page and perPage query parameters',
        ar: 'Implement pagination with page and perPage query parameters'
      },
      {
        en: 'Add filtering support for common fields (e.g., ?status=active)',
        ar: 'Add filtering support for common fields (e.g., ?status=active)'
      },
      {
        en: 'Document the API with example requests and responses',
        ar: 'Document the API with example requests and responses'
      }
    ],
    exerciseEn: 'Design and document a clean database API with pagination and filtering.',
    exerciseAr: 'Design and document a clean database API with pagination and filtering.',
    deliverableEn: 'An API specification document with examples.',
deliverableAr: 'API specification document with examples.',
    resources: [
      { title: 'API Design Patterns', url: 'https://apihandbook.dev/', kind: 'reference' },
      { title: 'MDN: Fetch API', url: MDN + '/fetch', kind: 'official' }
    ],
    challengeEn: 'Add sortable fields with a ?sort parameter',
    challengeAr: 'Add sortable fields with a ?sort parameter',
    prerequisites: [144],
    criteriaEn: ['Consistent resource naming', 'Pagination implemented', 'Filtering works', 'API documented'],
    criteriaAr: ['Resource naming consistent', 'Pagination implemented', 'Filtering works', 'API documented']
  },
  {
    dayNumber: 146,
    phaseSlug: 'database-auth',
    kind: 'project',
    titleEn: 'Production Database Setup',
    titleAr: 'Production Database Setup',
    topic: 'Production',
    estimatedMinutes: 120,
    objectiveEn: 'Set up a production-ready database with backups, monitoring, RLS, and connection pooling.',
    objectiveAr: 'Set up a production-ready database with backups, monitoring, RLS, and connection pooling.',
    lessonEn:
      'Combine everything from previous days: RLS for security, backups and monitoring for reliability, connection pooling for performance, and SSL for transport security. This is the production database setup for the full-stack application.',
    lessonAr:
      'Combine everything من الأيام السابقة: RLS للأمان، backups and monitoring for reliability, connection pooling for performance, and SSL for transport security. This is the production database setup for the full-stack application.',
    tasks: [
      {
        en: 'Configure RLS policies for all tables based on user roles',
        ar: 'Configure RLS policies for all tables based on user roles'
      },
      {
        en: 'Set up daily backups and test point-in-time recovery',
        ar: 'Set up daily backups and test point-in-time recovery'
      },
      {
        en: 'Configure connection pooling with pgBouncer',
        ar: 'Set up connection pooling with pgBouncer'
      },
      {
        en: 'Enable SSL and verify all connections use encrypted transport',
        ar: 'Enable SSL and verify all connections use encrypted transport'
      }
    ],
    exerciseEn: 'Set up a production-ready database with all security and reliability features.',
    exerciseAr: 'Set up a production-ready database with all security and reliability features.',
    deliverableEn: 'A production database with RLS, backups, monitoring, pooling, and SSL.',
deliverableAr: 'Production database with RLS backups monitoring and pooling and SSL',
    resources: [
      { title: 'All previous references', url: 'https://www.postgresql.org/docs/', kind: 'reference' }
    ],
    challengeEn: 'Set up read replicas and verify failover behavior',
    challengeAr: 'Set up read replicas and verify failover behavior',
    prerequisites: [145],
    criteriaEn: ['RLS policies on all tables', 'Backups tested', 'Pooling active', 'SSL enforced'],
    criteriaAr: ['RLS policies on all tables', 'Backups tested', 'Pooling active', 'SSL enforced']
  },
  {
    dayNumber: 147,
    phaseSlug: 'database-auth',
    kind: 'review',
    titleEn: 'Database Review and Consolidation',
    titleAr: 'Database Review and Consolidation',
    topic: 'Review',
    estimatedMinutes: 70,
    objectiveEn: 'Re-read your database work and fix: production setup gaps, unoptimized queries, missing monitoring.',
    objectiveAr: 'Re-read your database work and fix: production setup gaps, unoptimized queries, missing monitoring.',
    lessonEn:
      'A review day. Re-read your database work from days 121-146, look for: production setup gaps, unoptimized queries still present, monitoring not configured. Fix each issue and run your SQL scripts end-to-end.',
    lessonAr:
      'يوم مراجعة. revisit your database work from days 121-146, look for: production setup gaps, unoptimized queries still present, monitoring not configured. Fix each issue and run your SQL scripts end-to-end.',
    tasks: [
      {
        en: 'List the thirty biggest mistakes in your database work and fix each',
        ar: 'List the thirty biggest mistakes in your database work and fix each'
      },
      {
        en: 'Apply production setup: backups, monitoring, RLS, pooling',
        ar: 'Apply production setup: backups, monitoring, RLS, pooling'
      },
      {
        en: 'Optimize one remaining slow query',
        ar: 'Optimize one remaining slow query'
      },
      {
        en: 'Configure monitoring alerts for abnormal patterns',
        ar: 'Configure monitoring alerts for abnormal patterns'
      }
    ],
    exerciseEn: 'Fix the identified issues and complete your database consolidation.',
    exerciseAr: 'Fix the identified issues and complete your database consolidation.',
    deliverableEn: 'A consolidated database setup for production.',
deliverableAr: 'Consolidated database setup for production.',
    resources: [
      { title: 'PostgreSQL Monitoring', url: 'https://www.postgresql.org/docs/current/monitoring.html', kind: 'official' }
    ],
    challengeEn: 'Set up a monthly database health review process',
    challengeAr: 'Set up a monthly database health review process',
    prerequisites: [146],
    criteriaEn: ['Production setup complete', 'One query optimized', 'Monitoring alerts configured'],
    criteriaAr: ['Production setup complete', 'One query optimized', 'Monitoring alerts configured']
  },
  {
    dayNumber: 148,
    phaseSlug: 'database-auth',
    kind: 'lesson',
    titleEn: 'Database Connection Management',
    titleAr: 'Database Connection Management',
    topic: 'Performance',
    estimatedMinutes: 90,
    objectiveEn: 'Manage database connections with proper pooling, timeout settings, and error handling.',
    objectiveAr: 'Manage database connections with proper pooling, timeout settings, and error handling.',
    lessonEn:
      'Proper connection management prevents leaks and timeouts. Set appropriate connection timeouts, handle disconnections gracefully, and always return clients to the pool. Use try/finally to ensure connections are released.',
    lessonAr:
      'Proper connection management prevents leaks and timeouts. Set appropriate connection timeouts, handle disconnections gracefully, and always return clients to the pool. Use try/finally to ensure connections are released.',
    tasks: [
      {
        en: 'Set a connection timeout of 5 seconds',
        ar: 'Set a connection timeout of 5 seconds'
      },
      {
        en: 'Use try/finally to return a client to the pool',
        ar: 'Use try/finally to return a client to the pool'
      },
      {
        en: 'Handle connection errors with appropriate HTTP status codes',
        ar: 'Handle connection errors with appropriate HTTP status codes'
      },
      {
        en: 'Monitor connection leak warnings in production logs',
        ar: 'Monitor connection leak warnings in production logs'
      }
    ],
    exerciseEn: 'Write connection pooling code with proper error handling and timeout.',
    exerciseAr: 'Write connection pooling code with proper error handling and timeout.',
    deliverableEn: 'Connection pooling module with timeout and error handling.',
deliverableAr: 'Connection pooling module with timeout and error handling.',
    resources: [
      { title: 'Node PostgreSQL client', url: 'https://node-postgres.com/', kind: 'reference' },
      { title: 'Knex connection pooling', url: 'https://knexjs.org/', kind: 'reference' }
    ],
    challengeEn: 'Implement graceful shutdown that closes all database connections',
    challengeAr: 'Implement graceful shutdown that closes all database connections',
    prerequisites: [147],
    criteriaEn: ['Connection timeout set', 'try/finally returns client', 'Error handlers return 503'],
    criteriaAr: ['Connection timeout set', 'try/finally returns client', 'Error handlers return 503']
  },
  {
    dayNumber: 149,
    phaseSlug: 'database-auth',
    kind: 'project',
    titleEn: 'Full Database Integration',
    titleAr: 'Full Database Integration',
    topic: 'Integration',
    estimatedMinutes: 120,
    objectiveEn: 'Integrate all the database features into a single application: auth, RLS, backups, monitoring, and connection pooling.',
    objectiveAr: 'Integrate all the database features into a single application: auth, RLS, backups, monitoring, and connection pooling.',
    lessonEn:
      'This is the final project for Phase 5. Combine authentication, row-level security, automated backups, query monitoring, and connection pooling into a single production-ready application.',
    lessonAr:
      'This is the final project for Phase 5. Combine authentication, row-level security, automated backups, query monitoring, and connection pooling into a single production-ready application.',
    tasks: [
      {
        en: 'Add RLS policies to all tables',
        ar: 'Add RLS policies to all tables'
      },
      {
        en: 'Configure daily backups with point-in-time recovery',
        ar: 'Configure daily backups with point-in-time recovery'
      },
      {
        en: 'Set up query monitoring and slow query logging',
        ar: 'Set up query monitoring and slow query logging'
      },
      {
        en: 'Integrate connection pooling with pgBouncer',
        ar: 'Integrate connection pooling with pgBouncer'
      }
    ],
    exerciseEn: 'Build a fully integrated database application with all Phase 5 features.',
    exerciseAr: 'Build a fully integrated database application with all Phase 5 features.',
    deliverableEn: 'A production-ready database application with all Phase 5 features.',
deliverableAr: 'A production-ready database application with all Phase 5 features.',
    resources: [
      { title: 'All Phase 5 references', url: 'https://www.postgresql.org/docs/', kind: 'reference' }
    ],
    challengeEn: 'Add automated health check endpoint that verifies database connectivity',
    challengeAr: 'Add automated health check endpoint that verifies database connectivity',
    prerequisites: [148],
    criteriaEn: ['RLS on all tables', 'Backups configured', 'Monitoring active', 'Pooling integrated'],
    criteriaAr: ['RLS on all tables', 'Backups configured', 'Monitoring active', 'Pooling integrated']
  },
  {
    dayNumber: 150,
    phaseSlug: 'database-auth',
    kind: 'review',
    titleEn: 'Phase 5 Review and Summary',
    titleAr: 'Review Phase 5 Summary',
    topic: 'Summary',
    estimatedMinutes: 70,
    objectiveEn: 'Review all 30 days of Phase 5, identify key takeaways, and plan migration to Phase 6.',
    objectiveAr: 'Review all 30 days of Phase 5, identify key takeaways, and plan migration to Phase 6.',
    lessonEn:
      'Phase 5 covered database fundamentals, authentication, security, and production operations. Key takeaways: RLS for security, backups for resilience, monitoring for observability, and connection pooling for performance. Plan migration to Phase 6: TypeScript, Testing & Security.',
    lessonAr:
      'مرحلة 5 Covered database fundamentals, authentication, security, and production operations. Key takeaways: RLS للأمان، backups for resilience, monitoring for observability, and connection pooling for performance. Plan migration to Phase 6: TypeScript, Testing & Security.',
    tasks: [
      {
        en: 'Write a summary of the 30 key concepts learned in Phase 5',
        ar: 'Write a summary of the 30 key concepts learned in Phase 5'
      },
      {
        en: 'Identify three areas to focus on in Phase 6',
        ar: 'Identify three areas to focus on in Phase 6'
      },
      {
        en: 'Plan the migration of database schemas to Phase 6 context',
        ar: 'Plan the migration of database schemas to Phase 6 context'
      },
      {
        en: 'Share key learnings with the team',
        ar: 'Share key learnings with the team'
      }
    ],
    exerciseEn: 'Write a Phase 5 summary and identify Phase 6 focus areas.',
    exerciseAr: 'Write a Phase 5 summary and identify Phase 6 focus areas.',
    deliverableEn: 'A written Phase 5 summary and Phase 6 focus plan.',
deliverableAr: 'Written Phase 5 summary and Phase 6 focus plan.',
    resources: [],
    challengeEn: 'Present a 5-minute summary of Phase 5 learnings to your team',
    challengeAr: 'Present a 5-minute summary of Phase 5 learnings to your team',
    prerequisites: [149],
    criteriaEn: ['Summary covers 30 key concepts', 'Three Phase 6 focus areas identified', 'Learnings shared'],
    criteriaAr: ['Summary covers 30 key concepts', 'Three Phase 6 focus areas identified', 'Learnings shared']
  }
]