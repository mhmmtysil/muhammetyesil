
import {
    SiGithubcopilot, SiAtlassian, SiYaml, SiDotnet, SiUnity, SiPython, SiJavascript,
    SiTypescript, SiReact, SiVuedotjs, SiAngular, SiNodedotjs, SiDocker, SiKubernetes,
    SiGit, SiMarkdown, SiPrettier, SiEslint, SiJest, SiPostgresql, SiMongodb,
    SiRedis, SiGraphql, SiFirebase, SiAmazon, SiGooglecloud,
    SiTailwindcss, SiSass, SiBootstrap, SiHtml5, SiCss3, SiJquery, SiWebpack,
    SiVite, SiNextdotjs, SiNuxtdotjs, SiSvelte, SiDjango, SiFlask, SiFastapi,
    SiSpring, SiRuby, SiRubyonrails, SiPhp, SiLaravel, SiSymfony, SiGo,
    SiRust, SiCplusplus, SiKotlin, SiSwift, SiDart, SiFlutter
} from 'react-icons/si';
import { TbBrandCSharp, TbBrandGolang } from 'react-icons/tb';
import { IoChatboxEllipsesOutline, IoColorPaletteOutline, IoExtensionPuzzle } from 'react-icons/io5';
import { MdVerified, MdCode, MdBugReport, MdFormatPaint, MdSecurity } from 'react-icons/md';
import { VscJson, VscExtensions, VscFiles, VscGitCommit, VscTerminal } from 'react-icons/vsc';
import { FaCode, FaDatabase, FaPalette, FaFileCode, FaJava } from 'react-icons/fa';
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


const Extensions: Extension[] = [
    // AI & Productivity
    { name: 'GitHub Copilot', publisher: 'GitHub', description: 'AI pair programmer', icon: <SiGithubcopilot className="text-white" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=GitHub.copilot' },
    { name: 'GitHub Copilot Chat', publisher: 'GitHub', description: 'AI chat assistant', icon: <IoChatboxEllipsesOutline className="text-purple-400" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat' },
    { name: 'Tabnine', publisher: 'TabNine', description: 'AI code completion', icon: <MdCode className="text-blue-400" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode' },
    { name: 'IntelliCode', publisher: 'Microsoft', description: 'AI-assisted development', icon: <VscExtensions className="text-blue-500" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode' },

    // Language Support - C# & .NET
    { name: 'C#', publisher: 'Microsoft', description: 'C# language support', icon: <TbBrandCSharp className="text-green-600" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp' },
    { name: 'C# Dev Kit', publisher: 'Microsoft', description: 'C# development tools', icon: <TbBrandCSharp className="text-purple-600" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit' },
    { name: '.NET Install Tool', publisher: 'Microsoft', description: '.NET SDK installer', icon: <SiDotnet className="text-purple-500" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.vscode-dotnet-runtime' },

    // Language Support - JavaScript/TypeScript
    { name: 'ESLint', publisher: 'Microsoft', description: 'JavaScript linting', icon: <SiEslint className="text-purple-500" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint' },
    { name: 'Prettier', publisher: 'Prettier', description: 'Code formatter', icon: <SiPrettier className="text-pink-400" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode' },
    { name: 'JavaScript (ES6)', publisher: 'charalampos', description: 'ES6 snippets', icon: <SiJavascript className="text-yellow-400" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets' },
    { name: 'TypeScript Hero', publisher: 'rbbit', description: 'TypeScript tooling', icon: <SiTypescript className="text-blue-600" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero' },

    // Language Support - Python
    { name: 'Python', publisher: 'Microsoft', description: 'Python language support', icon: <SiPython className="text-blue-400" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ms-python.python' },
    { name: 'Pylance', publisher: 'Microsoft', description: 'Python IntelliSense', icon: <SiPython className="text-yellow-500" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance' },
    { name: 'Jupyter', publisher: 'Microsoft', description: 'Jupyter notebook support', icon: <FaCode className="text-orange-500" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter' },

    // Language Support - Java
    { name: 'Java Extension Pack', publisher: 'Microsoft', description: 'Java development pack', icon: <FaJava className="text-red-600" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack' },
    { name: 'Spring Boot Extension', publisher: 'VMware', description: 'Spring Boot support', icon: <SiSpring className="text-green-500" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=vmware.vscode-spring-boot' },

    // Language Support - Go
    { name: 'Go', publisher: 'Go Team', description: 'Go language support', icon: <SiGo className="text-cyan-400" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=golang.go' },
    { name: 'Go Test Explorer', publisher: 'premprakash', description: 'Go test runner', icon: <TbBrandGolang className="text-cyan-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=premparihar.gotestexplorer' },

    // Language Support - Rust
    { name: 'rust-analyzer', publisher: 'rust-lang', description: 'Rust language server', icon: <SiRust className="text-orange-600" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer' },
    { name: 'Crates', publisher: 'serayuzgur', description: 'Cargo.toml dependencies', icon: <SiRust className="text-red-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=serayuzgur.crates' },

    // Language Support - PHP
    { name: 'PHP Intelephense', publisher: 'bmewburn', description: 'PHP IntelliSense', icon: <SiPhp className="text-purple-600" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client' },
    { name: 'Laravel Extension', publisher: 'amiralizadeh9480', description: 'Laravel support', icon: <SiLaravel className="text-red-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=amiralizadeh9480.laravel-extra-intellisense' },

    // Language Support - Ruby
    { name: 'Ruby', publisher: 'Peng Lv', description: 'Ruby language support', icon: <SiRuby className="text-red-600" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=rebornix.Ruby' },
    { name: 'Ruby on Rails', publisher: 'hridoy', description: 'Rails snippets', icon: <SiRubyonrails className="text-red-700" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=hridoy.rails-snippets' },

    // Frameworks - React/Vue/Angular
    { name: 'ES7+ React/Redux', publisher: 'dsznajder', description: 'React snippets', icon: <SiReact className="text-cyan-400" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets' },
    { name: 'Vetur', publisher: 'Pine Wu', description: 'Vue.js tooling', icon: <SiVuedotjs className="text-green-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=octref.vetur' },
    { name: 'Angular Language Service', publisher: 'Angular', description: 'Angular support', icon: <SiAngular className="text-red-600" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=Angular.ng-template' },
    { name: 'Svelte', publisher: 'Svelte', description: 'Svelte support', icon: <SiSvelte className="text-orange-500" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode' },

    // Frameworks - Next.js/Nuxt
    { name: 'Next.js snippets', publisher: 'pulkitgangwar', description: 'Next.js snippets', icon: <SiNextdotjs className="text-white" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=PulkitGangwar.nextjs-snippets' },
    { name: 'Vite', publisher: 'antfu', description: 'Vite support', icon: <SiVite className="text-purple-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=antfu.vite' },

    // DevOps & Containers
    { name: 'Docker', publisher: 'Microsoft', description: 'Docker support', icon: <SiDocker className="text-blue-500" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker' },
    { name: 'Kubernetes', publisher: 'Microsoft', description: 'Kubernetes support', icon: <SiKubernetes className="text-blue-600" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ms-kubernetes-tools.vscode-kubernetes-tools' },
    { name: 'Remote - SSH', publisher: 'Microsoft', description: 'SSH remote development', icon: <VscTerminal className="text-green-500" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh' },
    { name: 'Remote - Containers', publisher: 'Microsoft', description: 'Container development', icon: <SiDocker className="text-cyan-500" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers' },

    // Git & Version Control
    { name: 'GitLens', publisher: 'GitKraken', description: 'Git supercharged', icon: <SiGit className="text-orange-600" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens' },
    { name: 'Git Graph', publisher: 'mhutchie', description: 'Git repository visualizer', icon: <VscGitCommit className="text-green-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph' },
    { name: 'Git History', publisher: 'Don Jayamanne', description: 'Git log viewer', icon: <SiGit className="text-red-600" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory' },

    // Database
    { name: 'SQL Server (mssql)', publisher: 'Microsoft', description: 'SQL Server support', icon: <FaDatabase className="text-red-500" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ms-mssql.mssql' },
    { name: 'PostgreSQL', publisher: 'Chris Kolkman', description: 'PostgreSQL client', icon: <SiPostgresql className="text-blue-600" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ckolkman.vscode-postgres' },
    { name: 'MongoDB', publisher: 'MongoDB', description: 'MongoDB support', icon: <SiMongodb className="text-green-600" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode' },
    { name: 'Redis', publisher: 'Dunn', description: 'Redis client', icon: <SiRedis className="text-red-600" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=Dunn.redis' },

    // Cloud & Deployment
    { name: 'Azure Tools', publisher: 'Microsoft', description: 'Azure development', icon: <FaCode className="text-blue-500" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack' },
    { name: 'AWS Toolkit', publisher: 'Amazon', description: 'AWS development', icon: <SiAmazon className="text-orange-500" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.aws-toolkit-vscode' },
    { name: 'Google Cloud Code', publisher: 'Google', description: 'GCP development', icon: <SiGooglecloud className="text-blue-400" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=GoogleCloudTools.cloudcode' },
    { name: 'Firebase', publisher: 'Toba', description: 'Firebase support', icon: <SiFirebase className="text-yellow-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=toba.vsfire' },

    // Testing
    { name: 'Jest', publisher: 'Orta', description: 'Jest test runner', icon: <SiJest className="text-red-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest' },
    { name: 'Test Explorer', publisher: 'Holger Benl', description: 'Test runner UI', icon: <MdBugReport className="text-green-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-test-explorer' },
    { name: 'Coverage Gutters', publisher: 'ryanluker', description: 'Code coverage display', icon: <FaCode className="text-green-400" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters' },

    // HTML/CSS
    { name: 'HTML CSS Support', publisher: 'ecmel', description: 'CSS IntelliSense', icon: <SiHtml5 className="text-orange-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css' },
    { name: 'Auto Rename Tag', publisher: 'Jun Han', description: 'Auto rename HTML tags', icon: <SiHtml5 className="text-red-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag' },
    { name: 'Live Server', publisher: 'Ritwick Dey', description: 'Local dev server', icon: <VscTerminal className="text-pink-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer' },
    { name: 'Tailwind CSS IntelliSense', publisher: 'Tailwind Labs', description: 'Tailwind autocomplete', icon: <SiTailwindcss className="text-cyan-400" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss' },
    { name: 'SASS', publisher: 'Syler', description: 'SASS/SCSS support', icon: <SiSass className="text-pink-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented' },
    { name: 'Bootstrap 5 Snippets', publisher: 'Anbuselvan', description: 'Bootstrap snippets', icon: <SiBootstrap className="text-purple-600" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=Anbuselvan.bootstrap-snippets' },

    // Markdown & Documentation
    { name: 'Markdown All in One', publisher: 'Yu Zhang', description: 'Markdown support', icon: <SiMarkdown className="text-white" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one' },
    { name: 'Markdown Preview', publisher: 'Matt Bierner', description: 'Enhanced markdown preview', icon: <SiMarkdown className="text-gray-400" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced' },

    // Themes & Icons
    { name: 'One Dark Pro', publisher: 'binaryify', description: 'Atom One Dark theme', icon: <FaPalette className="text-purple-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme' },
    { name: 'Material Icon Theme', publisher: 'Philipp Kief', description: 'Material Design icons', icon: <IoColorPaletteOutline className="text-blue-400" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme' },
    { name: 'Dracula Official', publisher: 'Dracula', description: 'Dracula theme', icon: <FaPalette className="text-pink-500" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula' },
    { name: 'Night Owl', publisher: 'sarah.drasner', description: 'Night Owl theme', icon: <FaPalette className="text-indigo-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=sdras.night-owl' },
    { name: 'Monokai Pro', publisher: 'monokai', description: 'Monokai Pro theme', icon: <FaPalette className="text-yellow-500" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode' },

    // Utilities
    { name: 'Path Intellisense', publisher: 'Christian Kohler', description: 'File path autocomplete', icon: <VscFiles className="text-blue-400" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense' },
    { name: 'Auto Close Tag', publisher: 'Jun Han', description: 'Auto close HTML/XML tags', icon: <FaFileCode className="text-orange-400" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag' },
    { name: 'Bracket Pair Colorizer', publisher: 'CoenraadS', description: 'Colorize bracket pairs', icon: <MdFormatPaint className="text-rainbow" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2' },
    { name: 'Indent Rainbow', publisher: 'oderwat', description: 'Colorize indentation', icon: <MdFormatPaint className="text-purple-400" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow' },
    { name: 'Better Comments', publisher: 'Aaron Bond', description: 'Enhanced comments', icon: <FaCode className="text-gray-400" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments' },
    { name: 'Code Spell Checker', publisher: 'Street Side Software', description: 'Spell checker', icon: <FaFileCode className="text-blue-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker' },
    { name: 'TODO Highlight', publisher: 'Wayou Liu', description: 'Highlight TODO comments', icon: <MdCode className="text-yellow-400" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight' },
    { name: 'Bookmarks', publisher: 'Alessandro Fragnani', description: 'Code bookmarks', icon: <VscFiles className="text-green-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks' },

    // REST & API
    { name: 'REST Client', publisher: 'Huachao Mao', description: 'REST API client', icon: <VscTerminal className="text-blue-400" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=humao.rest-client' },
    { name: 'Thunder Client', publisher: 'Ranga Vadhineni', description: 'Lightweight REST client', icon: <MdCode className="text-orange-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client' },
    { name: 'GraphQL', publisher: 'GraphQL Foundation', description: 'GraphQL support', icon: <SiGraphql className="text-pink-600" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql' },

    // Data Formats
    { name: 'YAML', publisher: 'Red Hat', description: 'YAML language support', icon: <SiYaml className="text-red-500" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml' },
    { name: 'XML Tools', publisher: 'Josh Johnson', description: 'XML formatting', icon: <VscJson className="text-orange-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=DotJoshJohnson.xml' },
    { name: 'JSON Tools', publisher: 'Erik Lynd', description: 'JSON utilities', icon: <VscJson className="text-yellow-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=eriklynd.json-tools' },

    // Mobile Development
    { name: 'Flutter', publisher: 'Dart Code', description: 'Flutter support', icon: <SiFlutter className="text-blue-400" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter' },
    { name: 'Dart', publisher: 'Dart Code', description: 'Dart language support', icon: <SiDart className="text-cyan-500" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code' },
    { name: 'React Native Tools', publisher: 'Microsoft', description: 'React Native support', icon: <SiReact className="text-blue-500" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native' },

    // Game Development
    { name: 'Unity Tools', publisher: 'Microsoft', description: 'Unity development', icon: <SiUnity className="text-gray-300" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=VisualStudioToolsForUnity.vstuc' },
    { name: 'Unreal Engine', publisher: 'Microsoft', description: 'Unreal Engine support', icon: <SiCplusplus className="text-blue-600" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools' },

    // Project Management
    { name: 'Atlassian for VS Code', publisher: 'Atlassian', description: 'Jira & Bitbucket', icon: <SiAtlassian className="text-blue-600" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=Atlassian.atlascode' },
    { name: 'Project Manager', publisher: 'Alessandro Fragnani', description: 'Project switcher', icon: <VscFiles className="text-purple-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager' },

    // Security
    { name: 'SonarLint', publisher: 'SonarSource', description: 'Code quality & security', icon: <MdSecurity className="text-red-500" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode' },
    { name: 'Snyk Security', publisher: 'Snyk', description: 'Security scanner', icon: <MdSecurity className="text-purple-600" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=snyk-security.snyk-vulnerability-scanner' },

    // Package Managers
    { name: 'npm Intellisense', publisher: 'Christian Kohler', description: 'npm autocomplete', icon: <SiNodedotjs className="text-red-600" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense' },
    { name: 'Version Lens', publisher: 'pflannery', description: 'Package version info', icon: <IoExtensionPuzzle className="text-blue-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens' },

    // Productivity & Snippets
    { name: 'Turbo Console Log', publisher: 'ChakrounAnas', description: 'Quick console.log', icon: <VscTerminal className="text-yellow-400" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log' },
    { name: 'Auto Import', publisher: 'steoates', description: 'Auto import modules', icon: <FaCode className="text-cyan-400" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=steoates.autoimport' },
    { name: 'Import Cost', publisher: 'Wix', description: 'Display import size', icon: <FaCode className="text-orange-400" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost' },
    { name: 'Polacode', publisher: 'pnp', description: 'Code screenshots', icon: <FaPalette className="text-blue-300" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=pnp.polacode' },

    // Collaboration
    { name: 'Live Share', publisher: 'Microsoft', description: 'Real-time collaboration', icon: <MdCode className="text-purple-500" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare' },
    { name: 'CodeStream', publisher: 'CodeStream', description: 'Code collaboration', icon: <VscGitCommit className="text-blue-500" size={40} />, verified: true, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=CodeStream.codestream' },

    // Performance
    { name: 'Webpack Bundle Analyzer', publisher: 'webpack', description: 'Bundle size analysis', icon: <SiWebpack className="text-blue-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=chrmarti.webpack-bundle-analyzer' },
    { name: 'Import Sorter', publisher: 'mike-co', description: 'Sort imports', icon: <FaCode className="text-green-500" size={40} />, verified: false, marketplaceUrl: 'https://marketplace.visualstudio.com/items?itemName=mike-co.import-sorter' },
];
export default Extensions;