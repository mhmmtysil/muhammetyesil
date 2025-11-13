'use client';

import Extensions from '@/app/lib/extensions';
import { useState, useRef, useEffect } from 'react';
import { MdVerified } from 'react-icons/md';


export default function ExtensionsPanel({
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



    return (
        <>
            <div ref={panelRef} className="bg-[#1e1e1e] border-r border-gray-700 flex flex-col h-full relative" style={{ width: `${currentWidth}px` }}>
                <div className="px-4 py-3 text-xs text-gray-400 uppercase tracking-wide border-b border-gray-700">
                    Extensions
                </div>

                <div className="flex-1 overflow-y-auto">
                    {Extensions.map((ext, idx) => (
                        <div className='flex flex-1 p-4' key={idx}>
                            <div
                                className="w-full px-6 py-5 hover:bg-[#2a2d2e] cursor-pointer border-b border-gray-800"
                                onClick={() => window.open(ext.marketplaceUrl, '_blank')}
                            >
                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center">
                                        {ext.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <span className="text-base text-gray-200 font-medium truncate">
                                                {ext.name}
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-400 mt-1.5 truncate">
                                            {ext.description}
                                        </div>
                                        <div className="flex items-center gap-1.5 mt-2">
                                            {ext.verified && (
                                                <MdVerified className="text-blue-500" size={14} />
                                            )}
                                            <span className="text-sm text-gray-500">{ext.publisher}</span>
                                        </div>
                                    </div>
                                    <button className="text-gray-500 hover:text-gray-300">
                                        <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                                            <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Resize Handle - wider hit area */}
                <div
                    className="absolute top-0 right-0 w-4 h-full cursor-col-resize z-50 group"
                    onMouseDown={() => setIsResizing(true)}
                >
                    <div className="absolute right-0 top-0 w-0.5 h-full bg-transparent group-hover:bg-blue-500 transition-colors" />
                </div>
            </div>
        </>
    );
}
