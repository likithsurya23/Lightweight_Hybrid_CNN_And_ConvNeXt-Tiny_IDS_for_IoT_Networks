import React, { useState, useEffect } from 'react';
import { predictionService } from "../../services/api";
import Alert from "../../components/Alert/Alert";
import {
  Send,
  RefreshCw,
  Target,
  Shield,
  AlertTriangle,
  CheckCircle,
  Activity,
  Cpu,
  Zap,
  Download,
  Info,
  FileText,
  Copy,
  Check,
  Hash
} from 'lucide-react';

const SinglePrediction = () => {
  const [features, setFeatures] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const exampleFeatures = "0,	0, 47	,64	,45.13537479,	45.13537479	,0	,0,	0	,0	,0,	0	,0	,0,	0,	0,	0,	0,	0,	0,	0	,0	,0,	0	,0	,0,	0,	0,	0,	0,	0,	1,	1,	6216,	592,	592,	592	,0	,592	,83698590.52,	9.5	,34.40930107,	0,	0,	0	,141.55	";

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handlePredict = async () => {
    if (!features.trim()) {
      setError('Please enter feature values');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Convert comma-separated string to array of numbers
      const featureArray = features.split(',').map(Number);

      // Validate input
      if (featureArray.some(isNaN)) {
        throw new Error('Please enter valid numbers separated by commas');
      }

      // Check if we have exactly 46 features
      if (featureArray.length !== 46) {
        throw new Error(`Expected exactly 46 features, got ${featureArray.length}`);
      }

      const result = await predictionService.predictSingle(featureArray);
      setPrediction(result);
    } catch (err) {
      setError(err.message || 'Prediction failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFeatures('');
    setPrediction(null);
    setError(null);
  };

  const handleExample = () => {
    setFeatures(exampleFeatures);
    setPrediction(null);
    setError(null);
  };

  const handleCopyExample = () => {
    navigator.clipboard.writeText(exampleFeatures);
    setCopied(true);
  };

  const getAttackSeverity = (attackType) => {
    const severityLevels = {
      'DDoS': { level: 'Critical', color: 'bg-red-500', icon: AlertTriangle },
      'DoS': { level: 'High', color: 'bg-orange-500', icon: AlertTriangle },
      'BruteForce': { level: 'High', color: 'bg-orange-500', icon: Shield },
      'PortScan': { level: 'Medium', color: 'bg-yellow-500', icon: Activity },
      'WebAttack': { level: 'Medium', color: 'bg-yellow-500', icon: Shield },
      'Botnet': { level: 'Medium', color: 'bg-yellow-500', icon: Cpu },
      'Normal': { level: 'Safe', color: 'bg-green-500', icon: CheckCircle }
    };

    for (const [key, value] of Object.entries(severityLevels)) {
      if (attackType.includes(key)) {
        return value;
      }
    }

    return { level: 'Unknown', color: 'bg-gray-500', icon: Info };
  };

  const formatConfidence = (confidence) => {
    if (confidence >= 0.95) return 'Very High';
    if (confidence >= 0.85) return 'High';
    if (confidence >= 0.70) return 'Medium';
    if (confidence >= 0.50) return 'Low';
    return 'Very Low';
  };

  const featureCount = features ? features.split(',').length : 0;
  const isFeatureCountValid = featureCount === 46;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 p-8 text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
              <Target className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Attack Prediction</h1>
              <p className="text-blue-100 mt-2 flex items-center gap-2">

                46 Feature Input Analysis
              </p>
            </div>
          </div>
          <p className="text-blue-100 text-lg max-w-3xl">
            Analyze individual network traffic samples with our hybrid CNN & ConvNeXt-Tiny IDS model
          </p>
        </div>
      </div>

      {error && (
        <div className="animate-in slide-in-from-top">
          <Alert type="error" message={error} onClose={() => setError(null)} />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    Input Features
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Enter exactly 46 normalized feature values separated by commas
                  </p>
                </div>
                <div className={`px-4 py-2 rounded-full font-semibold ${isFeatureCountValid
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                  : featureCount > 46
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                    : 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300'
                  }`}>
                  {featureCount}/46 features
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Feature Values (comma-separated)
                  </label>
                  {featureCount > 0 && (
                    <span className={`text-sm px-3 py-1 rounded-full ${isFeatureCountValid ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400' : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                      }`}>
                      {isFeatureCountValid ? '✓ Valid count' : `✗ Need ${46 - featureCount} more`}
                    </span>
                  )}
                </div>

                <div className="relative">
                  <textarea
                    value={features}
                    onChange={(e) => setFeatures(e.target.value)}
                    placeholder="e.g., -0.5,1.2,0.3,-1.8,0.7,-0.2,1.5,-0.9,0.4,-1.1..."
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[140px] font-mono text-sm transition-all duration-200 dark:bg-gray-800 dark:text-gray-100 ${!isFeatureCountValid && featureCount > 0
                      ? 'border-red-300 bg-red-50/50 dark:border-red-500/50 dark:bg-red-900/20'
                      : 'border-gray-300 dark:border-gray-700'
                      }`}
                    rows={5}
                  />
                  <div className="absolute bottom-3 right-3 flex gap-2">
                    {features && (
                      <button
                        onClick={() => setFeatures('')}
                        className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
                        title="Clear all"
                      >
                        <RefreshCw className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    <p className="font-medium mb-1">Format Requirements:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Exactly 46 comma-separated values</li>
                      <li>Normalized between -1 and 1</li>
                      <li>Example: -0.5,1.2,0.3,... (46 values total)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handlePredict}
                  disabled={loading || !features.trim() || !isFeatureCountValid}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 group"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="h-5 w-5 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      <span>Run Prediction</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleExample}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 flex items-center gap-3"
                >
                  <Download className="h-5 w-5" />
                  <span>Load Example</span>
                </button>

                <button
                  onClick={handleCopyExample}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 flex items-center gap-3"
                >
                  {copied ? (
                    <>
                      <Check className="h-5 w-5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-5 w-5" />
                      <span>Copy Example</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 flex items-center gap-3"
                >
                  <RefreshCw className="h-5 w-5" />
                  <span>Reset All</span>
                </button>
              </div>

              {/* Quick Stats */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">46</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Features Required</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">97.97%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Model Accuracy</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">14</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Attack Types</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">45ms</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Response Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions & Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-blue-100 dark:border-gray-700 p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                How to Use
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">1</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Enter exactly 46 normalized feature values separated by commas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">2</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Ensure count shows "46/46 features" in green</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">3</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Click "Run Prediction" to analyze the sample</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-violet-100 dark:border-gray-700 p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <Zap className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                Feature Details
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Feature Count</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">46</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Normalization</span>
                  <span className="font-bold text-green-600 dark:text-green-400">-1 to 1</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Model Input</span>
                  <span className="font-bold text-purple-600 dark:text-purple-400">1D → 2D</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                46 statistical features extracted from network traffic flows
              </p>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                Prediction Results
              </h2>
            </div>

            <div className="p-6">
              {prediction ? (
                <div className="space-y-8 animate-in slide-in-from-bottom">
                  {/* Attack Type */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl ${getAttackSeverity(prediction.prediction).color}/10`}>
                        {React.createElement(getAttackSeverity(prediction.prediction).icon, {
                          className: `h-8 w-8 ${getAttackSeverity(prediction.prediction).color}`
                        })}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Classification</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{prediction.prediction}</p>
                      </div>
                    </div>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-800">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Severity: <span className="font-bold">{getAttackSeverity(prediction.prediction).level}</span>
                      </span>
                    </div>
                  </div>

                  {/* Confidence Score */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Confidence Score</span>
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                        {formatConfidence(prediction.confidence)}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                          {(prediction.confidence * 100).toFixed(2)}%
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {prediction.confidence > 0.9 ? '🎯 High Precision' :
                            prediction.confidence > 0.7 ? '⚡ Good Confidence' : '⚠️ Review Needed'}
                        </span>
                      </div>

                      <div className="relative pt-2">
                        <div className="overflow-hidden h-3 text-xs flex rounded-full bg-gradient-to-r from-gray-200 to-gray-300">
                          <div
                            style={{ width: `${prediction.confidence * 100}%` }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 transition-all duration-1000 ease-out"
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>0%</span>
                          <span>50%</span>
                          <span>100%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interpretation */}
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-800 space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        Security Assessment
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {prediction.prediction === 'Normal'
                          ? '✅ No malicious activity detected. This network traffic appears normal and does not require immediate action.'
                          : '⚠️ Potential security threat detected. Immediate investigation and response recommended.'}
                      </p>
                    </div>

                    {/* Recommendations */}
                    {prediction.prediction !== 'Normal' && (
                      <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                        <h4 className="font-semibold text-red-800 mb-2">Recommended Actions:</h4>
                        <ul className="space-y-2 text-sm text-red-700">
                          <li className="flex items-start gap-2">
                            <span className="mt-1">•</span>
                            <span>Isolate affected network segments</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1">•</span>
                            <span>Review firewall and security logs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-1">•</span>
                            <span>Notify security team for further analysis</span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Feature Analysis */}
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Feature Analysis</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                        <div className="text-gray-600 dark:text-gray-400">Input Features</div>
                        <div className="font-bold dark:text-white">46 values</div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                        <div className="text-gray-600 dark:text-gray-400">Model Input</div>
                        <div className="font-bold dark:text-white">1×46 tensor</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-blue-100 to-violet-100 dark:from-blue-900 dark:to-violet-900 flex items-center justify-center mb-6">
                    <Target className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Awaiting Analysis
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-sm mx-auto mb-6">
                    Enter exactly 46 feature values and run prediction to see detailed security analysis
                  </p>
                  <div className="space-y-3">
                    <button
                      onClick={handleExample}
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center justify-center gap-2 mx-auto"
                    >
                      <Download className="h-4 w-4" />
                      Try with 46-feature example
                    </button>
                    <div className="text-xs text-gray-500">
                      Example contains exactly 46 normalized values
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SinglePrediction;