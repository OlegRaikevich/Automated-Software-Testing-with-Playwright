import { expect, test } from "@playwright/test"
import { MainPage } from "../../../page-objects/github.com/MainPage"
import { LoginPage } from "../../../page-objects/github.com/LoginPage"
import { UserPanel } from "../../../page-objects/github.com/components/UserPanel"
import { credentials } from "../../../credentials.json"

test.describe("Login Github", () => {
    let mainPage: MainPage
    let loginPage: LoginPage
    let userPanel: UserPanel

    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page)
        loginPage = new LoginPage(page)

        await mainPage.visitMainPage()
    })

    test("Positive scenario for login", async ({ page }) => {
        await mainPage.clickOnSignInBotton()
        await loginPage.login(credentials.username, credentials.password)
        await loginPage.assertLoginSuccess()
        await userPanel.clickOnButton('User label')
        await userPanel.assertUsernameLabel()
    })

    test("Negative scenario for login", async ({ page }) => {
        await mainPage.clickOnSignInBotton()
        await loginPage.login('invalid_usename', 'invalid_password')
        await loginPage.assertLoginErrorAllert()
    })
})
