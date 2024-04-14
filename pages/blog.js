import React, { useEffect, useState } from 'react';
import { firebaseConfig } from '../config/firebaseConfig';
import Navbar from '../components/navbar';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';
import Container from '../components/container';
const Blog = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true); // Menambahkan state loading

  useEffect(() => {
    const fetchData = async (blogId) => {
      try {
        const response = await fetch('/api/getblog');
        const data = await response.json();
        setBlogData(data);
        setLoading(false); // Mengubah loading menjadi false setelah data berhasil diambil
        console.log(data)
      } catch (error) {
        console.error('Error fetching blog data:', error);
        setLoading(false); // Mengubah loading menjadi false jika terjadi error
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
      <Container className="flex flex-wrap ">
        <h1 className='text-6xl font-bold text-blue-600 text-center'>Blog Page</h1>
        {loading ? ( // Menampilkan "loading content" saat loading
          <p>Loading content...</p>
        ) : (
          blogData && blogData.map((blog) => (
            <div key={blog.id} className="bg-gray-100 p-4 my-4 rounded-lg shadow-md ml-4 mr-4 dark:bg-trueGray-800 hover:bg-gray-50">
              <div className="flex items-start">
                <Link href={`/blog/${blog.id}`} className="flex items-start">
                  <img src={`https://firebasestorage.googleapis.com/v0/b/software-house-bio.appspot.com/o/images%2F${blog.data.header_image.split('/').pop()}?alt=media`} alt={blog.data.name} className="hover:cursor-pointer w-1/4 h-auto rounded-md" />
                  <div className="flex flex-col items-start ml-4">
                    <Link href={`/blog/${blog.id}`}>
                      <h2 className="text-xl font-bold mt-2 hover:cursor-pointer">{blog.data.name}</h2>
                    </Link>
                    <p className="text-gray-600">Dipublikasikan pada {new Date(blog.data.publish_date.seconds * 1000).toLocaleDateString()}</p>

                    <div className="mt-2">
                      Tags: {blog.data.tags.map((tag, index) => (
                        <span key={index} className="hover:bg-gray-300 hover:cursor-pointer inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))
        )}
      </Container>
      <Footer />
      {/* Display blogData in the component */}
    </>
  );
};

export default Blog;