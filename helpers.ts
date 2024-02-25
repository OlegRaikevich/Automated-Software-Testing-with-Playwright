export async function loadHomepae(page) {
    await page.goto('https://www.example.com')
}

export async function assertTitle(page) {
    await page.waitForSelector('h1')
}

export async function login(page) {
    await page.goto('http://zero.webappsecurity.com')
    await page.click('#signin_button')
    await page.type('#user_login', 'username')
    await page.type('#user_password', 'password')
    await page.click('text=Sign in')

    await page.goBack()
}