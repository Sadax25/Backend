const dotenv = require('dotenv')

// if (process.env.NODE_ENV === 'production') {
//     dotenv.config({ path: '../.env.prod' })
// } else {
    // dotenv.config({ path: '../.env' })
// }

dotenv.config()

const port = process.env.PORT
const mongoUrl = process.env.MONGO_URL_LOCAL
const jwtPrivateKey = process.env.JWT_PRIVATE_KEY
const githubClientID = process.env.GITHUB_CLIENT_ID
const githubClientSecret = process.env.GITHUB_CLIENT_SECRET
const githubCallbackUrl = process.env.GITHUB_CALLBACK_URL
const adminName = process.env.ADMIN_NAME
const adminPassword = process.env.ADMIN_PASSWORD

module.exports = {
    port,
    mongoUrl,
    jwtPrivateKey,
    githubClientID,
    githubClientSecret,
    githubCallbackUrl,
    adminName,
    adminPassword
}