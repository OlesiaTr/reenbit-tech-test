// Utils
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCY-nys9XcG5ROz45FYBL7kM3wpzrA5Lus',
  authDomain: 'reenbit-tech-test.firebaseapp.com',
  projectId: 'reenbit-tech-test',
  storageBucket: 'reenbit-tech-test.appspot.com',
  messagingSenderId: '211106991369',
  appId: '1:211106991369:web:141c7bd9a429d9eab897d8',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
