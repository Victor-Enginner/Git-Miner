import { featuredRepos } from '../data/featured';
import { Star, GitFork, ExternalLink, Zap } from 'lucide-react';

function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
  return num.toString();
}

export default function FeaturedRepos() {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl">
          <Zap className="w-4 h-4 text-orange-400" />
          <h2 className="text-sm font-bold text-orange-400 uppercase tracking-wider">Repos em Destaque</h2>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-orange-500/30 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredRepos.map((repo, index) => (
          <a
            key={repo.full_name}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-orange-500/20 bg-gradient-to-br from-gray-900 via-gray-900 to-orange-950/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative">
              {/* Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm">{repo.badge}</span>
                <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-orange-400 transition-colors" />
              </div>

              {/* Repo info */}
              <div className="flex items-start gap-3 mb-3">
                <img
                  src={repo.owner.avatar_url}
                  alt={repo.owner.login}
                  className="w-12 h-12 rounded-xl border-2 border-orange-500/30 group-hover:border-orange-500/60 transition-all"
                />
                <div>
                  <p className="text-xs text-gray-500">{repo.owner.login}</p>
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                    {repo.name}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                {repo.description}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {repo.topics.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-0.5 text-[10px] font-medium bg-orange-500/10 text-orange-400 rounded-md border border-orange-500/20"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-5 pt-3 border-t border-gray-800/50">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-bold text-white">{formatNumber(repo.stargazers_count)}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GitFork className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-400">{formatNumber(repo.forks_count)}</span>
                </div>
                <div className="flex items-center gap-1.5 ml-auto">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ 
                      backgroundColor: repo.language === 'TypeScript' ? '#3178c6' : 
                                      repo.language === 'Python' ? '#3572A5' : 
                                      repo.language === 'Markdown' ? '#083fa1' : '#8b8b8b' 
                    }} 
                  />
                  <span className="text-xs text-gray-400">{repo.language}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
