# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\default-test.spec.ts >> DevJourney 365 - Critical User Flows >> locale toggle exists
- Location: e2e\default-test.spec.ts:11:3

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:5173/
Call log:
  - navigating to "http://localhost:5173/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test.describe('DevJourney 365 - Critical User Flows', () => {
  4  |   test('app page loads', async ({ page }) => {
  5  |     // Test that the app page loads (requires dev server running on localhost:5173)
  6  |     await page.goto('http://localhost:5173')
  7  |     // Check that the page has the expected content
  8  |     await expect(page.locator('text=365 Days')).toBeVisible()
  9  |   })
  10 | 
  11 |   test('locale toggle exists', async ({ page }) => {
> 12 |     await page.goto('http://localhost:5173')
     |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:5173/
  13 |     // Check that language toggle button exists
  14 |     await expect(page.getByRole('button', { name: /language/i })).toBeVisible()
  15 |   })
  16 | 
  17 |   test('navigation works', async ({ page }) => {
  18 |     await page.goto('http://localhost:5173')
  19 |     // Navigate through main sections
  20 |     await expect(page.getByRole('navigation')).toBeVisible()
  21 |     // Click on a main nav link if present
  22 |     const links = page.getByRole('link')
  23 |     const linkCount = await links.count()
  24 |     if (linkCount > 0) {
  25 |       await links.first().click()
  26 |       await expect(page).toHaveURL(/.*\/.+/)
  27 |     }
  28 |   })
  29 | 
  30 |   test('page has proper title', async ({ page }) => {
  31 |     await page.goto('http://localhost:5173')
  32 |     await expect(page).toHaveTitle(/365 Days/)
  33 |   })
  34 | })
```