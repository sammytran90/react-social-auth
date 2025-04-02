import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import SignOutButton from "@/auth/components/SignOutButton";

export default function UserDropdown() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  return (
    <li className="relative group">
      <button
        className="text-white hover:text-gray-400"
        onClick={() => setOpen(!open)}
      >
        {user?.displayName ?? "User"}
      </button>
      <ul
        className={`absolute ${
          open ? "block" : "hidden"
        } bg-gray-800 text-white mt-2 rounded-md shadow-lg`}
      >
        <li>
          <SignOutButton />
        </li>
      </ul>
    </li>
  );
}
