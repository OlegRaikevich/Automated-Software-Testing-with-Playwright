import { expect, test } from "@playwright/test"
import { PageObjectManager } from "../../page-objects/PageObjectManager"

test.describe.only("Login Github", () => {
    let pageManager: PageObjectManager

    test.beforeEach(async ({ page }) => {
        pageManager = new PageObjectManager(page)


        await pageManager.mainPage.visitMainPage()
    })

    test("Positive scenario for login", async ({ page }) => {
        await pageManager.mainPage.clickOnSignInBotton()
        await pageManager.loginPage.login(process.env.USER_LOGIN, process.env.USER_PASSWORD)
        await pageManager.loginPage.assertLoginSuccess()
        await pageManager.userPanel.clickOnButton('User label')
        await pageManager.userPanel.assertUsernameLabel()
    })

    test("Negative scenario for login", async ({ page }) => {
        await pageManager.mainPage.clickOnSignInBotton()
        await pageManager.loginPage.login('invalid_usename', 'invalid_password')
        await pageManager.loginPage.assertLoginErrorAllert()
    })
})
