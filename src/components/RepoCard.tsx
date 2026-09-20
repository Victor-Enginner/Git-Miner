import { GitHubRepo } from '../types';
import { Star, GitFork, Eye, ExternalLink, Clock } from 'lucide-react';

interface RepoCardProps {
  repo: GitHubRepo;
  index: number;
  isFeatured?: boolean;
  badge?: string;
}

function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
  return num.toString();
}

function getLanguageColor(lang: string | null): string {
  const colors: Record<string, string> = {
    'TypeScript': '#3178c6',
    'JavaScript': '#f7df1e',
    'Python': '#3572A5',
    'Rust': '#dea584',
    'Go': '#00ADD8',
    'Java': '#b07219',
    'C++': '#f34b7d',
    'C#': '#178600',
    'Ruby': '#701516',
    'Swift': '#F05138',
    'Kotlin': '#A97BFF',
    'PHP': '#4F5D95',
    'Dart': '#00B4AB',
    'Shell': '#89e051',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Markdown': '#083fa1',
    'C': '#555555',
  };
  return colors[lang || ''] || '#8b8b8b';
}

function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);
  
  if (diffHours < 1) return 'agora';
  if (diffHours < 24) return `${diffHours}h atrás`;
  if (diffDays < 7) return `${diffDays}d atrás`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}sem atrás`;
  return `${Math.floor(diffDays / 30)}m atrás`;
}

export default function RepoCard({ repo, index, isFeatured, badge }: RepoCardProps) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        isFeatured
          ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-orange-950/30 border-orange-500/30 hover:border-orange-500/60 hover:shadow-orange-500/10'
          : 'bg-gray-900 border-gray-800 hover:border-gray-600 hover:shadow-purple-500/5'
      }`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Rank Badge */}
      {!isFeatured && index < 10 && (
        <div className="absolute -top-2 -left-2 w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-xs font-bold text-white shadow-lg z-10">
          {index + 1}
        </div>
      )}

      {/* Featured Badge */}
      {badge && (
        <div className="absolute -top-2 right-3 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-[10px] font-bold text-white shadow-lg">
          {badge}
        </div>
      )}

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <img
            src={repo.owner.avatar_url}
            alt={repo.owner.login}
            className="w-10 h-10 rounded-xl border border-gray-700 group-hover:border-orange-500/50 transition-all"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 truncate">{repo.owner.login}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                repo.owner.type === 'Organization' 
                  ? 'bg-purple-500/20 text-purple-400' 
                  : 'bg-blue-500/20 text-blue-400'
              }`}>
                {repo.owner.type === 'Organization' ? 'ORG' : 'USER'}
              </span>
            </div>
            <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors truncate">
              {repo.name}
            </h3>
          </div>
          <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-orange-400 transition-colors flex-shrink-0 mt-1" />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 line-clamp-2 mb-4 leading-relaxed">
          {repo.description || 'Sem descrição disponível'}
        </p>

        {/* Topics */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {repo.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="px-2 py-0.5 text-[10px] font-medium bg-gray-800 text-gray-400 rounded-md border border-gray-700"
              >
                {topic}
              </span>
            ))}
            {repo.topics.length > 4 && (
              <span className="px-2 py-0.5 text-[10px] text-gray-500">
                +{repo.topics.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-800">
          <div className="flex items-center gap-4">
            {/* Stars */}
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-semibold text-white">{formatNumber(repo.stargazers_count)}</span>
            </div>
            {/* Forks */}
            <div className="flex items-center gap-1.5">
              <GitFork className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-xs text-gray-400">{formatNumber(repo.forks_count)}</span>
            </div>
            {/* Watchers */}
            <div className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-xs text-gray-400">{formatNumber(repo.watchers_count || repo.stargazers_count)}</span>
            </div>
          </div>

          {/* Language */}
          {repo.language && (
            <div className="flex items-center gap-1.5">
              <div 
                className="w-2.5 h-2.5 rounded-full" 
                style={{ backgroundColor: getLanguageColor(repo.language) }}
              />
              <span className="text-xs text-gray-400">{repo.language}</span>
            </div>
          )}
        </div>

        {/* Updated */}
        <div className="flex items-center gap-1 mt-2">
          <Clock className="w-3 h-3 text-gray-600" />
          <span className="text-[11px] text-gray-600">Atualizado {timeAgo(repo.updated_at || repo.pushed_at)}</span>
        </div>
      </div>
    </a>
  );
}
