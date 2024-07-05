

"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMacronutrientsOpen, setIsMacronutrientsOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  const NavList = [
    {
      id: 1,
      title: 'Categories',
      route: 'Categories',
    },
    {
      id: 2,
      title: 'Macronutrients',
      route: 'Macronutrients',
    },
    {
      id: 3,
      title: 'About',
      route: 'About',
    },
  ];

  const CategoriesDropdown = [
    {
      id: 1,
      title: 'Vegetables',
      route: '/categories/vegetables',
    },
    {
      id: 2,
      title: 'Fruits',
      route: '/categories/fruits',
    },
    {
      id: 3,
      title: 'Meats',
      route: '/categories/meats',
    },
  ];

  const MacronutrientsDropdown = [
    {
      id: 1,
      title: 'Proteins',
      route: '/macronutrients/proteins',
    },
    {
      id: 2,
      title: 'Carbohydrates',
      route: '/macronutrients/carbohydrates',
    },
    {
      id: 3,
      title: 'Fats',
      route: '/macronutrients/fats',
    },
  ];

  const handleMouseEnter = (title:string) => {
    if (title === 'Categories') setIsCategoriesOpen(true);
    if (title === 'Macronutrients') setIsMacronutrientsOpen(true);
    if (title === 'User') setIsUserOpen(true);
  };

  const handleMouseLeave = (title:string) => {
    if (title === 'Categories') setIsCategoriesOpen(false);
    if (title === 'Macronutrients') setIsMacronutrientsOpen(false);
    if (title === 'User') setIsUserOpen(false);
  };

  return (
    <div className="flex items-center justify-between mx-5 bg-blue-400">
      <div>
        <Image src="/Recipelogo1.jpg" alt="logo" width={74} height={29} />
      </div>
      <div className="relative flex space-x-4">
        {NavList.map((list) => (
          <div
            key={list.id}
            className="relative inline-block"
            onMouseEnter={() => handleMouseEnter(list.title)}
            onMouseLeave={() => handleMouseLeave(list.title)}
          >
            <Link href={`/${list.route}`}>
              <button className="px-4 py-2">
                <p>{list.title}</p>
              </button>
            </Link>
            {list.title === 'Categories' && isCategoriesOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                <ul>
                  {CategoriesDropdown.map((item) => (
                    <li key={item.id} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      <Link href={item.route}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {list.title === 'Macronutrients' && isMacronutrientsOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                <ul>
                  {MacronutrientsDropdown.map((item) => (
                    <li key={item.id} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                      <Link href={item.route}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      <div
        className="relative"
        onMouseEnter={() => setIsUserOpen(true)}
        onMouseLeave={() => setIsUserOpen(false)}
      >
        <p className="px-4 py-2 cursor-pointer">User</p>
        {isUserOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Profile</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Settings</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
