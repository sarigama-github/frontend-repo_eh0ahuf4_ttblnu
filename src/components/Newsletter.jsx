import React from 'react';

const Newsletter = () => {
  return (
    <section className="relative py-16">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-purple-200/40 bg-gradient-to-br from-white to-purple-50 p-8 md:p-12">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-purple-400/20 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Get exclusive offers in your inbox</h3>
            <p className="mt-2 text-gray-600">Subscribe for updates on new arrivals, flash sales, and curated picks.</p>

            <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-gray-200 bg-white/90 px-4 py-3 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
              />
              <button type="submit" className="rounded-xl bg-purple-600 text-white px-6 py-3 font-semibold shadow-lg shadow-purple-500/30 hover:bg-purple-700 transition-colors">
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-xs text-gray-500">By subscribing, you agree to receive marketing emails. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
