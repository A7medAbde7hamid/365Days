import type { CurriculumDay } from '../types'

/** Phase 12 — Portfolio & Career Preparation (days 331–365). */
export const PHASE_12_DAYS: CurriculumDay[] = [
  {
    dayNumber: 331,
    phaseSlug: 'portfolio-career',
    kind: 'lesson' as const,
    titleEn: 'Day 331: Portfolio',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 331: Portfolio',
    topic: 'Portfolio',
    objectiveEn: 'Learn and apply Portfolio as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم Portfolio وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 331 covers Portfolio. Portfolio, READMEs, technical writing, and interview practice. Work through Portfolio with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 331 موضوع Portfolio ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على Portfolio بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Portfolio', ar: 'ادرس الأفكار الأساسية لـ Portfolio' },
        { en: 'Practice Portfolio with a small hands-on task', ar: 'تدرّب على Portfolio بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Portfolio in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Portfolio في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Portfolio.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Portfolio.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your Portfolio work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Portfolio بتحسين واحد ووثّق النتيجة.',
    prerequisites: [],
    criteriaEn: ['Can explain Portfolio', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Portfolio', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 332,
    phaseSlug: 'portfolio-career',
    kind: 'lesson' as const,
    titleEn: 'Day 332: READMEs',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 332: READMEs',
    topic: 'READMEs',
    objectiveEn: 'Learn and apply READMEs as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم READMEs وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 332 covers READMEs. Portfolio, READMEs, technical writing, and interview practice. Work through READMEs with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 332 موضوع READMEs ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على READMEs بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind READMEs', ar: 'ادرس الأفكار الأساسية لـ READMEs' },
        { en: 'Practice READMEs with a small hands-on task', ar: 'تدرّب على READMEs بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply READMEs in a short exercise and record each step you took.',
    exerciseAr: 'طبّق READMEs في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating READMEs.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح READMEs.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your READMEs work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في READMEs بتحسين واحد ووثّق النتيجة.',
    prerequisites: [331],
    criteriaEn: ['Can explain READMEs', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح READMEs', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 333,
    phaseSlug: 'portfolio-career',
    kind: 'practice' as const,
    titleEn: 'Day 333: technical writing',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 333: technical writing',
    topic: 'technical writing',
    objectiveEn: 'Learn and apply technical writing as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم technical writing وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 333 covers technical writing. Portfolio, READMEs, technical writing, and interview practice. Work through technical writing with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 333 موضوع technical writing ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على technical writing بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind technical writing', ar: 'ادرس الأفكار الأساسية لـ technical writing' },
        { en: 'Practice technical writing with a small hands-on task', ar: 'تدرّب على technical writing بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply technical writing in a short exercise and record each step you took.',
    exerciseAr: 'طبّق technical writing في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating technical writing.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح technical writing.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your technical writing work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في technical writing بتحسين واحد ووثّق النتيجة.',
    prerequisites: [332],
    criteriaEn: ['Can explain technical writing', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح technical writing', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 334,
    phaseSlug: 'portfolio-career',
    kind: 'lesson' as const,
    titleEn: 'Day 334: interview practice',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 334: interview practice',
    topic: 'interview practice',
    objectiveEn: 'Learn and apply interview practice as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم interview practice وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 334 covers interview practice. Portfolio, READMEs, technical writing, and interview practice. Work through interview practice with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 334 موضوع interview practice ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على interview practice بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind interview practice', ar: 'ادرس الأفكار الأساسية لـ interview practice' },
        { en: 'Practice interview practice with a small hands-on task', ar: 'تدرّب على interview practice بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply interview practice in a short exercise and record each step you took.',
    exerciseAr: 'طبّق interview practice في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating interview practice.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح interview practice.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your interview practice work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في interview practice بتحسين واحد ووثّق النتيجة.',
    prerequisites: [333],
    criteriaEn: ['Can explain interview practice', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح interview practice', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 335,
    phaseSlug: 'portfolio-career',
    kind: 'project' as const,
    titleEn: 'Day 335: Portfolio',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 335: Portfolio',
    topic: 'Portfolio',
    objectiveEn: 'Learn and apply Portfolio as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم Portfolio وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 335 covers Portfolio. Portfolio, READMEs, technical writing, and interview practice. Work through Portfolio with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 335 موضوع Portfolio ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على Portfolio بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Portfolio', ar: 'ادرس الأفكار الأساسية لـ Portfolio' },
        { en: 'Practice Portfolio with a small hands-on task', ar: 'تدرّب على Portfolio بمهمة عملية صغيرة' },
        { en: 'Plan a small project that exercises Portfolio', ar: 'خطّط لمشروع صغير يطبّق Portfolio' }
    ],
    exerciseEn: 'Apply Portfolio in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Portfolio في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Portfolio.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Portfolio.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your Portfolio work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Portfolio بتحسين واحد ووثّق النتيجة.',
    prerequisites: [334],
    criteriaEn: ['Can explain Portfolio', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Portfolio', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 336,
    phaseSlug: 'portfolio-career',
    kind: 'practice' as const,
    titleEn: 'Day 336: READMEs',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 336: READMEs',
    topic: 'READMEs',
    objectiveEn: 'Learn and apply READMEs as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم READMEs وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 336 covers READMEs. Portfolio, READMEs, technical writing, and interview practice. Work through READMEs with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 336 موضوع READMEs ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على READMEs بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind READMEs', ar: 'ادرس الأفكار الأساسية لـ READMEs' },
        { en: 'Practice READMEs with a small hands-on task', ar: 'تدرّب على READMEs بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply READMEs in a short exercise and record each step you took.',
    exerciseAr: 'طبّق READMEs في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating READMEs.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح READMEs.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your READMEs work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في READMEs بتحسين واحد ووثّق النتيجة.',
    prerequisites: [335],
    criteriaEn: ['Can explain READMEs', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح READMEs', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 337,
    phaseSlug: 'portfolio-career',
    kind: 'lesson' as const,
    titleEn: 'Day 337: technical writing',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 337: technical writing',
    topic: 'technical writing',
    objectiveEn: 'Learn and apply technical writing as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم technical writing وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 337 covers technical writing. Portfolio, READMEs, technical writing, and interview practice. Work through technical writing with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 337 موضوع technical writing ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على technical writing بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind technical writing', ar: 'ادرس الأفكار الأساسية لـ technical writing' },
        { en: 'Practice technical writing with a small hands-on task', ar: 'تدرّب على technical writing بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply technical writing in a short exercise and record each step you took.',
    exerciseAr: 'طبّق technical writing في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating technical writing.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح technical writing.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your technical writing work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في technical writing بتحسين واحد ووثّق النتيجة.',
    prerequisites: [336],
    criteriaEn: ['Can explain technical writing', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح technical writing', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 338,
    phaseSlug: 'portfolio-career',
    kind: 'lesson' as const,
    titleEn: 'Day 338: interview practice',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 338: interview practice',
    topic: 'interview practice',
    objectiveEn: 'Learn and apply interview practice as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم interview practice وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 338 covers interview practice. Portfolio, READMEs, technical writing, and interview practice. Work through interview practice with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 338 موضوع interview practice ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على interview practice بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind interview practice', ar: 'ادرس الأفكار الأساسية لـ interview practice' },
        { en: 'Practice interview practice with a small hands-on task', ar: 'تدرّب على interview practice بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply interview practice in a short exercise and record each step you took.',
    exerciseAr: 'طبّق interview practice في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating interview practice.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح interview practice.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your interview practice work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في interview practice بتحسين واحد ووثّق النتيجة.',
    prerequisites: [337],
    criteriaEn: ['Can explain interview practice', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح interview practice', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 339,
    phaseSlug: 'portfolio-career',
    kind: 'practice' as const,
    titleEn: 'Day 339: Portfolio',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 339: Portfolio',
    topic: 'Portfolio',
    objectiveEn: 'Learn and apply Portfolio as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم Portfolio وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 339 covers Portfolio. Portfolio, READMEs, technical writing, and interview practice. Work through Portfolio with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 339 موضوع Portfolio ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على Portfolio بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind Portfolio', ar: 'ادرس الأفكار الأساسية لـ Portfolio' },
        { en: 'Practice Portfolio with a small hands-on task', ar: 'تدرّب على Portfolio بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Portfolio in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Portfolio في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Portfolio.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Portfolio.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your Portfolio work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Portfolio بتحسين واحد ووثّق النتيجة.',
    prerequisites: [338],
    criteriaEn: ['Can explain Portfolio', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Portfolio', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 340,
    phaseSlug: 'portfolio-career',
    kind: 'review' as const,
    titleEn: 'Day 340: READMEs',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 340: READMEs',
    topic: 'READMEs',
    objectiveEn: 'Learn and apply READMEs as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم READMEs وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 340 covers READMEs. Portfolio, READMEs, technical writing, and interview practice. Work through READMEs with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 340 موضوع READMEs ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على READMEs بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 60,
    tasks: [
        { en: 'Study the core ideas behind READMEs', ar: 'ادرس الأفكار الأساسية لـ READMEs' },
        { en: 'Practice READMEs with a small hands-on task', ar: 'تدرّب على READMEs بمهمة عملية صغيرة' },
        { en: 'Review your recent notes and list key takeaways', ar: 'راجع ملاحظاتك الأخيرة واستخرج النقاط الرئيسية' }
    ],
    exerciseEn: 'Apply READMEs in a short exercise and record each step you took.',
    exerciseAr: 'طبّق READMEs في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating READMEs.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح READMEs.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your READMEs work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في READMEs بتحسين واحد ووثّق النتيجة.',
    prerequisites: [339],
    criteriaEn: ['Can explain READMEs', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح READMEs', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 341,
    phaseSlug: 'portfolio-career',
    kind: 'lesson' as const,
    titleEn: 'Day 341: technical writing',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 341: technical writing',
    topic: 'technical writing',
    objectiveEn: 'Learn and apply technical writing as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم technical writing وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 341 covers technical writing. Portfolio, READMEs, technical writing, and interview practice. Work through technical writing with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 341 موضوع technical writing ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على technical writing بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind technical writing', ar: 'ادرس الأفكار الأساسية لـ technical writing' },
        { en: 'Practice technical writing with a small hands-on task', ar: 'تدرّب على technical writing بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply technical writing in a short exercise and record each step you took.',
    exerciseAr: 'طبّق technical writing في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating technical writing.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح technical writing.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your technical writing work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في technical writing بتحسين واحد ووثّق النتيجة.',
    prerequisites: [340],
    criteriaEn: ['Can explain technical writing', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح technical writing', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 342,
    phaseSlug: 'portfolio-career',
    kind: 'practice' as const,
    titleEn: 'Day 342: interview practice',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 342: interview practice',
    topic: 'interview practice',
    objectiveEn: 'Learn and apply interview practice as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم interview practice وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 342 covers interview practice. Portfolio, READMEs, technical writing, and interview practice. Work through interview practice with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 342 موضوع interview practice ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على interview practice بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind interview practice', ar: 'ادرس الأفكار الأساسية لـ interview practice' },
        { en: 'Practice interview practice with a small hands-on task', ar: 'تدرّب على interview practice بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply interview practice in a short exercise and record each step you took.',
    exerciseAr: 'طبّق interview practice في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating interview practice.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح interview practice.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your interview practice work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في interview practice بتحسين واحد ووثّق النتيجة.',
    prerequisites: [341],
    criteriaEn: ['Can explain interview practice', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح interview practice', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 343,
    phaseSlug: 'portfolio-career',
    kind: 'lesson' as const,
    titleEn: 'Day 343: Portfolio',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 343: Portfolio',
    topic: 'Portfolio',
    objectiveEn: 'Learn and apply Portfolio as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم Portfolio وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 343 covers Portfolio. Portfolio, READMEs, technical writing, and interview practice. Work through Portfolio with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 343 موضوع Portfolio ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على Portfolio بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Portfolio', ar: 'ادرس الأفكار الأساسية لـ Portfolio' },
        { en: 'Practice Portfolio with a small hands-on task', ar: 'تدرّب على Portfolio بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Portfolio in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Portfolio في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Portfolio.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Portfolio.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your Portfolio work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Portfolio بتحسين واحد ووثّق النتيجة.',
    prerequisites: [342],
    criteriaEn: ['Can explain Portfolio', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Portfolio', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 344,
    phaseSlug: 'portfolio-career',
    kind: 'lesson' as const,
    titleEn: 'Day 344: READMEs',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 344: READMEs',
    topic: 'READMEs',
    objectiveEn: 'Learn and apply READMEs as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم READMEs وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 344 covers READMEs. Portfolio, READMEs, technical writing, and interview practice. Work through READMEs with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 344 موضوع READMEs ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على READMEs بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind READMEs', ar: 'ادرس الأفكار الأساسية لـ READMEs' },
        { en: 'Practice READMEs with a small hands-on task', ar: 'تدرّب على READMEs بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply READMEs in a short exercise and record each step you took.',
    exerciseAr: 'طبّق READMEs في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating READMEs.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح READMEs.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your READMEs work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في READMEs بتحسين واحد ووثّق النتيجة.',
    prerequisites: [343],
    criteriaEn: ['Can explain READMEs', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح READMEs', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 345,
    phaseSlug: 'portfolio-career',
    kind: 'project' as const,
    titleEn: 'Day 345: technical writing',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 345: technical writing',
    topic: 'technical writing',
    objectiveEn: 'Learn and apply technical writing as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم technical writing وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 345 covers technical writing. Portfolio, READMEs, technical writing, and interview practice. Work through technical writing with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 345 موضوع technical writing ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على technical writing بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind technical writing', ar: 'ادرس الأفكار الأساسية لـ technical writing' },
        { en: 'Practice technical writing with a small hands-on task', ar: 'تدرّب على technical writing بمهمة عملية صغيرة' },
        { en: 'Plan a small project that exercises technical writing', ar: 'خطّط لمشروع صغير يطبّق technical writing' }
    ],
    exerciseEn: 'Apply technical writing in a short exercise and record each step you took.',
    exerciseAr: 'طبّق technical writing في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating technical writing.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح technical writing.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your technical writing work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في technical writing بتحسين واحد ووثّق النتيجة.',
    prerequisites: [344],
    criteriaEn: ['Can explain technical writing', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح technical writing', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 346,
    phaseSlug: 'portfolio-career',
    kind: 'lesson' as const,
    titleEn: 'Day 346: interview practice',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 346: interview practice',
    topic: 'interview practice',
    objectiveEn: 'Learn and apply interview practice as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم interview practice وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 346 covers interview practice. Portfolio, READMEs, technical writing, and interview practice. Work through interview practice with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 346 موضوع interview practice ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على interview practice بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind interview practice', ar: 'ادرس الأفكار الأساسية لـ interview practice' },
        { en: 'Practice interview practice with a small hands-on task', ar: 'تدرّب على interview practice بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply interview practice in a short exercise and record each step you took.',
    exerciseAr: 'طبّق interview practice في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating interview practice.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح interview practice.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your interview practice work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في interview practice بتحسين واحد ووثّق النتيجة.',
    prerequisites: [345],
    criteriaEn: ['Can explain interview practice', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح interview practice', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 347,
    phaseSlug: 'portfolio-career',
    kind: 'lesson' as const,
    titleEn: 'Day 347: Portfolio',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 347: Portfolio',
    topic: 'Portfolio',
    objectiveEn: 'Learn and apply Portfolio as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم Portfolio وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 347 covers Portfolio. Portfolio, READMEs, technical writing, and interview practice. Work through Portfolio with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 347 موضوع Portfolio ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على Portfolio بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Portfolio', ar: 'ادرس الأفكار الأساسية لـ Portfolio' },
        { en: 'Practice Portfolio with a small hands-on task', ar: 'تدرّب على Portfolio بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Portfolio in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Portfolio في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Portfolio.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Portfolio.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your Portfolio work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Portfolio بتحسين واحد ووثّق النتيجة.',
    prerequisites: [346],
    criteriaEn: ['Can explain Portfolio', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Portfolio', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 348,
    phaseSlug: 'portfolio-career',
    kind: 'practice' as const,
    titleEn: 'Day 348: READMEs',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 348: READMEs',
    topic: 'READMEs',
    objectiveEn: 'Learn and apply READMEs as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم READMEs وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 348 covers READMEs. Portfolio, READMEs, technical writing, and interview practice. Work through READMEs with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 348 موضوع READMEs ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على READMEs بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind READMEs', ar: 'ادرس الأفكار الأساسية لـ READMEs' },
        { en: 'Practice READMEs with a small hands-on task', ar: 'تدرّب على READMEs بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply READMEs in a short exercise and record each step you took.',
    exerciseAr: 'طبّق READMEs في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating READMEs.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح READMEs.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your READMEs work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في READMEs بتحسين واحد ووثّق النتيجة.',
    prerequisites: [347],
    criteriaEn: ['Can explain READMEs', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح READMEs', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 349,
    phaseSlug: 'portfolio-career',
    kind: 'lesson' as const,
    titleEn: 'Day 349: technical writing',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 349: technical writing',
    topic: 'technical writing',
    objectiveEn: 'Learn and apply technical writing as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم technical writing وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 349 covers technical writing. Portfolio, READMEs, technical writing, and interview practice. Work through technical writing with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 349 موضوع technical writing ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على technical writing بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind technical writing', ar: 'ادرس الأفكار الأساسية لـ technical writing' },
        { en: 'Practice technical writing with a small hands-on task', ar: 'تدرّب على technical writing بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply technical writing in a short exercise and record each step you took.',
    exerciseAr: 'طبّق technical writing في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating technical writing.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح technical writing.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your technical writing work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في technical writing بتحسين واحد ووثّق النتيجة.',
    prerequisites: [348],
    criteriaEn: ['Can explain technical writing', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح technical writing', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 350,
    phaseSlug: 'portfolio-career',
    kind: 'review' as const,
    titleEn: 'Day 350: interview practice',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 350: interview practice',
    topic: 'interview practice',
    objectiveEn: 'Learn and apply interview practice as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم interview practice وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 350 covers interview practice. Portfolio, READMEs, technical writing, and interview practice. Work through interview practice with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 350 موضوع interview practice ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على interview practice بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 60,
    tasks: [
        { en: 'Study the core ideas behind interview practice', ar: 'ادرس الأفكار الأساسية لـ interview practice' },
        { en: 'Practice interview practice with a small hands-on task', ar: 'تدرّب على interview practice بمهمة عملية صغيرة' },
        { en: 'Review your recent notes and list key takeaways', ar: 'راجع ملاحظاتك الأخيرة واستخرج النقاط الرئيسية' }
    ],
    exerciseEn: 'Apply interview practice in a short exercise and record each step you took.',
    exerciseAr: 'طبّق interview practice في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating interview practice.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح interview practice.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your interview practice work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في interview practice بتحسين واحد ووثّق النتيجة.',
    prerequisites: [349],
    criteriaEn: ['Can explain interview practice', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح interview practice', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 351,
    phaseSlug: 'portfolio-career',
    kind: 'practice' as const,
    titleEn: 'Day 351: Portfolio',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 351: Portfolio',
    topic: 'Portfolio',
    objectiveEn: 'Learn and apply Portfolio as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم Portfolio وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 351 covers Portfolio. Portfolio, READMEs, technical writing, and interview practice. Work through Portfolio with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 351 موضوع Portfolio ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على Portfolio بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind Portfolio', ar: 'ادرس الأفكار الأساسية لـ Portfolio' },
        { en: 'Practice Portfolio with a small hands-on task', ar: 'تدرّب على Portfolio بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Portfolio in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Portfolio في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Portfolio.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Portfolio.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your Portfolio work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Portfolio بتحسين واحد ووثّق النتيجة.',
    prerequisites: [350],
    criteriaEn: ['Can explain Portfolio', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Portfolio', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 352,
    phaseSlug: 'portfolio-career',
    kind: 'lesson' as const,
    titleEn: 'Day 352: READMEs',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 352: READMEs',
    topic: 'READMEs',
    objectiveEn: 'Learn and apply READMEs as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم READMEs وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 352 covers READMEs. Portfolio, READMEs, technical writing, and interview practice. Work through READMEs with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 352 موضوع READMEs ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على READMEs بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind READMEs', ar: 'ادرس الأفكار الأساسية لـ READMEs' },
        { en: 'Practice READMEs with a small hands-on task', ar: 'تدرّب على READMEs بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply READMEs in a short exercise and record each step you took.',
    exerciseAr: 'طبّق READMEs في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating READMEs.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح READMEs.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your READMEs work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في READMEs بتحسين واحد ووثّق النتيجة.',
    prerequisites: [351],
    criteriaEn: ['Can explain READMEs', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح READMEs', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 353,
    phaseSlug: 'portfolio-career',
    kind: 'lesson' as const,
    titleEn: 'Day 353: technical writing',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 353: technical writing',
    topic: 'technical writing',
    objectiveEn: 'Learn and apply technical writing as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم technical writing وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 353 covers technical writing. Portfolio, READMEs, technical writing, and interview practice. Work through technical writing with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 353 موضوع technical writing ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على technical writing بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind technical writing', ar: 'ادرس الأفكار الأساسية لـ technical writing' },
        { en: 'Practice technical writing with a small hands-on task', ar: 'تدرّب على technical writing بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply technical writing in a short exercise and record each step you took.',
    exerciseAr: 'طبّق technical writing في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating technical writing.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح technical writing.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your technical writing work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في technical writing بتحسين واحد ووثّق النتيجة.',
    prerequisites: [352],
    criteriaEn: ['Can explain technical writing', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح technical writing', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 354,
    phaseSlug: 'portfolio-career',
    kind: 'practice' as const,
    titleEn: 'Day 354: interview practice',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 354: interview practice',
    topic: 'interview practice',
    objectiveEn: 'Learn and apply interview practice as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم interview practice وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 354 covers interview practice. Portfolio, READMEs, technical writing, and interview practice. Work through interview practice with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 354 موضوع interview practice ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على interview practice بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind interview practice', ar: 'ادرس الأفكار الأساسية لـ interview practice' },
        { en: 'Practice interview practice with a small hands-on task', ar: 'تدرّب على interview practice بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply interview practice in a short exercise and record each step you took.',
    exerciseAr: 'طبّق interview practice في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating interview practice.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح interview practice.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your interview practice work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في interview practice بتحسين واحد ووثّق النتيجة.',
    prerequisites: [353],
    criteriaEn: ['Can explain interview practice', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح interview practice', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 355,
    phaseSlug: 'portfolio-career',
    kind: 'project' as const,
    titleEn: 'Day 355: Portfolio',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 355: Portfolio',
    topic: 'Portfolio',
    objectiveEn: 'Learn and apply Portfolio as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم Portfolio وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 355 covers Portfolio. Portfolio, READMEs, technical writing, and interview practice. Work through Portfolio with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 355 موضوع Portfolio ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على Portfolio بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Portfolio', ar: 'ادرس الأفكار الأساسية لـ Portfolio' },
        { en: 'Practice Portfolio with a small hands-on task', ar: 'تدرّب على Portfolio بمهمة عملية صغيرة' },
        { en: 'Plan a small project that exercises Portfolio', ar: 'خطّط لمشروع صغير يطبّق Portfolio' }
    ],
    exerciseEn: 'Apply Portfolio in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Portfolio في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Portfolio.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Portfolio.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your Portfolio work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Portfolio بتحسين واحد ووثّق النتيجة.',
    prerequisites: [354],
    criteriaEn: ['Can explain Portfolio', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Portfolio', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 356,
    phaseSlug: 'portfolio-career',
    kind: 'lesson' as const,
    titleEn: 'Day 356: READMEs',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 356: READMEs',
    topic: 'READMEs',
    objectiveEn: 'Learn and apply READMEs as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم READMEs وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 356 covers READMEs. Portfolio, READMEs, technical writing, and interview practice. Work through READMEs with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 356 موضوع READMEs ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على READMEs بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind READMEs', ar: 'ادرس الأفكار الأساسية لـ READMEs' },
        { en: 'Practice READMEs with a small hands-on task', ar: 'تدرّب على READMEs بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply READMEs in a short exercise and record each step you took.',
    exerciseAr: 'طبّق READMEs في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating READMEs.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح READMEs.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your READMEs work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في READMEs بتحسين واحد ووثّق النتيجة.',
    prerequisites: [355],
    criteriaEn: ['Can explain READMEs', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح READMEs', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 357,
    phaseSlug: 'portfolio-career',
    kind: 'practice' as const,
    titleEn: 'Day 357: technical writing',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 357: technical writing',
    topic: 'technical writing',
    objectiveEn: 'Learn and apply technical writing as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم technical writing وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 357 covers technical writing. Portfolio, READMEs, technical writing, and interview practice. Work through technical writing with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 357 موضوع technical writing ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على technical writing بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind technical writing', ar: 'ادرس الأفكار الأساسية لـ technical writing' },
        { en: 'Practice technical writing with a small hands-on task', ar: 'تدرّب على technical writing بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply technical writing in a short exercise and record each step you took.',
    exerciseAr: 'طبّق technical writing في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating technical writing.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح technical writing.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your technical writing work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في technical writing بتحسين واحد ووثّق النتيجة.',
    prerequisites: [356],
    criteriaEn: ['Can explain technical writing', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح technical writing', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 358,
    phaseSlug: 'portfolio-career',
    kind: 'lesson' as const,
    titleEn: 'Day 358: interview practice',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 358: interview practice',
    topic: 'interview practice',
    objectiveEn: 'Learn and apply interview practice as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم interview practice وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 358 covers interview practice. Portfolio, READMEs, technical writing, and interview practice. Work through interview practice with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 358 موضوع interview practice ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على interview practice بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind interview practice', ar: 'ادرس الأفكار الأساسية لـ interview practice' },
        { en: 'Practice interview practice with a small hands-on task', ar: 'تدرّب على interview practice بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply interview practice in a short exercise and record each step you took.',
    exerciseAr: 'طبّق interview practice في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating interview practice.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح interview practice.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your interview practice work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في interview practice بتحسين واحد ووثّق النتيجة.',
    prerequisites: [357],
    criteriaEn: ['Can explain interview practice', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح interview practice', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 359,
    phaseSlug: 'portfolio-career',
    kind: 'lesson' as const,
    titleEn: 'Day 359: Portfolio',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 359: Portfolio',
    topic: 'Portfolio',
    objectiveEn: 'Learn and apply Portfolio as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم Portfolio وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 359 covers Portfolio. Portfolio, READMEs, technical writing, and interview practice. Work through Portfolio with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 359 موضوع Portfolio ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على Portfolio بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Portfolio', ar: 'ادرس الأفكار الأساسية لـ Portfolio' },
        { en: 'Practice Portfolio with a small hands-on task', ar: 'تدرّب على Portfolio بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Portfolio in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Portfolio في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Portfolio.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Portfolio.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your Portfolio work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Portfolio بتحسين واحد ووثّق النتيجة.',
    prerequisites: [358],
    criteriaEn: ['Can explain Portfolio', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Portfolio', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 360,
    phaseSlug: 'portfolio-career',
    kind: 'review' as const,
    titleEn: 'Day 360: READMEs',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 360: READMEs',
    topic: 'READMEs',
    objectiveEn: 'Learn and apply READMEs as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم READMEs وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 360 covers READMEs. Portfolio, READMEs, technical writing, and interview practice. Work through READMEs with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 360 موضوع READMEs ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على READMEs بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 60,
    tasks: [
        { en: 'Study the core ideas behind READMEs', ar: 'ادرس الأفكار الأساسية لـ READMEs' },
        { en: 'Practice READMEs with a small hands-on task', ar: 'تدرّب على READMEs بمهمة عملية صغيرة' },
        { en: 'Review your recent notes and list key takeaways', ar: 'راجع ملاحظاتك الأخيرة واستخرج النقاط الرئيسية' }
    ],
    exerciseEn: 'Apply READMEs in a short exercise and record each step you took.',
    exerciseAr: 'طبّق READMEs في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating READMEs.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح READMEs.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your READMEs work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في READMEs بتحسين واحد ووثّق النتيجة.',
    prerequisites: [359],
    criteriaEn: ['Can explain READMEs', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح READMEs', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 361,
    phaseSlug: 'portfolio-career',
    kind: 'lesson' as const,
    titleEn: 'Day 361: technical writing',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 361: technical writing',
    topic: 'technical writing',
    objectiveEn: 'Learn and apply technical writing as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم technical writing وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 361 covers technical writing. Portfolio, READMEs, technical writing, and interview practice. Work through technical writing with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 361 موضوع technical writing ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على technical writing بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind technical writing', ar: 'ادرس الأفكار الأساسية لـ technical writing' },
        { en: 'Practice technical writing with a small hands-on task', ar: 'تدرّب على technical writing بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply technical writing in a short exercise and record each step you took.',
    exerciseAr: 'طبّق technical writing في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating technical writing.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح technical writing.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your technical writing work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في technical writing بتحسين واحد ووثّق النتيجة.',
    prerequisites: [360],
    criteriaEn: ['Can explain technical writing', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح technical writing', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 362,
    phaseSlug: 'portfolio-career',
    kind: 'lesson' as const,
    titleEn: 'Day 362: interview practice',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 362: interview practice',
    topic: 'interview practice',
    objectiveEn: 'Learn and apply interview practice as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم interview practice وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 362 covers interview practice. Portfolio, READMEs, technical writing, and interview practice. Work through interview practice with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 362 موضوع interview practice ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على interview practice بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind interview practice', ar: 'ادرس الأفكار الأساسية لـ interview practice' },
        { en: 'Practice interview practice with a small hands-on task', ar: 'تدرّب على interview practice بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply interview practice in a short exercise and record each step you took.',
    exerciseAr: 'طبّق interview practice في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating interview practice.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح interview practice.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your interview practice work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في interview practice بتحسين واحد ووثّق النتيجة.',
    prerequisites: [361],
    criteriaEn: ['Can explain interview practice', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح interview practice', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 363,
    phaseSlug: 'portfolio-career',
    kind: 'practice' as const,
    titleEn: 'Day 363: Portfolio',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 363: Portfolio',
    topic: 'Portfolio',
    objectiveEn: 'Learn and apply Portfolio as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم Portfolio وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 363 covers Portfolio. Portfolio, READMEs, technical writing, and interview practice. Work through Portfolio with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 363 موضوع Portfolio ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على Portfolio بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind Portfolio', ar: 'ادرس الأفكار الأساسية لـ Portfolio' },
        { en: 'Practice Portfolio with a small hands-on task', ar: 'تدرّب على Portfolio بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Portfolio in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Portfolio في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Portfolio.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Portfolio.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your Portfolio work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Portfolio بتحسين واحد ووثّق النتيجة.',
    prerequisites: [362],
    criteriaEn: ['Can explain Portfolio', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Portfolio', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 364,
    phaseSlug: 'portfolio-career',
    kind: 'lesson' as const,
    titleEn: 'Day 364: READMEs',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 364: READMEs',
    topic: 'READMEs',
    objectiveEn: 'Learn and apply READMEs as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم READMEs وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 364 covers READMEs. Portfolio, READMEs, technical writing, and interview practice. Work through READMEs with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 364 موضوع READMEs ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على READMEs بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind READMEs', ar: 'ادرس الأفكار الأساسية لـ READMEs' },
        { en: 'Practice READMEs with a small hands-on task', ar: 'تدرّب على READMEs بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply READMEs in a short exercise and record each step you took.',
    exerciseAr: 'طبّق READMEs في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating READMEs.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح READMEs.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your READMEs work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في READMEs بتحسين واحد ووثّق النتيجة.',
    prerequisites: [363],
    criteriaEn: ['Can explain READMEs', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح READMEs', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 365,
    phaseSlug: 'portfolio-career',
    kind: 'project' as const,
    titleEn: 'Day 365: technical writing',
    titleAr: 'المعرض المهني والاستعداد للوظيفة — اليوم 365: technical writing',
    topic: 'technical writing',
    objectiveEn: 'Learn and apply technical writing as part of Portfolio & Career Preparation.',
    objectiveAr: 'تعلّم technical writing وتطبّقه في المعرض المهني والاستعداد للوظيفة.',
    lessonEn: 'Day 365 covers technical writing. Portfolio, READMEs, technical writing, and interview practice. Work through technical writing with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 365 موضوع technical writing ضمن المعرض المهني والاستعداد للوظيفة. المعرض المهني وملفات README والكتابة التقنية والتدرّب على المقابلات. اعمل على technical writing بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind technical writing', ar: 'ادرس الأفكار الأساسية لـ technical writing' },
        { en: 'Practice technical writing with a small hands-on task', ar: 'تدرّب على technical writing بمهمة عملية صغيرة' },
        { en: 'Plan a small project that exercises technical writing', ar: 'خطّط لمشروع صغير يطبّق technical writing' }
    ],
    exerciseEn: 'Apply technical writing in a short exercise and record each step you took.',
    exerciseAr: 'طبّق technical writing في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating technical writing.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح technical writing.',
    resources: [
      { title: 'MDN career resources', url: 'https://developer.mozilla.org/en-US/docs/Learn', kind: 'official' }
    ],
    challengeEn: 'Extend your technical writing work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في technical writing بتحسين واحد ووثّق النتيجة.',
    prerequisites: [364],
    criteriaEn: ['Can explain technical writing', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح technical writing', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
]
