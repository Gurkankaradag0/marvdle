'use client'

const getLocalStorage = (key) => {
    return localStorage.getItem(key)
}

const setLocalStorage = (key, value) => {
    if (!key) return false
    localStorage.setItem(key, JSON.stringify(value))
    return true
}

const removeLocalStorage = (key) => {
    if (!key) return false
    localStorage.removeItem(key)
    return true
}

export { getLocalStorage, setLocalStorage, removeLocalStorage }
