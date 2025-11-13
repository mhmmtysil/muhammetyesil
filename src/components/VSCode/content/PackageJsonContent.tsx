'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import vscDarkPlus from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";

export default function PackageJsonContent() {
    const json = {
        name: "muhammet-yesil-portfolio",
        version: "1.0.0",
        description: "Bir satır kod, bir tutam umut, sonsuz döngüde mutluluk. 🌀✨",
        author: "Muhammet Yeşil",
        scripts: {
            start: "Hayallerini başlat 🚀",
            test: "Kendini test et 💡",
            build: "Kendini geliştir 🔨",
            lint: "Hataları bul ve düzelt 🧹",
            deploy: "Başarılarını paylaş 🌍"
        },
        dependencies: {
            motivation: "^100.0.0",
            hardwork: "^100.0.0",
            learning: "^100.0.0",
            kindness: "^100.0.0",
            coffee: "*",
            family: "*",
            friends: "*"
        },
        devDependencies: {
            procrastination: "0.0.0",
            selfDoubt: "0.0.0",
            fear: "0.0.0"
        }
    };
    return (
        <div className="p-8 text-gray-300 font-mono text-sm leading-relaxed">
            <SyntaxHighlighter
                language="json"
                style={vscDarkPlus}
                showLineNumbers
                customStyle={{
                    margin: 0,
                    padding: '1rem',
                    background: '#1e1e1e',
                    fontSize: '13px',
                    lineHeight: '1.6',
                }}
                wrapLongLines={true}
                className="md:!p-8 md:!text-[15px]"
            >
                {JSON.stringify(json, null, 2)}
            </SyntaxHighlighter>

        </div>
    );
}
