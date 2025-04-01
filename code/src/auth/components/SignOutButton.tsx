'use client';
import { signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from '../config';

export const signOut = async () => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

export default function SignOutButton() {
  return (
    <button onClick={signOut} className="px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
      Sign Out
    </button>
  );
}
