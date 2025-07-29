
'use client';

import { useContext } from 'react';
import { User } from 'firebase/auth';
import { AuthContext } from '@/components/auth/auth-provider';

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  signUpWithEmail: (email: string, password: string) => Promise<boolean>;
  signInWithEmail: (email: string, password: string) => Promise<boolean>;
  signInWithGoogle: () => Promise<boolean>;
  signOut: () => Promise<boolean>;
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
