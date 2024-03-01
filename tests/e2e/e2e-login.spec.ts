import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'

test.describe.parallel("Login / Logout Flow", () => {
    let loginPage: LoginPage

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        await loginPage.visit()
    })
    // Negatie scenario

    test('Negative Scenario for Login', async ({ page }) => {
        await page.click('#signin_button')
        await loginPage.login('invalid username', 'invalid password')
        await loginPage.assertErrorMessage()
    })
    // Positive Scenario + Logout
    test('Positive Scenario for Login + Logout', async ({ page }) => {
        await page.click('#signin_button')
        await loginPage.login('username', 'password')

        await page.goBack()
        await page.click('text=Checking Account Activity')

        const accountSummaryTab = await page.locator('#account_summary_tab')
        await expect(accountSummaryTab).toBeVisible()

        await page.goto('http://zero.webappsecurity.com/logout.html')
        await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
    })
})