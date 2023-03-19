// Core
import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from 'services/firebaseConfig';

export const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    const AuthState = onAuthStateChanged(auth, res => {
      res ? setUser(res) : setUser(null);
      setError('');
      setLoading(false);
    });

    return AuthState;
  }, []);

  const signUp = async (email, password) => {
    try {
      setLoading(true);
      setError('');
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLoading(false);
      return updateProfile(newUser.currentUser);
    } catch (error) {
      console.error(error.message);
    }
  };

  const signIn = async (email, password) => {
    try {
      setLoading(true);
      setError('');
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  const signInWithGoogle = async (email, password) => {
    try {
      setLoading(true);
      setError('');
      await signInWithPopup(auth, new GoogleAuthProvider());
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  const signInWithGithub = async (email, password) => {
    try {
      setLoading(true);
      setError('');
      await signInWithPopup(auth, new GithubAuthProvider());
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  const signOutUser = () => signOut(auth);

  const restorePswrd = email => sendPasswordResetEmail(auth, email);

  const contextDetails = {
    user,
    loading,
    error,
    signUp,
    signIn,
    signInWithGoogle,
    signInWithGithub,
    signOutUser,
    restorePswrd,
  };

  return (
    <UserContext.Provider value={contextDetails}>
      {children}
    </UserContext.Provider>
  );
};
