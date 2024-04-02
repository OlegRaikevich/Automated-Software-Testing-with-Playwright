import { test, expect, request } from "@playwright/test"

test.describe.parallel('API testing', () => {
    const baseUrl = 'https://reqres.in/api'

    test("GET Request - Get User Detail", async ({ request }) => {
        const response = await request.get(`${baseUrl}/users/1`)
        const responseBody = JSON.parse(await response.text())

        expect(response.status()).toBe(200)
        expect(responseBody.data.id).toBe(1)
        expect(responseBody.data.first_name).toBeTruthy
        expect(responseBody.data.last_name).toBeTruthy
        expect(responseBody.data.email).toBeTruthy
        expect(responseBody.data.avatar).toHaveURL
    })

    test('GET Request - Assert Invalid Endpoint', async ({ request }) => {
        const response = await request.get(`${baseUrl}/users/not-exsisting-endpoint`)
        expect(response.status()).toBe(404)
    })

    test("POST Request - Create New User", async ({ request }) => {
        const response = await request.post(`${baseUrl}/users`, {
            data: {
                id: 100,
                name: "Dennis",
                job: "Scientist",
            },
        })
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(201)
        expect(responseBody.id).toBe(100)
        expect(responseBody.name).toBe("Dennis")
        expect(responseBody.job).toBe("Scientist")
        expect(responseBody.createdAt).toBeTruthy()
    })

    test("POST Request - Login - Successful", async ({ request }) => {
        const response = await request.post(`${baseUrl}/login`, {
            data: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            },
        })
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(200)
        expect(responseBody.token).toBeTruthy()
    })

    test("POST Request - Login - Unsuccessful - Wrong User", async ({ request }) => {
        const response = await request.post(`${baseUrl}/login`, {
            data: {
                email: 'mister.twister@reqres.in',
                password: 'pas',
            },
        })
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(400)
        expect(responseBody.error).toBe("user not found")
    })

    test("POST Request - Login - Unsuccessful - Missing Password", async ({ request }) => {
        const response = await request.post(`${baseUrl}/login`, {
            data: {
                email: 'mister.twister@reqres.in'
            },
        })
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(400)
        expect(responseBody.error).toBe("Missing password")
    })

    test("POST Request - Register - Successful", async ({ request }) => {
        const response = await request.post(`${baseUrl}/register`, {
            data: {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        })
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(200)
        expect(responseBody.id).toBeTruthy()
        expect(responseBody.token).toBeTruthy()
    })

    test("POST Request - Register - Unsuccessful", async ({ request }) => {
        const response = await request.post(`${baseUrl}/register`, {
            data: {
                "email": "sydney@fife",
            }
        })
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(400)
        expect(responseBody.error).toBe("Missing password")
    })

    test("PUT Request - Update User", async ({ request }) => {
        const response = await request.put(`${baseUrl}/users/2`, {
            data: {
                name: "new name",
                job: "new job",
            },
        })
        const responseBody = JSON.parse(await response.text())
        expect(response.status()).toBe(200)
        expect(responseBody.name).toBe('new name')
        expect(responseBody.job).toBe('new job')
        expect(responseBody.updatedAt).toBeTruthy()
    })

    test("DELETE Request - Delete User", async ({ request }) => {
        const response = await request.delete(`${baseUrl}/users/2`)
        expect(response.status()).toBe(204)
    })
})
