import { test, expect } from '@playwright/test'
import { HomePage } from "../../../page-objects/zerobank/HomePage"

test.describe('Search Result', () => {

    test("Should find search results", async ({ page }) => {
        let homePage: HomePage = new HomePage(page)

        await homePage.visitHomePage()
        await homePage.searchFor('bank')

        const numberOfLinks = await page.locator('li > a')
        await expect(numberOfLinks).toHaveCount(2)
    })
})