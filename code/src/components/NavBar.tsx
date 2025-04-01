"use client";
import Link from "next/link";
import { useAuth } from "../auth/AuthContext";
import SignOutButton from "@/auth/components/SignOutButton";

export default function NavBar() {
  const { user } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="text-white text-lg font-bold">
        <Link href="/">
          MyApp
        </Link>
      </div>
      <ul className="flex space-x-4 mt-2">
        <li>
          <Link className="text-white hover:text-gray-400" href="/">
            Home
          </Link>
        </li>
        {user ? (
          <>
            <li>
              <Link className="text-white hover:text-gray-400" href="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:text-gray-400"
                href="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <SignOutButton />
            </li>
          </>
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
