#!/usr/bin/env python3
import re, os, json

# Day entry template following the exact format of existing days
DAY_TEMPLATE = """  {{
    dayNumber: {day_number},
    phaseSlug: '{phase_slug}',
    kind: 'lesson' as const,
    titleEn: '{title_en}',
    titleAr: '{title_ar}',
    topic: '{topic}',
    estimatedMinutes: 90,
    objectiveEn: '{objective_en}',
    objectiveAr: '{objective_ar}',
    lessonEn:
      '{lesson_en}',
    lessonAr:
      '{lesson_ar}',
    tasks: [
      {{
        en: '{task1_en}',
        ar: '{task1_ar}'
      }},
      {{
        en: '{task2_en}',
        ar: '{task2_ar}'
      }},
      {{
        en: '{task3_en}',
        ar: '{task3_ar}'
      }},
      {{
        en: '{task4_en}',
        ar: '{task4_ar}'
      }}
    ],
    exerciseEn: '{exercise_en}',
    exerciseAr: '{exercise_ar}',
    deliverableEn: '{deliverable_en}',
    deliverableAr: '{deliverable_ar}',
    resources: [
      {{ title: 'MDN', url: 'https://developer.mozilla.org/en-US/docs', kind: 'official' }},
      {{ title: 'TypeScript docs', url: 'https://www.typescriptlang.org/docs/', kind: 'official' }}
    ],
    challengeEn: '{challenge_en}',
    challengeAr: '{challenge_ar}',
    prerequisites: [],
    criteriaEn: ['{criterion1_en}', '{criterion2_en}'],
    criteriaAr: ['{criterion1_ar}', '{criterion2_ar}']
  }},"""

# Missing days data
# Phase 8: days 229-240 (12 days), slug=typescript-testing-security, topic=TypeScript
# Phase 10: days 281-300 (20 days), slug=devops-deployment, topic=DevOps  
# Phase 11: days 319-335 (17 days), slug=security-compliance, topic=Security

missing_days = []

# Phase 8: days 229-240
phase8_data = [
    (229, "CSS Selectors and Specificity", "محددات selektor CSS و الشذايية",
     "Write type-safe CSS selectors using CSS-in-JS or typed CSS modules.",
     "اكتب محددات CSS نظيفة القَlease باستخدام CSS-in-JS أو modules CSS المصاغة أنواعًا",
     "Master the cascade, specificity calculations, and inheritance patterns to predict styling application.",
     "اتقن عمليات التسلسل (cascade) وحسابات الشذايية و أنماط التوريث للتنبؤ بتطبيق التنسيقات",
     "Create a stylesheet with modular, reusable CSS classes and document their specificity scores.",
     "أنشئ ملف أنماط بعناصر مُعاد استخدامها وقم بتوثيق درجات الشذايية لكل Class",
     "Explain how !important, inline styles, and ID selectors affect the cascade order.",
     "اشرح كيف تعمل !important والتنسيقات الداخلية ومحركات تحديد ID على تأثير ترتيب التسلسل",
     "Build a CSS architecture guide for your project covering naming conventions (BEM) and component scoping.",
     "بُن دليًل للهندسة CSS لمشروعكcovered naming conventions (BEM) ونطاق المكونات"),
    (230, "Box Model and Layout Techniques", "صندوق النموذج والتقنيات-layout",
     "Diagnose layout issues using the box model and modern CSS layout methods.",
     "قم بتشخيص مشاكل التخطيط باستخدام نموذج الصندوق وطرق التخطيط CSS الحديثة",
     "Build a responsive layout using Flexbox that aligns items vertically and horizontally without hacks.",
     "بني تخطيطًا تردديًا باستخدام Flexbox مما arranging العناصر عمودًيًا وأفقيًا بدون حِكر",
     "Implement a CSS Grid layout for a complex page header with named areas and automatic tracks.",
     "قم بتنفيذ تخطيط CSS Grid لرأس صفحة معتم domain areas and automatic tracks",
     "Create an animation keyframes sequence that respects the prefers-reduced-motion accessibility preference.",
     "قم بإنشاء تسلسل keyframes animation that respects the prefers-reduced-motion accessibility preference"),
    (231, "Responsive Design Patterns", "أنماط التصميم الاستجيب",
     "Write a media query strategy for mobile-first development at scale.",
     "اكتب استراتيجية media query لتطوير first-mobile بحجم كبير",
     "Create a responsive typography scale using clamp(), rem units, and calc() for fluid scaling.",
     "قم بإنشاء مقياس طباعة ترددي باستخدام clamp() and rem units and calc() لل scaling سائل",
     "Design a navigation that transforms from a horizontal menu to a hamburger menu at breakpoints.",
     "صمم تنقلً ينتقل من قائمة أفقية إلى قائمة 햄бургلر عند نقاط الكسر"),
    (232, "CSS Preprocessors and Variables", "المُخلِّصات المتغيرات ومُخلِّصات CSS",
     "Define a CSS custom properties scale for theming (light/dark mode).",
     "حدد مقياس خصائص CSS المخصصة لـ theming (light/dark mode)",
     "Build a themable component using CSS variables and the :root selector with TypeScript types.",
     "بني مكونًا_themeable باستخدام CSS variables and the :root selector with TypeScript types",
     "Convert an existing SASS map of colors to CSS custom properties with type-safe access.",
     "قم بتحويل خريطة SASS للألوان إلى CSS custom properties with type-safe access"),
    (233, "Accessibility in CSS", "التوفر في CSS",
     "Ensure color contrast meets WCAG AA standards using a validation tool.",
     "تأكد من تباين الألوان يلبي معايير WCAG AA باستخدام أداة التحقق",
     "Create a focus-visible style that improves keyboard navigation accessibility.",
     "قم بإنشاء Style focus-visible that improves keyboard navigation accessibility",
     "Test a real webpage with a screen reader and report the navigation order findings.",
     "اختبر صفحة حقيقية باستخدام قارئ شاشة وأبلغ عن نتائج ترتيب التنقل"),
    (234, "Performance Optimization", "تحسين الأداء",
     "Reduce CSS file size by unused CSS removal and critical-path inlining.",
     "قلل حجم ملف CSS عن طريق إزالة الأنماط غير المستخدمة AND critical-path inlining",
     "Implement will-change and content-visibility to improve rendering performance on complex pages.",
     "قم بتنفيذ will-change and content-visibility to improve rendering performance on complex pages"),
    (234, "CSS Preflight and Reset", "المُخلِّصات الأساسية وإعادة الضبط",
     "Compare normalize.css and modern reset stylesheets and choose for your project.",
     "قارن normalize.css والمُخلِّصات الأساسية الحديثة واختر لملفك الشخصي",
     "Create a normalized CSS baseline that preserves useful browser defaults while removing inconsistencies.",
     "قم بإنشاء baseline CSS normalized that preserves useful browser defaults while removing inconsistencies"),
]

# Wait, I have a duplicate day 234. Let me restructure.

# Actually, let me just generate properly. I'll use a simpler approach - write the script that generates days.

print(f"Phase 8: 12 days (229-240)")
print(f"Phase 10: 20 days (281-300)")
print(f"Phase 11: 17 days (319-335)")
print(f"Total: {12 + 20 + 17} days")