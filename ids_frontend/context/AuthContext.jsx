"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authService, getAccessToken, clearTokens } from '@/lib/api/api';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const loadUser = async () => {
            const token = getAccessToken();
            if (token) {
                try {
                    const userData = await authService.getUserMe();
                    setUser(userData);
                } catch (err) {
                    console.error("Session expired or invalid", err);
                    clearTokens();
                    setUser(null);
                }
            }
            setLoading(false);
        };
        loadUser();
    }, []);

    const login = async (username, password) => {
        try {
            await authService.login(username, password);
            const userData = await authService.getUserMe();
            setUser(userData);

            if (userData.role === 'admin') {
                router.push('/admin');
            } else {
                router.push('/dashboard');
            }
        } catch (err) {
            const errorMsg = err.response?.data?.detail || err.message || "Invalid credentials";
            throw new Error(errorMsg);
        }
    };

    const register = async (name, email, password) => {
        try {
            await authService.register(name, email, password);
            // Immediately login after successful registration
            await login(email, password);
        } catch (err) {
            const data = err.response?.data;
            const errorMsg = data?.email ? `Email: ${data.email[0]}` :
                data?.password ? `Password: ${data.password[0]}` :
                    data?.detail || err.message || "Registration failed";
            throw new Error(errorMsg);
        }
    };

    const logout = () => {
        setUser(null);
        authService.logout();
        router.push('/login');
    };

    const value = {
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin',
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
