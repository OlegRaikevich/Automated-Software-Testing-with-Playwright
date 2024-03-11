import { test, expect } from "@playwright/test"
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'

test.describe("Payment", () => {
    let homePage: HomePage
    let loginPage: LoginPage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)

        homePage.visit()
        homePage.clickOnSignIn()
        loginPage.login('username', 'password')
    })

    test("New payment", async ({ page }) => {
        await page.click('#online-banking')
        await page.click('#pay_bills_link')
        await page.selectOption("#sp_payee", 'apple')
        await page.click('#sp_get_payee_details')
        await page.waitForSelector('#sp_payee_details')

        await page.selectOption('#sp_account', '6')
        await page.type('#sp_amount', '5000')
        await page.type('#sp_date', '2024-02-08')
        await page.type('#sp_description', 'test description')
        await page.click('#pay_saved_payees')

        const successfullMeasage = page.locator('#alert_content > span')
        await expect(successfullMeasage).toBeVisible()
        await expect(successfullMeasage).toContainText('The payment was successfully submitted.')
    })

})