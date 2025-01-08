import { Locators } from "../utils/locators"
import { BasePage } from "./BasePage"

export class LoginPage extends BasePage {

    async login(username, password) {
        if (typeof username === 'undefined') {
            throw new Error("Environment variables username are not set.");
        }
        await this.fillInput(Locators.loginPage.userNameInput, username || "defaultLogin")
        if (typeof password === 'undefined') {
            throw new Error("Environment variables password are not set.");
        }
        await this.fillInput(Locators.loginPage.passwordInput, password || "defaultPassword")
        await this.click(Locators.loginPage.signInButton)
    }

    // async assertLoginErrorAllert() {
    //     await expect(this.loginAllert).toBeVisible()
    //     await expect(this.loginAllert).toContainText(" Incorrect username or password. ")
    // }

    // async assertLoginSuccess() {
    //     await expect(this.page).toHaveURL("https://github.com/session")
    // }
}
