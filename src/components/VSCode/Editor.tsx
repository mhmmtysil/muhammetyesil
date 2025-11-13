'use client';

import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { FaReact } from 'react-icons/fa';
import { VscCode, VscVscode, VscTerminal } from 'react-icons/vsc';
import { IoMdArrowRoundDown } from 'react-icons/io';
import AboutContent from './content/AboutContent';
import ProjectsContent from './content/ProjectsContent';
import SkillsContent from './content/SkillsContent';
import ContactContent from './content/ContactContent';

const contentMap: Record<string, { component: React.ComponentType; filename: string }> = {
    about: { component: AboutContent, filename: 'hakkımda.tsx' },
    projects: { component: ProjectsContent, filename: 'projeler.tsx' },
    skills: { component: SkillsContent, filename: 'yetenekler.tsx' },
    contact: { component: ContactContent, filename: 'iletişim.tsx' },
};

export default function Editor({ currentFile, fileClickCount, showTabs = true }: { currentFile: string; fileClickCount?: number; showTabs?: boolean }) {
    const [openTabs, setOpenTabs] = useState<string[]>([]);
    const [activeTab, setActiveTab] = useState('');

    const handleFileSelect = (file: string) => {
        if (!openTabs.includes(file)) {
            setOpenTabs([...openTabs, file]);
        }
        setActiveTab(file);
    };

    const closeTab = (file: string, e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();

        // Eğer bu tab openTabs listesinde yoksa (zaten kapalıysa), hiçbir şey yapma
        if (!openTabs.includes(file)) {
            return;
        }

        const newTabs = openTabs.filter(tab => tab !== file);
        setOpenTabs(newTabs);
        if (activeTab === file && newTabs.length > 0) {
            setActiveTab(newTabs[newTabs.length - 1]);
        } else if (newTabs.length === 0) {
            setActiveTab('');
        }
    };

    const handleDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const items = Array.from(openTabs);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setOpenTabs(items);
    };

    const CurrentContent = contentMap[activeTab]?.component;

    // Update active tab when file changes from sidebar
    useEffect(() => {
        if (currentFile && contentMap[currentFile]) {
            // Her zaman dosyayı aç, kapalıysa yeniden aç
            if (!openTabs.includes(currentFile)) {
                setOpenTabs([...openTabs, currentFile]);
            }
            setActiveTab(currentFile);
        }
    }, [fileClickCount]);

    if (showTabs)
        return (
            <div className="flex-1 flex flex-col bg-[#1e1e1e]">
                {/* Tabs */}

                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="tabs" direction="horizontal">
                        {(provided) => (
                            <div
                                className="flex items-center bg-[#252526] border-b border-gray-700 overflow-x-auto"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {openTabs.map((tab, index) => (
                                    <Draggable key={tab} draggableId={tab} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={`group relative flex items-center gap-3 pl-3 pr-4 h-9 border-r border-gray-700 border-t-2 cursor-pointer min-w-fit transition-all ${activeTab === tab
                                                    ? 'bg-[#1e1e1e] text-white border-t-blue-500'
                                                    : 'text-gray-400 hover:bg-[#2a2d2e] border-t-transparent'
                                                    } ${snapshot.isDragging ? 'opacity-50' : ''}`}
                                                onClick={() => {
                                                    setActiveTab(tab);
                                                }}
                                                onMouseDown={(e) => {
                                                    if (e.button === 1) {
                                                        e.preventDefault();
                                                        closeTab(tab, e);
                                                    }
                                                }}
                                            >
                                                <span></span>
                                                <FaReact className="text-[#61dafb] flex-shrink-0" size={16} />
                                                <span className="text-sm select-none">{contentMap[tab]?.filename}</span>
                                                <button
                                                    onClick={(e) => closeTab(tab, e)}
                                                    className="opacity-0 group-hover:opacity-100 hover:bg-gray-600 rounded w-4 h-4 flex items-center justify-center text-xs text-gray-400 hover:text-white transition-all"
                                                    type="button"
                                                    aria-label="Close tab"
                                                >
                                                    ✕
                                                </button>
                                                <span></span>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                {/* Editor Content */}
                <div className="flex-1 overflow-auto p-4 md:p-8 bg-[#1e1e1e]">
                    {openTabs.length === 0 ? (
                        <div className="flex items-center justify-center h-full">
                            <div className="text-center px-4">
                                <div className="flex justify-center mb-4">
                                    <VscVscode className="text-gray-700" size={160} />
                                </div>
                                <p className="text-lg md:text-xl text-gray-500 mb-2">Açık dosya yok</p>
                                <p className="text-xs md:text-sm text-gray-500 mb-8">
                                    <span className="md:hidden">Alt menüden 📁 Explorer'a tıklayıp bir dosya seçin</span>
                                    <span className="hidden md:inline">Sol menüden bir dosya seçin</span>
                                </p>

                                <div className="hidden md:flex items-center justify-center gap-6 text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <VscTerminal size={20} className="text-gray-600" />
                                        <span className="text-sm">Terminal için:</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1 px-2 py-1 bg-[#252526] rounded border border-gray-700">
                                            <span className="text-xs">⌘</span>
                                            <span className="text-xs">K</span>
                                        </div>
                                        <span className="text-xs text-gray-600">/</span>
                                        <div className="flex items-center gap-1 px-2 py-1 bg-[#252526] rounded border border-gray-700">
                                            <span className="text-xs">Ctrl</span>
                                            <span className="text-xs">K</span>
                                        </div>
                                        <span className="text-xs text-gray-600">veya</span>
                                        <div className="flex items-center gap-1 px-2 py-1 bg-[#252526] rounded border border-gray-700">
                                            <IoMdArrowRoundDown size={14} className="rotate-180" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="max-w-4xl" key={activeTab}>
                            <CurrentContent />
                        </div>
                    )}
                </div>
            </div>
        );
    return (
        <div className="flex-1 overflow-auto p-8 bg-[#1e1e1e]">
        </div>
    );
}
