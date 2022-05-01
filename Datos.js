// Import the functions you need from the SDKs you need
import "/index.css"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrT4PoK2yqvpy2yb80yjwTJK-jJNGPQZo",
  authDomain: "comunicaciondos-864b9.firebaseapp.com",
  projectId: "comunicaciondos-864b9",
  storageBucket: "comunicaciondos-864b9.appspot.com",
  messagingSenderId: "722659075039",
  appId: "1:722659075039:web:85f855fa0d7ae1070a5a6a",
  measurementId: "G-092SV5NK2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {
    getDatabase,
    get,
    ref,
    set,
    child,
    update,
    remove,
  } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";

  var Grados=document.getElementById("Grados").val();
  var BtnRecibe=document.getElementById("Recibe");
  const db=getDatabase();

  function UpdateData(){
    update(ref(db,"Grados/"),{
        Valor:Grados
    })
    .then(()=>{
        alert("Con exito")
    })
    .catch(()=>{
        alert("Sin exito")
    });
  }

  BtnRecibe.addEventListener("click",UpdateData);




