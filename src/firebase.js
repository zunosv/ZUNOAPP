
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
 apiKey:"AIzaSyAqXjnH6WrXuEQivE3RGwvav1qyFOOyoeY",
 authDomain:"zuno-1285e.firebaseapp.com",
 projectId:"zuno-1285e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
