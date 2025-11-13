'use client';

import { useState, useEffect } from 'react';
import ActivityBar from '@/components/VSCode/ActivityBar';
import Sidebar from '@/components/VSCode/Sidebar';
import SearchPanel from '@/components/VSCode/SearchPanel';
import GitPanel from '@/components/VSCode/GitPanel';
import ExtensionsPanel from '@/components/VSCode/ExtensionsPanel';
import Editor from '@/components/VSCode/Editor';
import Terminal from '@/components/VSCode/Terminal';
import StatusBar from '@/components/VSCode/StatusBar';

export default function Home() {
  const [activeView, setActiveView] = useState('explorer');
  const [currentFile, setCurrentFile] = useState('');
  const [fileClickCount, setFileClickCount] = useState(0);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalHeight, setTerminalHeight] = useState(200);
  const [isResizing, setIsResizing] = useState(false);

  const handleFileSelect = (file: string) => {
    setCurrentFile(file);
    setFileClickCount(prev => prev + 1);
    if (activeView !== 'explorer') {
      setActiveView('explorer');
    }
  };

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isResizing) {
      const newHeight = window.innerHeight - e.clientY - 22; // 22 is status bar height
      if (newHeight >= 100 && newHeight <= 600) {
        setTerminalHeight(newHeight);
      }
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove as any);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove as any);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isResizing]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K (Mac) or Ctrl+K (Windows/Linux)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-[#1e1e1e] text-gray-300">
      {/* Top Bar */}
      <div className="h-9 bg-[#323233] border-b border-gray-700 flex items-center px-2 gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-sm text-gray-400">
          Muhammet Yeşil - Portfolio
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        <ActivityBar 
          activeView={activeView} 
          setActiveView={setActiveView}
          onTerminalToggle={() => setIsTerminalOpen(!isTerminalOpen)}
          isTerminalOpen={isTerminalOpen}
        />
        {activeView === 'explorer' && <Sidebar onFileSelect={handleFileSelect} />}
        {activeView === 'search' && <SearchPanel onFileSelect={handleFileSelect} />}
        {activeView === 'git' && <GitPanel />}
        {activeView === 'extensions' && <ExtensionsPanel />}
        <Editor currentFile={currentFile} fileClickCount={fileClickCount} showTabs={activeView === 'explorer' || activeView === 'search'} />
      </div>

      {/* Terminal */}
      {isTerminalOpen && (
        <>
          <div 
            className={`group h-1 bg-[#252526] cursor-ns-resize transition-all relative ${
              isResizing ? 'bg-[#007acc]' : 'hover:bg-[#007acc]'
            }`}
            onMouseDown={handleMouseDown}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-0.5 bg-gray-600 group-hover:bg-[#007acc] transition-colors rounded-full" />
            </div>
          </div>
          <Terminal 
            onFileSelect={handleFileSelect} 
            height={terminalHeight}
          />
        </>
      )}

      {/* Status Bar */}
      <StatusBar onTerminalToggle={() => setIsTerminalOpen(!isTerminalOpen)} isTerminalOpen={isTerminalOpen} />
    </div>
  );
}
