import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <h1 className="text-6xl font-bold text-amber-700">404</h1>
      <p className="mt-4 text-2xl text-gray-800">Oops! Page not found.</p>

      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-800 transition"
      >
        Go back home
      </Link>
    </div>
  );
}
