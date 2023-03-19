// Core
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
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
  const navigate = useNavigate();

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
      updateProfile(newUser.currentUser);
      navigate('/');
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
      navigate('/');
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
      navigate('/');
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
      navigate('/');
    } catch (error) {
      console.error(error.message);
    }
  };

  const signOutUser = () => {
    signOut(auth);
    navigate('/login');
  };

  const contextDetails = {
    user,
    loading,
    error,
    signUp,
    signIn,
    signInWithGoogle,
    signInWithGithub,
    signOutUser,
  };

  return (
    <UserContext.Provider value={contextDetails}>
      {children}
    </UserContext.Provider>
  );
};
