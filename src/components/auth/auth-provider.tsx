
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
  updateProfile,
  updatePassword,
  sendPasswordResetEmail,
  AuthError,
} from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app, isFirebaseConfigured } from '@/lib/firebase-config';
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
        case 'auth/operation-not-allowed':
             return 'Tento spôsob prihlásenia nie je povolený. Kontaktujte podporu.';
        case 'auth/requires-recent-login':
             return 'Táto operácia vyžaduje nedávne prihlásenie. Pre pokračovanie sa prosím odhláste a znova prihláste.';
        default:
            return `Vyskytla sa neznáma chyba. (${error.code})`;
    }
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!isFirebaseConfigured()) {
      setLoading(false);
      return;
    }
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUpWithEmail = async (email: string, password: string): Promise<boolean> => {
    if (!isFirebaseConfigured()) {
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
    if (!isFirebaseConfigured()) {
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
    if (!isFirebaseConfigured()) {
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
    if (!isFirebaseConfigured()) {
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

  const updateUserInfo = async ({ displayName, photoFile }: { displayName?: string; photoFile?: File }): Promise<boolean> => {
    const auth = getAuth(app);
    if (!auth.currentUser) {
        setError("Používateľ nie je prihlásený.");
        return false;
    }
    setError(null);
    try {
        let photoURL = auth.currentUser.photoURL;
        if (photoFile) {
            const storage = getStorage(app);
            const storageRef = ref(storage, `avatars/${auth.currentUser.uid}/${photoFile.name}`);
            const snapshot = await uploadBytes(storageRef, photoFile);
            photoURL = await getDownloadURL(snapshot.ref);
        }

        await updateProfile(auth.currentUser, {
            displayName: displayName ?? auth.currentUser.displayName,
            photoURL: photoURL
        });

        // Manually update the user state to reflect changes immediately
        setUser(auth.currentUser);

        return true;
    } catch (e: any) {
        setError(getFriendlyErrorMessage(e));
        return false;
    }
  };

  const updateUserPassword = async (newPassword: string): Promise<boolean> => {
    const auth = getAuth(app);
    if (!auth.currentUser) {
        setError("Používateľ nie je prihlásený.");
        return false;
    }
    setError(null);
    try {
        await updatePassword(auth.currentUser, newPassword);
        return true;
    } catch (e: any) {
        setError(getFriendlyErrorMessage(e));
        return false;
    }
  };
  
  const resetPassword = async (email: string): Promise<boolean> => {
     if (!isFirebaseConfigured()) {
        setError("Firebase nie je nakonfigurovaný.");
        return false;
    }
    setLoading(true);
    setError(null);
    try {
        const auth = getAuth(app);
        await sendPasswordResetEmail(auth, email);
        return true;
    } catch(e: any) {
        setError(getFriendlyErrorMessage(e));
        return false;
    } finally {
        setLoading(false);
    }
  }


  const value = { user, loading, error, signUpWithEmail, signInWithEmail, signInWithGoogle, signOut, updateUserInfo, updateUserPassword, resetPassword };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
