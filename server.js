import http from 'node:http'

import { app } from './app.js'

const PORT = 8000

// const app
const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})

server.on('err', (error) => {
    console.log(error)
})