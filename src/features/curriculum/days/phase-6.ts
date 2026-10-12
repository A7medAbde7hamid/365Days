import type { CurriculumDay } from '../types'

/** Phase 6 — React (days 151–180). */
export const PHASE_6_DAYS: CurriculumDay[] = [
  {
    dayNumber: 151,
    phaseSlug: 'react',
    kind: 'lesson' as const,
    titleEn: 'Day 151: Components',
    titleAr: 'React — اليوم 151: Components',
    topic: 'Components',
    objectiveEn: 'Learn and apply Components as part of React.',
    objectiveAr: 'تعلّم Components وتطبّقه في React.',
    lessonEn: 'Day 151 covers Components. Components, hooks, routing, forms, and loading/error states. Work through Components with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 151 موضوع Components ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على Components بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Components', ar: 'ادرس الأفكار الأساسية لـ Components' },
        { en: 'Practice Components with a small hands-on task', ar: 'تدرّب على Components بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Components in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Components في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Components.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Components.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your Components work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Components بتحسين واحد ووثّق النتيجة.',
    prerequisites: [],
    criteriaEn: ['Can explain Components', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Components', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 152,
    phaseSlug: 'react',
    kind: 'lesson' as const,
    titleEn: 'Day 152: hooks',
    titleAr: 'React — اليوم 152: hooks',
    topic: 'hooks',
    objectiveEn: 'Learn and apply hooks as part of React.',
    objectiveAr: 'تعلّم hooks وتطبّقه في React.',
    lessonEn: 'Day 152 covers hooks. Components, hooks, routing, forms, and loading/error states. Work through hooks with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 152 موضوع hooks ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على hooks بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind hooks', ar: 'ادرس الأفكار الأساسية لـ hooks' },
        { en: 'Practice hooks with a small hands-on task', ar: 'تدرّب على hooks بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply hooks in a short exercise and record each step you took.',
    exerciseAr: 'طبّق hooks في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating hooks.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح hooks.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your hooks work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في hooks بتحسين واحد ووثّق النتيجة.',
    prerequisites: [151],
    criteriaEn: ['Can explain hooks', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح hooks', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 153,
    phaseSlug: 'react',
    kind: 'practice' as const,
    titleEn: 'Day 153: routing',
    titleAr: 'React — اليوم 153: routing',
    topic: 'routing',
    objectiveEn: 'Learn and apply routing as part of React.',
    objectiveAr: 'تعلّم routing وتطبّقه في React.',
    lessonEn: 'Day 153 covers routing. Components, hooks, routing, forms, and loading/error states. Work through routing with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 153 موضوع routing ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على routing بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind routing', ar: 'ادرس الأفكار الأساسية لـ routing' },
        { en: 'Practice routing with a small hands-on task', ar: 'تدرّب على routing بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply routing in a short exercise and record each step you took.',
    exerciseAr: 'طبّق routing في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating routing.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح routing.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your routing work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في routing بتحسين واحد ووثّق النتيجة.',
    prerequisites: [152],
    criteriaEn: ['Can explain routing', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح routing', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 154,
    phaseSlug: 'react',
    kind: 'lesson' as const,
    titleEn: 'Day 154: forms',
    titleAr: 'React — اليوم 154: forms',
    topic: 'forms',
    objectiveEn: 'Learn and apply forms as part of React.',
    objectiveAr: 'تعلّم forms وتطبّقه في React.',
    lessonEn: 'Day 154 covers forms. Components, hooks, routing, forms, and loading/error states. Work through forms with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 154 موضوع forms ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على forms بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind forms', ar: 'ادرس الأفكار الأساسية لـ forms' },
        { en: 'Practice forms with a small hands-on task', ar: 'تدرّب على forms بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply forms in a short exercise and record each step you took.',
    exerciseAr: 'طبّق forms في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating forms.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح forms.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your forms work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في forms بتحسين واحد ووثّق النتيجة.',
    prerequisites: [153],
    criteriaEn: ['Can explain forms', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح forms', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 155,
    phaseSlug: 'react',
    kind: 'project' as const,
    titleEn: 'Day 155: loading/error states',
    titleAr: 'React — اليوم 155: loading/error states',
    topic: 'loading/error states',
    objectiveEn: 'Learn and apply loading/error states as part of React.',
    objectiveAr: 'تعلّم loading/error states وتطبّقه في React.',
    lessonEn: 'Day 155 covers loading/error states. Components, hooks, routing, forms, and loading/error states. Work through loading/error states with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 155 موضوع loading/error states ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على loading/error states بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind loading/error states', ar: 'ادرس الأفكار الأساسية لـ loading/error states' },
        { en: 'Practice loading/error states with a small hands-on task', ar: 'تدرّب على loading/error states بمهمة عملية صغيرة' },
        { en: 'Plan a small project that exercises loading/error states', ar: 'خطّط لمشروع صغير يطبّق loading/error states' }
    ],
    exerciseEn: 'Apply loading/error states in a short exercise and record each step you took.',
    exerciseAr: 'طبّق loading/error states في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating loading/error states.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح loading/error states.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your loading/error states work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في loading/error states بتحسين واحد ووثّق النتيجة.',
    prerequisites: [154],
    criteriaEn: ['Can explain loading/error states', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح loading/error states', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 156,
    phaseSlug: 'react',
    kind: 'practice' as const,
    titleEn: 'Day 156: Components',
    titleAr: 'React — اليوم 156: Components',
    topic: 'Components',
    objectiveEn: 'Learn and apply Components as part of React.',
    objectiveAr: 'تعلّم Components وتطبّقه في React.',
    lessonEn: 'Day 156 covers Components. Components, hooks, routing, forms, and loading/error states. Work through Components with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 156 موضوع Components ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على Components بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind Components', ar: 'ادرس الأفكار الأساسية لـ Components' },
        { en: 'Practice Components with a small hands-on task', ar: 'تدرّب على Components بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Components in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Components في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Components.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Components.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your Components work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Components بتحسين واحد ووثّق النتيجة.',
    prerequisites: [155],
    criteriaEn: ['Can explain Components', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Components', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 157,
    phaseSlug: 'react',
    kind: 'lesson' as const,
    titleEn: 'Day 157: hooks',
    titleAr: 'React — اليوم 157: hooks',
    topic: 'hooks',
    objectiveEn: 'Learn and apply hooks as part of React.',
    objectiveAr: 'تعلّم hooks وتطبّقه في React.',
    lessonEn: 'Day 157 covers hooks. Components, hooks, routing, forms, and loading/error states. Work through hooks with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 157 موضوع hooks ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على hooks بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind hooks', ar: 'ادرس الأفكار الأساسية لـ hooks' },
        { en: 'Practice hooks with a small hands-on task', ar: 'تدرّب على hooks بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply hooks in a short exercise and record each step you took.',
    exerciseAr: 'طبّق hooks في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating hooks.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح hooks.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your hooks work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في hooks بتحسين واحد ووثّق النتيجة.',
    prerequisites: [156],
    criteriaEn: ['Can explain hooks', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح hooks', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 158,
    phaseSlug: 'react',
    kind: 'lesson' as const,
    titleEn: 'Day 158: routing',
    titleAr: 'React — اليوم 158: routing',
    topic: 'routing',
    objectiveEn: 'Learn and apply routing as part of React.',
    objectiveAr: 'تعلّم routing وتطبّقه في React.',
    lessonEn: 'Day 158 covers routing. Components, hooks, routing, forms, and loading/error states. Work through routing with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 158 موضوع routing ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على routing بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind routing', ar: 'ادرس الأفكار الأساسية لـ routing' },
        { en: 'Practice routing with a small hands-on task', ar: 'تدرّب على routing بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply routing in a short exercise and record each step you took.',
    exerciseAr: 'طبّق routing في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating routing.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح routing.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your routing work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في routing بتحسين واحد ووثّق النتيجة.',
    prerequisites: [157],
    criteriaEn: ['Can explain routing', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح routing', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 159,
    phaseSlug: 'react',
    kind: 'practice' as const,
    titleEn: 'Day 159: forms',
    titleAr: 'React — اليوم 159: forms',
    topic: 'forms',
    objectiveEn: 'Learn and apply forms as part of React.',
    objectiveAr: 'تعلّم forms وتطبّقه في React.',
    lessonEn: 'Day 159 covers forms. Components, hooks, routing, forms, and loading/error states. Work through forms with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 159 موضوع forms ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على forms بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind forms', ar: 'ادرس الأفكار الأساسية لـ forms' },
        { en: 'Practice forms with a small hands-on task', ar: 'تدرّب على forms بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply forms in a short exercise and record each step you took.',
    exerciseAr: 'طبّق forms في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating forms.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح forms.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your forms work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في forms بتحسين واحد ووثّق النتيجة.',
    prerequisites: [158],
    criteriaEn: ['Can explain forms', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح forms', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 160,
    phaseSlug: 'react',
    kind: 'review' as const,
    titleEn: 'Day 160: loading/error states',
    titleAr: 'React — اليوم 160: loading/error states',
    topic: 'loading/error states',
    objectiveEn: 'Learn and apply loading/error states as part of React.',
    objectiveAr: 'تعلّم loading/error states وتطبّقه في React.',
    lessonEn: 'Day 160 covers loading/error states. Components, hooks, routing, forms, and loading/error states. Work through loading/error states with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 160 موضوع loading/error states ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على loading/error states بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 60,
    tasks: [
        { en: 'Study the core ideas behind loading/error states', ar: 'ادرس الأفكار الأساسية لـ loading/error states' },
        { en: 'Practice loading/error states with a small hands-on task', ar: 'تدرّب على loading/error states بمهمة عملية صغيرة' },
        { en: 'Review your recent notes and list key takeaways', ar: 'راجع ملاحظاتك الأخيرة واستخرج النقاط الرئيسية' }
    ],
    exerciseEn: 'Apply loading/error states in a short exercise and record each step you took.',
    exerciseAr: 'طبّق loading/error states في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating loading/error states.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح loading/error states.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your loading/error states work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في loading/error states بتحسين واحد ووثّق النتيجة.',
    prerequisites: [159],
    criteriaEn: ['Can explain loading/error states', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح loading/error states', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 161,
    phaseSlug: 'react',
    kind: 'lesson' as const,
    titleEn: 'Day 161: Components',
    titleAr: 'React — اليوم 161: Components',
    topic: 'Components',
    objectiveEn: 'Learn and apply Components as part of React.',
    objectiveAr: 'تعلّم Components وتطبّقه في React.',
    lessonEn: 'Day 161 covers Components. Components, hooks, routing, forms, and loading/error states. Work through Components with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 161 موضوع Components ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على Components بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Components', ar: 'ادرس الأفكار الأساسية لـ Components' },
        { en: 'Practice Components with a small hands-on task', ar: 'تدرّب على Components بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Components in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Components في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Components.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Components.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your Components work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Components بتحسين واحد ووثّق النتيجة.',
    prerequisites: [160],
    criteriaEn: ['Can explain Components', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Components', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 162,
    phaseSlug: 'react',
    kind: 'practice' as const,
    titleEn: 'Day 162: hooks',
    titleAr: 'React — اليوم 162: hooks',
    topic: 'hooks',
    objectiveEn: 'Learn and apply hooks as part of React.',
    objectiveAr: 'تعلّم hooks وتطبّقه في React.',
    lessonEn: 'Day 162 covers hooks. Components, hooks, routing, forms, and loading/error states. Work through hooks with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 162 موضوع hooks ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على hooks بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind hooks', ar: 'ادرس الأفكار الأساسية لـ hooks' },
        { en: 'Practice hooks with a small hands-on task', ar: 'تدرّب على hooks بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply hooks in a short exercise and record each step you took.',
    exerciseAr: 'طبّق hooks في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating hooks.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح hooks.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your hooks work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في hooks بتحسين واحد ووثّق النتيجة.',
    prerequisites: [161],
    criteriaEn: ['Can explain hooks', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح hooks', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 163,
    phaseSlug: 'react',
    kind: 'lesson' as const,
    titleEn: 'Day 163: routing',
    titleAr: 'React — اليوم 163: routing',
    topic: 'routing',
    objectiveEn: 'Learn and apply routing as part of React.',
    objectiveAr: 'تعلّم routing وتطبّقه في React.',
    lessonEn: 'Day 163 covers routing. Components, hooks, routing, forms, and loading/error states. Work through routing with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 163 موضوع routing ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على routing بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind routing', ar: 'ادرس الأفكار الأساسية لـ routing' },
        { en: 'Practice routing with a small hands-on task', ar: 'تدرّب على routing بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply routing in a short exercise and record each step you took.',
    exerciseAr: 'طبّق routing في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating routing.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح routing.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your routing work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في routing بتحسين واحد ووثّق النتيجة.',
    prerequisites: [162],
    criteriaEn: ['Can explain routing', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح routing', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 164,
    phaseSlug: 'react',
    kind: 'lesson' as const,
    titleEn: 'Day 164: forms',
    titleAr: 'React — اليوم 164: forms',
    topic: 'forms',
    objectiveEn: 'Learn and apply forms as part of React.',
    objectiveAr: 'تعلّم forms وتطبّقه في React.',
    lessonEn: 'Day 164 covers forms. Components, hooks, routing, forms, and loading/error states. Work through forms with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 164 موضوع forms ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على forms بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind forms', ar: 'ادرس الأفكار الأساسية لـ forms' },
        { en: 'Practice forms with a small hands-on task', ar: 'تدرّب على forms بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply forms in a short exercise and record each step you took.',
    exerciseAr: 'طبّق forms في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating forms.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح forms.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your forms work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في forms بتحسين واحد ووثّق النتيجة.',
    prerequisites: [163],
    criteriaEn: ['Can explain forms', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح forms', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 165,
    phaseSlug: 'react',
    kind: 'project' as const,
    titleEn: 'Day 165: loading/error states',
    titleAr: 'React — اليوم 165: loading/error states',
    topic: 'loading/error states',
    objectiveEn: 'Learn and apply loading/error states as part of React.',
    objectiveAr: 'تعلّم loading/error states وتطبّقه في React.',
    lessonEn: 'Day 165 covers loading/error states. Components, hooks, routing, forms, and loading/error states. Work through loading/error states with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 165 موضوع loading/error states ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على loading/error states بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind loading/error states', ar: 'ادرس الأفكار الأساسية لـ loading/error states' },
        { en: 'Practice loading/error states with a small hands-on task', ar: 'تدرّب على loading/error states بمهمة عملية صغيرة' },
        { en: 'Plan a small project that exercises loading/error states', ar: 'خطّط لمشروع صغير يطبّق loading/error states' }
    ],
    exerciseEn: 'Apply loading/error states in a short exercise and record each step you took.',
    exerciseAr: 'طبّق loading/error states في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating loading/error states.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح loading/error states.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your loading/error states work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في loading/error states بتحسين واحد ووثّق النتيجة.',
    prerequisites: [164],
    criteriaEn: ['Can explain loading/error states', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح loading/error states', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 166,
    phaseSlug: 'react',
    kind: 'lesson' as const,
    titleEn: 'Day 166: Components',
    titleAr: 'React — اليوم 166: Components',
    topic: 'Components',
    objectiveEn: 'Learn and apply Components as part of React.',
    objectiveAr: 'تعلّم Components وتطبّقه في React.',
    lessonEn: 'Day 166 covers Components. Components, hooks, routing, forms, and loading/error states. Work through Components with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 166 موضوع Components ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على Components بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Components', ar: 'ادرس الأفكار الأساسية لـ Components' },
        { en: 'Practice Components with a small hands-on task', ar: 'تدرّب على Components بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Components in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Components في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Components.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Components.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your Components work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Components بتحسين واحد ووثّق النتيجة.',
    prerequisites: [165],
    criteriaEn: ['Can explain Components', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Components', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 167,
    phaseSlug: 'react',
    kind: 'lesson' as const,
    titleEn: 'Day 167: hooks',
    titleAr: 'React — اليوم 167: hooks',
    topic: 'hooks',
    objectiveEn: 'Learn and apply hooks as part of React.',
    objectiveAr: 'تعلّم hooks وتطبّقه في React.',
    lessonEn: 'Day 167 covers hooks. Components, hooks, routing, forms, and loading/error states. Work through hooks with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 167 موضوع hooks ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على hooks بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind hooks', ar: 'ادرس الأفكار الأساسية لـ hooks' },
        { en: 'Practice hooks with a small hands-on task', ar: 'تدرّب على hooks بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply hooks in a short exercise and record each step you took.',
    exerciseAr: 'طبّق hooks في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating hooks.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح hooks.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your hooks work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في hooks بتحسين واحد ووثّق النتيجة.',
    prerequisites: [166],
    criteriaEn: ['Can explain hooks', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح hooks', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 168,
    phaseSlug: 'react',
    kind: 'practice' as const,
    titleEn: 'Day 168: routing',
    titleAr: 'React — اليوم 168: routing',
    topic: 'routing',
    objectiveEn: 'Learn and apply routing as part of React.',
    objectiveAr: 'تعلّم routing وتطبّقه في React.',
    lessonEn: 'Day 168 covers routing. Components, hooks, routing, forms, and loading/error states. Work through routing with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 168 موضوع routing ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على routing بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind routing', ar: 'ادرس الأفكار الأساسية لـ routing' },
        { en: 'Practice routing with a small hands-on task', ar: 'تدرّب على routing بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply routing in a short exercise and record each step you took.',
    exerciseAr: 'طبّق routing في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating routing.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح routing.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your routing work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في routing بتحسين واحد ووثّق النتيجة.',
    prerequisites: [167],
    criteriaEn: ['Can explain routing', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح routing', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 169,
    phaseSlug: 'react',
    kind: 'lesson' as const,
    titleEn: 'Day 169: forms',
    titleAr: 'React — اليوم 169: forms',
    topic: 'forms',
    objectiveEn: 'Learn and apply forms as part of React.',
    objectiveAr: 'تعلّم forms وتطبّقه في React.',
    lessonEn: 'Day 169 covers forms. Components, hooks, routing, forms, and loading/error states. Work through forms with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 169 موضوع forms ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على forms بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind forms', ar: 'ادرس الأفكار الأساسية لـ forms' },
        { en: 'Practice forms with a small hands-on task', ar: 'تدرّب على forms بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply forms in a short exercise and record each step you took.',
    exerciseAr: 'طبّق forms في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating forms.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح forms.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your forms work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في forms بتحسين واحد ووثّق النتيجة.',
    prerequisites: [168],
    criteriaEn: ['Can explain forms', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح forms', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 170,
    phaseSlug: 'react',
    kind: 'review' as const,
    titleEn: 'Day 170: loading/error states',
    titleAr: 'React — اليوم 170: loading/error states',
    topic: 'loading/error states',
    objectiveEn: 'Learn and apply loading/error states as part of React.',
    objectiveAr: 'تعلّم loading/error states وتطبّقه في React.',
    lessonEn: 'Day 170 covers loading/error states. Components, hooks, routing, forms, and loading/error states. Work through loading/error states with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 170 موضوع loading/error states ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على loading/error states بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 60,
    tasks: [
        { en: 'Study the core ideas behind loading/error states', ar: 'ادرس الأفكار الأساسية لـ loading/error states' },
        { en: 'Practice loading/error states with a small hands-on task', ar: 'تدرّب على loading/error states بمهمة عملية صغيرة' },
        { en: 'Review your recent notes and list key takeaways', ar: 'راجع ملاحظاتك الأخيرة واستخرج النقاط الرئيسية' }
    ],
    exerciseEn: 'Apply loading/error states in a short exercise and record each step you took.',
    exerciseAr: 'طبّق loading/error states في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating loading/error states.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح loading/error states.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your loading/error states work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في loading/error states بتحسين واحد ووثّق النتيجة.',
    prerequisites: [169],
    criteriaEn: ['Can explain loading/error states', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح loading/error states', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 171,
    phaseSlug: 'react',
    kind: 'practice' as const,
    titleEn: 'Day 171: Components',
    titleAr: 'React — اليوم 171: Components',
    topic: 'Components',
    objectiveEn: 'Learn and apply Components as part of React.',
    objectiveAr: 'تعلّم Components وتطبّقه في React.',
    lessonEn: 'Day 171 covers Components. Components, hooks, routing, forms, and loading/error states. Work through Components with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 171 موضوع Components ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على Components بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind Components', ar: 'ادرس الأفكار الأساسية لـ Components' },
        { en: 'Practice Components with a small hands-on task', ar: 'تدرّب على Components بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Components in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Components في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Components.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Components.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your Components work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Components بتحسين واحد ووثّق النتيجة.',
    prerequisites: [170],
    criteriaEn: ['Can explain Components', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Components', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 172,
    phaseSlug: 'react',
    kind: 'lesson' as const,
    titleEn: 'Day 172: hooks',
    titleAr: 'React — اليوم 172: hooks',
    topic: 'hooks',
    objectiveEn: 'Learn and apply hooks as part of React.',
    objectiveAr: 'تعلّم hooks وتطبّقه في React.',
    lessonEn: 'Day 172 covers hooks. Components, hooks, routing, forms, and loading/error states. Work through hooks with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 172 موضوع hooks ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على hooks بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind hooks', ar: 'ادرس الأفكار الأساسية لـ hooks' },
        { en: 'Practice hooks with a small hands-on task', ar: 'تدرّب على hooks بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply hooks in a short exercise and record each step you took.',
    exerciseAr: 'طبّق hooks في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating hooks.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح hooks.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your hooks work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في hooks بتحسين واحد ووثّق النتيجة.',
    prerequisites: [171],
    criteriaEn: ['Can explain hooks', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح hooks', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 173,
    phaseSlug: 'react',
    kind: 'lesson' as const,
    titleEn: 'Day 173: routing',
    titleAr: 'React — اليوم 173: routing',
    topic: 'routing',
    objectiveEn: 'Learn and apply routing as part of React.',
    objectiveAr: 'تعلّم routing وتطبّقه في React.',
    lessonEn: 'Day 173 covers routing. Components, hooks, routing, forms, and loading/error states. Work through routing with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 173 موضوع routing ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على routing بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind routing', ar: 'ادرس الأفكار الأساسية لـ routing' },
        { en: 'Practice routing with a small hands-on task', ar: 'تدرّب على routing بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply routing in a short exercise and record each step you took.',
    exerciseAr: 'طبّق routing في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating routing.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح routing.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your routing work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في routing بتحسين واحد ووثّق النتيجة.',
    prerequisites: [172],
    criteriaEn: ['Can explain routing', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح routing', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 174,
    phaseSlug: 'react',
    kind: 'practice' as const,
    titleEn: 'Day 174: forms',
    titleAr: 'React — اليوم 174: forms',
    topic: 'forms',
    objectiveEn: 'Learn and apply forms as part of React.',
    objectiveAr: 'تعلّم forms وتطبّقه في React.',
    lessonEn: 'Day 174 covers forms. Components, hooks, routing, forms, and loading/error states. Work through forms with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 174 موضوع forms ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على forms بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind forms', ar: 'ادرس الأفكار الأساسية لـ forms' },
        { en: 'Practice forms with a small hands-on task', ar: 'تدرّب على forms بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply forms in a short exercise and record each step you took.',
    exerciseAr: 'طبّق forms في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating forms.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح forms.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your forms work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في forms بتحسين واحد ووثّق النتيجة.',
    prerequisites: [173],
    criteriaEn: ['Can explain forms', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح forms', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 175,
    phaseSlug: 'react',
    kind: 'project' as const,
    titleEn: 'Day 175: loading/error states',
    titleAr: 'React — اليوم 175: loading/error states',
    topic: 'loading/error states',
    objectiveEn: 'Learn and apply loading/error states as part of React.',
    objectiveAr: 'تعلّم loading/error states وتطبّقه في React.',
    lessonEn: 'Day 175 covers loading/error states. Components, hooks, routing, forms, and loading/error states. Work through loading/error states with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 175 موضوع loading/error states ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على loading/error states بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind loading/error states', ar: 'ادرس الأفكار الأساسية لـ loading/error states' },
        { en: 'Practice loading/error states with a small hands-on task', ar: 'تدرّب على loading/error states بمهمة عملية صغيرة' },
        { en: 'Plan a small project that exercises loading/error states', ar: 'خطّط لمشروع صغير يطبّق loading/error states' }
    ],
    exerciseEn: 'Apply loading/error states in a short exercise and record each step you took.',
    exerciseAr: 'طبّق loading/error states في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating loading/error states.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح loading/error states.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your loading/error states work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في loading/error states بتحسين واحد ووثّق النتيجة.',
    prerequisites: [174],
    criteriaEn: ['Can explain loading/error states', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح loading/error states', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 176,
    phaseSlug: 'react',
    kind: 'lesson' as const,
    titleEn: 'Day 176: Components',
    titleAr: 'React — اليوم 176: Components',
    topic: 'Components',
    objectiveEn: 'Learn and apply Components as part of React.',
    objectiveAr: 'تعلّم Components وتطبّقه في React.',
    lessonEn: 'Day 176 covers Components. Components, hooks, routing, forms, and loading/error states. Work through Components with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 176 موضوع Components ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على Components بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Components', ar: 'ادرس الأفكار الأساسية لـ Components' },
        { en: 'Practice Components with a small hands-on task', ar: 'تدرّب على Components بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Components in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Components في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Components.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Components.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your Components work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Components بتحسين واحد ووثّق النتيجة.',
    prerequisites: [175],
    criteriaEn: ['Can explain Components', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Components', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 177,
    phaseSlug: 'react',
    kind: 'practice' as const,
    titleEn: 'Day 177: hooks',
    titleAr: 'React — اليوم 177: hooks',
    topic: 'hooks',
    objectiveEn: 'Learn and apply hooks as part of React.',
    objectiveAr: 'تعلّم hooks وتطبّقه في React.',
    lessonEn: 'Day 177 covers hooks. Components, hooks, routing, forms, and loading/error states. Work through hooks with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 177 موضوع hooks ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على hooks بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind hooks', ar: 'ادرس الأفكار الأساسية لـ hooks' },
        { en: 'Practice hooks with a small hands-on task', ar: 'تدرّب على hooks بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply hooks in a short exercise and record each step you took.',
    exerciseAr: 'طبّق hooks في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating hooks.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح hooks.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your hooks work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في hooks بتحسين واحد ووثّق النتيجة.',
    prerequisites: [176],
    criteriaEn: ['Can explain hooks', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح hooks', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 178,
    phaseSlug: 'react',
    kind: 'lesson' as const,
    titleEn: 'Day 178: routing',
    titleAr: 'React — اليوم 178: routing',
    topic: 'routing',
    objectiveEn: 'Learn and apply routing as part of React.',
    objectiveAr: 'تعلّم routing وتطبّقه في React.',
    lessonEn: 'Day 178 covers routing. Components, hooks, routing, forms, and loading/error states. Work through routing with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 178 موضوع routing ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على routing بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind routing', ar: 'ادرس الأفكار الأساسية لـ routing' },
        { en: 'Practice routing with a small hands-on task', ar: 'تدرّب على routing بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply routing in a short exercise and record each step you took.',
    exerciseAr: 'طبّق routing في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating routing.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح routing.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your routing work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في routing بتحسين واحد ووثّق النتيجة.',
    prerequisites: [177],
    criteriaEn: ['Can explain routing', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح routing', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 179,
    phaseSlug: 'react',
    kind: 'lesson' as const,
    titleEn: 'Day 179: forms',
    titleAr: 'React — اليوم 179: forms',
    topic: 'forms',
    objectiveEn: 'Learn and apply forms as part of React.',
    objectiveAr: 'تعلّم forms وتطبّقه في React.',
    lessonEn: 'Day 179 covers forms. Components, hooks, routing, forms, and loading/error states. Work through forms with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 179 موضوع forms ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على forms بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind forms', ar: 'ادرس الأفكار الأساسية لـ forms' },
        { en: 'Practice forms with a small hands-on task', ar: 'تدرّب على forms بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply forms in a short exercise and record each step you took.',
    exerciseAr: 'طبّق forms في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating forms.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح forms.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your forms work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في forms بتحسين واحد ووثّق النتيجة.',
    prerequisites: [178],
    criteriaEn: ['Can explain forms', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح forms', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 180,
    phaseSlug: 'react',
    kind: 'review' as const,
    titleEn: 'Day 180: loading/error states',
    titleAr: 'React — اليوم 180: loading/error states',
    topic: 'loading/error states',
    objectiveEn: 'Learn and apply loading/error states as part of React.',
    objectiveAr: 'تعلّم loading/error states وتطبّقه في React.',
    lessonEn: 'Day 180 covers loading/error states. Components, hooks, routing, forms, and loading/error states. Work through loading/error states with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 180 موضوع loading/error states ضمن React. المكوّنات و hooks والتوجيه والنماذج وحالات التحميل والخطأ. اعمل على loading/error states بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 60,
    tasks: [
        { en: 'Study the core ideas behind loading/error states', ar: 'ادرس الأفكار الأساسية لـ loading/error states' },
        { en: 'Practice loading/error states with a small hands-on task', ar: 'تدرّب على loading/error states بمهمة عملية صغيرة' },
        { en: 'Review your recent notes and list key takeaways', ar: 'راجع ملاحظاتك الأخيرة واستخرج النقاط الرئيسية' }
    ],
    exerciseEn: 'Apply loading/error states in a short exercise and record each step you took.',
    exerciseAr: 'طبّق loading/error states في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating loading/error states.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح loading/error states.',
    resources: [
      { title: 'React docs', url: 'https://react.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your loading/error states work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في loading/error states بتحسين واحد ووثّق النتيجة.',
    prerequisites: [179],
    criteriaEn: ['Can explain loading/error states', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح loading/error states', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
]
