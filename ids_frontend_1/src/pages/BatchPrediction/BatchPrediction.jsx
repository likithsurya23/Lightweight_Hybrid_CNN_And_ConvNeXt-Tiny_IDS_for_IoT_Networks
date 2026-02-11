import React, { useState, useRef, useEffect } from "react";
import { predictionService } from "../../services/api";
import {
  Upload,
  BarChart3,
  Shield,
  Activity,
  Cpu,
  Zap,
  CheckCircle,
  Database,
  Download,
  AlertTriangle,
  FileText,
  TrendingUp,
  PieChart as PieChartIcon,
  Clock,
  Server,
  RefreshCw
} from "lucide-react";
import Alert from "../../components/Alert/Alert";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area
} from "recharts";

const BatchPrediction = () => {
  const [file, setFile] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [predictionHistory, setPredictionHistory] = useState([]);
  const [detailedResults, setDetailedResults] = useState([]);
  const fileInputRef = useRef(null);

  // Load prediction history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem("predictionHistory");
    if (savedHistory) {
      setPredictionHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Save prediction history to localStorage whenever it changes
  useEffect(() => {
    if (predictionHistory.length > 0) {
      localStorage.setItem("predictionHistory", JSON.stringify(predictionHistory));
    }
  }, [predictionHistory]);

  // Simulate progress during loading
  useEffect(() => {
    let interval;
    if (loading) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 95) {
            clearInterval(interval);
            return 95;
          }
          return prev + 5;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [loading]);

  // Reset function to clear everything and allow re-upload
  const handleReset = () => {
    setFile(null);
    setStats(null);
    setError(null);
    setDetailedResults([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleFileUpload = async (event) => {
    const uploadedFile = event.target.files[0];
    if (!uploadedFile) return;

    const isValidCSV =
      uploadedFile.type === "text/csv" ||
      uploadedFile.name.toLowerCase().endsWith(".csv");

    if (!isValidCSV) {
      setError("Please upload a valid CSV file (.csv)");
      // Clear the file input
      event.target.value = '';
      return;
    }

    setFile(uploadedFile);
    setError(null);
    setLoading(true);
    setProgress(0);

    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 95) {
            clearInterval(progressInterval);
            return 95;
          }
          return prev + 5;
        });
      }, 100);

      const result = await predictionService.predictBatchFile(uploadedFile);
      
      clearInterval(progressInterval);
      setProgress(100);
      setStats(result);
      
      // Process detailed results for per-sample analysis
      if (result.predictions) {
        const detailed = result.predictions.map((pred, index) => ({
          id: index + 1,
          sample: `Sample ${index + 1}`,
          prediction: pred.prediction,
          confidence: parseFloat((pred.confidence * 100).toFixed(2)),
          attackType: pred.prediction !== "Normal" ? pred.prediction : "Normal",
          timestamp: new Date().toISOString()
        }));
        setDetailedResults(detailed);
      }

      // Add to history
      const newHistoryEntry = { 
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        total: result.total_samples, 
        attacks: result.attack_count,
        normal: result.normal_count,
        filename: uploadedFile.name,
        detectionRate: parseFloat(((result.attack_count / result.total_samples) * 100).toFixed(1))
      };
      
      const newHistory = [newHistoryEntry, ...predictionHistory].slice(0, 10); // Keep last 10 entries
      setPredictionHistory(newHistory);
      
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Batch prediction failed");
      // Clear file on error
      setFile(null);
      event.target.value = '';
    } finally {
      setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 300);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const uploadedFile = e.dataTransfer.files[0];
    if (!uploadedFile) return;

    const isValidCSV =
      uploadedFile.type === "text/csv" ||
      uploadedFile.name.toLowerCase().endsWith(".csv");

    if (!isValidCSV) {
      setError("Please upload a valid CSV file (.csv)");
      return;
    }

    setFile(uploadedFile);
    setError(null);
    setLoading(true);
    setProgress(0);

    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 95) {
            clearInterval(progressInterval);
            return 95;
          }
          return prev + 5;
        });
      }, 100);

      const result = await predictionService.predictBatchFile(uploadedFile);
      
      clearInterval(progressInterval);
      setProgress(100);
      setStats(result);
      
      // Process detailed results
      if (result.predictions) {
        const detailed = result.predictions.map((pred, index) => ({
          id: index + 1,
          sample: `Sample ${index + 1}`,
          prediction: pred.prediction,
          confidence: parseFloat((pred.confidence * 100).toFixed(2)),
          attackType: pred.prediction !== "Normal" ? pred.prediction : "Normal",
          timestamp: new Date().toISOString()
        }));
        setDetailedResults(detailed);
      }

      // Add to history
      const newHistoryEntry = { 
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        total: result.total_samples, 
        attacks: result.attack_count,
        normal: result.normal_count,
        filename: uploadedFile.name,
        detectionRate: parseFloat(((result.attack_count / result.total_samples) * 100).toFixed(1))
      };
      
      const newHistory = [newHistoryEntry, ...predictionHistory].slice(0, 10);
      setPredictionHistory(newHistory);
      
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Batch prediction failed");
      setFile(null);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 300);
    }
  };

  const getAttackIcon = (attack) => {
    const attackIcons = {
      "DDoS": Shield,
      "PortScan": Activity,
      "Botnet": Cpu,
      "BruteForce": Zap,
      "Malware": AlertTriangle,
      "SQL Injection": Server,
      "Normal": CheckCircle
    };

    for (const [key, icon] of Object.entries(attackIcons)) {
      if (attack.toLowerCase().includes(key.toLowerCase())) {
        return icon;
      }
    }
    return AlertTriangle;
  };

  const getAttackColor = (attack) => {
    const attackColors = {
      "DDoS": "#EF4444", // Red
      "PortScan": "#3B82F6", // Blue
      "Botnet": "#8B5CF6", // Purple
      "BruteForce": "#F59E0B", // Amber
      "Malware": "#10B981", // Emerald
      "Normal": "#6B7280", // Gray
      "Other": "#9CA3AF" // Gray-400
    };

    for (const [key, color] of Object.entries(attackColors)) {
      if (attack.toLowerCase().includes(key.toLowerCase())) {
        return color;
      }
    }
    return attackColors.Other;
  };

  const prepareAttackDistributionData = () => {
    if (!stats?.top_attacks) return [];
    
    return stats.top_attacks.map(item => ({
      name: item.attack,
      count: item.count,
      percentage: parseFloat(item.percentage),
      color: getAttackColor(item.attack)
    }));
  };

  const prepareTrafficOverviewData = () => {
    if (!stats) return [];
    
    return [
      { name: "Normal Traffic", value: stats.normal_count, color: "#10B981" },
      { name: "Attack Traffic", value: stats.attack_count, color: "#EF4444" }
    ];
  };

  const prepareConfidenceDistributionData = () => {
    if (!detailedResults.length) return [];
    
    // Group confidence scores into ranges
    const ranges = [
      { range: "90-100%", min: 90, max: 100, count: 0 },
      { range: "80-89%", min: 80, max: 89, count: 0 },
      { range: "70-79%", min: 70, max: 79, count: 0 },
      { range: "60-69%", min: 60, max: 69, count: 0 },
      { range: "Below 60%", min: 0, max: 59, count: 0 }
    ];
    
    detailedResults.forEach(result => {
      for (const range of ranges) {
        if (result.confidence >= range.min && result.confidence <= range.max) {
          range.count++;
          break;
        }
      }
    });
    
    return ranges.map(range => ({
      name: range.range,
      count: range.count,
      color: range.min >= 90 ? "#10B981" : 
             range.min >= 80 ? "#22C55E" : 
             range.min >= 70 ? "#F59E0B" : 
             range.min >= 60 ? "#F97316" : "#EF4444"
    }));
  };

  const prepareTimeSeriesData = () => {
    if (!detailedResults.length) return [];
    
    // Group by time intervals for the last 100 samples
    const recentSamples = detailedResults.slice(0, 100);
    const timeSeries = [];
    
    // Create time intervals
    const intervalSize = Math.ceil(recentSamples.length / 10);
    for (let i = 0; i < recentSamples.length; i += intervalSize) {
      const chunk = recentSamples.slice(i, i + intervalSize);
      const attackCount = chunk.filter(s => s.prediction !== "Normal").length;
      const normalCount = chunk.filter(s => s.prediction === "Normal").length;
      
      timeSeries.push({
        time: `Batch ${Math.floor(i/intervalSize) + 1}`,
        attacks: attackCount,
        normal: normalCount,
        total: chunk.length
      });
    }
    
    return timeSeries;
  };

  const handleDownloadResults = () => {
    if (!stats) return;
    
    const csvContent = `data:text/csv;charset=utf-8,Batch Prediction Results\n\nTotal Samples,${stats.total_samples}\nNormal Traffic,${stats.normal_count}\nAttacks Detected,${stats.attack_count}\nDetection Rate,${((stats.attack_count / stats.total_samples) * 100).toFixed(2)}%\n\nAttack Type,Count,Percentage\n${stats.top_attacks.map(a => `${a.attack},${a.count},${a.percentage}%`).join('\n')}`;
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `batch_prediction_results_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClearHistory = () => {
    setPredictionHistory([]);
    localStorage.removeItem("predictionHistory");
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat().format(num);
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 text-white shadow-xl"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
              <Database className="h-10 w-10" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Batch Attack Analytics</h1>
              <p className="text-indigo-100 mt-2">
                Upload CSV to analyze network traffic patterns and detect threats
              </p>
            </div>
          </div>
          {stats && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={handleDownloadResults}
              className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm transition-colors"
            >
              <Download className="h-5 w-5" />
              Export Results
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <Alert type="error" message={error} onClose={() => setError(null)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upload Section */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm"
      >
        <div
          className="border-3 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-indigo-400 transition-colors bg-gray-50/50 cursor-pointer"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => !loading && fileInputRef.current?.click()}
        >
          <div className="mb-6">
            <Upload className="mx-auto h-16 w-16 text-indigo-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">
              {loading ? "Processing..." : "Upload CSV File"}
            </h3>
            <p className="text-gray-600 mb-6">
              Drag & drop your CSV file here or click to browse
            </p>
            
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation(); // Prevent event from bubbling up to parent
                if (!loading) {
                  fileInputRef.current?.click();
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg cursor-pointer hover:opacity-90 transition-opacity shadow-md"
            >
              <FileText className="h-5 w-5" />
              Choose File
            </button>
            
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>

          {file && !loading && (
            <div className="mt-6 p-4 bg-indigo-50 rounded-lg inline-block">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-indigo-600" />
                <span className="font-medium">{file.name}</span>
                <span className="text-sm text-gray-500">
                  ({(file.size / 1024).toFixed(2)} KB)
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        {loading && (
          <div className="mt-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Processing file...</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        )}

        {/* Add Reset Button */}
        {file && !loading && (
          <div className="mt-4 text-center">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-red-600 transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
              Upload different file
            </button>
          </div>
        )}
      </motion.div>

      {/* Results Section */}
      {stats && (
        <div className="space-y-8">
          {/* Summary Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Total Samples</p>
                  <p className="text-3xl font-bold mt-2">{formatNumber(stats.total_samples)}</p>
                </div>
                <Database className="h-8 w-8 opacity-80" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm">Normal Traffic</p>
                  <p className="text-3xl font-bold mt-2">{formatNumber(stats.normal_count)}</p>
                </div>
                <CheckCircle className="h-8 w-8 opacity-80" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-100 text-sm">Attacks Detected</p>
                  <p className="text-3xl font-bold mt-2">{formatNumber(stats.attack_count)}</p>
                </div>
                <AlertTriangle className="h-8 w-8 opacity-80" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Detection Rate</p>
                  <p className="text-3xl font-bold mt-2">
                    {((stats.attack_count / stats.total_samples) * 100).toFixed(1)}%
                  </p>
                </div>
                <Activity className="h-8 w-8 opacity-80" />
              </div>
            </div>
          </motion.div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Attack Distribution Bar Chart */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-7 w-7 text-indigo-600" />
                  <h2 className="text-2xl font-bold">Attack Distribution</h2>
                </div>
                <div className="text-sm text-gray-500">
                  Total Attacks: {formatNumber(stats.attack_count)}
                </div>
              </div>

              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={prepareAttackDistributionData()}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis 
                      dataKey="name" 
                      stroke="#6B7280"
                      fontSize={12}
                      tickLine={false}
                      angle={-45}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis 
                      stroke="#6B7280"
                      fontSize={12}
                      tickLine={false}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white',
                        border: '1px solid #E5E7EB',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                      formatter={(value, name) => [name === 'count' ? formatNumber(value) : `${value}%`, name === 'count' ? 'Count' : 'Percentage']}
                      labelFormatter={(label) => `Attack Type: ${label}`}
                    />
                    <Legend />
                    <Bar 
                      dataKey="count" 
                      name="Attack Count" 
                      radius={[4, 4, 0, 0]}
                      maxBarSize={50}
                    >
                      {prepareAttackDistributionData().map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Traffic Overview Pie Chart */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <PieChartIcon className="h-7 w-7 text-indigo-600" />
                  <h2 className="text-2xl font-bold">Traffic Overview</h2>
                </div>
                <div className="text-sm text-gray-500">
                  Total: {formatNumber(stats.total_samples)}
                </div>
              </div>

              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={prepareTrafficOverviewData()}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {prepareTrafficOverviewData().map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [formatNumber(value), 'Samples']}
                      contentStyle={{ 
                        backgroundColor: 'white',
                        border: '1px solid #E5E7EB',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Confidence Distribution */}
            {detailedResults.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-7 w-7 text-indigo-600" />
                    <h2 className="text-2xl font-bold">Confidence Distribution</h2>
                  </div>
                  <div className="text-sm text-gray-500">
                    Samples: {formatNumber(detailedResults.length)}
                  </div>
                </div>

                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={prepareConfidenceDistributionData()}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis 
                        dataKey="name" 
                        stroke="#6B7280"
                        fontSize={12}
                        tickLine={false}
                      />
                      <YAxis 
                        stroke="#6B7280"
                        fontSize={12}
                        tickLine={false}
                      />
                      <Tooltip 
                        formatter={(value) => [formatNumber(value), 'Samples']}
                        contentStyle={{ 
                          backgroundColor: 'white',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px'
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="count" 
                        name="Samples" 
                        stroke="#3B82F6" 
                        fill="#3B82F6"
                        fillOpacity={0.3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            )}

            {/* Time Series Analysis */}
            {detailedResults.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-7 w-7 text-indigo-600" />
                    <h2 className="text-2xl font-bold">Time Series Analysis</h2>
                  </div>
                  <div className="text-sm text-gray-500">
                    Last {Math.min(100, detailedResults.length)} samples
                  </div>
                </div>

                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={prepareTimeSeriesData()}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis 
                        dataKey="time" 
                        stroke="#6B7280"
                        fontSize={12}
                        tickLine={false}
                      />
                      <YAxis 
                        stroke="#6B7280"
                        fontSize={12}
                        tickLine={false}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px'
                        }}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="attacks" 
                        name="Attack Samples" 
                        stroke="#EF4444" 
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="normal" 
                        name="Normal Samples" 
                        stroke="#10B981" 
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            )}
          </div>

          {/* Top Attacks List */}
          {stats?.top_attacks && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Activity className="h-7 w-7 text-indigo-600" />
                Attack Type Details
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">Attack Type</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">Count</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">Percentage</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">Distribution</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">Severity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.top_attacks.map((attack, index) => {
                      const Icon = getAttackIcon(attack.attack);
                      const color = getAttackColor(attack.attack);
                      const percentage = parseFloat(attack.percentage);
                      const severity = percentage > 30 ? "High" : percentage > 10 ? "Medium" : "Low";
                      
                      return (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-md" style={{ backgroundColor: color + '20' }}>
                                <Icon className="h-5 w-5" style={{ color }} />
                              </div>
                              <span className="font-medium">{attack.attack}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 font-semibold">{formatNumber(attack.count)}</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <span className="font-semibold">{attack.percentage}%</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full rounded-full"
                                style={{ 
                                  width: `${percentage}%`,
                                  backgroundColor: color
                                }}
                              />
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              severity === "High" ? "bg-red-100 text-red-800" :
                              severity === "Medium" ? "bg-amber-100 text-amber-800" :
                              "bg-emerald-100 text-emerald-800"
                            }`}>
                              {severity}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Prediction History */}
      {predictionHistory.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Clock className="h-7 w-7 text-indigo-600" />
              <h2 className="text-2xl font-bold">Recent Predictions</h2>
            </div>
            <button
              onClick={handleClearHistory}
              className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 hover:text-red-600 transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
              Clear History
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-600 font-medium">Date & Time</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-medium">File</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-medium">Total Samples</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-medium">Normal</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-medium">Attacks</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-medium">Detection Rate</th>
                </tr>
              </thead>
              <tbody>
                {predictionHistory.map((entry, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4">
                      <div>
                        <div className="font-medium">{entry.date}</div>
                        <div className="text-sm text-gray-500">{entry.time}</div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-gray-400" />
                        <span className="truncate max-w-[200px]" title={entry.filename}>
                          {entry.filename}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-semibold">{formatNumber(entry.total)}</td>
                    <td className="py-4 px-4">
                      <span className="text-emerald-600 font-semibold">{formatNumber(entry.normal)}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-red-600 font-semibold">{formatNumber(entry.attacks)}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <span className={`font-bold ${
                          entry.detectionRate > 30 ? 'text-red-600' :
                          entry.detectionRate > 10 ? 'text-amber-600' : 'text-emerald-600'
                        }`}>
                          {entry.detectionRate}%
                        </span>
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full"
                            style={{ 
                              width: `${Math.min(100, entry.detectionRate)}%`,
                              backgroundColor: entry.detectionRate > 30 ? '#EF4444' :
                                              entry.detectionRate > 10 ? '#F59E0B' : '#10B981'
                            }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BatchPrediction;