"use client";
import Image from "next/image";
import { loginWithProvider } from "../service";
import { useRouter } from "next/navigation";

export default function GoogleSignInButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => loginWithProvider("google", router)}
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
