import { useState, useEffect } from 'react';
import { Upload, X, Loader2, FileText, Activity, Calendar, MapPin, User as UserIcon } from 'lucide-react';

import { uploadImage, getUserProfile, getHistory } from '../../lib/api';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { generatePDF } from '../../utils/pdfGenerator';


import Navbar from '../NavBar';

interface UserProfile {
  full_name: string;
  email: string;
  dob: string;
  gender: string;
  address: string;
  profile_image: string | null;
}

interface HistoryRecord {
  id: number;
  label: string;
  confidence: string;
  timestamp: string;
  severity: string;
  image_path: string;
}


export const DashboardPage = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [history, setHistory] = useState<HistoryRecord[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ predicted_label: string; probabilities: Record<string, number>; severity: string; confidence: string } | null>(null);
  const [error, setError] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserProfile();
        setUser(userData);
        const historyData = await getHistory();
        setHistory(historyData);
      } catch (err) {
        console.error("Failed to fetch data", err);
      }
    };
    fetchData();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setResult(null);
      setError('');
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    setError('');
    try {
      const data = await uploadImage(file);
      setResult(data);
      // Refresh history
      const historyData = await getHistory();
      setHistory(historyData);
    } catch (err) {
      setError('Failed to analyze image. Please try again.');
    } finally {
      setLoading(false);
    }
  };



  const calculateAge = (dob: string) => {
    if (!dob) return 'N/A';
    const birthDate = new Date(dob);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };



  const chartData = [...history]
    .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
    .map(h => ({
      date: new Date(h.timestamp).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
      confidence: parseFloat(h.confidence) * 100
    }));

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar/>

      <main className="max-w-7xl pt-20 pb-20  mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* User Info Card */}
        {user && (
          <div className="bg-emerald-50/50 rounded-3xl p-6 border border-emerald-100 flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    {user.profile_image ? (
                        <img src={user.profile_image} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full bg-emerald-100 flex items-center justify-center text-emerald-500">
                            <UserIcon size={48} />
                        </div>
                    )}
                </div>
            </div>
            <div className="flex-1 text-center md:text-left space-y-2">
                <h2 className="text-3xl font-bold text-slate-800">{user.full_name}</h2>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-slate-600 font-medium">
                    <div className="flex items-center gap-1"><Calendar size={16} /> {user.dob} ({calculateAge(user.dob)}y)</div>
                    <div className="flex items-center gap-1"><UserIcon size={16} /> {user.gender}</div>
                </div>
                <div className="flex items-center gap-1 justify-center md:justify-start text-slate-500">
                    <MapPin size={16} /> {user.address}
                </div>
            </div>
            
            {/* Latest Status */}
            {history.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 min-w-[250px]">
                    <div className="text-sm text-slate-500 mb-1">Latest Diagnosis</div>
                    <div className="text-2xl font-bold text-emerald-600 capitalize">{history[history.length - 1].label.replace('_', ' ')}</div>
                    <div className="flex items-center gap-2 mt-2">
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${history[history.length - 1].severity === 'High' ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'}`}>
                            {history[history.length - 1].severity.toUpperCase()} RISK
                        </span>
                    </div>
                </div>
            )}
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Upload & Diagnosis */}
            <div className="lg:col-span-1 space-y-8">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">New Analysis</h3>
                    
                    {!preview ? (
                        <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center hover:border-emerald-500 hover:bg-emerald-50/30 transition-all cursor-pointer relative group">
                            <input type="file" accept="image/*" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                <Upload size={24} />
                            </div>
                            <p className="font-medium text-slate-700">Upload Eye Image</p>
                            <p className="text-xs text-slate-400 mt-1">Supports PNG, JPG</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-100">
                                <img src={preview} alt="Preview" className="w-full h-full object-contain" />
                                <button onClick={() => { setFile(null); setPreview(null); setResult(null); }} className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full text-slate-600 hover:text-red-500 shadow-sm">
                                    <X size={16} />
                                </button>
                            </div>
                            {!result && (
                                <button onClick={handleUpload} disabled={loading} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-emerald-500/20 transition-all disabled:opacity-70 flex items-center justify-center gap-2">
                                    {loading ? <Loader2 size={20} className="animate-spin" /> : 'Analyze Now'}
                                </button>
                            )}
                        </div>
                    )}

                    {error && <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-xl text-sm text-center">{error}</div>}

                    {result && (
                        <div className="mt-6 animate-in fade-in slide-in-from-bottom-4">
                            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 mb-4">
                                <div className="text-sm text-emerald-800 font-medium mb-1">Detected Condition</div>
                                <div className="text-2xl font-bold text-emerald-700 capitalize">{result.predicted_label.replace('_', ' ')}</div>
                                <div className="mt-2 flex items-center gap-2">
                                    <span className="text-xs font-bold px-2 py-1 bg-white rounded text-emerald-600 border border-emerald-200">
                                        {(parseFloat(result.confidence) * 100).toFixed(1)}% Confidence
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Right Column: Trends & History */}
            <div className="lg:col-span-2 space-y-8">
                
                {/* Trends Graph */}
                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">Health Trend Graphs</h3>
                            <p className="text-slate-500 text-sm">Detection Patterns Over Time</p>
                        </div>
                        <Activity className="text-emerald-500" />
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData}>
                                <defs>
                                    <linearGradient id="colorConfidence" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                                <Tooltip 
                                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                                />
                                <Area type="monotone" dataKey="confidence" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorConfidence)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* History Table */}
                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-6">My History</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-100">
                                    <th className="text-left py-4 px-4 text-sm font-semibold text-emerald-600">Date</th>
                                    <th className="text-left py-4 px-4 text-sm font-semibold text-emerald-600">Disease Classified</th>
                                    <th className="text-left py-4 px-4 text-sm font-semibold text-emerald-600">Disease Level</th>
                                    <th className="text-left py-4 px-4 text-sm font-semibold text-emerald-600">Confidence Score</th>
                                    <th className="text-right py-4 px-4 text-sm font-semibold text-emerald-600">Report</th>
                                </tr>
                            </thead>
                            <tbody>
                                {history.map((record) => (
                                    <tr key={record.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                        <td className="py-4 px-4 text-sm text-slate-600">{new Date(record.timestamp).toLocaleDateString()}</td>
                                        <td className="py-4 px-4 text-sm font-medium text-slate-800 capitalize">{record.label.replace('_', ' ')}</td>
                                        <td className="py-4 px-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${record.severity === 'High' ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'}`}>
                                                {record.severity}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4 text-sm text-slate-600">{(parseFloat(record.confidence) * 100).toFixed(0)}%</td>
                                        <td className="py-4 px-4 text-right">
                                            <button 
                                                onClick={() => generatePDF(record, user)}
                                                className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold rounded-full transition-colors"
                                            >
                                                <FileText size={14} /> Download
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {history.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="py-8 text-center text-slate-400">No history available yet.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
      </main>
    </div>
  );
};
