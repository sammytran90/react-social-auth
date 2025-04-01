import Link from "next/link";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-black text-white">
      {/* Logo */}
      <div>
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="mx-auto"
        />
      </div>

      <h1 className="text-2xl font-bold text-center mb-8">Sign In</h1>


      {/* Sign In Container */}
      <div className="w-full max-w-md p-8 rounded-lg bg-[#1a1a1a]">

        {/* Email Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              className="w-full px-2 py-2 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-2 rounded-md hover:bg-gray-200 transition-colors p-5"
          >
            Continue
          </button>

          <div className="text-center text-sm text-gray-500">OR</div>
        </form>

        {/* Social Login Buttons */}
        <div className="space-y-4 mt-4">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-700 rounded-md hover:bg-gray-800 transition-colors">
            <Image
              src="/google-icon.png"
              alt="Google"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-700 rounded-md hover:bg-gray-800 transition-colors">
            <Image
              src="/github-icon.png"
              alt="GitHub"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            Continue with GitHub
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-sm">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:text-blue-400">
            Sign up
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-xs text-gray-500">
        <Link href="/terms" className="hover:text-gray-400">
          Terms of Service
        </Link>
        {" and "}
        <Link href="/privacy" className="hover:text-gray-400">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
