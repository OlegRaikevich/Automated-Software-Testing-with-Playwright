import { Locators } from "../utils/locators"
import { BasePage } from "./BasePage"

export class MainPage extends BasePage {
    async visitMainPage() {
        await this.page.goto('https://github.com/')
    }

    async clickOnSignInBotton() {
        await this.click(Locators.mainPage.signInButton)
    }

    async clickOnHomeLabel() {
        await this.click(Locators.mainPage.homeLabel)
    }
}
