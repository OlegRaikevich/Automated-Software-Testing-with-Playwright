import { expect, test } from "@playwright/test"
import { MainPage } from "../../../page-objects/github.com/MainPage"
import { NavigationBar } from "../../../page-objects/github.com/components/NavigationBar"
import { RepositoriesPage } from "../../../page-objects/github.com/RepositoriesPage"
import { LoginPage } from "../../../page-objects/github.com/LoginPage"
import { NewRepositoryPage } from "../../../page-objects/github.com/NewRepositoryPage"
import { UserPanel } from "../../../page-objects/github.com/components/UserPanel"

test.describe("Create repository", () => {
    let mainPage: MainPage
    let navigationBar: NavigationBar
    let repositoriesPage: RepositoriesPage
    let loginPage: LoginPage
    let newRepositoryPage: NewRepositoryPage
    let userPanel: UserPanel

    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page)
        navigationBar = new NavigationBar(page)
        repositoriesPage = new RepositoriesPage(page)
        loginPage = new LoginPage(page)
        userPanel = new UserPanel(page)
        newRepositoryPage = new NewRepositoryPage(page)

        await mainPage.visitMainPage()
        await mainPage.clickOnSignInBotton()
        await loginPage.login(process.env.USER_LOGIN, process.env.USER_PASSWORD )
    })

    test("Positive scenario for creating repository", async ({ page }) => {
        await userPanel.clickOnButton('User label')
        await userPanel.clickOnButton('Your repositories')
        await repositoriesPage.clickOnNewRepositoryButton()
        await newRepositoryPage.createRepository('test-repo', 'test repository')

        const repositoryTitle = await page.locator("//a[contains(text(),'test-repo')]")
        await expect(repositoryTitle).toBeVisible()
        const setupInstructionBox = await page.locator("//body/div[1]/div[6]/div[1]/main[1]/turbo-frame[1]/div[1]/div[1]/git-clone-help[1]/div[1]")
        await expect(setupInstructionBox).toBeVisible()
    })
})