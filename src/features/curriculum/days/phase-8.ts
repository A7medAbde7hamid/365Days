import type { CurriculumDay } from '../types'

/** Phase 8 — TypeScript, Testing & Security (days 211–240). */
export const PHASE_8_DAYS: CurriculumDay[] = [
  {
    dayNumber: 211,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'Day 211: Types',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 211: Types',
    topic: 'Types',
    objectiveEn: 'Learn and apply Types as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم Types وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 211 covers Types. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through Types with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 211 موضوع Types ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على Types بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Types', ar: 'ادرس الأفكار الأساسية لـ Types' },
        { en: 'Practice Types with a small hands-on task', ar: 'تدرّب على Types بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Types in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Types في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Types.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Types.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your Types work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Types بتحسين واحد ووثّق النتيجة.',
    prerequisites: [],
    criteriaEn: ['Can explain Types', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Types', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 212,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'Day 212: generics',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 212: generics',
    topic: 'generics',
    objectiveEn: 'Learn and apply generics as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم generics وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 212 covers generics. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through generics with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 212 موضوع generics ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على generics بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind generics', ar: 'ادرس الأفكار الأساسية لـ generics' },
        { en: 'Practice generics with a small hands-on task', ar: 'تدرّب على generics بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply generics in a short exercise and record each step you took.',
    exerciseAr: 'طبّق generics في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating generics.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح generics.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your generics work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في generics بتحسين واحد ووثّق النتيجة.',
    prerequisites: [211],
    criteriaEn: ['Can explain generics', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح generics', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 213,
    phaseSlug: 'typescript-testing-security',
    kind: 'practice' as const,
    titleEn: 'Day 213: Vitest',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 213: Vitest',
    topic: 'Vitest',
    objectiveEn: 'Learn and apply Vitest as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم Vitest وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 213 covers Vitest. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through Vitest with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 213 موضوع Vitest ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على Vitest بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind Vitest', ar: 'ادرس الأفكار الأساسية لـ Vitest' },
        { en: 'Practice Vitest with a small hands-on task', ar: 'تدرّب على Vitest بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Vitest in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Vitest في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Vitest.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Vitest.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your Vitest work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Vitest بتحسين واحد ووثّق النتيجة.',
    prerequisites: [212],
    criteriaEn: ['Can explain Vitest', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Vitest', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 214,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'Day 214: Playwright',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 214: Playwright',
    topic: 'Playwright',
    objectiveEn: 'Learn and apply Playwright as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم Playwright وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 214 covers Playwright. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through Playwright with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 214 موضوع Playwright ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على Playwright بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Playwright', ar: 'ادرس الأفكار الأساسية لـ Playwright' },
        { en: 'Practice Playwright with a small hands-on task', ar: 'تدرّب على Playwright بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Playwright in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Playwright في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Playwright.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Playwright.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your Playwright work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Playwright بتحسين واحد ووثّق النتيجة.',
    prerequisites: [213],
    criteriaEn: ['Can explain Playwright', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Playwright', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 215,
    phaseSlug: 'typescript-testing-security',
    kind: 'project' as const,
    titleEn: 'Day 215: common web vulnerabilities',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 215: common web vulnerabilities',
    topic: 'common web vulnerabilities',
    objectiveEn: 'Learn and apply common web vulnerabilities as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم common web vulnerabilities وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 215 covers common web vulnerabilities. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through common web vulnerabilities with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 215 موضوع common web vulnerabilities ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على common web vulnerabilities بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind common web vulnerabilities', ar: 'ادرس الأفكار الأساسية لـ common web vulnerabilities' },
        { en: 'Practice common web vulnerabilities with a small hands-on task', ar: 'تدرّب على common web vulnerabilities بمهمة عملية صغيرة' },
        { en: 'Plan a small project that exercises common web vulnerabilities', ar: 'خطّط لمشروع صغير يطبّق common web vulnerabilities' }
    ],
    exerciseEn: 'Apply common web vulnerabilities in a short exercise and record each step you took.',
    exerciseAr: 'طبّق common web vulnerabilities في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating common web vulnerabilities.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح common web vulnerabilities.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your common web vulnerabilities work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في common web vulnerabilities بتحسين واحد ووثّق النتيجة.',
    prerequisites: [214],
    criteriaEn: ['Can explain common web vulnerabilities', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح common web vulnerabilities', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 216,
    phaseSlug: 'typescript-testing-security',
    kind: 'practice' as const,
    titleEn: 'Day 216: Types',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 216: Types',
    topic: 'Types',
    objectiveEn: 'Learn and apply Types as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم Types وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 216 covers Types. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through Types with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 216 موضوع Types ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على Types بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind Types', ar: 'ادرس الأفكار الأساسية لـ Types' },
        { en: 'Practice Types with a small hands-on task', ar: 'تدرّب على Types بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Types in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Types في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Types.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Types.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your Types work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Types بتحسين واحد ووثّق النتيجة.',
    prerequisites: [215],
    criteriaEn: ['Can explain Types', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Types', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 217,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'Day 217: generics',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 217: generics',
    topic: 'generics',
    objectiveEn: 'Learn and apply generics as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم generics وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 217 covers generics. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through generics with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 217 موضوع generics ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على generics بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind generics', ar: 'ادرس الأفكار الأساسية لـ generics' },
        { en: 'Practice generics with a small hands-on task', ar: 'تدرّب على generics بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply generics in a short exercise and record each step you took.',
    exerciseAr: 'طبّق generics في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating generics.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح generics.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your generics work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في generics بتحسين واحد ووثّق النتيجة.',
    prerequisites: [216],
    criteriaEn: ['Can explain generics', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح generics', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 218,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'Day 218: Vitest',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 218: Vitest',
    topic: 'Vitest',
    objectiveEn: 'Learn and apply Vitest as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم Vitest وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 218 covers Vitest. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through Vitest with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 218 موضوع Vitest ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على Vitest بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Vitest', ar: 'ادرس الأفكار الأساسية لـ Vitest' },
        { en: 'Practice Vitest with a small hands-on task', ar: 'تدرّب على Vitest بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Vitest in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Vitest في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Vitest.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Vitest.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your Vitest work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Vitest بتحسين واحد ووثّق النتيجة.',
    prerequisites: [217],
    criteriaEn: ['Can explain Vitest', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Vitest', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 219,
    phaseSlug: 'typescript-testing-security',
    kind: 'practice' as const,
    titleEn: 'Day 219: Playwright',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 219: Playwright',
    topic: 'Playwright',
    objectiveEn: 'Learn and apply Playwright as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم Playwright وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 219 covers Playwright. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through Playwright with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 219 موضوع Playwright ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على Playwright بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind Playwright', ar: 'ادرس الأفكار الأساسية لـ Playwright' },
        { en: 'Practice Playwright with a small hands-on task', ar: 'تدرّب على Playwright بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Playwright in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Playwright في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Playwright.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Playwright.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your Playwright work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Playwright بتحسين واحد ووثّق النتيجة.',
    prerequisites: [218],
    criteriaEn: ['Can explain Playwright', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Playwright', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 220,
    phaseSlug: 'typescript-testing-security',
    kind: 'review' as const,
    titleEn: 'Day 220: common web vulnerabilities',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 220: common web vulnerabilities',
    topic: 'common web vulnerabilities',
    objectiveEn: 'Learn and apply common web vulnerabilities as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم common web vulnerabilities وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 220 covers common web vulnerabilities. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through common web vulnerabilities with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 220 موضوع common web vulnerabilities ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على common web vulnerabilities بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 60,
    tasks: [
        { en: 'Study the core ideas behind common web vulnerabilities', ar: 'ادرس الأفكار الأساسية لـ common web vulnerabilities' },
        { en: 'Practice common web vulnerabilities with a small hands-on task', ar: 'تدرّب على common web vulnerabilities بمهمة عملية صغيرة' },
        { en: 'Review your recent notes and list key takeaways', ar: 'راجع ملاحظاتك الأخيرة واستخرج النقاط الرئيسية' }
    ],
    exerciseEn: 'Apply common web vulnerabilities in a short exercise and record each step you took.',
    exerciseAr: 'طبّق common web vulnerabilities في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating common web vulnerabilities.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح common web vulnerabilities.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your common web vulnerabilities work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في common web vulnerabilities بتحسين واحد ووثّق النتيجة.',
    prerequisites: [219],
    criteriaEn: ['Can explain common web vulnerabilities', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح common web vulnerabilities', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 221,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'Day 221: Types',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 221: Types',
    topic: 'Types',
    objectiveEn: 'Learn and apply Types as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم Types وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 221 covers Types. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through Types with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 221 موضوع Types ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على Types بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Types', ar: 'ادرس الأفكار الأساسية لـ Types' },
        { en: 'Practice Types with a small hands-on task', ar: 'تدرّب على Types بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Types in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Types في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Types.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Types.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your Types work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Types بتحسين واحد ووثّق النتيجة.',
    prerequisites: [220],
    criteriaEn: ['Can explain Types', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Types', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 222,
    phaseSlug: 'typescript-testing-security',
    kind: 'practice' as const,
    titleEn: 'Day 222: generics',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 222: generics',
    topic: 'generics',
    objectiveEn: 'Learn and apply generics as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم generics وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 222 covers generics. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through generics with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 222 موضوع generics ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على generics بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind generics', ar: 'ادرس الأفكار الأساسية لـ generics' },
        { en: 'Practice generics with a small hands-on task', ar: 'تدرّب على generics بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply generics in a short exercise and record each step you took.',
    exerciseAr: 'طبّق generics في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating generics.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح generics.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your generics work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في generics بتحسين واحد ووثّق النتيجة.',
    prerequisites: [221],
    criteriaEn: ['Can explain generics', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح generics', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 223,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'Day 223: Vitest',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 223: Vitest',
    topic: 'Vitest',
    objectiveEn: 'Learn and apply Vitest as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم Vitest وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 223 covers Vitest. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through Vitest with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 223 موضوع Vitest ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على Vitest بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Vitest', ar: 'ادرس الأفكار الأساسية لـ Vitest' },
        { en: 'Practice Vitest with a small hands-on task', ar: 'تدرّب على Vitest بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Vitest in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Vitest في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Vitest.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Vitest.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your Vitest work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Vitest بتحسين واحد ووثّق النتيجة.',
    prerequisites: [222],
    criteriaEn: ['Can explain Vitest', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Vitest', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 224,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'Day 224: Playwright',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 224: Playwright',
    topic: 'Playwright',
    objectiveEn: 'Learn and apply Playwright as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم Playwright وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 224 covers Playwright. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through Playwright with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 224 موضوع Playwright ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على Playwright بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Playwright', ar: 'ادرس الأفكار الأساسية لـ Playwright' },
        { en: 'Practice Playwright with a small hands-on task', ar: 'تدرّب على Playwright بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Playwright in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Playwright في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Playwright.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Playwright.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your Playwright work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Playwright بتحسين واحد ووثّق النتيجة.',
    prerequisites: [223],
    criteriaEn: ['Can explain Playwright', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Playwright', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 225,
    phaseSlug: 'typescript-testing-security',
    kind: 'project' as const,
    titleEn: 'Day 225: common web vulnerabilities',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 225: common web vulnerabilities',
    topic: 'common web vulnerabilities',
    objectiveEn: 'Learn and apply common web vulnerabilities as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم common web vulnerabilities وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 225 covers common web vulnerabilities. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through common web vulnerabilities with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 225 موضوع common web vulnerabilities ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على common web vulnerabilities بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind common web vulnerabilities', ar: 'ادرس الأفكار الأساسية لـ common web vulnerabilities' },
        { en: 'Practice common web vulnerabilities with a small hands-on task', ar: 'تدرّب على common web vulnerabilities بمهمة عملية صغيرة' },
        { en: 'Plan a small project that exercises common web vulnerabilities', ar: 'خطّط لمشروع صغير يطبّق common web vulnerabilities' }
    ],
    exerciseEn: 'Apply common web vulnerabilities in a short exercise and record each step you took.',
    exerciseAr: 'طبّق common web vulnerabilities في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating common web vulnerabilities.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح common web vulnerabilities.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your common web vulnerabilities work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في common web vulnerabilities بتحسين واحد ووثّق النتيجة.',
    prerequisites: [224],
    criteriaEn: ['Can explain common web vulnerabilities', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح common web vulnerabilities', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 226,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'Day 226: Types',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 226: Types',
    topic: 'Types',
    objectiveEn: 'Learn and apply Types as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم Types وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 226 covers Types. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through Types with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 226 موضوع Types ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على Types بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Types', ar: 'ادرس الأفكار الأساسية لـ Types' },
        { en: 'Practice Types with a small hands-on task', ar: 'تدرّب على Types بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Types in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Types في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Types.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Types.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your Types work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Types بتحسين واحد ووثّق النتيجة.',
    prerequisites: [225],
    criteriaEn: ['Can explain Types', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Types', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 227,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'Day 227: generics',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 227: generics',
    topic: 'generics',
    objectiveEn: 'Learn and apply generics as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم generics وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 227 covers generics. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through generics with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 227 موضوع generics ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على generics بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind generics', ar: 'ادرس الأفكار الأساسية لـ generics' },
        { en: 'Practice generics with a small hands-on task', ar: 'تدرّب على generics بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply generics in a short exercise and record each step you took.',
    exerciseAr: 'طبّق generics في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating generics.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح generics.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your generics work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في generics بتحسين واحد ووثّق النتيجة.',
    prerequisites: [226],
    criteriaEn: ['Can explain generics', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح generics', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 228,
    phaseSlug: 'typescript-testing-security',
    kind: 'practice' as const,
    titleEn: 'Day 228: Vitest',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 228: Vitest',
    topic: 'Vitest',
    objectiveEn: 'Learn and apply Vitest as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم Vitest وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 228 covers Vitest. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through Vitest with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 228 موضوع Vitest ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على Vitest بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind Vitest', ar: 'ادرس الأفكار الأساسية لـ Vitest' },
        { en: 'Practice Vitest with a small hands-on task', ar: 'تدرّب على Vitest بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Vitest in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Vitest في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Vitest.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Vitest.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your Vitest work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Vitest بتحسين واحد ووثّق النتيجة.',
    prerequisites: [227],
    criteriaEn: ['Can explain Vitest', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Vitest', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 229,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'Day 229: Playwright',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 229: Playwright',
    topic: 'Playwright',
    objectiveEn: 'Learn and apply Playwright as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم Playwright وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 229 covers Playwright. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through Playwright with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 229 موضوع Playwright ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على Playwright بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Playwright', ar: 'ادرس الأفكار الأساسية لـ Playwright' },
        { en: 'Practice Playwright with a small hands-on task', ar: 'تدرّب على Playwright بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Playwright in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Playwright في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Playwright.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Playwright.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your Playwright work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Playwright بتحسين واحد ووثّق النتيجة.',
    prerequisites: [228],
    criteriaEn: ['Can explain Playwright', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Playwright', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 230,
    phaseSlug: 'typescript-testing-security',
    kind: 'review' as const,
    titleEn: 'Day 230: common web vulnerabilities',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 230: common web vulnerabilities',
    topic: 'common web vulnerabilities',
    objectiveEn: 'Learn and apply common web vulnerabilities as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم common web vulnerabilities وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 230 covers common web vulnerabilities. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through common web vulnerabilities with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 230 موضوع common web vulnerabilities ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على common web vulnerabilities بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 60,
    tasks: [
        { en: 'Study the core ideas behind common web vulnerabilities', ar: 'ادرس الأفكار الأساسية لـ common web vulnerabilities' },
        { en: 'Practice common web vulnerabilities with a small hands-on task', ar: 'تدرّب على common web vulnerabilities بمهمة عملية صغيرة' },
        { en: 'Review your recent notes and list key takeaways', ar: 'راجع ملاحظاتك الأخيرة واستخرج النقاط الرئيسية' }
    ],
    exerciseEn: 'Apply common web vulnerabilities in a short exercise and record each step you took.',
    exerciseAr: 'طبّق common web vulnerabilities في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating common web vulnerabilities.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح common web vulnerabilities.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your common web vulnerabilities work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في common web vulnerabilities بتحسين واحد ووثّق النتيجة.',
    prerequisites: [229],
    criteriaEn: ['Can explain common web vulnerabilities', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح common web vulnerabilities', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 231,
    phaseSlug: 'typescript-testing-security',
    kind: 'practice' as const,
    titleEn: 'Day 231: Types',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 231: Types',
    topic: 'Types',
    objectiveEn: 'Learn and apply Types as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم Types وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 231 covers Types. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through Types with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 231 موضوع Types ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على Types بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind Types', ar: 'ادرس الأفكار الأساسية لـ Types' },
        { en: 'Practice Types with a small hands-on task', ar: 'تدرّب على Types بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Types in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Types في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Types.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Types.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your Types work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Types بتحسين واحد ووثّق النتيجة.',
    prerequisites: [230],
    criteriaEn: ['Can explain Types', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Types', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 232,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'Day 232: generics',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 232: generics',
    topic: 'generics',
    objectiveEn: 'Learn and apply generics as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم generics وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 232 covers generics. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through generics with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 232 موضوع generics ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على generics بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind generics', ar: 'ادرس الأفكار الأساسية لـ generics' },
        { en: 'Practice generics with a small hands-on task', ar: 'تدرّب على generics بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply generics in a short exercise and record each step you took.',
    exerciseAr: 'طبّق generics في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating generics.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح generics.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your generics work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في generics بتحسين واحد ووثّق النتيجة.',
    prerequisites: [231],
    criteriaEn: ['Can explain generics', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح generics', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 233,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'Day 233: Vitest',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 233: Vitest',
    topic: 'Vitest',
    objectiveEn: 'Learn and apply Vitest as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم Vitest وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 233 covers Vitest. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through Vitest with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 233 موضوع Vitest ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على Vitest بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Vitest', ar: 'ادرس الأفكار الأساسية لـ Vitest' },
        { en: 'Practice Vitest with a small hands-on task', ar: 'تدرّب على Vitest بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Vitest in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Vitest في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Vitest.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Vitest.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your Vitest work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Vitest بتحسين واحد ووثّق النتيجة.',
    prerequisites: [232],
    criteriaEn: ['Can explain Vitest', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Vitest', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 234,
    phaseSlug: 'typescript-testing-security',
    kind: 'practice' as const,
    titleEn: 'Day 234: Playwright',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 234: Playwright',
    topic: 'Playwright',
    objectiveEn: 'Learn and apply Playwright as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم Playwright وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 234 covers Playwright. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through Playwright with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 234 موضوع Playwright ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على Playwright بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind Playwright', ar: 'ادرس الأفكار الأساسية لـ Playwright' },
        { en: 'Practice Playwright with a small hands-on task', ar: 'تدرّب على Playwright بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Playwright in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Playwright في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Playwright.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Playwright.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your Playwright work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Playwright بتحسين واحد ووثّق النتيجة.',
    prerequisites: [233],
    criteriaEn: ['Can explain Playwright', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Playwright', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 235,
    phaseSlug: 'typescript-testing-security',
    kind: 'project' as const,
    titleEn: 'Day 235: common web vulnerabilities',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 235: common web vulnerabilities',
    topic: 'common web vulnerabilities',
    objectiveEn: 'Learn and apply common web vulnerabilities as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم common web vulnerabilities وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 235 covers common web vulnerabilities. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through common web vulnerabilities with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 235 موضوع common web vulnerabilities ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على common web vulnerabilities بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind common web vulnerabilities', ar: 'ادرس الأفكار الأساسية لـ common web vulnerabilities' },
        { en: 'Practice common web vulnerabilities with a small hands-on task', ar: 'تدرّب على common web vulnerabilities بمهمة عملية صغيرة' },
        { en: 'Plan a small project that exercises common web vulnerabilities', ar: 'خطّط لمشروع صغير يطبّق common web vulnerabilities' }
    ],
    exerciseEn: 'Apply common web vulnerabilities in a short exercise and record each step you took.',
    exerciseAr: 'طبّق common web vulnerabilities في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating common web vulnerabilities.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح common web vulnerabilities.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your common web vulnerabilities work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في common web vulnerabilities بتحسين واحد ووثّق النتيجة.',
    prerequisites: [234],
    criteriaEn: ['Can explain common web vulnerabilities', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح common web vulnerabilities', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 236,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'Day 236: Types',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 236: Types',
    topic: 'Types',
    objectiveEn: 'Learn and apply Types as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم Types وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 236 covers Types. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through Types with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 236 موضوع Types ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على Types بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Types', ar: 'ادرس الأفكار الأساسية لـ Types' },
        { en: 'Practice Types with a small hands-on task', ar: 'تدرّب على Types بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Types in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Types في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Types.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Types.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your Types work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Types بتحسين واحد ووثّق النتيجة.',
    prerequisites: [235],
    criteriaEn: ['Can explain Types', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Types', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 237,
    phaseSlug: 'typescript-testing-security',
    kind: 'practice' as const,
    titleEn: 'Day 237: generics',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 237: generics',
    topic: 'generics',
    objectiveEn: 'Learn and apply generics as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم generics وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 237 covers generics. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through generics with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 237 موضوع generics ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على generics بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind generics', ar: 'ادرس الأفكار الأساسية لـ generics' },
        { en: 'Practice generics with a small hands-on task', ar: 'تدرّب على generics بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply generics in a short exercise and record each step you took.',
    exerciseAr: 'طبّق generics في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating generics.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح generics.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your generics work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في generics بتحسين واحد ووثّق النتيجة.',
    prerequisites: [236],
    criteriaEn: ['Can explain generics', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح generics', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 238,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'Day 238: Vitest',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 238: Vitest',
    topic: 'Vitest',
    objectiveEn: 'Learn and apply Vitest as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم Vitest وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 238 covers Vitest. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through Vitest with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 238 موضوع Vitest ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على Vitest بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Vitest', ar: 'ادرس الأفكار الأساسية لـ Vitest' },
        { en: 'Practice Vitest with a small hands-on task', ar: 'تدرّب على Vitest بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Vitest in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Vitest في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Vitest.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Vitest.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your Vitest work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Vitest بتحسين واحد ووثّق النتيجة.',
    prerequisites: [237],
    criteriaEn: ['Can explain Vitest', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Vitest', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 239,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'Day 239: Playwright',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 239: Playwright',
    topic: 'Playwright',
    objectiveEn: 'Learn and apply Playwright as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم Playwright وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 239 covers Playwright. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through Playwright with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 239 موضوع Playwright ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على Playwright بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Playwright', ar: 'ادرس الأفكار الأساسية لـ Playwright' },
        { en: 'Practice Playwright with a small hands-on task', ar: 'تدرّب على Playwright بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Playwright in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Playwright في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Playwright.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Playwright.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your Playwright work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Playwright بتحسين واحد ووثّق النتيجة.',
    prerequisites: [238],
    criteriaEn: ['Can explain Playwright', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Playwright', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 240,
    phaseSlug: 'typescript-testing-security',
    kind: 'review' as const,
    titleEn: 'Day 240: common web vulnerabilities',
    titleAr: 'TypeScript والاختبارات والأمان — اليوم 240: common web vulnerabilities',
    topic: 'common web vulnerabilities',
    objectiveEn: 'Learn and apply common web vulnerabilities as part of TypeScript, Testing & Security.',
    objectiveAr: 'تعلّم common web vulnerabilities وتطبّقه في TypeScript والاختبارات والأمان.',
    lessonEn: 'Day 240 covers common web vulnerabilities. Types and generics, Vitest, Playwright, and common web vulnerabilities. Work through common web vulnerabilities with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 240 موضوع common web vulnerabilities ضمن TypeScript والاختبارات والأمان. الأنواع والـ generics و Vitest و Playwright والثغرات الشائعة. اعمل على common web vulnerabilities بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 60,
    tasks: [
        { en: 'Study the core ideas behind common web vulnerabilities', ar: 'ادرس الأفكار الأساسية لـ common web vulnerabilities' },
        { en: 'Practice common web vulnerabilities with a small hands-on task', ar: 'تدرّب على common web vulnerabilities بمهمة عملية صغيرة' },
        { en: 'Review your recent notes and list key takeaways', ar: 'راجع ملاحظاتك الأخيرة واستخرج النقاط الرئيسية' }
    ],
    exerciseEn: 'Apply common web vulnerabilities in a short exercise and record each step you took.',
    exerciseAr: 'طبّق common web vulnerabilities في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating common web vulnerabilities.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح common web vulnerabilities.',
    resources: [
      { title: 'TypeScript handbook', url: 'https://typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Extend your common web vulnerabilities work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في common web vulnerabilities بتحسين واحد ووثّق النتيجة.',
    prerequisites: [239],
    criteriaEn: ['Can explain common web vulnerabilities', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح common web vulnerabilities', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
]
