import { Page } from "@playwright/test";

export class AbstractPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async waitForTimeout(time) {
        await this.page.waitForTimeout(time)
    }

    async waitForHomePageURL() {
        await this.page.waitForURL("http://zero.webappsecurity.com")
    }
}