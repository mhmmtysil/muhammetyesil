'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';

export default function ContactContent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const code = `// iletişim.tsx

interface ContactInfo {
  email: "muhammetyesil@outlook.com.tr";
  github: "github.com/mhmmtysil";
  instagram: "@mhmmtysil";
  linkedin: "linkedin.com/in/muhammetyeşil";
}

export default ContactInfo;`;

    return (
        <div className="p-8">
            <div className="h-full flex flex-col overflow-auto">
                <div className="flex-shrink-0">
                    <SyntaxHighlighter
                        language="typescript"
                        style={vscDarkPlus}
                        showLineNumbers
                        customStyle={{
                            margin: 0,
                            padding: '2rem',
                            background: '#1e1e1e',
                            fontSize: '15px',
                            lineHeight: '1.6',
                        }}
                    >
                        {code}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
}
