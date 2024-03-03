import { test, expect } from '@playwright/test'
import { FeedbackPage } from '../../page-objects/FeedbackPage'
import { HomePage } from '../../page-objects/HomePage'

test.describe.only("Feedback Form", () => {
    let feedbackPage: FeedbackPage
    let homePage: HomePage


    test.beforeEach(async ({ page }) => {
        feedbackPage = new FeedbackPage(page)
        homePage = new HomePage(page)

        await homePage.visit()
        await homePage.clickOnFeedbackLink()
    })

    test('Reset feedback form', async ({ page }) => {
        await feedbackPage.fillFeedbackForm('user', 'email@email.com', 'subject', 'some text')
        await feedbackPage.resetForm()
        await feedbackPage.assertResetForm()
    })

    test('Submit feedback form', async ({ page }) => {
        await feedbackPage.fillFeedbackForm('user', 'email@email.com', 'subject', 'some text')
        await feedbackPage.submitForm()
        await feedbackPage.assertFeedbackTitle()
    })

})