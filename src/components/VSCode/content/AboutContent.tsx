'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function AboutContent() {
  const code = `// hakkımda.tsx

interface Developer {
  name: "Muhammet Yeşil";
  role: "Full Stack Developer";
  location: "Turkey";
  bio: "Modern web teknolojileri ile kullanıcı odaklı uygulamalar geliştiriyorum";
  yearsOfExperience: 3;
  education: "Bilgisayar Mühendisliği";
  interests: [
    "Web Development",
    "UI/UX Design",
    "Open Source",
    "Problem Solving"
  ];
}

export default Developer;`;

  return (
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
  );
}
