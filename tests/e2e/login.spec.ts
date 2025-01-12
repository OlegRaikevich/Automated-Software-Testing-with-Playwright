import { expect, test } from "@playwright/test"
import { PageObjectManager } from "../../page-objects/PageObjectManager"
import { Locators } from "../../utils/locators"
import exp from "constants"

test.describe.only("Login Github", () => {
    let pageManager: PageObjectManager

    test.beforeEach(async ({ page }) => {
        pageManager = new PageObjectManager(page)
        await pageManager.mainPage.visitMainPage()
    })

    test("Positive scenario for login", async ({ page }) => {
        await pageManager.mainPage.clickOnSignInBotton()
        await pageManager.loginPage.login(process.env.USER_LOGIN, process.env.USER_PASSWORD)

        await expect(page).toHaveURL("https://github.com/session")

        const userLabel = page.locator(Locators.userPanel.usernameLabel)
        await expect(userLabel).toBeVisible()
    })

    test("Negative scenario for login", async ({ page }) => {
        await pageManager.mainPage.clickOnSignInBotton()
        await pageManager.loginPage.login('invalid_usename', 'invalid_password')

        const loginAllert = page.locator(Locators.loginPage.loginAllert)
        await expect(loginAllert).toBeVisible()
        await expect(loginAllert).toContainText('Incorrect username or password.')
    })
})
