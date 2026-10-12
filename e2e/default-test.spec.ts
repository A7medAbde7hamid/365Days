import { test, expect } from '@playwright/test'

test.describe('DevJourney 365 - Critical User Flows', () => {
  test('app page loads', async ({ page }) => {
    // Test that the app page loads (requires dev server running on localhost:5173)
    await page.goto('http://localhost:5173')
    // Check that the page has the expected content
    await expect(page.locator('text=365 Days')).toBeVisible()
  })

  test('locale toggle exists', async ({ page }) => {
    await page.goto('http://localhost:5173')
    // Check that language toggle button exists
    await expect(page.getByRole('button', { name: /language/i })).toBeVisible()
  })

  test('navigation works', async ({ page }) => {
    await page.goto('http://localhost:5173')
    // Navigate through main sections
    await expect(page.getByRole('navigation')).toBeVisible()
    // Click on a main nav link if present
    const links = page.getByRole('link')
    const linkCount = await links.count()
    if (linkCount > 0) {
      await links.first().click()
      await expect(page).toHaveURL(/.*\/.+/)
    }
  })

  test('page has proper title', async ({ page }) => {
    await page.goto('http://localhost:5173')
    await expect(page).toHaveTitle(/365 Days/)
  })
})