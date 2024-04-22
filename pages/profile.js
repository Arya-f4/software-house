import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';
import Container from '../components/container';
import { motion } from 'framer-motion'; // Menambahkan import motion dari framer-motion
import Image from 'next/image';
import { staffData } from '../data/staffData';
import ProfileCard from '../components/profilecard';
const Profile = () => {

  const [loading, setLoading] = useState(true); // Menambahkan state loading
  const [ToggleCard, setToggleCard] = useState(false);
  const handleCardClick = (index) => {
    setToggleCard(index);
  };


  return (
    <>
      <Head>
        <title>Staff - Software House</title>
        <meta
          name="description"
          content="Arunika Niskala Software House adalah software house dibawah naungan Himpunan Mahasiswa D4 Teknik Informatika"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container className="flex-wrap flex-auto pt-24">
        <h1 className='text-6xl my-4 font-bold text-blue-600 text-center'>Staff</h1>
        <motion.div className="grid grid-cols-3 gap-5">
          <motion.div whileHover={{ scale: 1.1 }} className="bg-gray-200 dark:bg-trueGray-800 p-4  hover:border-blue-600 hover:border-2 rounded-2xl shadow-md" onClick={() => handleCardClick(0)}>
            <Image src="/img/profile/andino.jpg" alt="Staff 1" width={100} height={100} className="rounded-tl-full overflow-hidden object-cover" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="bg-gray-200 dark:bg-trueGray-800 p-4   hover:border-blue-600 hover:border-2 rounded-2xl shadow-md" onClick={() => handleCardClick(1)}>
            <Image src="/img/profile/arya.jpg" alt="Staff 2" width={100} height={100} className="w-full h-auto rounded-t-full object-cover" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="bg-gray-200 dark:bg-trueGray-800 p-4  hover:border-blue-600 hover:border-2 rounded-2xl shadow-md" onClick={() => handleCardClick(2)}>
            <Image src="/img/profile/salom.jpg" alt="Staff 3" width={100} height={100} className="w-full h-auto rounded-tr-full object-cover h-100" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="bg-gray-200 dark:bg-trueGray-800 p-4  hover:border-blue-600 hover:border-2 rounded-2xl shadow-md" onClick={() => handleCardClick(3)}>
            <Image src="/img/profile/elia.jpg" alt="Staff 4" width={100} height={100} className="w-full h-auto rounded-full object-cover h-100" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="bg-gray-200 dark:bg-trueGray-800 p-4   hover:border-blue-600 hover:border-2 rounded-2xl shadow-md" onClick={() => handleCardClick(4)}>
            <Image src="/img/profile/fikri.jpg" alt="Staff 5" width={100} height={100} className="w-full h-auto rounded-full object-cover h-100" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="bg-gray-200 dark:bg-trueGray-800 p-4  hover:border-blue-600 hover:border-2 rounded-2xl shadow-md" onClick={() => handleCardClick(5)}>
            <Image src="/img/profile/rangga.jpg" alt="Staff 6" width={100} height={100} className="w-full h-auto rounded-full object-cover h-100" />
          </motion.div>
        </motion.div >
        {ToggleCard !== false && <ProfileCard staff={staffData[ToggleCard]} onClose={() => setToggleCard(false)} />}
      </Container >
      <Footer />
      {/* Display blogData in the component */}
    </>
  );
};

export default Profile;