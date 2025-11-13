'use client';

export default function StatusBar({ onTerminalToggle, isTerminalOpen }: { onTerminalToggle: () => void; isTerminalOpen: boolean }) {
  return (
    <div className="h-6 bg-[#007acc] flex items-center justify-between px-4 text-xs text-white">
      <div className="flex items-center gap-4">
        <span>⎇ main</span>
        <span>✓ 0 ✗ 0</span>
        <button 
          onClick={onTerminalToggle}
          className="hover:bg-white/10 px-2 py-0.5 rounded transition-colors flex items-center gap-1"
        >
          <span>{isTerminalOpen ? '▼' : '▲'}</span>
          <span>Terminal</span>
        </button>
      </div>
      <div className="flex items-center gap-4">
        <span>Ln 42, Col 16</span>
        <span>Spaces: 2</span>
        <span>UTF-8</span>
        <span>TypeScript React</span>
      </div>
    </div>
  );
}
