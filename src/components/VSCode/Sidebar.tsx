'use client';

import { useState } from 'react';
import { FaReact } from 'react-icons/fa';

type FileType = {
  name: string;
  type: 'file' | 'folder';
  icon?: string;
  children?: FileType[];
  content?: string;
};

const fileStructure: FileType[] = [
  {
    name: 'portföy',
    type: 'folder',
    children: [
      {
        name: 'hakkımda.tsx',
        type: 'file',
        icon: '⚛️',
        content: 'about'
      },
      {
        name: 'projeler.tsx',
        type: 'file',
        icon: '⚛️',
        content: 'projects'
      },
      {
        name: 'yetenekler.tsx',
        type: 'file',
        icon: '⚛️',
        content: 'skills'
      },
      {
        name: 'iletişim.tsx',
        type: 'file',
        icon: '⚛️',
        content: 'contact'
      }
    ]
  }
];

export default function Sidebar({ onFileSelect, width = 250 }: { onFileSelect: (content: string) => void; width?: number }) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['portföy']));

  const toggleFolder = (folderName: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderName)) {
      newExpanded.delete(folderName);
    } else {
      newExpanded.add(folderName);
    }
    setExpandedFolders(newExpanded);
  };

  const renderFileTree = (files: FileType[], level = 0) => {
    return files.map((file) => (
      <div key={file.name}>
        {file.type === 'folder' ? (
          <>
            <div
              className="flex items-center gap-2 px-2 py-1 hover:bg-gray-700 cursor-pointer text-sm"
              style={{ paddingLeft: `${level * 12 + 8}px` }}
              onClick={() => toggleFolder(file.name)}
            >
              <span className="text-gray-400">
                {expandedFolders.has(file.name) ? '▼' : '▶'}
              </span>
              <span className="text-gray-300">{file.name}</span>
            </div>
            {expandedFolders.has(file.name) && file.children && (
              <div>{renderFileTree(file.children, level + 1)}</div>
            )}
          </>
        ) : (
          <div
            className="flex items-center gap-2 px-2 py-1 hover:bg-gray-700 cursor-pointer text-sm"
            style={{ paddingLeft: `${level * 12 + 24}px` }}
            onClick={() => file.content && onFileSelect(file.content)}
          >
            <FaReact className="text-[#61dafb] flex-shrink-0" size={14} />
            <span className="text-gray-300">{file.name}</span>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="bg-[#1e1e1e] border-r border-gray-700 flex flex-col h-full" style={{ width: `${width}px` }}>
      <div className="px-4 py-3 text-xs text-gray-400 uppercase tracking-wide border-b border-gray-700">
        Explorer
      </div>
      <div className="flex-1 overflow-y-auto py-2">
        {renderFileTree(fileStructure)}
      </div>
    </div>
  );
}
