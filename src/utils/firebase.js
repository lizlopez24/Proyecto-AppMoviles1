import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBi_jBSKMMl7hWFU_2OuUBEQNccCN9r3g4",
  authDomain: "choco-peca.firebaseapp.com",
  projectId: "choco-peca",
  storageBucket: "choco-peca.appspot.com",
  messagingSenderId: "986787186802",
  appId: "1:986787186802:web:6e76d42371074e5f4f1aeb"
};

export const initFirebase = initializeApp(firebaseConfig);