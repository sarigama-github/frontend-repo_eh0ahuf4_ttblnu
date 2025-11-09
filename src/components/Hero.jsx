import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] overflow-hidden bg-white">
      {/* Background accent gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center container mx-auto px-6 py-12 lg:py-20">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-4">
            Modern E‑Commerce
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Shop the Future with
            <span className="text-purple-600"> Stellar Deals</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto lg:mx-0">
            Clean, fast, and premium shopping experience. Discover trending products, seamless checkout, and a delightful UI crafted for conversion.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a
              href="#trending"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold shadow-lg shadow-purple-500/30 hover:bg-purple-700 transition-colors"
            >
              Shop Now
            </a>
            <a
              href="#categories"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-gray-200 text-gray-800 bg-white hover:border-purple-300 hover:text-purple-700 transition-colors"
            >
              Explore Categories
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
            <div>
              <p className="text-2xl font-bold text-gray-900">50k+</p>
              <p className="text-xs text-gray-500">Happy Customers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">3D</p>
              <p className="text-xs text-gray-500">Interactive Hero</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">24/7</p>
              <p className="text-xs text-gray-500">Support</p>
            </div>
          </div>
        </motion.div>

        {/* 3D Spline Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[360px] md:h-[460px] lg:h-[560px] rounded-2xl overflow-hidden border border-gray-100 shadow-[0_20px_60px_-20px_rgba(108,99,255,0.3)]"
        >
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Subtle overlay edges */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/0 via-transparent to-white/0" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
