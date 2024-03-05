import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/solid';
import './header.css'; // Import your CSS file

const Header = ({ users, signOutUser }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-[80px] z-10 flex justify-between items-center px-4 bg-cod-gray-900  text-gray-300">
      <div className="left">
      <div className="logo text-5xl font-bold bg-gradient-to-r from-orange-200 to-indigo-100 text-transparent bg-clip-text">The Venue</div>

      </div>
      <div className="right flex items-center">
        <div className="top flex items-center">
        <div className="sm:hidden flex items-center">
                <MenuIcon
                  className="h-6 w-6 text-white cursor-pointer"
                  onClick={() => setMenuOpen(!isMenuOpen)}
                />
              </div>
          {users.auth ? (
            <>
              <div className="hidden sm:flex items-center space-x-4">
                <Link to="/" className="bg-gradient-to-r from-orange-200 to-indigo-100 text-transparent bg-clip-text text-2xl font-bold hover:no-underline ">
                  Home
                </Link>
                <Link to="/dashboard/user/user_cart" className="bg-gradient-to-r from-orange-200 to-indigo-100 text-transparent bg-clip-text text-2xl font-bold hover:no-underline">
                  My cart
                  <span className="ml-1 bg-vermilion-600 text-white text-2xl font-bold rounded-full p-1 hover:no-underline">
                    {users.cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0)}
                  </span>
                </Link>
                <Link to="/dashboard" className="bg-gradient-to-r from-orange-200 to-indigo-100 text-transparent bg-clip-text text-2xl font-bold hover:no-underline">
                  My account
                </Link>
                <span
                  onClick={() => signOutUser()}
                  className="text-white cursor-pointer text-2xl font-bold hover:no-underline"
                >
                  Log out
                </span>
              </div>
            </>
          ) : (
            <div className='hidden md:flex items-center space-x-4'>
              <Link to="/" onClick={() => setMenuOpen(!isMenuOpen)} className="bg-gradient-to-r from-orange-200 to-indigo-100 text-transparent bg-clip-text text-2xl font-bold hover:no-underline">
                Home
              </Link>
              <Link to="/sign_in" onClick={() => setMenuOpen(!isMenuOpen)} className="bg-gradient-to-r from-orange-200 to-indigo-100 text-transparent bg-clip-text text-2xl font-bold hover:no-underline">
                Log in
              </Link>
            </div>
            
          )}
        </div>
        {/* Additional links for the bottom */}
        <div className="bottom hidden md:flex items-center"></div>
      </div>

      {/* Responsive menu for phone view */}
      {isMenuOpen && (
        <div  className="md:hidden divide-y divide-white  bg-cod-gray-900  absolute top-16 left-0 right-0 z-10 transition duration-300 ease-in-out">
          {users.auth ? (<>
            <Link onClick={() => setMenuOpen(!isMenuOpen)} to="/" className="bg-gradient-to-r from-orange-200 to-indigo-100 text-transparent bg-clip-text  bg-cod-gray-700 text-2xl font-bold  block ml-0 p-2 hover:no-underline">
            Home
          </Link>
          <Link onClick={() => setMenuOpen(!isMenuOpen)} to="/dashboard/user/user_cart" className="bg-gradient-to-r from-orange-200 to-indigo-100 text-transparent bg-clip-text  bg-cod-gray-700 text-2xl font-bold block ml-0 p-2  hover:no-underline">
            My cart
            <span className="ml-1 bg-vermilion-600 text-white text-xl font-bold rounded-full p-1 hover:no-underline">
              {users.cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0)}
            </span>
          </Link>
          <Link onClick={() => setMenuOpen(!isMenuOpen)} to="/dashboard" className="bg-gradient-to-r from-orange-200 to-indigo-100 text-transparent bg-clip-text  bg-cod-gray-700 text-2xl font-bold block ml-0 p-2 hover:no-underline">
            My account
          </Link>
          <span onClick={() => signOutUser() } className="bg-gradient-to-r from-orange-200 to-indigo-100 text-transparent bg-clip-text  bg-cod-gray-700 text-2xl font-bold block ml-0 p-2 hover:no-underline">
            Log out
          </span>
          </>)
          :
          (
          <>
          <Link to="/" onClick={() => setMenuOpen(!isMenuOpen)} className="bg-gradient-to-r from-orange-200 to-indigo-100 text-transparent bg-clip-text text-2xl font-bold block hover:no-underline">
                Home
              </Link>
              <Link to="/sign_in" onClick={() => setMenuOpen(!isMenuOpen)} className="bg-gradient-to-r from-orange-200 to-indigo-100 text-transparent bg-clip-text text-2xl font-bold block hover:no-underline">
                Log in
              </Link>
          </>)}

        </div>
      )}
    </header>
  );
};

export default Header;
