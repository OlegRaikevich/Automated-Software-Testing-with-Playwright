import { Locators } from "../utils/locators"
import { BasePage } from "./BasePage"

export class RepositoriesPage extends BasePage {
    async clickOnNewRepositoryButton() {
        await this.click(Locators.repositoriesPage.newRepositoryButton)
    }

    async deleteRepository(repoName: string){
        await this.click(Locators.repositoriesPage.settingsTab)

        await this.page.locator(Locators.repositoriesPage.deleteRepositoryButton).scrollIntoViewIfNeeded()
        await this.click(Locators.repositoriesPage.deleteRepositoryButton)

        await this.fillInput(Locators.repositoriesPage.confirmDeleteInput, repoName)
        await this.click(Locators.repositoriesPage.confirmDeleteButton)
    }
}
