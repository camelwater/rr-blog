import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import time from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
// import { bundleMDX } from 'mdx-bundler';
// import rehypeSlug from 'rehype-slug';
// import rehypeCodeTitles from 'rehype-code-titles';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// import rehypePrism from 'rehype-prism-plus';

const blogsDir = path.join(process.cwd(), 'content');

/** 
 * Returns all of the blogs' necessary data to display on the blogs page.
*/
export const getAllBlogsData = () => {
    const files = fs.readdirSync(blogsDir)
    const blogs = files.map((fileName) => {
      const id = fileName.replace('.mdx', '')
  
      const fullPath = path.join(blogsDir, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
  
      const fileMatter = matter(fileContents)
      const readingTime = Math.floor(time(fileMatter.content).minutes) + 1
      const date = Date.parse(fileMatter.data.date);
      
      return {
        id,
        readingTime,
        date,
        ...fileMatter.data,
      }
    });
  
    return blogs.sort((a, b) => {
      return a.date - b.date;
      // if (a.date < b.date) {
      //   return 1
      // } else {
      //   return -1
      // }
    });
}

export const getBlog = async (slug: string) => {
    const fullPath = path.join(blogsDir, slug + '.mdx');
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    const fileMatter = matter(fileContent);
    const frontmatter = fileMatter.data;
    const rawContent = fileMatter.content
    // const { code, frontmatter } = await bundleMDX({
    //   source: fileContent, 
    //   xdmOptions(options) {
    //     options.rehypePlugins = [
    //       ...(options?.rehypePlugins ?? []),
    //       rehypeSlug,
    //       rehypeCodeTitles,
    //       rehypePrism,
    //       [
    //         rehypeAutolinkHeadings,
    //         {
    //           properties: {
    //             className: ['anchor']
    //           }
    //         }
    //       ]
    //     ];
    //     return options;
    //   }
    // });
    const code = await serialize(fileMatter.content);
    const readingTime = Math.floor(time(rawContent).minutes) + 1

    return {
        slug,
        readingTime,
        rawContent,
        code,
        ...frontmatter,
    };
}

export const getBlogIDs = () => {
  const fileNames = fs.readdirSync(blogsDir);
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, '')
      }
    }
  })
}
