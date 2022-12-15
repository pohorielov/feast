export default () => ({
    secrets: {
        accessKey: process.env.ACCESS_SECRET_KEY,
        refreshKey: process.env.REFRESH_SECRET_KEY
    },
    urls: {
        clientUrl: process.env.CLIENT_URL
    }
})