import { initializeApp } from "firebase/app";

const firebaseConfig= {
  apiKey: "AIzaSyDDywlQxN7jV8kilk78-mF55ivtYtCHC8w",
  authDomain: "proyecto-f52e2.firebaseapp.com",
  projectId: "proyecto-f52e2",
  storageBucket: "proyecto-f52e2.appspot.com",
  messagingSenderId: "901805536412",
  appId: "1:901805536412:web:abf6bf357c8f5e6ad56959"
};


export const initFirebase = initializeApp(firebaseConfig);