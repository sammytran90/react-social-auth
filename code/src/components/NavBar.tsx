"use client";
import Link from "next/link";
import { useAuth } from "../auth/AuthContext";
import SignOutButton from "@/auth/components/SignOutButton";

export default function NavBar() {
  const { user } = useAuth();

  return (
    <nav className="flex  bg-gray-800 p-4">
      <div className="text-white text-lg font-bold">
        <Link href="/">MyApp</Link>
      </div>
      <ul className="inline-flex space-x-4 mt-2 ml-auto">
        <li>
          <Link className="text-white hover:text-gray-400" href="/">
            Home
          </Link>
        </li>

        {user && (
          <li>
            <Link className="text-white hover:text-gray-400" href="/profile">
              Profile
            </Link>
          </li>
        )}

        {user ? (
          <li className="relative group">
            <button className="text-white hover:text-gray-400">
              {user.displayName || "User"}
            </button>
            <ul className="absolute hidden group-hover:block bg-gray-800 text-white mt-2 rounded-md shadow-lg">
              <li>
                <SignOutButton />
              </li>
            </ul>
          </li>
        ) : (
          <>
            <li>
              <Link className="text-white hover:text-gray-400" href="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-gray-400" href="/signup">
                Signup
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
