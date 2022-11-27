import PostContent from "../../components/posts/post-detail/post-context";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

const PostDetail = (props: any) => {
  return <PostContent post={props.post} />;
};

export function getStaticProps(context: any) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  console.log("slugs", slugs);

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetail;
