import fs from 'node:fs/promises';
import path from 'node:path'

export async function writeToFile(pathToFile, data) {
    try {
        await fs.writeFile(pathToFile, data, 'utf-8'); 
        console.log(`File written successfully to: ${path.resolve(pathToFile)}`)
    } catch (error) {
        console.error(`An error occurred while writing to file: ${error}`);
    }
}
