
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzN_I63Sp0UVasFsN9M0FtXgpNQKxY3xU",
  authDomain: "react-dragon-news-auth-e412e.firebaseapp.com",
  projectId: "react-dragon-news-auth-e412e",
  storageBucket: "react-dragon-news-auth-e412e.appspot.com",
  messagingSenderId: "811137260879",
  appId: "1:811137260879:web:8c87f5f8b0412f0333b93a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;