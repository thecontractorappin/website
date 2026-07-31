// src/components/sections/home/DashboardOverview.tsx
import React, { useState } from 'react';
import { 
  Wallet, 
  Globe, 
  ShoppingCart, 
  UserCheck, 
  Users, 
  LayoutDashboard, 
  Box, 
  Tractor, 
  HardHat, 
  Receipt, 
  TrendingDown, 
  CheckSquare,
  TrendingUp,
  Activity
} from 'lucide-react';

type ModuleFocus = 'All' | 'Finances' | 'Workforce' | 'Operations' | 'Projects' | 'Inventory';
type ProjectStage = 'Starting' | 'Midway' | 'Completion';

export const DashboardOverview = () => {
  return (
    <section id="dashboard-overview" className="bg-gray-50 py-24 px-6 md:px-12 xl:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header and Value Proposition */}
        <div className="text-center mb-16 max-w-3xl">
          <span className="text-sm font-bold text-[#FF6B2B] uppercase tracking-wider bg-[#FF6B2B]/10 px-4 py-1.5 rounded-full">
            Command Center
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A1628] mb-6">
            See Your Construction Business at a Glance
          </h2>
          <p className="text-xl text-gray-500 leading-relaxed font-medium">
            Centralize your finances, project tracking, inventory, and operations with our intuitive cross-platform interface. Experience a truly integrated view from PC to mobile.
          </p>
        </div>

        {/* Visual Showcase: Cross-Platform View */}
        <div className="w-full flex flex-col md:flex-row items-center gap-12 mb-20 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
          
          {/* Main Visual: PC/Web Dashboard */}
          <div className="w-full md:w-3/5 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 group">
            <img 
              src="/Desktop-view.png" 
              alt="Astute Contractor PC Web Dashboard Overview"
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out" 
            />
            <div className="p-5 bg-white border-t border-gray-50">
              <p className="text-sm font-bold text-[#0A1628]">Complete control from your desk. Full analytics and multi-user management.</p>
            </div>
          </div>

          {/* Secondary Visual: Mobile Dashboard */}
          <div className="w-full md:w-2/5 flex flex-col gap-6 items-center">
            <div className="w-full md:w-2/3 rounded-[2rem] shadow-2xl overflow-hidden border-[6px] border-gray-900 group">
              <img 
                src="/Mobile-view.png" 
                alt="Astute Contractor Mobile App Dashboard Overview"
                className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" 
              />
            </div>
            <div className="w-full md:w-5/6 p-5 bg-[#F7F9FC] rounded-xl border border-gray-100 text-center">
              <p className="text-sm font-bold text-[#0A1628]">Your site operations, right in your pocket. Quick updates and field access.</p>
            </div>
          </div>

        </div>

        {/* Interactive Deep Dive Widget: Explore the Dashboard Logic */}
        <div className="w-full">
          <DashboardLiveSimulatorWidget />
        </div>

      </div>
    </section>
  );
};

// ==========================================
// 💡 INTERACTIVE LIVE SIMULATOR COMPONENT
// ==========================================
const DashboardLiveSimulatorWidget = () => {
  const [stage, setStage] = useState<ProjectStage>('Starting');
  const [focus, setFocus] = useState<ModuleFocus>('All');

  // Financial Data Simulation Logic
  const getFinancials = (currentStage: ProjectStage) => {
    switch (currentStage) {
      case 'Starting':
        return { income: 201512, expense: 48863, balance: 152649 };
      case 'Midway':
        return { income: 1250000, expense: 680500, balance: 569500 };
      case 'Completion':
        return { income: 3450000, expense: 2150000, balance: 1300000 };
    }
  };

  const financials = getFinancials(stage);

  // Formatting currency in Indian Rupees
  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  // Module Configuration
  const modules = [
    { name: 'Ledger', icon: Wallet, color: '#00C9D4', tags: ['Finances'] },
    { name: 'Tenders', icon: Globe, color: '#FF6B2B', tags: ['Projects', 'Operations'] },
    { name: 'Shop', icon: ShoppingCart, color: '#00C9D4', tags: ['Inventory', 'Operations'] },
    { name: 'Attend', icon: UserCheck, color: '#FF6B2B', tags: ['Workforce'] },
    { name: 'HR Hub', icon: Users, color: '#00C9D4', tags: ['Workforce'] },
    { name: 'Projects', icon: LayoutDashboard, color: '#FF6B2B', tags: ['Projects'] },
    { name: 'Inventory', icon: Box, color: '#00C9D4', tags: ['Inventory'] },
    { name: 'Machines', icon: Tractor, color: '#FF6B2B', tags: ['Operations'] },
    { name: 'Sub-Con', icon: HardHat, color: '#00C9D4', tags: ['Workforce', 'Operations'] },
    { name: 'Billing', icon: Receipt, color: '#FF6B2B', tags: ['Finances'] },
    { name: 'Expenses', icon: TrendingDown, color: '#00C9D4', tags: ['Finances'] },
    { name: 'Tasks', icon: CheckSquare, color: '#FF6B2B', tags: ['Projects', 'Operations'] },
  ];

  return (
    <div className="w-full mt-12 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
      
      <div className="text-center mb-12 relative z-10">
        <span className="inline-block px-4 py-1.5 bg-[#0A1628] text-[#00C9D4] font-bold tracking-widest uppercase rounded-full text-xs mb-4 shadow-md">
          Live Interactive Simulator
        </span>
        <h3 className="text-3xl md:text-4xl font-extrabold text-[#0A1628]">Test Drive the Interface</h3>
        <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto font-medium">
          Select a project stage or departmental focus below to see how our cross-linked modules adapt to your business needs in real-time.
        </p>
      </div>
      
      {/* SIMULATOR WRAPPER - Premium Dark Glassmorphism */}
      <div className="w-full bg-gradient-to-br from-[#0A1628] via-[#112440] to-[#0A1628] rounded-[2rem] p-6 md:p-10 shadow-2xl relative overflow-hidden border border-gray-800">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00C9D4]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#FF6B2B]/10 rounded-full blur-[100px] pointer-events-none" />

        {/* CONTROLS */}
        <div className="relative z-10 flex flex-col lg:flex-row gap-8 mb-12">
          {/* Stage Selector */}
          <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl">
            <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <Activity size={14} className="text-[#00C9D4]" />
              1. Simulate Project Stage
            </h4>
            <div className="flex flex-wrap gap-3">
              {(['Starting', 'Midway', 'Completion'] as ProjectStage[]).map((s) => (
                <button
                  key={s}
                  onClick={() => setStage(s)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                    stage === s 
                      ? 'bg-gradient-to-r from-[#00C9D4] to-[#00A8B5] text-white shadow-[0_0_15px_rgba(0,201,212,0.4)] border-transparent' 
                      : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Focus Selector */}
          <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl">
            <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <LayoutDashboard size={14} className="text-[#FF6B2B]" />
              2. Isolate Department Module
            </h4>
            <div className="flex flex-wrap gap-3">
              {(['All', 'Finances', 'Workforce', 'Operations', 'Projects', 'Inventory'] as ModuleFocus[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFocus(f)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                    focus === f 
                      ? 'bg-[#FF6B2B] text-white shadow-[0_0_15px_rgba(255,107,43,0.4)] border-transparent' 
                      : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* GLASSMORPHISM DASHBOARD PREVIEW */}
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          
          {/* Financial Overview Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 mb-8 shadow-2xl transition-all duration-500">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <Wallet className="text-[#00C9D4]" size={20} />
              Company Financial Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
              
              <div className="pt-4 md:pt-0 px-4">
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Total Income</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <TrendingUp className="text-green-400" size={20} />
                  </div>
                  <p className="text-2xl lg:text-3xl font-extrabold text-white transition-all duration-500">
                    {formatCurrency(financials.income)}
                  </p>
                </div>
              </div>

              <div className="pt-4 md:pt-0 px-4">
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Total Expense</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <TrendingDown className="text-red-400" size={20} />
                  </div>
                  <p className="text-2xl lg:text-3xl font-extrabold text-white transition-all duration-500">
                    {formatCurrency(financials.expense)}
                  </p>
                </div>
              </div>

              <div className="pt-4 md:pt-0 px-4">
                <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Net Balance</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00C9D4]/20 flex items-center justify-center">
                    <Wallet className="text-[#00C9D4]" size={20} />
                  </div>
                  <p className="text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00C9D4] to-[#00E5F0] transition-all duration-500">
                    {formatCurrency(financials.balance)}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Module Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {modules.map((mod) => {
              const isFocused = focus === 'All' || mod.tags.includes(focus);
              const Icon = mod.icon;
              
              return (
                <div
                  key={mod.name}
                  className={`relative flex flex-col items-center justify-center p-6 rounded-2xl backdrop-blur-lg border transition-all duration-500 cursor-pointer ${
                    isFocused 
                      ? 'bg-white/10 border-white/20 shadow-xl scale-100 hover:bg-white/15 hover:-translate-y-1' 
                      : 'bg-white/5 border-white/5 opacity-40 scale-95 grayscale'
                  }`}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 shadow-inner"
                    style={{ backgroundColor: `${mod.color}25` }}
                  >
                    <Icon color={mod.color} size={24} strokeWidth={2.5} />
                  </div>
                  <span className={`text-sm font-bold ${isFocused ? 'text-white' : 'text-gray-400'}`}>
                    {mod.name}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};