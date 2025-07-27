'use server';

import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export async function saveContactMessage(formData: ContactMessage): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, 'messages'), {
      ...formData,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding document: ', error);
    throw new Error('Could not save message.');
  }
}
