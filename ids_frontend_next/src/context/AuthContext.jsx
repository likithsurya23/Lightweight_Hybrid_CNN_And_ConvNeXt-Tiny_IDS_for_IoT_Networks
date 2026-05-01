"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

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
        // Load user from localStorage on mount
        const token = localStorage.getItem('hybrid_ids_access_token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                if (decoded.exp * 1000 > Date.now()) {
                    setUser({
                        username: decoded.username,
                        role: decoded.is_staff ? 'admin' : 'user',
                        name: decoded.is_staff ? 'Administrator' : 'Researcher'
                    });
                } else {
                    localStorage.removeItem('hybrid_ids_access_token');
                    localStorage.removeItem('hybrid_ids_refresh_token');
                }
            } catch (err) {
                console.error("Invalid token", err);
            }
        }
        setLoading(false);
    }, []);

    const login = async (username, password) => {
        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000';
            const res = await fetch(baseUrl + '/api/token/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.detail || "Invalid credentials");
            }

            const data = await res.json();
            localStorage.setItem('hybrid_ids_access_token', data.access);
            localStorage.setItem('hybrid_ids_refresh_token', data.refresh);

            const decoded = jwtDecode(data.access);
            setUser({
                username: decoded.username,
                role: decoded.is_staff ? 'admin' : 'user',
                name: decoded.is_staff ? 'Administrator' : 'Researcher'
            });

            if (decoded.is_staff) {
                router.push('/admin');
            } else {
                router.push('/dashboard');
            }
        } catch (err) {
            throw err;
        }
    };

    const register = async (name, email, password) => {
        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000';
            const res = await fetch(baseUrl + '/api/register/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });

            if (!res.ok) {
                const data = await res.json();
                // Extract first error message if available
                const errorMsg = data.email ? `Email: ${data.email[0]}` : 
                                 data.password ? `Password: ${data.password[0]}` : 
                                 data.detail || "Registration failed";
                throw new Error(errorMsg);
            }

            // Immediately login after successful registration
            await login(email, password);
        } catch (err) {
            throw err;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('hybrid_ids_access_token');
        localStorage.removeItem('hybrid_ids_refresh_token');
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
