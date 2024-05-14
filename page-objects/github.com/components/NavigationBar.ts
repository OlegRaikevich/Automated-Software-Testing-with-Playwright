import { expect, Locator, Page } from "@playwright/test"

export class NavigationBar {
    readonly page: Page
    readonly overviewTab: Locator
    readonly repositoriesTab: Locator
    readonly projectsTab: Locator
    readonly packagesTab: Locator
    readonly starsTab: Locator

    constructor(page: Page) {
        this.page = page
        this.overviewTab = page.locator('#overview-tab')
        this.repositoriesTab = page.locator('#repositories-tab')
        this.projectsTab = page.locator('#projects-tab')
        this.packagesTab = page.locator('#packages-tab')
        this.starsTab = page.locator('#stars-tab')
    }

    async clickOnTab(tabName: string) {
        switch (tabName) {
            case 'Overview':
                await this.overviewTab.click()
                break
            case 'Repositories':
                await this.repositoriesTab.click()
                break
            case 'Projects':
                await this.projectsTab.click()
                break
            case 'Packages':
                await this.packagesTab.click()
                break
            case 'Stars':
                await this.starsTab.click()
                break
            default:
                throw new Error('This tab does not exist.')
        }
    }

}
