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
        this.PasswordInput = page.locator('#password')
        this.SignInButton = page.locator('.js-sign-in-button')
        this.loginAllert = page.locator('.js-flash-alert')
    }

    async login(username: string, password: string) {
        await this.UserNameInput.fill(username)
        await this.PasswordInput.fill(password)
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