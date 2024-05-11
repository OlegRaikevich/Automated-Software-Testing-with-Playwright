import { test, expect, request } from "@playwright/test";
import Ajv from 'ajv';
import addFormats from 'ajv-formats'
import schema_single_user from './schemas/single-user.json'
import schema_create_user from './schemas/create-user.json'
import schema_login from './schemas/login.json'
import schema_register_success from './schemas/register-success.json'
import schema_register_fail from './schemas/register-failed.json'
import schema_update_user from './schemas/update-user.json'
// todo: reduce imports for json schemas


test.describe.parallel('API testing', () => {
    const baseUrl = 'https://reqres.in/api'
    const ajv = new Ajv()
    addFormats(ajv)

    test("GET Request - Get User Detail", async ({ request }) => {
        const response = await request.get(`${baseUrl}/users/1`)
        expect(response.status()).toBe(200)

        const body = JSON.parse(await response.body())
        const validate = ajv.compile(schema_single_user)
        const valid = validate(body)

        expect(valid).toBe(true)
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
        expect(response.status()).toBe(201)

        const body = JSON.parse(await response.body())
        const validate = ajv.compile(schema_create_user)
        const valid = validate(body)

        expect(valid).toBe(true)
    })

    test("POST Request - Login - Successful", async ({ request }) => {
        const response = await request.post(`${baseUrl}/login`, {
            data: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            },
        })
        expect(response.status()).toBe(200)

        const body = JSON.parse(await response.body())
        const validate = ajv.compile(schema_login)
        const valid = validate(body)

        expect(valid).toBe(true)
    })

    test("POST Request - Login - Unsuccessful - Wrong User", async ({ request }) => {
        const response = await request.post(`${baseUrl}/login`, {
            data: {
                email: 'mister.twister@reqres.in',
                password: 'pas',
            },
        })
        const body = JSON.parse(await response.body())
        expect(response.status()).toBe(400)
        expect(body.error).toBe("user not found")
    })

    test("POST Request - Login - Unsuccessful - Missing Password", async ({ request }) => {
        const response = await request.post(`${baseUrl}/login`, {
            data: {
                email: 'mister.twister@reqres.in'
            },
        })
        const body = JSON.parse(await response.body())
        expect(response.status()).toBe(400)
        expect(body.error).toBe("Missing password")
    })

    test("POST Request - Register - Successful", async ({ request }) => {
        const response = await request.post(`${baseUrl}/register`, {
            data: {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        })
        expect(response.status()).toBe(200)

        const body = JSON.parse(await response.body())
        const validate = ajv.compile(schema_register_success)
        const valid = validate(body)

        expect(valid).toBe(true)
    })

    test("POST Request - Register - Unsuccessful", async ({ request }) => {
        const response = await request.post(`${baseUrl}/register`, {
            data: {
                "email": "sydney@fife",
            }
        })
        expect(response.status()).toBe(400)

        const body = JSON.parse(await response.body())
        const validate = ajv.compile(schema_register_fail)
        const valid = validate(body)

        expect(valid).toBe(true)
    })

    test("PUT Request - Update User", async ({ request }) => {
        const response = await request.put(`${baseUrl}/users/2`, {
            data: {
                name: "new name",
                job: "new job",
            },
        })
        expect(response.status()).toBe(200)

        const body = JSON.parse(await response.body())
        const validate = ajv.compile(schema_update_user)
        const valid = validate(body)

        expect(valid).toBe(true)
    })

    test("DELETE Request - Delete User", async ({ request }) => {
        const response = await request.delete(`${baseUrl}/users/2`)
        expect(response.status()).toBe(204)
    })
})
