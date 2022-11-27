import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import FeaturedPosts from "../components/home/featured-posts";
import Hero from "../components/home/hero";
import styles from "../styles/Home.module.css";
import { getFeaturedPosts } from "../lib/posts-util";

const Home: NextPage = (props: any) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate: 60,
  };
}
export default Home;
