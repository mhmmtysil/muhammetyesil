'use client';

import { useState, useRef, useEffect } from 'react';
import { FaReact } from 'react-icons/fa';
import { VscSearch } from 'react-icons/vsc';
import { SiGit } from 'react-icons/si';

export default function SearchPanel({ 
  onFileSelect, 
  width = 250, 
  onWidthChange 
}: { 
  onFileSelect: (content: string) => void; 
  width?: number; 
  onWidthChange?: (width: number) => void;
}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Array<{ file: string; line: string; content: string }>>([]);
    const [currentWidth, setCurrentWidth] = useState(width);
    const [isResizing, setIsResizing] = useState(false);
    const panelRef = useRef<HTMLDivElement>(null);

    const getFileIcon = (fileName: string) => {
        if (fileName === '.gitignore') {
            return <SiGit className="text-[#f05032] flex-shrink-0" size={12} />;
        }
        return <FaReact className="text-[#61dafb] flex-shrink-0" size={12} />;
    };

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

    const searchableContent = [
    { file: '.gitignore', content: 'gitignore', lines: ['negativity', 'procrastination', 'toxic', 'overthinking', 'dreams', 'goals', 'health'] },
    { file: 'package.json', content: 'packagejson', lines: ['Hayallerini başlat', 'Kendini test et', 'Kendini geliştir', 'Başarılarını paylaş', 'motivation', 'hardwork', 'learning', 'kindness', 'coffee', 'family', 'friends', 'procrastination', 'self-doubt', 'fear'] },
    { file: 'hakkımda.tsx', content: 'about', lines: ['Muhammet Yeşil', 'Full Stack Developer', 'TypeScript', 'React', 'Next.js'] },
    { file: 'projeler.tsx', content: 'projects', lines: ['E-Ticaret Platformu', 'Task Yönetim Sistemi', 'API Gateway', 'Next.js', 'MongoDB'] },
    { file: 'yetenekler.tsx', content: 'skills', lines: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Docker', 'AWS'] },
    { file: 'iletişim.tsx', content: 'contact', lines: ['email', 'github', 'instagram', 'linkedin'] },
    ];

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        if (term.length < 2) {
            setSearchResults([]);
            return;
        }

        const results: Array<{ file: string; line: string; content: string }> = [];
        searchableContent.forEach((item) => {
            item.lines.forEach((line) => {
                if (line.toLowerCase().includes(term.toLowerCase())) {
                    results.push({
                        file: item.file,
                        line: line,
                        content: item.content
                    });
                }
            });
        });
        setSearchResults(results);
    };

    return (
        <div ref={panelRef} className="bg-[#1e1e1e] border-r border-gray-700 flex flex-col h-full relative" style={{ width: `${currentWidth}px` }}>
            <div className="px-4 py-3 text-xs text-gray-400 uppercase tracking-wide border-b border-gray-700">
                Search
            </div>
            <div className="p-4">
                <div className="relative">
                    
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder="Ara..."
                        className="w-full pl-10 pr-3 py-2 bg-[#252526] border border-gray-600 rounded text-gray-300 text-sm focus:border-blue-500 focus:outline-none"
                    />
                </div>
            </div>
            <div className="flex-1 overflow-y-auto px-2">
                {searchResults.length > 0 ? (
                    <div className="space-y-1">
                        <div className="text-xs text-gray-500 px-2 py-1">
                            {searchResults.length} sonuç bulundu
                        </div>
                        {searchResults.map((result, idx) => (
                            <div
                                key={idx}
                                className="px-2 py-2 hover:bg-gray-700 cursor-pointer rounded text-sm"
                                onClick={() => onFileSelect(result.content)}
                            >
                                <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                                    {getFileIcon(result.file)}
                                    <span>{result.file}</span>
                                </div>
                                <div className="text-gray-300 pl-5">{result.line}</div>
                            </div>
                        ))}
                    </div>
                ) : searchTerm.length >= 2 ? (
                    <div className="text-gray-500 text-sm px-2">Sonuç bulunamadı</div>
                ) : (
                    <div className="text-gray-500 text-sm px-2">Aramak için en az 2 karakter girin</div>
                )}
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
