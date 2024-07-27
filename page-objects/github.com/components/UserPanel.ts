import { expect, Locator, Page } from '@playwright/test'

export class UserPanel {
    readonly page: Page
    readonly userLabelButton: Locator
    readonly usernameLabel: Locator
    readonly setStatusButton: Locator
    readonly yourProfileButton: Locator
    readonly addAccountButton: Locator
    readonly yourRepositoriesButton: Locator
    readonly signOutButton: Locator

    constructor(page: Page) {
        this.page = page
        this.usernameLabel = page.locator("span[class='Truncate text-bold'] span[class='Truncate-text']")
        this.userLabelButton = page.locator("/html[1]/body[1]/div[1]/div[1]/header[1]/div[1]/div[1]/deferred-side-panel[1]/include-fragment[1]/button[1]")
        this.setStatusButton = page.locator(".ActionListItem-label.ActionListItem-label--truncate")
        // todo: add other locator
        this.yourProfileButton = page.locator('a[data-analytics-event="{"action":"PROFILE"}"] span[class="ActionListItem-label"]')
        this.addAccountButton = page.locator('a[data-analytics-event="{"action":"Add account"}"] span[class="ActionListItem-label"]')
        this.yourRepositoriesButton = page.locator("//span[contains(text(),'Your repositories')]")
        this.signOutButton = page.locator('a[class="ActionListContent"] span[class="ActionListItem-label"]')
    }

    async clickOnButton(buttonName: string) {
        switch (buttonName) {
            case 'User label':
                await this.userLabelButton.click()
                break
            case 'Set status':
                await this.setStatusButton.click()
                break
            case 'Your profile':
                await this.yourProfileButton.click()
                break
            case 'Add account':
                await this.addAccountButton.click()
                break
            case 'Your repositories':
                await this.yourRepositoriesButton.click()
                break
            case 'Sign out':
                await this.signOutButton.click()
                break
            default:
                throw new Error('This button does not exist.')
        }
    }

    async assertUsernameLabel() {
        await expect(this.usernameLabel).toBeVisible()
    }
}