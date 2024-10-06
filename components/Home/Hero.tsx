"use client"

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='relative text-center hero-height' >
      <div className="absolute inset-0 z-0">
        <Image
          src="/side-close-up-view-spices-sauce-spices-onions-garlic-bottle-oil-tomatoes-lemon.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-white flex flex-col justify-center items-center h-full">
        <h2 className="text-5xl font-bold">Best food for your taste</h2>
        <p className="mt-4 text-xl max-w-lg">
          Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.
        </p>
        <div className="mt-8">
          <button className="px-6 py-3 bg-white text-black font-semibold mr-4 hover:bg-gray-200 transition duration-300">
            Book a Table
          </button>
          <button className="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition duration-300">
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
