'use client'

const getLocalStorage = (key) => {
    if (typeof window === 'undefined') return undefined
    const val = localStorage.getItem(key)
    if (val) {
        return JSON.parse(val)
    }
    return undefined
}

const setLocalStorage = (key, value) => {
    if (typeof window === 'undefined') return undefined
    if (!key) return false
    localStorage.setItem(key, JSON.stringify(value))
    return true
}

const removeLocalStorage = (key) => {
    if (typeof window === 'undefined') return undefined
    if (!key) return false
    localStorage.removeItem(key)
    return true
}

export { getLocalStorage, setLocalStorage, removeLocalStorage }
