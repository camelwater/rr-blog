import * as fs from 'fs';
import * as path from 'path';

const imagesDir = path.join(process.cwd(), 'public', 'assets', 'images');

export function getAllBlogImages () {
    let files = fs.readdirSync(imagesDir, 'utf-8');
    files = files.filter((file) => {
        return fs.statSync(path.join(imagesDir, file)).isFile();
    })
    
    return files;
}