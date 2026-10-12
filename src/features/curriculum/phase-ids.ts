/**
 * GENERATED FILE — do not edit.
 *
 * Produced by `npm run seed:curriculum`. Maps each curriculum phase slug to
 * the deterministic UUID used in the `curriculum_phases` table, so the UI can
 * associate a project with a phase without duplicating the id scheme.
 *
 * Regenerate after adding or renaming a phase.
 */
export const PHASE_IDS: Record<string, string> = {
  'html-css': 'd6689767-a60c-520d-a341-2cbe2d0ab1a2',
  'javascript-basics': '9d716dbf-bb13-502f-9314-afc610e5ed32',
  'javascript-advanced': '8d1783e3-7f4b-588b-b32a-554fe6346844',
  'backend': '249f74c7-cc2c-5c23-b6c8-1d896bb97022',
  'database-auth': 'ef71b849-2224-52fd-8a8a-37520256275e',
  'react': '9187c7ab-4977-5950-bdb2-3943f6d1a5c4',
  'nextjs': 'b4349f9f-b323-5ca5-bc93-0c4b6c105f8f',
  'typescript-testing-security': 'edd646a2-39f1-5b49-a26f-d758625ac36b',
  'ai-integration': 'd7c36ccd-37ca-5d5a-a798-6ae3bd0e72c2',
  'capstone': '67c57cea-90a7-543a-8f95-523803cfa125',
  'deployment': '7fd5f9a5-b207-542b-80b7-18f51cc0b75b',
  'portfolio-career': '6c31afc3-119b-59c9-b6fd-ee8d95404642',
}

export function phaseUuid(slug: string): string | null {
  return PHASE_IDS[slug] ?? null
}
