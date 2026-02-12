import React, { useState, useEffect } from 'react';
import {
  Cpu,
  Database,
  Shield,
  Activity,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Zap,
  Network,
  Users,
  Clock,
  BarChart3,
  Target,
  Server,
  Layers,
  ShieldCheck,
  Eye,
  AlertCircle,
  GitBranch,
  Sparkles,
  Brain,
  Download,
  Filter,
  RefreshCw
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('24h');
  const [detectionCount, setDetectionCount] = useState(1247);
  const [falsePositives, setFalsePositives] = useState(26);
  const [modelVersion, setModelVersion] = useState('v2.1.0');

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setDetectionCount(prev => prev + 1);
      }
      if (Math.random() > 0.85) {
        setFalsePositives(prev => prev + 1);
      }
    }, 15000); // Every 15 seconds

    return () => clearInterval(interval);
  }, []);

  const metrics = [
    {
      title: 'Detection Accuracy',
      value: '97.97%',
      icon: Target,
      description: 'CICIoT2023 test set',
      color: 'from-blue-500 to-cyan-500',
      gradient: 'from-blue-500 to-cyan-500',
      trend: '+12.23%',
      trendLabel: 'vs CNN-GRU',
      details: '14 attack types covered',
      badge: 'State-of-the-art'
    },
    {
      title: 'Active Threats',
      value: detectionCount.toLocaleString(),
      icon: AlertTriangle,
      description: 'Last 30 days',
      color: 'from-amber-500 to-orange-500',
      gradient: 'from-amber-500 to-orange-500',
      trend: '+8.3%',
      trendLabel: 'vs last month',
      details: 'Real-time monitoring',
      badge: 'Live'
    },
    {
      title: 'Inference Time',
      value: '45ms',
      icon: Zap,
      description: 'Per sample latency',
      color: 'from-violet-500 to-purple-500',
      gradient: 'from-violet-500 to-purple-500',
      trend: '-13.5%',
      trendLabel: 'optimized',
      details: 'Edge deployment ready',
      badge: 'Fast'
    },
    {
      title: 'Model Parameters',
      value: '0.0373M',
      icon: Cpu,
      description: 'Lightweight architecture',
      color: 'from-emerald-500 to-green-500',
      gradient: 'from-emerald-500 to-green-500',
      trend: '3.7×',
      trendLabel: 'fewer than BiLSTM',
      details: '0.8% false positive rate',
      badge: 'Efficient'
    },
  ];

  const systemStats = [
    {
      label: 'Model Architecture',
      value: 'Hybrid CNN + ConvNeXt',
      description: 'Dual-path detection',
      icon: Brain,
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      label: 'Throughput',
      value: '~22k/sec',
      description: 'Samples per second',
      icon: Activity,
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-900/20'
    },
    {
      label: 'Attack Coverage',
      value: '14 Types',
      description: 'DDoS, PortScan, Botnet +',
      icon: Shield,
      color: 'text-red-600 dark:text-red-400',
      bg: 'bg-red-50 dark:bg-red-900/20'
    },
    {
      label: 'False Positive Rate',
      value: '0.8%',
      description: `${falsePositives} false alarms`,
      icon: AlertCircle,
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-900/20'
    },
  ];

  const recentDetections = [
    {
      time: '2 min ago',
      type: 'DDoS-RSTFINFlood',
      severity: 'Critical',
      confidence: 98.2,
      source: '203.0.113.45',
      action: 'Blocked',
      mitigated: true
    },
    {
      time: '15 min ago',
      type: 'PortScan',
      severity: 'Medium',
      confidence: 87.3,
      source: '198.51.100.22',
      action: 'Monitored',
      mitigated: false
    },
    {
      time: '1 hour ago',
      type: 'SQL Injection',
      severity: 'High',
      confidence: 96.5,
      source: '203.0.113.78',
      action: 'Blocked',
      mitigated: true
    },
    {
      time: '3 hours ago',
      type: 'BruteForce',
      severity: 'High',
      confidence: 95.8,
      source: '198.51.100.33',
      action: 'Blocked',
      mitigated: true
    },
    {
      time: '5 hours ago',
      type: 'Botnet C2',
      severity: 'Critical',
      confidence: 94.2,
      source: '45.227.253.12',
      action: 'Blocked',
      mitigated: true
    },
  ];

  const attackDistribution = [
    { type: 'DDoS', count: 856, percentage: 43.8, color: 'bg-red-500', severity: 'Critical' },
    { type: 'PortScan', count: 342, percentage: 17.5, color: 'bg-amber-500', severity: 'Medium' },
    { type: 'BruteForce', count: 264, percentage: 13.5, color: 'bg-pink-500', severity: 'High' },
    { type: 'WebAttack', count: 278, percentage: 14.2, color: 'bg-orange-500', severity: 'High' },
    { type: 'Botnet', count: 215, percentage: 11.0, color: 'bg-purple-500', severity: 'Critical' },
  ];

  const modelPerformance = [
    { metric: 'Precision', value: 97.85, target: 95, color: 'from-blue-500 to-cyan-500' },
    { metric: 'Recall', value: 97.97, target: 95, color: 'from-emerald-500 to-green-500' },
    { metric: 'F1 Score', value: 97.78, target: 95, color: 'from-violet-500 to-purple-500' },
  ];

  const quickActions = [
    { label: 'Single Prediction', icon: Zap, path: '/predict', color: 'from-blue-500 to-cyan-500' },
    { label: 'Batch Analysis', icon: Database, path: '/batch', color: 'from-emerald-500 to-green-500' },
    { label: 'Export Report', icon: Download, path: '#', color: 'from-amber-500 to-orange-500' },
    { label: 'Model Info', icon: Brain, path: '/model-info', color: 'from-violet-500 to-purple-500' },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Critical': return 'bg-red-500/10 dark:bg-red-500/20 text-red-700 dark:text-red-400 border-red-500/20';
      case 'High': return 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 border-orange-500/20';
      case 'Medium': return 'bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-500/20';
      case 'Low': return 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-emerald-500/20';
      default: return 'bg-gray-500/10 dark:bg-gray-500/20 text-gray-700 dark:text-gray-400 border-gray-500/20';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 dark:from-blue-700 dark:via-violet-700 dark:to-purple-700 p-8 text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold">Security Dashboard</h1>
                  <p className="text-blue-100 dark:text-blue-200 mt-2">
                    Hybrid CNN & ConvNeXt-Tiny • {modelVersion}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-medium">Active Protection</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                  <Brain className="h-4 w-4" />
                  <span className="font-medium">Hybrid Architecture</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                  <GitBranch className="h-4 w-4" />
                  <span className="font-medium">Open Source</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                {['24h', '7d', '30d'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${timeRange === range
                      ? 'bg-white text-blue-700 dark:bg-gray-100 dark:text-blue-800'
                      : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{metric.title}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium 
                      ${metric.badge === 'State-of-the-art' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' : 
                        metric.badge === 'Live' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 animate-pulse' : 
                        metric.badge === 'Fast' ? 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400' : 
                        'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'}`}>
                      {metric.badge}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{metric.value}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                      {metric.trend}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{metric.trendLabel}</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800">
                  <metric.icon className="h-6 w-6 text-blue-500" />
                </div>              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{metric.description}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400"></span>
                  {metric.details}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - Left & Center */}
        <div className="lg:col-span-2 space-y-8">
          {/* System Performance Stats */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <Activity className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                System Performance
              </h2>
              <div className="text-sm text-gray-500 dark:text-gray-400">Real-time metrics</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {systemStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 rounded-xl p-4 text-center border border-gray-100 dark:border-gray-800"
                >
                  <div className={`w-12 h-12 rounded-lg ${stat.bg} flex items-center justify-center mx-auto mb-3`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.description}</div>
                </motion.div>
              ))}
            </div>

            {/* Model Performance Metrics */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                <Target className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                Model Performance Metrics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {modelPerformance.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{metric.metric}</span>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{metric.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${metric.color}`}
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-500">Target: {metric.target}%</span>
                      <span className={`font-medium ${metric.value >= metric.target ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
                        {metric.value >= metric.target ? '✓ Exceeded' : 'Below target'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Attack Distribution */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <BarChart3 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Attack Distribution
              </h2>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-500 dark:text-gray-400">Last {timeRange}</span>
              </div>
            </div>

            <div className="space-y-5">
              {attackDistribution.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="font-medium text-gray-900 dark:text-gray-100">{item.type}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getSeverityColor(item.severity)}`}>
                        {item.severity}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-gray-900 dark:text-white">{item.count.toLocaleString()}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">({item.percentage}%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full transition-all duration-1000 ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">14</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Attack Types</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">97.97%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Accuracy</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20">
                  <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">0.8%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">False Positive</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">45ms</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Inference</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-8">
          {/* Recent Detections */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Recent Detections
              </h2>
              <span className="text-xs font-medium px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Live
              </span>
            </div>

            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1 custom-scrollbar">
              {recentDetections.map((detection, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{detection.type}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getSeverityColor(detection.severity)}`}>
                          {detection.severity}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">{detection.source}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {detection.mitigated ? (
                        <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-md font-medium">
                          Blocked
                        </span>
                      ) : (
                        <span className="text-xs px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-md font-medium">
                          Monitoring
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2 flex-1">
                      <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-green-500"
                          style={{ width: `${detection.confidence}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 min-w-[40px]">
                        {detection.confidence}%
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">{detection.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <Link
                to="/analytics"
                className="w-full py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center justify-center gap-1"
              >
                View Detailed Analytics
                <TrendingUp className="h-4 w-4" />
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;