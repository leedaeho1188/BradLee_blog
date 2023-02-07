import { POSTS_PATH } from "@/constants";
import { getPost } from "@/utils/getPost";
import path from "path";
import fs from 'fs';


function Blog({

}) {

  return (
    <>
    </>
  )
}

export default Blog;

export async function getStaticProps({ params }:any) {
  const { mdxSource, data, content } = await getPost(params.slug)
  return {
    props: {
      mdxSource,
      frontMatter: data,
      content
    }
  }
}



export function getStaticPaths() {
  const filePath = path.join(process.cwd(), POSTS_PATH);
  const postFilePaths = fs.readdirSync(filePath).filter((_path) => /\.mdx?$/.test(_path));
  const paths = postFilePaths
    .map((_path) =>  {
      return {params: { slug: _path.replace(/\.mdx?$/, '')}}
    })

  return {
    paths,
    fallback: false
  }
}