import path from "path";
import fs from 'fs';
import matter from "gray-matter";
import { serialize } from 'next-mdx-remote/serialize';

import { POSTS_PATH } from "@/constants";


export const getPost = async(slug: string) => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    }
  });

  return { mdxSource, data, content };
}