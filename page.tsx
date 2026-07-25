'use client';

import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const weeklyData = {
    gunVan: {
      location: 'Chumash, Pacific Bluffs',
      items: ['Railgun', 'Widowmaker', 'Knife', 'Proximity Mines']
    },
    podiumVehicle: {
      name: 'Pfister Astron Custom',
      value: '$1,580,000',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
    },
    bonuses: [
      { title: '2x GTA$ & RP em Missões de Venda do Bunker', type: 'Destaque' },
      { title: '3x GTA$ & RP no Modo Adversário: Sumo', type: 'Bônus' },
      { title: 'Desconto de 30% em todas as Sedes de Motoqueiro', type: 'Promoção' }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-black tracking-wider text-amber-400">GTA HUB</span>
            <span className="text-xs uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">Brasil</span>
          </div>

          <nav className="hidden md:flex space-x-1">
            {['home', 'gunvan', 'bonus', 'admin'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all uppercase tracking-wider ${
                  activeTab === tab
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {tab === 'home' && 'Início'}
                {tab === 'gunvan' && 'Gun Van'}
                {tab === 'bonus' && 'Bônus Semanais'}
                {tab === 'admin' && 'Painel Admin'}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800 text-slate-200"
          >
            ☰
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-2">
            {['home', 'gunvan', 'bonus', 'admin'].map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setMobileMenuOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium uppercase ${
                  activeTab === tab ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'home' && (
          <div className="space-y-8">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900/90 to-amber-950/30 p-8 sm:p-12 shadow-2xl">
              <div className="max-w-2xl space-y-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  ATUALIZAÇÃO SEMANAL ATIVA
                </span>
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
                  Tudo sobre o <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">GTA Online</span> em um só lugar.
                </h1>
                <p className="text-slate-400 text-base sm:text-lg">
                  Gun Van atualizada, veículos do pódio do Cassino, bônus em dobro e muito mais. Sincronizado automaticamente para jogadores do Brasil.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <button onClick={() => setActiveTab('gunvan')} className="px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition shadow-lg shadow-amber-500/10">
                    Ver Gun Van Hoje
                  </button>
                  <button onClick={() => setActiveTab('bonus')} className="px-6 py-3 rounded-xl bg-slate-800 text-white font-medium hover:bg-slate-700 transition border border-slate-700">
                    Ver Bônus da Semana
                  </button>
                </div>
              </div>
            </div>


