// Layout.jsx
import React from 'react';
import { useTheme } from './theme';

const Layout = ({ children }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gray-900 text-gray-100' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      {children}
    </div>
  );
};

export default Layout;