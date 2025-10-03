"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center space-y-6">
        <h1 className="text-6xl font-bold text-green-500">404</h1>
        <p className="text-xl text-gray-300">This page could not be found.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-all duration-300"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}