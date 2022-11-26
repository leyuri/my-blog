import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import FeaturedPosts from "../components/home/featured-posts";
import Hero from "../components/home/hero";
import styles from "../styles/Home.module.css";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs1",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date: "2022-11-26",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date: "2022-11-26",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date: "2022-11-26",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date: "2022-11-26",
  },
];

const Home: NextPage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
};

export default Home;
