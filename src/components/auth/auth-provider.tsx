
'use client';

import React, { createContext, useEffect, useState, ReactNode } from 'react';
import {
  getAuth,
  onAuthStateChanged,
  User,
  signOut as firebaseSignOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { app, db } from '@/lib/firebase-config'; // Use db to check if firebase is configured
import { AuthContextType } from '@/hooks/use-auth';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const isFirebaseConfigured = !!db;

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setLoading(false);
      return;
    }
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [isFirebaseConfigured]);

  const signUpWithEmail = async (email: string, password: string): Promise<boolean> => {
    if (!isFirebaseConfigured) {
        setError("Firebase nie je nakonfigurovaný.");
        return false;
    }
    setLoading(true);
    setError(null);
    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);
      return true;
    } catch (e: any) {
      setError(e.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const signInWithEmail = async (email: string, password: string): Promise<boolean> => {
    if (!isFirebaseConfigured) {
        setError("Firebase nie je nakonfigurovaný.");
        return false;
    }
    setLoading(true);
    setError(null);
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (e: any) {
      setError(e.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async (): Promise<boolean> => {
    if (!isFirebaseConfigured) {
        setError("Firebase nie je nakonfigurovaný.");
        return false;
    }
    setLoading(true);
    setError(null);
    try {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        return true;
    } catch(e: any) {
        setError(e.message);
        return false;
    } finally {
        setLoading(false);
    }
  };

  const signOut = async (): Promise<boolean> => {
    if (!isFirebaseConfigured) {
        setError("Firebase nie je nakonfigurovaný.");
        return false;
    }
    setLoading(true);
    setError(null);
    try {
      const auth = getAuth(app);
      await firebaseSignOut(auth);
      return true;
    } catch (e: any) {
      setError(e.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const value = { user, loading, error, signUpWithEmail, signInWithEmail, signInWithGoogle, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
