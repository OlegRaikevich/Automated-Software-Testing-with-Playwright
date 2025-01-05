import { expect, test } from "@playwright/test"
import { MainPage } from "../../../page-objects/github.com/MainPage"
import { LoginPage } from "../../../page-objects/github.com/LoginPage"
import { UserPanel } from "../../../page-objects/github.com/components/UserPanel"

test.describe.only("Login Github", () => {
    let mainPage: MainPage
    let loginPage: LoginPage
    let userPanel: UserPanel

    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page)
        loginPage = new LoginPage(page)
        userPanel = new UserPanel(page)


        await mainPage.visitMainPage()
    })

    test("Positive scenario for login", async ({ page }) => {
        await mainPage.clickOnSignInBotton()
        await loginPage.login(process.env.USER_LOGIN, process.env.USER_PASSWORD )
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
