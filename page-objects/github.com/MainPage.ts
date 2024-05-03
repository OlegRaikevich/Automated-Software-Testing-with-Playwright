import { expect, Locator, Page } from "@playwright/test"

export class MainPage {
    readonly page: Page
    readonly signInButton: Locator
    readonly userLabelButton: Locator
    readonly usernameLabel: Locator

    constructor(page: Page) {
        this.page = page
        this.signInButton = page.locator('.HeaderMenu-link--sign-in')
        this.userLabelButton = page.locator('#dialog-show-dialog-606cd4d5-a13c-4d3b-879b-c1666db06aec')
        this.usernameLabel = page.locator("span[class='Truncate text-bold'] span[class='Truncate-text']")

        // Todo: rewrite user panel on main page it is like as component
    }

    async visitMainPage() {
        await this.page.goto('https://github.com/')
    }

    async clickOnSignInBotton() {
        await this.signInButton.click()
    }

    async clickUserLabelButton() {
        await this.userLabelButton.click()
    }

    async assertUsernameLabel() {
        await expect(this.usernameLabel).toBeVisible()
    }
}
