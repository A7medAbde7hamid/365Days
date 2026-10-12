import type { CurriculumDay } from '../types'

/** Phase 7 — Next.js & Full-Stack Patterns (days 181–210). */
export const PHASE_7_DAYS: CurriculumDay[] = [
  {
    dayNumber: 181,
    phaseSlug: 'nextjs',
    kind: 'lesson' as const,
    titleEn: 'Day 181: App Router',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 181: App Router',
    topic: 'App Router',
    objectiveEn: 'Learn and apply App Router as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم App Router وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 181 covers App Router. App Router, server/client components, data fetching, auth, and deployment. Work through App Router with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 181 موضوع App Router ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على App Router بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind App Router', ar: 'ادرس الأفكار الأساسية لـ App Router' },
        { en: 'Practice App Router with a small hands-on task', ar: 'تدرّب على App Router بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply App Router in a short exercise and record each step you took.',
    exerciseAr: 'طبّق App Router في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating App Router.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح App Router.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your App Router work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في App Router بتحسين واحد ووثّق النتيجة.',
    prerequisites: [],
    criteriaEn: ['Can explain App Router', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح App Router', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 182,
    phaseSlug: 'nextjs',
    kind: 'lesson' as const,
    titleEn: 'Day 182: server/client components',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 182: server/client components',
    topic: 'server/client components',
    objectiveEn: 'Learn and apply server/client components as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم server/client components وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 182 covers server/client components. App Router, server/client components, data fetching, auth, and deployment. Work through server/client components with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 182 موضوع server/client components ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على server/client components بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind server/client components', ar: 'ادرس الأفكار الأساسية لـ server/client components' },
        { en: 'Practice server/client components with a small hands-on task', ar: 'تدرّب على server/client components بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply server/client components in a short exercise and record each step you took.',
    exerciseAr: 'طبّق server/client components في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating server/client components.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح server/client components.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your server/client components work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في server/client components بتحسين واحد ووثّق النتيجة.',
    prerequisites: [181],
    criteriaEn: ['Can explain server/client components', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح server/client components', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 183,
    phaseSlug: 'nextjs',
    kind: 'practice' as const,
    titleEn: 'Day 183: data fetching',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 183: data fetching',
    topic: 'data fetching',
    objectiveEn: 'Learn and apply data fetching as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم data fetching وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 183 covers data fetching. App Router, server/client components, data fetching, auth, and deployment. Work through data fetching with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 183 موضوع data fetching ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على data fetching بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind data fetching', ar: 'ادرس الأفكار الأساسية لـ data fetching' },
        { en: 'Practice data fetching with a small hands-on task', ar: 'تدرّب على data fetching بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply data fetching in a short exercise and record each step you took.',
    exerciseAr: 'طبّق data fetching في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating data fetching.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح data fetching.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your data fetching work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في data fetching بتحسين واحد ووثّق النتيجة.',
    prerequisites: [182],
    criteriaEn: ['Can explain data fetching', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح data fetching', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 184,
    phaseSlug: 'nextjs',
    kind: 'lesson' as const,
    titleEn: 'Day 184: auth',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 184: auth',
    topic: 'auth',
    objectiveEn: 'Learn and apply auth as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم auth وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 184 covers auth. App Router, server/client components, data fetching, auth, and deployment. Work through auth with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 184 موضوع auth ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على auth بمثال عملي وسجّل ملاحظاتك.',
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
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your auth work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في auth بتحسين واحد ووثّق النتيجة.',
    prerequisites: [183],
    criteriaEn: ['Can explain auth', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح auth', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 185,
    phaseSlug: 'nextjs',
    kind: 'project' as const,
    titleEn: 'Day 185: deployment',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 185: deployment',
    topic: 'deployment',
    objectiveEn: 'Learn and apply deployment as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم deployment وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 185 covers deployment. App Router, server/client components, data fetching, auth, and deployment. Work through deployment with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 185 موضوع deployment ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على deployment بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind deployment', ar: 'ادرس الأفكار الأساسية لـ deployment' },
        { en: 'Practice deployment with a small hands-on task', ar: 'تدرّب على deployment بمهمة عملية صغيرة' },
        { en: 'Plan a small project that exercises deployment', ar: 'خطّط لمشروع صغير يطبّق deployment' }
    ],
    exerciseEn: 'Apply deployment in a short exercise and record each step you took.',
    exerciseAr: 'طبّق deployment في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating deployment.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح deployment.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your deployment work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في deployment بتحسين واحد ووثّق النتيجة.',
    prerequisites: [184],
    criteriaEn: ['Can explain deployment', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح deployment', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 186,
    phaseSlug: 'nextjs',
    kind: 'practice' as const,
    titleEn: 'Day 186: App Router',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 186: App Router',
    topic: 'App Router',
    objectiveEn: 'Learn and apply App Router as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم App Router وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 186 covers App Router. App Router, server/client components, data fetching, auth, and deployment. Work through App Router with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 186 موضوع App Router ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على App Router بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind App Router', ar: 'ادرس الأفكار الأساسية لـ App Router' },
        { en: 'Practice App Router with a small hands-on task', ar: 'تدرّب على App Router بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply App Router in a short exercise and record each step you took.',
    exerciseAr: 'طبّق App Router في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating App Router.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح App Router.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your App Router work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في App Router بتحسين واحد ووثّق النتيجة.',
    prerequisites: [185],
    criteriaEn: ['Can explain App Router', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح App Router', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 187,
    phaseSlug: 'nextjs',
    kind: 'lesson' as const,
    titleEn: 'Day 187: server/client components',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 187: server/client components',
    topic: 'server/client components',
    objectiveEn: 'Learn and apply server/client components as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم server/client components وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 187 covers server/client components. App Router, server/client components, data fetching, auth, and deployment. Work through server/client components with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 187 موضوع server/client components ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على server/client components بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind server/client components', ar: 'ادرس الأفكار الأساسية لـ server/client components' },
        { en: 'Practice server/client components with a small hands-on task', ar: 'تدرّب على server/client components بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply server/client components in a short exercise and record each step you took.',
    exerciseAr: 'طبّق server/client components في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating server/client components.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح server/client components.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your server/client components work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في server/client components بتحسين واحد ووثّق النتيجة.',
    prerequisites: [186],
    criteriaEn: ['Can explain server/client components', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح server/client components', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 188,
    phaseSlug: 'nextjs',
    kind: 'lesson' as const,
    titleEn: 'Day 188: data fetching',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 188: data fetching',
    topic: 'data fetching',
    objectiveEn: 'Learn and apply data fetching as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم data fetching وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 188 covers data fetching. App Router, server/client components, data fetching, auth, and deployment. Work through data fetching with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 188 موضوع data fetching ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على data fetching بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind data fetching', ar: 'ادرس الأفكار الأساسية لـ data fetching' },
        { en: 'Practice data fetching with a small hands-on task', ar: 'تدرّب على data fetching بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply data fetching in a short exercise and record each step you took.',
    exerciseAr: 'طبّق data fetching في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating data fetching.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح data fetching.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your data fetching work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في data fetching بتحسين واحد ووثّق النتيجة.',
    prerequisites: [187],
    criteriaEn: ['Can explain data fetching', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح data fetching', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 189,
    phaseSlug: 'nextjs',
    kind: 'practice' as const,
    titleEn: 'Day 189: auth',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 189: auth',
    topic: 'auth',
    objectiveEn: 'Learn and apply auth as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم auth وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 189 covers auth. App Router, server/client components, data fetching, auth, and deployment. Work through auth with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 189 موضوع auth ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على auth بمثال عملي وسجّل ملاحظاتك.',
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
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your auth work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في auth بتحسين واحد ووثّق النتيجة.',
    prerequisites: [188],
    criteriaEn: ['Can explain auth', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح auth', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 190,
    phaseSlug: 'nextjs',
    kind: 'review' as const,
    titleEn: 'Day 190: deployment',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 190: deployment',
    topic: 'deployment',
    objectiveEn: 'Learn and apply deployment as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم deployment وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 190 covers deployment. App Router, server/client components, data fetching, auth, and deployment. Work through deployment with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 190 موضوع deployment ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على deployment بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 60,
    tasks: [
        { en: 'Study the core ideas behind deployment', ar: 'ادرس الأفكار الأساسية لـ deployment' },
        { en: 'Practice deployment with a small hands-on task', ar: 'تدرّب على deployment بمهمة عملية صغيرة' },
        { en: 'Review your recent notes and list key takeaways', ar: 'راجع ملاحظاتك الأخيرة واستخرج النقاط الرئيسية' }
    ],
    exerciseEn: 'Apply deployment in a short exercise and record each step you took.',
    exerciseAr: 'طبّق deployment في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating deployment.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح deployment.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your deployment work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في deployment بتحسين واحد ووثّق النتيجة.',
    prerequisites: [189],
    criteriaEn: ['Can explain deployment', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح deployment', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 191,
    phaseSlug: 'nextjs',
    kind: 'lesson' as const,
    titleEn: 'Day 191: App Router',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 191: App Router',
    topic: 'App Router',
    objectiveEn: 'Learn and apply App Router as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم App Router وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 191 covers App Router. App Router, server/client components, data fetching, auth, and deployment. Work through App Router with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 191 موضوع App Router ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على App Router بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind App Router', ar: 'ادرس الأفكار الأساسية لـ App Router' },
        { en: 'Practice App Router with a small hands-on task', ar: 'تدرّب على App Router بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply App Router in a short exercise and record each step you took.',
    exerciseAr: 'طبّق App Router في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating App Router.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح App Router.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your App Router work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في App Router بتحسين واحد ووثّق النتيجة.',
    prerequisites: [190],
    criteriaEn: ['Can explain App Router', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح App Router', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 192,
    phaseSlug: 'nextjs',
    kind: 'practice' as const,
    titleEn: 'Day 192: server/client components',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 192: server/client components',
    topic: 'server/client components',
    objectiveEn: 'Learn and apply server/client components as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم server/client components وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 192 covers server/client components. App Router, server/client components, data fetching, auth, and deployment. Work through server/client components with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 192 موضوع server/client components ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على server/client components بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind server/client components', ar: 'ادرس الأفكار الأساسية لـ server/client components' },
        { en: 'Practice server/client components with a small hands-on task', ar: 'تدرّب على server/client components بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply server/client components in a short exercise and record each step you took.',
    exerciseAr: 'طبّق server/client components في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating server/client components.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح server/client components.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your server/client components work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في server/client components بتحسين واحد ووثّق النتيجة.',
    prerequisites: [191],
    criteriaEn: ['Can explain server/client components', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح server/client components', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 193,
    phaseSlug: 'nextjs',
    kind: 'lesson' as const,
    titleEn: 'Day 193: data fetching',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 193: data fetching',
    topic: 'data fetching',
    objectiveEn: 'Learn and apply data fetching as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم data fetching وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 193 covers data fetching. App Router, server/client components, data fetching, auth, and deployment. Work through data fetching with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 193 موضوع data fetching ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على data fetching بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind data fetching', ar: 'ادرس الأفكار الأساسية لـ data fetching' },
        { en: 'Practice data fetching with a small hands-on task', ar: 'تدرّب على data fetching بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply data fetching in a short exercise and record each step you took.',
    exerciseAr: 'طبّق data fetching في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating data fetching.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح data fetching.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your data fetching work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في data fetching بتحسين واحد ووثّق النتيجة.',
    prerequisites: [192],
    criteriaEn: ['Can explain data fetching', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح data fetching', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 194,
    phaseSlug: 'nextjs',
    kind: 'lesson' as const,
    titleEn: 'Day 194: auth',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 194: auth',
    topic: 'auth',
    objectiveEn: 'Learn and apply auth as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم auth وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 194 covers auth. App Router, server/client components, data fetching, auth, and deployment. Work through auth with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 194 موضوع auth ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على auth بمثال عملي وسجّل ملاحظاتك.',
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
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your auth work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في auth بتحسين واحد ووثّق النتيجة.',
    prerequisites: [193],
    criteriaEn: ['Can explain auth', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح auth', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 195,
    phaseSlug: 'nextjs',
    kind: 'project' as const,
    titleEn: 'Day 195: deployment',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 195: deployment',
    topic: 'deployment',
    objectiveEn: 'Learn and apply deployment as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم deployment وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 195 covers deployment. App Router, server/client components, data fetching, auth, and deployment. Work through deployment with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 195 موضوع deployment ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على deployment بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind deployment', ar: 'ادرس الأفكار الأساسية لـ deployment' },
        { en: 'Practice deployment with a small hands-on task', ar: 'تدرّب على deployment بمهمة عملية صغيرة' },
        { en: 'Plan a small project that exercises deployment', ar: 'خطّط لمشروع صغير يطبّق deployment' }
    ],
    exerciseEn: 'Apply deployment in a short exercise and record each step you took.',
    exerciseAr: 'طبّق deployment في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating deployment.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح deployment.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your deployment work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في deployment بتحسين واحد ووثّق النتيجة.',
    prerequisites: [194],
    criteriaEn: ['Can explain deployment', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح deployment', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 196,
    phaseSlug: 'nextjs',
    kind: 'lesson' as const,
    titleEn: 'Day 196: App Router',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 196: App Router',
    topic: 'App Router',
    objectiveEn: 'Learn and apply App Router as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم App Router وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 196 covers App Router. App Router, server/client components, data fetching, auth, and deployment. Work through App Router with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 196 موضوع App Router ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على App Router بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind App Router', ar: 'ادرس الأفكار الأساسية لـ App Router' },
        { en: 'Practice App Router with a small hands-on task', ar: 'تدرّب على App Router بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply App Router in a short exercise and record each step you took.',
    exerciseAr: 'طبّق App Router في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating App Router.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح App Router.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your App Router work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في App Router بتحسين واحد ووثّق النتيجة.',
    prerequisites: [195],
    criteriaEn: ['Can explain App Router', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح App Router', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 197,
    phaseSlug: 'nextjs',
    kind: 'lesson' as const,
    titleEn: 'Day 197: server/client components',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 197: server/client components',
    topic: 'server/client components',
    objectiveEn: 'Learn and apply server/client components as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم server/client components وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 197 covers server/client components. App Router, server/client components, data fetching, auth, and deployment. Work through server/client components with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 197 موضوع server/client components ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على server/client components بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind server/client components', ar: 'ادرس الأفكار الأساسية لـ server/client components' },
        { en: 'Practice server/client components with a small hands-on task', ar: 'تدرّب على server/client components بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply server/client components in a short exercise and record each step you took.',
    exerciseAr: 'طبّق server/client components في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating server/client components.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح server/client components.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your server/client components work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في server/client components بتحسين واحد ووثّق النتيجة.',
    prerequisites: [196],
    criteriaEn: ['Can explain server/client components', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح server/client components', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 198,
    phaseSlug: 'nextjs',
    kind: 'practice' as const,
    titleEn: 'Day 198: data fetching',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 198: data fetching',
    topic: 'data fetching',
    objectiveEn: 'Learn and apply data fetching as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم data fetching وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 198 covers data fetching. App Router, server/client components, data fetching, auth, and deployment. Work through data fetching with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 198 موضوع data fetching ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على data fetching بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind data fetching', ar: 'ادرس الأفكار الأساسية لـ data fetching' },
        { en: 'Practice data fetching with a small hands-on task', ar: 'تدرّب على data fetching بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply data fetching in a short exercise and record each step you took.',
    exerciseAr: 'طبّق data fetching في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating data fetching.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح data fetching.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your data fetching work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في data fetching بتحسين واحد ووثّق النتيجة.',
    prerequisites: [197],
    criteriaEn: ['Can explain data fetching', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح data fetching', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 199,
    phaseSlug: 'nextjs',
    kind: 'lesson' as const,
    titleEn: 'Day 199: auth',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 199: auth',
    topic: 'auth',
    objectiveEn: 'Learn and apply auth as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم auth وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 199 covers auth. App Router, server/client components, data fetching, auth, and deployment. Work through auth with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 199 موضوع auth ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على auth بمثال عملي وسجّل ملاحظاتك.',
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
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your auth work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في auth بتحسين واحد ووثّق النتيجة.',
    prerequisites: [198],
    criteriaEn: ['Can explain auth', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح auth', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 200,
    phaseSlug: 'nextjs',
    kind: 'review' as const,
    titleEn: 'Day 200: deployment',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 200: deployment',
    topic: 'deployment',
    objectiveEn: 'Learn and apply deployment as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم deployment وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 200 covers deployment. App Router, server/client components, data fetching, auth, and deployment. Work through deployment with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 200 موضوع deployment ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على deployment بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 60,
    tasks: [
        { en: 'Study the core ideas behind deployment', ar: 'ادرس الأفكار الأساسية لـ deployment' },
        { en: 'Practice deployment with a small hands-on task', ar: 'تدرّب على deployment بمهمة عملية صغيرة' },
        { en: 'Review your recent notes and list key takeaways', ar: 'راجع ملاحظاتك الأخيرة واستخرج النقاط الرئيسية' }
    ],
    exerciseEn: 'Apply deployment in a short exercise and record each step you took.',
    exerciseAr: 'طبّق deployment في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating deployment.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح deployment.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your deployment work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في deployment بتحسين واحد ووثّق النتيجة.',
    prerequisites: [199],
    criteriaEn: ['Can explain deployment', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح deployment', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 201,
    phaseSlug: 'nextjs',
    kind: 'practice' as const,
    titleEn: 'Day 201: App Router',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 201: App Router',
    topic: 'App Router',
    objectiveEn: 'Learn and apply App Router as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم App Router وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 201 covers App Router. App Router, server/client components, data fetching, auth, and deployment. Work through App Router with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 201 موضوع App Router ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على App Router بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind App Router', ar: 'ادرس الأفكار الأساسية لـ App Router' },
        { en: 'Practice App Router with a small hands-on task', ar: 'تدرّب على App Router بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply App Router in a short exercise and record each step you took.',
    exerciseAr: 'طبّق App Router في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating App Router.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح App Router.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your App Router work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في App Router بتحسين واحد ووثّق النتيجة.',
    prerequisites: [200],
    criteriaEn: ['Can explain App Router', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح App Router', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 202,
    phaseSlug: 'nextjs',
    kind: 'lesson' as const,
    titleEn: 'Day 202: server/client components',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 202: server/client components',
    topic: 'server/client components',
    objectiveEn: 'Learn and apply server/client components as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم server/client components وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 202 covers server/client components. App Router, server/client components, data fetching, auth, and deployment. Work through server/client components with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 202 موضوع server/client components ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على server/client components بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind server/client components', ar: 'ادرس الأفكار الأساسية لـ server/client components' },
        { en: 'Practice server/client components with a small hands-on task', ar: 'تدرّب على server/client components بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply server/client components in a short exercise and record each step you took.',
    exerciseAr: 'طبّق server/client components في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating server/client components.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح server/client components.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your server/client components work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في server/client components بتحسين واحد ووثّق النتيجة.',
    prerequisites: [201],
    criteriaEn: ['Can explain server/client components', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح server/client components', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 203,
    phaseSlug: 'nextjs',
    kind: 'lesson' as const,
    titleEn: 'Day 203: data fetching',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 203: data fetching',
    topic: 'data fetching',
    objectiveEn: 'Learn and apply data fetching as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم data fetching وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 203 covers data fetching. App Router, server/client components, data fetching, auth, and deployment. Work through data fetching with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 203 موضوع data fetching ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على data fetching بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind data fetching', ar: 'ادرس الأفكار الأساسية لـ data fetching' },
        { en: 'Practice data fetching with a small hands-on task', ar: 'تدرّب على data fetching بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply data fetching in a short exercise and record each step you took.',
    exerciseAr: 'طبّق data fetching في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating data fetching.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح data fetching.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your data fetching work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في data fetching بتحسين واحد ووثّق النتيجة.',
    prerequisites: [202],
    criteriaEn: ['Can explain data fetching', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح data fetching', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 204,
    phaseSlug: 'nextjs',
    kind: 'practice' as const,
    titleEn: 'Day 204: auth',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 204: auth',
    topic: 'auth',
    objectiveEn: 'Learn and apply auth as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم auth وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 204 covers auth. App Router, server/client components, data fetching, auth, and deployment. Work through auth with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 204 موضوع auth ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على auth بمثال عملي وسجّل ملاحظاتك.',
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
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your auth work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في auth بتحسين واحد ووثّق النتيجة.',
    prerequisites: [203],
    criteriaEn: ['Can explain auth', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح auth', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 205,
    phaseSlug: 'nextjs',
    kind: 'project' as const,
    titleEn: 'Day 205: deployment',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 205: deployment',
    topic: 'deployment',
    objectiveEn: 'Learn and apply deployment as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم deployment وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 205 covers deployment. App Router, server/client components, data fetching, auth, and deployment. Work through deployment with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 205 موضوع deployment ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على deployment بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind deployment', ar: 'ادرس الأفكار الأساسية لـ deployment' },
        { en: 'Practice deployment with a small hands-on task', ar: 'تدرّب على deployment بمهمة عملية صغيرة' },
        { en: 'Plan a small project that exercises deployment', ar: 'خطّط لمشروع صغير يطبّق deployment' }
    ],
    exerciseEn: 'Apply deployment in a short exercise and record each step you took.',
    exerciseAr: 'طبّق deployment في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating deployment.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح deployment.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your deployment work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في deployment بتحسين واحد ووثّق النتيجة.',
    prerequisites: [204],
    criteriaEn: ['Can explain deployment', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح deployment', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 206,
    phaseSlug: 'nextjs',
    kind: 'lesson' as const,
    titleEn: 'Day 206: App Router',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 206: App Router',
    topic: 'App Router',
    objectiveEn: 'Learn and apply App Router as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم App Router وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 206 covers App Router. App Router, server/client components, data fetching, auth, and deployment. Work through App Router with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 206 موضوع App Router ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على App Router بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind App Router', ar: 'ادرس الأفكار الأساسية لـ App Router' },
        { en: 'Practice App Router with a small hands-on task', ar: 'تدرّب على App Router بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply App Router in a short exercise and record each step you took.',
    exerciseAr: 'طبّق App Router في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating App Router.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح App Router.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your App Router work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في App Router بتحسين واحد ووثّق النتيجة.',
    prerequisites: [205],
    criteriaEn: ['Can explain App Router', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح App Router', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 207,
    phaseSlug: 'nextjs',
    kind: 'practice' as const,
    titleEn: 'Day 207: server/client components',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 207: server/client components',
    topic: 'server/client components',
    objectiveEn: 'Learn and apply server/client components as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم server/client components وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 207 covers server/client components. App Router, server/client components, data fetching, auth, and deployment. Work through server/client components with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 207 موضوع server/client components ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على server/client components بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind server/client components', ar: 'ادرس الأفكار الأساسية لـ server/client components' },
        { en: 'Practice server/client components with a small hands-on task', ar: 'تدرّب على server/client components بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply server/client components in a short exercise and record each step you took.',
    exerciseAr: 'طبّق server/client components في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating server/client components.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح server/client components.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your server/client components work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في server/client components بتحسين واحد ووثّق النتيجة.',
    prerequisites: [206],
    criteriaEn: ['Can explain server/client components', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح server/client components', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 208,
    phaseSlug: 'nextjs',
    kind: 'lesson' as const,
    titleEn: 'Day 208: data fetching',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 208: data fetching',
    topic: 'data fetching',
    objectiveEn: 'Learn and apply data fetching as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم data fetching وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 208 covers data fetching. App Router, server/client components, data fetching, auth, and deployment. Work through data fetching with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 208 موضوع data fetching ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على data fetching بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind data fetching', ar: 'ادرس الأفكار الأساسية لـ data fetching' },
        { en: 'Practice data fetching with a small hands-on task', ar: 'تدرّب على data fetching بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply data fetching in a short exercise and record each step you took.',
    exerciseAr: 'طبّق data fetching في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating data fetching.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح data fetching.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your data fetching work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في data fetching بتحسين واحد ووثّق النتيجة.',
    prerequisites: [207],
    criteriaEn: ['Can explain data fetching', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح data fetching', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 209,
    phaseSlug: 'nextjs',
    kind: 'lesson' as const,
    titleEn: 'Day 209: auth',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 209: auth',
    topic: 'auth',
    objectiveEn: 'Learn and apply auth as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم auth وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 209 covers auth. App Router, server/client components, data fetching, auth, and deployment. Work through auth with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 209 موضوع auth ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على auth بمثال عملي وسجّل ملاحظاتك.',
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
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your auth work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في auth بتحسين واحد ووثّق النتيجة.',
    prerequisites: [208],
    criteriaEn: ['Can explain auth', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح auth', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 210,
    phaseSlug: 'nextjs',
    kind: 'review' as const,
    titleEn: 'Day 210: deployment',
    titleAr: 'Next.js وأنماط العمل الكامل — اليوم 210: deployment',
    topic: 'deployment',
    objectiveEn: 'Learn and apply deployment as part of Next.js & Full-Stack Patterns.',
    objectiveAr: 'تعلّم deployment وتطبّقه في Next.js وأنماط العمل الكامل.',
    lessonEn: 'Day 210 covers deployment. App Router, server/client components, data fetching, auth, and deployment. Work through deployment with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 210 موضوع deployment ضمن Next.js وأنماط العمل الكامل. App Router ومكوّنات الخادم والعميل وجلب البيانات والمصادقة والنشر. اعمل على deployment بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 60,
    tasks: [
        { en: 'Study the core ideas behind deployment', ar: 'ادرس الأفكار الأساسية لـ deployment' },
        { en: 'Practice deployment with a small hands-on task', ar: 'تدرّب على deployment بمهمة عملية صغيرة' },
        { en: 'Review your recent notes and list key takeaways', ar: 'راجع ملاحظاتك الأخيرة واستخرج النقاط الرئيسية' }
    ],
    exerciseEn: 'Apply deployment in a short exercise and record each step you took.',
    exerciseAr: 'طبّق deployment في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating deployment.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح deployment.',
    resources: [
      { title: 'Next.js docs', url: 'https://nextjs.org/docs', kind: 'official' }
    ],
    challengeEn: 'Extend your deployment work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في deployment بتحسين واحد ووثّق النتيجة.',
    prerequisites: [209],
    criteriaEn: ['Can explain deployment', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح deployment', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
]
