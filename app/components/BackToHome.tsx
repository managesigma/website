'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BackToHome() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-cyan-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-cyan-50 hover:shadow-md hover:-translate-y-0.5 active:scale-95"
      >
        <ArrowLeft size={16} strokeWidth={2.5} />
        Back to Home
      </Link>
    </div>
  );
}
