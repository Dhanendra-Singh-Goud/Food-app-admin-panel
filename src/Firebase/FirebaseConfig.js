import { initializeApp } from "firebase/app";
import  {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAWW2WXu8LbY2kjjblvh9-MJz2aE2ZEi7g",
  authDomain: "foodapp1-71112.firebaseapp.com",
  projectId: "foodapp1-71112",
  storageBucket: "foodapp1-71112.appspot.com",
  messagingSenderId: "309294138227",
  appId: "1:309294138227:web:386926db2e21891621bb06"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export {db, storage}