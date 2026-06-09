'use client';

import { useState, useEffect } from 'react';

type TabKey = 'schedule' | 'prices' | 'vouchers';

const TABS: { key: TabKey; label: string }[] = [
  { key: 'schedule', label: 'Stundenplan' },
  { key: 'prices',   label: 'Preise' },
  { key: 'vouchers', label: 'Gutscheine' },
];

const WIDGETS: Record<string, string> = {
  schedule_polerinna: '770b7d45-9aab-43e6-894c-d4f0bbb7977e',
  schedule_gold:      '4873a28e-0327-49b7-ac3e-6f612463bd46',
  prices:             'cb8dcbb8-8d56-4667-a1e9-902ba0e14cc0',
  vouchers:           '742c805d-b09a-47bd-b570-3675138ed89a',
};

export default function ScheduleTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>('schedule');
  const [activeStudio, setActiveStudio] = useState<'polerinna' | 'gold'>('polerinna');

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll('script[data-eversports-loaded]').forEach(s => s.remove());
      const s = document.createElement('script');
      s.type = 'module';
      s.src = `https://widget-static.eversports.io/loader.js?t=${Date.now()}`;
      s.setAttribute('data-eversports-loaded', '1');
      document.head.appendChild(s);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const visibleWidgets: Record<string, boolean> = {
    schedule_polerinna: activeTab === 'schedule' && activeStudio === 'polerinna',
    schedule_gold:      activeTab === 'schedule' && activeStudio === 'gold',
    prices:             activeTab === 'prices',
    vouchers:           activeTab === 'vouchers',
  };

  return (
    <div>
      {/* Main tabs */}
      <div className="flex border-b border-neutral-200 mb-6 overflow-x-auto scrollbar-none">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className={`px-6 py-4 text-sm tracking-widest uppercase transition-all border-b-2 -mb-px ${
              activeTab === t.key
                ? 'border-gold-500 text-gold-500 font-semibold'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Studio switcher — only for Stundenplan */}
      {activeTab === 'schedule' && (
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => setActiveStudio('polerinna')}
            className={`flex flex-col items-start px-5 py-3 border-2 transition-all text-left ${
              activeStudio === 'polerinna'
                ? 'border-gold-700 bg-gold-700'
                : 'border-neutral-200 bg-white hover:border-neutral-400'
            }`}
          >
            <span className={`text-sm font-semibold tracking-widest uppercase ${
              activeStudio === 'polerinna' ? 'text-white' : 'text-neutral-900'
            }`}>Polerinna</span>
            <span className={`text-xs mt-0.5 ${
              activeStudio === 'polerinna' ? 'text-gold-100' : 'text-neutral-500'
            }`}>Lindwurmstraße 101</span>
          </button>
          <button
            onClick={() => setActiveStudio('gold')}
            className={`flex flex-col items-start px-5 py-3 border-2 transition-all text-left ${
              activeStudio === 'gold'
                ? 'border-gold-500 bg-gold-50'
                : 'border-neutral-200 bg-white hover:border-gold-300'
            }`}
          >
            <span className={`text-sm font-semibold tracking-widest uppercase ${
              activeStudio === 'gold' ? 'text-gold-600' : 'text-neutral-900'
            }`}>Polerinna <span className="text-gold-500">Gold</span></span>
            <span className={`text-xs mt-0.5 ${
              activeStudio === 'gold' ? 'text-gold-400' : 'text-neutral-500'
            }`}>Hofmannstraße 7A</span>
          </button>
        </div>
      )}

      {/* All widgets in DOM, only active visible */}
      <div className="bg-white min-h-[500px] overflow-x-hidden max-w-full">
        {Object.entries(WIDGETS).map(([key, id]) => (
          <div key={key} style={{ display: visibleWidgets[key] ? 'block' : 'none' }}>
            <div data-eversports-widget-id={id} />
          </div>
        ))}
      </div>
    </div>
  );
}
