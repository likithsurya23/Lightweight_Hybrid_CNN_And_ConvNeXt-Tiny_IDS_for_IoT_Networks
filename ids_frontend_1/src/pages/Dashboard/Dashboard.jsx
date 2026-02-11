import React, { useState, useEffect } from 'react';
import MetricCard from '../../components/Metriccard/MetricCard';
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
  AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('24h');
  const [isOnline, setIsOnline] = useState(true);
  const [detectionCount, setDetectionCount] = useState(1247);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      // Simulate occasional attack detection
      if (Math.random() > 0.7) {
        setDetectionCount(prev => prev + 1);
      }
    }, 10000); // Every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const metrics = [
    {
      title: 'Model Status',
      value: 'Active',
      icon: ShieldCheck,
      description: 'Hybrid CNN & ConvNeXt-Tiny',
      color: 'success',
      gradient: 'from-emerald-500 to-green-500',
      trend: 'Online',
      details: 'Real-time monitoring'
    },
    {
      title: 'Accuracy',
      value: '97.97%',
      icon: Target,
      description: 'CICIoT2023 test set',
      color: 'primary',
      gradient: 'from-blue-500 to-cyan-500',
      trend: 'State-of-the-art',
      details: '14 attack types'
    },
    {
      title: 'Total Attacks Detected',
      value: detectionCount.toLocaleString(),
      icon: AlertTriangle,
      description: 'Last 30 days',
      color: 'warning',
      gradient: 'from-amber-500 to-orange-500',
      trend: 'Real-time',
      details: '24/7 monitoring'
    },
    {
      title: 'Response Time',
      value: '45ms',
      icon: Zap,
      description: 'Average prediction latency',
      color: 'success',
      gradient: 'from-violet-500 to-purple-500',
      trend: 'Optimized',
      details: 'Edge-ready'
    },
  ];

  const systemStats = [
    {
      label: 'Model Parameters',
      value: '0.0373M',
      description: 'Lightweight design',
      icon: Cpu,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      label: 'Inference Speed',
      value: '~22k/sec',
      description: 'Samples per second',
      icon: Activity,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      label: 'Attack Types',
      value: '14+',
      description: 'Detection coverage',
      icon: Shield,
      color: 'text-red-600',
      bg: 'bg-red-50'
    },
    {
      label: 'Uptime',
      value: '99.9%',
      description: 'Service availability',
      icon: Server,
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
  ];

  const recentActivities = [
    {
      time: '2 minutes ago',
      type: 'DDoS-RSTFINFlood',
      severity: 'Critical',
      confidence: 0.98,
      source: '203.0.113.45',
      status: 'Blocked'
    },
    {
      time: '15 minutes ago',
      type: 'PortScan',
      severity: 'Medium',
      confidence: 0.87,
      source: '198.51.100.22',
      status: 'Monitored'
    },
    {
      time: '1 hour ago',
      type: 'Normal Traffic',
      severity: 'Normal',
      confidence: 0.95,
      source: '192.168.1.100',
      status: 'Verified'
    },
    {
      time: '3 hours ago',
      type: 'BruteForce',
      severity: 'High',
      confidence: 0.96,
      source: '203.0.113.78',
      status: 'Blocked'
    },
    {
      time: '5 hours ago',
      type: 'WebAttack-SQLi',
      severity: 'High',
      confidence: 0.92,
      source: '198.51.100.33',
      status: 'Blocked'
    },
  ];

  const attackDistribution = [
    { type: 'Normal', count: 4250, percentage: 68.5, color: 'bg-emerald-500' },
    { type: 'DDoS', count: 856, percentage: 13.8, color: 'bg-red-500' },
    { type: 'PortScan', count: 342, percentage: 5.5, color: 'bg-amber-500' },
    { type: 'WebAttack', count: 278, percentage: 4.5, color: 'bg-orange-500' },
    { type: 'Botnet', count: 215, percentage: 3.5, color: 'bg-purple-500' },
    { type: 'BruteForce', count: 264, percentage: 4.2, color: 'bg-pink-500' },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Critical': return 'bg-red-500/10 text-red-700 border-red-500/20';
      case 'High': return 'bg-orange-500/10 text-orange-700 border-orange-500/20';
      case 'Medium': return 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20';
      case 'Normal': return 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20';
      default: return 'bg-gray-500/10 text-gray-700 border-gray-500/20';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Blocked': return AlertCircle;
      case 'Monitored': return Eye;
      case 'Verified': return CheckCircle;
      default: return CheckCircle;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 p-8 text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold">Intrusion Detection System</h1>
                  <p className="text-blue-100 mt-2">
                    Real-time monitoring with Hybrid CNN & ConvNeXt-Tiny
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-medium">System Active</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                  <Zap className="h-4 w-4" />
                  <span className="font-medium">45ms Response</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                  <Target className="h-4 w-4" />
                  <span className="font-medium">97.97% Accuracy</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              {['24h', '7d', '30d', 'All'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${timeRange === range
                      ? 'bg-white text-blue-700'
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

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{metric.title}</p>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                </div>
                <div className={`p-3 rounded-xl bg-gradient-to-r ${metric.gradient}/10`}>
                  <metric.icon className={`h-6 w-6 bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent`} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{metric.description}</span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${metric.trend === 'Online' || metric.trend === 'Optimized'
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-blue-100 text-blue-700'
                    }`}>
                    {metric.trend}
                  </span>
                </div>
                <p className="text-xs text-gray-400">{metric.details}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* System Overview & Stats */}
        <div className="lg:col-span-2 space-y-8">
          {/* System Stats */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                <Activity className="h-5 w-5 text-blue-600" />
                System Performance
              </h2>
              <div className="text-sm text-gray-500">Real-time metrics</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {systemStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 text-center border border-gray-100"
                >
                  <div className={`w-12 h-12 rounded-lg ${stat.bg} flex items-center justify-center mx-auto mb-3`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-700 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Attack Distribution */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              Attack Distribution (Last 30 Days)
            </h2>

            <div className="space-y-4">
              {attackDistribution.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="font-medium text-gray-900">{item.type}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-gray-900">{item.count.toLocaleString()}</span>
                      <span className="text-sm text-gray-500 ml-2">({item.percentage}%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-1000 ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">6,205</div>
                  <div className="text-sm text-gray-600">Total Samples</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">4,250</div>
                  <div className="text-sm text-gray-600">Normal Traffic</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">1,955</div>
                  <div className="text-sm text-gray-600">Attack Traffic</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">31.5%</div>
                  <div className="text-sm text-gray-600">Attack Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity & Architecture */}
        <div className="space-y-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                <Clock className="h-5 w-5 text-blue-600" />
                Recent Activity
              </h2>
              <span className="text-sm font-medium text-blue-600">Live</span>
            </div>

            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const StatusIcon = getStatusIcon(activity.status);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900">{activity.type}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getSeverityColor(activity.severity)}`}>
                            {activity.severity}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">{activity.source}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-right">
                          <div className="text-xs text-gray-500">{activity.time}</div>
                          <div className={`text-xs font-medium ${activity.status === 'Blocked' ? 'text-red-600' :
                              activity.status === 'Monitored' ? 'text-amber-600' :
                                'text-emerald-600'
                            }`}>
                            {activity.status}
                          </div>
                        </div>
                        <StatusIcon className={`h-4 w-4 ${activity.status === 'Blocked' ? 'text-red-500' :
                            activity.status === 'Monitored' ? 'text-amber-500' :
                              'text-emerald-500'
                          }`} />
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-emerald-500 to-green-500"
                            style={{ width: `${activity.confidence * 100}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {(activity.confidence * 100).toFixed(0)}%
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">Confidence</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <button className="w-full py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                View All Activity →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;