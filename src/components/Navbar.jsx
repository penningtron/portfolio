import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="w-full px-4">
        <div className="flex items-center h-16">
          <div className="flex gap-3 items-center">
            <Link to="/" className="text-lg font-bold text-indigo-600">
              Logo
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600">
              About
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-indigo-600">
              Projects
            </Link>
        </div>
        <div className="ml-auto hidden md:flex lg:ml-auto xl:ml-auto">
            <Link to="/contact" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Get in Touch
            </Link>
        </div>
          <div className="flex md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link to="/about" className="block text-gray-700 hover:bg-gray-100 rounded py-2 px-4">
              About
            </Link>
            <Link to="/projects" className="block text-gray-700 hover:bg-gray-100 rounded py-2 px-4">
              Projects
            </Link>
            <Link to="/contact" className="block bg-indigo-600 text-white rounded py-2 px-4 text-center hover:bg-indigo-700">
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
