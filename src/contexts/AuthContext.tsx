'use client';

import { User } from '@/types';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';


interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    register: (name: string, email: string, password: string) => Promise<boolean>;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Kiểm tra user đã đăng nhập từ localStorage
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setIsLoading(false);
    }, []);

    const login = async (email: string, password: string): Promise<boolean> => {
        setIsLoading(true);

        // Giả lập API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Kiểm tra thông tin đăng nhập giả lập
        if (email === 'test@example.com' && password === 'password') {
            const userData: User = {
                id: '1',
                email,
                name: 'Test User'
            };
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            setIsLoading(false);
            return true;
        }

        setIsLoading(false);
        return false;
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const register = async (name: string, email: string, password: string): Promise<boolean> => {
        setIsLoading(true);

        // Giả lập API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        const userData: User = {
            id: Date.now().toString(),
            email,
            name
        };

        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        setIsLoading(false);
        return true;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}