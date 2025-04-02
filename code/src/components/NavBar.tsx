"use client";
import Link from "next/link";
import { useAuth } from "../auth/AuthContext";
import UserDropdown from "./UserDropdown";

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

        {user ? (
          <li>
            <Link className="text-white hover:text-gray-400" href="/profile">
              Profile
            </Link>
          </li>
        ) : (
          <li>
            <Link className="text-white hover:text-gray-400" href="/signin">
              Sign In
            </Link>
          </li>
        )}

        {user && <UserDropdown />}
      </ul>
    </nav>
  );
}
