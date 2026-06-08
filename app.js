import { sensorRouter } from './routes/routeHandler.js'

export async function app(req, res) {
    await sensorRouter(req, res)
}