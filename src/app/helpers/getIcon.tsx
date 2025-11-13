
import { FaReact, FaFolder, FaFolderOpen } from 'react-icons/fa';
import {
    SiTypescript, SiJavascript, SiPython, SiCss3, SiHtml5,
    SiJson, SiMarkdown, SiYaml, SiGit
} from 'react-icons/si';
import { VscCode, VscJson, VscMarkdown } from 'react-icons/vsc';
import { AiOutlineFileText } from 'react-icons/ai';

const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    const size = 14;

    // .gitignore gibi dosyalar için özel kontrol
    if (fileName === '.gitignore') {
        return <SiGit className="text-[#f05032] flex-shrink-0" size={size} />;
    }

    switch (extension) {
        case 'tsx':
        case 'jsx':
            return <FaReact className="text-[#61dafb] flex-shrink-0" size={size} />;
        case 'ts':
            return <SiTypescript className="text-[#3178c6] flex-shrink-0" size={size} />;
        case 'js':
            return <SiJavascript className="text-[#f7df1e] flex-shrink-0" size={size} />;
        case 'py':
            return <SiPython className="text-[#3776ab] flex-shrink-0" size={size} />;
        case 'css':
            return <SiCss3 className="text-[#1572b6] flex-shrink-0" size={size} />;
        case 'html':
            return <SiHtml5 className="text-[#e34c26] flex-shrink-0" size={size} />;
        case 'json':
            return <VscJson className="text-[#f7df1e] flex-shrink-0" size={size} />;
        case 'md':
            return <VscMarkdown className="text-[#519aba] flex-shrink-0" size={size} />;
        case 'yml':
        case 'yaml':
            return <SiYaml className="text-[#cb171e] flex-shrink-0" size={size} />;
        case 'gitignore':
            return <SiGit className="text-[#f05032] flex-shrink-0" size={size} />;
        default:
            return <AiOutlineFileText className="text-gray-400 flex-shrink-0" size={size} />;
    }
};
export default getFileIcon;