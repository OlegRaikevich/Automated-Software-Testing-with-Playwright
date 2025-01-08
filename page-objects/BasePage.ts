import { Page } from "@playwright/test";

export class BasePage {
    protected page: Page

    constructor(page: Page) {
        this.page = page
    }

    async click(selector: string) {
        await this.page.locator(selector).click()
    }

    async fillInput(selector: string, text: string) {
        await this.page.locator(selector).fill(text)
    }

    async waitForVisible(selector: string) {
        await this.page.locator(selector).waitFor({ state: "visible" })
    }

    async isVisible(selector: string) {
        await this.page.locator(selector).isVisible()
    }
}