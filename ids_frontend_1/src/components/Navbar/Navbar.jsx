import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Shield, 
  Menu, 
  X, 
  Home,
  BarChart3,
  Target,
  Database,
  PieChart,
  Cpu,
  Brain,
  ChevronRight,
  Zap,
  Activity,
  Moon,
  Sun
} from 'lucide-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Dashboard', path: '/dashboard', icon: Activity },
    { name: 'Single Prediction', path: '/predict', icon: Target },
    { name: 'Batch Prediction', path: '/batch', icon: Database },
    { name: 'Analytics', path: '/analytics', icon: PieChart },
    { name: 'Model Info', path: '/model-info', icon: Brain },
    { name: 'About', path: '/about', icon: BarChart3 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // You can add theme switching logic here
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg border-b border-gray-200/50 dark:border-gray-700/50' 
          : 'bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                  <div className="relative p-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                    Hybrid IDS
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    CNN & ConvNeXt-Tiny
                  </span>
                </div>
              </Link>
            </div>

            {/* Right side - Desktop Controls */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group relative"
                aria-label="Toggle theme"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity" />
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>

              {/* Desktop Hamburger Menu Button */}
              <div className="relative">
                <button
                  onClick={() => setIsOpen(true)}
                  className="inline-flex items-center justify-center p-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group relative"
                  aria-label="Open menu"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity" />
                  <Menu className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* Theme Toggle for Mobile */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative group"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity" />
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {isOpen && (
          <div className="lg:hidden">
            <div 
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40" 
              onClick={() => setIsOpen(false)} 
            />
            <div className="fixed right-0 top-0 bottom-0 w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-out">
              <div className="flex flex-col h-full">
                {/* Mobile header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">Hybrid IDS</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">CNN & ConvNeXt-Tiny</div>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    </button>
                  </div>
                  
                  {/* Quick stats */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                      <div className="text-sm font-bold text-blue-600 dark:text-blue-400">97.97%</div>
                      <div className="text-xs text-blue-500 dark:text-blue-400">Accuracy</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20">
                      <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">45ms</div>
                      <div className="text-xs text-emerald-500 dark:text-emerald-400">Speed</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-violet-50 dark:bg-violet-900/20">
                      <div className="text-sm font-bold text-violet-600 dark:text-violet-400">14</div>
                      <div className="text-xs text-violet-500 dark:text-violet-400">Attacks</div>
                    </div>
                  </div>
                </div>

                {/* Mobile navigation items */}
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-2">
                    {navItems.map((item, index) => {
                      const Icon = item.icon;
                      const active = isActive(item.path);
                      
                      return (
                        <React.Fragment key={item.name}>
                          <Link
                            to={item.path}
                            className={`flex items-center justify-between p-4 rounded-xl transition-all duration-200 group ${
                              active
                                ? 'bg-gradient-to-r from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/20 border border-blue-200 dark:border-blue-800'
                                : 'hover:bg-gray-50 dark:hover:bg-gray-800 border border-transparent'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 rounded-lg ${
                                active
                                  ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white'
                                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                              }`}>
                                <Icon className="h-4 w-4" />
                              </div>
                              <span className={`font-medium ${
                                active 
                                  ? 'text-blue-700 dark:text-blue-300' 
                                  : 'text-gray-700 dark:text-gray-300'
                              }`}>
                                {item.name}
                              </span>
                            </div>
                            {active && (
                              <div className="p-1 rounded-full bg-gradient-to-r from-blue-500 to-violet-500">
                                <ChevronRight className="h-3 w-3 text-white" />
                              </div>
                            )}
                          </Link>
                          
                          {/* Add separator dash between items except the last one */}
                          {index < navItems.length - 1 && (
                            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>

                {/* System Status Section for Mobile */}
                <div className="mt-6 p-4">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    System Status
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-gray-50">
                      <div className="text-sm font-medium text-gray-700">Model Loaded</div>
                      <div className="text-xs text-green-600 mt-1">✓ Active</div>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-50">
                      <div className="text-sm font-medium text-gray-700">API Status</div>
                      <div className="text-xs text-green-600 mt-1">✓ Online</div>
                    </div>
                  </div>
                </div>
             
        
                {/* Mobile footer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-800">
                  <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    Hybrid CNN & ConvNeXt-Tiny Intrusion Detection System
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Slide-in Menu */}
        {isOpen && (
          <div className="hidden lg:block">
            <div 
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40" 
              onClick={() => setIsOpen(false)} 
            />
            <div className="fixed right-0 top-0 bottom-0 w-96 bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-out">
              <div className="flex flex-col h-full">
                {/* Desktop menu header */}
                <div className="p-8 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600">
                        <Shield className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-xl text-gray-900 dark:text-white">Hybrid IDS</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Advanced Navigation Menu</div>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                    </button>
                  </div>
                  
                  {/* Quick stats - Enhanced */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800">
                      <div className="text-xl font-bold text-blue-600 dark:text-blue-400">97.97%</div>
                      <div className="text-sm text-blue-500 dark:text-blue-400">Accuracy</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 border border-emerald-200 dark:border-emerald-800">
                      <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">45ms</div>
                      <div className="text-sm text-emerald-500 dark:text-emerald-400">Speed</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-800/20 border border-violet-200 dark:border-violet-800">
                      <div className="text-xl font-bold text-violet-600 dark:text-violet-400">14</div>
                      <div className="text-sm text-violet-500 dark:text-violet-400">Attacks</div>
                    </div>
                  </div>
                </div>

                {/* Desktop menu navigation items */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                      Navigation Menu
                    </div>
                    {navItems.map((item, index) => {
                      const Icon = item.icon;
                      const active = isActive(item.path);
                      
                      return (
                        <React.Fragment key={item.name}>
                          <Link
                            to={item.path}
                            className={`flex items-center justify-between p-5 rounded-2xl transition-all duration-200 group ${
                              active
                                ? 'bg-gradient-to-r from-blue-50 to-violet-50 dark:from-blue-900/30 dark:to-violet-900/30 border-2 border-blue-200 dark:border-blue-800'
                                : 'hover:bg-gray-50 dark:hover:bg-gray-800 border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-700'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="flex items-center space-x-4">
                              <div className={`p-3 rounded-xl ${
                                active
                                  ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg'
                                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:bg-gradient-to-r group-hover:from-blue-500/10 group-hover:to-violet-500/10'
                              }`}>
                                <Icon className="h-5 w-5" />
                              </div>
                              <div className="flex flex-col">
                                <span className={`font-semibold ${
                                  active 
                                    ? 'text-blue-700 dark:text-blue-300' 
                                    : 'text-gray-700 dark:text-gray-300'
                                }`}>
                                  {item.name}
                                </span>
                                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                  {item.path === '/' ? 'Home page' : `Navigate to ${item.name}`}
                                </span>
                              </div>
                            </div>
                            {active ? (
                              <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 shadow-lg">
                                <ChevronRight className="h-4 w-4 text-white" />
                              </div>
                            ) : (
                              <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
                            )}
                          </Link>
                        </React.Fragment>
                      );
                    })}
                  </div>

                  {/* Additional menu section */}
                  <div className="mt-10">
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                      System Status
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Model Loaded</div>
                        <div className="text-xs text-green-600 dark:text-green-400 mt-1">✓ Active</div>
                      </div>
                      <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-300">API Status</div>
                        <div className="text-xs text-green-600 dark:text-green-400 mt-1">✓ Online</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop menu footer */}
                <div className="p-8 border-t border-gray-200 dark:border-gray-800">
                  <div className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
                    Hybrid CNN & ConvNeXt-Tiny Intrusion Detection System v2.0
                  </div>
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-center space-x-2 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {isDarkMode ? (
                      <>
                        <Sun className="h-5 w-5 text-yellow-500" />
                        <span className="text-gray-700 dark:text-gray-300">Switch to Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                        <span className="text-gray-700 dark:text-gray-300">Switch to Dark Mode</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16 lg:h-20" />
    </>
  );
};

export default Navbar;