'use client';

export default function ActivityBar({ 
  activeView, 
  setActiveView,
  onTerminalToggle,
  isTerminalOpen 
}: { 
  activeView: string; 
  setActiveView: (view: string) => void;
  onTerminalToggle: () => void;
  isTerminalOpen: boolean;
}) {
  const icons = [
    { id: 'explorer', label: 'Explorer', icon: '📁' },
    { id: 'search', label: 'Search', icon: '🔍' },
    { id: 'git', label: 'Git', icon: '⎇' },
    { id: 'extensions', label: 'Extensions', icon: '◧' },
    { id: 'terminal', label: 'Terminal', icon: '▶', isSpecial: true },
  ];

  return (
    <div className="w-12 bg-[#333333] border-r border-gray-700 flex flex-col items-center py-2 gap-4">
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
          <span className="text-xl">{item.icon}</span>
        </button>
      ))}
    </div>
  );
}
