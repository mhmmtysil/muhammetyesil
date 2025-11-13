'use client';

import { VscFiles, VscSearch, VscSourceControl, VscExtensions, VscTerminal } from 'react-icons/vsc';

export default function ActivityBar({ 
  activeView, 
  setActiveView,
  onTerminalToggle,
  isTerminalOpen,
  isMobile = false
}: { 
  activeView: string; 
  setActiveView: (view: string) => void;
  onTerminalToggle: () => void;
  isTerminalOpen: boolean;
  isMobile?: boolean;
}) {
  const icons = [
    { id: 'explorer', label: 'Explorer', icon: <VscFiles size={24} /> },
    { id: 'search', label: 'Search', icon: <VscSearch size={24} /> },
    { id: 'git', label: 'Git', icon: <VscSourceControl size={24} /> },
    { id: 'extensions', label: 'Extensions', icon: <VscExtensions size={24} /> },
    { id: 'terminal', label: 'Terminal', icon: <VscTerminal size={24} />, isSpecial: true },
  ];

  if (isMobile) {
    return (
      <div className="h-14 bg-[#333333] border-t border-gray-700 flex items-center justify-around px-2">
        {icons.map((item) => (
          <button
            key={item.id}
            className={`flex-1 h-12 flex flex-col items-center justify-center rounded hover:bg-gray-600 transition-colors ${
              item.isSpecial 
                ? (isTerminalOpen ? 'bg-gray-600 border-t-2 border-blue-500' : '')
                : (activeView === item.id ? 'bg-gray-600 border-t-2 border-blue-500' : '')
            }`}
            onClick={() => item.isSpecial ? onTerminalToggle() : setActiveView(item.id)}
            title={item.label}
          >
            <div className="text-gray-300">{item.icon}</div>
            <span className="text-[9px] text-gray-400 mt-0.5">{item.label}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="w-12 h-full bg-[#333333] border-r border-gray-700 flex flex-col items-center py-2 gap-4">
      {icons.map((item) => (
        <button
          key={item.id}
          className={`w-10 h-10 flex items-center justify-center rounded hover:bg-gray-600 transition-colors ${
            item.isSpecial 
              ? (isTerminalOpen ? 'bg-gray-600 border-l-2 border-blue-500' : '')
              : (activeView === item.id ? 'bg-gray-600 border-l-2 border-blue-500' : '')
          }`}
          onClick={() => item.isSpecial ? onTerminalToggle() : setActiveView(item.id)}
          title={item.label}
        >
          <div className="text-gray-300">{item.icon}</div>
        </button>
      ))}
    </div>
  );
}
