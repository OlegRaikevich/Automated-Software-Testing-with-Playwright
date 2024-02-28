import { expect, test } from "@playwright/test"
import { login } from "../../helpers"

test.describe.only("Currency Exchange", () => {
    test.beforeEach(async ({ page }) => {
        await login(page)
        await page.goto('http://zero.webappsecurity.com/bank/pay-bills.html')
    })

    test("Purchase Foreign Currency", async ({ page }) => {
        await page.click('a[href="#ui-tabs-3"]')
        await page.selectOption("#pc_currency", "EUR")
        await page.type("#pc_amount", '500')
        await page.click("#pc_inDollars_true")
        await page.click('#purchase_cash')

        const succsesfullPurchase = page.locator('#alert_content')
        await expect(succsesfullPurchase).toBeVisible()
        await expect(succsesfullPurchase).toContainText('Foreign currency cash was successfully purchased.')
    })
})