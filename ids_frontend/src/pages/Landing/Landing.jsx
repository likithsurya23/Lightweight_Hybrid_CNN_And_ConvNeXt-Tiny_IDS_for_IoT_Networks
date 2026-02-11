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
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      icon: Target,
      title: "97.97% Accuracy",
      description: "State-of-the-art performance with 12.23% improvement over CNN-GRU baseline",
      color: "from-emerald-500 to-green-500",
      gradient: "bg-gradient-to-br from-emerald-50 to-green-50"
    },
    {
      icon: Zap,
      title: "45ms Real-time Detection",
      description: "Ultra-fast inference enables immediate threat response and network monitoring",
      color: "from-amber-500 to-orange-500",
      gradient: "bg-gradient-to-br from-amber-50 to-orange-50"
    },
    {
      icon: Cpu,
      title: "0.0373M Parameters",
      description: "Lightweight design with 3.7× fewer parameters than BiLSTM for edge deployment",
      color: "from-violet-500 to-purple-500",
      gradient: "bg-gradient-to-br from-violet-50 to-purple-50"
    },
  ];

  const stats = [
    { value: "97.97%", label: "Detection Accuracy", icon: ShieldCheck, color: "text-emerald-600" },
    { value: "14+", label: "Attack Types", icon: Network, color: "text-blue-600" },
    { value: "45ms", label: "Response Time", icon: Activity, color: "text-amber-600" },
    { value: "0.0373M", label: "Parameters", icon: Database, color: "text-violet-600" },
  ];

  const quickLinks = [
    { title: "Single Prediction", description: "Analyze individual network traffic", path: "/predict", icon: Target },
    { title: "Batch Analysis", description: "Process multiple samples at once", path: "/batch", icon: Database },
    { title: "Performance Analytics", description: "View detailed metrics", path: "/analytics", icon: BarChart3 },
    { title: "Model Architecture", description: "Explore our hybrid design", path: "/model-info", icon: Layers },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-violet-600 to-purple-600 p-8 md:p-16 text-white">
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
            <span className="block text-cyan-200 mt-2">
              CNN & ConvNeXt-Tiny IDS
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mb-10 leading-relaxed"
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
              className="px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <Play className="h-5 w-5" />
              <span>Launch Dashboard</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/predict"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <Brain className="h-5 w-5" />
              <span>Try Single Prediction</span>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Add this section */}
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
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${stat.color.replace('text-', 'bg-')}/10`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm font-medium text-gray-700">{stat.label}</div>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Our Hybrid Approach?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Combining the best of both worlds for unparalleled intrusion detection performance
          </p>
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
                className={`${feature.gradient} rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 p-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get Started <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Instantly</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive suite of tools for network security analysis
          </p>
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
                  className="group block bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-500/5 group-hover:from-blue-500/20 group-hover:to-blue-500/10 transition-all duration-300">
                        <Icon className="h-6 w-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">{link.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-6">{link.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                        Get Started
                      </span>
                      <ChevronRight className="h-4 w-4 text-blue-600 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}