'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GithubOutlined } from '@ant-design/icons'; // Re-import Ant Design icon

const navLinks = [
  { href: '/', label: '// Home' },
  { href: '/projects', label: '// Projects' },
  { href: '/about', label: '// About' }
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-black/50 backdrop-blur-sm border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left Aligned */}
          <div className="z-10">
            <Link
              href="/"
              className="text-3xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              Portfolio
            </Link>
          </div>

          {/* Navigation Links - Absolutely Centered */}
          <nav className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex space-x-10 font-mono">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xl font-bold tracking-wider transition-colors duration-300 ${
                    isActive ? 'text-cyan-300' : 'text-gray-500 hover:text-cyan-300'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Social Icons - Right Aligned */}
          <div className="z-10">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-500 hover:text-cyan-300 transition-colors duration-300"
            >
              <GithubOutlined />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
