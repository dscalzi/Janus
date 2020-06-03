import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()

const SERVER_PORT = process.env.SERVER_PORT || '8080'
const BASE_PATH = process.env.BASE_PATH

app.get('*', (req, res) => {
    if (/\.\.\/?/.test(req.url)) {
        res.sendStatus(403)
    } else {
        res.download(`${BASE_PATH}${req.url}`)
    }
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const server = app.listen(SERVER_PORT, () => {
    console.log(`Janus started with base path ${BASE_PATH} on port ${SERVER_PORT}`)
})
