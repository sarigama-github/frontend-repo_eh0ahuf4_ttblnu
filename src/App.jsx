import React from 'react';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Trending from './components/Trending';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-100">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 text-white font-bold shadow-md shadow-purple-500/30">M</span>
            <span className="text-lg font-extrabold tracking-tight">MorphoMart</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-purple-700">Home</a>
            <a href="#categories" className="hover:text-purple-700">Categories</a>
            <a href="#trending" className="hover:text-purple-700">Trending</a>
            <a href="#newsletter" className="hover:text-purple-700">Newsletter</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold hover:border-purple-300 hover:text-purple-700">Sign in</button>
            <button className="inline-flex rounded-xl bg-purple-600 text-white px-4 py-2 text-sm font-semibold shadow-md shadow-purple-500/30 hover:bg-purple-700">Create account</button>
          </div>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Categories />
        <Trending />
        <Newsletter />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 text-white font-bold">M</span>
              <span className="text-lg font-extrabold">MorphoMart</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">A clean, futuristic shopping experience crafted with care.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-purple-700">About</a></li>
              <li><a href="#" className="hover:text-purple-700">Careers</a></li>
              <li><a href="#" className="hover:text-purple-700">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Help</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-purple-700">Support</a></li>
              <li><a href="#" className="hover:text-purple-700">Shipping</a></li>
              <li><a href="#" className="hover:text-purple-700">Returns</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} MorphoMart. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
