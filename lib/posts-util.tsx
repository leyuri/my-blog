import fs from "fs";
import matter from "gray-matter";
import path from "path";

// type Post = {
//   [key: string]: any;
//   title: string;
//   date: string;
//   image?: string;
//   excerpt?: string;
//   isFeatured: boolean;
// };

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(fileName: any) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8"); //  Additional loop execution stops until the data is parsed
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ""); // remove the file extension

  const postData: any = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map((postFile: any) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA: any, postB: any) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post: any) => post.isFeatured);
  return featuredPosts;
}
