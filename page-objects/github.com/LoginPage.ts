import { expect, Locator, Page } from "@playwright/test"

export class LoginPage {
    readonly page: Page
    readonly UserNameInput: Locator
    readonly PasswordInput: Locator
    readonly SignInButton: Locator
    readonly loginAllert: Locator

    constructor(page: Page) {
        this.page = page
        this.UserNameInput = page.locator('#login_field')
        this.PasswordInput = page.locator('input#password')
        this.SignInButton = page.locator('.js-sign-in-button')
        this.loginAllert = page.locator('.js-flash-alert')
    }

    async login(username, password) {
        if (typeof username === 'undefined') {
            throw new Error("Environment variables username are not set.");
        }
        await this.UserNameInput.fill(username || "defaultLogin")
        if (typeof password === 'undefined') {
            throw new Error("Environment variables password are not set.");
        }
        await this.PasswordInput.fill(password || "defaultPassword")
        await this.SignInButton.click()
    }

    async assertLoginErrorAllert() {
        await expect(this.loginAllert).toBeVisible()
        await expect(this.loginAllert).toContainText(" Incorrect username or password. ")
    }

    async assertLoginSuccess() {
        await expect(this.page).toHaveURL("https://github.com/")
    }

}