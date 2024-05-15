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
        this.repositoryNameInput = page.locator('input[data-testid="repository-name-input"]')
        this.repositoryOwnerButton = page.locator('button[aria-describedby="repo-owner-dropdown-error"]')
        this.repositoryOwnerSelection = page.locator('li[role="menuitemradio"]')
        this.repositoryDescriptionInput = page.locator('input[aria-label="Description"]')
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


