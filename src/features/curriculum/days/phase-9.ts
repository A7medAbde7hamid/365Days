import type { CurriculumDay } from '../types'

/** Phase 9 — AI Integration (days 241–270). */
export const PHASE_9_DAYS: CurriculumDay[] = [
  {
    dayNumber: 241,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Day 241: Prompt design',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 241: Prompt design',
    topic: 'Prompt design',
    objectiveEn: 'Learn and apply Prompt design as part of AI Integration.',
    objectiveAr: 'تعلّم Prompt design وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 241 covers Prompt design. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through Prompt design with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 241 موضوع Prompt design ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على Prompt design بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Prompt design', ar: 'ادرس الأفكار الأساسية لـ Prompt design' },
        { en: 'Practice Prompt design with a small hands-on task', ar: 'تدرّب على Prompt design بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Prompt design in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Prompt design في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Prompt design.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Prompt design.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your Prompt design work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Prompt design بتحسين واحد ووثّق النتيجة.',
    prerequisites: [],
    criteriaEn: ['Can explain Prompt design', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Prompt design', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 242,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Day 242: structured outputs',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 242: structured outputs',
    topic: 'structured outputs',
    objectiveEn: 'Learn and apply structured outputs as part of AI Integration.',
    objectiveAr: 'تعلّم structured outputs وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 242 covers structured outputs. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through structured outputs with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 242 موضوع structured outputs ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على structured outputs بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind structured outputs', ar: 'ادرس الأفكار الأساسية لـ structured outputs' },
        { en: 'Practice structured outputs with a small hands-on task', ar: 'تدرّب على structured outputs بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply structured outputs in a short exercise and record each step you took.',
    exerciseAr: 'طبّق structured outputs في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating structured outputs.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح structured outputs.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your structured outputs work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في structured outputs بتحسين واحد ووثّق النتيجة.',
    prerequisites: [241],
    criteriaEn: ['Can explain structured outputs', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح structured outputs', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 243,
    phaseSlug: 'ai-integration',
    kind: 'practice' as const,
    titleEn: 'Day 243: embeddings',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 243: embeddings',
    topic: 'embeddings',
    objectiveEn: 'Learn and apply embeddings as part of AI Integration.',
    objectiveAr: 'تعلّم embeddings وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 243 covers embeddings. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through embeddings with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 243 موضوع embeddings ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على embeddings بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind embeddings', ar: 'ادرس الأفكار الأساسية لـ embeddings' },
        { en: 'Practice embeddings with a small hands-on task', ar: 'تدرّب على embeddings بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply embeddings in a short exercise and record each step you took.',
    exerciseAr: 'طبّق embeddings في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating embeddings.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح embeddings.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your embeddings work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في embeddings بتحسين واحد ووثّق النتيجة.',
    prerequisites: [242],
    criteriaEn: ['Can explain embeddings', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح embeddings', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 244,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Day 244: RAG',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 244: RAG',
    topic: 'RAG',
    objectiveEn: 'Learn and apply RAG as part of AI Integration.',
    objectiveAr: 'تعلّم RAG وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 244 covers RAG. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through RAG with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 244 موضوع RAG ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على RAG بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind RAG', ar: 'ادرس الأفكار الأساسية لـ RAG' },
        { en: 'Practice RAG with a small hands-on task', ar: 'تدرّب على RAG بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply RAG in a short exercise and record each step you took.',
    exerciseAr: 'طبّق RAG في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating RAG.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح RAG.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your RAG work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في RAG بتحسين واحد ووثّق النتيجة.',
    prerequisites: [243],
    criteriaEn: ['Can explain RAG', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح RAG', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 245,
    phaseSlug: 'ai-integration',
    kind: 'project' as const,
    titleEn: 'Day 245: cost/privacy',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 245: cost/privacy',
    topic: 'cost/privacy',
    objectiveEn: 'Learn and apply cost/privacy as part of AI Integration.',
    objectiveAr: 'تعلّم cost/privacy وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 245 covers cost/privacy. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through cost/privacy with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 245 موضوع cost/privacy ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على cost/privacy بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind cost/privacy', ar: 'ادرس الأفكار الأساسية لـ cost/privacy' },
        { en: 'Practice cost/privacy with a small hands-on task', ar: 'تدرّب على cost/privacy بمهمة عملية صغيرة' },
        { en: 'Plan a small project that exercises cost/privacy', ar: 'خطّط لمشروع صغير يطبّق cost/privacy' }
    ],
    exerciseEn: 'Apply cost/privacy in a short exercise and record each step you took.',
    exerciseAr: 'طبّق cost/privacy في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating cost/privacy.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح cost/privacy.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your cost/privacy work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في cost/privacy بتحسين واحد ووثّق النتيجة.',
    prerequisites: [244],
    criteriaEn: ['Can explain cost/privacy', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح cost/privacy', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 246,
    phaseSlug: 'ai-integration',
    kind: 'practice' as const,
    titleEn: 'Day 246: Prompt design',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 246: Prompt design',
    topic: 'Prompt design',
    objectiveEn: 'Learn and apply Prompt design as part of AI Integration.',
    objectiveAr: 'تعلّم Prompt design وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 246 covers Prompt design. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through Prompt design with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 246 موضوع Prompt design ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على Prompt design بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind Prompt design', ar: 'ادرس الأفكار الأساسية لـ Prompt design' },
        { en: 'Practice Prompt design with a small hands-on task', ar: 'تدرّب على Prompt design بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Prompt design in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Prompt design في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Prompt design.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Prompt design.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your Prompt design work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Prompt design بتحسين واحد ووثّق النتيجة.',
    prerequisites: [245],
    criteriaEn: ['Can explain Prompt design', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Prompt design', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 247,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Day 247: structured outputs',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 247: structured outputs',
    topic: 'structured outputs',
    objectiveEn: 'Learn and apply structured outputs as part of AI Integration.',
    objectiveAr: 'تعلّم structured outputs وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 247 covers structured outputs. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through structured outputs with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 247 موضوع structured outputs ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على structured outputs بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind structured outputs', ar: 'ادرس الأفكار الأساسية لـ structured outputs' },
        { en: 'Practice structured outputs with a small hands-on task', ar: 'تدرّب على structured outputs بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply structured outputs in a short exercise and record each step you took.',
    exerciseAr: 'طبّق structured outputs في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating structured outputs.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح structured outputs.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your structured outputs work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في structured outputs بتحسين واحد ووثّق النتيجة.',
    prerequisites: [246],
    criteriaEn: ['Can explain structured outputs', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح structured outputs', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 248,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Day 248: embeddings',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 248: embeddings',
    topic: 'embeddings',
    objectiveEn: 'Learn and apply embeddings as part of AI Integration.',
    objectiveAr: 'تعلّم embeddings وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 248 covers embeddings. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through embeddings with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 248 موضوع embeddings ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على embeddings بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind embeddings', ar: 'ادرس الأفكار الأساسية لـ embeddings' },
        { en: 'Practice embeddings with a small hands-on task', ar: 'تدرّب على embeddings بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply embeddings in a short exercise and record each step you took.',
    exerciseAr: 'طبّق embeddings في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating embeddings.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح embeddings.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your embeddings work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في embeddings بتحسين واحد ووثّق النتيجة.',
    prerequisites: [247],
    criteriaEn: ['Can explain embeddings', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح embeddings', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 249,
    phaseSlug: 'ai-integration',
    kind: 'practice' as const,
    titleEn: 'Day 249: RAG',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 249: RAG',
    topic: 'RAG',
    objectiveEn: 'Learn and apply RAG as part of AI Integration.',
    objectiveAr: 'تعلّم RAG وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 249 covers RAG. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through RAG with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 249 موضوع RAG ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على RAG بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind RAG', ar: 'ادرس الأفكار الأساسية لـ RAG' },
        { en: 'Practice RAG with a small hands-on task', ar: 'تدرّب على RAG بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply RAG in a short exercise and record each step you took.',
    exerciseAr: 'طبّق RAG في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating RAG.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح RAG.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your RAG work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في RAG بتحسين واحد ووثّق النتيجة.',
    prerequisites: [248],
    criteriaEn: ['Can explain RAG', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح RAG', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 250,
    phaseSlug: 'ai-integration',
    kind: 'review' as const,
    titleEn: 'Day 250: cost/privacy',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 250: cost/privacy',
    topic: 'cost/privacy',
    objectiveEn: 'Learn and apply cost/privacy as part of AI Integration.',
    objectiveAr: 'تعلّم cost/privacy وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 250 covers cost/privacy. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through cost/privacy with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 250 موضوع cost/privacy ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على cost/privacy بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 60,
    tasks: [
        { en: 'Study the core ideas behind cost/privacy', ar: 'ادرس الأفكار الأساسية لـ cost/privacy' },
        { en: 'Practice cost/privacy with a small hands-on task', ar: 'تدرّب على cost/privacy بمهمة عملية صغيرة' },
        { en: 'Review your recent notes and list key takeaways', ar: 'راجع ملاحظاتك الأخيرة واستخرج النقاط الرئيسية' }
    ],
    exerciseEn: 'Apply cost/privacy in a short exercise and record each step you took.',
    exerciseAr: 'طبّق cost/privacy في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating cost/privacy.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح cost/privacy.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your cost/privacy work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في cost/privacy بتحسين واحد ووثّق النتيجة.',
    prerequisites: [249],
    criteriaEn: ['Can explain cost/privacy', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح cost/privacy', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 251,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Day 251: Prompt design',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 251: Prompt design',
    topic: 'Prompt design',
    objectiveEn: 'Learn and apply Prompt design as part of AI Integration.',
    objectiveAr: 'تعلّم Prompt design وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 251 covers Prompt design. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through Prompt design with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 251 موضوع Prompt design ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على Prompt design بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Prompt design', ar: 'ادرس الأفكار الأساسية لـ Prompt design' },
        { en: 'Practice Prompt design with a small hands-on task', ar: 'تدرّب على Prompt design بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Prompt design in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Prompt design في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Prompt design.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Prompt design.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your Prompt design work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Prompt design بتحسين واحد ووثّق النتيجة.',
    prerequisites: [250],
    criteriaEn: ['Can explain Prompt design', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Prompt design', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 252,
    phaseSlug: 'ai-integration',
    kind: 'practice' as const,
    titleEn: 'Day 252: structured outputs',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 252: structured outputs',
    topic: 'structured outputs',
    objectiveEn: 'Learn and apply structured outputs as part of AI Integration.',
    objectiveAr: 'تعلّم structured outputs وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 252 covers structured outputs. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through structured outputs with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 252 موضوع structured outputs ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على structured outputs بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind structured outputs', ar: 'ادرس الأفكار الأساسية لـ structured outputs' },
        { en: 'Practice structured outputs with a small hands-on task', ar: 'تدرّب على structured outputs بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply structured outputs in a short exercise and record each step you took.',
    exerciseAr: 'طبّق structured outputs في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating structured outputs.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح structured outputs.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your structured outputs work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في structured outputs بتحسين واحد ووثّق النتيجة.',
    prerequisites: [251],
    criteriaEn: ['Can explain structured outputs', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح structured outputs', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 253,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Day 253: embeddings',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 253: embeddings',
    topic: 'embeddings',
    objectiveEn: 'Learn and apply embeddings as part of AI Integration.',
    objectiveAr: 'تعلّم embeddings وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 253 covers embeddings. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through embeddings with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 253 موضوع embeddings ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على embeddings بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind embeddings', ar: 'ادرس الأفكار الأساسية لـ embeddings' },
        { en: 'Practice embeddings with a small hands-on task', ar: 'تدرّب على embeddings بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply embeddings in a short exercise and record each step you took.',
    exerciseAr: 'طبّق embeddings في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating embeddings.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح embeddings.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your embeddings work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في embeddings بتحسين واحد ووثّق النتيجة.',
    prerequisites: [252],
    criteriaEn: ['Can explain embeddings', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح embeddings', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 254,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Day 254: RAG',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 254: RAG',
    topic: 'RAG',
    objectiveEn: 'Learn and apply RAG as part of AI Integration.',
    objectiveAr: 'تعلّم RAG وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 254 covers RAG. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through RAG with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 254 موضوع RAG ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على RAG بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind RAG', ar: 'ادرس الأفكار الأساسية لـ RAG' },
        { en: 'Practice RAG with a small hands-on task', ar: 'تدرّب على RAG بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply RAG in a short exercise and record each step you took.',
    exerciseAr: 'طبّق RAG في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating RAG.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح RAG.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your RAG work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في RAG بتحسين واحد ووثّق النتيجة.',
    prerequisites: [253],
    criteriaEn: ['Can explain RAG', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح RAG', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 255,
    phaseSlug: 'ai-integration',
    kind: 'project' as const,
    titleEn: 'Day 255: cost/privacy',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 255: cost/privacy',
    topic: 'cost/privacy',
    objectiveEn: 'Learn and apply cost/privacy as part of AI Integration.',
    objectiveAr: 'تعلّم cost/privacy وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 255 covers cost/privacy. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through cost/privacy with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 255 موضوع cost/privacy ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على cost/privacy بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind cost/privacy', ar: 'ادرس الأفكار الأساسية لـ cost/privacy' },
        { en: 'Practice cost/privacy with a small hands-on task', ar: 'تدرّب على cost/privacy بمهمة عملية صغيرة' },
        { en: 'Plan a small project that exercises cost/privacy', ar: 'خطّط لمشروع صغير يطبّق cost/privacy' }
    ],
    exerciseEn: 'Apply cost/privacy in a short exercise and record each step you took.',
    exerciseAr: 'طبّق cost/privacy في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating cost/privacy.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح cost/privacy.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your cost/privacy work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في cost/privacy بتحسين واحد ووثّق النتيجة.',
    prerequisites: [254],
    criteriaEn: ['Can explain cost/privacy', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح cost/privacy', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 256,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Day 256: Prompt design',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 256: Prompt design',
    topic: 'Prompt design',
    objectiveEn: 'Learn and apply Prompt design as part of AI Integration.',
    objectiveAr: 'تعلّم Prompt design وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 256 covers Prompt design. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through Prompt design with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 256 موضوع Prompt design ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على Prompt design بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Prompt design', ar: 'ادرس الأفكار الأساسية لـ Prompt design' },
        { en: 'Practice Prompt design with a small hands-on task', ar: 'تدرّب على Prompt design بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Prompt design in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Prompt design في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Prompt design.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Prompt design.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your Prompt design work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Prompt design بتحسين واحد ووثّق النتيجة.',
    prerequisites: [255],
    criteriaEn: ['Can explain Prompt design', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Prompt design', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 257,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Day 257: structured outputs',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 257: structured outputs',
    topic: 'structured outputs',
    objectiveEn: 'Learn and apply structured outputs as part of AI Integration.',
    objectiveAr: 'تعلّم structured outputs وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 257 covers structured outputs. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through structured outputs with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 257 موضوع structured outputs ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على structured outputs بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind structured outputs', ar: 'ادرس الأفكار الأساسية لـ structured outputs' },
        { en: 'Practice structured outputs with a small hands-on task', ar: 'تدرّب على structured outputs بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply structured outputs in a short exercise and record each step you took.',
    exerciseAr: 'طبّق structured outputs في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating structured outputs.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح structured outputs.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your structured outputs work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في structured outputs بتحسين واحد ووثّق النتيجة.',
    prerequisites: [256],
    criteriaEn: ['Can explain structured outputs', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح structured outputs', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 258,
    phaseSlug: 'ai-integration',
    kind: 'practice' as const,
    titleEn: 'Day 258: embeddings',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 258: embeddings',
    topic: 'embeddings',
    objectiveEn: 'Learn and apply embeddings as part of AI Integration.',
    objectiveAr: 'تعلّم embeddings وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 258 covers embeddings. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through embeddings with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 258 موضوع embeddings ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على embeddings بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind embeddings', ar: 'ادرس الأفكار الأساسية لـ embeddings' },
        { en: 'Practice embeddings with a small hands-on task', ar: 'تدرّب على embeddings بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply embeddings in a short exercise and record each step you took.',
    exerciseAr: 'طبّق embeddings في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating embeddings.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح embeddings.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your embeddings work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في embeddings بتحسين واحد ووثّق النتيجة.',
    prerequisites: [257],
    criteriaEn: ['Can explain embeddings', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح embeddings', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 259,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Day 259: RAG',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 259: RAG',
    topic: 'RAG',
    objectiveEn: 'Learn and apply RAG as part of AI Integration.',
    objectiveAr: 'تعلّم RAG وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 259 covers RAG. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through RAG with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 259 موضوع RAG ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على RAG بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind RAG', ar: 'ادرس الأفكار الأساسية لـ RAG' },
        { en: 'Practice RAG with a small hands-on task', ar: 'تدرّب على RAG بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply RAG in a short exercise and record each step you took.',
    exerciseAr: 'طبّق RAG في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating RAG.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح RAG.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your RAG work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في RAG بتحسين واحد ووثّق النتيجة.',
    prerequisites: [258],
    criteriaEn: ['Can explain RAG', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح RAG', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 260,
    phaseSlug: 'ai-integration',
    kind: 'review' as const,
    titleEn: 'Day 260: cost/privacy',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 260: cost/privacy',
    topic: 'cost/privacy',
    objectiveEn: 'Learn and apply cost/privacy as part of AI Integration.',
    objectiveAr: 'تعلّم cost/privacy وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 260 covers cost/privacy. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through cost/privacy with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 260 موضوع cost/privacy ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على cost/privacy بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 60,
    tasks: [
        { en: 'Study the core ideas behind cost/privacy', ar: 'ادرس الأفكار الأساسية لـ cost/privacy' },
        { en: 'Practice cost/privacy with a small hands-on task', ar: 'تدرّب على cost/privacy بمهمة عملية صغيرة' },
        { en: 'Review your recent notes and list key takeaways', ar: 'راجع ملاحظاتك الأخيرة واستخرج النقاط الرئيسية' }
    ],
    exerciseEn: 'Apply cost/privacy in a short exercise and record each step you took.',
    exerciseAr: 'طبّق cost/privacy في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating cost/privacy.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح cost/privacy.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your cost/privacy work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في cost/privacy بتحسين واحد ووثّق النتيجة.',
    prerequisites: [259],
    criteriaEn: ['Can explain cost/privacy', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح cost/privacy', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 261,
    phaseSlug: 'ai-integration',
    kind: 'practice' as const,
    titleEn: 'Day 261: Prompt design',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 261: Prompt design',
    topic: 'Prompt design',
    objectiveEn: 'Learn and apply Prompt design as part of AI Integration.',
    objectiveAr: 'تعلّم Prompt design وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 261 covers Prompt design. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through Prompt design with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 261 موضوع Prompt design ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على Prompt design بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind Prompt design', ar: 'ادرس الأفكار الأساسية لـ Prompt design' },
        { en: 'Practice Prompt design with a small hands-on task', ar: 'تدرّب على Prompt design بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Prompt design in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Prompt design في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Prompt design.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Prompt design.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your Prompt design work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Prompt design بتحسين واحد ووثّق النتيجة.',
    prerequisites: [260],
    criteriaEn: ['Can explain Prompt design', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Prompt design', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 262,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Day 262: structured outputs',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 262: structured outputs',
    topic: 'structured outputs',
    objectiveEn: 'Learn and apply structured outputs as part of AI Integration.',
    objectiveAr: 'تعلّم structured outputs وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 262 covers structured outputs. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through structured outputs with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 262 موضوع structured outputs ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على structured outputs بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind structured outputs', ar: 'ادرس الأفكار الأساسية لـ structured outputs' },
        { en: 'Practice structured outputs with a small hands-on task', ar: 'تدرّب على structured outputs بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply structured outputs in a short exercise and record each step you took.',
    exerciseAr: 'طبّق structured outputs في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating structured outputs.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح structured outputs.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your structured outputs work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في structured outputs بتحسين واحد ووثّق النتيجة.',
    prerequisites: [261],
    criteriaEn: ['Can explain structured outputs', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح structured outputs', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 263,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Day 263: embeddings',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 263: embeddings',
    topic: 'embeddings',
    objectiveEn: 'Learn and apply embeddings as part of AI Integration.',
    objectiveAr: 'تعلّم embeddings وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 263 covers embeddings. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through embeddings with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 263 موضوع embeddings ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على embeddings بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind embeddings', ar: 'ادرس الأفكار الأساسية لـ embeddings' },
        { en: 'Practice embeddings with a small hands-on task', ar: 'تدرّب على embeddings بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply embeddings in a short exercise and record each step you took.',
    exerciseAr: 'طبّق embeddings في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating embeddings.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح embeddings.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your embeddings work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في embeddings بتحسين واحد ووثّق النتيجة.',
    prerequisites: [262],
    criteriaEn: ['Can explain embeddings', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح embeddings', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 264,
    phaseSlug: 'ai-integration',
    kind: 'practice' as const,
    titleEn: 'Day 264: RAG',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 264: RAG',
    topic: 'RAG',
    objectiveEn: 'Learn and apply RAG as part of AI Integration.',
    objectiveAr: 'تعلّم RAG وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 264 covers RAG. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through RAG with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 264 موضوع RAG ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على RAG بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind RAG', ar: 'ادرس الأفكار الأساسية لـ RAG' },
        { en: 'Practice RAG with a small hands-on task', ar: 'تدرّب على RAG بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply RAG in a short exercise and record each step you took.',
    exerciseAr: 'طبّق RAG في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating RAG.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح RAG.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your RAG work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في RAG بتحسين واحد ووثّق النتيجة.',
    prerequisites: [263],
    criteriaEn: ['Can explain RAG', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح RAG', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 265,
    phaseSlug: 'ai-integration',
    kind: 'project' as const,
    titleEn: 'Day 265: cost/privacy',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 265: cost/privacy',
    topic: 'cost/privacy',
    objectiveEn: 'Learn and apply cost/privacy as part of AI Integration.',
    objectiveAr: 'تعلّم cost/privacy وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 265 covers cost/privacy. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through cost/privacy with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 265 موضوع cost/privacy ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على cost/privacy بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind cost/privacy', ar: 'ادرس الأفكار الأساسية لـ cost/privacy' },
        { en: 'Practice cost/privacy with a small hands-on task', ar: 'تدرّب على cost/privacy بمهمة عملية صغيرة' },
        { en: 'Plan a small project that exercises cost/privacy', ar: 'خطّط لمشروع صغير يطبّق cost/privacy' }
    ],
    exerciseEn: 'Apply cost/privacy in a short exercise and record each step you took.',
    exerciseAr: 'طبّق cost/privacy في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating cost/privacy.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح cost/privacy.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your cost/privacy work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في cost/privacy بتحسين واحد ووثّق النتيجة.',
    prerequisites: [264],
    criteriaEn: ['Can explain cost/privacy', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح cost/privacy', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 266,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Day 266: Prompt design',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 266: Prompt design',
    topic: 'Prompt design',
    objectiveEn: 'Learn and apply Prompt design as part of AI Integration.',
    objectiveAr: 'تعلّم Prompt design وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 266 covers Prompt design. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through Prompt design with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 266 موضوع Prompt design ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على Prompt design بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind Prompt design', ar: 'ادرس الأفكار الأساسية لـ Prompt design' },
        { en: 'Practice Prompt design with a small hands-on task', ar: 'تدرّب على Prompt design بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply Prompt design in a short exercise and record each step you took.',
    exerciseAr: 'طبّق Prompt design في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating Prompt design.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح Prompt design.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your Prompt design work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في Prompt design بتحسين واحد ووثّق النتيجة.',
    prerequisites: [265],
    criteriaEn: ['Can explain Prompt design', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح Prompt design', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 267,
    phaseSlug: 'ai-integration',
    kind: 'practice' as const,
    titleEn: 'Day 267: structured outputs',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 267: structured outputs',
    topic: 'structured outputs',
    objectiveEn: 'Learn and apply structured outputs as part of AI Integration.',
    objectiveAr: 'تعلّم structured outputs وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 267 covers structured outputs. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through structured outputs with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 267 موضوع structured outputs ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على structured outputs بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 75,
    tasks: [
        { en: 'Study the core ideas behind structured outputs', ar: 'ادرس الأفكار الأساسية لـ structured outputs' },
        { en: 'Practice structured outputs with a small hands-on task', ar: 'تدرّب على structured outputs بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply structured outputs in a short exercise and record each step you took.',
    exerciseAr: 'طبّق structured outputs في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating structured outputs.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح structured outputs.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your structured outputs work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في structured outputs بتحسين واحد ووثّق النتيجة.',
    prerequisites: [266],
    criteriaEn: ['Can explain structured outputs', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح structured outputs', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 268,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Day 268: embeddings',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 268: embeddings',
    topic: 'embeddings',
    objectiveEn: 'Learn and apply embeddings as part of AI Integration.',
    objectiveAr: 'تعلّم embeddings وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 268 covers embeddings. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through embeddings with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 268 موضوع embeddings ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على embeddings بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind embeddings', ar: 'ادرس الأفكار الأساسية لـ embeddings' },
        { en: 'Practice embeddings with a small hands-on task', ar: 'تدرّب على embeddings بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply embeddings in a short exercise and record each step you took.',
    exerciseAr: 'طبّق embeddings في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating embeddings.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح embeddings.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your embeddings work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في embeddings بتحسين واحد ووثّق النتيجة.',
    prerequisites: [267],
    criteriaEn: ['Can explain embeddings', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح embeddings', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 269,
    phaseSlug: 'ai-integration',
    kind: 'lesson' as const,
    titleEn: 'Day 269: RAG',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 269: RAG',
    topic: 'RAG',
    objectiveEn: 'Learn and apply RAG as part of AI Integration.',
    objectiveAr: 'تعلّم RAG وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 269 covers RAG. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through RAG with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 269 موضوع RAG ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على RAG بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 90,
    tasks: [
        { en: 'Study the core ideas behind RAG', ar: 'ادرس الأفكار الأساسية لـ RAG' },
        { en: 'Practice RAG with a small hands-on task', ar: 'تدرّب على RAG بمهمة عملية صغيرة' }
    ],
    exerciseEn: 'Apply RAG in a short exercise and record each step you took.',
    exerciseAr: 'طبّق RAG في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating RAG.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح RAG.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your RAG work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في RAG بتحسين واحد ووثّق النتيجة.',
    prerequisites: [268],
    criteriaEn: ['Can explain RAG', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح RAG', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
  {
    dayNumber: 270,
    phaseSlug: 'ai-integration',
    kind: 'review' as const,
    titleEn: 'Day 270: cost/privacy',
    titleAr: 'دمج الذكاء الاصطناعي — اليوم 270: cost/privacy',
    topic: 'cost/privacy',
    objectiveEn: 'Learn and apply cost/privacy as part of AI Integration.',
    objectiveAr: 'تعلّم cost/privacy وتطبّقه في دمج الذكاء الاصطناعي.',
    lessonEn: 'Day 270 covers cost/privacy. Prompt design, structured outputs, embeddings, RAG, and cost/privacy. Work through cost/privacy with a concrete example and note what you learned.',
    lessonAr: 'يتناول اليوم 270 موضوع cost/privacy ضمن دمج الذكاء الاصطناعي. تصميم الطلبات والمخرجات المنظّمة والتضمينات و RAG والتكلفة والخصوصية. اعمل على cost/privacy بمثال عملي وسجّل ملاحظاتك.',
    estimatedMinutes: 60,
    tasks: [
        { en: 'Study the core ideas behind cost/privacy', ar: 'ادرس الأفكار الأساسية لـ cost/privacy' },
        { en: 'Practice cost/privacy with a small hands-on task', ar: 'تدرّب على cost/privacy بمهمة عملية صغيرة' },
        { en: 'Review your recent notes and list key takeaways', ar: 'راجع ملاحظاتك الأخيرة واستخرج النقاط الرئيسية' }
    ],
    exerciseEn: 'Apply cost/privacy in a short exercise and record each step you took.',
    exerciseAr: 'طبّق cost/privacy في تمرين قصير وسجّل كل خطوة قمت بها.',
    deliverableEn: 'A short written artifact demonstrating cost/privacy.',
    deliverableAr: 'ناتج مكتوب قصير يوضّح cost/privacy.',
    resources: [
      { title: 'Google AI docs', url: 'https://ai.google.dev', kind: 'official' }
    ],
    challengeEn: 'Extend your cost/privacy work with one improvement and document the result.',
    challengeAr: 'وسّع عملك في cost/privacy بتحسين واحد ووثّق النتيجة.',
    prerequisites: [269],
    criteriaEn: ['Can explain cost/privacy', 'Completed the hands-on task', 'Documented the result'],
    criteriaAr: ['يمكن شرح cost/privacy', 'أُكملت المهمة العملية', 'تم توثيق النتيجة']
  },
]
