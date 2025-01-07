import { Page } from "@playwright/test";
import { MainPage } from "./MainPage";
import { LoginPage } from "./LoginPage";
import { NewRepositoryPage } from "./NewRepositoryPage";
import { RepositoriesPage } from "./RepositoriesPage";
import { NavigationBar } from "./components/NavigationBar";
import { UserPanel } from "./components/UserPanel";


export class PageObjectManager {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    get mainPage() {
        return new MainPage(this.page)
    }

    get loginPage() {
        return new LoginPage(this.page)
    }

    get newRepositoryPage() {
        return new NewRepositoryPage(this.page)
    }

    get repositoriesPage() {
        return new RepositoriesPage(this.page)
    }

    get navigationBar() {
        return new NavigationBar(this.page)
    }

    get userPanel() {
        return new UserPanel(this.page)
    }
}