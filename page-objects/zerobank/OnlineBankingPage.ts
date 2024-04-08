import { expect, Locator, Page } from "@playwright/test"

export class OnlineBankingPage {
    readonly page: Page
    readonly linkPayBills: Locator

    constructor(page: Page) {
        this.page = page
        this.linkPayBills = page.locator("#pay_bills_link")
    }

    async clickOnPayBillsLink() {
        await this.linkPayBills.click()
    }
}