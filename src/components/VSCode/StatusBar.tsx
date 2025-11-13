'use client';

export default function StatusBar({ onTerminalToggle, isTerminalOpen }: { onTerminalToggle: () => void; isTerminalOpen: boolean }) {
  return (
    <div className="h-6 bg-[#007acc] text-[9px] md:text-xs text-white">
      <div className="h-full flex items-center justify-between px-3 md:px-4">
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          <span className="whitespace-nowrap">⎇ main</span>
          <span className="whitespace-nowrap">✓ 0 ✗ 0</span>
          <button 
            onClick={onTerminalToggle}
            className="hover:bg-white/10 px-2 py-0.5 rounded transition-colors flex items-center gap-1 whitespace-nowrap"
          >
            <span>{isTerminalOpen ? '▼' : '▲'}</span>
            <span>Terminal</span>
          </button>
        </div>
        <div className="flex items-center gap-2 md:gap-4 flex-shrink min-w-0">
          <span className="whitespace-nowrap">Ln 42, Col 16</span>
          <span className="whitespace-nowrap">Spaces: 2</span>
          <span className="whitespace-nowrap">UTF-8</span>
          <span className="whitespace-nowrap truncate">TypeScript React</span>
        </div>
      </div>
    </div>
  );
}
