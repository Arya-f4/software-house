import React, { useEffect, useState } from 'react';
import { firebaseConfig } from '../config/firebaseConfig';
import Navbar from '../components/navbar';
import Head from 'next/head';
const Blog = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [blogData, setBlogData] = useState(null);
  useEffect(() => {
    const fetchData = async (blogId) => {
      try {
        const response = await fetch('/api/getblog');
        const data = await response.json();
        setBlogData(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };


    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Arunika Niskala Software House</title>
        <meta
          name="description"
          content="Arunika Niskala Software House adalah software house dibawah naungan Himpunan Mahasiswa D4 Teknik Informatika"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1 className='text-6xl font-bold text-blue-600 text-center'>Blog Page</h1>
      {blogData && blogData.map((blog) => (
        <div key={blog.id} className="bg-gray-100 p-4 my-4 rounded-lg shadow-md ml-4 mr-4 dark:bg-gray-950 hover:bg-gray-50">
          <img src={`https://firebasestorage.googleapis.com/v0/b/software-house-bio.appspot.com/o/images%2F${blog.data.header_image.split('/').pop()}?alt=media`} alt={blog.data.name} className="hover:cursor-pointer w-1/4 h-auto rounded-md" />
          <h2 className="text-xl font-bold mt-2 hover:cursor-pointer">{blog.data.name}</h2>
          <p className="text-gray-600">Dipublikasikan pada {new Date(blog.data.publish_date.seconds * 1000).toLocaleDateString()}</p>
          <div className="mt-4">
            {blog.data.content.map((content, index) => (
              <div key={index}>
                {content.type === 'text' && <p className="mb-2">{content.value}</p>}
              </div>
            ))}
          </div>
          <div className="mt-2">
            Tags: {blog.data.tags.map((tag, index) => (
              <span key={index} className="hover:bg-gray-300 hover:cursor-pointer inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2">{tag}</span>
            ))}
          </div>
        </div>
      ))}




      {/* Display blogData in the component */}
    </>
  );
};

export default Blog;