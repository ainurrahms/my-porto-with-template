import { GetStaticProps } from "next";
import Head from "next/head";
import React, { FC } from "react";
import {
  About,
  Blog,
  Contact,
  Header,
  Intro,
  Projects,
  Skills,
  Testimonials,
} from "../components";
import { PostType } from "../types/PostType";
import getPosts from "../utils/getPosts";

interface Props {
  Posts: [PostType];
}

const Home: FC<Props> = () => {
  return (
    <div>
      <Head>
        <meta name="keywords" content="" />
        <link rel="alternate" type="application/rss+xml" title="RSS" href="" />
        <link rel="icon" href="" />
      </Head>

      <div className="h-[10vh]">
        <Header />
      </div>

      <main className="relative pl-5 mb-10">
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Home;

// export const getStaticProps: GetStaticProps = async () => {
//   const Posts = await getPosts("avneesh0612");

//   return {
//     props: {
//       Posts: Posts.publication.posts,
//     },
//     revalidate: 600,
//   };
// };
