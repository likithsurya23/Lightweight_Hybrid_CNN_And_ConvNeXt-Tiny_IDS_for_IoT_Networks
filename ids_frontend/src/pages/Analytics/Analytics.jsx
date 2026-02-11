import React, { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Activity,
  Shield,
  AlertTriangle,
  Clock,
  Zap,
  BarChart3,
  PieChart,
  Filter,
  Download,
  Calendar,
  Target,
  Cpu,
  Database,
  Layers,
  Sparkles,
  Trophy,
  Award,
  Bell,
  ChevronRight
} from 'lucide-react';
import {
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ScatterChart,
  Scatter,
  ZAxis
} from 'recharts';
import { motion } from 'framer-motion';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [activeTab, setActiveTab] = useState('overview');

  // Updated metrics with your data
  const performanceMetrics = [
    {
      name: 'Accuracy',
      value: 97.97,
      change: 12.23,
      icon: Target,
      color: 'from-emerald-500 to-green-500 dark:from-emerald-400 dark:to-green-400',
      bgColor: 'bg-emerald-500/10 dark:bg-emerald-500/20',
      description: 'vs CNN-GRU baseline',
      trend: 'up'
    },
    {
      name: 'F1 Score',
      value: 97.78,
      change: 12.82,
      icon: Trophy,
      color: 'from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400',
      bgColor: 'bg-blue-500/10 dark:bg-blue-500/20',
      description: 'vs CNN-GRU baseline',
      trend: 'up'
    },
    {
      name: 'Parameters',
      value: '0.0373M',
      change: -72.9,
      icon: Cpu,
      color: 'from-violet-500 to-purple-500 dark:from-violet-400 dark:to-purple-400',
      bgColor: 'bg-violet-500/10 dark:bg-violet-500/20',
      description: 'vs BiLSTM model',
      trend: 'down'
    },
    {
      name: 'Inference Time',
      value: '45ms',
      change: -13.5,
      icon: Zap,
      color: 'from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400',
      bgColor: 'bg-amber-500/10 dark:bg-amber-500/20',
      description: 'vs ConvNeXt-only',
      trend: 'down'
    },
  ];

  // Attack distribution based on CICIoT2023
  const attackDistribution = [
    { name: 'DDoS Attacks', value: 32, color: '#ef4444', icon: Shield },
    { name: 'DoS Attacks', value: 28, color: '#f97316', icon: AlertTriangle },
    { name: 'BruteForce', value: 18, color: '#eab308', icon: Filter },
    { name: 'Injection', value: 12, color: '#8b5cf6', icon: Database },
    { name: 'Malware', value: 8, color: '#ec4899', icon: Cpu },
    { name: 'Reconnaissance', value: 2, color: '#06b6d4', icon: Activity },
  ];

  // Weekly traffic trends with your metrics
  const trafficTrends = Array.from({ length: 7 }, (_, i) => {
    const baseNormal = 800 + Math.random() * 400;
    const attackRate = 0.11; // 11% attack traffic
    return {
      day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
      normal: Math.round(baseNormal * (1 - attackRate)),
      attacks: Math.round(baseNormal * attackRate),
      falsePositives: Math.round(baseNormal * 0.008), // 0.8% false positive rate
    };
  });

  // Detection performance by attack type
  const detectionPerformance = [
    { attack: 'DDoS-RSTFINFlood', accuracy: 98.2, time: 42, color: '#ef4444' },
    { attack: 'DoS-SlowHTTPTest', accuracy: 97.5, time: 58, color: '#f97316' },
    { attack: 'BruteForce-Web', accuracy: 96.8, time: 35, color: '#eab308' },
    { attack: 'SQL Injection', accuracy: 98.5, time: 67, color: '#8b5cf6' },
    { attack: 'PortScan', accuracy: 99.1, time: 28, color: '#06b6d4' },
    { attack: 'Botnet', accuracy: 97.2, time: 49, color: '#ec4899' },
  ];

  // Model comparison data with proper values
  const modelComparisonData = [
    {
      model: 'CNN-only',
      accuracy: 80.08,
      f1: 76.96,
      precision: 80.17,
      recall: 80.08,
      params: 0.0085,
      inference: 38,
      color: '#3b82f6'
    },
    {
      model: 'CNN-GRU',
      accuracy: 85.74,
      f1: 84.93,
      precision: 86.68,
      recall: 85.74,
      params: 0.0212,
      inference: 52,
      color: '#10b981'
    },
    {
      model: 'BiLSTM',
      accuracy: 84.53,
      f1: 83.87,
      precision: 85.84,
      recall: 84.53,
      params: 0.1380,
      inference: 62,
      color: '#8b5cf6'
    },
    {
      model: 'Hybrid (Ours)',
      accuracy: 97.97,
      f1: 97.78,
      precision: 97.85,
      recall: 97.97,
      params: 0.0373,
      inference: 45,
      color: '#f59e0b'
    }
  ];

  // Attack severity distribution
  const severityDistribution = [
    { level: 'Critical', count: 124, color: '#ef4444', percentage: 45 },
    { level: 'High', count: 86, color: '#f97316', percentage: 32 },
    { level: 'Medium', count: 42, color: '#eab308', percentage: 16 },
    { level: 'Low', count: 18, color: '#10b981', percentage: 7 },
  ];

  // Scatter plot data for params vs accuracy
  const scatterData = modelComparisonData.map(model => ({
    x: model.params,
    y: model.accuracy,
    z: model.inference,
    name: model.model,
    short: model.model === 'Hybrid (Ours)' ? 'Ours' : 
           model.model === 'CNN-GRU' ? 'GRU' : 
           model.model === 'BiLSTM' ? 'BiLSTM' : 'CNN',
    color: model.color
  }));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl p-4">
          <p className="font-bold text-gray-900 dark:text-white mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              <span className="font-medium">{entry.name}:</span> {entry.value}
              {entry.dataKey === 'accuracy' || entry.dataKey === 'f1' || entry.dataKey === 'precision' || entry.dataKey === 'recall' ? '%' : ''}
              {entry.dataKey === 'time' || entry.dataKey === 'inference' ? 'ms' : ''}
              {entry.dataKey === 'params' ? 'M' : ''}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'performance', label: 'Performance', icon: Activity },
    { id: 'comparison', label: 'Comparison', icon: TrendingUp },
    { id: 'details', label: 'Details', icon: Database },
  ];

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            {/* Attack Distribution */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                    <PieChart className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Attack Type Distribution</h2>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">CICIoT2023 Dataset</span>
              </div>

              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={attackDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percent }) => `${name}\n${(percent * 100).toFixed(0)}%`}
                    >
                      {attackDistribution.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                          stroke="#fff"
                          strokeWidth={2}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => [`${value}%`, 'Percentage']}
                      contentStyle={{
                        backgroundColor: 'rgb(var(--color-background))',
                        border: '1px solid rgb(var(--color-border))',
                        borderRadius: '0.75rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      }}
                    />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {attackDistribution.map((attack, index) => {
                  const Icon = attack.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-800">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: attack.color }}
                      />
                      <Icon className="h-4 w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm text-gray-900 dark:text-gray-100 truncate">{attack.name}</p>
                      </div>
                      <span className="font-bold text-gray-900 dark:text-white">{attack.value}%</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Traffic Trends */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                    <Activity className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Weekly Traffic Analysis</h2>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Normal vs Attack Patterns</span>
              </div>

              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trafficTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" className="opacity-30 dark:opacity-10" />
                    <XAxis
                      dataKey="day"
                      stroke="#6b7280"
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                    />
                    <YAxis
                      stroke="#6b7280"
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="normal"
                      stackId="1"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.2}
                      name="Normal Traffic"
                    />
                    <Area
                      type="monotone"
                      dataKey="attacks"
                      stackId="1"
                      stroke="#ef4444"
                      fill="#ef4444"
                      fillOpacity={0.2}
                      name="Attack Traffic"
                    />
                    <Area
                      type="monotone"
                      dataKey="falsePositives"
                      stackId="1"
                      stroke="#f59e0b"
                      fill="#f59e0b"
                      fillOpacity={0.2}
                      name="False Positives"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                  <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                    {(trafficTrends.reduce((sum, day) => sum + day.normal, 0) / trafficTrends.length).toLocaleString()}
                  </div>
                  <div className="text-sm text-emerald-600 dark:text-emerald-500 mt-1">Avg Normal/day</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                  <div className="text-2xl font-bold text-red-700 dark:text-red-400">
                    {(trafficTrends.reduce((sum, day) => sum + day.attacks, 0) / trafficTrends.length).toLocaleString()}
                  </div>
                  <div className="text-sm text-red-600 dark:text-red-500 mt-1">Avg Attacks/day</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                  <div className="text-2xl font-bold text-amber-700 dark:text-amber-400">
                    {((trafficTrends.reduce((sum, day) => sum + day.falsePositives, 0) /
                      trafficTrends.reduce((sum, day) => sum + day.normal, 0)) * 100).toFixed(2)}%
                  </div>
                  <div className="text-sm text-amber-600 dark:text-amber-500 mt-1">False Positive Rate</div>
                </div>
              </div>
            </div>
          </>
        );

      case 'performance':
        return (
          <>
            {/* Detection Performance */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                    <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Detection Performance by Attack Type</h2>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Accuracy vs Detection Time</span>
              </div>

              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={detectionPerformance}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" className="opacity-30 dark:opacity-10" />
                    <XAxis
                      dataKey="attack"
                      stroke="#6b7280"
                      tick={{ fontSize: 11, fill: '#6b7280' }}
                      angle={-45}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis
                      yAxisId="left"
                      stroke="#6b7280"
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                      label={{ value: 'Accuracy (%)', angle: -90, position: 'insideLeft', fill: '#6b7280' }}
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      stroke="#6b7280"
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                      label={{ value: 'Time (ms)', angle: 90, position: 'insideRight', fill: '#6b7280' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar
                      yAxisId="left"
                      dataKey="accuracy"
                      name="Detection Accuracy (%)"
                      fill="#3b82f6"
                      radius={[4, 4, 0, 0]}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="time"
                      name="Detection Time (ms)"
                      stroke="#f59e0b"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Performance Insight</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      PortScan achieves highest accuracy (99.1%) while BruteForce attacks are detected fastest (35ms)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Attack Severity */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                    <AlertTriangle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Attack Severity Distribution</h2>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Last 30 days</span>
              </div>

              <div className="space-y-6">
                {severityDistribution.map((severity, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: severity.color }}
                        />
                        <span className="font-medium text-gray-900 dark:text-gray-100">{severity.level}</span>
                      </div>
                      <span className="font-bold text-gray-900 dark:text-white">{severity.count} incidents</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3 flex-1">
                        <div
                          className="h-3 rounded-full"
                          style={{
                            width: `${severity.percentage}%`,
                            backgroundColor: severity.color
                          }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{severity.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total incidents analyzed</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {severityDistribution.reduce((sum, s) => sum + s.count, 0)}
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case 'comparison':
        return (
          <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <Layers className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Model Architecture Comparison</h2>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Accuracy vs Model Size vs Inference Time
              </span>
            </div>

            <div className="h-[420px]">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" className="opacity-30 dark:opacity-10" />

                  {/* X Axis — Model Size */}
                  <XAxis
                    type="number"
                    dataKey="x"
                    name="Parameters (Millions)"
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                    label={{
                      value: "",
                      position: "insideBottom",
                      offset: -15,
                      fill: "#6b7280",
                    }}
                  />

                  {/* Y Axis — Accuracy */}
                  <YAxis
                    type="number"
                    dataKey="y"
                    domain={[75, 100]}
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                    label={{
                      value: "Accuracy (%)",
                      angle: -90,
                      position: "insideLeft",
                      fill: "#6b7280",
                    }}
                  />

                  {/* Bubble size — Inference time */}
                  <ZAxis
                    type="number"
                    dataKey="z"
                    name="Inference Time (ms)"
                    range={[200, 900]}
                  />

                  {/* Tooltip */}
                  <Tooltip
                    cursor={{ strokeDasharray: "3 3" }}
                    content={({ active, payload }) => {
                      if (active && payload?.length) {
                        const d = payload[0].payload;
                        return (
                          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg p-4 space-y-1">
                            <p className="font-semibold text-gray-900 dark:text-white">{d.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Accuracy: <span className="font-medium text-gray-900 dark:text-white">{d.y}%</span>
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Parameters: <span className="font-medium text-gray-900 dark:text-white">{d.x}M</span>
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Inference Time: <span className="font-medium text-gray-900 dark:text-white">{d.z} ms</span>
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />

                  <Legend />

                  {/* Scatter */}
                  <Scatter
                    name="IDS Models"
                    data={scatterData}
                    shape={({ cx, cy, payload }) => {
                      const radius = Math.max(8, payload.z / 12);
                      return (
                        <g>
                          <circle
                            cx={cx}
                            cy={cy}
                            r={radius}
                            fill={payload.color}
                            fillOpacity={payload.name === 'Hybrid (Ours)' ? 0.9 : 0.6}
                            stroke={payload.name === 'Hybrid (Ours)' ? "#f59e0b" : "#fff"}
                            strokeWidth={payload.name === 'Hybrid (Ours)' ? 3 : 2}
                          />
                          <text
                            x={cx}
                            y={cy + 4}
                            textAnchor="middle"
                            fill="#fff"
                            fontSize={11}
                            fontWeight="bold"
                          >
                            {payload.short}
                          </text>
                        </g>
                      );
                    }}
                  />
                </ScatterChart>
              </ResponsiveContainer>
            </div>

            {/* Model Comparison Cards */}
            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {modelComparisonData.map((model, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border ${model.model === 'Hybrid (Ours)' 
                    ? 'border-2 border-amber-300 dark:border-amber-600 bg-amber-50 dark:bg-amber-900/20 ring-2 ring-amber-100 dark:ring-amber-900/40' 
                    : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800'}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: model.color }}
                    />
                    <div className={`font-bold text-sm ${model.model === 'Hybrid (Ours)' 
                      ? 'text-amber-700 dark:text-amber-400' 
                      : 'text-gray-900 dark:text-gray-100'}`}>
                      {model.model}
                    </div>
                    {model.model === 'Hybrid (Ours)' && (
                      <div className="ml-auto px-2 py-0.5 text-xs font-medium bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-400 rounded-full">
                        <Sparkles className="h-3 w-3 inline mr-1" />
                        Best
                      </div>
                    )}
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Accuracy:</span>
                      <span className={`font-bold ${model.model === 'Hybrid (Ours)' 
                        ? 'text-amber-700 dark:text-amber-400' 
                        : 'text-gray-900 dark:text-gray-100'}`}>
                        {model.accuracy}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">F1 Score:</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{model.f1}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Parameters:</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100">{model.params}M</span>
                    </div>
                    <div className="pt-2 mt-2 border-t border-gray-100 dark:border-gray-700">
                      <div className="text-xs text-center text-gray-500 dark:text-gray-400">
                        {model.model === 'Hybrid (Ours)' && '✓ 12.23% over CNN-GRU'}
                        {model.model === 'CNN-GRU' && 'Baseline'}
                        {model.model === 'CNN-only' && 'Simple CNN'}
                        {model.model === 'BiLSTM' && '3.7× more params'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'details':
        return (
          <>
            {/* Detailed Metrics */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                    <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Detailed Model Performance</h2>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">All metrics in percentage</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-800">
                      <th className="text-left py-4 px-4 text-sm font-semibold text-gray-900 dark:text-white">Model</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-gray-900 dark:text-white">Accuracy</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-gray-900 dark:text-white">F1 Score</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-gray-900 dark:text-white">Precision</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-gray-900 dark:text-white">Recall</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-gray-900 dark:text-white">Params (M)</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-gray-900 dark:text-white">Inference (ms)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {modelComparisonData.map((model, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: model.color }} />
                            <span className={`font-medium ${model.model === 'Hybrid (Ours)' ? 'text-amber-600 dark:text-amber-400' : 'text-gray-900 dark:text-gray-100'}`}>
                              {model.model}
                            </span>
                            {model.model === 'Hybrid (Ours)' && (
                              <span className="px-2 py-0.5 text-xs bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-400 rounded-full">
                                Best
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-gray-900 dark:text-gray-100">{model.accuracy}%</td>
                        <td className="py-4 px-4 text-gray-900 dark:text-gray-100">{model.f1}%</td>
                        <td className="py-4 px-4 text-gray-900 dark:text-gray-100">{model.precision}%</td>
                        <td className="py-4 px-4 text-gray-900 dark:text-gray-100">{model.recall}%</td>
                        <td className="py-4 px-4 text-gray-900 dark:text-gray-100">{model.params}M</td>
                        <td className="py-4 px-4 text-gray-900 dark:text-gray-100">{model.inference}ms</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Dataset Information */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Dataset Information</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                  <span className="text-gray-600 dark:text-gray-400">Dataset</span>
                  <span className="font-semibold text-gray-900 dark:text-white">CICIoT2023</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                  <span className="text-gray-600 dark:text-gray-400">Total Samples</span>
                  <span className="font-semibold text-gray-900 dark:text-white">46,589,325</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                  <span className="text-gray-600 dark:text-gray-400">Attack Types</span>
                  <span className="font-semibold text-gray-900 dark:text-white">14</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                  <span className="text-gray-600 dark:text-gray-400">Features</span>
                  <span className="font-semibold text-gray-900 dark:text-white">46</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                  <span className="text-gray-600 dark:text-gray-400">Devices</span>
                  <span className="font-semibold text-gray-900 dark:text-white">105</span>
                </div>
              </div>
            </div>
          </>
        );

      default:
        return null;
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
                  <BarChart3 className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold">Analytics Dashboard</h1>
                  <p className="text-blue-100 mt-2">
                    Comprehensive insights from Hybrid CNN & ConvNeXt-Tiny IDS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-gray-700 text-blue-700 dark:text-blue-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Performance Metrics - Always visible */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${metric.bgColor}`}>
                <metric.icon className={`h-6 w-6 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`} />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full ${
                metric.trend === 'up'
                  ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                  : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
              }`}>
                {metric.trend === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                {metric.change > 0 ? '+' : ''}{metric.change}%
              </div>
            </div>

            <div className="mb-3">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">{metric.value}</div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{metric.name}</div>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">{metric.description}</p>

            <div className="mt-4 w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
              <div
                className={`h-2 rounded-full bg-gradient-to-r ${metric.color}`}
                style={{
                  width: metric.name === 'Parameters' || metric.name === 'Inference Time'
                    ? `${100 - Math.abs(metric.change)}%`
                    : `${metric.value}%`
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Charts Grid - Tab Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default Analytics;