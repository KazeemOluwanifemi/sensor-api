import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export function getPath(filename) {
    const __dirname = path.dirname(fileURLToPath(import.meta.url))

    const projectRoot = path.resolve(__dirname, '..')

    const pathToResource = path.join(projectRoot, filename)

    return pathToResource
}