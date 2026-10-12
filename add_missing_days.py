#!/usr/bin/env python3
"""Add missing curriculum days to phases 8, 10, and 11."""

import re, os

# Day entry template - exact match to existing format
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

PHASE8_SLUG = "typescript-testing-security"
PHASE10_SLUG = "devops-deployment" 
PHASE11_SLUG = "security-compliance"
TOPIC = "TypeScript"  # will be overridden per phase


def make_entry(day_number, title_en, title_ar, objective_en, objective_ar,
               task1_en, task1_ar, task2_en, task2_ar, task3_en, task3_ar, task4_en, task4_ar,
               criterion1_en, criterion1_ar, criterion2_en, criterion2_ar,
               lesson_en, lesson_ar, exercise_en, exercise_ar, deliverable_en, deliverable_ar,
               challenge_en, challenge_ar):
    return DAY_TEMPLATE.format(
        day_number=day_number,
        phase_slug=PHASE8_SLUG,  # will be overridden per phase call
        title_en=title_en,
        title_ar=title_ar,
        objective_en=objective_en,
        objective_ar=objective_ar,
        lesson_en=lesson_en,
        lesson_ar=lesson_ar,
        task1_en=task1_en, task1_ar=task1_ar,
        task2_en=task2_en, task2_ar=task2_ar,
        task3_en=task3_en, task3_ar=task3_ar,
        task4_en=task4_en, task4_ar=task4_ar,
        criterion1_en=criterion1_en, criterion1_ar=criterion1_ar,
        criterion2_en=criterion2_en, criterion2_ar=criterion2_ar,
        challenge_en=challenge_en, challenge_ar=challenge_ar,
    )


# ============================================================
# Phase 8: days 229-240 (12 days) - typescript-testing-security
# ============================================================
PHASE8_DAYS = [
    (229, "CSS Selectors and Specificity", "محددات selektor CSS و الشذايية",
     "Master the cascade, specificity calculations, and inheritance patterns to predict styling application.",
     "اتقن عمليات التسلسل (cascade) وحسابات الشذايية و أنماط التوريث للتنبؤ بتطبيق التنسيقات",
     "Add type annotations to a function parameters and return value",
     "Add type annotations to a function parameters and return value",
     "Create an interface for a user object with name, email, and role",
     "Create an interface for a user object with name, email, and role",
     "Create a generic identity function",
     "Create a generic identity function",
     "Use type inference without explicit annotations where possible",
     "Use type inference without explicit annotations where possible",
     "Can add type annotations",
     "Can add type annotations",
     "Design accessible color palettes and contrast ratios that meet WCAG AA standards across all breakpoints.",
     "صمم لوحات ألوان قابلة للوصول ونسب تباين تفي بمعايير WCAG AA across all breakpoints",
     "Design a focus-visible style that improves keyboard navigation accessibility.",
     "قم بإنشاء Style focus-visible that improves keyboard navigation accessibility",
     "A TypeScript file with annotations, an interface, and a generic function.",
     "A TypeScript file with annotations, an interface, and a generic function.",
     "Practice the concepts learned in this day's lessons.",
     "مارس المفاهيم التي learned في هذا اليوم's lessons."),
    (230, "Responsive Design Patterns", "أنماط التصميم الاستجابة",
     "Create a responsive typography scale using clamp(), rem units, and calc() for fluid scaling across breakpoints.",
     "قم بإنشاء مقياس طباعة ترددي باستخدام clamp() and rem units and calc() لل scaling سائل across breakpoints",
     "Design a navigation that transforms from a horizontal menu to a hamburger menu at breakpoints.",
     "صمم تنقلً ينتقل من قائمة أفقية إلى قائمة 햄бургلر عند نقاط الكسر",
     "Implement a CSS Grid layout for a complex page header with named areas and automatic tracks.",
     "قم بتنفيذ تخطيط CSS Grid لرأس صفحة معتم domain areas and automatic tracks",
     "Create an animation keyframes sequence that respects the prefers-reduced-motion accessibility preference.",
     "قم بإنشاء تسلسل keyframes animation that respects the prefers-reduced-motion accessibility preference",
     "Mobile-First Responsive Typography",
     "طباعة الاستجابة first-mobile",
     "Set up a scalable image strategy using srcset, sizes, and responsive images in HTML and CSS.",
     "قم بإعداد استراتيجية صور scale باستخدام srcset, sizes, and responsive images in HTML and CSS",
     "Test a responsive design on three real devices and report the breakpoints that need refinement.",
     "قم باختبار تصميمات استجابة على ثلاثةDevices حقيقية وأبلغ عن نقاط الكسر التي تحتاج تعديل",
     "Design a responsive typography scale using clamp(), rem units, and calc() for fluid scaling across breakpoints.",
     "قم بإنشاء مقياس طباعة ترددي باستخدام clamp() and rem units and calc() لل scaling سائل across breakpoints",
     "Configure a basic CI pipeline using GitHub Actions that runs on every push to main.",
     "Configure a basic CI pipeline using GitHub Actions that runs on every push to main"),
    (231, "CSS Preflight and Reset", "المُخلِّصات الأساسية وإعادة الضبط",
     "Create a normalized CSS baseline that preserves useful browser defaults while removing inconsistencies.",
     "قم بإنشاء baseline CSS normalized that preserves useful browser defaults while removing inconsistencies",
     "Compare normalize.css and modern reset stylesheets and choose for your project.",
     "قارن normalize.css والمُخلِّصات الأساسية الحديثة واختر لملفك الشخصي",
     "Create a focus-visible style that improves keyboard navigation accessibility.",
     "قم بإنشاء Style focus-visible that improves keyboard navigation accessibility",
     "Create a normalized CSS baseline that preserves useful browser defaults while removing inconsistencies.",
     "قم بإنشاء baseline CSS normalized that preserves useful browser defaults while removing inconsistencies",
     "Never hardcode credentials in pipeline YAML files.",
     "Never hardcode credentials in pipeline YAML files"),
    (232, "CSS Custom Properties for Theming", "خصائص CSS المخصصة لـ theming",
     "Build a themable component using CSS variables and the :root selector with TypeScript types.",
     "بني مكونًا_themeable باستخدام CSS variables and the :root selector with TypeScript types",
     "Define a CSS custom properties scale for theming (light/dark mode).",
     "حدد مقياس خصائص CSS المخصصة لـ theming (light/dark mode)",
     "Convert an existing SASS map of colors to CSS custom properties with type-safe access.",
     "قم بتحويل خريطة SASS للألوان إلى CSS custom properties with type-safe access",
     "Create a themable component using CSS variables and the :root selector with TypeScript types.",
     "بني مكونًا_themeable باستخدام CSS variables and the :root selector with TypeScript types"),
    (233, "Accessibility in CSS", "التوفر في CSS",
     "Create a focus-visible style that improves keyboard navigation accessibility.",
     "قم بإنشاء Style focus-visible that improves keyboard navigation accessibility",
     "Ensure color contrast meets WCAG AA standards using a validation tool.",
     "تأكد من تباين الألوان يلبي معايير WCAG AA باستخدام أداة التحقق",
     "Test a real webpage with a screen reader and report the navigation order findings.",
     "اختبر صفحة حقيقية باستخدام قارئ شاشة وأبلغ عن نتائج ترتيب التنقل",
     "Implement server-side input validation using express-validator or equivalent, and prevent injection attacks.",
     "Implement server-side input validation using express-validator or equivalent, and prevent injection attacks"),
    (234, "Performance Optimization", "تحسين الأداء",
     "Implement will-change and content-visibility to improve rendering performance on complex pages.",
     "قم بتنفيذ will-change and content-visibility to improve rendering performance on complex pages",
     "Reduce CSS file size by unused CSS removal and critical-path inlining.",
     "قلل حجم ملف CSS عن طريق إزالة الأنماط غير المستخدمة AND critical-path inlining",
     "Implement will-change and content-visibility to improve rendering performance on complex pages.",
     "قم بتنفيذ will-change and content-visibility to improve rendering performance on complex pages"),
    (235, "CSS Architecture Best Practices", "أفضل الممارسات لهندسة CSS",
     "Organize CSS using BEM methodology, partials, and modular components for maintainability.",
     "نظم CSS باستخدام BEM methodology, partials, and modular components for maintainability",
     "Build a scalable partials structure using @import or @use with TypeScript type safety.",
     "بني partials structure scalable باستخدام @import or @use with TypeScript type safety",
     "Build a reset stylesheet using vanilla CSS that removes all browser default styling.",
     "بني File Resetstylesheet usando vanilla CSS that removes all browser default styling"),
    (236, "CSS Scrollbar Styling", "تنسيق شريط التمرير في CSS",
     "Create a custom scrollbar that matches the design system while maintaining accessibility.",
     "قم بإنشاء Scrollbar مخصص يتوافق مع نظام التصميم مع الحفاظ على accessibility",
     "Style the scrollbar using ::-webkit-scrollbar and ::-webkit-scrollbar-thumb for cross-browser consistency.",
     "قم بتنسيق scrollbar باستخدام ::-webkit-scrollbar and ::-webkit-scrollbar-thumb for cross-browser consistency"),
    (237, "CSS Animation and Keyframes", "الAnimation و keyframes في CSS",
     "Design a hover state with transform transition that provides visual feedback without triggering motion sensitivity.",
     "صمم State hover with transform transition that provides visual feedback without triggering motion sensitivity",
     "Create a CSS animation keyframes sequence that respects the prefers-reduced-motion accessibility preference.",
     "قم بإنشاء تسلسل keyframes animation that respects the prefers-reduced-motion accessibility preference"),
    (238, "CSS Grid Advanced Layout", "CSS Grid Layout متقدم",
     "Build a complex page layout using CSS Grid with named areas, automatic tracks, and responsive behavior.",
     "بني تخطيط صفحة معقدة باستخدام CSS Grid with named areas and automatic tracks وسلوكيات responsive",
     "Implement masonry grid layout using CSS Grid and the dense keyword for optimal packing.",
     "قم بتنفيذ masonry grid layout using CSS Grid and the dense keyword for optimal packing"),
    (239, "CSS Container Queries", "استعلامات الحاوية في CSS",
     "Implement container queries to create truly component-based responsive designs that respond to parent container size, not just viewport.",
     "قم بتنفيذ container queries لإنشاء designs responsive truly component-based that respond to parent container size, not just viewport",
     "Build a component library that uses container queries to adapt UI based on available space.",
     "بني مكتبة مكونات تستخدم container queries لتكيف UI based on available space"),
    (240, "CSS Filter Effects", "تأثيرات الفلتر في CSS",
     "Apply CSS filter effects (blur, brightness, contrast) to create visual enhancements without impacting document flow.",
     "قم بتطبيق effect CSS filter (blur, brightness, contrast) لإنشاء enhancements مرئية without impacting document flow"),
]

# Generate phase 8 entries
phase8_entries = []
for day_num, title_en, title_ar, objective_en, objective_ar, t1e, t1a, t2e, t2a, t3e, t3a, t4e, t4a, c1e, c1a, c2e, c2a, le, la, ex, da, ch, ca in PHASE8_DAYS:
    entry = make_entry(
        day_number=day_num,
        title_en=title_en, title_ar=title_ar,
        objective_en=objective_en, objective_ar=objective_ar,
        task1_en=t1e, task1_ar=t1a,
        task2_en=t2e, task2_ar=t2a,
        task3_en=t3e, task3_ar=t3a,
        task4_en=t4e, task4_ar=t4a,
        criterion1_en=c1e, criterion1_ar=c1a,
        criterion2_en=c2e, criterion2_ar=c2a,
        lesson_en=le, lesson_ar=la,
        exercise_en=ex, exercise_ar=da,
        deliverable_en=deliverable_en, deliverable_ar=deliverable_ar,  # fix: variable name mismatch
        challenge_en=challenge_en, challenge_ar=challenge_ar
    )
    # Actually the make_entry function has different param names - let me fix this
    pass

# Let me just directly create entries without the function complexity
print("Starting to generate entries...")

# For now, let me just directly modify the files with the entries I'll create manually
# I'll use a simpler approach - edit the files directly

# First, let me see the exact format needed by looking at an existing entry insertion point
print("Checking phase-8.ts structure...")
with open('src/features/curriculum/days/phase-8.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the position after day 228's closing and before the final ]
idx = content.rfind('dayNumber: 228')
close_bracket = content.rfind(']')
print(f"day 228 at: {idx}, closing ] at: {close_bracket}")
print(f"Content between: {content[idx:close_bracket+1][-300:]}")

print("\nNow I'll directly edit the files to add the missing days.")
print("This is a complex task - let me proceed step by step.")