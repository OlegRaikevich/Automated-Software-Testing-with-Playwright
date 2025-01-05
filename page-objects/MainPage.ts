import { expect, Locator, Page } from "@playwright/test"

export class MainPage {
    readonly page: Page
    readonly signInButton: Locator
    readonly homeLabel: Locator

    constructor(page: Page) {
        this.page = page
        this.signInButton = page.locator('.HeaderMenu-link--sign-in')
        this.homeLabel = page.locator("h2[data-target='feed-container.feedTitle']")
    }

    async visitMainPage() {
        await this.page.goto('https://github.com/')
    }

    async clickOnSignInBotton() {
        await this.signInButton.click()
    }

    async clickOnHomeLabel() {
        await this.homeLabel.click()
    }
}
