import type { CurriculumDay } from '../types'

/** Phase 10 — Capstone MVP (days 271–300). */
export const PHASE_10_DAYS: CurriculumDay[] = [
  {
    dayNumber: 271,
    phaseSlug: 'capstone',
    kind: 'lesson' as const,
    titleEn: 'Day 271: Scope',
    titleAr: 'المشروع التخرّجي — اليوم 271: Scope',
    topic: 'Scope',
    objectiveEn: 'Learn and apply Scope as part of Capstone MVP.',
    objectiveAr: 'تعلّم Scope وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 271 covers Scope. Scope, requirements, architecture, database, auth, features, tests, docs. Work through Scope with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 271 موضوع Scope ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على Scope بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Scope', ar: 'ادرس الأفكار الأساسية لـ Scope' },
        { en: 'Practice Scope with a small hands-on task', ar: 'تدرّب على Scope بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Scope in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Scope في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Scope.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Scope.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your Scope work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Scope بتحسين واحد ووثّق النتيجة.',
    prerequisites: [],
    criteriaEn: ['Can explain Scope', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Scope', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 272,
    phaseSlug: 'capstone',
    kind: 'lesson' as const,
    titleEn: 'Day 272: requirements',
    titleAr: 'المشروع التخرّجي — اليوم 272: requirements',
    topic: 'requirements',
    objectiveEn: 'Learn and apply requirements as part of Capstone MVP.',
    objectiveAr: 'تعلّم requirements وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 272 covers requirements. Scope, requirements, architecture, database, auth, features, tests, docs. Work through requirements with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 272 موضوع requirements ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على requirements بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind requirements', ar: 'ادرس الأفكار الأساسية لـ requirements' },
        { en: 'Practice requirements with a small hands-on task', ar: 'تدرّب على requirements بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply requirements in a short exercise and record each step you took.',
    exerciseAr: 'طبّق requirements في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating requirements.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح requirements.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your requirements work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في requirements بتحسين واحد ووثّق النتيجة.',
    prerequisites: [271],
    criteriaEn: ['Can explain requirements', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح requirements', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 273,
    phaseSlug: 'capstone',
    kind: 'practice' as const,
    titleEn: 'Day 273: architecture',
    titleAr: 'المشروع التخرّجي — اليوم 273: architecture',
    topic: 'architecture',
    objectiveEn: 'Learn and apply architecture as part of Capstone MVP.',
    objectiveAr: 'تعلّم architecture وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 273 covers architecture. Scope, requirements, architecture, database, auth, features, tests, docs. Work through architecture with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 273 موضوع architecture ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على architecture بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind architecture', ar: 'ادرس الأفكار الأساسية لـ architecture' },
        { en: 'Practice architecture with a small hands-on task', ar: 'تدرّب على architecture بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply architecture in a short exercise and record each step you took.',
    exerciseAr: 'طبّق architecture في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating architecture.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح architecture.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your architecture work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في architecture بتحسين واحد ووثّق النتيجة.',
    prerequisites: [272],
    criteriaEn: ['Can explain architecture', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح architecture', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 274,
    phaseSlug: 'capstone',
    kind: 'lesson' as const,
    titleEn: 'Day 274: database',
    titleAr: 'المشروع التخرّجي — اليوم 274: database',
    topic: 'database',
    objectiveEn: 'Learn and apply database as part of Capstone MVP.',
    objectiveAr: 'تعلّم database وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 274 covers database. Scope, requirements, architecture, database, auth, features, tests, docs. Work through database with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 274 موضوع database ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على database بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind database', ar: 'ادرس الأفكار الأساسية لـ database' },
        { en: 'Practice database with a small hands-on task', ar: 'تدرّب على database بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply database in a short exercise and record each step you took.',
    exerciseAr: 'طبّق database في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating database.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح database.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your database work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في database بتحسين واحد ووثّق النتيجة.',
    prerequisites: [273],
    criteriaEn: ['Can explain database', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح database', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 275,
    phaseSlug: 'capstone',
    kind: 'project' as const,
    titleEn: 'Day 275: auth',
    titleAr: 'المشروع التخرّجي — اليوم 275: auth',
    topic: 'auth',
    objectiveEn: 'Learn and apply auth as part of Capstone MVP.',
    objectiveAr: 'تعلّم auth وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 275 covers auth. Scope, requirements, architecture, database, auth, features, tests, docs. Work through auth with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 275 موضوع auth ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على auth بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind auth', ar: 'ادرس الأفكار الأساسية لـ auth' },
        { en: 'Practice auth with a small hands-on task', ar: 'تدرّب على auth بمهمة عملية صغيرة' },
        { en: 'Plan a small project that exercises auth', ar: 'خطّط لمشروع صغير يطبّق auth' }
    ],
    exerciseEn: 'Apply auth in a short exercise and record each step you took.',
    exerciseAr: 'طبّق auth في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating auth.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح auth.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your auth work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في auth بتحسين واحد ووثّق النتيجة.',
    prerequisites: [274],
    criteriaEn: ['Can explain auth', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح auth', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 276,
    phaseSlug: 'capstone',
    kind: 'practice' as const,
    titleEn: 'Day 276: features',
    titleAr: 'المشروع التخرّجي — اليوم 276: features',
    topic: 'features',
    objectiveEn: 'Learn and apply features as part of Capstone MVP.',
    objectiveAr: 'تعلّم features وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 276 covers features. Scope, requirements, architecture, database, auth, features, tests, docs. Work through features with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 276 موضوع features ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على features بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind features', ar: 'ادرس الأفكار الأساسية لـ features' },
        { en: 'Practice features with a small hands-on task', ar: 'تدرّب على features بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply features in a short exercise and record each step you took.',
    exerciseAr: 'طبّق features في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating features.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح features.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your features work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في features بتحسين واحد ووثّق النتيجة.',
    prerequisites: [275],
    criteriaEn: ['Can explain features', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح features', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 277,
    phaseSlug: 'capstone',
    kind: 'lesson' as const,
    titleEn: 'Day 277: tests',
    titleAr: 'المشروع التخرّجي — اليوم 277: tests',
    topic: 'tests',
    objectiveEn: 'Learn and apply tests as part of Capstone MVP.',
    objectiveAr: 'تعلّم tests وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 277 covers tests. Scope, requirements, architecture, database, auth, features, tests, docs. Work through tests with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 277 موضوع tests ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على tests بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind tests', ar: 'ادرس الأفكار الأساسية لـ tests' },
        { en: 'Practice tests with a small hands-on task', ar: 'تدرّب على tests بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply tests in a short exercise and record each step you took.',
    exerciseAr: 'طبّق tests في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating tests.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح tests.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your tests work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في tests بتحسين واحد ووثّق النتيجة.',
    prerequisites: [276],
    criteriaEn: ['Can explain tests', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح tests', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 278,
    phaseSlug: 'capstone',
    kind: 'lesson' as const,
    titleEn: 'Day 278: docs',
    titleAr: 'المشروع التخرّجي — اليوم 278: docs',
    topic: 'docs',
    objectiveEn: 'Learn and apply docs as part of Capstone MVP.',
    objectiveAr: 'تعلّم docs وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 278 covers docs. Scope, requirements, architecture, database, auth, features, tests, docs. Work through docs with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 278 موضوع docs ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على docs بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind docs', ar: 'ادرس الأفكار الأساسية لـ docs' },
        { en: 'Practice docs with a small hands-on task', ar: 'تدرّب على docs بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply docs in a short exercise and record each step you took.',
    exerciseAr: 'طبّق docs في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating docs.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح docs.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your docs work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في docs بتحسين واحد ووثّق النتيجة.',
    prerequisites: [277],
    criteriaEn: ['Can explain docs', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح docs', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 279,
    phaseSlug: 'capstone',
    kind: 'practice' as const,
    titleEn: 'Day 279: Scope',
    titleAr: 'المشروع التخرّجي — اليوم 279: Scope',
    topic: 'Scope',
    objectiveEn: 'Learn and apply Scope as part of Capstone MVP.',
    objectiveAr: 'تعلّم Scope وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 279 covers Scope. Scope, requirements, architecture, database, auth, features, tests, docs. Work through Scope with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 279 موضوع Scope ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على Scope بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind Scope', ar: 'ادرس الأفكار الأساسية لـ Scope' },
        { en: 'Practice Scope with a small hands-on task', ar: 'تدرّب على Scope بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Scope in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Scope في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Scope.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Scope.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your Scope work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Scope بتحسين واحد ووثّق النتيجة.',
    prerequisites: [278],
    criteriaEn: ['Can explain Scope', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Scope', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 280,
    phaseSlug: 'capstone',
    kind: 'review' as const,
    titleEn: 'Day 280: requirements',
    titleAr: 'المشروع التخرّجي — اليوم 280: requirements',
    topic: 'requirements',
    objectiveEn: 'Learn and apply requirements as part of Capstone MVP.',
    objectiveAr: 'تعلّم requirements وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 280 covers requirements. Scope, requirements, architecture, database, auth, features, tests, docs. Work through requirements with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 280 موضوع requirements ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على requirements بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 60,
    tasks: [
        { en: 'Study the core ideas behind requirements', ar: 'ادرس الأفكار الأساسية لـ requirements' },
        { en: 'Practice requirements with a small hands-on task', ar: 'تدرّب على requirements بمهمة عملية صغيرة' },
        { en: 'Review your recent notes and list key takeaways', ar: 'راجع ملاحظاتك الأخيرة واستخرج النقاط الرئيسية' }
    ],
    exerciseEn: 'Apply requirements in a short exercise and record each step you took.',
    exerciseAr: 'طبّق requirements في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating requirements.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح requirements.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your requirements work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في requirements بتحسين واحد ووثّق النتيجة.',
    prerequisites: [279],
    criteriaEn: ['Can explain requirements', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح requirements', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 281,
    phaseSlug: 'capstone',
    kind: 'lesson' as const,
    titleEn: 'Day 281: architecture',
    titleAr: 'المشروع التخرّجي — اليوم 281: architecture',
    topic: 'architecture',
    objectiveEn: 'Learn and apply architecture as part of Capstone MVP.',
    objectiveAr: 'تعلّم architecture وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 281 covers architecture. Scope, requirements, architecture, database, auth, features, tests, docs. Work through architecture with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 281 موضوع architecture ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على architecture بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind architecture', ar: 'ادرس الأفكار الأساسية لـ architecture' },
        { en: 'Practice architecture with a small hands-on task', ar: 'تدرّب على architecture بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply architecture in a short exercise and record each step you took.',
    exerciseAr: 'طبّق architecture في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating architecture.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح architecture.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your architecture work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في architecture بتحسين واحد ووثّق النتيجة.',
    prerequisites: [280],
    criteriaEn: ['Can explain architecture', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح architecture', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 282,
    phaseSlug: 'capstone',
    kind: 'practice' as const,
    titleEn: 'Day 282: database',
    titleAr: 'المشروع التخرّجي — اليوم 282: database',
    topic: 'database',
    objectiveEn: 'Learn and apply database as part of Capstone MVP.',
    objectiveAr: 'تعلّم database وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 282 covers database. Scope, requirements, architecture, database, auth, features, tests, docs. Work through database with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 282 موضوع database ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على database بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind database', ar: 'ادرس الأفكار الأساسية لـ database' },
        { en: 'Practice database with a small hands-on task', ar: 'تدرّب على database بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply database in a short exercise and record each step you took.',
    exerciseAr: 'طبّق database في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating database.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح database.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your database work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في database بتحسين واحد ووثّق النتيجة.',
    prerequisites: [281],
    criteriaEn: ['Can explain database', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح database', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 283,
    phaseSlug: 'capstone',
    kind: 'lesson' as const,
    titleEn: 'Day 283: auth',
    titleAr: 'المشروع التخرّجي — اليوم 283: auth',
    topic: 'auth',
    objectiveEn: 'Learn and apply auth as part of Capstone MVP.',
    objectiveAr: 'تعلّم auth وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 283 covers auth. Scope, requirements, architecture, database, auth, features, tests, docs. Work through auth with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 283 موضوع auth ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على auth بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind auth', ar: 'ادرس الأفكار الأساسية لـ auth' },
        { en: 'Practice auth with a small hands-on task', ar: 'تدرّب على auth بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply auth in a short exercise and record each step you took.',
    exerciseAr: 'طبّق auth في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating auth.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح auth.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your auth work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في auth بتحسين واحد ووثّق النتيجة.',
    prerequisites: [282],
    criteriaEn: ['Can explain auth', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح auth', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 284,
    phaseSlug: 'capstone',
    kind: 'lesson' as const,
    titleEn: 'Day 284: features',
    titleAr: 'المشروع التخرّجي — اليوم 284: features',
    topic: 'features',
    objectiveEn: 'Learn and apply features as part of Capstone MVP.',
    objectiveAr: 'تعلّم features وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 284 covers features. Scope, requirements, architecture, database, auth, features, tests, docs. Work through features with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 284 موضوع features ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على features بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind features', ar: 'ادرس الأفكار الأساسية لـ features' },
        { en: 'Practice features with a small hands-on task', ar: 'تدرّب على features بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply features in a short exercise and record each step you took.',
    exerciseAr: 'طبّق features في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating features.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح features.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your features work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في features بتحسين واحد ووثّق النتيجة.',
    prerequisites: [283],
    criteriaEn: ['Can explain features', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح features', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 285,
    phaseSlug: 'capstone',
    kind: 'project' as const,
    titleEn: 'Day 285: tests',
    titleAr: 'المشروع التخرّجي — اليوم 285: tests',
    topic: 'tests',
    objectiveEn: 'Learn and apply tests as part of Capstone MVP.',
    objectiveAr: 'تعلّم tests وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 285 covers tests. Scope, requirements, architecture, database, auth, features, tests, docs. Work through tests with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 285 موضوع tests ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على tests بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind tests', ar: 'ادرس الأفكار الأساسية لـ tests' },
        { en: 'Practice tests with a small hands-on task', ar: 'تدرّب على tests بمهمة عملية صغيرة' },
        { en: 'Plan a small project that exercises tests', ar: 'خطّط لمشروع صغير يطبّق tests' }
    ],
    exerciseEn: 'Apply tests in a short exercise and record each step you took.',
    exerciseAr: 'طبّق tests في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating tests.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح tests.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your tests work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في tests بتحسين واحد ووثّق النتيجة.',
    prerequisites: [284],
    criteriaEn: ['Can explain tests', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح tests', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 286,
    phaseSlug: 'capstone',
    kind: 'lesson' as const,
    titleEn: 'Day 286: docs',
    titleAr: 'المشروع التخرّجي — اليوم 286: docs',
    topic: 'docs',
    objectiveEn: 'Learn and apply docs as part of Capstone MVP.',
    objectiveAr: 'تعلّم docs وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 286 covers docs. Scope, requirements, architecture, database, auth, features, tests, docs. Work through docs with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 286 موضوع docs ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على docs بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind docs', ar: 'ادرس الأفكار الأساسية لـ docs' },
        { en: 'Practice docs with a small hands-on task', ar: 'تدرّب على docs بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply docs in a short exercise and record each step you took.',
    exerciseAr: 'طبّق docs في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating docs.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح docs.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your docs work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في docs بتحسين واحد ووثّق النتيجة.',
    prerequisites: [285],
    criteriaEn: ['Can explain docs', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح docs', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 287,
    phaseSlug: 'capstone',
    kind: 'lesson' as const,
    titleEn: 'Day 287: Scope',
    titleAr: 'المشروع التخرّجي — اليوم 287: Scope',
    topic: 'Scope',
    objectiveEn: 'Learn and apply Scope as part of Capstone MVP.',
    objectiveAr: 'تعلّم Scope وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 287 covers Scope. Scope, requirements, architecture, database, auth, features, tests, docs. Work through Scope with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 287 موضوع Scope ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على Scope بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Scope', ar: 'ادرس الأفكار الأساسية لـ Scope' },
        { en: 'Practice Scope with a small hands-on task', ar: 'تدرّب على Scope بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Scope in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Scope في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Scope.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Scope.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your Scope work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Scope بتحسين واحد ووثّق النتيجة.',
    prerequisites: [286],
    criteriaEn: ['Can explain Scope', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Scope', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 288,
    phaseSlug: 'capstone',
    kind: 'practice' as const,
    titleEn: 'Day 288: requirements',
    titleAr: 'المشروع التخرّجي — اليوم 288: requirements',
    topic: 'requirements',
    objectiveEn: 'Learn and apply requirements as part of Capstone MVP.',
    objectiveAr: 'تعلّم requirements وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 288 covers requirements. Scope, requirements, architecture, database, auth, features, tests, docs. Work through requirements with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 288 موضوع requirements ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على requirements بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind requirements', ar: 'ادرس الأفكار الأساسية لـ requirements' },
        { en: 'Practice requirements with a small hands-on task', ar: 'تدرّب على requirements بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply requirements in a short exercise and record each step you took.',
    exerciseAr: 'طبّق requirements في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating requirements.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح requirements.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your requirements work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في requirements بتحسين واحد ووثّق النتيجة.',
    prerequisites: [287],
    criteriaEn: ['Can explain requirements', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح requirements', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 289,
    phaseSlug: 'capstone',
    kind: 'lesson' as const,
    titleEn: 'Day 289: architecture',
    titleAr: 'المشروع التخرّجي — اليوم 289: architecture',
    topic: 'architecture',
    objectiveEn: 'Learn and apply architecture as part of Capstone MVP.',
    objectiveAr: 'تعلّم architecture وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 289 covers architecture. Scope, requirements, architecture, database, auth, features, tests, docs. Work through architecture with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 289 موضوع architecture ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على architecture بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind architecture', ar: 'ادرس الأفكار الأساسية لـ architecture' },
        { en: 'Practice architecture with a small hands-on task', ar: 'تدرّب على architecture بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply architecture in a short exercise and record each step you took.',
    exerciseAr: 'طبّق architecture في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating architecture.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح architecture.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your architecture work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في architecture بتحسين واحد ووثّق النتيجة.',
    prerequisites: [288],
    criteriaEn: ['Can explain architecture', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح architecture', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 290,
    phaseSlug: 'capstone',
    kind: 'review' as const,
    titleEn: 'Day 290: database',
    titleAr: 'المشروع التخرّجي — اليوم 290: database',
    topic: 'database',
    objectiveEn: 'Learn and apply database as part of Capstone MVP.',
    objectiveAr: 'تعلّم database وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 290 covers database. Scope, requirements, architecture, database, auth, features, tests, docs. Work through database with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 290 موضوع database ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على database بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 60,
    tasks: [
        { en: 'Study the core ideas behind database', ar: 'ادرس الأفكار الأساسية لـ database' },
        { en: 'Practice database with a small hands-on task', ar: 'تدرّب على database بمهمة عملية صغيرة' },
        { en: 'Review your recent notes and list key takeaways', ar: 'راجع ملاحظاتك الأخيرة واستخرج النقاط الرئيسية' }
    ],
    exerciseEn: 'Apply database in a short exercise and record each step you took.',
    exerciseAr: 'طبّق database في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating database.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح database.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your database work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في database بتحسين واحد ووثّق النتيجة.',
    prerequisites: [289],
    criteriaEn: ['Can explain database', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح database', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 291,
    phaseSlug: 'capstone',
    kind: 'practice' as const,
    titleEn: 'Day 291: auth',
    titleAr: 'المشروع التخرّجي — اليوم 291: auth',
    topic: 'auth',
    objectiveEn: 'Learn and apply auth as part of Capstone MVP.',
    objectiveAr: 'تعلّم auth وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 291 covers auth. Scope, requirements, architecture, database, auth, features, tests, docs. Work through auth with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 291 موضوع auth ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على auth بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind auth', ar: 'ادرس الأفكار الأساسية لـ auth' },
        { en: 'Practice auth with a small hands-on task', ar: 'تدرّب على auth بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply auth in a short exercise and record each step you took.',
    exerciseAr: 'طبّق auth في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating auth.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح auth.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your auth work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في auth بتحسين واحد ووثّق النتيجة.',
    prerequisites: [290],
    criteriaEn: ['Can explain auth', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح auth', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 292,
    phaseSlug: 'capstone',
    kind: 'lesson' as const,
    titleEn: 'Day 292: features',
    titleAr: 'المشروع التخرّجي — اليوم 292: features',
    topic: 'features',
    objectiveEn: 'Learn and apply features as part of Capstone MVP.',
    objectiveAr: 'تعلّم features وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 292 covers features. Scope, requirements, architecture, database, auth, features, tests, docs. Work through features with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 292 موضوع features ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على features بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind features', ar: 'ادرس الأفكار الأساسية لـ features' },
        { en: 'Practice features with a small hands-on task', ar: 'تدرّب على features بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply features in a short exercise and record each step you took.',
    exerciseAr: 'طبّق features في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating features.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح features.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your features work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في features بتحسين واحد ووثّق النتيجة.',
    prerequisites: [291],
    criteriaEn: ['Can explain features', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح features', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 293,
    phaseSlug: 'capstone',
    kind: 'lesson' as const,
    titleEn: 'Day 293: tests',
    titleAr: 'المشروع التخرّجي — اليوم 293: tests',
    topic: 'tests',
    objectiveEn: 'Learn and apply tests as part of Capstone MVP.',
    objectiveAr: 'تعلّم tests وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 293 covers tests. Scope, requirements, architecture, database, auth, features, tests, docs. Work through tests with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 293 موضوع tests ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على tests بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind tests', ar: 'ادرس الأفكار الأساسية لـ tests' },
        { en: 'Practice tests with a small hands-on task', ar: 'تدرّب على tests بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply tests in a short exercise and record each step you took.',
    exerciseAr: 'طبّق tests في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating tests.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح tests.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your tests work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في tests بتحسين واحد ووثّق النتيجة.',
    prerequisites: [292],
    criteriaEn: ['Can explain tests', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح tests', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 294,
    phaseSlug: 'capstone',
    kind: 'practice' as const,
    titleEn: 'Day 294: docs',
    titleAr: 'المشروع التخرّجي — اليوم 294: docs',
    topic: 'docs',
    objectiveEn: 'Learn and apply docs as part of Capstone MVP.',
    objectiveAr: 'تعلّم docs وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 294 covers docs. Scope, requirements, architecture, database, auth, features, tests, docs. Work through docs with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 294 موضوع docs ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على docs بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind docs', ar: 'ادرس الأفكار الأساسية لـ docs' },
        { en: 'Practice docs with a small hands-on task', ar: 'تدرّب على docs بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply docs in a short exercise and record each step you took.',
    exerciseAr: 'طبّق docs في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating docs.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح docs.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your docs work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في docs بتحسين واحد ووثّق النتيجة.',
    prerequisites: [293],
    criteriaEn: ['Can explain docs', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح docs', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 295,
    phaseSlug: 'capstone',
    kind: 'project' as const,
    titleEn: 'Day 295: Scope',
    titleAr: 'المشروع التخرّجي — اليوم 295: Scope',
    topic: 'Scope',
    objectiveEn: 'Learn and apply Scope as part of Capstone MVP.',
    objectiveAr: 'تعلّم Scope وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 295 covers Scope. Scope, requirements, architecture, database, auth, features, tests, docs. Work through Scope with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 295 موضوع Scope ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على Scope بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Scope', ar: 'ادرس الأفكار الأساسية لـ Scope' },
        { en: 'Practice Scope with a small hands-on task', ar: 'تدرّب على Scope بمهمة عملية صغيرة' },
        { en: 'Plan a small project that exercises Scope', ar: 'خطّط لمشروع صغير يطبّق Scope' }
    ],
    exerciseEn: 'Apply Scope in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Scope في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Scope.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Scope.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your Scope work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Scope بتحسين واحد ووثّق النتيجة.',
    prerequisites: [294],
    criteriaEn: ['Can explain Scope', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Scope', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 296,
    phaseSlug: 'capstone',
    kind: 'lesson' as const,
    titleEn: 'Day 296: requirements',
    titleAr: 'المشروع التخرّجي — اليوم 296: requirements',
    topic: 'requirements',
    objectiveEn: 'Learn and apply requirements as part of Capstone MVP.',
    objectiveAr: 'تعلّم requirements وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 296 covers requirements. Scope, requirements, architecture, database, auth, features, tests, docs. Work through requirements with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 296 موضوع requirements ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على requirements بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind requirements', ar: 'ادرس الأفكار الأساسية لـ requirements' },
        { en: 'Practice requirements with a small hands-on task', ar: 'تدرّب على requirements بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply requirements in a short exercise and record each step you took.',
    exerciseAr: 'طبّق requirements في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating requirements.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح requirements.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your requirements work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في requirements بتحسين واحد ووثّق النتيجة.',
    prerequisites: [295],
    criteriaEn: ['Can explain requirements', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح requirements', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 297,
    phaseSlug: 'capstone',
    kind: 'practice' as const,
    titleEn: 'Day 297: architecture',
    titleAr: 'المشروع التخرّجي — اليوم 297: architecture',
    topic: 'architecture',
    objectiveEn: 'Learn and apply architecture as part of Capstone MVP.',
    objectiveAr: 'تعلّم architecture وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 297 covers architecture. Scope, requirements, architecture, database, auth, features, tests, docs. Work through architecture with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 297 موضوع architecture ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على architecture بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind architecture', ar: 'ادرس الأفكار الأساسية لـ architecture' },
        { en: 'Practice architecture with a small hands-on task', ar: 'تدرّب على architecture بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply architecture in a short exercise and record each step you took.',
    exerciseAr: 'طبّق architecture في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating architecture.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح architecture.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your architecture work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في architecture بتحسين واحد ووثّق النتيجة.',
    prerequisites: [296],
    criteriaEn: ['Can explain architecture', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح architecture', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 298,
    phaseSlug: 'capstone',
    kind: 'lesson' as const,
    titleEn: 'Day 298: database',
    titleAr: 'المشروع التخرّجي — اليوم 298: database',
    topic: 'database',
    objectiveEn: 'Learn and apply database as part of Capstone MVP.',
    objectiveAr: 'تعلّم database وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 298 covers database. Scope, requirements, architecture, database, auth, features, tests, docs. Work through database with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 298 موضوع database ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على database بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind database', ar: 'ادرس الأفكار الأساسية لـ database' },
        { en: 'Practice database with a small hands-on task', ar: 'تدرّب على database بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply database in a short exercise and record each step you took.',
    exerciseAr: 'طبّق database في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating database.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح database.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your database work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في database بتحسين واحد ووثّق النتيجة.',
    prerequisites: [297],
    criteriaEn: ['Can explain database', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح database', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 299,
    phaseSlug: 'capstone',
    kind: 'lesson' as const,
    titleEn: 'Day 299: auth',
    titleAr: 'المشروع التخرّجي — اليوم 299: auth',
    topic: 'auth',
    objectiveEn: 'Learn and apply auth as part of Capstone MVP.',
    objectiveAr: 'تعلّم auth وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 299 covers auth. Scope, requirements, architecture, database, auth, features, tests, docs. Work through auth with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 299 موضوع auth ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على auth بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind auth', ar: 'ادرس الأفكار الأساسية لـ auth' },
        { en: 'Practice auth with a small hands-on task', ar: 'تدرّب على auth بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply auth in a short exercise and record each step you took.',
    exerciseAr: 'طبّق auth في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating auth.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح auth.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your auth work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في auth بتحسين واحد ووثّق النتيجة.',
    prerequisites: [298],
    criteriaEn: ['Can explain auth', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح auth', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 300,
    phaseSlug: 'capstone',
    kind: 'review' as const,
    titleEn: 'Day 300: features',
    titleAr: 'المشروع التخرّجي — اليوم 300: features',
    topic: 'features',
    objectiveEn: 'Learn and apply features as part of Capstone MVP.',
    objectiveAr: 'تعلّم features وتطبّقه في المشروع التخرّجي.',
    lessonEn: 'Day 300 covers features. Scope, requirements, architecture, database, auth, features, tests, docs. Work through features with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 300 موضوع features ضمن المشروع التخرّجي. النطاق والمتطلبات والبنية وقاعدة البيانات والمصادقة والميزات والاختبارات والتوثيق. اعمل على features بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 60,
    tasks: [
        { en: 'Study the core ideas behind features', ar: 'ادرس الأفكار الأساسية لـ features' },
        { en: 'Practice features with a small hands-on task', ar: 'تدرّب على features بمهمة عملية صغيرة' },
        { en: 'Review your recent notes and list key takeaways', ar: 'راجع ملاحظاتك الأخيرة واستخرج النقاط الرئيسية' }
    ],
    exerciseEn: 'Apply features in a short exercise and record each step you took.',
    exerciseAr: 'طبّق features في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating features.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح features.',
    resources: [
      { title: 'Planning guide', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your features work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في features بتحسين واحد ووثّق النتيجة.',
    prerequisites: [299],
    criteriaEn: ['Can explain features', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح features', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
]
