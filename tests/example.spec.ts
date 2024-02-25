import { test, expect } from '@playwright/test'

import { loadHomepae, assertTitle } from '../helpers'

test.skip("Selectors", async ({ page }) => {
    //text
    await page.click('text=some text')

    // Css Selectors
    await page.click('button')
    await page.click('#id')
    await page.click('.class')

    //Only visible Css Selector
    await page.click('.submit-button:visible')

    // Combination
    await page.click('#username .first')

    //XPath
    await page.click('//button')
})

test.describe.parallel('Hooks', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://example.com/')
    })

    test('Screenshots', async ({ page }) => {
        await page.screenshot({ path: 'Screenshots/sceenshot.png', fullPage: true })
    })

    test('Single element screenshot', async ({ page }) => {
        const title = await page.$('h1')
        await title?.screenshot({ path: 'Screenshots/single_element_sceenshot.png' })
    })
})


test.only('Custom helpers', async ({ page }) => {
    await loadHomepae(page)
    await assertTitle(page)
})
