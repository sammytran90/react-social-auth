'use client';
import React from 'react';
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { useAuth } from "@/components/auth/AuthContext";
import Link from "next/link";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { signOut } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-black text-white">
        {/* Navigation Bar */}
        <nav className="border-b border-gray-800 p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              Your App
            </Link>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto p-4">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}