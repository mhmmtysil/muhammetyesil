'use client';

import { useState, useRef, useEffect } from 'react';
import { SiGithubcopilot, SiAtlassian, SiYaml, SiDotnet, SiUnity } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { MdVerified } from 'react-icons/md';
import { ReactNode } from 'react';

interface Extension {
    name: string;
    publisher: string;
    description: string;
    icon: ReactNode;
    verified: boolean;
    marketplaceUrl: string;
    version?: string;
    downloads?: string;
    rating?: number;
    longDescription?: string;
}

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

    const extensions: Extension[] = [
        {
            name: 'Atlassian: Jira, Rovo Dev...',
            publisher: 'Atlassian',
            description: 'Bringing the power of Jira, Rovo ...',
            icon: <SiAtlassian className="text-[#0052CC]" size={40} />,
            verified: true,
            marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=Atlassian.atlascode',
            version: '3.0.1',
            downloads: '1.2M',
            rating: 4,
            longDescription: 'Atlassian for VS Code brings the power of Jira and Bitbucket to VS Code. Plan and track work, create pull requests, view build statuses, get notifications, and more.'
        },
        {
            name: 'GitHub Copilot',
            publisher: 'GitHub',
            description: 'AI pair programmer - kod önerileri',
            icon: <SiGithubcopilot className="text-white" size={40} />,
            verified: true,
            marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=GitHub.copilot',
            version: '1.138.0',
            downloads: '15M',
            rating: 5,
            longDescription: 'GitHub Copilot is an AI pair programmer that helps you write code faster. It suggests whole lines or blocks of code as you type.'
        },
        {
            name: 'GitHub Copilot Chat',
            publisher: 'GitHub',
            description: 'AI asistan ile sohbet',
            icon: <IoChatboxEllipsesOutline className="text-purple-400" size={40} />,
            verified: true,
            marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat',
            version: '0.11.0',
            downloads: '8M',
            rating: 5,
            longDescription: 'GitHub Copilot Chat is a companion extension to GitHub Copilot that houses experimental chat features.'
        },
        {
            name: 'C# Dev Kit',
            publisher: 'Microsoft',
            description: 'C# geliştirme araçları',
            icon: <TbBrandCSharp className="text-purple-600" size={40} />,
            verified: true,
            marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit',
            version: '1.2.0',
            downloads: '3.5M',
            rating: 4,
            longDescription: 'Official C# extension from Microsoft. Provides project system, code editing, and debugging support for C# and .NET.'
        },
        {
            name: 'C#',
            publisher: 'Microsoft',
            description: 'C# dil desteği ve IntelliSense',
            icon: <TbBrandCSharp className="text-green-600" size={40} />,
            verified: true,
            marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp',
            version: '2.8.0',
            downloads: '12M',
            rating: 5,
            longDescription: 'Lightweight development tools for .NET Core and C# with IntelliSense, debugging, and code navigation features.'
        },
        {
            name: 'YAML',
            publisher: 'Red Hat',
            description: 'YAML dosya desteği',
            icon: <SiYaml className="text-red-500" size={40} />,
            verified: true,
            marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml',
            version: '1.14.0',
            downloads: '6M',
            rating: 4,
            longDescription: 'Provides comprehensive YAML language support via the yaml-language-server with built-in Kubernetes syntax support.'
        },
        {
            name: '.NET Install Tool',
            publisher: 'Microsoft',
            description: '.NET runtime kurulum yardımcısı',
            icon: <SiDotnet className="text-purple-500" size={40} />,
            verified: true,
            marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.vscode-dotnet-runtime',
            version: '2.0.0',
            downloads: '5M',
            rating: 4,
            longDescription: 'This extension installs and manages different versions of the .NET SDK and Runtime.'
        },
        {
            name: 'Visual Studio Tools for Unity',
            publisher: 'Microsoft',
            description: 'Unity oyun geliştirme desteği',
            icon: <SiUnity className="text-gray-300" size={40} />,
            verified: true,
            marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=VisualStudioToolsForUnity.vstuc',
            version: '1.6.0',
            downloads: '2M',
            rating: 4,
            longDescription: 'Visual Studio Tools for Unity enables a rich programming and debugging experience for working with Unity projects.'
        },
    ];

    return (
        <>
            <div ref={panelRef} className="bg-[#1e1e1e] border-r border-gray-700 flex flex-col h-full relative" style={{ width: `${currentWidth}px` }}>
                <div className="px-4 py-3 text-xs text-gray-400 uppercase tracking-wide border-b border-gray-700">
                    Extensions
                </div>

                <div className="flex-1 overflow-y-auto">
                    {extensions.map((ext, idx) => (
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
