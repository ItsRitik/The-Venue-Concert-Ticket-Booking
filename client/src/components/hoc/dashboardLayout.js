import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/solid';

export const links = [
  {
    id: 1,
    name: 'Overiew',
    linkTo: '/dashboard',
  },
  {
    id: 2,
    name: 'User information',
    linkTo: '/dashboard/user/user_info',
  },
  {
    id: 3,
    name: 'My cart',
    linkTo: '/dashboard/user/user_cart',
  },
];

const DashboardLayout = (props) => {
  const users = useSelector((state) => state.users);
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const generateLinks = (links) =>
    links.map((item) => (
      <Link
        to={item.linkTo}
        key={item.id}
        className="block py-2 px-4 text-xl font-bold text-white hover:bg-gray-700 hover:no-underline"
      >
        {item.name}
      </Link>
    ));

  return (
    <div className="h-min bg-gradient-to-bl from-slate-300 to-amber-50 bg-transparent p-2 sm:p-5 mx-auto">
      <div className=" flex flex-col md:flex-row">
      <div className="bg-gray-800 sm:h-screen text-white md:w-1/4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl p-3 font-bold mb-1">My account</h2>
        <div
          onClick={toggleLinks}
          className="md:hidden text-white focus:outline-none"
        >
          <ChevronDownIcon
            className={`mr-2 h-8 w-8 transform ${showLinks ? 'rotate-180' : ''} transition-transform duration-500 ease-in-out`}
          />
        </div>
      </div>
      <div
        className={`links max-h-0 overflow-hidden ${showLinks ? 'max-h-screen' : ''} md:max-h-screen transition-max-height duration-300 ease-in-out`}
      >
        {generateLinks(links)}
      </div>
    </div>
        <div className="py-4  sm:px-5 md:w-3/4">
          <div className="dashboard_title mb-4">
            <h1 className="text-3xl font-bold">{props.title}</h1>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
