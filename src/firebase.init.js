import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCrvMiDmqVXjz-2k0CdguSudpv2VqT_4Xw",
  authDomain: "day1-d3ade.firebaseapp.com",
  projectId: "day1-d3ade",
  storageBucket: "day1-d3ade.firebasestorage.app",
  messagingSenderId: "770645807047",
  appId: "1:770645807047:web:d4baeb90a594bd809313e2",
  measurementId: "G-WTM6KTWTBM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(); 

export { auth, googleProvider }; 
