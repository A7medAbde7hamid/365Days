import type { CurriculumDay } from '../types'

/** Phase 11 — Deployment & Real-World Improvement (days 301–330). */
export const PHASE_11_DAYS: CurriculumDay[] = [
  {
    dayNumber: 301,
    phaseSlug: 'deployment',
    kind: 'lesson' as const,
    titleEn: 'Day 301: Production config',
    titleAr: 'النشر والتحسين الواقعي — اليوم 301: Production config',
    topic: 'Production config',
    objectiveEn: 'Learn and apply Production config as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم Production config وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 301 covers Production config. Production config, secrets, monitoring, performance, and feedback loops. Work through Production config with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 301 موضوع Production config ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على Production config بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Production config', ar: 'ادرس الأفكار الأساسية لـ Production config' },
        { en: 'Practice Production config with a small hands-on task', ar: 'تدرّب على Production config بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Production config in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Production config في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Production config.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Production config.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your Production config work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Production config بتحسين واحد ووثّق النتيجة.',
    prerequisites: [],
    criteriaEn: ['Can explain Production config', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Production config', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 302,
    phaseSlug: 'deployment',
    kind: 'lesson' as const,
    titleEn: 'Day 302: secrets',
    titleAr: 'النشر والتحسين الواقعي — اليوم 302: secrets',
    topic: 'secrets',
    objectiveEn: 'Learn and apply secrets as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم secrets وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 302 covers secrets. Production config, secrets, monitoring, performance, and feedback loops. Work through secrets with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 302 موضوع secrets ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على secrets بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind secrets', ar: 'ادرس الأفكار الأساسية لـ secrets' },
        { en: 'Practice secrets with a small hands-on task', ar: 'تدرّب على secrets بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply secrets in a short exercise and record each step you took.',
    exerciseAr: 'طبّق secrets في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating secrets.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح secrets.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your secrets work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في secrets بتحسين واحد ووثّق النتيجة.',
    prerequisites: [301],
    criteriaEn: ['Can explain secrets', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح secrets', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 303,
    phaseSlug: 'deployment',
    kind: 'practice' as const,
    titleEn: 'Day 303: monitoring',
    titleAr: 'النشر والتحسين الواقعي — اليوم 303: monitoring',
    topic: 'monitoring',
    objectiveEn: 'Learn and apply monitoring as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم monitoring وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 303 covers monitoring. Production config, secrets, monitoring, performance, and feedback loops. Work through monitoring with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 303 موضوع monitoring ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على monitoring بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind monitoring', ar: 'ادرس الأفكار الأساسية لـ monitoring' },
        { en: 'Practice monitoring with a small hands-on task', ar: 'تدرّب على monitoring بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply monitoring in a short exercise and record each step you took.',
    exerciseAr: 'طبّق monitoring في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating monitoring.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح monitoring.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your monitoring work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في monitoring بتحسين واحد ووثّق النتيجة.',
    prerequisites: [302],
    criteriaEn: ['Can explain monitoring', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح monitoring', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 304,
    phaseSlug: 'deployment',
    kind: 'lesson' as const,
    titleEn: 'Day 304: performance',
    titleAr: 'النشر والتحسين الواقعي — اليوم 304: performance',
    topic: 'performance',
    objectiveEn: 'Learn and apply performance as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم performance وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 304 covers performance. Production config, secrets, monitoring, performance, and feedback loops. Work through performance with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 304 موضوع performance ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على performance بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind performance', ar: 'ادرس الأفكار الأساسية لـ performance' },
        { en: 'Practice performance with a small hands-on task', ar: 'تدرّب على performance بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply performance in a short exercise and record each step you took.',
    exerciseAr: 'طبّق performance في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating performance.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح performance.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your performance work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في performance بتحسين واحد ووثّق النتيجة.',
    prerequisites: [303],
    criteriaEn: ['Can explain performance', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح performance', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 305,
    phaseSlug: 'deployment',
    kind: 'project' as const,
    titleEn: 'Day 305: feedback loops',
    titleAr: 'النشر والتحسين الواقعي — اليوم 305: feedback loops',
    topic: 'feedback loops',
    objectiveEn: 'Learn and apply feedback loops as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم feedback loops وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 305 covers feedback loops. Production config, secrets, monitoring, performance, and feedback loops. Work through feedback loops with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 305 موضوع feedback loops ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على feedback loops بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind feedback loops', ar: 'ادرس الأفكار الأساسية لـ feedback loops' },
        { en: 'Practice feedback loops with a small hands-on task', ar: 'تدرّب على feedback loops بمهمة عملية صغيرة' },
        { en: 'Plan a small project that exercises feedback loops', ar: 'خطّط لمشروع صغير يطبّق feedback loops' }
    ],
    exerciseEn: 'Apply feedback loops in a short exercise and record each step you took.',
    exerciseAr: 'طبّق feedback loops في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating feedback loops.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح feedback loops.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your feedback loops work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في feedback loops بتحسين واحد ووثّق النتيجة.',
    prerequisites: [304],
    criteriaEn: ['Can explain feedback loops', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح feedback loops', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 306,
    phaseSlug: 'deployment',
    kind: 'practice' as const,
    titleEn: 'Day 306: Production config',
    titleAr: 'النشر والتحسين الواقعي — اليوم 306: Production config',
    topic: 'Production config',
    objectiveEn: 'Learn and apply Production config as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم Production config وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 306 covers Production config. Production config, secrets, monitoring, performance, and feedback loops. Work through Production config with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 306 موضوع Production config ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على Production config بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind Production config', ar: 'ادرس الأفكار الأساسية لـ Production config' },
        { en: 'Practice Production config with a small hands-on task', ar: 'تدرّب على Production config بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Production config in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Production config في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Production config.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Production config.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your Production config work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Production config بتحسين واحد ووثّق النتيجة.',
    prerequisites: [305],
    criteriaEn: ['Can explain Production config', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Production config', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 307,
    phaseSlug: 'deployment',
    kind: 'lesson' as const,
    titleEn: 'Day 307: secrets',
    titleAr: 'النشر والتحسين الواقعي — اليوم 307: secrets',
    topic: 'secrets',
    objectiveEn: 'Learn and apply secrets as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم secrets وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 307 covers secrets. Production config, secrets, monitoring, performance, and feedback loops. Work through secrets with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 307 موضوع secrets ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على secrets بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind secrets', ar: 'ادرس الأفكار الأساسية لـ secrets' },
        { en: 'Practice secrets with a small hands-on task', ar: 'تدرّب على secrets بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply secrets in a short exercise and record each step you took.',
    exerciseAr: 'طبّق secrets في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating secrets.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح secrets.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your secrets work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في secrets بتحسين واحد ووثّق النتيجة.',
    prerequisites: [306],
    criteriaEn: ['Can explain secrets', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح secrets', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 308,
    phaseSlug: 'deployment',
    kind: 'lesson' as const,
    titleEn: 'Day 308: monitoring',
    titleAr: 'النشر والتحسين الواقعي — اليوم 308: monitoring',
    topic: 'monitoring',
    objectiveEn: 'Learn and apply monitoring as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم monitoring وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 308 covers monitoring. Production config, secrets, monitoring, performance, and feedback loops. Work through monitoring with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 308 موضوع monitoring ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على monitoring بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind monitoring', ar: 'ادرس الأفكار الأساسية لـ monitoring' },
        { en: 'Practice monitoring with a small hands-on task', ar: 'تدرّب على monitoring بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply monitoring in a short exercise and record each step you took.',
    exerciseAr: 'طبّق monitoring في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating monitoring.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح monitoring.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your monitoring work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في monitoring بتحسين واحد ووثّق النتيجة.',
    prerequisites: [307],
    criteriaEn: ['Can explain monitoring', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح monitoring', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 309,
    phaseSlug: 'deployment',
    kind: 'practice' as const,
    titleEn: 'Day 309: performance',
    titleAr: 'النشر والتحسين الواقعي — اليوم 309: performance',
    topic: 'performance',
    objectiveEn: 'Learn and apply performance as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم performance وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 309 covers performance. Production config, secrets, monitoring, performance, and feedback loops. Work through performance with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 309 موضوع performance ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على performance بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind performance', ar: 'ادرس الأفكار الأساسية لـ performance' },
        { en: 'Practice performance with a small hands-on task', ar: 'تدرّب على performance بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply performance in a short exercise and record each step you took.',
    exerciseAr: 'طبّق performance في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating performance.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح performance.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your performance work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في performance بتحسين واحد ووثّق النتيجة.',
    prerequisites: [308],
    criteriaEn: ['Can explain performance', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح performance', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 310,
    phaseSlug: 'deployment',
    kind: 'review' as const,
    titleEn: 'Day 310: feedback loops',
    titleAr: 'النشر والتحسين الواقعي — اليوم 310: feedback loops',
    topic: 'feedback loops',
    objectiveEn: 'Learn and apply feedback loops as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم feedback loops وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 310 covers feedback loops. Production config, secrets, monitoring, performance, and feedback loops. Work through feedback loops with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 310 موضوع feedback loops ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على feedback loops بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 60,
    tasks: [
        { en: 'Study the core ideas behind feedback loops', ar: 'ادرس الأفكار الأساسية لـ feedback loops' },
        { en: 'Practice feedback loops with a small hands-on task', ar: 'تدرّب على feedback loops بمهمة عملية صغيرة' },
        { en: 'Review your recent notes and list key takeaways', ar: 'راجع ملاحظاتك الأخيرة واستخرج النقاط الرئيسية' }
    ],
    exerciseEn: 'Apply feedback loops in a short exercise and record each step you took.',
    exerciseAr: 'طبّق feedback loops في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating feedback loops.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح feedback loops.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your feedback loops work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في feedback loops بتحسين واحد ووثّق النتيجة.',
    prerequisites: [309],
    criteriaEn: ['Can explain feedback loops', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح feedback loops', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 311,
    phaseSlug: 'deployment',
    kind: 'lesson' as const,
    titleEn: 'Day 311: Production config',
    titleAr: 'النشر والتحسين الواقعي — اليوم 311: Production config',
    topic: 'Production config',
    objectiveEn: 'Learn and apply Production config as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم Production config وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 311 covers Production config. Production config, secrets, monitoring, performance, and feedback loops. Work through Production config with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 311 موضوع Production config ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على Production config بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Production config', ar: 'ادرس الأفكار الأساسية لـ Production config' },
        { en: 'Practice Production config with a small hands-on task', ar: 'تدرّب على Production config بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Production config in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Production config في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Production config.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Production config.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your Production config work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Production config بتحسين واحد ووثّق النتيجة.',
    prerequisites: [310],
    criteriaEn: ['Can explain Production config', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Production config', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 312,
    phaseSlug: 'deployment',
    kind: 'practice' as const,
    titleEn: 'Day 312: secrets',
    titleAr: 'النشر والتحسين الواقعي — اليوم 312: secrets',
    topic: 'secrets',
    objectiveEn: 'Learn and apply secrets as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم secrets وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 312 covers secrets. Production config, secrets, monitoring, performance, and feedback loops. Work through secrets with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 312 موضوع secrets ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على secrets بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind secrets', ar: 'ادرس الأفكار الأساسية لـ secrets' },
        { en: 'Practice secrets with a small hands-on task', ar: 'تدرّب على secrets بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply secrets in a short exercise and record each step you took.',
    exerciseAr: 'طبّق secrets في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating secrets.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح secrets.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your secrets work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في secrets بتحسين واحد ووثّق النتيجة.',
    prerequisites: [311],
    criteriaEn: ['Can explain secrets', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح secrets', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 313,
    phaseSlug: 'deployment',
    kind: 'lesson' as const,
    titleEn: 'Day 313: monitoring',
    titleAr: 'النشر والتحسين الواقعي — اليوم 313: monitoring',
    topic: 'monitoring',
    objectiveEn: 'Learn and apply monitoring as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم monitoring وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 313 covers monitoring. Production config, secrets, monitoring, performance, and feedback loops. Work through monitoring with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 313 موضوع monitoring ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على monitoring بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind monitoring', ar: 'ادرس الأفكار الأساسية لـ monitoring' },
        { en: 'Practice monitoring with a small hands-on task', ar: 'تدرّب على monitoring بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply monitoring in a short exercise and record each step you took.',
    exerciseAr: 'طبّق monitoring في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating monitoring.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح monitoring.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your monitoring work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في monitoring بتحسين واحد ووثّق النتيجة.',
    prerequisites: [312],
    criteriaEn: ['Can explain monitoring', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح monitoring', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 314,
    phaseSlug: 'deployment',
    kind: 'lesson' as const,
    titleEn: 'Day 314: performance',
    titleAr: 'النشر والتحسين الواقعي — اليوم 314: performance',
    topic: 'performance',
    objectiveEn: 'Learn and apply performance as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم performance وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 314 covers performance. Production config, secrets, monitoring, performance, and feedback loops. Work through performance with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 314 موضوع performance ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على performance بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind performance', ar: 'ادرس الأفكار الأساسية لـ performance' },
        { en: 'Practice performance with a small hands-on task', ar: 'تدرّب على performance بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply performance in a short exercise and record each step you took.',
    exerciseAr: 'طبّق performance في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating performance.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح performance.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your performance work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في performance بتحسين واحد ووثّق النتيجة.',
    prerequisites: [313],
    criteriaEn: ['Can explain performance', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح performance', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 315,
    phaseSlug: 'deployment',
    kind: 'project' as const,
    titleEn: 'Day 315: feedback loops',
    titleAr: 'النشر والتحسين الواقعي — اليوم 315: feedback loops',
    topic: 'feedback loops',
    objectiveEn: 'Learn and apply feedback loops as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم feedback loops وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 315 covers feedback loops. Production config, secrets, monitoring, performance, and feedback loops. Work through feedback loops with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 315 موضوع feedback loops ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على feedback loops بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind feedback loops', ar: 'ادرس الأفكار الأساسية لـ feedback loops' },
        { en: 'Practice feedback loops with a small hands-on task', ar: 'تدرّب على feedback loops بمهمة عملية صغيرة' },
        { en: 'Plan a small project that exercises feedback loops', ar: 'خطّط لمشروع صغير يطبّق feedback loops' }
    ],
    exerciseEn: 'Apply feedback loops in a short exercise and record each step you took.',
    exerciseAr: 'طبّق feedback loops في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating feedback loops.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح feedback loops.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your feedback loops work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في feedback loops بتحسين واحد ووثّق النتيجة.',
    prerequisites: [314],
    criteriaEn: ['Can explain feedback loops', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح feedback loops', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 316,
    phaseSlug: 'deployment',
    kind: 'lesson' as const,
    titleEn: 'Day 316: Production config',
    titleAr: 'النشر والتحسين الواقعي — اليوم 316: Production config',
    topic: 'Production config',
    objectiveEn: 'Learn and apply Production config as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم Production config وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 316 covers Production config. Production config, secrets, monitoring, performance, and feedback loops. Work through Production config with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 316 موضوع Production config ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على Production config بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Production config', ar: 'ادرس الأفكار الأساسية لـ Production config' },
        { en: 'Practice Production config with a small hands-on task', ar: 'تدرّب على Production config بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Production config in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Production config في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Production config.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Production config.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your Production config work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Production config بتحسين واحد ووثّق النتيجة.',
    prerequisites: [315],
    criteriaEn: ['Can explain Production config', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Production config', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 317,
    phaseSlug: 'deployment',
    kind: 'lesson' as const,
    titleEn: 'Day 317: secrets',
    titleAr: 'النشر والتحسين الواقعي — اليوم 317: secrets',
    topic: 'secrets',
    objectiveEn: 'Learn and apply secrets as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم secrets وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 317 covers secrets. Production config, secrets, monitoring, performance, and feedback loops. Work through secrets with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 317 موضوع secrets ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على secrets بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind secrets', ar: 'ادرس الأفكار الأساسية لـ secrets' },
        { en: 'Practice secrets with a small hands-on task', ar: 'تدرّب على secrets بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply secrets in a short exercise and record each step you took.',
    exerciseAr: 'طبّق secrets في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating secrets.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح secrets.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your secrets work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في secrets بتحسين واحد ووثّق النتيجة.',
    prerequisites: [316],
    criteriaEn: ['Can explain secrets', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح secrets', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 318,
    phaseSlug: 'deployment',
    kind: 'practice' as const,
    titleEn: 'Day 318: monitoring',
    titleAr: 'النشر والتحسين الواقعي — اليوم 318: monitoring',
    topic: 'monitoring',
    objectiveEn: 'Learn and apply monitoring as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم monitoring وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 318 covers monitoring. Production config, secrets, monitoring, performance, and feedback loops. Work through monitoring with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 318 موضوع monitoring ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على monitoring بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind monitoring', ar: 'ادرس الأفكار الأساسية لـ monitoring' },
        { en: 'Practice monitoring with a small hands-on task', ar: 'تدرّب على monitoring بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply monitoring in a short exercise and record each step you took.',
    exerciseAr: 'طبّق monitoring في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating monitoring.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح monitoring.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your monitoring work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في monitoring بتحسين واحد ووثّق النتيجة.',
    prerequisites: [317],
    criteriaEn: ['Can explain monitoring', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح monitoring', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 319,
    phaseSlug: 'deployment',
    kind: 'lesson' as const,
    titleEn: 'Day 319: performance',
    titleAr: 'النشر والتحسين الواقعي — اليوم 319: performance',
    topic: 'performance',
    objectiveEn: 'Learn and apply performance as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم performance وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 319 covers performance. Production config, secrets, monitoring, performance, and feedback loops. Work through performance with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 319 موضوع performance ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على performance بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind performance', ar: 'ادرس الأفكار الأساسية لـ performance' },
        { en: 'Practice performance with a small hands-on task', ar: 'تدرّب على performance بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply performance in a short exercise and record each step you took.',
    exerciseAr: 'طبّق performance في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating performance.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح performance.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your performance work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في performance بتحسين واحد ووثّق النتيجة.',
    prerequisites: [318],
    criteriaEn: ['Can explain performance', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح performance', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 320,
    phaseSlug: 'deployment',
    kind: 'review' as const,
    titleEn: 'Day 320: feedback loops',
    titleAr: 'النشر والتحسين الواقعي — اليوم 320: feedback loops',
    topic: 'feedback loops',
    objectiveEn: 'Learn and apply feedback loops as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم feedback loops وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 320 covers feedback loops. Production config, secrets, monitoring, performance, and feedback loops. Work through feedback loops with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 320 موضوع feedback loops ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على feedback loops بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 60,
    tasks: [
        { en: 'Study the core ideas behind feedback loops', ar: 'ادرس الأفكار الأساسية لـ feedback loops' },
        { en: 'Practice feedback loops with a small hands-on task', ar: 'تدرّب على feedback loops بمهمة عملية صغيرة' },
        { en: 'Review your recent notes and list key takeaways', ar: 'راجع ملاحظاتك الأخيرة واستخرج النقاط الرئيسية' }
    ],
    exerciseEn: 'Apply feedback loops in a short exercise and record each step you took.',
    exerciseAr: 'طبّق feedback loops في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating feedback loops.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح feedback loops.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your feedback loops work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في feedback loops بتحسين واحد ووثّق النتيجة.',
    prerequisites: [319],
    criteriaEn: ['Can explain feedback loops', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح feedback loops', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 321,
    phaseSlug: 'deployment',
    kind: 'practice' as const,
    titleEn: 'Day 321: Production config',
    titleAr: 'النشر والتحسين الواقعي — اليوم 321: Production config',
    topic: 'Production config',
    objectiveEn: 'Learn and apply Production config as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم Production config وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 321 covers Production config. Production config, secrets, monitoring, performance, and feedback loops. Work through Production config with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 321 موضوع Production config ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على Production config بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind Production config', ar: 'ادرس الأفكار الأساسية لـ Production config' },
        { en: 'Practice Production config with a small hands-on task', ar: 'تدرّب على Production config بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Production config in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Production config في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Production config.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Production config.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your Production config work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Production config بتحسين واحد ووثّق النتيجة.',
    prerequisites: [320],
    criteriaEn: ['Can explain Production config', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Production config', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 322,
    phaseSlug: 'deployment',
    kind: 'lesson' as const,
    titleEn: 'Day 322: secrets',
    titleAr: 'النشر والتحسين الواقعي — اليوم 322: secrets',
    topic: 'secrets',
    objectiveEn: 'Learn and apply secrets as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم secrets وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 322 covers secrets. Production config, secrets, monitoring, performance, and feedback loops. Work through secrets with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 322 موضوع secrets ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على secrets بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind secrets', ar: 'ادرس الأفكار الأساسية لـ secrets' },
        { en: 'Practice secrets with a small hands-on task', ar: 'تدرّب على secrets بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply secrets in a short exercise and record each step you took.',
    exerciseAr: 'طبّق secrets في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating secrets.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح secrets.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your secrets work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في secrets بتحسين واحد ووثّق النتيجة.',
    prerequisites: [321],
    criteriaEn: ['Can explain secrets', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح secrets', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 323,
    phaseSlug: 'deployment',
    kind: 'lesson' as const,
    titleEn: 'Day 323: monitoring',
    titleAr: 'النشر والتحسين الواقعي — اليوم 323: monitoring',
    topic: 'monitoring',
    objectiveEn: 'Learn and apply monitoring as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم monitoring وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 323 covers monitoring. Production config, secrets, monitoring, performance, and feedback loops. Work through monitoring with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 323 موضوع monitoring ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على monitoring بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind monitoring', ar: 'ادرس الأفكار الأساسية لـ monitoring' },
        { en: 'Practice monitoring with a small hands-on task', ar: 'تدرّب على monitoring بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply monitoring in a short exercise and record each step you took.',
    exerciseAr: 'طبّق monitoring في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating monitoring.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح monitoring.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your monitoring work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في monitoring بتحسين واحد ووثّق النتيجة.',
    prerequisites: [322],
    criteriaEn: ['Can explain monitoring', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح monitoring', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 324,
    phaseSlug: 'deployment',
    kind: 'practice' as const,
    titleEn: 'Day 324: performance',
    titleAr: 'النشر والتحسين الواقعي — اليوم 324: performance',
    topic: 'performance',
    objectiveEn: 'Learn and apply performance as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم performance وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 324 covers performance. Production config, secrets, monitoring, performance, and feedback loops. Work through performance with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 324 موضوع performance ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على performance بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind performance', ar: 'ادرس الأفكار الأساسية لـ performance' },
        { en: 'Practice performance with a small hands-on task', ar: 'تدرّب على performance بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply performance in a short exercise and record each step you took.',
    exerciseAr: 'طبّق performance في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating performance.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح performance.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your performance work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في performance بتحسين واحد ووثّق النتيجة.',
    prerequisites: [323],
    criteriaEn: ['Can explain performance', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح performance', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 325,
    phaseSlug: 'deployment',
    kind: 'project' as const,
    titleEn: 'Day 325: feedback loops',
    titleAr: 'النشر والتحسين الواقعي — اليوم 325: feedback loops',
    topic: 'feedback loops',
    objectiveEn: 'Learn and apply feedback loops as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم feedback loops وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 325 covers feedback loops. Production config, secrets, monitoring, performance, and feedback loops. Work through feedback loops with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 325 موضوع feedback loops ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على feedback loops بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind feedback loops', ar: 'ادرس الأفكار الأساسية لـ feedback loops' },
        { en: 'Practice feedback loops with a small hands-on task', ar: 'تدرّب على feedback loops بمهمة عملية صغيرة' },
        { en: 'Plan a small project that exercises feedback loops', ar: 'خطّط لمشروع صغير يطبّق feedback loops' }
    ],
    exerciseEn: 'Apply feedback loops in a short exercise and record each step you took.',
    exerciseAr: 'طبّق feedback loops في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating feedback loops.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح feedback loops.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your feedback loops work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في feedback loops بتحسين واحد ووثّق النتيجة.',
    prerequisites: [324],
    criteriaEn: ['Can explain feedback loops', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح feedback loops', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 326,
    phaseSlug: 'deployment',
    kind: 'lesson' as const,
    titleEn: 'Day 326: Production config',
    titleAr: 'النشر والتحسين الواقعي — اليوم 326: Production config',
    topic: 'Production config',
    objectiveEn: 'Learn and apply Production config as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم Production config وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 326 covers Production config. Production config, secrets, monitoring, performance, and feedback loops. Work through Production config with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 326 موضوع Production config ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على Production config بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Production config', ar: 'ادرس الأفكار الأساسية لـ Production config' },
        { en: 'Practice Production config with a small hands-on task', ar: 'تدرّب على Production config بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Production config in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Production config في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Production config.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Production config.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your Production config work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Production config بتحسين واحد ووثّق النتيجة.',
    prerequisites: [325],
    criteriaEn: ['Can explain Production config', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Production config', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 327,
    phaseSlug: 'deployment',
    kind: 'practice' as const,
    titleEn: 'Day 327: secrets',
    titleAr: 'النشر والتحسين الواقعي — اليوم 327: secrets',
    topic: 'secrets',
    objectiveEn: 'Learn and apply secrets as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم secrets وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 327 covers secrets. Production config, secrets, monitoring, performance, and feedback loops. Work through secrets with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 327 موضوع secrets ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على secrets بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind secrets', ar: 'ادرس الأفكار الأساسية لـ secrets' },
        { en: 'Practice secrets with a small hands-on task', ar: 'تدرّب على secrets بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply secrets in a short exercise and record each step you took.',
    exerciseAr: 'طبّق secrets في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating secrets.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح secrets.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your secrets work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في secrets بتحسين واحد ووثّق النتيجة.',
    prerequisites: [326],
    criteriaEn: ['Can explain secrets', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح secrets', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 328,
    phaseSlug: 'deployment',
    kind: 'lesson' as const,
    titleEn: 'Day 328: monitoring',
    titleAr: 'النشر والتحسين الواقعي — اليوم 328: monitoring',
    topic: 'monitoring',
    objectiveEn: 'Learn and apply monitoring as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم monitoring وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 328 covers monitoring. Production config, secrets, monitoring, performance, and feedback loops. Work through monitoring with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 328 موضوع monitoring ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على monitoring بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind monitoring', ar: 'ادرس الأفكار الأساسية لـ monitoring' },
        { en: 'Practice monitoring with a small hands-on task', ar: 'تدرّب على monitoring بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply monitoring in a short exercise and record each step you took.',
    exerciseAr: 'طبّق monitoring في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating monitoring.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح monitoring.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your monitoring work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في monitoring بتحسين واحد ووثّق النتيجة.',
    prerequisites: [327],
    criteriaEn: ['Can explain monitoring', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح monitoring', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 329,
    phaseSlug: 'deployment',
    kind: 'lesson' as const,
    titleEn: 'Day 329: performance',
    titleAr: 'النشر والتحسين الواقعي — اليوم 329: performance',
    topic: 'performance',
    objectiveEn: 'Learn and apply performance as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم performance وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 329 covers performance. Production config, secrets, monitoring, performance, and feedback loops. Work through performance with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 329 موضوع performance ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على performance بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind performance', ar: 'ادرس الأفكار الأساسية لـ performance' },
        { en: 'Practice performance with a small hands-on task', ar: 'تدرّب على performance بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply performance in a short exercise and record each step you took.',
    exerciseAr: 'طبّق performance في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating performance.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح performance.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your performance work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في performance بتحسين واحد ووثّق النتيجة.',
    prerequisites: [328],
    criteriaEn: ['Can explain performance', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح performance', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 330,
    phaseSlug: 'deployment',
    kind: 'review' as const,
    titleEn: 'Day 330: feedback loops',
    titleAr: 'النشر والتحسين الواقعي — اليوم 330: feedback loops',
    topic: 'feedback loops',
    objectiveEn: 'Learn and apply feedback loops as part of Deployment & Real-World Improvement.',
    objectiveAr: 'تعلّم feedback loops وتطبّقه في النشر والتحسين الواقعي.',
    lessonEn: 'Day 330 covers feedback loops. Production config, secrets, monitoring, performance, and feedback loops. Work through feedback loops with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 330 موضوع feedback loops ضمن النشر والتحسين الواقعي. إعدادات الإنتاج والأسرار والمراقبة والأداء وحلقات الملاحظات. اعمل على feedback loops بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 60,
    tasks: [
        { en: 'Study the core ideas behind feedback loops', ar: 'ادرس الأفكار الأساسية لـ feedback loops' },
        { en: 'Practice feedback loops with a small hands-on task', ar: 'تدرّب على feedback loops بمهمة عملية صغيرة' },
        { en: 'Review your recent notes and list key takeaways', ar: 'راجع ملاحظاتك الأخيرة واستخرج النقاط الرئيسية' }
    ],
    exerciseEn: 'Apply feedback loops in a short exercise and record each step you took.',
    exerciseAr: 'طبّق feedback loops في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating feedback loops.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح feedback loops.',
    resources: [
      { title: 'Vercel docs', url: 'https://vercel.com/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your feedback loops work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في feedback loops بتحسين واحد ووثّق النتيجة.',
    prerequisites: [329],
    criteriaEn: ['Can explain feedback loops', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح feedback loops', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
]
