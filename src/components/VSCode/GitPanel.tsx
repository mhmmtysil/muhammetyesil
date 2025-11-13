'use client';

import { useState, useRef, useEffect } from 'react';
import { VscSourceControl, VscGitCommit, VscCircleFilled } from 'react-icons/vsc';
import { GoGitBranch } from 'react-icons/go';

export default function GitPanel({ 
  width = 250, 
  onWidthChange 
}: { 
  width?: number; 
  onWidthChange?: (width: number) => void;
}) {
  const [currentWidth, setCurrentWidth] = useState(width);
  const [isResizing, setIsResizing] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      const newWidth = e.clientX - (panelRef.current?.getBoundingClientRect().left || 0);
      if (newWidth >= 200 && newWidth <= 600) {
        setCurrentWidth(newWidth);
        onWidthChange?.(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  const commits = [
    { hash: 'a1b2c3d', message: 'Initial portfolio setup', date: '2 saat önce', author: 'Muhammet Yeşil' },
    { hash: 'e4f5g6h', message: 'Add VS Code theme', date: '1 saat önce', author: 'Muhammet Yeşil' },
    { hash: 'i7j8k9l', message: 'Update content sections', date: '30 dakika önce', author: 'Muhammet Yeşil' },
    { hash: 'm0n1o2p', message: 'Fix responsive design', date: '10 dakika önce', author: 'Muhammet Yeşil' },
  ];

  return (
    <div ref={panelRef} className="bg-[#1e1e1e] border-r border-gray-700 flex flex-col h-full relative" style={{ width: `${currentWidth}px` }}>
      <div className="px-4 py-3 text-xs text-gray-400 uppercase tracking-wide border-b border-gray-700">
        Source Control
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <GoGitBranch className="text-gray-400" size={16} />
          <span className="text-gray-300 text-sm">main</span>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="text-xs text-gray-400 flex items-center gap-2">
            <VscSourceControl size={14} />
            <span>CHANGES</span>
          </div>
          <div className="text-xs text-gray-500 pl-2">No changes</div>
        </div>
      </div>

      <div className="border-t border-gray-700 px-4 py-3">
        <div className="text-xs text-gray-400 mb-3 flex items-center gap-2">
          <VscGitCommit size={14} />
          <span>RECENT COMMITS</span>
        </div>
        <div className="space-y-3">
          {commits.map((commit) => (
            <div key={commit.hash} className="text-sm">
              <div className="flex items-start gap-2">
                <VscCircleFilled className="text-blue-400 flex-shrink-0 mt-0.5" size={8} />
                <span className="text-blue-400 font-mono text-xs">{commit.hash}</span>
              </div>
              <div className="text-gray-300 text-xs mt-1 pl-4">{commit.message}</div>
              <div className="text-gray-500 text-xs mt-1 pl-4">{commit.date}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Resize Handle - wider hit area */}
      <div
        className="absolute top-0 right-0 w-4 h-full cursor-col-resize z-50 group"
        onMouseDown={() => setIsResizing(true)}
      >
        <div className="absolute right-0 top-0 w-0.5 h-full bg-transparent group-hover:bg-blue-500 transition-colors" />
      </div>
    </div>
  );
}
