import { test, expect } from "@playwright/test"
import { login } from "../../helpers"

test.describe("Filter Transactions", () => {
    test.beforeEach(async ({ page }) => {
        await login(page)
        await page.goto('http://zero.webappsecurity.com/bank/account-activity.html')
    })

    test("Transactions Savings account", async ({ page }) => {
        await page.selectOption("#aa_accountId", "1")

        const tableRowDate = page.locator("#all_transactions_for_account thead th:nth-child(1)")
        await expect(tableRowDate).toContainText('Date')


        const tableRowDescription = page.locator("#all_transactions_for_account thead th:nth-child(2)")
        await expect(tableRowDescription).toContainText('Description')

        const tableRowDeposit = page.locator("#all_transactions_for_account thead th:nth-child(3)")
        await expect(tableRowDeposit).toContainText('Deposit')

        const tableRowWithdrawal = page.locator("#all_transactions_for_account thead th:nth-child(4)")
        await expect(tableRowWithdrawal).toContainText('Withdrawal')
    })
})