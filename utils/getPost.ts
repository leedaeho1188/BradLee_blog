import path from "path";
import fs from 'fs'
import { POSTS_PATH } from "@/constants";


export const getPost = (slug: string) => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter()

  return {}
}