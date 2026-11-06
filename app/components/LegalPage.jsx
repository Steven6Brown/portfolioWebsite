import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

// Shared shell for the Privacy Policy and Accessibility Statement pages.
export default function LegalPage({ title, updated, children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-h-black to-[#222222]">
      <header className="w-full sticky z-10">
        <Navbar />
      </header>
      <main id="main-content" tabIndex={-1} className="container flex-1 py-12">
        <article className="mx-auto max-w-3xl text-gray-300 text-base leading-relaxed space-y-4">
          <h1 className="text-white text-3xl font-bold">{title}</h1>
          <p className="text-gray-400 text-sm">Last updated: {updated}</p>
          {children}
        </article>
      </main>
      <Footer />
    </div>
  );
}
