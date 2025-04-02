"use client";
import { fetchSignInMethodsForEmail, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { auth } from "../config";

export const signInWithGithub = async (router: any) => {
  const provider = new GithubAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    router.push("/profile");
  } catch (error: any) {
    if (error.code === 'auth/account-exists-with-different-credential') {
      // Get the email from the error
      const email = error.customData?.email;
      if (email) {
        // Get sign-in methods for this email
        const methods = await fetchSignInMethodsForEmail(auth, email);
        if (methods[0]) {
          alert(`An account already exists with this email. Please sign in with ${methods[0]} first and then link your GitHub account.`);
        }
      }
    }
    console.error("Error signing in with GitHub:", error);
    throw error;
  }
};

export default function GithubSignInButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => signInWithGithub(router)}
      className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-700 rounded-md hover:bg-gray-800 transition-colors"
    >
      <Image
        src="/github-icon.png"
        alt="GitHub"
        width={20}
        height={20}
        className="w-5 h-5"
      />
      Continue with GitHub
    </button>
  );
}
