import React, { useState, useEffect } from 'react';
import { 
  Brain,
  Zap,
  Shield,
  Cpu,
  Server,
  Database,
  Network,
  BarChart as BarChart3,
  Target,
  Users,
  Code,
  Award,
  ChevronRight,
  Sparkles,
  Lightbulb,
  TrendingUp,
  Eye,
  GitBranch,
  Layers,
  Cpu as CpuIcon,
  ShieldCheck,
  Activity,
  Target as TargetIcon,
  FileCode
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const [animatedMetrics, setAnimatedMetrics] = useState(Array(4).fill(false));

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedMetrics([true, true, true, true]);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const researchMetrics = [
    { icon: Target, value: "97.97%", label: "Accuracy", color: "from-emerald-400 to-emerald-600 dark:from-emerald-300 dark:to-emerald-500", bg: "bg-emerald-500/10 dark:bg-emerald-500/20" },
    { icon: Zap, value: "45ms", label: "Inference Time", color: "from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500", bg: "bg-blue-500/10 dark:bg-blue-500/20" },
    { icon: Database, value: "0.0373M", label: "Parameters", color: "from-violet-400 to-violet-600 dark:from-violet-300 dark:to-violet-500", bg: "bg-violet-500/10 dark:bg-violet-500/20" },
    { icon: Network, value: "14", label: "Attack Types", color: "from-amber-400 to-amber-600 dark:from-amber-300 dark:to-amber-500", bg: "bg-amber-500/10 dark:bg-amber-500/20" },
  ];

  const architecturalPillars = [
    {
      title: "Spatial Intelligence",
      description: "CNN layers capture local network traffic patterns and spatial correlations",
      icon: Layers,
      color: "from-blue-500 to-cyan-400 dark:from-blue-400 dark:to-cyan-300",
      iconColor: "text-blue-600 dark:text-blue-400",
      bg: "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-500/20 dark:to-cyan-500/20"
    },
    {
      title: "Hierarchical Learning",
      description: "ConvNeXt-Tiny extracts multi-scale features for complex attack signatures",
      icon: Brain,
      color: "from-violet-500 to-purple-400 dark:from-violet-400 dark:to-purple-300",
      iconColor: "text-violet-600 dark:text-violet-400",
      bg: "bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-500/20 dark:to-purple-500/20"
    },
    {
      title: "Real-time Analysis",
      description: "Optimized architecture enables 45ms per sample detection",
      icon: Activity,
      color: "from-emerald-500 to-green-400 dark:from-emerald-400 dark:to-green-300",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-500/20 dark:to-green-500/20"
    },
    {
      title: "Lightweight Design",
      description: "Minimal parameters (0.0373M) for edge and IoT deployment",
      icon: CpuIcon,
      color: "from-amber-500 to-orange-400 dark:from-amber-400 dark:to-orange-300",
      iconColor: "text-amber-600 dark:text-amber-400",
      bg: "bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-500/20 dark:to-orange-500/20"
    },
  ];

  const techStack = [
    { 
      name: "PyTorch 2.0", 
      role: "Deep Learning", 
      icon: Brain,
      color: "bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/20 dark:border-orange-500/30",
      gradient: "from-orange-400 to-orange-600 dark:from-orange-300 dark:to-orange-500"
    },
    { 
      name: "Django REST", 
      role: "Backend API", 
      icon: Server,
      color: "bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/20 dark:border-green-500/30",
      gradient: "from-emerald-400 to-emerald-600 dark:from-emerald-300 dark:to-emerald-500"
    },
    { 
      name: "React.js 18", 
      role: "Frontend", 
      icon: Code,
      color: "bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/20 dark:border-blue-500/30",
      gradient: "from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500"
    },
    { 
      name: "Tailwind CSS", 
      role: "UI Styling", 
      icon: FileCode,
      color: "bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border-cyan-500/20 dark:border-cyan-500/30",
      gradient: "from-cyan-400 to-cyan-600 dark:from-cyan-300 dark:to-cyan-500"
    },
    { 
      name: "Recharts", 
      role: "Visualization", 
      icon: BarChart3,
      color: "bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/20 dark:border-purple-500/30",
      gradient: "from-purple-400 to-purple-600 dark:from-purple-300 dark:to-purple-500"
    },
    { 
      name: "CICIoT2023", 
      role: "Dataset", 
      icon: Database,
      color: "bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 border-rose-500/20 dark:border-rose-500/30",
      gradient: "from-rose-400 to-rose-600 dark:from-rose-300 dark:to-rose-500"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/50 to-white dark:from-gray-900 dark:via-blue-950/30 dark:to-gray-900" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent dark:from-gray-900 dark:to-transparent z-10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8"
            >
              <Sparkles className="h-4 w-4" />
              Cutting-edge Research Project
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 dark:text-white mb-8">
              Hybrid
              <span className="block font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 dark:from-blue-400 dark:via-violet-400 dark:to-purple-400 bg-clip-text text-transparent mt-2">
                CNN & ConvNeXt-Tiny IDS
              </span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Advanced network security architecture combining spatial CNN patterns with hierarchical ConvNeXt features for unparalleled intrusion detection accuracy.
            </motion.p>
            
            <motion.div 
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="flex flex-wrap justify-center gap-6"
            >
              {[
                { icon: ShieldCheck, text: "Enterprise-grade Security" },
                { icon: TrendingUp, text: "97.97% Accuracy" },
                { icon: Activity, text: "Real-time Monitoring" },
                { icon: GitBranch, text: "Open Source" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                >
                  <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Metrics Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-24"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {researchMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl" />
                <div className="relative bg-white dark:bg-gray-800/90 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-3 rounded-xl ${metric.bg} mb-4`}>
                      <Icon className={`h-6 w-6 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`} />
                    </div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                      {animatedMetrics[index] ? metric.value : "0"}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium text-sm tracking-wide">
                      {metric.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Architectural Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Architectural <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">Pillars</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Four core principles driving our hybrid approach to next-generation intrusion detection
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {architecturalPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm hover:shadow-xl dark:shadow-gray-900/30 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
                  
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-r ${pillar.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-600 dark:group-hover:from-blue-400 dark:group-hover:to-violet-400 transition-all duration-300">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      <span>Learn more about {pillar.title.toLowerCase()}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Technical Stack */}
      <div className="bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 py-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400">Stack</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Modern tools and frameworks engineered for scalability and peak performance
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <div className="relative h-full bg-white dark:bg-gray-800/90 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-300 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} opacity-0 group-hover:opacity-5 dark:opacity-0 dark:group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative flex flex-col items-center text-center">
                      <div className={`p-4 rounded-xl ${tech.color} border mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`h-7 w-7`} />
                      </div>
                      
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                        {tech.name}
                      </h3>
                      
                      <p className={`text-sm font-medium ${tech.color.split(' ')[2]} dark:${tech.color.split(' ')[3]} mb-4`}>
                        {tech.role}
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 w-full">
                        <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                          <span className="text-xs">Learn more</span>
                          <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl mx-auto">
              Combined with advanced algorithms and optimized architecture for enterprise-grade intrusion detection
            </p>
          </motion.div>
        </div>
      </div>

      {/* Research Impact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400">Impact</span>
            </h2>
            <div className="space-y-8">
              {[
                {
                  icon: BarChart3,
                  title: "State-of-the-art Performance",
                  description: "12.23% accuracy improvement over CNN-GRU with 3.7× fewer parameters than BiLSTM",
                  color: "bg-blue-500/10 dark:bg-blue-500/20",
                  iconColor: "text-blue-600 dark:text-blue-400"
                },
                {
                  icon: Shield,
                  title: "Comprehensive Security",
                  description: "Detection coverage for 14 attack types including DDoS, DoS, SQL Injection, and botnets",
                  color: "bg-emerald-500/10 dark:bg-emerald-500/20",
                  iconColor: "text-emerald-600 dark:text-emerald-400"
                },
                {
                  icon: Users,
                  title: "Open Innovation",
                  description: "Full open-source implementation with comprehensive documentation for research collaboration",
                  color: "bg-violet-500/10 dark:bg-violet-500/20",
                  iconColor: "text-violet-600 dark:text-violet-400"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-6 group"
                >
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`h-7 w-7 ${item.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-600 dark:group-hover:from-blue-400 dark:group-hover:to-violet-400 transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 dark:from-blue-500/30 dark:via-purple-500/30 dark:to-pink-500/30 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 rounded-3xl p-10 text-white shadow-2xl">
              <Award className="h-14 w-14 text-yellow-400 mb-8 animate-pulse" />
              <h3 className="text-3xl font-bold mb-6 dark:text-white">
                Key Achievement
              </h3>
              <p className="text-gray-300 dark:text-gray-400 leading-relaxed text-lg mb-10">
                Our hybrid architecture achieves the optimal balance between 
                detection accuracy and computational efficiency, making it 
                suitable for both cloud and edge deployment scenarios.
              </p>
              
              <div className="border-t border-gray-700 dark:border-gray-800 pt-10">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: "97.97%", label: "Detection Accuracy", color: "from-emerald-400 to-emerald-300 dark:from-emerald-300 dark:to-emerald-200" },
                    { value: "3.7×", label: "Fewer Parameters", color: "from-blue-400 to-cyan-300 dark:from-blue-300 dark:to-cyan-200" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400 dark:text-gray-500 font-medium tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Future Vision */}
      <div className="bg-gradient-to-b from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400">Vision</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-xl mb-16 leading-relaxed">
              Pioneering the future of network security through continuous innovation 
              and advanced hybrid deep learning architectures
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  icon: Network,
                  title: "Federated Learning",
                  description: "Privacy-preserving collaborative training across distributed networks",
                  color: "from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400"
                },
                {
                  icon: Zap,
                  title: "Edge Optimization",
                  description: "Ultra-lightweight models for resource-constrained IoT devices",
                  color: "from-emerald-500 to-green-500 dark:from-emerald-400 dark:to-green-400"
                },
                {
                  icon: Brain,
                  title: "Adaptive Defense",
                  description: "Self-evolving models that adapt to emerging attack patterns",
                  color: "from-violet-500 to-purple-500 dark:from-violet-400 dark:to-purple-400"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="relative bg-white dark:bg-gray-800/90 rounded-2xl border border-gray-200 dark:border-gray-700 p-10 shadow-lg hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                    
                    <div className="relative">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="h-10 w-10 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-600 dark:group-hover:from-blue-400 dark:group-hover:to-violet-400 transition-all duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <div className="inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          <span>Explore roadmap</span>
                          <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}