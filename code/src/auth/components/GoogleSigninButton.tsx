"use client";
import Image from "next/image";
import { useLoginWithProvider } from "../service";

export default function GoogleSignInButton() {
  const loginWithProvider = useLoginWithProvider("google");

  return (
    <button
      onClick={loginWithProvider}
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
