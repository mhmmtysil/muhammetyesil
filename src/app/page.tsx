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

  const handleWidthChange = (newWidth: number) => {
    setSidebarWidth(newWidth);
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
    const handleMove = (e: MouseEvent) => {
      handleMouseMove(e);
    };

    const handleUp = () => {
      handleMouseUp();
    };

    if (isResizing || isResizingSidebar) {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleUp);
      return () => {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleUp);
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

          {/* Sidebar content - only for explorer, search, git */}
          {activeView !== 'extensions' && (
            <>
              <div className={`
                ${isMobileSidebarOpen ? 'absolute left-0 top-0 bottom-0 z-10' : ''}
                md:relative md:h-full
              `}>
                {activeView === 'explorer' && <Sidebar onFileSelect={handleFileSelect} width={sidebarWidth} onWidthChange={handleWidthChange} />}
                {activeView === 'search' && <SearchPanel onFileSelect={handleFileSelect} width={sidebarWidth} onWidthChange={handleWidthChange} />}
                {activeView === 'git' && <GitPanel width={sidebarWidth} onWidthChange={handleWidthChange} />}
              </div>
            </>
          )}

          {/* Extensions panel - renders its own layout */}
          {activeView === 'extensions' && !isMobileSidebarOpen && (
            <ExtensionsPanel width={sidebarWidth} onExtensionClick={handleExtensionClick} onWidthChange={handleWidthChange} />
          )}
        </div>

        <Editor
          currentFile={currentFile}
          fileClickCount={fileClickCount}
          showTabs={activeView === 'explorer' || activeView === 'search'}
          selectedExtension={selectedExtension}
        />
      </div>

      {/* Terminal */}
      {isTerminalOpen && (
        <>
          <div
            className="group h-3 bg-[#252526] hover:bg-[#007acc] cursor-ns-resize transition-colors relative z-50 flex items-center justify-center"
            style={{ 
              backgroundColor: isResizing ? '#007acc' : undefined 
            }}
            onMouseDown={handleMouseDown}
          >
            <div className="w-12 h-1 bg-gray-600 group-hover:bg-[#007acc] transition-colors rounded-full" />
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
