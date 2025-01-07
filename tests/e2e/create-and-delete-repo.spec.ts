import { expect, test } from "@playwright/test"
import { getRandomString, getRandomNumber } from "../../utils/data-helpers"
import { PageObjectManager } from "../../page-objects/PageObjectManager"

test.describe("Create repository", () => {
    let pageManager: PageObjectManager

    let repoName: string
    let repoDescription: string

    test.beforeEach(async ({ page }) => {
        pageManager = new PageObjectManager(page)

        repoName = "RepoName" + String(getRandomNumber())
        repoDescription = "RepositoryDescription" + getRandomString()

        await pageManager.mainPage.visitMainPage()
        await pageManager.mainPage.clickOnSignInBotton()
        await pageManager.loginPage.login(process.env.USER_LOGIN, process.env.USER_PASSWORD)
    })

    test.only("Positive scenario for creating repository", async ({ page }) => {
        await pageManager.userPanel.clickOnButton('User label')
        await pageManager.userPanel.clickOnButton('Your repositories')
        await pageManager.repositoriesPage.clickOnNewRepositoryButton()

        await pageManager.newRepositoryPage.createRepository(repoName, repoDescription)

        const repositoryTitle = await page.locator("//a[contains(text(),'test-repo')]")
        await expect(repositoryTitle).toBeVisible()
        const setupInstructionBox = await page.locator("//body/div[1]/div[6]/div[1]/main[1]/turbo-frame[1]/div[1]/div[1]/git-clone-help[1]/div[1]")
        await expect(setupInstructionBox).toBeVisible()
    })

    // test("Psitive scenario for deleting repository", async ({ page }) => {
    //     await userPanel.clickOnButton('User label')
    //     await userPanel.clickOnButton('Your repositories')
    //     await repositoriesPage
    // })


})