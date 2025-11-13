'use client';

import { useState } from 'react';

export default function SearchPanel({ onFileSelect }: { onFileSelect: (content: string) => void }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Array<{ file: string; line: string; content: string }>>([]);

    const searchableContent = [
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
        <div className="w-64 bg-[#1e1e1e] border-r border-gray-700 flex flex-col h-full">
            <div className="px-4 py-3 text-xs text-gray-400 uppercase tracking-wide border-b border-gray-700">
                Search
            </div>
            <div className="p-4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Ara..."
                    className="w-full px-3 py-2 bg-[#252526] border border-gray-600 rounded text-gray-300 text-sm focus:border-blue-500 focus:outline-none"
                />
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
                                <div className="text-gray-400 text-xs mb-1">{result.file}</div>
                                <div className="text-gray-300">{result.line}</div>
                            </div>
                        ))}
                    </div>
                ) : searchTerm.length >= 2 ? (
                    <div className="text-gray-500 text-sm px-2">Sonuç bulunamadı</div>
                ) : (
                    <div className="text-gray-500 text-sm px-2">Aramak için en az 2 karakter girin</div>
                )}
            </div>
        </div>
    );
}
