// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA-jb6DHG8VotCFKrFrioqZ9eDK6CcPz_Q',
  authDomain: 'competition-122b9.firebaseapp.com',
  projectId: 'competition-122b9',
  storageBucket: 'competition-122b9.appspot.com',
  messagingSenderId: '90062730646',
  appId: '1:90062730646:web:fe346eda8915239cbdd9b7',
  measurementId: 'G-FRKDW933LY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
