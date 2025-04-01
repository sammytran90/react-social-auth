"use client";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { auth } from "../../config";

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};
export default function GoogleSignInButton() {
  return (
    <button
      onClick={signInWithGoogle}
      className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-700 rounded-md hover:bg-gray-800 transition-colors"
    >
      <Image
        src="/google-icon.png"
        alt="Google"
        width={20}
        height={20}
        className="w-5 h-5"
      />
      Continue with Google
    </button>
  );
}
