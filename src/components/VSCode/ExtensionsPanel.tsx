'use client';

import { useState } from 'react';
import { SiGithubcopilot, SiAtlassian, SiYaml, SiDotnet, SiUnity } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { MdVerified, MdClose } from 'react-icons/md';

export default function ExtensionsPanel() {
    const [selectedExtensionUrl, setSelectedExtensionUrl] = useState<string | null>(null);

    const extensions = [
        {
            name: 'Atlassian: Jira, Rovo Dev...',
            publisher: 'Atlassian',
            description: 'Bringing the power of Jira, Rovo ...',
            icon: <SiAtlassian className="text-[#0052CC]" size={40} />,
            verified: true,
            marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=Atlassian.atlascode'
        },
        {
            name: 'GitHub Copilot',
            publisher: 'GitHub',
            description: 'AI pair programmer - kod önerileri',
            icon: <SiGithubcopilot className="text-white" size={40} />,
            verified: true,
            marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=GitHub.copilot'
        },
        {
            name: 'GitHub Copilot Chat',
            publisher: 'GitHub',
            description: 'AI asistan ile sohbet',
            icon: <IoChatboxEllipsesOutline className="text-purple-400" size={40} />,
            verified: true,
            marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat'
        },
        {
            name: 'C# Dev Kit',
            publisher: 'Microsoft',
            description: 'C# geliştirme araçları',
            icon: <TbBrandCSharp className="text-purple-600" size={40} />,
            verified: true,
            marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit'
        },
        {
            name: 'C#',
            publisher: 'Microsoft',
            description: 'C# dil desteği ve IntelliSense',
            icon: <TbBrandCSharp className="text-green-600" size={40} />,
            verified: true,
            marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp'
        },
        {
            name: 'YAML',
            publisher: 'Red Hat',
            description: 'YAML dosya desteği',
            icon: <SiYaml className="text-red-500" size={40} />,
            verified: true,
            marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml'
        },
        {
            name: '.NET Install Tool',
            publisher: 'Microsoft',
            description: '.NET runtime kurulum yardımcısı',
            icon: <SiDotnet className="text-purple-500" size={40} />,
            verified: true,
            marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.vscode-dotnet-runtime'
        },
        {
            name: 'Visual Studio Tools for Unity',
            publisher: 'Microsoft',
            description: 'Unity oyun geliştirme desteği',
            icon: <SiUnity className="text-gray-300" size={40} />,
            verified: true,
            marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=VisualStudioToolsForUnity.vstuc'
        },
    ];

    return (
        <>
            <div className="w-80 bg-[#1e1e1e] border-r border-gray-700 flex flex-col h-full">
                <div className="px-4 py-3 text-xs text-gray-400 uppercase tracking-wide border-b border-gray-700">
                    Extensions
                </div>

                <div className="flex-1 overflow-y-auto">
                    {extensions.map((ext, idx) => (
                        <div
                            key={idx}
                            className="px-6 py-5 hover:bg-[#2a2d2e] cursor-pointer border-b border-gray-800"
                            onClick={() => setSelectedExtensionUrl(ext.marketplaceUrl)}
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
                    ))}
                </div>
            </div>
        </>
    );
}
