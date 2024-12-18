import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcv2xcIKVHStgTGrfbNwUGYEHkQvm_mtA",
    authDomain: "focus-shape-411819.firebaseapp.com",
    projectId: "focus-shape-411819",
    storageBucket: "focus-shape-411819.firebasestorage.app",
    messagingSenderId: "98708397214",
    appId: "1:98708397214:web:3638402be1efa98184ef8f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);