import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCNh3h-5yMhPyRzYfnxJkfms5RpbboYzxo',
  authDomain: 'dayapp-41e5b.firebaseapp.com',
  projectId: 'dayapp-41e5b',
  storageBucket: 'dayapp-41e5b.appspot.com',
  messagingSenderId: '581406484901',
  appId: '1:581406484901:web:938c3d8ac66a5dbc14a04c',
  measurementId: 'G-L2J159CVL7',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
