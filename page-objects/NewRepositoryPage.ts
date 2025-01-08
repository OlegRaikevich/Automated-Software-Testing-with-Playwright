import { BasePage } from "./BasePage"
import { Locators } from "../utils/locators"

export class NewRepositoryPage extends BasePage {

    async createRepository(repositoryName: string, repositoryDescription: string) {
        await this.fillInput(Locators.newRepositoryPage.repositoryNameInput, repositoryName)
        await this.click(Locators.newRepositoryPage.repositoryOwnerButton)
        await this.click(Locators.newRepositoryPage.repositoryOwnerSelection)
        await this.fillInput(Locators.newRepositoryPage.repositoryDescriptionInput, repositoryDescription)
        await this.click(Locators.newRepositoryPage.createRepositoryButton)
    }
}
