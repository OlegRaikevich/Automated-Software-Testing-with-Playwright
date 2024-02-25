import { test, expect } from "@playwright/test"

test.describe("Transfer Funds", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/logout.html')
        await page.click('#signin_button')
        await page.type('#user_login', 'username')
        await page.type('#user_password', 'password')
        await page.click('text=Sign in')
        await page.goBack()
    })

    test("Transfer funds", async ({ page }) => {
        await page.click("#onlineBankingMenu")
        await page.click("#transfer_funds_link")

        await page.selectOption("#tf_fromAccountId", '2')
        await page.selectOption("#tf_toAccountId", '3')

        await page.type('#tf_amount', '500')
        await page.type('#tf_description', 'test description')
        await page.click('#btn_submit')

        const boardHeader = await page.locator('h2.board-header')
        await expect(boardHeader).toContainText("Transfer Money & Make Payments - Verify")

        const fromAccountFieldVerify = await page.locator("#tf_fromAccountId")
        await expect(fromAccountFieldVerify).toHaveValue('Checking')

        const toAccountFieldVerify = await page.locator('#tf_toAccountId')
        await expect(toAccountFieldVerify).toHaveValue("Savings")

        const amountFieldVerify = page.locator('#tf_amount')
        await expect(amountFieldVerify).toHaveValue('500')

        const descriptionFieldVerify = page.locator('#tf_description')
        await expect(descriptionFieldVerify).toHaveValue('test description')

        await page.click('#btn_submit')

        const succsessfulMessage = page.locator('.alert-success')
        await expect(succsessfulMessage).toContainText('You successfully submitted your transaction.')
    })
})