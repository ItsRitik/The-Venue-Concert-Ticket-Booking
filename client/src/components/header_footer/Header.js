import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/solid';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './header.css'; // Import your CSS file

const Header = ({ users, signOutUser }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-[80px] z-10 flex justify-between items-center px-4 bg-cod-gray-900  text-gray-300">
      <div className="left">
      <div className="logo text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-200 to-indigo-100 text-transparent bg-clip-text">The Venue</div>

      </div>
      <div className="right flex items-center">
        <div className="top flex items-center">
        <div className="sm:hidden flex items-center">
                {users.auth && <Link to="/dashboard/user/user_cart" className="bg-gradient-to-r mx-4 from-orange-200 to-indigo-100 text-transparent bg-clip-text text-2xl font-bold hover:no-underline">
                  <Badge badgeContent={users.cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0)} color="error">
                    <ShoppingCartIcon  sx={{ color: '#cffafe', fontSize: 30 }} />
                  </Badge>
                </Link>}
                <MenuIcon
                  className="h-6 w-6 text-white cursor-pointer"
                  onClick={() => setMenuOpen(!isMenuOpen)}
                />
              </div>
          {users.auth ? (
            <>
              <div className="hidden sm:flex items-center space-x-4">
              <Link to="/" className="text-2xl font-bold hover:no-underline hover:text-3xl bg-black hover:text-slate-100 transition-all duration-300 ease-in-out bg-gradient-to-r from-orange-200 to-indigo-100 bg-clip-text text-transparent">
                Home
              </Link>
                <Link to="/dashboard" className="hover:text-3xl hover:text-slate-100 transition-all duration-300 ease-in-out bg-gradient-to-r from-orange-200 to-indigo-100 text-transparent bg-clip-text text-2xl font-bold hover:no-underline">
                  My account
                </Link>
                <Link to="/dashboard/user/user_cart" className="bg-gradient-to-r from-orange-200 to-indigo-100 text-transparent bg-clip-text text-2xl font-bold hover:no-underline">
                  <Badge badgeContent={users.cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0)} color="error">
                    <ShoppingCartIcon  sx={{ color: '#cffafe', fontSize: 35 }} />
                  </Badge>
                </Link>
                <span
                  onClick={() => signOutUser()}
                  className="text-red-600 hover:text-red-700 hover:text-3xl cursor-pointer transition-all duration-300 ease-in-out text-2xl font-bold hover:no-underline"
                >
                  Log out
                </span>
              </div>
            </>
          ) : (
            <div className='hidden md:flex items-center space-x-4'>
              <Link to="/" onClick={() => setMenuOpen(!isMenuOpen)} className="hover:text-3xl hover:text-slate-100 transition-all duration-300 ease-in-out bg-gradient-to-r from-orange-200 to-indigo-100 text-transparent bg-clip-text text-2xl font-bold hover:no-underline">
                Home
              </Link>
              <Link to="/sign_in" onClick={() => setMenuOpen(!isMenuOpen)} className="hover:text-3xl hover:text-slate-100 transition-all duration-300 ease-in-out bg-gradient-to-r from-orange-200 to-indigo-100 text-transparent bg-clip-text text-2xl font-bold hover:no-underline">
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
          <Link onClick={() => setMenuOpen(!isMenuOpen)} to="/dashboard" className="bg-gradient-to-r from-orange-200 to-indigo-100 text-transparent bg-clip-text  bg-cod-gray-700 text-2xl font-bold block ml-0 p-2 hover:no-underline">
            My account
          </Link>
          <span onClick={() => {signOutUser() ; setMenuOpen(!isMenuOpen);}} className="text-red-600 hover:text-red-700 hover:text-3xl cursor-pointer transition-all duration-300 ease-in-out bg-cod-gray-700 text-2xl font-bold block ml-0 p-2 hover:no-underline">
            Log out
          </span>
          </>)
          :
          (
          <>
          <Link to="/" onClick={() => setMenuOpen(!isMenuOpen)} className="bg-gradient-to-r from-orange-200 to-indigo-100 text-transparent bg-clip-text  bg-cod-gray-700 text-2xl font-bold block ml-0 p-2 hover:no-underline">
                Home
              </Link>
              <Link to="/sign_in" onClick={() => setMenuOpen(!isMenuOpen)} className="bg-gradient-to-r from-orange-200 to-indigo-100 text-transparent bg-clip-text  bg-cod-gray-700 text-2xl font-bold block ml-0 p-2 hover:no-underline">
                Log in
              </Link>
          </>)}

        </div>
      )}
    </header>
  );
};

export default Header;
