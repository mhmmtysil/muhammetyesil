'use client';

import { useState, useEffect, useRef } from 'react';

const initialTerminalContent = [
    { type: 'command', text: 'npm run dev' },
    { type: 'output', text: '> portfolio@1.0.0 dev' },
    { type: 'output', text: '> next dev' },
    { type: 'success', text: '✓ Ready in 2.3s' },
    { type: 'info', text: '○ Local: http://localhost:3000' },
    { type: 'info', text: '○ Network: http://192.168.1.100:3000' },
    { type: 'output', text: '' },
    { type: 'info', text: '💡 Terminal çalışır durumda! "help" komutunu kullanarak mevcut komutları görebilirsiniz' },
];

interface TerminalProps {
    onFileSelect: (file: string) => void;
}

export default function Terminal({ onFileSelect }: TerminalProps) {
    const [lines, setLines] = useState<Array<{ type: string; text: string }>>([]);
    const [currentLine, setCurrentLine] = useState(0);
    const [input, setInput] = useState('');
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (currentLine < initialTerminalContent.length) {
            const timer = setTimeout(() => {
                setLines([...initialTerminalContent.slice(0, currentLine + 1)]);
                setCurrentLine(currentLine + 1);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [currentLine]);

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim();
        if (!trimmedCmd) return;

        // Add command to history
        setCommandHistory([...commandHistory, trimmedCmd]);
        setHistoryIndex(-1);

        // Add command to terminal
        const newLines = [...lines, { type: 'command', text: trimmedCmd }];

        // Process command
        let output = '';
        const lowerCmd = trimmedCmd.toLowerCase();

        if (lowerCmd === 'help') {
            output = 'Available commands:\n  help - Show this help message\n  clear - Clear terminal\n  whoami - About me\n  date - Show current date\n  skills - Tech stack\n  projects - My projects\n  contact - All contact info\n  email - Email address\n  github - GitHub profile\n  instagram - Instagram profile\n  linkedin - LinkedIn profile';
        } else if (lowerCmd === 'clear') {
            setLines([]);
            setInput('');
            return;
        } else if (lowerCmd === 'whoami') {
            output = 'Muhammet Yeşil - Full Stack Developer';
        } else if (lowerCmd === 'date') {
            output = new Date().toString();
        } else if (lowerCmd === 'skills') {
            output = 'Tech Stack: C#, .NET, React, Next.js, Unity, SQL Server, MongoDB\nType "projects" to see my work!';
        } else if (lowerCmd === 'projects') {
            output = '8 projects available - Check the Projects tab for details';
        } else if (lowerCmd === 'contact') {
            output = 'Contact Information:\n  Email: muhammetyesil@outlook.com.tr\n  GitHub: github.com/mhmmtysil\n  Instagram: @mhmmtysil\n  LinkedIn: linkedin.com/in/muhammetyesil';
        } else if (lowerCmd === 'email') {
            output = 'Opening email client...';
            window.open('mailto:muhammetyesil@outlook.com.tr', '_blank');
        } else if (lowerCmd === 'github') {
            output = 'Opening GitHub profile...';
            window.open('https://github.com/mhmmtysil', '_blank');
        } else if (lowerCmd === 'instagram') {
            output = 'Opening Instagram profile...';
            window.open('https://instagram.com/mhmmtysil', '_blank');
        } else if (lowerCmd === 'linkedin') {
            output = 'Opening LinkedIn profile...';
            window.open('https://linkedin.com/in/muhammetyesil', '_blank');
        } else {
            output = `Command not found: ${trimmedCmd}\nType "help" for available commands`;
        }

        setLines([...newLines, { type: 'output', text: output }]);
        setInput('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleCommand(input);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex !== -1) {
                const newIndex = historyIndex + 1;
                if (newIndex >= commandHistory.length) {
                    setHistoryIndex(-1);
                    setInput('');
                } else {
                    setHistoryIndex(newIndex);
                    setInput(commandHistory[newIndex]);
                }
            }
        }
    };

    const getLineColor = (type: string) => {
        switch (type) {
            case 'command':
                return 'text-yellow-400';
            case 'success':
                return 'text-green-400';
            case 'info':
                return 'text-blue-400';
            case 'help':
                return 'text-blue-400';
            default:
                return 'text-gray-300';
        }
    };

    return (
        <div className="h-48 bg-[#1e1e1e] border-t border-gray-700 flex flex-col">
            <div className="flex items-center gap-4 px-4 py-2 bg-[#252526] border-b border-gray-700">
                <span className="text-sm text-gray-300">TERMINAL</span>
                <span className="text-xs text-gray-500">bash</span>
            </div>
            <div
                className="flex-1 overflow-y-auto p-4 font-mono text-sm"
                onClick={() => inputRef.current?.focus()}
            >
                {lines.map((line, index) => (
                    <div key={index} className={`${getLineColor(line.type)} mb-1 whitespace-pre-wrap`}>
                        {line.type === 'command' && <span className="text-green-400 mr-2">$</span>}
                        {line.text}
                    </div>
                ))}
                <div className="flex items-center">
                    <span className="text-green-400 mr-2">$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent outline-none text-gray-300"
                        autoFocus
                    />
                </div>
            </div>
        </div>
    );
}
