"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Lock, User, LogIn, ArrowRight } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      if (!isLogin) {
        await register(name, email, password);
      } else {
        await login(username || (isAdminMode ? 'admin' : 'user'), password);
      }
    } catch (err) {
      setError(err.message || 'Authentication failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[500px] bg-gradient-to-r from-blue-500/20 to-violet-500/20 blur-[100px] rounded-full pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl relative z-10"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mx-auto h-16 w-16 bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg mb-6"
          >
            <Shield className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {isAdminMode 
              ? 'Sign in to access the Administrator Control Panel.'
              : 'Sign in to access real-time network predictions.'}
          </p>
        </div>

        {/* Role Toggle */}
        <div className="flex p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <button
            type="button"
            onClick={() => setIsAdminMode(false)}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${!isAdminMode ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
          >
            Researcher
          </button>
          <button
            type="button"
            onClick={() => setIsAdminMode(true)}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${isAdminMode ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
          >
            Administrator
          </button>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 p-4 rounded-md">
              <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
            </div>
          )}
          <div className="space-y-4">
            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      required={!isLogin}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10 w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all dark:text-white outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      required={!isLogin}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all dark:text-white outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </>
            )}

            {isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    required={isLogin}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all dark:text-white outline-none"
                    placeholder={isAdminMode ? 'admin' : 'user'}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all dark:text-white outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          {isLogin && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">Forgot your password?</a>
              </div>
            </div>
          )}

          <motion.button
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
            type="submit"
            disabled={isLoading}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LogIn className="h-5 w-5 text-blue-300 group-hover:text-blue-200 transition-colors" />
            </span>
            {isLoading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
            {!isLoading && <ArrowRight className="ml-2 h-5 w-5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300" />}
          </motion.button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 transition-colors"
            >
              {isLogin ? 'Sign up now' : 'Sign in instead'}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
