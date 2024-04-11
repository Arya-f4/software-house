import React from 'react';
import Navbar from '../components/navbar';
import Head from 'next/head';

const DetailedBlog = () => {
  return (
    <>
      <Head>
        <title>Detail Blog Post</title>
        <meta
          name="description"
          content="Detail blog post page with specific content"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Detailed Blog Post</h1>
        <div className="bg-gray-100 p-4 my-4 rounded-lg shadow-md">
          <img src="https://via.placeholder.com/150" alt="Blog Image" className="w-full h-auto rounded-md mb-4" />
          <h2 className="text-2xl font-bold mb-2">Blog Title</h2>
          <p className="text-gray-600 mb-2">Published on January 1, 2022</p>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac libero ultricies ultricies. Donec auctor, nunc nec ultricies ultricies, justo odio ultricies libero, nec ultricies libero libero nec libero. Sed nec libero nec libero ultricies ultricies.</p>
          <div className="flex flex-wrap">
            <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2">Tag1</span>
            <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2">Tag2</span>
            <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2">Tag3</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailedBlog;
