"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Activity, Database, Server, AlertTriangle, ArrowUpRight, Cpu } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const { user, isAdmin, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAdmin) {
      router.push('/dashboard');
    }
  }, [isAdmin, loading, router]);

  if (loading || !isAdmin) return null;

  const systemMetrics = [
    { label: 'CPU Usage', value: '42%', icon: Cpu, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { label: 'Memory', value: '8.4 GB', icon: Server, color: 'text-violet-500', bg: 'bg-violet-100 dark:bg-violet-900/30' },
    { label: 'Active Sessions', value: '1,204', icon: Users, color: 'text-emerald-500', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
    { label: 'Model Accuracy', value: '97.97%', icon: Activity, color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-900/30' },
  ];

  const recentLogs = [
    { id: 1, type: 'DDoS', ip: '192.168.1.105', time: '2 mins ago', status: 'Blocked', severity: 'High' },
    { id: 2, type: 'Port Scan', ip: '10.0.0.45', time: '15 mins ago', status: 'Logged', severity: 'Low' },
    { id: 3, type: 'Brute Force', ip: '172.16.0.2', time: '1 hour ago', status: 'Blocked', severity: 'Critical' },
    { id: 4, type: 'Normal Traffic', ip: '192.168.1.50', time: '1 hour ago', status: 'Allowed', severity: 'Info' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Control Panel</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">System overview and threat monitoring</p>
        </div>
        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">System Online</span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systemMetrics.map((metric, i) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${metric.bg}`}>
                  <Icon className={`h-6 w-6 ${metric.color}`} />
                </div>
                <ArrowUpRight className="h-5 w-5 text-gray-400" />
              </div>
              <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">{metric.label}</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{metric.value}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Threat Logs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden"
        >
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Live Threat Logs</h2>
            <button className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900/50">
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Threat Type</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Source IP</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Time</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {recentLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {log.severity === 'Critical' || log.severity === 'High' ? (
                          <AlertTriangle className="h-4 w-4 text-red-500" />
                        ) : (
                          <Shield className="h-4 w-4 text-blue-500" />
                        )}
                        <span className="font-medium text-gray-900 dark:text-gray-100">{log.type}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400 font-mono text-sm">{log.ip}</td>
                    <td className="px-6 py-4 text-gray-500 dark:text-gray-500 text-sm">{log.time}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        log.status === 'Blocked' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                        log.status === 'Allowed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}>
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* System Status Sidebar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-6"
        >
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Database Health</h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-400">PostgreSQL Primary</span>
                <span className="font-medium text-emerald-600 dark:text-emerald-400">Healthy</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-400">Redis Cache</span>
                <span className="font-medium text-emerald-600 dark:text-emerald-400">Healthy</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  Generate Report
                </button>
                <button className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  Update Model Weights
                </button>
                <button className="w-full px-4 py-2 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/50 rounded-xl text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors">
                  Purge Cache
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
