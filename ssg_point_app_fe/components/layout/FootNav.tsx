import React from 'react';
import Link from 'next/link';

function BottomNavBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-sm font-medium">
              Contact
            </Link>
          </li>
        </ul>
        <button className="text-sm font-medium">
          Profile
        </button>
      </nav>
    </div>
  );
}

export default BottomNavBar;
