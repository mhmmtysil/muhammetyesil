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
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isResizingSidebar, setIsResizingSidebar] = useState(false);

  const handleFileSelect = (file: string) => {
    setCurrentFile(file);
    setFileClickCount(prev => prev + 1);
    if (activeView !== 'explorer') {
      setActiveView('explorer');
    }
    // Close mobile sidebar after selecting a file
    setIsMobileSidebarOpen(false);
  };

  const handleViewChange = (view: string) => {
    setActiveView(view);
    // Toggle mobile sidebar
    if (window.innerWidth < 768) {
      setIsMobileSidebarOpen(!isMobileSidebarOpen);
    }
  };

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleSidebarMouseDown = () => {
    setIsResizingSidebar(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isResizing) {
      const newHeight = window.innerHeight - e.clientY - 22; // 22 is status bar height
      const minHeight = window.innerWidth < 768 ? 150 : 100;
      const maxHeight = window.innerWidth < 768 ? 400 : 600;
      if (newHeight >= minHeight && newHeight <= maxHeight) {
        setTerminalHeight(newHeight);
      }
    }
    if (isResizingSidebar) {
      const newWidth = e.clientX - 48; // 48 is ActivityBar width
      if (newWidth >= 180 && newWidth <= 500) {
        setSidebarWidth(newWidth);
      }
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
    setIsResizingSidebar(false);
  };

  useEffect(() => {
    if (isResizing || isResizingSidebar) {
      window.addEventListener('mousemove', handleMouseMove as any);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove as any);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isResizing, isResizingSidebar]);

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
      <div className="flex-1 flex overflow-hidden relative">
        {/* Desktop ActivityBar */}
        <div className="hidden md:block h-full">
          <ActivityBar 
            activeView={activeView} 
            setActiveView={setActiveView}
            onTerminalToggle={() => setIsTerminalOpen(!isTerminalOpen)}
            isTerminalOpen={isTerminalOpen}
          />
        </div>

        {/* Sidebar - Desktop: inline, Mobile: overlay */}
        <div className={`
          ${isMobileSidebarOpen ? 'fixed inset-0 z-50 md:relative md:z-auto md:h-full' : 'hidden md:flex md:h-full'}
        `}>
          {/* Mobile overlay backdrop */}
          {isMobileSidebarOpen && (
            <div 
              className="md:hidden absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setIsMobileSidebarOpen(false)}
            />
          )}
          
          {/* Sidebar content */}
          <div className={`
            ${isMobileSidebarOpen ? 'absolute left-0 top-0 bottom-0 z-10' : ''}
            md:relative md:h-full
          `} style={{ width: isMobileSidebarOpen ? 'auto' : `${sidebarWidth}px` }}>
            {activeView === 'explorer' && <Sidebar onFileSelect={handleFileSelect} width={sidebarWidth} />}
            {activeView === 'search' && <SearchPanel onFileSelect={handleFileSelect} width={sidebarWidth} />}
            {activeView === 'git' && <GitPanel width={sidebarWidth} />}
            {activeView === 'extensions' && <ExtensionsPanel width={sidebarWidth} />}
          </div>

          {/* Resize handle */}
          {!isMobileSidebarOpen && (
            <div 
              className={`hidden md:block w-1 bg-[#252526] hover:bg-[#007acc] cursor-ew-resize transition-colors relative ${
                isResizingSidebar ? 'bg-[#007acc]' : ''
              }`}
              onMouseDown={handleSidebarMouseDown}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-12 w-0.5 bg-gray-600 hover:bg-[#007acc] transition-colors rounded-full" />
              </div>
            </div>
          )}
        </div>

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

      {/* Mobile ActivityBar - Bottom */}
      <div className="md:hidden">
        <ActivityBar 
          activeView={activeView} 
          setActiveView={handleViewChange}
          onTerminalToggle={() => setIsTerminalOpen(!isTerminalOpen)}
          isTerminalOpen={isTerminalOpen}
          isMobile={true}
        />
      </div>
    </div>
  );
}
