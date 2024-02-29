/* eslint-disable react/jsx-key */
import Head from "next/head";
import Image from "next/image";
import PostCard from "./components/PostCard";
import PostWidget from "./components/PostWidget";
import Categories from "./components/Categories";

const posts = [
  { title: 'Test Post', excerpt: 'Test Excerpt'},
  { title: 'Test Post 2', excerpt: 'Test Excerpt 2'},
]

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-300">
      <Head>
        <title>Taimoor's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => <PostCard post={post} key={post.title} />)}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}