import type { CurriculumDay } from '../types'

const MDN = 'https://developer.mozilla.org/en-US/docs'

/** Phase 6 — TypeScript Advanced (days 151–180). */
export const PHASE_6_DAYS: CurriculumDay[] = [
  {
    dayNumber: 151,
    phaseSlug: 'typescript-advanced',
    kind: 'lesson' as const,
    titleEn: 'TypeScript Generics Deep Dive',
    titleAr: 'Generics TypeScript Deep',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Master generic constraints, generic types in built-in APIs, and reusable generic patterns.',
    objectiveAr: 'Master generic constraints, generic types in built-in APIs, and reusable generic patterns.',
    lessonEn:
      'Generics enable reusable components that work with multiple types. Constraints restrict the types that can be used with a generic. Keyof and Pick utilities help extract types. Understanding when and how to create generic utilities is essential for library development.',
    lessonAr:
      'التمكن من الجيمريك يمكّن من إنشاء مكونات قابلة لإعادة الاستخدام تعمل مع أنواع متعددة. Constraints restrict the types that can be used with a generic. Keyof and Pick utilities help extract types. Understanding when and how to create generic utilities is essential for library development.',
    tasks: [
      {
        en: 'Create a generic function with a type constraint',
        ar: 'Create a generic function with a type constraint'
      },
      {
        en: 'Use keyof to create a utility type that gets all keys',
        ar: 'Use keyof to create a utility type that gets all keys'
      },
      {
        en: 'Use Pick and Omit to create new types from existing ones',
        ar: 'Use Pick and Omit to create new types from existing ones'
      },
      {
        en: 'Create a generic identity function and infer its return type',
        ar: 'Create a generic identity function and infer its return type'
      }
    ],
    exerciseEn: 'Refactor a utility library to use generic types with constraints.',
    exerciseAr: 'Refactor a utility library to use generic types with constraints.',
    deliverableEn: 'A TypeScript file with generic functions, constraints, and utility types.',
deliverableAr: 'TypeScript file with generic functions, constraints, and utility types',
    resources: [
      { title: 'TypeScript Generics docs', url: 'https://www.typescriptlang.org/docs/handbook/generics.html', kind: 'official' },
      { title: 'TypeScript Handbook: Utility Types', url: 'https://www.typescriptlang.org/docs/handbook/utility-types.html', kind: 'reference' }
    ],
    challengeEn: 'Create a generic utility that returns the length of an array type',
    challengeAr: 'Create a generic utility that returns the length of an array type',
    prerequisites: [],
    criteriaEn: ['Can create a generic function with constraint', 'Can use keyof/Pick/Omit', 'Can infer return type'],
    criteriaAr: ['Can create a generic function with constraint', 'Can use keyof/Pick/Omit', 'Can infer return type']
  },
  {
    dayNumber: 152,
    phaseSlug: 'typescript-advanced',
    kind: 'lesson' as const,
    titleEn: 'TypeScript Utility Types',
    titleAr: 'Utility Types TypeScript',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Use built-in utility types like Partial, Readonly, Record, and Pick.',
    objectiveAr: 'Use built-in utility types like Partial, Readonly, Record, and Pick.',
    lessonEn:
      'TypeScript provides built-in utility types for common transformation patterns. Partial makes all properties optional, Readonly makes properties immutable, Record creates an object type with a set of keys, and Pick selects specific properties.',
    lessonAr:
      'TypeScript provides built-in utility types for common transformation patterns. Partial يجعل جميع الخصائص اختيارية، Readonly يجعل الخصائص Immutable، Record creates an object type with a set of keys، and Pick selects specific properties.',
    tasks: [
      {
        en: 'Use Partial to make all properties of a type optional',
        ar: 'Use Partial to make all properties of a type optional'
      },
      {
        en: 'Use Readonly to make all properties immutable',
        ar: 'Use Readonly to make all properties immutable'
      },
      {
        en: 'Use Record to create an object type with string keys and a value type',
        ar: 'Use Record to create an object type with string keys and a value type'
      },
      {
        en: 'Use Pick to create a type with a selected subset of properties',
        ar: 'Use Pick to create a type with a selected subset of properties'
      }
    ],
    exerciseEn: 'Transform an interface using built-in utility types.',
    exerciseAr: 'Transform an interface using built-in utility types.',
    deliverableEn: 'A transformed interface using Partial, Readonly, Record, and Pick.',
deliverableAr: 'Transformed interface using built-in utility types',
    resources: [
      { title: 'TypeScript Utility Types docs', url: 'https://www.typescriptlang.org/docs/handbook/utility-types.html', kind: 'official' }
    ],
    challengeEn: 'Create a custom utility type that omits specific keys',
    challengeAr: 'Create a custom utility type that omits specific keys',
    prerequisites: [151],
    criteriaEn: ['Can use Partial', 'Can use Readonly', 'Can use Record', 'Can use Pick'],
    criteriaAr: ['Can use Partial', 'Can use Readonly', 'Can use Record', 'Can use Pick']
  },
  {
    dayNumber: 153,
    phaseSlug: 'typescript-advanced',
    kind: 'project' as const,
    titleEn: 'Type-Safe Configuration Builder',
    titleAr: 'Type-Safe Configuration Builder',
    topic: 'TypeScript project',
    estimatedMinutes: 120,
    objectiveEn: 'Build a configuration builder with type-safe defaults and environment variable validation.',
    objectiveAr: 'Build a configuration builder with type-safe defaults and environment variable validation.',
    lessonEn:
      'Configuration builders often suffer from missing defaults and runtime errors. Use type-level defaults and validate environment variables at startup. Zod or similar schemas can validate and coerce types at runtime while providing TypeScript types.',
    lessonAr:
      'Configuration builders often suffer from missing defaults and runtime errors. Use type-level defaults and validate environment variables at startup. Zod or similar schemas can validate and coerce types at runtime while providing TypeScript types.',
    tasks: [
      {
        en: 'Define a configuration interface with required and optional fields',
        ar: 'Define a configuration interface with required and optional fields'
      },
      {
        en: 'Set type-level defaults for optional fields',
        ar: 'Set type-level defaults for optional fields'
      },
      {
        en: 'Validate environment variables at startup using Zod',
        ar: 'Validate environment variables at startup using Zod'
      },
      {
        en: 'Export the typed configuration object for use across the app',
        ar: 'Export the typed configuration object for use across the app'
      }
    ],
    exerciseEn: 'Build a configuration module with type-safe defaults and Zod validation.',
    exerciseAr: 'Build a configuration module with type-safe defaults and Zod validation.',
    deliverableEn: 'A configuration module with typed defaults and Zod validation.',
deliverableAr: 'Configuration module with typed defaults and Zod validation',
    resources: [
      { title: 'Zod docs', url: 'https://zod.dev/', kind: 'official' },
      { title: 'TypeScript docs', url: 'https://www.typescriptlang.org/docs/', kind: 'official' }
    ],
    challengeEn: 'Add a environment variable override with type coercion',
    challengeAr: 'Add a environment variable override with type coercion',
    prerequisites: [152],
    criteriaEn: ['Configuration interface defined', 'Type-level defaults set', 'Zod validation working'],
    criteriaAr: ['Configuration interface defined', 'Type-level defaults set', 'Zod validation working']
  },
  {
    dayNumber: 154,
    phaseSlug: 'typescript-advanced',
    kind: 'lesson' as const,
    titleEn: 'TypeScript Mapped Types',
    titleAr: 'Mapped Types TypeScript',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Create mapped types that transform every property of an existing type.',
    objectiveAr: 'Create mapped types that transform every property of an existing type.',
    lessonEn:
      'Mapped types iterate over the keys of an existing type and transform each one. The syntax { [K in keyof T]: T[K] } creates a new type with transformed properties. You can add modifiers like ? to make properties optional or readonly.',
    lessonAr:
      'Mapped types iterate over the keys of an existing type and transform each one. The syntax { [K in keyof T]: T[K] } creates a new type with transformed properties. You can add modifiers like ? to make properties optional or readonly.',
    tasks: [
      {
        en: 'Create a Readonly version of an existing type using a mapped type',
        ar: 'Create a Readonly version of an existing type using a mapped type'
      },
      {
        en: 'Create a Pick-like utility type using a mapped type',
        ar: 'Create a Pick-like utility type using a mapped type'
      },
      {
        en: 'Create an Optional version of an existing type using a mapped type',
        ar: 'Create an Optional version of an existing type using a mapped type'
      },
      {
        en: 'Create a Record-like utility type using a mapped type',
        ar: 'Create a Record-like utility type using a mapped type'
      }
    ],
    exerciseEn: 'Create a custom mapped type that transforms all properties of an interface.',
    exerciseAr: 'Create a custom mapped type that transforms all properties of an interface.',
    deliverableEn: 'A custom mapped type that transforms an interface.',
deliverableAr: 'Custom mapped type that transforms an interface',
    resources: [
      { title: 'TypeScript Mapped Types docs', url: 'https://www.typescriptlang.org/docs/handbook/mapped-types.html', kind: 'official' }
    ],
    challengeEn: 'Create a Partial-like utility type using a mapped type',
    challengeAr: 'Create a Partial-like utility type using a mapped type',
    prerequisites: [153],
    criteriaEn: ['Can create Readonly mapped type', 'Can create Pick-like mapped type', 'Can create Optional mapped type'],
    criteriaAr: ['Can create Readonly mapped type', 'Can create Pick-like mapped type', 'Can create Optional mapped type']
  },
  {
    dayNumber: 155,
    phaseSlug: 'typescript-advanced',
    kind: 'project' as const,
    titleEn: 'Type-Safe State Management',
    titleAr: 'Type-Safe State Management',
    topic: 'TypeScript project',
    estimatedMinutes: 120,
    objectiveEn: 'Build a state management module with typed reducers and action creators.',
    objectiveAr: 'Build a state management module with typed reducers and action creators.',
    lessonEn:
      'State management benefits from type safety to prevent runtime errors. Use typed action creators and a reducer type that infers the state shape. This ensures that actions can only modify state in valid ways.',
    lessonAr:
      'State management benefits from type safety to prevent runtime errors. Use typed action creators and a reducer type that infers the state shape. This ensures that actions can only modify state in valid ways.',
    tasks: [
      {
        en: 'Define an interface for the state shape',
        ar: 'Define an interface for the state shape'
      },
      {
        en: 'Create typed action creators for increment, decrement, and reset',
        ar: 'Create typed action creators for increment, decrement, and reset'
      },
      {
        en: 'Build a reducer type that infers the state from action types',
        ar: 'Build a reducer type that infers the state from action types'
      },
      {
        en: 'Export the typed store with dispatch and getState methods',
        ar: 'Export the typed store with dispatch and getState methods'
      }
    ],
    exerciseEn: 'Build a typed state management module with actions and reducer.',
    exerciseAr: 'Build a typed state management module with actions and reducer.',
    deliverableEn: 'A typed state management module with actions, reducer, and store.',
deliverableAr: 'Typed state management module with actions and reducer.',
    resources: [
      { title: 'TypeScript Redux typings', url: 'https://github.com/reduxjs/typescript-examples', kind: 'reference' }
    ],
    challengeEn: 'Add a generic action type that works with any state shape',
    challengeAr: 'Add a generic action type that works with any state shape',
    prerequisites: [154],
    criteriaEn: ['State interface defined', 'Typed action creators', 'Reducer infers state shape', 'Typed store exported'],
    criteriaAr: ['State interface defined', 'Typed action creators', 'Reducer infers state shape', 'Typed store exported']
  },
  {
    dayNumber: 156,
    phaseSlug: 'typescript-advanced',
    kind: 'lesson' as const,
    titleEn: 'TypeScript Conditional Types',
    titleAr: 'Conditional Types TypeScript',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Use conditional types to create types that depend on a condition.',
    objectiveAr: 'Use conditional types to create types that depend on a condition.',
    lessonEn:
      'Conditional types evaluate to one type or another based on a condition: T extends U ? X : Y. This enables creating types that adapt based on input types. Distributive conditional types apply over union types to produce refined results.',
    lessonAr:
      'Conditional types evaluate to one type or another based on a condition: T extends U ? X : Y. This enables creating types that adapt based on input types. Distributive conditional types apply over union types to produce refined results.',
    tasks: [
      {
        en: 'Create a simple conditional type that checks if a type extends another',
        ar: 'Create a simple conditional type that checks if a type extends another'
      },
      {
        en: 'Use Extract and Omit with conditional types',
        ar: 'Use Extract and Omit with conditional types'
      },
      {
        en: 'Create a distributive conditional type over a union',
        ar: 'Create a distributive conditional type over a union'
      },
      {
        en: 'Use Exclude and Extract to refine union types',
        ar: 'Use Exclude and Extract to refine union types'
      }
    ],
    exerciseEn: 'Create a conditional type that narrows a union based on a property.',
    exerciseAr: 'Create a conditional type that narrows a union based on a property.',
    deliverableEn: 'A conditional type that narrows a union type.',
deliverableAr: 'Conditional type that narrows a union type.',
    resources: [
      { title: 'TypeScript Conditional Types docs', url: 'https://www.typescriptlang.org/docs/handbook/conditional-types.html', kind: 'official' }
    ],
    challengeEn: 'Create a conditional type that extracts methods with a specific signature',
    challengeAr: 'Create a conditional type that extracts methods with a specific signature',
    prerequisites: [155],
    criteriaEn: ['Can create a simple conditional type', 'Can use Extract/Omit', 'Can create distributive conditional type'],
    criteriaAr: ['Can create a simple conditional type', 'Can use Extract/Omit', 'Can create distributive conditional type']
  },
  {
    dayNumber: 157,
    phaseSlug: 'typescript-advanced',
    kind: 'project' as const,
    titleEn: 'Type-Safe API Client',
    titleAr: 'Type-Safe API Client',
    topic: 'TypeScript project',
    estimatedMinutes: 120,
    objectiveEn: 'Build an API client with typed endpoints and automatic response parsing.',
    objectiveAr: 'Build an API client with typed endpoints and automatic response parsing.',
    lessonEn:
      'An API client should provide typed endpoints so that request and response types are inferred automatically. Use generic types with the request method and path, and infer the response type from the endpoint definition.',
    lessonAr:
      'API client should provide typed endpoints so that request and response types are inferred automatically. Use generic types with the request method and path, and infer the response type from the endpoint definition.',
    tasks: [
      {
        en: 'Define endpoint types with method, path, and response schema',
        ar: 'Define endpoint types with method, path, and response schema'
      },
      {
        en: 'Build a generic request function that infers response types',
        ar: 'Build a generic request function that infers response types'
      },
      {
        en: 'Create typed get, post, put, and delete methods',
        ar: 'Create typed get, post, put, and delete methods'
      },
      {
        en: 'Test that response types are correctly inferred',
        ar: 'Test that response types are correctly inferred'
      }
    ],
    exerciseEn: 'Build an API client with typed endpoints and inferred response types.',
    exerciseAr: 'Build an API client with typed endpoints and inferred response types.',
    deliverableEn: 'An API client module with typed endpoints and inferred types.',
deliverableAr: 'API client module with typed endpoints and inferred types.',
    resources: [
      { title: 'Axios TypeScript config', url: 'https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/axios', kind: 'reference' }
    ],
    challengeEn: 'Add automatic request retry with typed error handling',
    challengeAr: 'Add automatic request retry with typed error handling',
    prerequisites: [156],
    criteriaEn: ['Endpoint types defined', 'Generic request function', 'Typed methods', 'Type tests passing'],
    criteriaAr: ['Endpoint types defined', 'Generic request function', 'Typed methods', 'Type tests passing']
  },
  {
    dayNumber: 158,
    phaseSlug: 'typescript-advanced',
    kind: 'lesson' as const,
    titleEn: 'TypeScript Type Guards',
    titleAr: 'Type Guards TypeScript',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Use type guards to narrow types within conditional branches.',
    objectiveAr: 'Use type guards to narrow types within conditional branches.',
    lessonEn:
      'Type guards are expressions that narrow the type within a conditional block. instanceof, typeof, and custom type guards using typeof === "narrow" the type. This enables safe property access in different branches.',
    lessonAr:
      'Type guards are expressions that narrow the type within a conditional block. instanceof, typeof, and custom type guards using typeof === "narrow" the type. This enables safe property access in different branches.',
    tasks: [
      {
        en: 'Use typeof to check for a primitive type',
        ar: 'Use typeof to check for a primitive type'
      },
      {
        en: 'Use instanceof to check for a class instance',
        ar: 'Use instanceof to check for a class instance'
      },
      {
        en: 'Create a custom type guard function',
        ar: 'Create a custom type guard function'
      },
      {
        en: 'Use a type guard to safely access properties in a switch branch',
        ar: 'Use a type guard to safely access properties in a switch branch'
      }
    ],
    exerciseEn: 'Write a function that uses type guards to narrow a union type.',
    exerciseAr: 'Write a function that uses type guards to narrow a union type.',
    deliverableEn: 'A type guard function that narrows a union type.',
deliverableAr: 'Type guard function that narrows a union type.',
    resources: [
      { title: 'TypeScript Type Guards docs', url: 'https://www.typescriptlang.org/docs/handbook/2 narrowing.html', kind: 'official' }
    ],
    challengeEn: 'Create a user-defined type guard for a complex interface',
    challengeAr: 'Create a user-defined type guard for a complex interface',
    prerequisites: [157],
    criteriaEn: ['Can use typeof guard', 'Can use instanceof guard', 'Can create custom type guard', 'Can safely access properties'],
    criteriaAr: ['Can use typeof guard', 'Can use instanceof guard', 'Can create custom type guard', 'Can safely access properties']
  },
  {
    dayNumber: 159,
    phaseSlug: 'typescript-advanced',
    kind: 'project' as const,
    titleEn: 'Type-Safe Form Library',
    titleAr: 'Type-Safe Form Library',
    topic: 'TypeScript project',
    estimatedMinutes: 120,
    objectiveEn: 'Build a form library with typed form fields and validation schema.',
    objectiveAr: 'Build a form library with typed form fields and validation schema.',
    lessonEn:
      'Forms benefit from type safety to prevent runtime errors. Use a schema library like Zod to define form fields and types, and ensure that the submitted data matches the expected shape.',
    lessonAr:
      'Forms benefit from type safety to prevent runtime errors. Use a schema library like Zod to define form fields and types, and ensure that the submitted data matches the expected shape.',
    tasks: [
      {
        en: 'Define a Zod schema for a form with name, email, and password fields',
        ar: 'Define a Zod schema for a form with name, email, and password fields'
      },
      {
        en: 'Generate TypeScript types from the Zod schema',
        ar: 'Generate TypeScript types from the Zod schema'
      },
      {
        en: 'Build a form component that uses the typed values',
        ar: 'Build a form component that uses the typed values'
      },
      {
        en: 'Validate the form on submit and display errors',
        ar: 'Validate the form on submit and display errors'
      }
    ],
    exerciseEn: 'Build a form library with typed fields and Zod validation.',
    exerciseAr: 'Build a form library with typed fields and Zod validation.',
    deliverableEn: 'A form library with typed fields and Zod validation schema.',
deliverableAr: 'Form library with typed fields and Zod validation schema.',
    resources: [
      { title: 'Zod docs', url: 'https://zod.dev/', kind: 'official' }
    ],
    challengeEn: 'Add a schema that validates a date is between two values',
    challengeAr: 'Add a schema that validates a date is between two values',
    prerequisites: [158],
    criteriaEn: ['Zod schema defined', 'Types generated from schema', 'Form component uses typed values', 'Validation on submit'],
    criteriaAr: ['Zod schema defined', 'Types generated from schema', 'Form component uses typed values', 'Validation on submit']
  },
  {
    dayNumber: 160,
    phaseSlug: 'typescript-advanced',
    kind: 'lesson' as const,
    titleEn: 'TypeScript Declaration Merging',
    titleAr: 'Declaration Merging TypeScript',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Understand how TypeScript merges declarations for the same name.',
    objectiveAr: 'Understand how TypeScript merges declarations for the same name.',
    lessonEn:
      'TypeScript allows declaration merging for interfaces, type aliases (with some restrictions), and namespaces. This enables extending existing types or libraries without modifying their source code.',
    lessonAr:
      'TypeScript allows declaration merging for interfaces, type aliases (with some restrictions), and namespaces. This enables extending existing types or libraries without modifying their source code.',
    tasks: [
      {
        en: 'Extend an existing interface by declaring it again in the same file',
        ar: 'Extend an existing interface by declaring it again in the same file'
      },
      {
        en: 'Merge two interface declarations with overlapping properties',
        ar: 'Merge two interface declarations with overlapping properties'
      },
      {
        en: 'Merge a namespace with an interface',
        ar: 'Merge a namespace with an interface'
      },
      {
        en: 'Create a module that merges declarations from another module',
        ar: 'Create a module that merges declarations from another module'
      }
    ],
    exerciseEn: 'Extend an interface using declaration merging and verify the merged type.',
    exerciseAr: 'Extend an interface using declaration merging and verify the merged type.',
    deliverableEn: 'An interface that has been merged using declaration merging.',
deliverableAr: 'Interface merged using declaration merging.',
    resources: [
      { title: 'TypeScript Declaration Merging docs', url: 'https://www.typescriptlang.org/docs/handbook/declaration-merging.html', kind: 'official' }
    ],
    challengeEn: 'Merge a namespace and an interface with the same name',
    challengeAr: 'Merge a namespace and an interface with the same name',
    prerequisites: [158],
    criteriaEn: ['Can extend an interface', 'Can merge overlapping properties', 'Can merge namespace and interface'],
    criteriaAr: ['Can extend an interface', 'Can merge overlapping properties', 'Can merge namespace and interface']
  },
  {
    dayNumber: 161,
    phaseSlug: 'typescript-advanced',
    kind: 'project' as const,
    titleEn: 'Type-Safe Plugin System',
    titleAr: 'Type-Safe Plugin System',
    topic: 'TypeScript project',
    estimatedMinutes: 120,
    objectiveEn: 'Build a plugin system where plugins can extend a core type safely.',
    objectiveAr: 'Build a plugin system where plugins can extend a core type safely.',
    lessonEn:
      'A plugin system allows third-party developers to extend core functionality without breaking type safety. Use declaration merging and generic types to allow plugins to add properties and methods to the core type.',
    lessonAr:
      'A plugin system allows third-party developers to extend core functionality without breaking type safety. Use declaration merging and generic types to allow plugins to add properties and methods to the core type.',
    tasks: [
      {
        en: 'Define a core type that plugins can extend using declaration merging',
        ar: 'Define a core type that plugins can extend using declaration merging'
      },
      {
        en: 'Create a plugin interface that extends the core type',
        ar: 'Create a plugin interface that extends the core type'
      },
      {
        en: 'Implement two example plugins that add different functionality',
        ar: 'Implement two example plugins that add different functionality'
      },
      {
        en: 'Test that the core type includes plugin properties',
        ar: 'Test that the core type includes plugin properties'
      }
    ],
    exerciseEn: 'Build a plugin system with declaration merging and typed extensions.',
    exerciseAr: 'Build a plugin system with declaration merging and typed extensions.',
    deliverableEn: 'A core type with two typed plugins that extend it.',
deliverableAr: 'Core type with typed plugins that extend it.',
    resources: [],
    challengeEn: 'Add a third plugin that extends the core type with a new method',
    challengeAr: 'Add a third plugin that extends the core type with a new method',
    prerequisites: [159],
    criteriaEn: ['Core type defined', 'Plugin interface created', 'Two plugins implemented', 'Core type includes plugin properties'],
    criteriaAr: ['Core type defined', 'Plugin interface created', 'Two plugins implemented', 'Core type includes plugin properties']
  },
  {
    dayNumber: 162,
    phaseSlug: 'typescript-advanced',
    kind: 'lesson' as const,
    titleEn: 'Advanced Type Inference',
    titleAr: 'Advanced Type Inference TypeScript',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Master type inference in complex scenarios including function overreturns and overloads.',
    objectiveAr: 'Master type inference in complex scenarios including function overreturns and overloads.',
    lessonEn:
      'Type inference can handle function overreturns and overloads. Provide multiple function signatures to describe different input/output shapes. The implementation signature should be compatible with all call signatures.',
    lessonAr:
      'Type inference can handle function overreturns and overloads. Provide multiple function signatures to describe different input/output shapes. The implementation signature should be compatible with all call signatures.',
    tasks: [
      {
        en: 'Create a function with two overloads: one for strings, one for numbers',
        ar: 'Create a function with two overloads: one for strings, one for numbers'
      },
      {
        en: 'Write an implementation signature that satisfies both overloads',
        ar: 'Write an implementation signature that satisfies both overloads'
      },
      {
        en: 'Use inference to determine the return type based on the input',
        ar: 'Use inference to determine the return type based on the input'
      },
      {
        en: 'Test that both overloads produce correct inferred types',
        ar: 'Test that both overloads produce correct inferred types'
      }
    ],
    exerciseEn: 'Write a function with overloaded signatures and correct type inference.',
    exerciseAr: 'Write a function with overloaded signatures and correct type inference.',
    deliverableEn: 'A function with overloaded signatures and verified type inference.',
deliverableAr: 'Function with overloaded signatures and verified type inference.',
    resources: [
      { title: 'TypeScript Function Overloads docs', url: 'https://www.typescriptlang.org/docs/handbook/function-overloads.html', kind: 'official' }
    ],
    challengeEn: 'Create a function overload that accepts a union type and returns a refined type',
    challengeAr: 'Create a function overload that accepts a union type and returns a refined type',
    prerequisites: [160],
    criteriaEn: ['Overload signatures defined', 'Implementation signature satisfies all', 'Inference works for both'],
    criteriaAr: ['Overload signatures defined', 'Implementation signature satisfies all', 'Inference works for both']
  },
  {
    dayNumber: 163,
    phaseSlug: 'typescript-advanced',
    kind: 'project' as const,
    titleEn: 'Type-Safe Configuration Validation',
    titleAr: 'Type-Safe Configuration Validation',
    topic: 'TypeScript project',
    estimatedMinutes: 120,
    objectiveEn: 'Build a configuration validation layer that runs at startup and provides typed errors.',
    objectiveAr: 'Build a configuration validation layer that runs at startup and provides typed errors.',
    lessonEn:
      'Configuration validation should run at startup and provide clear, typed errors. Use Zod or similar to validate environment variables, and ensure that the resulting configuration object is fully typed for the rest of the application.',
    lessonAr:
      'Configuration validation should run at startup and provide clear, typed errors. Use Zod or similar to validate environment variables, and ensure that the resulting configuration object is fully typed for the rest of the application.',
    tasks: [
      {
        en: 'Define a Zod schema for configuration with NODE_ENV, PORT, and database URL',
        ar: 'Define a Zod schema for configuration with NODE_ENV, PORT, and database URL'
      },
      {
        en: 'Validate the configuration at application startup',
        ar: 'Validate the configuration at application startup'
      },
      {
        en: 'Provide typed access to the validated configuration across the app',
        ar: 'Provide typed access to the validated configuration across the app'
      },
      {
        en: 'Exit the process with a clear error message if validation fails',
        ar: 'Exit the process with a clear error message if validation fails'
      }
    ],
    exerciseEn: 'Build a configuration validation layer with typed startup errors.',
    exerciseAr: 'Build a configuration validation layer with typed startup errors.',
    deliverableEn: 'A configuration validation module with typed startup errors.',
deliverableAr: 'Configuration validation module with typed startup errors.',
    resources: [
      { title: 'Zod docs', url: 'https://zod.dev/', kind: 'official' }
    ],
    challengeEn: 'Add a schema that validates a port number is in the valid range (1-65535)',
    challengeAr: 'Add a schema that validates a port number is in the valid range (1-65535)',
    prerequisites: [162],
    criteriaEn: ['Schema defined', 'Validation runs at startup', 'Typed configuration object', 'Clear error on failure'],
    criteriaAr: ['Schema defined', 'Validation runs at startup', 'Typed configuration object', 'Clear error on failure']
  },
  {
    dayNumber: 164,
    phaseSlug: 'typescript-advanced',
    kind: 'lesson' as const,
    titleEn: 'TypeScript Union and Intersection Types',
    titleAr: 'Union and Intersection Types TypeScript',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Create and manipulate union and intersection types for flexible type compositions.',
    objectiveAr: 'Create and manipulate union and intersection types for flexible type compositions.',
    lessonEn:
      'Union types (A | B) represent a value that can be either A or B. Intersection types (&) combine multiple types into one. Understanding when to use each is key for flexible yet type-safe code.',
    lessonAr:
      'Union types (A | B) represent a value that can be either A or B. Intersection types (&) combine multiple types into one. Understanding when to use each is key for flexible yet type-safe code.',
    tasks: [
      {
        en: 'Create a union type representing multiple possible shapes',
        ar: 'Create a union type representing multiple possible shapes'
      },
      {
        en: 'Create an intersection type that combines two interfaces',
        ar: 'Create an intersection type that combines two interfaces'
      },
      {
        en: 'Use a type guard to discriminate between union members',
        ar: 'Use a type guard to discriminate between union members'
      },
      {
        en: 'Extract a subset using intersection and Pick',
        ar: 'Extract a subset using intersection and Pick'
      }
    ],
    exerciseEn: 'Create union and intersection types for a sample application.',
    exerciseAr: 'Create union and intersection types for a sample application.',
    deliverableEn: 'Union and intersection types for a sample application.',
deliverableAr: 'Union and intersection types for a sample application.',
    resources: [
      { title: 'TypeScript Union Types docs', url: 'https://www.typescriptlang.org/docs/handbook/2/union-and-intersection-types.html', kind: 'official' }
    ],
    challengeEn: 'Create an intersection type that adds a method to an existing interface',
    challengeAr: 'Create an intersection type that adds a method to an existing interface',
    prerequisites: [163],
    criteriaEn: ['Union type created', 'Intersection type created', 'Type guard discriminates', 'Can extract subset'],
    criteriaAr: ['Union type created', 'Intersection type created', 'Type guard discriminates', 'Can extract subset']
  },
  {
    dayNumber: 165,
    phaseSlug: 'typescript-advanced',
    kind: 'project' as const,
    titleEn: 'Type-Safe Error Handling',
    titleAr: 'Type-Safe Error Handling',
    topic: 'TypeScript project',
    estimatedMinutes: 120,
    objectiveEn: 'Build a custom error class hierarchy with typed error types.',
    objectiveAr: 'Build a custom error class hierarchy with typed error types.',
    lessonEn:
      'Custom error classes enable typed error handling. Extend the built-in Error class and add a name and status property. Use discriminated unions to handle different error types in catch blocks.',
    lessonAr:
      'Custom error classes enable typed error handling. Extend the built-in Error class and add a name and status property. Use discriminated unions to handle different error types in catch blocks.',
    tasks: [
      {
        en: 'Create a custom error class with name and status properties',
        ar: 'Create a custom error class with name and status properties'
      },
      {
        en: 'Create a discriminated union of error types',
        ar: 'Create a discriminated union of error types'
      },
      {
        en: 'Write a handler that switches on the error type and logs appropriately',
        ar: 'Write a handler that switches on the error type and logs appropriately'
      },
      {
        en: 'Test that error types are correctly caught and handled',
        ar: 'Test that error types are correctly caught and handled'
      }
    ],
    exerciseEn: 'Build a custom error hierarchy with typed error handling.',
    exerciseAr: 'Build a custom error hierarchy with typed error handling.',
    deliverableEn: 'A custom error class hierarchy with typed error handling.',
deliverableAr: 'Custom error class hierarchy with typed error handling.',
    resources: [],
    challengeEn: 'Add a network error subclass with a retryable property',
    challengeAr: 'Add a network error subclass with a retryable property',
    prerequisites: [164],
    criteriaEn: ['Custom error class created', 'Discriminated union defined', 'Handler switches on type', 'Error tests passing'],
    criteriaAr: ['Custom error class created', 'Discriminated union defined', 'Handler switches on type', 'Error tests passing']
  },
  {
    dayNumber: 166,
    phaseSlug: 'typescript-advanced',
    kind: 'lesson' as const,
    titleEn: 'TypeScript Mapped Type Utilities',
    titleAr: 'Mapped Type Utilities TypeScript',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Master advanced mapped type utilities like Conditional Mapped Types and Indexed Access.',
    objectiveAr: 'Master advanced mapped type utilities like Conditional Mapped Types and Indexed Access.',
    lessonEn:
      'Advanced mapped types combine conditional logic with iteration over keys. Indexed access types T[K] allow selecting a single property. Conditional mapped types transform only keys that satisfy a condition.',
    lessonAr:
      'Advanced mapped types combine conditional logic with iteration over keys. Indexed access types T[K] allow selecting a single property. Conditional mapped types transform only keys that satisfy a condition.',
    tasks: [
      {
        en: 'Use indexed access T[K] to select a single property from a type',
        ar: 'Use indexed access T[K] to select a single property from a type'
      },
      {
        en: 'Create a conditional mapped type that transforms only optional keys',
        ar: 'Create a conditional mapped type that transforms only optional keys'
      },
      {
        en: 'Use PickExclude to create a type that picks or excludes specific keys',
        ar: 'Use PickExclude to create a type that picks or excludes specific keys'
      },
      {
        en: 'Create a Readonly at index mapped type',
        ar: 'Create a Readonly at index mapped type'
      }
    ],
    exerciseEn: 'Create advanced mapped types using conditional logic and indexed access.',
    exerciseAr: 'Create advanced mapped types using conditional logic and indexed access.',
    deliverableEn: 'Advanced mapped types using conditional logic and indexed access.',
deliverableAr: 'Advanced mapped types using conditional logic and indexed access.',
    resources: [
      { title: 'TypeScript Mapped Types docs', url: 'https://www.typescriptlang.org/docs/handbook/mapped-types.html', kind: 'official' }
    ],
    challengeEn: 'Create a Conditional Mapped Type that makes only readonly keys optional',
    challengeAr: 'Create a Conditional Mapped Type that makes only readonly keys optional',
    prerequisites: [165],
    criteriaEn: ['Can use indexed access T[K]', 'Can create conditional mapped type', 'Can use PickExclude', 'Can create Readonly at index'],
    criteriaAr: ['Can use indexed access T[K]', 'Can create conditional mapped type', 'Can use PickExclude', 'Can create Readonly at index']
  },
  {
    dayNumber: 167,
    phaseSlug: 'typescript-advanced',
    kind: 'project' as const,
    titleEn: 'Type-Safe Date Library',
    titleAr: 'Type-Safe Date Library',
    topic: 'TypeScript project',
    estimatedMinutes: 120,
    objectiveEn: 'Build a date library with typed date operations and format functions.',
    objectiveAr: 'Build a date library with typed date operations and format functions.',
    lessonEn:
      'Date operations are error-prone without type safety. Build a library that provides typed methods for parsing, formatting, and manipulating dates, and ensures that the return types are correct.',
    lessonAr:
      'Date operations are error-prone without type safety. Build a library that provides typed methods for parsing, formatting, and manipulating dates, and ensures that the return types are correct.',
    tasks: [
      {
        en: 'Define a type for a parsed date with year, month, and day',
        ar: 'Define a type for a parsed date with year, month, and day'
      },
      {
        en: 'Create a format function that returns a typed date string',
        ar: 'Create a format function that returns a typed date string'
      },
      {
        en: 'Add a method that adds days to a date with type-safe return',
        ar: 'Add a method that adds days to a date with type-safe return'
      },
      {
        en: 'Export a library with all typed date operations',
        ar: 'Export a library with all typed date operations'
      }
    ],
    exerciseEn: 'Build a typed date library with format and manipulation methods.',
    exerciseAr: 'Build a typed date library with format and manipulation methods.',
    deliverableEn: 'A typed date library with operations and format functions.',
deliverableAr: 'Typed date library with operations and format functions.',
    resources: [],
    challengeEn: 'Add a method that calculates the difference in weeks between two dates',
    challengeAr: 'Add a method that calculates the difference in weeks between two dates',
    prerequisites: [166],
    criteriaEn: ['Date type defined', 'Format function works', 'Add days method type-safe', 'Library exported'],
    criteriaAr: ['Date type defined', 'Format function works', 'Add days method type-safe', 'Library exported']
  },
  {
    dayNumber: 168,
    phaseSlug: 'typescript-advanced',
    kind: 'lesson' as const,
    titleEn: 'TypeScript Distributive Types',
    titleAr: 'Distributive Types TypeScript',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Understand how distributive types apply over union types in conditional types.',
    objectiveAr: 'Understand how distributive types apply over union types in conditional types.',
    lessonEn:
      'When a conditional type over a union is encountered, TypeScript distributes the conditional over each member of the union. This enables creating types that refine each member differently.',
    lessonAr:
      'When a conditional type over a union is encountered, TypeScript distributes the conditional over each member of the union. This enables creating types that refine each member differently.',
    tasks: [
      {
        en: 'Create a conditional type that distributes over a union of string literals',
        ar: 'Create a conditional type that distributes over a union of string literals'
      },
      {
        en: 'Use distributive types to extract narrower types from a union',
        ar: 'Use distributive types to extract narrower types from a union'
      },
      {
        en: 'Create a type that preserves none members of a union',
        ar: 'Create a type that preserves none members of a union'
      },
      {
        en: 'Use Extract and Omit with distributive types',
        ar: 'Use Extract and Omit with distributive types'
      }
    ],
    exerciseEn: 'Write a distributive type that refines each member of a union.',
    exerciseAr: 'Write a distributive type that refines each member of a union.',
    deliverableEn: 'A distributive type that refines each member of a union.',
deliverableAr: 'Distributive type that refines each member of a union.',
    resources: [
      { title: 'TypeScript Distributive Types docs', url: 'https://www.typescriptlang.org/docs/handbook/2/generics.html#distributive-conditionally-types', kind: 'official' }
    ],
    challengeEn: 'Create a distributive type that extracts string literal members from a union',
    challengeAr: 'Create a distributive type that extracts string literal members from a union',
    prerequisites: [167],
    criteriaEn: ['Conditional type defined', 'Distributes over union', 'Extracts narrower types'],
    criteriaAr: ['Conditional type defined', 'Distributes over union', 'Extracts narrower types']
  },
  {
    dayNumber: 169,
    phaseSlug: 'typescript-advanced',
    kind: 'project' as const,
    titleEn: 'Type-Safe DOM Types Extension',
    titleAr: 'Type-Safe DOM Types Extension',
    topic: 'TypeScript project',
    estimatedMinutes: 120,
    objectiveEn: 'Extend TypeScript DOM types for a canvas or SVG library with custom types.',
    objectiveAr: 'Extend TypeScript DOM types for a canvas or SVG library with custom types.',
    lessonEn:
      'TypeScript built-in DOM types can be extended for specific use cases. Add custom types for canvas contexts, SVG elements, or event handlers that are not covered by the default types.',
    lessonAr:
      'TypeScript built-in DOM types can be extended for specific use cases. Add custom types for canvas contexts, SVG elements, or event handlers that are not covered by the default types.',
    tasks: [
      {
        en: 'Extend the CanvasRenderingContext2D type with a custom method',
        ar: 'Extend the CanvasRenderingContext2D type with a custom method'
      },
      {
        en: 'Add a type for a custom SVG element with specific attributes',
        ar: 'Add a type for a custom SVG element with specific attributes'
      },
      {
        en: 'Create a typed event handler for canvas mouse events',
        ar: 'Create a typed event handler for canvas mouse events'
      },
      {
        en: 'Export the extended types for use in a drawing library',
        ar: 'Export the extended types for use in a drawing library'
      }
    ],
    exerciseEn: 'Extend DOM types for a canvas drawing library.',
    exerciseAr: 'Extend DOM types for a canvas drawing library.',
    deliverableEn: 'Extended DOM types for a canvas drawing library.',
deliverableAr: 'Extended DOM types for a canvas drawing library.',
    resources: [],
    challengeEn: 'Add a type for a WebGL2 rendering context',
    challengeAr: 'Add a type for a WebGL2 rendering context',
    prerequisites: [168],
    criteriaEn: ['Canvas context extended', 'Custom SVG type added', 'Typed event handler', 'Exported types'],
    criteriaAr: ['Canvas context extended', 'Custom SVG type added', 'Typed event handler', 'Exported types']
  },
  {
    dayNumber: 170,
    phaseSlug: 'typescript-advanced',
    kind: 'review' as const,
    titleEn: 'TypeScript Advanced Review',
    titleAr: 'Review TypeScript Advanced',
    topic: 'Review',
    estimatedMinutes: 70,
    objectiveEn: 'Refactor your TypeScript utilities to use the advanced patterns covered: generics, conditional types, mapped types, and distributed types.',
    objectiveAr: 'Refactor your TypeScript utilities to use the advanced patterns covered: generics, conditional types, mapped types, and distributed types.',
    lessonEn:
      'A review day. Take your TypeScript utility code from Phase 6 and refactor it to use the advanced patterns covered: generics with constraints, conditional types (including distributive), mapped types, and type guards. Verify that all types still compile correctly.',
    lessonAr:
      'يوم مراجعة. Take your TypeScript utility code من Phase 6 and refactor it to use the advanced patterns covered: generics with constraints, conditional types (including distributive), mapped types, and type guards. Verify that all types still compile correctly.',
    tasks: [
      {
        en: 'Refactor generic utilities to use constraints and inferred types',
        ar: 'Refactor generic utilities to use constraints and inferred types'
      },
      {
        en: 'Refactor conditional types to use distributive patterns',
        ar: 'Refactor conditional types to use distributive patterns'
      },
      {
        en: 'Refactor mapped types to use conditional logic',
        ar: 'Refactor mapped types to use conditional logic'
      },
      {
        en: 'Verify all types compile and tests pass',
        ar: 'Verify all types compile and tests pass'
      }
    ],
    exerciseEn: 'Refactor your TypeScript utilities and verify type correctness.',
    exerciseAr: 'Refactor your TypeScript utilities and verify type correctness.',
    deliverableEn: 'Refactored TypeScript utilities using advanced patterns.',
deliverableAr: 'Refactored TypeScript utilities using advanced patterns.',
    resources: [],
    challengeEn: 'Create a new utility using all the advanced patterns covered in Phase 6',
    challengeAr: 'Create a new utility using all the advanced patterns covered in Phase 6',
    prerequisites: [169],
    criteriaEn: ['Generics with constraints', 'Conditional types distributive', 'Mapped types conditional', 'Type guards working'],
    criteriaAr: ['Generics with constraints', 'Conditional types distributive', 'Mapped types conditional', 'Type guards working']
  },
  {
    dayNumber: 171,
    phaseSlug: 'typescript-advanced',
    kind: 'lesson' as const,
    titleEn: 'TypeScript Project Setup and Config',
    titleAr: 'Project Setup and Config TypeScript',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Set up a TypeScript project with strict mode, path aliases, and ESLint integration.',
    objectiveAr: 'Set up a TypeScript project with strict mode, path aliases, and ESLint integration.',
    lessonEn:
      'A well-configured TypeScript project starts with strict mode, path aliases for cleaner imports, and ESLint for linting. Use tsconfig.json to enable strict flags, path aliases in imports, and integrate ESLint via eslint-config-typescript.',
    lessonAr:
      'A well-configured TypeScript project starts with strict mode, path aliases for cleaner imports, and ESLint for linting. Use tsconfig.json to enable strict flags, path aliases in imports, and integrate ESLint via eslint-config-typescript.',
    tasks: [
      {
        en: 'Initialize a TypeScript project with strict mode enabled',
        ar: 'Initialize a TypeScript project with strict mode enabled'
      },
      {
        en: 'Add path aliases in tsconfig.json for cleaner imports',
        ar: 'Add path aliases in tsconfig.json for cleaner imports'
      },
      {
        en: 'Configure ESLint with typescript plugin',
        ar: 'Configure ESLint with typescript plugin'
      },
      {
        en: 'Set up a build script that runs type-check and lint',
        ar: 'Set up a build script that runs type-check and lint'
      }
    ],
    exerciseEn: 'Set up a TypeScript project with strict mode, path aliases, and ESLint.',
    exerciseAr: 'Set up a TypeScript project with strict mode, path aliases, and ESLint.',
    deliverableEn: 'A TypeScript project with strict mode, path aliases, and ESLint configured.',
deliverableAr: 'A TypeScript project with strict mode, path aliases, and ESLint configured',
    resources: [
      { title: 'TypeScript Quick Start', url: 'https://www.typescriptlang.org/docs/handbook/quick-start.html', kind: 'official' }
    ],
    challengeEn: 'Configure path aliases that work with both TypeScript and ESLint',
    challengeAr: 'Configure path aliases that work with both TypeScript and ESLint',
    prerequisites: [],
    criteriaEn: ['Strict mode enabled', 'Path aliases configured', 'ESLint integrated', 'Build script working'],
    criteriaAr: ['Strict mode enabled', 'Path aliases configured', 'ESLint integrated', 'Build script working']
  },
  {
    dayNumber: 172,
    phaseSlug: 'typescript-advanced',
    kind: 'project' as const,
    titleEn: 'Type-Safe API Response Handler',
    titleAr: 'Type-Safe API Response Handler',
    topic: 'TypeScript project',
    estimatedMinutes: 120,
    objectiveEn: 'Build a response handler that validates API responses against typed schemas and provides typed error paths.',
    objectiveAr: 'Build a response handler that validates API responses against typed schemas and provides typed error paths.',
    lessonEn:
      'API responses should be validated against typed schemas to ensure the data shape is correct before use. Use Zod or Yup to validate the response, and provide typed error paths for different failure modes.',
    lessonAr:
      'API responses should be validated against typed schemas to ensure the data shape is correct before use. Use Zod or Yup to validate the response, and provide typed error paths for different failure modes.',
    tasks: [
      {
        en: 'Define a Zod schema for an API response with required and optional fields',
        ar: 'Define a Zod schema for an API response with required and optional fields'
      },
      {
        en: 'Build a handler that validates the response and returns typed data',
        ar: 'Build a handler that validates the response and returns typed data'
      },
      {
        en: 'Provide typed error paths for different HTTP status codes',
        ar: 'Provide typed error paths for different HTTP status codes'
      },
      {
        en: 'Test that invalid responses are caught and typed errors are thrown',
        ar: 'Test that invalid responses are caught and typed errors are thrown'
      }
    ],
    exerciseEn: 'Build an API response handler with typed validation and error paths.',
    exerciseAr: 'Build an API response handler with typed validation and error paths.',
    deliverableEn: 'A response handler that validates and returns typed data.',
deliverableAr: 'Response handler with typed validation and error paths.',
    resources: [
      { title: 'Zod docs', url: 'https://zod.dev/', kind: 'official' }
    ],
    challengeEn: 'Add typed error handling for 404 and 500 status codes',
    challengeAr: 'Add typed error handling for 404 and 500 status codes',
    prerequisites: [171],
    criteriaEn: ['Schema defined', 'Handler validates response', 'Typed error paths', 'Tests cover errors'],
    criteriaAr: ['Schema defined', 'Handler validates response', 'Typed error paths', 'Tests cover errors']
  },
  {
    dayNumber: 173,
    phaseSlug: 'typescript-advanced',
    kind: 'lesson' as const,
    titleEn: 'TypeScript Async/Await and Promises',
    titleAr: 'Async/Await and Promises TypeScript',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Master async/await typing, Promise handling, and error boundaries in TypeScript.',
    objectiveAr: 'Master async/await typing, Promise handling, and error boundaries in TypeScript.',
    lessonEn:
      'async/await is syntactic sugar for Promises, but TypeScript provides specific typing for async functions. Handle Promise rejection with try/catch, and use finally for cleanup. Error boundaries can catch async errors in UI components.',
    lessonAr:
      'async/await is syntactic sugar for Promises, but TypeScript provides specific typing for async functions. Handle Promise rejection with try/catch, and use finally for cleanup. Error boundaries can catch async errors in UI components.',
    tasks: [
      {
        en: 'Write an async function with proper try/catch and finally blocks',
        ar: 'Write an async function with proper try/catch and finally blocks'
      },
      {
        en: 'Use Promise.all to run promises concurrently and handle errors',
        ar: 'Use Promise.all to run promises concurrently and handle errors'
      },
      {
        en: 'Use Promise.race to pick the first resolved promise',
        ar: 'Use Promise.race to pick the first resolved promise'
      },
      {
        en: 'Create an error boundary component that catches async errors',
        ar: 'Create an error boundary component that catches async errors'
      }
    ],
    exerciseEn: 'Write async/await code with proper error handling and Promise utilities.',
    exerciseAr: 'Write async/await code with proper error handling and Promise utilities.',
    deliverableEn: 'Async/await utilities with proper error handling.',
deliverableAr: 'Async/await utilities with proper error handling.',
    resources: [
      { title: 'TypeScript async/await docs', url: 'https://www.typescriptlang.org/docs/handbook/2/functions.html#async', kind: 'official' }
    ],
    challengeEn: 'Create a promise that resolves after a delay and rejects with a typed error',
    challengeAr: 'Create a promise that resolves after a delay and rejects with a typed error',
    prerequisites: [172],
    criteriaEn: ['Async function with try/catch/finally', 'Promise.all handled', 'Promise.race used', 'Error boundary created'],
    criteriaAr: ['Async function with try/catch/finally', 'Promise.all handled', 'Promise.race used', 'Error boundary created']
  },
  {
    dayNumber: 174,
    phaseSlug: 'typescript-advanced',
    kind: 'project' as const,
    titleEn: 'Type-Safe Testing Utilities',
    titleAr: 'Type-Safe Testing Utilities',
    topic: 'TypeScript project',
    estimatedMinutes: 120,
    objectiveEn: 'Build type-safe testing utilities for Vitest that ensure test fixtures and expectations are correctly typed.',
    objectiveAr: 'Build type-safe testing utilities for Vitest that ensure test fixtures and expectations are correctly typed.',
    lessonEn:
      'Testing utilities benefit from type safety to prevent test errors. Use typed fixtures, typed expect assertions, and ensure that test code catches type mismatches at compile time.',
    lessonAr:
      'Testing utilities benefit from type safety to prevent test errors. Use typed fixtures, typed expect assertions, and ensure that test code catches type mismatches at compile time.',
    tasks: [
      {
        en: 'Define a typed fixture interface for test setup',
        ar: 'Define a typed fixture interface for test setup'
      },
      {
        en: 'Create typed expect assertions for common patterns',
        ar: 'Create typed expect assertions for common patterns'
      },
      {
        en: 'Build a test helper that ensures fixture types match',
        ar: 'Build a test helper that ensures fixture types match'
      },
      {
        en: 'Run the test suite and verify no type errors',
        ar: 'Run the test suite and verify no type errors'
      }
    ],
    exerciseEn: 'Build type-safe testing utilities for Vitest.',
    exerciseAr: 'Build type-safe testing utilities for Vitest.',
    deliverableEn: 'Type-safe testing utilities with typed fixtures and assertions.',
deliverableAr: 'Type-safe testing utilities with typed fixtures and assertions.',
    resources: [
      { title: 'Vitest docs', url: 'https://vitest.dev/', kind: 'official' }
    ],
    challengeEn: 'Add a typed fixture that ensures all test files use the same shape',
    challengeAr: 'Add a typed fixture that ensures all test files use the same shape',
    prerequisites: [173],
    criteriaEn: ['Typed fixture defined', 'Typed expect assertions', 'Helper ensures type match', 'Tests pass without type errors'],
    criteriaAr: ['Typed fixture defined', 'Typed expect assertions', 'Helper ensures type match', 'Tests pass without type errors']
  },
  {
    dayNumber: 175,
    phaseSlug: 'typescript-advanced',
    kind: 'lesson' as const,
    titleEn: 'TypeScript Namespace and Module Patterns',
    titleAr: 'Namespace and Module Patterns TypeScript',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Use namespaces and modules to organize code and avoid global scope pollution.',
    objectiveAr: 'Use namespaces and modules to organize code and avoid global scope pollution.',
    lessonEn:
      'Namespaces and modules help organize code into logical groups. Namespaces group related interfaces and types, while modules enable file-level encapsulation. Use export = and import = for CommonJS compatibility if needed.',
    lessonAr:
      'Namespaces and modules help organize code into logical groups. Namespaces group related interfaces and types, while modules enable file-level encapsulation. Use export = and import = for CommonJS compatibility if needed.',
    tasks: [
      {
        en: 'Create a namespace that groups related types and interfaces',
        ar: 'Create a namespace that groups related types and interfaces'
      },
      {
        en: 'Use a module to encapsulate functionality and avoid global scope',
        ar: 'Use a module to encapsulate functionality and avoid global scope'
      },
      {
        en: 'Export a namespace from a module for use in other files',
        ar: 'Export a namespace from a module for use in other files'
      },
      {
        en: 'Import and use the namespace in another file',
        ar: 'Import and use the namespace in another file'
      }
    ],
    exerciseEn: 'Organize code using namespaces and modules.',
    exerciseAr: 'Organize code using namespaces and modules.',
    deliverableEn: 'A set of namespaces and modules that organize the codebase.',
deliverableAr: 'Namespaces and modules that organize the codebase.',
    resources: [
      { title: 'TypeScript Namespaces docs', url: 'https://www.typescriptlang.org/docs/handbook/namespaces.html', kind: 'official' }
    ],
    challengeEn: 'Create a namespace that extends an interface from another module',
    challengeAr: 'Create a namespace that extends an interface from another module',
    prerequisites: [174],
    criteriaEn: ['Namespace created with types', 'Module encapsulates functionality', 'Namespace exported and imported', 'Works in consuming file'],
    criteriaAr: ['Namespace created with types', 'Module encapsulates functionality', 'Namespace exported and imported', 'Works in consuming file']
  },
  {
    dayNumber: 176,
    phaseSlug: 'typescript-advanced',
    kind: 'project' as const,
    titleEn: 'Type-Safe Deep Partial',
    titleAr: 'Type-Safe Deep Partial TypeScript',
    topic: 'TypeScript project',
    estimatedMinutes: 120,
    objectiveEn: 'Build a Deep Partial utility type that makes all nested properties optional.',
    objectiveAr: 'Build a Deep Partial utility type that makes all nested properties optional.',
    lessonEn:
      'The built-in Partial only makes top-level properties optional. A Deep Partial recursively makes all nested properties optional. This is useful for update operations where only some fields are provided.',
    lessonAr:
      'The built-in Partial only makes top-level properties optional. A Deep Partial recursively makes all nested properties optional. This is useful for update operations where only some fields are provided.',
    tasks: [
      {
        en: 'Create a Deep Partial utility type using recursive conditional types',
        ar: 'Create a Deep Partial utility type using recursive conditional types'
      },
      {
        en: 'Test that Deep Partial makes all nested properties optional',
        ar: 'Test that Deep Partial makes all nested properties optional'
      },
      {
        en: 'Use Deep Partial in an update function where only some fields are provided',
        ar: 'Use Deep Partial in an update function where only some fields are provided'
      },
      {
        en: 'Verify that the original type is not mutated',
        ar: 'Verify that the original type is not mutated'
      }
    ],
    exerciseEn: 'Build a Deep Partial utility type and use it in an update function.',
    exerciseAr: 'Build a Deep Partial utility type and use it in an update function.',
    deliverableEn: 'A Deep Partial utility type and an update function using it.',
deliverableAr: 'Deep Partial utility type and an update function using it.',
    resources: [],
    challengeEn: 'Create a Deep Required utility that makes all nested properties required',
    challengeAr: 'Create a Deep Required utility that makes all nested properties required',
    prerequisites: [175],
    criteriaEn: ['Deep Partial utility created', 'All nested properties are optional', 'Works in update function', 'Original type not mutated'],
    criteriaAr: ['Deep Partial utility created', 'All nested properties are optional', 'Works in update function', 'Original type not mutated']
  },
  {
    dayNumber: 177,
    phaseSlug: 'typescript-advanced',
    kind: 'lesson' as const,
    titleEn: 'TypeScript Omit and Exclude Utilities',
    titleAr: 'Omit and Exclude Utilities TypeScript',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Use Omit to remove specific keys from a type, and Exclude to remove types from a union.',
    objectiveAr: 'Use Omit to remove specific keys from a type, and Exclude to remove types from a union.',
    lessonEn:
      'Omit<T, K> removes keys K from type T. Exclude<T, U> removes types U from union T. These are fundamental utility types for creating variations of existing types.',
    lessonAr:
      'Omit<T, K> removes keys K from type T. Exclude<T, U> removes types U from union T. These are fundamental utility types for creating variations of existing types.',
    tasks: [
      {
        en: 'Use Omit to create a type without a specific field',
        ar: 'Use Omit to create a type without a specific field'
      },
      {
        en: 'Use Exclude to remove a type from a union',
        ar: 'Use Exclude to remove a type from a union'
      },
      {
        en: 'Combine Omit and Exclude to create a refined type',
        ar: 'Combine Omit and Exclude to create a refined type'
      },
      {
        en: 'Use OmitExclude in a real-world scenario',
        ar: 'Use OmitExclude in a real-world scenario'
      }
    ],
    exerciseEn: 'Use Omit and Exclude to create a refined type for a sample application.',
    exerciseAr: 'Use Omit and Exclude to create a refined type for a sample application.',
    deliverableEn: 'A refined type using Omit and Exclude.',
deliverableAr: 'Refined type using Omit and Exclude.',
    resources: [
      { title: 'TypeScript Omit and Exclude docs', url: 'https://www.typescriptlang.org/docs/handbook/2/utility-types.html', kind: 'official' }
    ],
    challengeEn: 'Create a type that omits sensitive fields and excludes admin types',
    challengeAr: 'Create a type that omits sensitive fields and excludes admin types',
    prerequisites: [176],
    criteriaEn: ['Can use Omit', 'Can use Exclude', 'Can combine both', 'Works in real-world scenario'],
    criteriaAr: ['Can use Omit', 'Can use Exclude', 'Can combine both', 'Works in real-world scenario']
  },
  {
    dayNumber: 178,
    phaseSlug: 'typescript-advanced',
    kind: 'project' as const,
    titleEn: 'Type-Safe Debounce and Throttle',
    titleAr: 'Type-Safe Debounce and Throttle TypeScript',
    topic: 'TypeScript project',
    estimatedMinutes: 120,
    objectiveEn: 'Build type-safe debounce and throttle utilities with correct return types.',
    objectiveAr: 'Build type-safe debounce and throttle utilities with correct return types.',
    lessonEn:
      'Debounce and throttle are higher-order functions that control execution rate. Type-safe versions ensure the return type matches the input function type, and the timeout/interval types are correct.',
    lessonAr:
      'Debounce and throttle are higher-order functions that control execution rate. Type-safe versions ensure the return type matches the input function type, and the timeout/interval types are correct.',
    tasks: [
      {
        en: 'Build a type-safe debounce function with a timeout type',
        ar: 'Build a type-safe debounce function with a timeout type'
      },
      {
        en: 'Build a type-safe throttle function with an interval type',
        ar: 'Build a type-safe throttle function with an interval type'
      },
      {
        en: 'Test that debounce/throttle preserve the function signature',
        ar: 'Test that debounce/throttle preserve the function signature'
      },
      {
        en: 'Use the utilities in a real-world scenario (e.g., search input)',
        ar: 'Use the utilities in a real-world scenario (e.g., search input)'
      }
    ],
    exerciseEn: 'Build type-safe debounce and throttle utilities.',
    exerciseAr: 'Build type-safe debounce and throttle utilities.',
    deliverableEn: 'Type-safe debounce and throttle utilities with preserved signatures.',
deliverableAr: 'Type-safe debounce and throttle utilities with preserved signatures.',
    resources: [],
    challengeEn: 'Add a leading option to throttle that executes on the leading edge',
    challengeAr: 'Add a leading option to throttle that executes on the leading edge',
    prerequisites: [177],
    criteriaEn: ['Debounce function with timeout type', 'Throttle function with interval type', 'Signature preserved', 'Works in search input scenario'],
    criteriaAr: ['Debounce function with timeout type', 'Throttle function with interval type', 'Signature preserved', 'Works in search input scenario']
  },
  {
    dayNumber: 179,
    phaseSlug: 'typescript-advanced',
    kind: 'lesson' as const,
    titleEn: 'TypeScript Utility Type Library',
    titleAr: 'Utility Type Library TypeScript',
    topic: 'TypeScript',
    estimatedMinutes: 90,
    objectiveEn: 'Publish a utility type library that provides commonly needed type helpers.',
    objectiveAr: 'Publish a utility type library that provides commonly needed type helpers.',
    lessonEn:
      'A utility type library provides commonly needed type helpers like Deep Partial, Deep Required, Omit, Exclude, and more. Publish the library to npm with proper type exports and documentation.',
    lessonAr:
      'A utility type library provides commonly needed type helpers like Deep Partial, Deep Required, Omit, Exclude, and more. Publish the library to npm with proper type exports and documentation.',
    tasks: [
      {
        en: 'Create a package with Deep Partial, Deep Required, Omit, Exclude, and Pick utilities',
        ar: 'Create a package with Deep Partial, Deep Required, Omit, Exclude, and Pick utilities'
      },
      {
        en: 'Write proper type exports and documentation',
        ar: 'Write proper type exports and documentation'
      },
      {
        en: 'Publish the package to npm',
        ar: 'Publish the package to npm'
      },
      {
        en: 'Test that the types work as expected in a sample project',
        ar: 'Test that the types work as expected in a sample project'
      }
    ],
    exerciseEn: 'Publish a utility type library to npm.',
    exerciseAr: 'Publish a utility type library to npm.',
    deliverableEn: 'A published utility type library on npm.',
deliverableAr: 'Published utility type library on npm.',
    resources: [],
    challengeEn: 'Add a utility type that computes the return type of a function',
    challengeAr: 'Add a utility type that computes the return type of a function',
    prerequisites: [178],
    criteriaEn: ['Package created with utilities', 'Type exports documented', 'Published to npm', 'Types work in sample project'],
    criteriaAr: ['Package created with utilities', 'Type exports documented', 'Published to npm', 'Types work in sample project']
  },
  {
    dayNumber: 180,
    phaseSlug: 'typescript-advanced',
    kind: 'review' as const,
    titleEn: 'Phase 6 TypeScript Advanced Review',
    titleAr: 'Review Phase 6 TypeScript Advanced',
    topic: 'Review',
    estimatedMinutes: 70,
    objectiveEn: 'Refactor your TypeScript projects to use the advanced patterns covered: generics, conditional types, mapped types, utility types, and type guards. Ensure all projects compile with strict mode and no errors.',
    objectiveAr: 'Refactor your TypeScript projects to use the advanced patterns covered: generics, conditional types, mapped types, utility types, and type guards. Ensure all projects compile with strict mode and no errors.',
    lessonEn:
      'Phase 6 covered advanced TypeScript patterns over 30 days. Key takeaways: generics with constraints, conditional types (including distributive), mapped types, utility types (Partial, Readonly, Record, Pick, Omit, Exclude), type guards, and advanced patterns like declaration merging and namespace organization. Ensure all projects compile with strict mode and no errors.',
    lessonAr:
      'Phase 6Covered advanced TypeScript patterns over 30 days. Key takeaways: generics with constraints, conditional types (including distributive), mapped types, utility types (Partial, Readonly, Record, Pick, Omit, Exclude), type guards, and advanced patterns like declaration merging and namespace organization. Ensure all projects compile with strict mode and no errors.',
    tasks: [
      {
        en: 'Refactor all Phase 6 projects to use advanced TypeScript patterns',
        ar: 'Refactor all Phase 6 projects to use advanced TypeScript patterns'
      },
      {
        en: 'Verify all projects compile with strict mode and no errors',
        ar: 'Verify all projects compile with strict mode and no errors'
      },
      {
        en: 'Run the full test suite and fix any type errors',
        ar: 'Run the full test suite and fix any type errors'
      },
      {
        en: 'Document key takeaways and carry forward to Phase 7',
        ar: 'Document key takeaways and carry forward to Phase 7'
      }
    ],
    exerciseEn: 'Complete the Phase 6 review and prepare for Phase 7.',
    exerciseAr: 'Complete the Phase 6 review and prepare for Phase 7.',
    deliverableEn: 'A reviewed and refactored TypeScript codebase.',
deliverableAr: 'Reviewed and refactored TypeScript codebase.',
    resources: [],
    challengeEn: 'Create a summary document of all advanced TypeScript patterns covered in Phase 6',
    challengeAr: 'Create a summary document of all advanced TypeScript patterns covered in Phase 6',
    prerequisites: [179],
    criteriaEn: ['All projects compile strict mode', 'No type errors', 'Test suite passing', 'Key takeaways documented'],
    criteriaAr: ['All projects compile strict mode', 'No type errors', 'Test suite passing', 'Key takeaways documented']
  }
]