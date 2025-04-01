import React from 'react';

export default function AuthenticatedPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="border-b border-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Authenticated Page</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Welcome to the Authenticated Page</h2>
          <p className="text-gray-400">
            This is a protected area of the application. Only authenticated users can access this page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">User Information</h2>
          <div className="bg-gray-800 p-4 rounded-md">
            <p className="text-gray-400">Name: John Doe</p>
            <p className="text-gray-400">Email: john.doe@example.com</p>
          </div>
        </section>
      </main>
    </div>
  );
}
