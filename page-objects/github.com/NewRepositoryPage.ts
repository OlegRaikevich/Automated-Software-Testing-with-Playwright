import { expect, Locator, Page } from "@playwright/test"

export class NewRepositoryPage {
    readonly page: Page
    readonly repositoryNameInput: Locator
    readonly repositoryOwnerButton: Locator
    readonly repositoryOwnerSelection: Locator
    readonly repositoryDescriptionInput: Locator
    readonly createRepositoryButton: Locator

    constructor(page: Page) {
        this.page = page
        this.repositoryNameInput = page.locator('#\:r7\:')
        this.repositoryOwnerButton = page.locator('#\:r5\:')
        this.repositoryOwnerSelection = page.locator('#\:r1c\:')
        this.repositoryDescriptionInput = page.locator('#\:r8\:')
        this.createRepositoryButton = page.locator("//span[contains(text(),'Create repository')]")
    }

    async createRepository(repositoryName: string, repositoryDescription: string) {
        await this.repositoryNameInput.fill(repositoryName)
        await this.repositoryOwnerButton.click()
        await this.repositoryOwnerSelection.click()
        await this.repositoryDescriptionInput.fill(repositoryDescription)
        await this.createRepositoryButton.click()
    }
}


