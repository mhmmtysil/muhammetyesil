'use client';

export default function GitPanel({ width = 250 }: { width?: number }) {
  const commits = [
    { hash: 'a1b2c3d', message: 'Initial portfolio setup', date: '2 saat önce', author: 'Muhammet Yeşil' },
    { hash: 'e4f5g6h', message: 'Add VS Code theme', date: '1 saat önce', author: 'Muhammet Yeşil' },
    { hash: 'i7j8k9l', message: 'Update content sections', date: '30 dakika önce', author: 'Muhammet Yeşil' },
    { hash: 'm0n1o2p', message: 'Fix responsive design', date: '10 dakika önce', author: 'Muhammet Yeşil' },
  ];

  return (
    <div className="bg-[#1e1e1e] border-r border-gray-700 flex flex-col h-full" style={{ width: `${width}px` }}>
      <div className="px-4 py-3 text-xs text-gray-400 uppercase tracking-wide border-b border-gray-700">
        Source Control
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-green-400">⎇</span>
          <span className="text-gray-300 text-sm">main</span>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="text-xs text-gray-400">CHANGES</div>
          <div className="text-xs text-gray-500 pl-2">No changes</div>
        </div>
      </div>

      <div className="border-t border-gray-700 px-4 py-3">
        <div className="text-xs text-gray-400 mb-3">RECENT COMMITS</div>
        <div className="space-y-3">
          {commits.map((commit) => (
            <div key={commit.hash} className="text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-400 font-mono text-xs">{commit.hash}</span>
              </div>
              <div className="text-gray-300 text-xs mt-1">{commit.message}</div>
              <div className="text-gray-500 text-xs mt-1">{commit.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
