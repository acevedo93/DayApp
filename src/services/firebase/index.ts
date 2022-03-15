// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCNh3h-5yMhPyRzYfnxJkfms5RpbboYzxo',
  authDomain: 'dayapp-41e5b.firebaseapp.com',
  projectId: 'dayapp-41e5b',
  storageBucket: 'dayapp-41e5b.appspot.com',
  messagingSenderId: '581406484901',
  appId: '1:581406484901:web:938c3d8ac66a5dbc14a04c',
  measurementId: 'G-L2J159CVL7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
