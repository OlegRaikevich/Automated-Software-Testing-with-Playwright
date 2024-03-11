import { test, expect } from "@playwright/test"
import { HomePage } from "../../page-objects/HomePage"
import { LoginPage } from "../../page-objects/LoginPage"

test.describe.parallel.only("Filter Transactions", () => {
    let homePage: HomePage
    let loginPage: LoginPage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)

        homePage.visit()
        homePage.clickOnSignIn()
        loginPage.login('username', 'password')
        await page.pause()
    })

    test.only("Transactions Savings account", async ({ page }) => {
        await page.pause()
        await page.click("#online-banking")
        await page.pause()
        await page.click("#account_activity_link")
        await page.pause()
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

    test("Transactions Checking account", async ({ page }) => {
        await page.click('#account_activity_link')
        await page.selectOption("#aa_accountId", "2")

        const tableRowDate = page.locator("#all_transactions_for_account thead th:nth-child(1)")
        await expect(tableRowDate).toContainText('Date')


        const tableRowDescription = page.locator("#all_transactions_for_account thead th:nth-child(2)")
        await expect(tableRowDescription).toContainText('Description')

        const tableRowDeposit = page.locator("#all_transactions_for_account thead th:nth-child(3)")
        await expect(tableRowDeposit).toContainText('Deposit')

        const tableRowWithdrawal = page.locator("#all_transactions_for_account thead th:nth-child(4)")
        await expect(tableRowWithdrawal).toContainText('Withdrawal')
    })

    test("Transactions Loan account", async ({ page }) => {
        await page.click('#account_activity_link')
        await page.selectOption("#aa_accountId", "4")

        const tableRowDate = page.locator("#all_transactions_for_account thead th:nth-child(1)")
        await expect(tableRowDate).toContainText('Date')


        const tableRowDescription = page.locator("#all_transactions_for_account thead th:nth-child(2)")
        await expect(tableRowDescription).toContainText('Description')

        const tableRowDeposit = page.locator("#all_transactions_for_account thead th:nth-child(3)")
        await expect(tableRowDeposit).toContainText('Deposit')

        const tableRowWithdrawal = page.locator("#all_transactions_for_account thead th:nth-child(4)")
        await expect(tableRowWithdrawal).toContainText('Withdrawal')
    })

    test("Transactions Creadit Card account", async ({ page }) => {
        await page.click('#account_activity_link')
        await page.selectOption("#aa_accountId", "5")

        const noResults = page.locator("div.well")
        await expect(noResults).toBeVisible
        await expect(noResults).toContainText('No results.')
    })

    test("Transactions Brokerage account", async ({ page }) => {
        await page.click('#account_activity_link')
        await page.selectOption("#aa_accountId", "6")

        const noResults = page.locator("div.well")
        await expect(noResults).toBeVisible
        await expect(noResults).toContainText('No results.')
    })
})