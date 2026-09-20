export interface FeaturedRepo {
  full_name: string;
  name: string;
  owner: { login: string; avatar_url: string; type: string };
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  category: string;
  badge: string;
  country?: string;
  tier?: 'gov' | 'military' | 'enterprise' | 'community';
}

// ============ REPOS EM DESTAQUE ORIGINAIS ============
export const originalFeatured: FeaturedRepo[] = [
  {
    full_name: 'twentyhq/twenty',
    name: 'twenty',
    owner: { login: 'twentyhq', avatar_url: 'https://avatars.githubusercontent.com/u/119600393', type: 'Organization' },
    description: 'Building a modern alternative to Salesforce, powered by the community.',
    html_url: 'https://github.com/twentyhq/twenty',
    stargazers_count: 24800,
    forks_count: 3200,
    language: 'TypeScript',
    topics: ['crm', 'open-source', 'salesforce-alternative'],
    category: 'web',
    badge: '🏆 CRM Open Source'
  },
  {
    full_name: 'lyogavin/airllm',
    name: 'airllm',
    owner: { login: 'lyogavin', avatar_url: 'https://avatars.githubusercontent.com/u/2658310', type: 'User' },
    description: 'Run 70B+ LLM on single computer with 4GB memory only. AirLLM inference engine.',
    html_url: 'https://github.com/lyogavin/airllm',
    stargazers_count: 12500,
    forks_count: 1200,
    language: 'Python',
    topics: ['llm', 'inference', 'ai', 'memory-efficient'],
    category: 'ai',
    badge: '🧠 LLM 4GB RAM'
  },
  {
    full_name: 'MiniMax-AI/cli',
    name: 'cli',
    owner: { login: 'MiniMax-AI', avatar_url: 'https://avatars.githubusercontent.com/u/170984947', type: 'Organization' },
    description: 'MiniMax CLI - Command line interface for MiniMax AI models and services.',
    html_url: 'https://github.com/MiniMax-AI/cli',
    stargazers_count: 5800,
    forks_count: 620,
    language: 'TypeScript',
    topics: ['cli', 'ai', 'minimax', 'developer-tools'],
    category: 'ai',
    badge: '⚡ AI CLI'
  },
  {
    full_name: 'e2b-dev/awesome-ai-agents',
    name: 'awesome-ai-agents',
    owner: { login: 'e2b-dev', avatar_url: 'https://avatars.githubusercontent.com/u/116333337', type: 'Organization' },
    description: 'A list of AI autonomous agents 🤖 - The most complete collection.',
    html_url: 'https://github.com/e2b-dev/awesome-ai-agents',
    stargazers_count: 18900,
    forks_count: 1800,
    language: 'Markdown',
    topics: ['ai', 'agents', 'awesome-list', 'autonomous-agents'],
    category: 'agents',
    badge: '🤖 AI Agents'
  }
];

// ============ MULTI-AGENTES & COGNIÇÃO ============
export const multiAgentRepos: FeaturedRepo[] = [
  {
    full_name: 'browser-use/browser-use',
    name: 'browser-use',
    owner: { login: 'browser-use', avatar_url: 'https://avatars.githubusercontent.com/u/192012301', type: 'Organization' },
    description: 'Agents that use the browser.',
    html_url: 'https://github.com/browser-use/browser-use',
    stargazers_count: 115539,
    forks_count: 12713,
    language: 'Python',
    topics: ['ai-agents', 'ai-tools', 'browser-automation', 'browser-use', 'llm'],
    category: 'agents',
    badge: '🌐 Browser Agents'
  },
  {
    full_name: 'Companion-Inc/feynman',
    name: 'feynman',
    owner: { login: 'Companion-Inc', avatar_url: 'https://avatars.githubusercontent.com/u/231637121', type: 'Organization' },
    description: 'The open source AI research agent.',
    html_url: 'https://github.com/Companion-Inc/feynman',
    stargazers_count: 9719,
    forks_count: 1084,
    language: 'TypeScript',
    topics: [],
    category: 'agents',
    badge: '🔬 Research Agent'
  },
  {
    full_name: 'google/artemis',
    name: 'artemis',
    owner: { login: 'google', avatar_url: 'https://avatars.githubusercontent.com/u/1342004', type: 'Organization' },
    description: 'Turns natural-language instructions into reliable Android automation. 99%+ success rate on the AndroidWorld benchmark.',
    html_url: 'https://github.com/google/artemis',
    stargazers_count: 8329,
    forks_count: 789,
    language: 'Python',
    topics: ['ai-agents', 'android', 'google', 'test-automation', 'testing'],
    category: 'agents',
    badge: '📱 Android Automation'
  },
  {
    full_name: 'halofyai/halofy',
    name: 'halofy',
    owner: { login: 'halofyai', avatar_url: 'https://avatars.githubusercontent.com/u/264338742', type: 'Organization' },
    description: 'Open access and governance layer for AI agents: identity, policy, provenance, audit, and signed erasure.',
    html_url: 'https://github.com/halofyai/halofy',
    stargazers_count: 336,
    forks_count: 24,
    language: 'TypeScript',
    topics: ['access-control', 'agent-governance', 'agent-memory', 'agent-visibility', 'ai-agents'],
    category: 'agents',
    badge: '🛡️ Agent Governance'
  },
  {
    full_name: 'tiliondev/fortress',
    name: 'fortress',
    owner: { login: 'tiliondev', avatar_url: 'https://avatars.githubusercontent.com/u/298404667', type: 'Organization' },
    description: 'Stealth Chromium engine that stops scrapers and browser agents from getting blocked, with one line of code change.',
    html_url: 'https://github.com/tiliondev/fortress',
    stargazers_count: 627,
    forks_count: 41,
    language: 'Python',
    topics: ['anti-bot', 'automation', 'bot-detection', 'browser-automation', 'chromium'],
    category: 'agents',
    badge: '🕶️ Stealth Browser'
  },
  {
    full_name: 'microsoft/autogen',
    name: 'autogen',
    owner: { login: 'microsoft', avatar_url: 'https://avatars.githubusercontent.com/u/6154722', type: 'Organization' },
    description: 'Multi-agent conversation framework. Build AI agents that can collaborate to solve tasks.',
    html_url: 'https://github.com/microsoft/autogen',
    stargazers_count: 35000,
    forks_count: 4500,
    language: 'Python',
    topics: ['multi-agent', 'ai', 'llm', 'autonomous'],
    category: 'agents',
    badge: '🏛️ Microsoft',
    tier: 'enterprise'
  },
  {
    full_name: 'langchain-ai/langgraph',
    name: 'langgraph',
    owner: { login: 'langchain-ai', avatar_url: 'https://avatars.githubusercontent.com/u/126733545', type: 'Organization' },
    description: 'Build stateful, multi-actor applications with LLMs. Graph-based agent orchestration.',
    html_url: 'https://github.com/langchain-ai/langgraph',
    stargazers_count: 8500,
    forks_count: 1200,
    language: 'Python',
    topics: ['langchain', 'agents', 'graph', 'multi-agent'],
    category: 'agents',
    badge: '🔗 LangChain'
  },
  {
    full_name: 'crewAIInc/crewAI',
    name: 'crewAI',
    owner: { login: 'crewAIInc', avatar_url: 'https://avatars.githubusercontent.com/u/147019963', type: 'Organization' },
    description: 'Framework for orchestrating role-playing, autonomous AI agents. Multi-agent collaboration.',
    html_url: 'https://github.com/crewAIInc/crewAI',
    stargazers_count: 22000,
    forks_count: 3100,
    language: 'Python',
    topics: ['multi-agent', 'ai-agents', 'collaboration', 'automation'],
    category: 'agents',
    badge: '👥 Crew AI'
  },
  {
    full_name: 'AgentOps-AI/agentops',
    name: 'agentops',
    owner: { login: 'AgentOps-AI', avatar_url: 'https://avatars.githubusercontent.com/u/162538463', type: 'Organization' },
    description: 'Monitor, evaluate, and debug AI agents. Observability for multi-agent systems.',
    html_url: 'https://github.com/AgentOps-AI/agentops',
    stargazers_count: 4200,
    forks_count: 380,
    language: 'Python',
    topics: ['agent-observability', 'monitoring', 'debugging', 'multi-agent'],
    category: 'agents',
    badge: '📊 Agent Ops'
  },
  {
    full_name: 'Significant-Gravitas/AutoGPT',
    name: 'AutoGPT',
    owner: { login: 'Significant-Gravitas', avatar_url: 'https://avatars.githubusercontent.com/u/130738209', type: 'Organization' },
    description: 'Autonomous AI agent. The first major open-source project to give GPT-4 full autonomy.',
    html_url: 'https://github.com/Significant-Gravitas/AutoGPT',
    stargazers_count: 168000,
    forks_count: 44000,
    language: 'Python',
    topics: ['autonomous', 'gpt-4', 'ai-agent', 'self-improving'],
    category: 'agents',
    badge: '🚀 AutoGPT'
  },
  {
    full_name: 'OpenBMB/ChatDev',
    name: 'ChatDev',
    owner: { login: 'OpenBMB', avatar_url: 'https://avatars.githubusercontent.com/u/118858286', type: 'Organization' },
    description: 'Create customized software using natural language. Multi-agent collaboration as software company.',
    html_url: 'https://github.com/OpenBMB/ChatDev',
    stargazers_count: 25000,
    forks_count: 3400,
    language: 'Python',
    topics: ['multi-agent', 'software-development', 'chatgpt', 'simulation'],
    category: 'agents',
    badge: '🏭 ChatDev',
    country: '🇨🇳 China'
  },
  {
    full_name: 'geekan/MetaGPT',
    name: 'MetaGPT',
    owner: { login: 'geekan', avatar_url: 'https://avatars.githubusercontent.com/u/5077028', type: 'User' },
    description: 'Assign different roles to GPTs. Multi-agent meta programming framework.',
    html_url: 'https://github.com/geekan/MetaGPT',
    stargazers_count: 46000,
    forks_count: 5800,
    language: 'Python',
    topics: ['multi-agent', 'software-engineering', 'gpt', 'meta-programming'],
    category: 'agents',
    badge: '🧬 MetaGPT'
  }
];

// ============ CYBERSECURITY / HACKING / RED TEAM ============
export const hackingRepos: FeaturedRepo[] = [
  {
    full_name: 'EvanThomasLuke/Awesome-AI-Hacking-Agents',
    name: 'Awesome-AI-Hacking-Agents',
    owner: { login: 'EvanThomasLuke', avatar_url: 'https://avatars.githubusercontent.com/u/24284799', type: 'User' },
    description: 'List of AI Hacking Agents',
    html_url: 'https://github.com/EvanThomasLuke/Awesome-AI-Hacking-Agents',
    stargazers_count: 682,
    forks_count: 109,
    language: 'Markdown',
    topics: [],
    category: 'hacking',
    badge: '🔴 AI Hacking Agents'
  },
  {
    full_name: 'Lakr233/vphone-cli',
    name: 'vphone-cli',
    owner: { login: 'Lakr233', avatar_url: 'https://avatars.githubusercontent.com/u/25259084', type: 'User' },
    description: 'Boot a virtual iPhone via Apple\'s Virtualization.framework using PCC research VM infrastructure.',
    html_url: 'https://github.com/Lakr233/vphone-cli',
    stargazers_count: 14075,
    forks_count: 1662,
    language: 'Swift',
    topics: [],
    category: 'hacking',
    badge: '📱 iOS VM Research'
  },
  {
    full_name: 'shadow1ng/fscan',
    name: 'fscan',
    owner: { login: 'shadow1ng', avatar_url: 'https://avatars.githubusercontent.com/u/47417528', type: 'User' },
    description: 'Inner network comprehensive scanning tool. Port scanning, vulnerability detection, brute force.',
    html_url: 'https://github.com/shadow1ng/fscan',
    stargazers_count: 10500,
    forks_count: 1800,
    language: 'Go',
    topics: ['pentesting', 'vulnerability', 'scanning', 'red-team'],
    category: 'hacking',
    badge: '🔴 Red Team',
    country: '🇨🇳 China'
  },
  {
    full_name: 'projectdiscovery/nuclei',
    name: 'nuclei',
    owner: { login: 'projectdiscovery', avatar_url: 'https://avatars.githubusercontent.com/u/50994705', type: 'Organization' },
    description: 'Fast and customizable vulnerability scanner based on YAML templates. Bug bounty essential.',
    html_url: 'https://github.com/projectdiscovery/nuclei',
    stargazers_count: 21000,
    forks_count: 2400,
    language: 'Go',
    topics: ['vulnerability-scanner', 'security', 'bugbounty', 'pentest'],
    category: 'hacking',
    badge: '🔴 Nuclei',
    tier: 'enterprise'
  },
  {
    full_name: 'sqlmapproject/sqlmap',
    name: 'sqlmap',
    owner: { login: 'sqlmapproject', avatar_url: 'https://avatars.githubusercontent.com/u/4628765', type: 'Organization' },
    description: 'Automatic SQL injection and database takeover tool. The gold standard for SQLi.',
    html_url: 'https://github.com/sqlmapproject/sqlmap',
    stargazers_count: 32000,
    forks_count: 5300,
    language: 'Python',
    topics: ['sql-injection', 'pentesting', 'security', 'exploitation'],
    category: 'hacking',
    badge: '💉 SQL Injection'
  },
  {
    full_name: 'rapid7/metasploit-framework',
    name: 'metasploit-framework',
    owner: { login: 'rapid7', avatar_url: 'https://avatars.githubusercontent.com/u/236527', type: 'Organization' },
    description: 'The world\'s most used penetration testing framework. Exploit development platform.',
    html_url: 'https://github.com/rapid7/metasploit-framework',
    stargazers_count: 33500,
    forks_count: 14000,
    language: 'Ruby',
    topics: ['metasploit', 'exploit', 'pentest', 'red-team'],
    category: 'hacking',
    badge: '🔴 Metasploit',
    tier: 'enterprise'
  },
  {
    full_name: 'hacktricks-wiki/hacktricks',
    name: 'hacktricks',
    owner: { login: 'hacktricks-wiki', avatar_url: 'https://avatars.githubusercontent.com/u/102609568', type: 'Organization' },
    description: 'Tricks and techniques for pentesters. The ultimate hacking wiki.',
    html_url: 'https://github.com/hacktricks-wiki/hacktricks',
    stargazers_count: 8500,
    forks_count: 1500,
    language: 'Markdown',
    topics: ['pentesting', 'hacking', 'wiki', 'cheatsheet'],
    category: 'hacking',
    badge: '📖 HackTricks'
  },
  {
    full_name: 'offensive-security/kali-nethunter',
    name: 'kali-nethunter',
    owner: { login: 'offensive-security', avatar_url: 'https://avatars.githubusercontent.com/u/1375871', type: 'Organization' },
    description: 'Kali NetHunter - Mobile penetration testing platform for Android devices.',
    html_url: 'https://github.com/offensive-security/kali-nethunter',
    stargazers_count: 5200,
    forks_count: 1100,
    language: 'Shell',
    topics: ['kali', 'nethunter', 'mobile-pentest', 'android'],
    category: 'hacking',
    badge: '📱 NetHunter'
  },
  {
    full_name: 'BloodHoundAD/BloodHound',
    name: 'BloodHound',
    owner: { login: 'BloodHoundAD', avatar_url: 'https://avatars.githubusercontent.com/u/24959968', type: 'Organization' },
    description: 'Six Degrees of Domain Admin. Active Directory reconnaissance and attack path mapping.',
    html_url: 'https://github.com/BloodHoundAD/BloodHound',
    stargazers_count: 11000,
    forks_count: 2100,
    language: 'JavaScript',
    topics: ['active-directory', 'red-team', 'ad-attacks', 'reconnaissance'],
    category: 'hacking',
    badge: '🐕 BloodHound',
    tier: 'enterprise'
  },
  {
    full_name: 'fortra/impacket',
    name: 'impacket',
    owner: { login: 'fortra', avatar_url: 'https://avatars.githubusercontent.com/u/998519', type: 'Organization' },
    description: 'Collection of Python classes for working with network protocols. Windows AD attacks.',
    html_url: 'https://github.com/fortra/impacket',
    stargazers_count: 13000,
    forks_count: 2900,
    language: 'Python',
    topics: ['windows', 'active-directory', 'kerberos', 'smb', 'red-team'],
    category: 'hacking',
    badge: '🔴 Impacket',
    tier: 'enterprise'
  },
  {
    full_name: 'danielmiessler/fabric',
    name: 'fabric',
    owner: { login: 'danielmiessler', avatar_url: 'https://avatars.githubusercontent.com/u/517218', type: 'User' },
    description: 'Modular framework for augmenting human capabilities using AI. Prompt engineering OS.',
    html_url: 'https://github.com/danielmiessler/fabric',
    stargazers_count: 22000,
    forks_count: 2100,
    language: 'Go',
    topics: ['ai', 'prompt-engineering', 'augmentation', 'modular'],
    category: 'hacking',
    badge: '🧵 Fabric AI'
  },
  {
    full_name: 'blacklanternsecurity/badblood',
    name: 'badblood',
    owner: { login: 'blacklanternsecurity', avatar_url: 'https://avatars.githubusercontent.com/u/24671175', type: 'Organization' },
    description: 'AD environment filler. Generates realistic AD environments for red team exercises.',
    html_url: 'https://github.com/blacklanternsecurity/badblood',
    stargazers_count: 2100,
    forks_count: 450,
    language: 'PowerShell',
    topics: ['active-directory', 'red-team', 'lab', 'simulation'],
    category: 'hacking',
    badge: '🩸 BadBlood'
  }
];

// ============ MODELOS DE CÓDIGO ============
export const codeModelRepos: FeaturedRepo[] = [
  {
    full_name: 'OpenHands/OpenHands',
    name: 'OpenHands',
    owner: { login: 'OpenHands', avatar_url: 'https://avatars.githubusercontent.com/u/225919603', type: 'Organization' },
    description: '🙌 OpenHands: AI-Driven Development',
    html_url: 'https://github.com/OpenHands/OpenHands',
    stargazers_count: 88641,
    forks_count: 11661,
    language: 'TypeScript',
    topics: ['agent', 'artificial-intelligence', 'chatgpt', 'claude-ai', 'cli'],
    category: 'code',
    badge: '🙌 Dev Agent'
  },
  {
    full_name: 'justrach/codegraff',
    name: 'codegraff',
    owner: { login: 'justrach', avatar_url: 'https://avatars.githubusercontent.com/u/54503978', type: 'User' },
    description: 'AI agent for coding and computer work in your terminal or desktop. Written in Zig: one 3.7 MB binary, multi-provider, MCP, SDKs.',
    html_url: 'https://github.com/justrach/codegraff',
    stargazers_count: 264,
    forks_count: 23,
    language: 'Zig',
    topics: [],
    category: 'code',
    badge: '⚡ Agent em Zig'
  },
  {
    full_name: 'bradAGI/awesome-cli-coding-agents',
    name: 'awesome-cli-coding-agents',
    owner: { login: 'bradAGI', avatar_url: 'https://avatars.githubusercontent.com/u/46579244', type: 'User' },
    description: 'Curated directory of terminal-native AI coding agents and the harnesses that orchestrate them: Aider, Goose, OpenCode, Claude Code, Codex and more.',
    html_url: 'https://github.com/bradAGI/awesome-cli-coding-agents',
    stargazers_count: 1248,
    forks_count: 355,
    language: 'Python',
    topics: [],
    category: 'code',
    badge: '🧰 CLI Agents'
  },
  {
    full_name: 'continue-dev/continue',
    name: 'continue',
    owner: { login: 'continuedev', avatar_url: 'https://avatars.githubusercontent.com/u/127807689', type: 'Organization' },
    description: 'Open-source AI code assistant. Autopilot for programming with any LLM.',
    html_url: 'https://github.com/continuedev/continue',
    stargazers_count: 18000,
    forks_count: 1600,
    language: 'TypeScript',
    topics: ['code-assistant', 'copilot-alternative', 'llm', 'ide'],
    category: 'code',
    badge: '💻 Code AI'
  },
  {
    full_name: 'TabbyML/tabby',
    name: 'tabby',
    owner: { login: 'TabbyML', avatar_url: 'https://avatars.githubusercontent.com/u/126980493', type: 'Organization' },
    description: 'Self-hosted AI coding assistant. Open-source alternative to GitHub Copilot.',
    html_url: 'https://github.com/TabbyML/tabby',
    stargazers_count: 22000,
    forks_count: 1100,
    language: 'Rust',
    topics: ['copilot-alternative', 'self-hosted', 'code-completion', 'ai'],
    category: 'code',
    badge: '🦀 Tabby'
  },
  {
    full_name: 'ThePrimeagen/kitty',
    name: 'kitty',
    owner: { login: 'ThePrimeagen', avatar_url: 'https://avatars.githubusercontent.com/u/5639285', type: 'User' },
    description: 'AI-powered coding workflow. Multiple models collaborating for code generation.',
    html_url: 'https://github.com/ThePrimeagen/kitty',
    stargazers_count: 3200,
    forks_count: 180,
    language: 'TypeScript',
    topics: ['ai-coding', 'multi-model', 'workflow'],
    category: 'code',
    badge: '🐱 Kitty AI'
  },
  {
    full_name: 'Aider-AI/aider',
    name: 'aider',
    owner: { login: 'Aider-AI', avatar_url: 'https://avatars.githubusercontent.com/u/150180553', type: 'Organization' },
    description: 'AI pair programming in your terminal. Edit code with GPT-4, Claude, and more.',
    html_url: 'https://github.com/Aider-AI/aider',
    stargazers_count: 21000,
    forks_count: 2200,
    language: 'Python',
    topics: ['ai-coding', 'pair-programming', 'terminal', 'llm'],
    category: 'code',
    badge: '🤝 Aider'
  },
  {
    full_name: 'superagent-ai/superagent',
    name: 'superagent',
    owner: { login: 'superagent-ai', avatar_url: 'https://avatars.githubusercontent.com/u/139818359', type: 'Organization' },
    description: 'Run AI coding agents in the cloud. Multi-model code generation platform.',
    html_url: 'https://github.com/superagent-ai/superagent',
    stargazers_count: 5400,
    forks_count: 680,
    language: 'TypeScript',
    topics: ['ai-coding', 'cloud', 'multi-model', 'agents'],
    category: 'code',
    badge: '⚡ SuperAgent'
  },
  {
    full_name: 'sourcegraph/cody',
    name: 'cody',
    owner: { login: 'sourcegraph', avatar_url: 'https://avatars.githubusercontent.com/u/1976777', type: 'Organization' },
    description: 'AI coding assistant with codebase context. Understands your entire codebase.',
    html_url: 'https://github.com/sourcegraph/cody',
    stargazers_count: 2800,
    forks_count: 380,
    language: 'TypeScript',
    topics: ['code-assistant', 'codebase-context', 'ai', 'search'],
    category: 'code',
    badge: '🔍 Cody'
  }
];

// ============ GERAÇÃO DE MÍDIA (VÍDEO, IMAGEM, ÁUDIO, PDF) ============
export const mediaRepos: FeaturedRepo[] = [
  {
    full_name: 'Anil-matcha/AI-Youtube-Shorts-Generator',
    name: 'AI-Youtube-Shorts-Generator',
    owner: { login: 'Anil-matcha', avatar_url: 'https://avatars.githubusercontent.com/u/4326215', type: 'User' },
    description: 'Open-source alternative to Opus Clip & Klap. Turns long YouTube videos into viral 9:16 shorts with LLM highlight detection and Whisper. Free, no watermarks.',
    html_url: 'https://github.com/Anil-matcha/AI-Youtube-Shorts-Generator',
    stargazers_count: 5048,
    forks_count: 927,
    language: 'Python',
    topics: ['2short-ai-alternative', 'ai-clip-generator', 'ai-clipping', 'auto-clip', 'auto-crop'],
    category: 'media',
    badge: '🎬 Shorts Grátis'
  },
  {
    full_name: 'webadderallorg/Recordly',
    name: 'Recordly',
    owner: { login: 'webadderallorg', avatar_url: 'https://avatars.githubusercontent.com/u/278603407', type: 'Organization' },
    description: 'Create polished demo videos without editing skills. Mac/Windows/Linux',
    html_url: 'https://github.com/webadderallorg/Recordly',
    stargazers_count: 30023,
    forks_count: 2349,
    language: 'TypeScript',
    topics: ['electron', 'free', 'linux', 'macos', 'open-source'],
    category: 'media',
    badge: '🎥 Demo Videos'
  },
  {
    full_name: 'lllyasviel/Fooocus',
    name: 'Fooocus',
    owner: { login: 'lllyasviel', avatar_url: 'https://avatars.githubusercontent.com/u/19834515', type: 'User' },
    description: 'Focus on prompting and generating: offline, open-source image generator built on Stable Diffusion XL.',
    html_url: 'https://github.com/lllyasviel/Fooocus',
    stargazers_count: 53110,
    forks_count: 8613,
    language: 'Python',
    topics: [],
    category: 'media',
    badge: '🎨 Imagem AI'
  },
  {
    full_name: 'comfyanonymous/ComfyUI',
    name: 'ComfyUI',
    owner: { login: 'comfyanonymous', avatar_url: 'https://avatars.githubusercontent.com/u/121283862', type: 'User' },
    description: 'Most powerful modular image/video generation UI. Node-based Stable Diffusion.',
    html_url: 'https://github.com/comfyanonymous/ComfyUI',
    stargazers_count: 52000,
    forks_count: 5500,
    language: 'Python',
    topics: ['stable-diffusion', 'image-generation', 'video', 'ai-art'],
    category: 'media',
    badge: '🎨 ComfyUI'
  },
  {
    full_name: 'AUTOMATIC1111/stable-diffusion-webui',
    name: 'stable-diffusion-webui',
    owner: { login: 'AUTOMATIC1111', avatar_url: 'https://avatars.githubusercontent.com/u/11521601', type: 'User' },
    description: 'Web UI for Stable Diffusion. The most popular image generation interface.',
    html_url: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui',
    stargazers_count: 140000,
    forks_count: 26500,
    language: 'Python',
    topics: ['stable-diffusion', 'image-generation', 'webui', 'ai-art'],
    category: 'media',
    badge: '🖼️ SD WebUI'
  },
  {
    full_name: 'jianfch/stable-ts',
    name: 'stable-ts',
    owner: { login: 'jianfch', avatar_url: 'https://avatars.githubusercontent.com/u/25647735', type: 'User' },
    description: 'Stable Transcription. Open Whisper alternative for audio transcription.',
    html_url: 'https://github.com/jianfch/stable-ts',
    stargazers_count: 3200,
    forks_count: 280,
    language: 'Python',
    topics: ['whisper', 'transcription', 'audio', 'speech-to-text'],
    category: 'media',
    badge: '🎙️ Whisper Alt'
  },
  {
    full_name: 'openai/whisper',
    name: 'whisper',
    owner: { login: 'openai', avatar_url: 'https://avatars.githubusercontent.com/u/14957082', type: 'Organization' },
    description: 'Robust speech recognition via large-scale weak supervision. Open Whisper.',
    html_url: 'https://github.com/openai/whisper',
    stargazers_count: 72000,
    forks_count: 8200,
    language: 'Python',
    topics: ['speech-recognition', 'whisper', 'audio', 'transcription'],
    category: 'media',
    badge: '🎙️ Open Whisper'
  },
  {
    full_name: 'Stability-AI/generative-models',
    name: 'generative-models',
    owner: { login: 'Stability-AI', avatar_url: 'https://avatars.githubusercontent.com/u/102745838', type: 'Organization' },
    description: 'Stable Video Diffusion, Stable Audio. State-of-the-art generative models.',
    html_url: 'https://github.com/Stability-AI/generative-models',
    stargazers_count: 25000,
    forks_count: 2800,
    language: 'Python',
    topics: ['video-generation', 'audio-generation', 'stable-diffusion', 'svd'],
    category: 'media',
    badge: '🎬 Video AI'
  },
  {
    full_name: 'myshell-ai/OpenNotebookLM',
    name: 'OpenNotebookLM',
    owner: { login: 'myshell-ai', avatar_url: 'https://avatars.githubusercontent.com/u/138423063', type: 'Organization' },
    description: 'Open-source NotebookLM alternative. AI-powered research notebook with podcast generation.',
    html_url: 'https://github.com/myshell-ai/OpenNotebookLM',
    stargazers_count: 8500,
    forks_count: 920,
    language: 'Python',
    topics: ['notebooklm', 'podcast', 'research', 'ai-notebook'],
    category: 'media',
    badge: '📓 Open NotebookLM'
  },
  {
    full_name: 'higgsfield-ai/higgsfield',
    name: 'higgsfield',
    owner: { login: 'higgsfield-ai', avatar_url: 'https://avatars.githubusercontent.com/u/156738093', type: 'Organization' },
    description: 'Open Higgsfield - AI video generation and editing platform. Open-source alternative.',
    html_url: 'https://github.com/higgsfield-ai/higgsfield',
    stargazers_count: 4200,
    forks_count: 510,
    language: 'Python',
    topics: ['video-generation', 'ai-video', 'editing', 'open-source'],
    category: 'media',
    badge: '🎬 Open Higgsfield'
  },
  {
    full_name: 'Stirling-Tools/Stirling-PDF',
    name: 'Stirling-PDF',
    owner: { login: 'Stirling-Tools', avatar_url: 'https://avatars.githubusercontent.com/u/114483780', type: 'Organization' },
    description: 'Self-hosted PDF manipulation web app. Merge, split, convert, OCR and more.',
    html_url: 'https://github.com/Stirling-Tools/Stirling-PDF',
    stargazers_count: 55000,
    forks_count: 4300,
    language: 'Java',
    topics: ['pdf', 'self-hosted', 'document', 'ocr'],
    category: 'media',
    badge: '📄 PDF Tools'
  },
  {
    full_name: 'openai/dallify',
    name: 'dallify',
    owner: { login: 'openai', avatar_url: 'https://avatars.githubusercontent.com/u/14957082', type: 'Organization' },
    description: 'Open-source image generation pipeline. DALL-E alternatives for local generation.',
    html_url: 'https://github.com/openai/dallify',
    stargazers_count: 3800,
    forks_count: 420,
    language: 'Python',
    topics: ['image-generation', 'dall-e', 'open-source', 'pipeline'],
    category: 'media',
    badge: '🖼️ Dallify'
  },
  {
    full_name: 'RVC-Project/Retrieval-based-Voice-Conversion',
    name: 'Retrieval-based-Voice-Conversion',
    owner: { login: 'RVC-Project', avatar_url: 'https://avatars.githubusercontent.com/u/134981436', type: 'Organization' },
    description: 'Voice conversion framework. AI voice cloning and conversion with minimal data.',
    html_url: 'https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI',
    stargazers_count: 30000,
    forks_count: 4200,
    language: 'Python',
    topics: ['voice-conversion', 'voice-cloning', 'audio', 'ai'],
    category: 'media',
    badge: '🗣️ Voice AI'
  }
];

// ============ MODELOS GOVERNAMENTAIS / MILITARES / GEOPOLÍTICOS ============
export const govMilitaryRepos: FeaturedRepo[] = [
  {
    full_name: 'QwenLM/Qwen2.5',
    name: 'Qwen2.5',
    owner: { login: 'QwenLM', avatar_url: 'https://avatars.githubusercontent.com/u/159988696', type: 'Organization' },
    description: 'Alibaba Qwen - Chinese state-backed LLM. Top-tier multilingual model series.',
    html_url: 'https://github.com/QwenLM/Qwen2.5',
    stargazers_count: 12000,
    forks_count: 1000,
    language: 'Python',
    topics: ['llm', 'chinese-ai', 'multilingual', 'qwen'],
    category: 'gov',
    badge: '🇨🇳 Qwen (China)',
    country: '🇨🇳 China',
    tier: 'gov'
  },
  {
    full_name: 'BAAI-Agents/AgiBot',
    name: 'AgiBot',
    owner: { login: 'BAAI-Agents', avatar_url: 'https://avatars.githubusercontent.com/u/167097921', type: 'Organization' },
    description: 'Beijing Academy AI - General purpose agent framework. Chinese national AI project.',
    html_url: 'https://github.com/BAAI-Agents/AgiBot',
    stargazers_count: 6500,
    forks_count: 720,
    language: 'Python',
    topics: ['chinese-ai', 'general-agent', 'baai', 'national-ai'],
    category: 'gov',
    badge: '🇨🇳 BAAI AgiBot',
    country: '🇨🇳 China',
    tier: 'gov'
  },
  {
    full_name: 'ai21labs/Jamba',
    name: 'Jamba',
    owner: { login: 'ai21labs', avatar_url: 'https://avatars.githubusercontent.com/u/57632904', type: 'Organization' },
    description: 'AI21 Labs - Israeli AI company. Jamba foundation model with state-space architecture.',
    html_url: 'https://github.com/ai21labs/Jamba',
    stargazers_count: 4800,
    forks_count: 380,
    language: 'Python',
    topics: ['israeli-ai', 'foundation-model', 'jamba', 'ssm'],
    category: 'gov',
    badge: '🇮🇱 AI21 (Israel)',
    country: '🇮🇱 Israel',
    tier: 'enterprise'
  },
  {
    full_name: 'aleph-alpha/luminous',
    name: 'luminous',
    owner: { login: 'aleph-alpha', avatar_url: 'https://avatars.githubusercontent.com/u/75426080', type: 'Organization' },
    description: 'Aleph Alpha - German/European sovereign AI. Enterprise LLM for government use.',
    html_url: 'https://github.com/aleph-alpha/luminous',
    stargazers_count: 2800,
    forks_count: 250,
    language: 'Python',
    topics: ['european-ai', 'sovereign-ai', 'government', 'enterprise'],
    category: 'gov',
    badge: '🇩🇪 Aleph Alpha (EU)',
    country: '🇩🇪 Germany',
    tier: 'gov'
  },
  {
    full_name: 'rinna/japanese-clova-x',
    name: 'japanese-clova-x',
    owner: { login: 'rinna', avatar_url: 'https://avatars.githubusercontent.com/u/61564357', type: 'Organization' },
    description: 'Japanese AI models. rinna Japanese LLM for enterprise and government applications.',
    html_url: 'https://github.com/rinna/japanese-clova-x',
    stargazers_count: 3500,
    forks_count: 320,
    language: 'Python',
    topics: ['japanese-ai', 'japanese-llm', 'enterprise', 'government'],
    category: 'gov',
    badge: '🇯🇵 Japanese AI',
    country: '🇯🇵 Japan',
    tier: 'gov'
  },
  {
    full_name: 'KELONMYOSA/Arabic-LLM',
    name: 'Arabic-LLM',
    owner: { login: 'KELONMYOSA', avatar_url: 'https://avatars.githubusercontent.com/u/45678912', type: 'User' },
    description: 'Arabic large language models. Open-source Arabic NLP for Middle East applications.',
    html_url: 'https://github.com/KELONMYOSA/Arabic-LLM',
    stargazers_count: 2200,
    forks_count: 280,
    language: 'Python',
    topics: ['arabic-ai', 'arabic-llm', 'middle-east', 'nlp'],
    category: 'gov',
    badge: '🇸🇦 Arabic LLM',
    country: '🇸🇦 Middle East',
    tier: 'gov'
  },
  {
    full_name: 'inceptionai/jais',
    name: 'jais',
    owner: { login: 'inceptionai', avatar_url: 'https://avatars.githubusercontent.com/u/135806453', type: 'Organization' },
    description: 'JAIS - Arabic LLM by Inception (UAE/G42). Largest open Arabic foundation model.',
    html_url: 'https://github.com/inceptionai/jais',
    stargazers_count: 3800,
    forks_count: 420,
    language: 'Python',
    topics: ['arabic-llm', 'uae', 'g42', 'foundation-model'],
    category: 'gov',
    badge: '🇦🇪 JAIS (UAE)',
    country: '🇦🇪 UAE',
    tier: 'gov'
  },
  {
    full_name: 'yandex/YaLM-100B',
    name: 'YaLM-100B',
    owner: { login: 'yandex', avatar_url: 'https://avatars.githubusercontent.com/u/11684956', type: 'Organization' },
    description: 'Yandex Russian LLM. 100B parameter model. Russian tech giant AI research.',
    html_url: 'https://github.com/yandex/YaLM-100B',
    stargazers_count: 4200,
    forks_count: 520,
    language: 'Python',
    topics: ['russian-ai', 'yandex', 'large-model', 'gpt'],
    category: 'gov',
    badge: '🇷🇺 YaLM (Russia)',
    country: '🇷🇺 Russia',
    tier: 'enterprise'
  },
  {
    full_name: 'idsia/sacred',
    name: 'sacred',
    owner: { login: 'idsia', avatar_url: 'https://avatars.githubusercontent.com/u/6293585', type: 'Organization' },
    description: 'Swiss AI Lab - IDSIA research tools. Swiss national AI research framework.',
    html_url: 'https://github.com/idsia/sacred',
    stargazers_count: 4800,
    forks_count: 580,
    language: 'Python',
    topics: ['swiss-ai', 'research', 'experiment-tracking', 'reproducibility'],
    category: 'gov',
    badge: '🇨🇭 Swiss AI',
    country: '🇨🇭 Switzerland',
    tier: 'gov'
  },
  {
    full_name: 'nsaghost/NSA-tools',
    name: 'NSA-tools',
    owner: { login: 'nsaghost', avatar_url: 'https://avatars.githubusercontent.com/u/8923456', type: 'User' },
    description: 'Collection of open-source intelligence tools. OSINT frameworks used by analysts.',
    html_url: 'https://github.com/nsaghost/NSA-tools',
    stargazers_count: 6800,
    forks_count: 920,
    language: 'Python',
    topics: ['osint', 'intelligence', 'surveillance', 'analysis'],
    category: 'gov',
    badge: '🕵️ OSINT Intel',
    tier: 'military'
  }
];

// ============ LLMs LOCAIS / MODELOS DE CÓDIGO ============
export const localLLMRepos: FeaturedRepo[] = [
  {
    full_name: 'Edge0-AI/Edge0',
    name: 'Edge0',
    owner: { login: 'Edge0-AI', avatar_url: 'https://avatars.githubusercontent.com/u/310437271', type: 'Organization' },
    description: 'Open-source streaming MoE inference framework: SSD expert offload + Recover-LoRA + prerouter routing prediction.',
    html_url: 'https://github.com/Edge0-AI/Edge0',
    stargazers_count: 2020,
    forks_count: 175,
    language: 'Python',
    topics: [],
    category: 'local-llm',
    badge: '⚡ MoE Streaming'
  },
  {
    full_name: 'Nehanth/swarmllm',
    name: 'swarmllm',
    owner: { login: 'Nehanth', avatar_url: 'https://avatars.githubusercontent.com/u/17011994', type: 'User' },
    description: 'Peer-to-peer LLM inference across browser tabs: a WebGPU engine and WebRTC runtime that split a 27B model over the devices in a room.',
    html_url: 'https://github.com/Nehanth/swarmllm',
    stargazers_count: 425,
    forks_count: 60,
    language: 'JavaScript',
    topics: ['browser', 'distributed-inference', 'inference', 'llm', 'local-llm'],
    category: 'local-llm',
    badge: '🌐 LLM P2P no Browser'
  },
  {
    full_name: 'ollama/ollama',
    name: 'ollama',
    owner: { login: 'ollama', avatar_url: 'https://avatars.githubusercontent.com/u/141343628', type: 'Organization' },
    description: 'Run LLMs locally. Get up and running with Llama 3, Mistral, Gemma, and more.',
    html_url: 'https://github.com/ollama/ollama',
    stargazers_count: 98000,
    forks_count: 7800,
    language: 'Go',
    topics: ['llm', 'local', 'ollama', 'llama'],
    category: 'local-llm',
    badge: '🦙 Ollama'
  },
  {
    full_name: 'lmstudio-ai/lms',
    name: 'lms',
    owner: { login: 'lmstudio-ai', avatar_url: 'https://avatars.githubusercontent.com/u/114173268', type: 'Organization' },
    description: 'LM Studio - Run LLMs on your computer. Discover, download, and run local models.',
    html_url: 'https://github.com/lmstudio-ai/lms',
    stargazers_count: 5200,
    forks_count: 420,
    language: 'TypeScript',
    topics: ['local-llm', 'model-runner', 'desktop', 'ai'],
    category: 'local-llm',
    badge: '💻 LM Studio'
  },
  {
    full_name: 'ggml-org/llama.cpp',
    name: 'llama.cpp',
    owner: { login: 'ggml-org', avatar_url: 'https://avatars.githubusercontent.com/u/178379683', type: 'Organization' },
    description: 'Port of LLaMA to C/C++. Run large models on CPU. The backbone of local AI.',
    html_url: 'https://github.com/ggml-org/llama.cpp',
    stargazers_count: 72000,
    forks_count: 10200,
    language: 'C++',
    topics: ['llama', 'cpp', 'inference', 'cpu-inference'],
    category: 'local-llm',
    badge: '🔥 llama.cpp'
  },
  {
    full_name: 'mlc-ai/mlc-llm',
    name: 'mlc-llm',
    owner: { login: 'mlc-ai', avatar_url: 'https://avatars.githubusercontent.com/u/103170038', type: 'Organization' },
    description: 'Run LLMs natively on phones, tablets, laptops. Universal deployment engine.',
    html_url: 'https://github.com/mlc-ai/mlc-llm',
    stargazers_count: 19500,
    forks_count: 1500,
    language: 'Python',
    topics: ['mobile-llm', 'deployment', 'universal', 'edge-ai'],
    category: 'local-llm',
    badge: '📱 MLC LLM'
  },
  {
    full_name: 'huggingface/transformers',
    name: 'transformers',
    owner: { login: 'huggingface', avatar_url: 'https://avatars.githubusercontent.com/u/25720743', type: 'Organization' },
    description: 'State-of-the-art ML for PyTorch, TensorFlow, JAX. 300k+ models available.',
    html_url: 'https://github.com/huggingface/transformers',
    stargazers_count: 135000,
    forks_count: 26000,
    language: 'Python',
    topics: ['transformers', 'nlp', 'huggingface', 'pytorch'],
    category: 'local-llm',
    badge: '🤗 Transformers'
  }
];

// ============ DEV TOOLS / SELF-HOSTED / PRODUTIVIDADE ============
export const devToolsRepos: FeaturedRepo[] = [
  {
    full_name: 'gotify/server',
    name: 'server',
    owner: { login: 'gotify', avatar_url: 'https://avatars.githubusercontent.com/u/36410427', type: 'Organization' },
    description: 'A simple server for sending and receiving messages in real-time per WebSocket. (Includes a sleek web-ui)',
    html_url: 'https://github.com/gotify/server',
    stargazers_count: 15936,
    forks_count: 877,
    language: 'Go',
    topics: ['api', 'cloud', 'free-software', 'golang', 'gotify'],
    category: 'devtools',
    badge: '🔔 Self-Hosted'
  },
  {
    full_name: 'public-apis/public-apis',
    name: 'public-apis',
    owner: { login: 'public-apis', avatar_url: 'https://avatars.githubusercontent.com/u/51121562', type: 'Organization' },
    description: 'A collective list of free APIs',
    html_url: 'https://github.com/public-apis/public-apis',
    stargazers_count: 481884,
    forks_count: 53214,
    language: 'Python',
    topics: ['api', 'apis', 'dataset', 'development', 'free'],
    category: 'devtools',
    badge: '📚 APIs Grátis'
  },
  {
    full_name: 'Tianyu199509/DeskBox',
    name: 'DeskBox',
    owner: { login: 'Tianyu199509', avatar_url: 'https://avatars.githubusercontent.com/u/122434621', type: 'User' },
    description: 'A free, open-source Windows desktop organizer with native-feeling WinUI 3 widgets.',
    html_url: 'https://github.com/Tianyu199509/DeskBox',
    stargazers_count: 4890,
    forks_count: 265,
    language: 'C#',
    topics: ['desktop-cleanup', 'desktop-organizer', 'desktop-widget', 'desktop-widgets', 'dotnet10'],
    category: 'devtools',
    badge: '🗂️ Desktop Organizer'
  },
  {
    full_name: 'ever-co/ever-gauzy',
    name: 'ever-gauzy',
    owner: { login: 'ever-co', avatar_url: 'https://avatars.githubusercontent.com/u/41295674', type: 'Organization' },
    description: 'Ever® Gauzy™ - Open Business Management Platform (ERP/CRM/HRM/ATS/PM) - https://gauzy.co',
    html_url: 'https://github.com/ever-co/ever-gauzy',
    stargazers_count: 7807,
    forks_count: 1159,
    language: 'TypeScript',
    topics: ['accounting', 'billing', 'bookkeeping', 'crm', 'crm-platform'],
    category: 'devtools',
    badge: '🏢 ERP / CRM'
  }
];

// ============ TODOS OS REPOS EM DESTAQUE ============
export const allFeaturedRepos: FeaturedRepo[] = [
  ...originalFeatured,
  ...multiAgentRepos,
  ...hackingRepos,
  ...codeModelRepos,
  ...mediaRepos,
  ...govMilitaryRepos,
  ...localLLMRepos,
  ...devToolsRepos
];

// ============ BUSCAS TRENDING ============
export const trendingSearches = [
  'AI agents', 'LLM', 'Rust', 'Red Team', 'Pentesting', 'Multi-agent',
  'Stable Diffusion', 'Local LLM', 'Code generation', 'OSINT',
  'Cybersecurity', 'Hacking tools', 'Voice AI', 'Video generation',
  'Chinese AI', 'Israeli AI', 'Military AI', 'Government AI',
  'Whisper', 'NotebookLM', 'PDF tools', 'Image generation',
  'Exploit', 'Metasploit', 'BloodHound', 'Nuclei',
  'Ollama', 'llama.cpp', 'ComfyUI', 'AutoGPT'
];

// ============ CATEGORIAS EXPANDIDAS ============
export const categories = [
  { value: 'all', label: 'Todos', icon: '🌐' },
  { value: 'featured', label: 'Destaques', icon: '⭐' },
  { value: 'agents', label: 'Multi-Agentes', icon: '🤖' },
  { value: 'hacking', label: 'Red Team / Hack', icon: '🔴' },
  { value: 'code', label: 'Code Models', icon: '💻' },
  { value: 'media', label: 'Mídia / Vídeo / PDF', icon: '🎬' },
  { value: 'gov', label: 'Gov / Militar', icon: '🏛️' },
  { value: 'local-llm', label: 'LLM Local', icon: '🦙' },
  { value: 'ai', label: 'AI / ML', icon: '🧠' },
  { value: 'devtools', label: 'Dev Tools', icon: '🛠️' },
  { value: 'web', label: 'Web', icon: '🌍' },
  { value: 'database', label: 'Database', icon: '🗄️' },
  { value: 'cloud', label: 'Cloud', icon: '☁️' },
];

// ============ LINGUAGENS ============
export const languages = [
  'all', 'Python', 'TypeScript', 'JavaScript', 'Rust', 'Go', 
  'C++', 'C', 'Java', 'Ruby', 'Shell', 'PowerShell', 'Swift', 'Kotlin'
];
