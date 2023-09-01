'use server'

import { cookies } from 'next/headers'

export const GET = async (key) => {
    return cookies().get(key).value
}

export const SET = async (key = undefined, value = undefined, expires = Date.now() + 1000 * 60 * 60 * 24 * 365) => {
    if (!key) return false
    try {
        cookies().set(key, value, { expires })
    } catch {
        return false
    }
    return true
}
