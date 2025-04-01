'use client';
import React from 'react';
import { ProtectedRoute } from "@/auth/components/ProtectedRoute";
import Link from "next/link";
import SignOutButton from '@/auth/components/SignOutButton';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-black text-white">
        {/* Navigation Bar */}
        <nav className="border-b border-gray-800 p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              Your App
            </Link>
            <SignOutButton />
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