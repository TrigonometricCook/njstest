import Link from 'next/link';
//import { UserCircleIcon } from '@heroicons/react/24/solid'; // Import the icon

export default function Navbar() {
  return (
    <nav className="bg-[#2D2D2D] text-[#E0E0E0] shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold hover:text-[#1E90FF]">Relief Compass</Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/" className="text-gray-300 hover:bg-[#1E90FF] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/news" className="text-gray-300 hover:bg-[#1E90FF] hover:text-white px-3 py-2 rounded-md text-sm font-medium">News</Link>
                <Link href="/camps" className="text-gray-300 hover:bg-[#1E90FF] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Camps</Link>
                <Link href="/volunteer" className="text-gray-300 hover:bg-[#1E90FF] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Volunteer</Link>
                <Link href="/guide" className="text-gray-300 hover:bg-[#1E90FF] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Guide</Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center space-x-4">
            <select
              value="en"
              onChange={() => {}}
              className="bg-[#2D2D2D] text-[#E0E0E0] px-3 py-2 rounded-md text-sm font-medium"
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
            </select>
            <Link href="/profile/signup" className="text-gray-300 hover:bg-[#1E90FF] hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
              
              Profile
            </Link>
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="text-gray-300 hover:bg-[#1E90FF] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link href="/news" className="text-gray-300 hover:bg-[#1E90FF] hover:text-white block px-3 py-2 rounded-md text-base font-medium">News</Link>
          <Link href="/camps" className="text-gray-300 hover:bg-[#1E90FF] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Camps</Link>
          <Link href="/volunteer" className="text-gray-300 hover:bg-[#1E90FF] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Volunteer</Link>
          <Link href="/guide" className="text-gray-300 hover:bg-[#1E90FF] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Guide</Link>
          <Link href="/profile" className="text-gray-300 hover:bg-[#1E90FF] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Profile</Link>
        </div>
      </div>
    </nav>
  );
}
