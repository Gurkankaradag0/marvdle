import { NextResponse } from 'next/server'
import Negotiator from 'negotiator'
import { match } from '@formatjs/intl-localematcher'
import locales from './app/locales'

export const defaultLocale = 'en'

const getLocaleFromHeaders = (request) => {
    const headers = new Headers(request.headers)
    const acceptLanguage = headers.get('accept-language')
    if (acceptLanguage) {
        headers.set('accept-language', acceptLanguage.replaceAll('_', '-'))
    }

    const headersObject = Object.fromEntries(headers.entries())
    const languages = new Negotiator({ headers: headersObject }).languages()
    return match(languages, Object.keys(locales), defaultLocale)
}

const getLocaleFromCookie = (request) => {
    const cookiesStore = request.cookies
    return cookiesStore.get('lang')
}

const setLocaleToCookie = (request, response) => {
    const locale = getLocaleFromHeaders(request) ?? defaultLocale
    response.cookies.set('lang', locale, { expires: Date.now() + 1000 * 60 * 60 * 24 * 365 })
    return response
}

export const middleware = (request) => {
    const lang = getLocaleFromCookie(request)
    const response = NextResponse.next()
    if (!lang) {
        return setLocaleToCookie(request, response)
    }
    return response
}

export const config = {
    matcher: ['/((?!_next|api|favicon.ico).*)']
}
