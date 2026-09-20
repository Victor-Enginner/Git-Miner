import { originalFeatured, multiAgentRepos, hackingRepos, codeModelRepos, mediaRepos, govMilitaryRepos, localLLMRepos, devToolsRepos } from '../data/featured';
import type { FeaturedRepo } from '../data/featured';
import { Star, GitFork, ExternalLink, Zap, Shield, Brain, Code2, Film, Globe, Cpu, Wrench } from 'lucide-react';
import { SpotlightGlow, onSpotlightMove } from './SpotlightGlow';

function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
  return num.toString();
}

interface FeaturedSectionProps {
  activeCategory: string;
}

const sectionConfig: Record<string, { title: string; icon: React.ReactNode; repos: FeaturedRepo[]; gradient: string }> = {
  'all': { title: 'Repos em Destaque', icon: <Zap className="w-4 h-4 text-orange-400" />, repos: originalFeatured, gradient: 'from-orange-500/20 to-red-500/20' },
  'agents': { title: 'Multi-Agentes & Cognição', icon: <Brain className="w-4 h-4 text-purple-400" />, repos: multiAgentRepos, gradient: 'from-purple-500/20 to-blue-500/20' },
  'hacking': { title: 'Red Team / Ethical Hacking', icon: <Shield className="w-4 h-4 text-red-400" />, repos: hackingRepos, gradient: 'from-red-500/20 to-orange-500/20' },
  'code': { title: 'Modelos de Código', icon: <Code2 className="w-4 h-4 text-green-400" />, repos: codeModelRepos, gradient: 'from-green-500/20 to-emerald-500/20' },
  'media': { title: 'Mídia: Vídeo, Imagem, Áudio, PDF', icon: <Film className="w-4 h-4 text-pink-400" />, repos: mediaRepos, gradient: 'from-pink-500/20 to-purple-500/20' },
  'gov': { title: 'Gov / Militar / Geopolítico', icon: <Globe className="w-4 h-4 text-blue-400" />, repos: govMilitaryRepos, gradient: 'from-blue-500/20 to-cyan-500/20' },
  'local-llm': { title: 'LLMs Locais - Seu PC Monstro', icon: <Cpu className="w-4 h-4 text-yellow-400" />, repos: localLLMRepos, gradient: 'from-yellow-500/20 to-orange-500/20' },
  'devtools': { title: 'Dev Tools & Self-Hosted', icon: <Wrench className="w-4 h-4 text-cyan-400" />, repos: devToolsRepos, gradient: 'from-cyan-500/20 to-blue-500/20' },
};

function RepoCard({ repo, index, sectionGradient }: { repo: FeaturedRepo; index: number; sectionGradient: string }) {
  return (
    <a
      key={repo.full_name}
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 hover:shadow-2xl"
      onMouseMove={onSpotlightMove}
    >
      {/* Background glow on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${sectionGradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
      <SpotlightGlow />
      
      <div className="relative">
        {/* Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-800 border border-gray-700 text-gray-300">{repo.badge}</span>
          <ExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover:text-white transition-colors" />
        </div>

        {/* Repo info */}
        <div className="flex items-start gap-3 mb-3">
          <img
            src={repo.owner.avatar_url}
            alt={repo.owner.login}
            className="w-10 h-10 rounded-xl border border-gray-700 group-hover:border-white/30 transition-all"
          />
          <div className="min-w-0">
            <p className="text-[11px] text-gray-500 truncate">{repo.owner.login}</p>
            <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors truncate">
              {repo.name}
            </h3>
          </div>
        </div>

        <p className="text-sm text-gray-400 mb-3 line-clamp-2 leading-relaxed">
          {repo.description}
        </p>

        {/* Topics */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {repo.topics.slice(0, 3).map((topic: string) => (
            <span
              key={topic}
              className="px-2 py-0.5 text-[10px] font-medium bg-gray-800/80 text-gray-400 rounded-md border border-gray-700/50"
            >
              {topic}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 pt-3 border-t border-gray-800/50">
          <div className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-bold text-white">{formatNumber(repo.stargazers_count)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <GitFork className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-xs text-gray-400">{formatNumber(repo.forks_count)}</span>
          </div>
          <div className="flex items-center gap-1.5 ml-auto">
            <div 
              className="w-2.5 h-2.5 rounded-full" 
              style={{ 
                backgroundColor: repo.language === 'TypeScript' ? '#3178c6' : 
                                repo.language === 'Python' ? '#3572A5' : 
                                repo.language === 'Go' ? '#00ADD8' :
                                repo.language === 'Rust' ? '#dea584' :
                                repo.language === 'C++' ? '#f34b7d' :
                                repo.language === 'Ruby' ? '#701516' :
                                repo.language === 'Java' ? '#b07219' :
                                repo.language === 'Shell' ? '#89e051' :
                                repo.language === 'Markdown' ? '#083fa1' :
                                repo.language === 'PowerShell' ? '#012456' :
                                '#8b8b8b' 
              }} 
            />
            <span className="text-xs text-gray-400">{repo.language}</span>
          </div>
        </div>

        {/* Country badge */}
        {repo.country && (
          <div className="absolute top-3 right-3 text-xs bg-gray-800/80 px-2 py-0.5 rounded-full border border-gray-700">
            {repo.country}
          </div>
        )}
      </div>
    </a>
  );
}

export default function FeaturedRepos({ activeCategory }: FeaturedSectionProps) {
  const config = sectionConfig[activeCategory] || sectionConfig['all'];
  
  if (activeCategory === 'featured') {
    // Show all categories
    return (
      <div className="space-y-8">
        {Object.entries(sectionConfig).map(([key, section]) => (
          <div key={key}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${section.gradient} border border-gray-700 rounded-xl`}>
                {section.icon}
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">{section.title}</h2>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.repos.slice(0, 6).map((repo, index) => (
                <RepoCard key={repo.full_name} repo={repo} index={index} sectionGradient={section.gradient} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-5">
        <div className={`flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${config.gradient} border border-gray-700 rounded-xl`}>
          {config.icon}
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">{config.title}</h2>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {config.repos.map((repo, index) => (
          <RepoCard key={repo.full_name} repo={repo} index={index} sectionGradient={config.gradient} />
        ))}
      </div>
    </section>
  );
}
