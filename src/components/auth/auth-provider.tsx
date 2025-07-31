
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
  AuthError,
} from 'firebase/auth';
import { app, db } from '@/lib/firebase-config';
import { AuthContextType } from '@/hooks/use-auth';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const getFriendlyErrorMessage = (error: AuthError): string => {
    switch (error.code) {
        case 'auth/email-already-in-use':
            return 'Táto e-mailová adresa je už zaregistrovaná. Prosím, prihláste sa alebo použite inú adresu.';
        case 'auth/invalid-email':
            return 'Zadaná e-mailová adresa nie je platná.';
        case 'auth/weak-password':
            return 'Heslo je príliš slabé. Musí mať aspoň 6 znakov.';
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
            return 'Nesprávna e-mailová adresa alebo heslo. Skúste to znova.';
        case 'auth/popup-closed-by-user':
            return 'Proces prihlásenia bol zrušený.';
        case 'auth/cancelled-popup-request':
            return 'Bol otvorený ďalší proces prihlásenia. Dokončite ho prosím.';
        default:
            return 'Vyskytla sa neznáma chyba. Skúste to prosím neskôr.';
    }
}


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
      setError(getFriendlyErrorMessage(e));
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
      setError(getFriendlyErrorMessage(e));
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
        setError(getFriendlyErrorMessage(e));
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
      setError(getFriendlyErrorMessage(e));
      return false;
    } finally {
      setLoading(false);
    }
  };

  const value = { user, loading, error, signUpWithEmail, signInWithEmail, signInWithGoogle, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

    