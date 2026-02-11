import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Zap,
  Brain,
  BarChart3,
  Target,
  Activity,
  Database,
  Network,
  Cpu,
  Layers,
  Sparkles,
  ChevronRight,
  Play,
  GitBranch,
  Award,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Landing() {
  const features = [
    {
      icon: Brain,
      title: "Hybrid AI Architecture",
      description: "Combines CNN for spatial patterns and ConvNeXt-Tiny for hierarchical feature extraction",
      color: "from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400",
      bgColor: "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20",
      gradient: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    {
      icon: Target,
      title: "97.97% Accuracy",
      description: "State-of-the-art performance with 12.23% improvement over CNN-GRU baseline",
      color: "from-emerald-500 to-green-500 dark:from-emerald-400 dark:to-green-400",
      bgColor: "bg-gradient-to-r from-emerald-500/10 to-green-500/10 dark:from-emerald-500/20 dark:to-green-500/20",
      gradient: "bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20"
    },
    {
      icon: Zap,
      title: "45ms Real-time Detection",
      description: "Ultra-fast inference enables immediate threat response and network monitoring",
      color: "from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400",
      bgColor: "bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20",
      gradient: "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20"
    },
    {
      icon: Cpu,
      title: "0.0373M Parameters",
      description: "Lightweight design with 3.7× fewer parameters than BiLSTM for edge deployment",
      color: "from-violet-500 to-purple-500 dark:from-violet-400 dark:to-purple-400",
      bgColor: "bg-gradient-to-r from-violet-500/10 to-purple-500/10 dark:from-violet-500/20 dark:to-purple-500/20",
      gradient: "bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20"
    },
  ];

  const stats = [
    { value: "97.97%", label: "Detection Accuracy", icon: ShieldCheck, color: "text-emerald-600 dark:text-emerald-400", bgColor: "bg-emerald-500/10 dark:bg-emerald-500/20" },
    { value: "14+", label: "Attack Types", icon: Network, color: "text-blue-600 dark:text-blue-400", bgColor: "bg-blue-500/10 dark:bg-blue-500/20" },
    { value: "45ms", label: "Response Time", icon: Activity, color: "text-amber-600 dark:text-amber-400", bgColor: "bg-amber-500/10 dark:bg-amber-500/20" },
    { value: "0.0373M", label: "Parameters", icon: Database, color: "text-violet-600 dark:text-violet-400", bgColor: "bg-violet-500/10 dark:bg-violet-500/20" },
  ];

  const quickLinks = [
    { title: "Single Prediction", description: "Analyze individual network traffic", path: "/predict", icon: Target, color: "from-blue-500 to-cyan-500" },
    { title: "Batch Analysis", description: "Process multiple samples at once", path: "/batch", icon: Database, color: "from-emerald-500 to-green-500" },
    { title: "Performance Analytics", description: "View detailed metrics", path: "/analytics", icon: BarChart3, color: "from-amber-500 to-orange-500" },
    { title: "Model Architecture", description: "Explore our hybrid design", path: "/model-info", icon: Layers, color: "from-violet-500 to-purple-500" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-violet-600 to-purple-600 dark:from-blue-700 dark:via-violet-700 dark:to-purple-700 p-8 md:p-16 text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48" />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-8"
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Research Project v1.0</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Hybrid
            <span className="block text-cyan-200 dark:text-cyan-300 mt-2">
              CNN & ConvNeXt-Tiny IDS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 dark:text-blue-200 max-w-3xl mb-10 leading-relaxed"
          >
            Advanced intrusion detection system combining spatial CNN patterns with hierarchical ConvNeXt features
            for state-of-the-art accuracy and real-time performance
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/dashboard"
              className="px-8 py-4 bg-white dark:bg-gray-100 text-blue-700 dark:text-blue-800 font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <Play className="h-5 w-5" />
              <span>Launch Dashboard</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/predict"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-600 text-white font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <Brain className="h-5 w-5" />
              <span>Try Single Prediction</span>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">Our Hybrid Approach?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Combining the best of both worlds for unparalleled intrusion detection performance
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`${feature.gradient} dark:bg-gray-900/80 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg dark:shadow-gray-900/30`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-3xl border border-gray-200 dark:border-gray-800 p-8">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Get Started <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400">Instantly</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Explore our comprehensive suite of tools for network security analysis
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Link
                  to={link.path}
                  className="group block bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl" 
                         style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${link.color} bg-opacity-10 dark:bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-600 dark:group-hover:from-blue-400 dark:group-hover:to-violet-400 transition-all duration-300">
                        {link.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                      {link.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                        Get Started
                      </span>
                      <div className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Open source research project • Built with PyTorch & React • 
            <span className="mx-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-md font-medium">
              CICIoT2023 Dataset
            </span>
          </p>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 dark:from-blue-700 dark:via-violet-700 dark:to-purple-700 p-12 text-white text-center">
        <div className="absolute inset-0 bg-grid-white/10 opacity-20" />
        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to enhance your network security?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto"
          >
            Experience state-of-the-art intrusion detection with our hybrid AI model
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/predict"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-100 text-blue-700 dark:text-blue-800 font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 group"
            >
              <span>Start Detecting Threats</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}