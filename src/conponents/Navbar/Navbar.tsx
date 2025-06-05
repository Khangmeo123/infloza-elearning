'use client';

import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const { user, logout } = useAuth();
    const pathname = usePathname();

    const navItems = [
        { href: '/', label: 'Trang chủ' },
        { href: '/introduce', label: 'Giới thiệu' },
        { href: '/courses', label: 'Khóa học' },
    ];

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <nav className="bg-white shadow-lg border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold text-primary-600">EduPlatform</span>
                        </Link>

                        <div className="hidden md:ml-10 md:flex md:space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`${isActive(item.href)
                                        ? 'border-primary-500 text-primary-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        {user ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-700">Xin chào, {user.name}</span>
                                <button
                                    onClick={logout}
                                    className="btn-secondary"
                                >
                                    Đăng xuất
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link href="/login" className="btn-secondary">
                                    Đăng nhập
                                </Link>
                                <Link href="/register" className="btn-primary">
                                    Đăng ký
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${isActive(item.href)
                                ? 'bg-primary-50 border-primary-500 text-primary-700'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}