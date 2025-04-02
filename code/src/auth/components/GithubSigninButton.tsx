"use client";
import Image from "next/image";
import { loginWithProvider } from "../service";
import { useRouter } from "next/navigation";

export default function GithubSignInButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => loginWithProvider("github", router)}
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
