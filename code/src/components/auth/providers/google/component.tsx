"use client";
import { signInWithGoogle } from "./google";
import Image from "next/image";
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
