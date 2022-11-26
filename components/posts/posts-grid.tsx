import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

function PostsGrid(props: any) {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post: any) => (
        <PostItem />
      ))}
    </ul>
  );
}

export default PostsGrid;
