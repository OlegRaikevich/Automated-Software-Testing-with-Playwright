import { test } from "@playwright/test"
import { HomePage } from "../../../page-objects/zerobank/HomePage"
import { LoginPage } from "../../../page-objects/zerobank/LoginPage"

test.describe.only("Login Page Visual Tests", () => {
    let homePage: HomePage
    let loginPage: LoginPage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)

        await homePage.visitHomePage()
        await homePage.clickOnSignIn()
    })

    test("Login Form", async ({ page }) => {
        await loginPage.snapshotLoginForm()
    })

    test("Login Error Message", async ({ page }) => {
        await loginPage.login("Invalid username", "Invalid password")
        await loginPage.snapshotErrorMessage()
    })
})
