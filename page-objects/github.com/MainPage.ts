import { expect, Locator, Page } from "@playwright/test"

export class MainPage {
    readonly page: Page
    readonly signInButton: Locator
    readonly userLabelButton: Locator
    readonly usernameLabel: Locator
    readonly homeLabel: Locator

    constructor(page: Page) {
        this.page = page
        this.signInButton = page.locator('.HeaderMenu-link--sign-in')
        this.userLabelButton = page.locator("span[class='Button-label'] img[class='avatar circle']")
        this.usernameLabel = page.locator("span[class='Truncate text-bold'] span[class='Truncate-text']")
        this.homeLabel = page.locator("h2[data-target='feed-container.feedTitle']")

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
