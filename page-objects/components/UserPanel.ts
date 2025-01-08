import { Locators } from "../../utils/locators"
import { BasePage } from "../BasePage"

export class UserPanel extends BasePage {
    async clickOnButton(buttonName: string) {
        switch (buttonName) {
            case 'User label':
                await this.click(Locators.userPanel.userLabelButton)
                break
            case 'Set status':
                await this.click(Locators.userPanel.setStatusButton)
                break
            case 'Your profile':
                await this.click(Locators.userPanel.yourProfileButton)
                break
            case 'Add account':
                await this.click(Locators.userPanel.addAccountButton)
                break
            case 'Your repositories':
                await this.click(Locators.userPanel.yourRepositoriesButton)
                break
            case 'Sign out':
                await this.click(Locators.userPanel.signOutButton)
                break
            default:
                throw new Error('This button does not exist.')
        }
    }
}
