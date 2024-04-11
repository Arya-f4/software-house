// Impor fungsi yang diperlukan dari SDK yang diperlukan
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Konfigurasi Firebase aplikasi web Anda
const firebaseConfig = {
  apiKey: "AIzaSyDCRuYVCVmDZwL2el6SbjgdPdYMU3Tsn4A",
  authDomain: "software-house-bio.firebaseapp.com",
  projectId: "software-house-bio",
  storageBucket: "software-house-bio.appspot.com",
  messagingSenderId: "368710429918",
  appId: "1:368710429918:web:1686be8ec321cdf8c0664f",
  measurementId: "G-B4PX5WSHL1"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Fungsi untuk mendapatkan data dari dokumen Firestore bernama 'blog_post' berdasarkan ID tertentu atau semua data jika tidak ada ID
const getDataBlogPost = async (blogId) => {
  const querySnapshot = await getDocs(collection(db, "blog_post"));
  const data = [];

  if (blogId) {
    querySnapshot.forEach((doc) => {
      if (doc.id === blogId) {
        data.push({
          id: doc.id,
          data: doc.data()
        });
      }
    });
  } else {
    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        data: doc.data()
      });
    });
  }

  return data;
};
export default async function handler(req, res) {
  const { id } = req.query; // Mengambil ID dari query parameter URL

  const blogData = await getDataBlogPost(id);
  res.status(200).json(blogData);
}
