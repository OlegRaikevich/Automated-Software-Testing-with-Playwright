import { Locators } from "../../utils/locators"
import { BasePage } from "../BasePage"

export class NavigationBar extends BasePage {
    async clickOnTab(tabName: string) {
        switch (tabName) {
            case 'Overview':
                await this.click(Locators.naviagtionBar.overviewTab)
                break
            case 'Repositories':
                await this.click(Locators.naviagtionBar.repositoriesTab)
                break
            case 'Projects':
                await this.click(Locators.naviagtionBar.projectsTab)
                break
            case 'Packages':
                await this.click(Locators.naviagtionBar.packagesTab)
                break
            case 'Stars':
                await this.click(Locators.naviagtionBar.starsTab)
                break
            default:
                throw new Error('This tab does not exist.')
        }
    }

}
