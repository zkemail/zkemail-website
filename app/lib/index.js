import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings' 
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

const rootDirectory = path.join(process.cwd(), 'app', 'content');

/* For selected blog gets all the content for that blog post*/
export const getPostBySlug = async (slug) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  
  // try {
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

    const { frontmatter, content } = await compileMDX({
      source: fileContent,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          // problem with remarkGfm? 
          remarkPlugins: [remarkMath, remarkGfm],      
          // remarkPlugins: [ remarkMath],
          rehypePlugins: [
            rehypeHighlight, 
            rehypeSlug, 
            [rehypeAutolinkHeadings, { behavior: 'wrap' }], 
            rehypeKatex, 
            rehypePrettyCode
          ],
        }
      },
    });

    console.log('Content Parsed:', JSON.stringify(content, null, 2)); // Debugging output
    return { meta: { ...frontmatter, slug: realSlug }, content };

  // } catch (error) {
  //   console.error('Error reading or parsing MDX file:', error);
  //   // Handle the error based on your application's needs, possibly rethrowing or returning a default value
  //   return { meta: {}, content: 'Error loading content.' };
  // }
};





/* For blog page gets all the blog posts meta data */
export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    posts.push(meta);
  }

  return posts;
};
