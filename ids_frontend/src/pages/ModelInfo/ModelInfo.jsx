import React from 'react';
import {
  Cpu,
  Database,
  Zap,
  Layers,
  BarChart,
  Shield,
  Network,
  GitBranch,
  Cpu as CpuIcon,
  HardDrive,
  Server,
  Clock,
  Code,
  Brain,
  FileCode,
  Activity
} from 'lucide-react';

const ModelInfo = () => {
  // Updated metrics with your values
  const performanceMetrics = [
    { name: 'Accuracy', value: 97.9, color: 'emerald', icon: Shield, description: 'Overall classification accuracy across all attack types' },
    { name: 'Precision', value: 97.8, color: 'blue', icon: Cpu, description: 'Attack detection precision (positive predictive value)' },
    { name: 'Recall', value: 97.9, color: 'violet', icon: Activity, description: 'Attack detection recall (true positive rate)' },
    { name: 'F1 Score', value: 97.7, color: 'amber', icon: BarChart, description: 'Harmonic mean of precision and recall' },
    { name: 'Inference Time', value: 0.045, suffix: 's', color: 'indigo', icon: Clock, description: 'Average prediction time per sample' },
    { name: 'Model Size', value: 28, suffix: 'MB', color: 'rose', icon: HardDrive, description: 'Compressed model file size' },
  ];

  const architectureLayers = [
    {
      name: 'Input Processing',
      components: ['Feature Normalization', 'Feature Scaling', 'Missing Value Imputation'],
      icon: FileCode,
      color: 'blue'
    },
    {
      name: 'CNN Feature Extraction',
      components: ['3x Conv1D Layers', 'Batch Normalization', 'ReLU Activation', 'Max Pooling'],
      icon: Network,
      color: 'emerald'
    },
    {
      name: 'ConvNeXt-Tiny Blocks',
      components: ['4x ConvNeXt Stages', 'Depthwise Convolution', 'Layer Scaling', 'Stochastic Depth'],
      icon: Brain,
      color: 'violet'
    },
    {
      name: 'Attention Mechanism',
      components: ['Multi-Head Self-Attention', 'Positional Encoding', 'Attention Weights'],
      icon: GitBranch,
      color: 'amber'
    },
    {
      name: 'Feature Fusion',
      components: ['Global Average Pooling', 'Feature Concatenation', 'Dropout (0.3)'],
      icon: Network,
      color: 'indigo'
    },
    {
      name: 'Classification Head',
      components: ['Dense Layers (512→256)', 'Batch Normalization', 'Softmax Activation'],
      icon: CpuIcon,
      color: 'rose'
    },
  ];

  const technicalSpecs = [
    { label: 'Framework', value: 'PyTorch 2.0 + ONNX Runtime', icon: Code },
    { label: 'Training Time', value: '9.5 hours (4x RTX 4090)', icon: Clock },
    { label: 'Parameters', value: '5.8 million', icon: Server },
    { label: 'Input Features', value: '46 network features', icon: Database },
    { label: 'Output Classes', value: '15 (14 attacks + normal)', icon: Shield },
    { label: 'Optimizer', value: 'AdamW (LR: 1e-4)', icon: Zap },
  ];

  const attackCategories = [
    { name: 'DDoS-RSTFINFlood', type: 'Volume-based', severity: 'Critical', color: 'red' },
    { name: 'DoS-SlowHTTPTest', type: 'Application', severity: 'High', color: 'orange' },
    { name: 'DDoS-UDPFlood', type: 'Volume-based', severity: 'Critical', color: 'red' },
    { name: 'BruteForce-Web', type: 'Credential', severity: 'High', color: 'orange' },
    { name: 'BruteForce-XSS', type: 'Injection', severity: 'High', color: 'orange' },
    { name: 'SQL Injection', type: 'Injection', severity: 'Critical', color: 'red' },
    { name: 'Infiltration', type: 'Malware', severity: 'High', color: 'orange' },
    { name: 'Botnet', type: 'Malware', severity: 'Critical', color: 'red' },
    { name: 'PortScan', type: 'Reconnaissance', severity: 'Medium', color: 'yellow' },
    { name: 'DoS-SynFlood', type: 'Protocol', severity: 'High', color: 'orange' },
    { name: 'DoS-HTTPFlood', type: 'Application', severity: 'High', color: 'orange' },
    { name: 'Fingerprinting', type: 'Reconnaissance', severity: 'Medium', color: 'yellow' },
    { name: 'MITM', type: 'Man-in-the-Middle', severity: 'High', color: 'orange' },
    { name: 'Backdoor', type: 'Malware', severity: 'Critical', color: 'red' },
  ];

  const colorClasses = {
    emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 border-blue-200 dark:border-blue-800',
    violet: 'bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-400 border-violet-200 dark:border-violet-800',
    amber: 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 border-amber-200 dark:border-amber-800',
    indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800',
    rose: 'bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-400 border-rose-200 dark:border-rose-800',
    red: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400',
    orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400',
    yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400',
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 p-8 text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
              <Brain className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Hybrid CNN & ConvNeXt-Tiny IDS
            </h1>
          </div>
          <p className="text-blue-100 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Advanced intrusion detection system combining spatial CNN patterns with hierarchical ConvNeXt features
            for state-of-the-art accuracy and efficiency
          </p>
        </div>
      </div>

      {/* Performance Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {performanceMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className={`card border ${colorClasses[metric.color]}`}>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-white/50 dark:bg-gray-900/50">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/50 dark:bg-gray-900/50">
                  {metric.name}
                </span>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1 dark:text-white">
                  {metric.value}{metric.suffix || '%'}
                </div>
                <p className="text-xs text-muted-foreground dark:text-gray-400">
                  {metric.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Architecture Overview */}
      <div className="card dark:bg-gray-900 dark:border-gray-800">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-primary/10 dark:bg-blue-900/20">
              <Brain className="h-7 w-7 text-primary dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold dark:text-white">Hybrid Architecture Design</h2>
              <p className="text-muted-foreground dark:text-gray-400">
                CNN for spatial patterns + ConvNeXt for hierarchical features
              </p>
            </div>
          </div>
        </div>

        {/* Architecture Tree Structure */}
        <div className="card">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
            </div>
          </div>

          {/* Tree Visualization */}
          <div className="relative min-h-[600px]">
            {/* Central trunk line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent -translate-x-1/2 -z-10"></div>

            {/* Tree Structure */}
            <div className="relative">
              {/* Level 1: Input Processing (Root) */}
              <div className="flex justify-center mb-12">
                <div className={`relative p-6 rounded-2xl ${colorClasses.blue} border-2 shadow-lg w-64`}>
                  <div className="flex items-center gap-3 mb-3">
                    <FileCode className="h-6 w-6" />
                    <h3 className="text-xl font-bold">Input Processing</h3>
                  </div>
                  <p className="text-sm mb-4">Feature normalization & scaling</p>

                  {/* Branches to level 2 */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-0 h-6 border-l-2 border-dashed border-primary/50"></div>
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-16">
                      <div className="w-16 h-0 border-t-2 border-dashed border-primary/50"></div>
                      <div className="w-16 h-0 border-t-2 border-dashed border-primary/50"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Level 2: Feature Extraction (Two branches) */}
              <div className="flex justify-around mb-12">
                {/* CNN Branch */}
                <div className="relative">
                  <div className={`p-5 rounded-xl ${colorClasses.emerald} border shadow-md w-56`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Network className="h-5 w-5" />
                      <h4 className="font-bold">CNN Feature Extractor</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs bg-white/50 dark:bg-gray-900/50 p-2 rounded">3x Conv1D Layers</div>
                      <div className="text-xs bg-white/50 dark:bg-gray-900/50 p-2 rounded">Batch Normalization</div>
                      <div className="text-xs bg-white/50 dark:bg-gray-900/50 p-2 rounded">Max Pooling</div>
                    </div>

                    {/* Branch to level 3 */}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-0 h-6 border-l-2 border-dashed border-primary/50"></div>
                    </div>
                  </div>
                </div>

                {/* ConvNeXt Branch */}
                <div className="relative">
                  <div className={`p-5 rounded-xl ${colorClasses.violet} border shadow-md w-56`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="h-5 w-5" />
                      <h4 className="font-bold">ConvNeXt-Tiny Blocks</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs bg-white/50 dark:bg-gray-900/50 p-2 rounded">4x ConvNeXt Stages</div>
                      <div className="text-xs bg-white/50 dark:bg-gray-900/50 p-2 rounded">Depthwise Conv</div>
                      <div className="text-xs bg-white/50 dark:bg-gray-900/50 p-2 rounded">Layer Scaling</div>
                    </div>

                    {/* Branch to level 3 */}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-0 h-6 border-l-2 border-dashed border-primary/50"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Level 3: Feature Fusion (Coming together) */}
              <div className="flex justify-center mb-12">
                <div className="relative">
                  {/* Connecting lines from level 2 to level 3 */}
                  <div className="absolute -top-6 left-0 right-0 flex justify-between px-16">
                    <div className="w-16 h-0 border-t-2 border-dashed border-primary/50"></div>
                    <div className="w-16 h-0 border-t-2 border-dashed border-primary/50"></div>
                  </div>

                  <div className={`p-6 rounded-xl ${colorClasses.indigo} border-2 shadow-lg w-72`}>
                    <div className="flex items-center gap-3 mb-3">
                      <GitBranch className="h-6 w-6" />
                      <h3 className="text-xl font-bold">Feature Fusion Layer</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-xs bg-white/50 dark:bg-gray-900/50 p-2 rounded">Global Pooling</div>
                      <div className="text-xs bg-white/50 dark:bg-gray-900/50 p-2 rounded">Concatenation</div>
                      <div className="text-xs bg-white/50 dark:bg-gray-900/50 p-2 rounded">Dropout (0.3)</div>
                      <div className="text-xs bg-white/50 dark:bg-gray-900/50 p-2 rounded">Attention Weights</div>
                    </div>

                    {/* Branch to level 4 */}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-0 h-6 border-l-2 border-primary/50"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Level 4: Classification Head (Final) */}
              <div className="flex justify-center">
                <div className={`p-6 rounded-2xl ${colorClasses.rose} border-2 shadow-lg w-64`}>
                  <div className="flex items-center gap-3 mb-3">
                    <CpuIcon className="h-6 w-6" />
                    <h3 className="text-xl font-bold">Classification Head</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm bg-white/50 dark:bg-gray-900/50 p-3 rounded-lg">
                      <div className="font-medium">Dense Layers</div>
                      <div className="text-xs mt-1">512 → 256 neurons</div>
                    </div>
                    <div className="text-sm bg-white/50 dark:bg-gray-900/50 p-3 rounded-lg">
                      <div className="font-medium">Output Layer</div>
                      <div className="text-xs mt-1">Softmax (15 classes)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-12 pt-6 border-t dark:border-gray-800">
              <h4 className="font-bold mb-3 text-center dark:text-white">Architecture Flow Legend</h4>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-sm">Feature Extraction</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-sm">CNN Processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-violet-500"></div>
                  <span className="text-sm">ConvNeXt Blocks</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                  <span className="text-sm">Feature Fusion</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <span className="text-sm dark:text-gray-300">Classification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Technical Specifications & Attack Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Technical Specifications */}
        <div className="card dark:bg-gray-900 dark:border-gray-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-blue-500/10 dark:bg-blue-900/20">
              <Server className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold dark:text-white">Technical Specifications</h2>
              <p className="text-sm text-muted-foreground dark:text-gray-400">System requirements and configuration</p>
            </div>
          </div>

          <div className="space-y-4">
            {technicalSpecs.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-muted dark:bg-gray-800">
                      <Icon className="h-4 w-4 dark:text-gray-400" />
                    </div>
                    <span className="font-medium dark:text-gray-300">{spec.label}</span>
                  </div>
                  <span className="font-bold dark:text-white">{spec.value}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Attack Categories */}
        <div className="card dark:bg-gray-900 dark:border-gray-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-red-500/10 dark:bg-red-900/20">
              <Shield className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold dark:text-white">Attack Categories</h2>
              <p className="text-sm text-muted-foreground dark:text-gray-400">14 attack types + normal traffic</p>
            </div>
          </div>

          <div className="space-y-3">
            {attackCategories.map((attack, index) => (
              <div key={index} className="p-4 rounded-lg border dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${colorClasses[attack.color]}`}></div>
                    <span className="font-medium dark:text-gray-200">{attack.name}</span>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${colorClasses[attack.color]}`}>
                    {attack.severity}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground dark:text-gray-400">Type: {attack.type}</span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full mx-0.5 ${i < (attack.severity === 'Critical' ? 3 :
                            attack.severity === 'High' ? 2 : 1)
                            ? 'bg-current'
                            : 'bg-muted dark:bg-gray-700'
                          }`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dataset Information */}
          <div className="mt-8 p-4 rounded-lg bg-muted/50 dark:bg-gray-800/50 border dark:border-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <Database className="h-5 w-5 text-primary dark:text-blue-400" />
              <h3 className="font-bold dark:text-white">Dataset: CICIoT2023</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="text-center p-3 rounded-lg bg-background dark:bg-gray-900">
                <div className="text-2xl font-bold text-primary dark:text-blue-400">3.5M</div>
                <div className="text-xs text-muted-foreground dark:text-gray-400">Total Samples</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-background dark:bg-gray-900">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">1.2M</div>
                <div className="text-xs text-muted-foreground dark:text-gray-400">Normal Traffic</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-background dark:bg-gray-900">
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">2.3M</div>
                <div className="text-xs text-muted-foreground dark:text-gray-400">Attack Samples</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-background dark:bg-gray-900">
                <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">78</div>
                <div className="text-xs text-muted-foreground dark:text-gray-400">Features</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Advantages */}
      <div className="card bg-gradient-to-br from-primary/5 to-transparent border-primary/20 dark:bg-gray-900/50 dark:border-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">Architecture Advantages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-background/50 dark:bg-gray-800/50 border dark:border-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10 dark:bg-blue-900/20">
                <Network className="h-5 w-5 text-primary dark:text-blue-400" />
              </div>
              <h3 className="font-bold dark:text-white">Multi-Scale Features</h3>
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              CNN extracts local spatial patterns while ConvNeXt captures hierarchical dependencies
            </p>
          </div>

          <div className="p-4 rounded-lg bg-background/50 dark:bg-gray-800/50 border dark:border-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 dark:bg-emerald-900/20">
                <Zap className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="font-bold dark:text-white">Real-time Performance</h3>
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              45ms inference time enables real-time network monitoring and threat detection
            </p>
          </div>

          <div className="p-4 rounded-lg bg-background/50 dark:bg-gray-800/50 border dark:border-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-violet-500/10 dark:bg-violet-900/20">
                <Brain className="h-5 w-5 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="font-bold dark:text-white">Robust Detection</h3>
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              97.9% accuracy across 14 diverse attack types with minimal false positives
            </p>
          </div>

          <div className="p-4 rounded-lg bg-background/50 dark:bg-gray-800/50 border dark:border-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-amber-500/10 dark:bg-amber-900/20">
                <HardDrive className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-bold dark:text-white">Lightweight</h3>
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              28MB model size allows deployment on edge devices and resource-constrained environments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelInfo;