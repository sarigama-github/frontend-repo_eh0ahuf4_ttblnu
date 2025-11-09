import React from 'react';
import { Laptop, Shirt, Home, Sparkles } from 'lucide-react';

const categories = [
  { id: 1, name: 'Electronics', icon: Laptop, color: 'from-purple-500 to-indigo-500' },
  { id: 2, name: 'Fashion', icon: Shirt, color: 'from-pink-500 to-purple-500' },
  { id: 3, name: 'Home', icon: Home, color: 'from-blue-500 to-purple-500' },
  { id: 4, name: 'Beauty', icon: Sparkles, color: 'from-violet-500 to-fuchsia-500' },
];

const Categories = () => {
  return (
    <section id="categories" className="py-14 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Shop by Category</h2>
          <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">View all</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map(({ id, name, icon: Icon, color }) => (
            <a
              key={id}
              href="#"
              className="group relative rounded-2xl p-6 bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${color} opacity-20 blur-2xl`} />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="font-semibold text-gray-900">{name}</p>
                <p className="text-xs text-gray-500 mt-1">Explore the latest</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
