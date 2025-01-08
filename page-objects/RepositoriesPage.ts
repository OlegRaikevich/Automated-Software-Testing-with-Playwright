import { Locators } from "../utils/locators"
import { BasePage } from "./BasePage"

export class RepositoriesPage extends BasePage {
    async clickOnNewRepositoryButton() {
        await this.click(Locators.repositoriesPage.newRepositoryButton)
    }
}