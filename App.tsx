import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { InsuTraceProvider, useInsuTrace } from './context/InsuTraceContext';
import { IntroSequence } from './components/intro/IntroSequence';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { ToastCenter } from './components/layout/ToastCenter';
import { DemoControlsModal } from './components/demo/DemoControlsModal';
import { OverviewScreen } from './components/screens/OverviewScreen';
import { HistoryScreen } from './components/screens/HistoryScreen';
import { AlertsScreen } from './components/screens/AlertsScreen';
import { DeviceScreen } from './components/screens/DeviceScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';
import { SettingsScreen } from './components/screens/SettingsScreen';

function MainAppShell() {
  const [activeScreen, setActiveScreen] = useState('overview');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const { settings } = useInsuTrace();

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 1. Intro Reveal Sequence (1-2s Anime.js intro) */}
      <AnimatePresence>
        {showIntro && (
          <IntroSequence onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* 2. Top Application Bar */}
      <Navbar
        onOpenDemo={() => setIsDemoModalOpen(true)}
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
      />

      {/* 3. Main Workspace Shell with Left Navigation Rail */}
      <div className="flex-1 flex overflow-hidden">
        <Sidebar
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />

        {/* Content Area with smooth transitions */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 pb-24 md:pb-8 tech-grid-bg">
          <div className="max-w-7xl mx-auto">
            <motion.div
              key={activeScreen}
              initial={settings.reducedMotion ? undefined : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={settings.reducedMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {activeScreen === 'overview' && (
                <OverviewScreen
                  onNavigate={setActiveScreen}
                  onOpenDemo={() => setIsDemoModalOpen(true)}
                />
              )}
              {activeScreen === 'history' && <HistoryScreen />}
              {activeScreen === 'alerts' && <AlertsScreen />}
              {activeScreen === 'device' && <DeviceScreen />}
              {activeScreen === 'profile' && <ProfileScreen />}
              {activeScreen === 'settings' && <SettingsScreen />}
            </motion.div>
          </div>
        </main>
      </div>

      {/* 4. Interactive Simulation & Demo Controls Modal */}
      <DemoControlsModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      {/* 5. Custom Real-Time Toast Notification System */}
      <ToastCenter />
    </div>
  );
}

export function App() {
  return (
    <InsuTraceProvider>
      <MainAppShell />
    </InsuTraceProvider>
  );
}

export default App;

