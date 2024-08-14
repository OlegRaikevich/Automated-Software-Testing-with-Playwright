const crypto = require('crypto')

export function getRandomNumber(): number {
    return Math.floor(Math.random() * 1000 + 1)
}

export function getRandomString(): string{
    return crypto.randomBytes(20).toString('hex')
}