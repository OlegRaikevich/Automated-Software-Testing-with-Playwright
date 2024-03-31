import { test, expect, request } from "@playwright/test"

test.describe.parallel('API testing', () => {
    const baseUrl = 'https://reqres.in/api'

    test('Simple Api test - assert response status', async ({ request }) => {
        const response = await request.get(`${baseUrl}/users/2`)
        expect(response.status()).toBe(200)
    })

    test('Simple Api tests - Assert Invalid Endpoint', async ({ request }) => {
        const response = await request.get(`${baseUrl}/users/not-exsisting-endpoint`)
        expect(response.status()).toBe(404)
    })
})