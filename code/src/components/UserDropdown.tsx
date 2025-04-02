import { useState, useEffect, useRef } from "react";
import { useAuth } from "../auth/AuthContext";
import SignOutButton from "@/auth/components/SignOutButton";

export default function UserDropdown() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative group" ref={dropdownRef}>
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
    </div>
  );
}
