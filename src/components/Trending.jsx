import React from 'react';
import { Star } from 'lucide-react';

const products = [
  { id: 1, name: 'Aurora Headphones', price: 129.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdXJvcmElMjBIZWFkcGhvbmVzfGVufDB8MHx8fDE3NjI3MjUzNjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 2, name: 'Nebula Smartwatch', price: 199.00, rating: 4.6, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Quantum Speaker', price: 89.50, rating: 4.7, image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Photon Camera', price: 549.00, rating: 4.9, image: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdXJvcmElMjBIZWFkcGhvbmVzfGVufDB8MHx8fDE3NjI3MjUzNjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
];

const Trending = () => {
  return (
    <section id="trending" className="py-16 bg-gradient-to-b from-white to-purple-50/40">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Trending Now</h2>
          <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">See more</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.id} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-white/80 backdrop-blur px-2 py-1 rounded-full text-xs font-medium text-purple-700">Hot</div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 line-clamp-1">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-lg font-bold text-gray-900">${p.price.toFixed(2)}</p>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium text-gray-600">{p.rating}</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-xl bg-purple-600 text-white py-2 font-medium shadow-md shadow-purple-500/30 hover:bg-purple-700 transition-colors">Add to Cart</button>
                  <button className="flex-1 rounded-xl border border-gray-200 py-2 font-medium hover:border-purple-300 hover:text-purple-700 transition-colors">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
