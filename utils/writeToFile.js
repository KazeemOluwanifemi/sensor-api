import fs from 'node:fs/promises'

export async function writeToFile(pathToFile, data) {
    try {
        await fs.writeFile(pathToFile, data, 'utf-8')
    } catch (error) {
        console.error(`An error occured while writing to file: ${error}`)
    }
}