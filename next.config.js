/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    reactStrictMode: false,
    images: {
        domains: ['cdn.marvel.com', 'comicvine.gamespot.com']
    }
}

module.exports = nextConfig
