import { test, expect } from "@playwright/test"
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'
import { PaymentPage } from "../../page-objects/PaymentPage"
import { AccountNavigationBar } from "../../page-objects/components/AccountNavigationBar"

test.describe.only("Payment", () => {
    let homePage: HomePage
    let loginPage: LoginPage
    let paymentPage: PaymentPage
    let navbar: AccountNavigationBar

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        paymentPage = new PaymentPage(page)
        navbar = new AccountNavigationBar(page)


        homePage.visitHomePage()
        homePage.clickOnSignIn()
        loginPage.login('username', 'password')
    })

    test("New payment", async ({ page }) => {
        await page.click('#online-banking')
        await page.click('#pay_bills_link')

        await paymentPage.createPyment()
        await paymentPage.assertSuccessfullMeasage()
    })

})