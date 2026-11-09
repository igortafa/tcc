import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { setMeetingsObj } from "./app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCLEGbZZUDU_Gc6-8GOkRe7Lw2hdQKgWeo",
  authDomain: "tcc-database-66e92.firebaseapp.com",
  projectId: "tcc-database-66e92",
  storageBucket: "tcc-database-66e92.firebasestorage.app",
  messagingSenderId: "581622320159",
  appId: "1:581622320159:web:97d7bc756c4c34e303992a",
  measurementId: "G-8MRDFMT3LV"
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
export const meetingsRef = ref(database, 'meetings');

export function updateMeetingsDatabase(meetingsData) {
  return set(meetingsRef, meetingsData);
}

onValue(meetingsRef, (snapshot) => {
  if (snapshot.exists()) {
    setMeetingsObj(snapshot.val());
  }
});
