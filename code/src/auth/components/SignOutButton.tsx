'use client';
import { signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from '../config';
import { useRouter } from 'next/navigation';
export const signOut = async (router: any) => {
  try {
    await firebaseSignOut(auth);
    router.push("/signin");
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

export default function SignOutButton() {
  const router = useRouter();
  return (
    <button onClick={() => signOut(router)} className="px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
      Sign Out
    </button>
  );
}
