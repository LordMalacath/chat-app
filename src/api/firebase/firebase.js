import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC__HmVoSjeUcD42d_cMTXhgesM2Gz-CaU",
  authDomain: "my-chatapp-project-5a375.firebaseapp.com",
  projectId: "my-chatapp-project-5a375",
  storageBucket: "my-chatapp-project-5a375.appspot.com",
  messagingSenderId: "31005120843",
  appId: "1:31005120843:web:404b5b59066d5c50eb70ce"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();
