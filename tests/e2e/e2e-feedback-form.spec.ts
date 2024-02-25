import { test, expect } from '@playwright/test'

test.describe("Feedback Form", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#feedback')
    })

    test('Reset feedback form', async ({ page }) => {
        await page.type('#name', 'username')
        await page.type('#email', 'email@email.com')
        await page.type('#subject', 'subject')
        await page.type('#comment', 'some text')

        await page.click("input[name='clear']")

        const nameInput = await page.locator('#name')
        const commentInput = await page.locator('#comment')
        await expect(nameInput).toBeEmpty()
        await expect(commentInput).toBeEmpty()
    })

    test('Submit feedback form', async ({ page }) => {
        await page.type('#name', 'username')
        await page.type('#email', 'email@email.com')
        await page.type('#subject', 'subject')
        await page.type('#comment', 'some text')

        await page.click("input[name='submit']")
        await page.waitForSelector('#feedback-title')
    })

})