import { expect, Locator, Page } from "@playwright/test"

export class RepositoriesPage {
    readonly page: Page
    readonly newRepositoryButton: Locator
    readonly existingRepositoryName: Locator

    constructor(page: Page) {
        this.page = page
        this.newRepositoryButton = page.locator('.text-center.btn.btn-primary.ml-2')
    }

    async clickOnNewRepositoryButton() {
        await this.newRepositoryButton.click()
    }
}