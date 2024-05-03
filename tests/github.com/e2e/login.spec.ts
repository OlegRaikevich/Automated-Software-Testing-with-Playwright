import { expect, test } from "@playwright/test"
import { MainPage } from "../../../page-objects/github.com/MainPage"
import { LoginPage } from "../../../page-objects/github.com/LoginPage"
import { credentials } from "../../../credentials.json"

test.describe("Login Github", () => {
    let mainPage: MainPage
    let loginPage: LoginPage

    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page)

        await mainPage.visitMainPage()
    })

    test("Positive scenario for login", async ({ page }) => {
        await mainPage.clickOnSignInBotton()
        await loginPage.login(credentials.username, credentials.password)
        await loginPage.assertLoginSuccess()
        await mainPage.clickUserLabelButton()
        await mainPage.assertUsernameLabel()
    })
})
