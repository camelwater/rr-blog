import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import time from 'reading-time';

const blogsDir = path.join(process.cwd(), 'content', 'blogs');

/** 
 * Returns all of the blogs' necessary data to display on the blogs page.
*/
export const getAllBlogsData = () => {
    const files = fs.readdirSync(blogsDir)
    const blogs = files.map((fileName) => {
      const title = fileName.replace('.md', '')
  
      const fullPath = path.join(blogsDir, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
  
      const fileMatter = matter(fileContents)
      const readingTime = Math.floor(time(fileMatter.content).minutes) + 1
      const date = Date.parse(fileMatter.data.date);
      
      return {
        title,
        readingTime,
        date,
        ...fileMatter.data,
      }
    })
  
    return blogs.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
}

export const getBlog = (title: string) => {
    const fullPath = path.join(blogsDir, title + '.md');
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    const fileMatter = matter(fileContent);
    const content = fileMatter.content;
    const readingTime = Math.floor(time(content).minutes) + 1

    return {
        title,
        readingTime,
        content,
        ...fileMatter.data,
    }
}