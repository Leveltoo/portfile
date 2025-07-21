'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  GithubOutlined,
  CodeSandboxOutlined,
  HomeOutlined,
  AppstoreOutlined,
  UserOutlined,
  MailOutlined
} from '@ant-design/icons';

const navLinks = [
  { href: '/', label: '首页', icon: <HomeOutlined /> },
  { href: '/projects', label: '项目', icon: <AppstoreOutlined /> },
  { href: '/about', label: '关于', icon: <UserOutlined /> },
  { href: '/contact', label: '联系', icon: <MailOutlined /> }
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="backdrop-blur-sm border-b border-gray-500/20 sticky top-0 z-50">
      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Area with Ant Design Icon */}
          <div className="z-10">
            <Link
              href="/"
              className="flex items-center gap-3 text-2xl font-bold text-gray-100 hover:text-cyan-300 transition-colors duration-300"
            >
              <CodeSandboxOutlined className="text-3xl text-cyan-400" />
              <span className="font-mono">GemChen</span>
            </Link>
          </div>

          {/* Navigation Links with Capsule Indicator */}
          <nav className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center p-1 bg-gray-900/50 rounded-full border border-gray-700">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${
                    isActive ? 'nav-capsule-active text-cyan-300' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Social Icon with Ant Design Icon */}
          <div className="z-10">
            <a
              href="https://github.com/Leveltoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:text-white transition-colors duration-300"
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
