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

  return (
    <div className="flex items-center justify-between mx-5">
      <div>
        <Image src="/Recipelogo1.jpg" alt="logo" width={74} height={29} />
      </div>
      <div className="relative">
        {NavList.map((list) => (
          <div
            key={list.id}
            className="inline-block relative"
            onMouseEnter={() => {
              if (list.title === 'Categories') setIsCategoriesOpen(true);
              if (list.title === 'Macronutrients') setIsMacronutrientsOpen(true);
            }}
            onMouseLeave={() => {
              if (list.title === 'Categories') setIsCategoriesOpen(false);
              if (list.title === 'Macronutrients') setIsMacronutrientsOpen(false);
            }}
          >
            <Link href={`/${list.route}`}>
              <button className="px-4 py-2">
                <p>{list.title}</p>
              </button>
            </Link>
            {(list.title === 'Categories' && isCategoriesOpen) ||
            (list.title === 'Macronutrients' && isMacronutrientsOpen) ? (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 1</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 2</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 3</li>
                </ul>
              </div>
            ) : null}
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
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
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
