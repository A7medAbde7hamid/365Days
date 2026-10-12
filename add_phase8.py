#!/usr/bin/env python3
import re, os

# ============================================================
# Phase 8: Add days 229-240 (12 days) after day 228
# ============================================================
with open('src/features/curriculum/days/phase-8.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find day 228 entry end and closing bracket
day228_marker = 'dayNumber: 228'
idx = content.find(day228_marker)
if idx < 0:
    print("Could not find day 228 in phase-8.ts")
else:
    end_search_start = idx + len(day228_marker)
    end_idx = content.find('},', end_search_start)
    if end_idx < 0:
        print("Could not find end of day 228 entry")
    else:
        close_bracket = content.rfind(']')
        if close_bracket < 0:
            print("Could not find closing bracket")
        else:
            insert_point = end_idx + 2
            
            new_days_text = """  {
    dayNumber: 229,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'CSS Selectors and Specificity',
    titleAr: 'محددات selektor CSS و الشذايية',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Master the cascade, specificity calculations, and inheritance patterns to predict styling application.',
    objectiveAr: 'اتقن عمليات التسلسل (cascade) وحسابات الشذايية و أنماط التوريث للتنبؤ بتطبيق التنسيقات',
    lessonEn:
      'CSS specificity determines how conflicts between competing rules are resolved. Understanding selector weight, inheritance, and the cascade order is essential for maintaining scalable stylesheets.',
    lessonAr:
      'حددانية الشذايية CSS تحدد كيف يتم حل النزاعات بين القواعد المتنافسة. فهم وزن المحددات، والتوريث، وترتيب التسلسل ضروري لتنظيم أنماط قابلة للصيانة.',
    tasks: [
      {
        en: 'Add type annotations to a function parameters and return value',
        ar: 'Add type annotations to a function parameters and return value'
      },
      {
        en: 'Create an interface for a user object with name, email, and role',
        ar: 'Create an interface for a user object with name, email, and role'
      },
      {
        en: 'Create a generic identity function',
        ar: 'Create a generic identity function'
      },
      {
        en: 'Use type inference without explicit annotations where possible',
        ar: 'Use type inference without explicit annotations where possible'
      }
    ],
    exerciseEn: 'Refactor a small JS file with type annotations, interfaces, and a generic function.',
    exerciseAr: 'Refactor a small JS file with type annotations, interfaces, and a generic function.',
    deliverableEn: 'A TypeScript file with annotations, an interface, and a generic function.',
    deliverableAr: 'A TypeScript file with annotations, an interface, and a generic function.',
    resources: [
      {
        title: 'MDN',
        url: 'https://developer.mozilla.org/en-US/docs',
        kind: 'official'
      },
      {
        title: 'TypeScript docs',
        url: 'https://www.typescriptlang.org/docs/',
        kind: 'official'
      }
    ],
    challengeEn: 'Practice the concepts learned in this day\'s lessons.',
    challengeAr: 'مارس المفاهيم التي learned في هذا اليوم\'s lessons.',
    prerequisites: [],
    criteriaEn: ['Can add type annotations', 'Can create an interface'],
    criteriaAr: ['Can add type annotations', 'Can create an interface']
  },
  {
    dayNumber: 230,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'Responsive Design Patterns',
    titleAr: 'أنماط التصميم الاستجابة',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Create a responsive typography scale using clamp(), rem units, and calc() for fluid scaling across breakpoints.',
    objectiveAr: 'قم بإنشاء مقياس طباعة ترددي باستخدام clamp() and rem units and calc() لل scaling سائل across breakpoints',
    lessonEn:
      'Fluid typography is essential for responsive design. Using clamp(), rem units, and calc() allows type to scale smoothly between breakpoints without breaking layout or accessibility.',
    lessonAr:
      'الطباعة الاستجابة ضرورية لتصميم الويب. باستخدام clamp() and rem units and calc() يسمح النوع بالتcaling سائل بين نقاط الكسر دون كسر التخطيط أو التوفرية.',
    tasks: [
      {
        en: 'Design a responsive typography scale using clamp(), rem, and calc() for three breakpoints',
        ar: 'Design a responsive typography scale using clamp() and rem and calc() for three breakpoints'
      },
      {
        en: 'Set up a scalable image strategy using srcset and sizes',
        ar: 'Set up a scalable image strategy using srcset and sizes'
      },
      {
        en: 'Test a responsive design on three real devices and report breakpoints',
        ar: 'Test a responsive design on three real devices and report breakpoints'
      },
      {
        en: 'Configure a basic CI pipeline using GitHub Actions that runs on every push to main',
        ar: 'Configure a basic CI pipeline using GitHub Actions that runs on every push to main'
      }
    ],
    exerciseEn: 'Set up a responsive typography scale and test on three devices.',
    exerciseAr: 'Set up a responsive typography scale and test on three devices.',
    deliverableEn: 'A responsive typography scale with clamp() and a responsive image strategy.',
    deliverableAr: 'A responsive typography scale with clamp() and a responsive image strategy.',
    resources: [
      {
        title: 'MDN',
        url: 'https://developer.mozilla.org/en-US/docs',
        kind: 'official'
      },
      {
        title: 'CSS-Tricks',
        url: 'https://css-tricks.com/',
        kind: 'reference'
      }
    ],
    challengeEn: 'Build a responsive page layout and test on mobile and desktop.',
    challengeAr: 'بناء صفحة استجابة واختبارها على الجوال وسطح المكتب.',
    prerequisites: [],
    criteriaEn: ['Can create a responsive typography scale', 'Can configure srcset and sizes'],
    criteriaAr: ['Can create a responsive typography scale', 'Can configure srcset and sizes']
  },
  {
    dayNumber: 231,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'CSS Preflight and Reset',
    titleAr: 'المُخلِّصات الأساسية وإعادة الضبط',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Create a normalized CSS baseline that preserves useful browser defaults while removing inconsistencies.',
    objectiveAr: 'قم بإنشاء baseline CSS normalized that preserves useful browser defaults while removing inconsistencies',
    lessonEn:
      'Browser default stylesheets vary significantly across user agents. A normalized baseline removes inconsistencies while preserving useful defaults, providing a consistent starting point for your project\'s custom styles.',
    lessonAr:
      'تختلف ملفات تنسيق المستعرض الافتراضية بشكل كبير عبر مستخدمين مختلفة. baseline normalized يزيل التناقضات مع الحفاظ على المفيد الافتراضي، مما يوفر نقطة بداية متسقة لأنماطك المخصصة.',
    tasks: [
      {
        en: 'Compare normalize.css and modern reset stylesheets',
        ar: 'Compare normalize.css and modern reset stylesheets'
      },
      {
        en: 'Create a reset stylesheet using vanilla CSS that removes all browser default styling',
        ar: 'Create a reset stylesheet using vanilla CSS that removes all browser default styling'
      },
      {
        en: 'Apply your reset at the top of your main stylesheet',
        ar: 'Apply your reset at the top of your main stylesheet'
      },
      {
        en: 'Test page rendering across Chrome, Firefox, and Safari',
        ar: 'Test page rendering across Chrome, Firefox, and Safari'
      }
    ],
    exerciseEn: 'Create a CSS reset that preserves meaningful browser defaults.',
    exerciseAr: 'Create a CSS reset that preserves meaningful browser defaults.',
    deliverableEn: 'A CSS reset file that normalizes browser defaults.',
    deliverableAr: 'A CSS reset file that normalizes browser defaults.',
    resources: [
      {
        title: 'MDN',
        url: 'https://developer.mozilla.org/en-US/docs',
        kind: 'official'
      },
      {
        title: 'CSS Reset FAQ',
        url: 'https://github.com/necolas/normalize.css/',
        kind: 'reference'
      }
    ],
    challengeEn: 'Choose a reset stylesheet and document your reasoning.',
    challengeAr: 'اختر ملف reset وضح سبب اختيارك.',
    prerequisites: [],
    criteriaEn: ['Can create a CSS reset', 'Can explain the difference between normalize and reset'],
    criteriaAr: ['Can create a CSS reset', 'Can explain the difference between normalize and reset']
  },
  {
    dayNumber: 232,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'CSS Custom Properties for Theming',
    titleAr: 'خصائص CSS المخصصة لـ theming',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Build a themable component using CSS variables and the :root selector with TypeScript types.',
    objectiveAr: 'بني مكونًا_themeable باستخدام CSS variables and the :root selector with TypeScript types',
    lessonEn:
      'CSS custom properties (--variables) enable dynamic theming (light/dark mode) without JavaScript. Combined with TypeScript types, they provide compile-time safety for your design tokens.',
    lessonAr:
      'المتغيرات CSS (--variables) enable dynamic theming (light/dark mode) بدون JavaScript. مصحوبة بـ TypeScript types, توفر أمان وقت التجميع لتصميم tokens.',
    tasks: [
      {
        en: 'Define a CSS custom properties scale for light and dark mode',
        ar: 'Define a CSS custom properties scale for light and dark mode'
      },
      {
        en: 'Build a themable component using CSS variables and the :root selector',
        ar: 'Build a themable component using CSS variables and the :root selector'
      },
      {
        en: 'Type-safe access to design tokens in a TypeScript component',
        ar: 'Type-safe access to design tokens in a TypeScript component'
      },
      {
        en: 'Convert an existing SASS map of colors to CSS custom properties',
        ar: 'Convert an existing SASS map of colors to CSS custom properties'
      }
    ],
    exerciseEn: 'Create a CSS variable themable component.',
    exerciseAr: 'Create a CSS variable themable component.',
    deliverableEn: 'A themable CSS component with type-safe design tokens.',
    deliverableAr: 'A themable CSS component with type-safe design tokens.',
    resources: [
      {
        title: 'CSS Tricks',
        url: 'https://css-tricks.com/using-css-custom-properties/',
        kind: 'reference'
      },
      {
        title: 'Smashing Magazine',
        url: 'https://www.smashingmagazine.com/2018/07/introducing-css-variables/',
        kind: 'reference'
      }
    ],
    challengeEn: 'Implement a light/dark mode toggle using CSS variables.',
    challengeAr: 'Implement a light/dark mode toggle using CSS variables.',
    prerequisites: [],
    criteriaEn: ['Can define CSS custom properties', 'Can build a themable component'],
    criteriaAr: ['Can define CSS custom properties', 'Can build a themable component']
  },
  {
    dayNumber: 233,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'Accessibility in CSS',
    titleAr: 'التوفر في CSS',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Ensure color contrast meets WCAG AA standards using a validation tool, and create a focus-visible style for keyboard navigation.',
    objectiveAr: 'قم بإنشاء Style focus-visible that improves keyboard navigation accessibility',
    lessonEn:
      'Accessibility in CSS involves color contrast, focus styles, and respecting user preferences like reduced motion. WCAG AA contrast ratios ensure content is perceivable for users with visual impairments.',
    lessonAr:
      'التوفر في CSS Involves color contrast, focus styles, and respecting user preferences like reduced motion. WCAG AA contrast ratios ensure content is perceivable for users with visual impairments.',
    tasks: [
      {
        en: 'Test color contrast using the WebAIM contrast checker',
        ar: 'Test color contrast using the WebAIM contrast checker'
      },
      {
        en: 'Create a focus-visible style that improves keyboard navigation',
        ar: 'Create a focus-visible style that improves keyboard navigation'
      },
      {
        en: 'Test a real webpage with a screen reader and report navigation order',
        ar: 'Test a real webpage with a screen reader and report navigation order'
      },
      {
        en: 'Set a prefers-reduced-motion media query to disable non-essential animations',
        ar: 'Set a prefers-reduced-motion media query to disable non-essential animations'
      }
    ],
    exerciseEn: 'Add accessible color contrast and focus-visible styles to a button component.',
    exerciseAr: 'Add accessible color contrast and focus-visible styles to a button component.',
    deliverableEn: 'A button component with WCAG AA contrast and focus-visible styles.',
    deliverableAr: 'A button component with WCAG AA contrast and focus-visible styles.',
    resources: [
      {
        title: 'WebAIM',
        url: 'https://webaim.org/resources/contrast/',
        kind: 'official'
      },
      {
        title: 'MDN Focus-visible',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible',
        kind: 'official'
      }
    ],
    challengeEn: 'Audit a webpage for color contrast and add focus styles.',
    challengeAr: 'مراجعة صفحة ويب لتباين اللون وإضافة styles focus.',
    prerequisites: [],
    criteriaEn: ['Can test color contrast', 'Can add focus-visible styles'],
    criteriaAr: ['Can test color contrast', 'Can add focus-visible styles']
  },
  {
    dayNumber: 234,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'Performance Optimization',
    titleAr: 'تحسين الأداء',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Implement will-change and content-visibility to improve rendering performance on complex pages.',
    objectiveAr: 'قم بتنفيذ will-change and content-visibility to improve rendering performance on complex pages',
    lessonEn:
      'The will-change property hints to the browser which properties will change, allowing it to optimize ahead of time. content-visibility is a powerful tool for skipping layout and paint work for off-screen content.',
    lessonAr:
      'will-change يتم إرشاد المتصفح لتغيير الخصائص، allowing it to optimize ahead of time. content-visibility is a powerful tool for skipping layout and paint work for off-screen content.',
    tasks: [
      {
        en: 'Implement will-change on a frequently animated element',
        ar: 'Implement will-change on a frequently animated element'
      },
      {
        en: 'Apply content-visibility to a large off-screen image gallery',
        ar: 'Apply content-visibility to a large off-screen image gallery'
      },
      {
        en: 'Measure page load performance before and after optimization',
        ar: 'Measure page load performance before and after optimization'
      },
      {
        en: 'Identify long tasks using the Performance API',
        ar: 'Identify long tasks using the Performance API'
      }
    ],
    exerciseEn: 'Add will-change and content-visibility to a product grid component.',
    exerciseAr: 'Add will-change and content-visibility to a product grid component.',
    deliverableEn: 'A product grid with performance optimizations.',
    deliverableAr: 'A product grid with performance optimizations.',
    resources: [
      {
        title: 'MDN',
        url: 'https://developer.mozilla.org/en-US/docs',
        kind: 'official'
      },
      {
        title: 'HTML5 Rocks',
        url: 'https://www.html5rocks.com/en/tutorials/performance/content-visibility/',
        kind: 'reference'
      }
    ],
    challengeEn: 'Implement content-visibility on a section of your site and measure the impact.',
    challengeAr: 'Implement content-visibility on a section of your site and measure the impact.',
    prerequisites: [],
    criteriaEn: ['Can implement will-change', 'Can apply content-visibility'],
    criteriaAr: ['Can implement will-change', 'Can apply content-visibility']
  },
  {
    dayNumber: 235,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'CSS Architecture Best Practices',
    titleAr: 'أفضل الممارسات لهندسة CSS',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Organize CSS using BEM methodology, partials, and modular components for maintainability.',
    objectiveAr: 'نظم CSS باستخدام BEM methodology, partials, and modular components for maintainability',
    lessonEn:
      'Maintainable CSS architecture relies on naming conventions (BEM), partials/partials, and modular components. This makes styles reusable, predictable, and easier to scale across a large codebase.',
    lessonAr:
      'هندسة أنماط قابلة للصيانة تعتمد على قواعد التسمية (BEM), partials/partials, and modular components. This makes styles reusable, predictable, and easier to scale across a large codebase.',
    tasks: [
      {
        en: 'Refactor a CSS file using BEM naming conventions',
        ar: 'Refactor a CSS file using BEM naming conventions'
      },
      {
        en: 'Organize CSS into partials imported via @import or @use',
        ar: 'Organize CSS into partials imported via @import or @use'
      },
      {
        en: 'Create a modular component with scoped CSS',
        ar: 'Create a modular component with scoped CSS'
      },
      {
        en: 'Document your CSS architecture and naming conventions',
        ar: 'Document your CSS architecture and naming conventions'
      }
    ],
    exerciseEn: 'Refactor existing CSS to use BEM and partials.',
    exerciseAr: 'Refactor existing CSS to use BEM and partials.',
    deliverableEn: 'A BEM-structured CSS architecture document.',
    deliverableAr: 'A BEM-structured CSS architecture document.',
    resources: [
      {
        title: 'Smashing Magazine',
        url: 'https://www.smashingmagazine.com/2018/01/writing-maintainable-css/',
        kind: 'reference'
      },
      {
        title: 'BEM Methodology',
        url: 'https://getbem.com/',
        kind: 'reference'
      }
    ],
    challengeEn: 'Refactor a legacy CSS file using BEM and document your conventions.',
    challengeAr: 'Refactor a legacy CSS file using BEM and document your conventions.',
    prerequisites: [],
    criteriaEn: ['Can refactor to BEM', 'Can organize partials'],
    criteriaAr: ['Can refactor to BEM', 'Can organize partials']
  },
  {
    dayNumber: 236,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'CSS Scrollbar Styling',
    titleAr: 'تنسيق شريط التمرير في CSS',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Style the scrollbar using ::-webkit-scrollbar and ::-webkit-scrollbar-thumb for cross-browser consistency while maintaining accessibility.',
    objectiveAr: 'قم بتنسيق scrollbar باستخدام ::-webkit-scrollbar and ::-webkit-scrollbar-thumb for cross-browser consistency while maintaining accessibility',
    lessonEn:
      'Styling the scrollbar with CSS pseudo-elements works in WebKit-based browsers. A consistent, accessible scrollbar design improves UX without impacting document flow or screen reader behavior.',
    lessonAr:
      'Styling the scrollbar with CSS pseudo-elements works in WebKit-based browsers. A consistent, accessible scrollbar design improves UX without impacting document flow or screen reader behavior.',
    tasks: [
      {
        en: 'Style the scrollbar using ::-webkit-scrollbar, ::-webkit-scrollbar-track, and ::-webkit-scrollbar-thumb',
        ar: 'Style the scrollbar using ::-webkit-scrollbar, ::-webkit-scrollbar-track, and ::-webkit-scrollbar-thumb'
      },
      {
        en: 'Ensure the scrollbar thumb has a minimum contrast ratio of 3:1 against the track',
        ar: 'Ensure the scrollbar thumb has a minimum contrast ratio of 3:1 against the track'
      },
      {
        en: 'Test scrollbar styling across Chrome, Firefox, and Edge',
        ar: 'Test scrollbar styling across Chrome, Firefox, and Edge'
      },
      {
        en: 'Add a preference-reduced-motion fallback for scrollbar animations',
        ar: 'Add a preference-reduced-motion fallback for scrollbar animations'
      }
    ],
    exerciseEn: 'Style the scrollbar on a long practice page.',
    exerciseAr: 'Style the scrollbar on a long practice page.',
    deliverableEn: 'A custom-styled scrollbar that matches the design system.',
    deliverableAr: 'A custom-styled scrollbar that matches the design system.',
    resources: [
      {
        title: 'CSS Tricks',
        url: 'https://css-tricks.com/almanac/properties/s/scrollbar/',
        kind: 'reference'
      },
      {
        title: 'MDN',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS::-webkit-scrollbar',
        kind: 'official'
      }
    ],
    challengeEn: 'Style a scrollbar to match your design system\'s color palette.',
    challengeAr: 'Style a scrollbar to match your design system\'s color palette.',
    prerequisites: [],
    criteriaEn: ['Can style the scrollbar', 'Can ensure accessibility contrast'],
    criteriaAr: ['Can style the scrollbar', 'Can ensure accessibility contrast']
  },
  {
    dayNumber: 237,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'CSS Animation and Keyframes',
    titleAr: 'الAnimation و keyframes في CSS',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Create a CSS animation keyframes sequence that respects the prefers-reduced-motion accessibility preference, providing hover states with transform transitions for visual feedback.',
    objectiveAr: 'قم بإنشاء تسلسل keyframes animation that respects the prefers-reduced-motion accessibility preference, providing hover states with transform transitions for visual feedback.',
    lessonEn:
      'CSS animations bring UI to life, but must respect user preferences. Using prefers-reduced-motion ensures that users with motion sensitivities are not disrupted. Transform transitions on hover provide visual feedback without triggering motion sensitivity.',
    lessonAr:
      'CSS animations bring UI to life, but must respect user preferences. Using prefers-reduced-motion ensures that users with motion sensitivities are not disrupted. Transform transitions on hover provide visual feedback without triggering motion sensitivity.',
    tasks: [
      {
        en: 'Create a keyframes animation that fades and scales an element',
        ar: 'Create a keyframes animation that fades and scales an element'
      },
      {
        en: 'Add a hover state with transform transition for visual feedback',
        ar: 'Add a hover state with transform transition for visual feedback'
      },
      {
        en: 'Add @media (prefers-reduced-motion: no-preference) to enable animations',
        ar: 'Add @media (prefers-reduced-motion: no-preference) to enable animations'
      },
      {
        en: 'Test animation accessibility with screen reader users',
        ar: 'Test animation accessibility with screen reader users'
      }
    ],
    exerciseEn: 'Create a hover animation that respects prefers-reduced-motion.',
    exerciseAr: 'Create a hover animation that respects prefers-reduced-motion.',
    deliverableEn: 'A CSS animation keyframes sequence with a hover state and reduced-motion fallback.',
    deliverableAr: 'A CSS animation keyframes sequence with a hover state and reduced-motion fallback.',
    resources: [
      {
        title: 'MDN',
        url: 'https://developer.mozilla.org/en-US/docs',
        kind: 'official'
      },
      {
        title: 'CSS Animation',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation',
        kind: 'official'
      }
    ],
    challengeEn: 'Create a hover state with transform transition and prefers-reduced-motion fallback.',
    challengeAr: 'Create a hover animation that respects prefers-reduced-motion.',
    prerequisites: [],
    criteriaEn: ['Can create keyframes animation', 'Can add prefers-reduced-motion fallback'],
    criteriaAr: ['Can create keyframes animation', 'Can add prefers-reduced-motion fallback']
  },
  {
    dayNumber: 238,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'CSS Grid Advanced Layout',
    titleAr: 'CSS Grid Layout متقدم',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Build a complex page layout using CSS Grid with named areas, automatic tracks, and responsive behavior.',
    objectiveAr: 'بني تخطيط صفحة معقدة باستخدام CSS Grid with named areas and automatic tracks وسلوكيات responsive',
    lessonEn:
      'CSS Grid is the most powerful layout mechanism available in modern CSS. Named areas, automatic tracks, and the dense keyword enable complex, responsive grid layouts that adapt to any screen size.',
    lessonAr:
      'CSS Grid هو آلية التخطيط الأكثر قوة المتاحة في CSS الحديث. named areas, automatic tracks, and the dense keyword enable complex, responsive grid layouts that adapt to any screen size.',
    tasks: [
      {
        en: 'Build a complex page layout using CSS Grid with named areas',
        ar: 'Build a complex page layout using CSS Grid with named areas'
      },
      {
        en: 'Implement masonry grid layout using CSS Grid and the dense keyword',
        ar: 'Implement masonry grid layout using CSS Grid and the dense keyword'
      },
      {
        en: 'Make the grid responsive using auto-fit and minmax()',
        ar: 'Make the grid responsive using auto-fit and minmax()'
      },
      {
        en: 'Test the grid layout across breakpoints and report findings',
        ar: 'Test the grid layout across breakpoints and report findings'
      }
    ],
    exerciseEn: 'Build a product grid layout using CSS Grid with named areas and auto-fit.',
    exerciseAr: 'Build a product grid layout using CSS Grid with named areas and auto-fit.',
    deliverableEn: 'A CSS Grid layout for a product gallery with named areas and auto-fit.',
    deliverableAr: 'A CSS Grid layout for a product gallery with named areas and auto-fit.',
    resources: [
      {
        title: 'CSS Tricks',
        url: 'https://css-tricks.com/snippets/css/complete-grid/',
        kind: 'reference'
      },
      {
        title: 'MDN',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid',
        kind: 'official'
      }
    ],
    challengeEn: 'Build a responsive dashboard layout using CSS Grid with named areas.',
    challengeAr: 'Build a responsive dashboard layout using CSS Grid with named areas.',
    prerequisites: [],
    criteriaEn: ['Can build a CSS Grid layout', 'Can use auto-fit and minmax()'],
    criteriaAr: ['Can build a CSS Grid layout', 'Can use auto-fit and minmax()']
  },
  {
    dayNumber: 239,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'CSS Container Queries',
    titleAr: 'استعلامات الحاوية في CSS',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Implement container queries to create truly component-based responsive designs that respond to parent container size, not just viewport.',
    objectiveAr: 'قم بتنفيذ container queries لإنشاء designs responsive truly component-based that respond to parent container size, not just viewport',
    lessonEn:
      'Container queries enable component-based responsiveness by reacting to the parent container\'s size rather than the viewport. This is the future of modular, reusable UI components.',
    lessonAr:
      'container queries enable component-based responsiveness by reacting to the parent container size rather than the viewport. This is the future of modular, reusable UI components.',
    tasks: [
      {
        en: 'Implement a container query using @container',
        ar: 'Implement a container query using @container'
      },
      {
        en: 'Build a component library that adapts based on container width',
        ar: 'Build a component library that adapts based on container width'
      },
      {
        en: 'Test component rendering at different container sizes',
        ar: 'Test component rendering at different container sizes'
      },
      {
        en: 'Combine container queries with CSS custom properties for theming',
        ar: 'Combine container queries with CSS custom properties for theming'
      }
    ],
    exerciseEn: 'Implement a container query to change component layout based on width.',
    exerciseAr: 'Implement a container query to change component layout based on width.',
    deliverableEn: 'A component using container queries to adapt its layout.',
    deliverableAr: 'A component using container queries to adapt its layout.',
    resources: [
      {
        title: 'MDN',
        url: 'https://developer.mozilla.org/en-US/docs',
        kind: 'official'
      },
      {
        title: 'Eric Portis - Container Queries',
        url: 'https://www.joshwcomeau.com/css/container-queries/',
        kind: 'reference'
      }
    ],
    challengeEn: 'Implement a container query to change a component\'s layout at a specific breakpoint.',
    challengeAr: 'Implement a container query to change a component layout at a specific breakpoint.',
    prerequisites: [],
    criteriaEn: ['Can implement a container query', 'Can build a responsive component library'],
    criteriaAr: ['Can implement a container query', 'Can build a responsive component library']
  },
  {
    dayNumber: 240,
    phaseSlug: 'typescript-testing-security',
    kind: 'lesson' as const,
    titleEn: 'CSS Filter Effects',
    titleAr: 'تأثيرات الفلتر في CSS',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Apply CSS filter effects (blur, brightness, contrast) to create visual enhancements without impacting document flow.',
    objectiveAr: 'قم بتطبيق effect CSS filter (blur, brightness, contrast) لإنشاء enhancements مرئية without impacting document flow',
    lessonEn:
      'CSS filter effects (blur(), brightness(), contrast()) allow visual enhancements to be applied directly in the browser without modifying the document structure or requiring JavaScript.',
    lessonAr:
      'CSS filter effects (blur(), brightness(), contrast()) allow visual enhancements to be applied directly in the browser without modifying the document structure or requiring JavaScript.',
    tasks: [
      {
        en: 'Apply blur(), brightness(), and contrast() filter effects',
        ar: 'Apply blur(), brightness(), and contrast() filter effects'
      },
      {
        en: 'Combine multiple filter functions for complex visual effects',
        ar: 'Combine multiple filter functions for complex visual effects'
      },
      {
        en: 'Test filter effects across browser compatibility',
        ar: 'Test filter effects across browser compatibility'
      },
      {
        en: 'Add a prefers-reduced-motion fallback for filter animations',
        ar: 'Add a prefers-reduced-motion fallback for filter animations'
      }
    ],
    exerciseEn: 'Apply CSS filter effects to an image gallery.',
    exerciseAr: 'Apply CSS filter effects to an image gallery.',
    deliverableEn: 'An image gallery with CSS filter effects.',
    deliverableAr: 'An image gallery with CSS filter effects.',
    resources: [
      {
        title: 'MDN',
        url: 'https://developer.mozilla.org/en-US/docs',
        kind: 'official'
      },
      {
        title: 'CSS Filters',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter',
        kind: 'official'
      }
    ],
    challengeEn: 'Apply multiple filter effects to create a visually enhanced image gallery.',
    challengeAr: 'Apply multiple filter effects to create a visually enhanced image gallery.',
    prerequisites: [],
    criteriaEn: ['Can apply CSS filter effects', 'Can test browser compatibility'],
    criteriaAr: ['Can apply CSS filter effects', 'Can test browser compatibility']
  }"""

            new_content = content[:insert_point] + new_days_text + content[close_bracket:]
            
            with open('src/features/curriculum/days/phase-8.ts', 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print("Successfully added 12 missing days (229-240) to phase-8.ts")
            old_count = len(re.findall(r'dayNumber: (\d+)', content))
            new_count = len(re.findall(r'dayNumber: (\d+)', new_content))
            print(f"Day count: {old_count} -> {new_count}")
PYEOF