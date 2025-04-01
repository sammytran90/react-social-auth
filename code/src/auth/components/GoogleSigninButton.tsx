"use client";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { auth } from "../config";

export const signInWithGoogle = async (router: any) => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    router.push("/authenticated-page");
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};
export default function GoogleSignInButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => signInWithGoogle(router)}
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
