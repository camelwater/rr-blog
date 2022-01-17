import * as fs from 'fs';
import * as path from 'path';

const imagesDir = path.join(process.cwd(), 'public', 'assets', 'images');

export function getAllBlogImages () {
    const files = fs.readdirSync(imagesDir);
    
    return files;
}