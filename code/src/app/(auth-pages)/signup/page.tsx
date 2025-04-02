import Link from "next/link";
import Image from "next/image";

export default function SignUp() {
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

      <h1 className="text-2xl font-bold text-center mb-8">Sign up</h1>

      {/* Sign Up Container */}
      <div className="w-full max-w-md p-8 rounded-lg bg-[#1a1a1a]">
        {/* Sign Up Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Your first name"
                className="w-full px-2 py-2 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Your last name"
                className="w-full px-2 py-2 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

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
            className="w-full bg-white text-black py-2 rounded-md hover:bg-gray-200 transition-colors"
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

        {/* Sign In Link */}
        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-500 hover:text-blue-400">
            <u>Sign in</u>
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-xs text-gray-500">
        By creating an account, you agree to the{" "}
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
