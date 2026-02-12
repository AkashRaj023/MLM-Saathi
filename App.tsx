import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage.tsx';
import LoginPage from './components/LoginPage.tsx';
import Layout from './components/Layout.tsx';
import Overview from './components/Overview.tsx';
import MerchantHub from './components/MerchantHub.tsx';
import FinancialLedger from './components/FinancialLedger.tsx';
import Settings from './components/Settings.tsx';
import Support from './components/Support.tsx';
import { AKASH_RAJ } from './constants.tsx';
import { UIPreferences } from './types.ts';

export default function App() {
  const [view, setView] = useState<'landing' | 'login' | 'dashboard'>('landing');
  const [activeTab, setActiveTab] = useState('overview');
  const [preferences, setPreferences] = useState<UIPreferences>(() => {
    const saved = localStorage.getItem('nexsaathi_prefs');
    return saved ? JSON.parse(saved) : AKASH_RAJ.preferences;
  });

  useEffect(() => {
    localStorage.setItem('nexsaathi_prefs', JSON.stringify(preferences));
    document.documentElement.setAttribute('data-theme', preferences.theme);
    document.documentElement.style.setProperty('--accent-primary', preferences.accentColor);
  }, [preferences]);

  const handleLogin = () => setView('dashboard');
  const handleLogout = () => {
    setView('landing');
    setActiveTab('overview');
  };

  const renderDashboardContent = () => {
    switch (activeTab) {
      case 'overview': return <Overview preferences={preferences} />;
      case 'merchants': return <MerchantHub />;
      case 'wallet': return <FinancialLedger />;
      case 'support': return <Support />;
      case 'profile': return <Settings preferences={preferences} onUpdatePreferences={setPreferences} />;
      default: return <Overview preferences={preferences} />;
    }
  };

  if (view === 'landing') {
    return <LandingPage onEnter={() => setView('login')} />;
  }

  if (view === 'login') {
    return <LoginPage onLogin={handleLogin} onBack={() => setView('landing')} />;
  }

  return (
    <Layout 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      onLogout={handleLogout}
      preferences={preferences}
    >
      {renderDashboardContent()}
    </Layout>
  );
}