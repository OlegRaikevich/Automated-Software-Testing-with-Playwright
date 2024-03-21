import { test, expect } from "@playwright/test"
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'
import { PaymentPage } from "../../page-objects/PaymentPage"
import { AccountNavigationBar } from "../../page-objects/components/AccountNavigationBar"
import { OnlineBankingPage } from "../../page-objects/OnlineBankingPage"

test.describe("Payment", () => {
    let homePage: HomePage
    let loginPage: LoginPage
    let paymentPage: PaymentPage
    let navbar: AccountNavigationBar
    let onlineBankingPage: OnlineBankingPage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        paymentPage = new PaymentPage(page)
        navbar = new AccountNavigationBar(page)
        onlineBankingPage = new OnlineBankingPage(page)


        homePage.visitHomePage()
        homePage.clickOnSignIn()
        loginPage.login('username', 'password')
    })

    test("New payment", async ({ page }) => {
        await homePage.clickOnOnlineBankingLink()
        await onlineBankingPage.clickOnPayBillsLink()

        await paymentPage.createPyment()
        await paymentPage.assertSuccessfullMeasage()
    })

})