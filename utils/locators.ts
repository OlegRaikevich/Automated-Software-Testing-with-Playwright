export const Locators = {
    userPanel: {
        userLabelButton: 'button[aria-label="Open user navigation menu"]',
        usernameLabel: "span[class='Truncate text-bold'] span[class='Truncate-text']",
        setStatusButton: ".ActionListItem-label.ActionListItem-label--truncate",
        yourProfileButton: 'a[data-analytics-event="{"action":"PROFILE"}"] span[class="ActionListItem-label"]',
        addAccountButton: 'a[data-analytics-event="{"action":"Add account"}"] span[class="ActionListItem-label"]',
        yourRepositoriesButton: "//span[contains(text(),'Your repositories')]",
        signOutButton: 'a[class="ActionListContent"] span[class="ActionListItem-label"]'
    },
    naviagtionBar: {
        overviewTab: '#overview-tab',
        repositoriesTab: '#repositories-tab',
        projectsTab: '#projects-tab',
        packagesTab: '#packages-tab',
        starsTab: '#stars-tab'
    },
    mainPage: {
        signInButton: '.HeaderMenu-link--sign-in',
        homeLabel: "h2[data-target='feed-container.feedTitle']"
    },
    loginPage: {
        userNameInput: '#login_field',
        passwordInput: 'input#password',
        signInButton: '.js-sign-in-button',
        loginAllert: '.js-flash-alert'
    },
    newRepositoryPage: {
        repositoryNameInput: 'input[data-testid="repository-name-input"]',
        repositoryOwnerButton: 'button[aria-describedby="repo-owner-dropdown-error"]',
        repositoryOwnerSelection: 'li[role="menuitemradio"]',
        repositoryDescriptionInput: 'input[aria-label="Description"]',
        createRepositoryButton: "//span[contains(text(),'Create repository')]"
    },
    repositoriesPage: {
        newRepositoryButton: '.text-center.btn.btn-primary.ml-2'
    }
}