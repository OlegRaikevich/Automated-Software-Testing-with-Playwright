import { expect, test } from "@playwright/test"
import { HomePage } from "../../../page-objects/zerobank/HomePage"
import { LoginPage } from "../../../page-objects/zerobank/LoginPage"

test.describe("Currency Exchange", () => {
    let homePage: HomePage
    let loginPage: LoginPage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)

        homePage.visitHomePage()
        homePage.clickOnSignIn()
        loginPage.login('username', 'password')
        await page.waitForURL("http://zero.webappsecurity.com")
    })

    test("Purchase Foreign Currency", async ({ page }) => {
        await homePage.clickOnOnlineBankingLink()
        await page.click('#pay_bills_link')
        await page.click('a[href="#ui-tabs-3"]')
        await page.selectOption("#pc_currency", "EUR")

        const rate = page.locator('#sp_sell_rate')
        await expect(rate).toBeVisible()

        await page.type("#pc_amount", '500')
        await page.click("#pc_inDollars_true")
        await page.click('#pc_calculate_costs')

        const conversionAmount = page.locator('#pc_conversion_amount')
        await expect(conversionAmount).toBeVisible()
        await expect(conversionAmount).toContainText('500.00 U.S. dollar (USD)')


        await page.click('#purchase_cash')
        const succsesfullPurchase = page.locator('#alert_content')
        await expect(succsesfullPurchase).toBeVisible()
        await expect(succsesfullPurchase).toContainText('Foreign currency cash was successfully purchased.')
    })
})