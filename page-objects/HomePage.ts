import { expect, Locator, Page } from '@playwright/test'

export class HomePage {
    readonly page: Page
    readonly signInButton: Locator
    readonly searchBox: Locator
    readonly linkFeedbackTab: Locator
    readonly linkOnlineBankingTab: Locator
    readonly moreServicesButton: Locator
    readonly linkAccountActivity: Locator
    readonly linkTransferFunds: Locator
    readonly linkMoneyMap: Locator

    constructor(page: Page) {
        this.page = page
        this.signInButton = page.locator('#signin_button')
        this.searchBox = page.locator('#searchTerm')
        this.linkFeedbackTab = page.locator('#feedback')
        this.linkOnlineBankingTab = page.locator('#onlineBankingMenu')
        this.moreServicesButton = page.locator('#online-banking')
        this.linkAccountActivity = page.locator('#account_activity_link')
        this.linkTransferFunds = page.locator('#transfer_funds_link')
        this.linkMoneyMap = page.locator('#money_map_link')
    }

    async visitHomePage() {
        await this.page.goto('http://zero.webappsecurity.com/')
    }

    async clickOnSignIn() {
        await this.signInButton.click()
    }

    async searchFor(phrase: string) {
        await this.searchBox.type(phrase)
        await this.page.keyboard.press('Enter')
    }

    async clickOnFeedbackLink() {
        await this.linkFeedbackTab.click()
    }

    async clickOnOnlineBankingLink() {
        await this.linkOnlineBankingTab.click()
    }

    async clickOnMoreServicesButton() {
        await this.moreServicesButton.click()
    }

    async clickOnAccountActivityLink() {
        await this.linkAccountActivity.click()
    }

    async clickOnTransferFunds() {
        await this.linkTransferFunds.click()
    }

    async clickOnMoneyMap() {
        await this.linkMoneyMap.click()
    }
}

