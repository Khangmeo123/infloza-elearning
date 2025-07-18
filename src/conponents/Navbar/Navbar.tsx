'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
    name: string;
    href: string;
    paths: string[]; // Danh sách các path để check active
}

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const navItems: NavItem[] = [
        {
            name: 'Giới thiệu',
            href: '/gioi-thieu',
            paths: ['/gioi-thieu', '/about', '/ve-chung-toi']
        },
        {
            name: 'Khóa học',
            href: '/khoa-hoc',
            paths: ['/khoa-hoc', '/courses', '/course', '/learning']
        }
    ];

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Check if current path is active for a nav item
    const isActive = (navItem: NavItem) => {
        return navItem.paths.some(path => {
            // Exact match
            if (pathname === path) return true;
            // Check if current path starts with the nav path (for nested routes)
            if (pathname.startsWith(path + '/')) return true;
            return false;
        });
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
            : 'bg-white shadow-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-18">

                    {/* Logo */}
                    <div className="flex-shrink-0 z-50">
                        <Link href="/" className="group flex items-center" onClick={closeMenu}>
                            <div className="relative">
                                <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                                    Infloza-eLearning
                                </span>
                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="group relative px-4 py-2 mx-1"
                            >
                                <span className={`relative z-10 text-sm font-large transition-colors duration-200 ${isActive(item)
                                    ? 'text-blue-700'
                                    : 'text-gray-700 group-hover:text-blue-600'
                                    }`}>
                                    {item.name}
                                </span>

                                {/* Active indicator */}
                                {isActive(item) && (
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-full"></div>
                                )}

                                {/* Hover effect */}
                                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                            </Link>
                        ))}
                    </div>

                    {/* Auth Buttons - Desktop */}
                    <div className="hidden lg:flex items-center space-x-3">
                        <Link
                            href="/dang-nhap"
                            className="group relative px-6 py-2.5 bg-gradient-to-l from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                        >
                            <span className="relative z-10">Đăng nhập</span>
                        </Link>
                        <Link
                            href="/dang-ky"
                            className="group relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                        >
                            <span className="relative z-10">Đăng ký</span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="group relative p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                        >
                            {/* Animated hamburger */}
                            <div className="w-6 h-6 flex flex-col justify-around">
                                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                                    }`}></span>
                                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
                                    }`}></span>
                                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                                    }`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen
                ? 'max-h-screen opacity-100'
                : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                <div className="bg-white/95 backdrop-blur-md border-t border-gray-100">
                    <div className="px-4 py-6 space-y-4">

                        {/* Mobile Navigation Links */}
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`group flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${isActive(item)
                                    ? 'bg-blue-50 text-blue-600 shadow-sm'
                                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                    }`}
                                onClick={closeMenu}
                            >
                                <span className="text-base font-medium">{item.name}</span>
                                {isActive(item) && (
                                    <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                                )}
                            </Link>
                        ))}

                        {/* Mobile Auth Buttons */}
                        <div className="pt-4 border-t border-gray-100 space-y-3">

                            <Link
                                href="/dang-nhap"
                                className="block w-full text-center px-4 py-3 bg-gradient-to-l from-blue-600 to-purple-600 text-white text-base font-medium rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                                onClick={closeMenu}
                            >
                                Đăng nhập
                            </Link>
                            <Link
                                href="/dang-ky"
                                className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base font-medium rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                                onClick={closeMenu}
                            >
                                Đăng ký
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden -z-10"
                    onClick={closeMenu}
                ></div>
            )}
        </nav>
    );
};

export default Navbar;