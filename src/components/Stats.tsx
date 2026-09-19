import { GitHubRepo } from '../types';
import { Building2, TrendingUp } from 'lucide-react';

interface StatsProps {
  repos: GitHubRepo[];
  totalStars: number;
}

export default function Stats({ repos, totalStars }: StatsProps) {
  const languages = repos.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const topLanguages = Object.entries(languages)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  const orgCount = repos.filter(r => r.owner.type === 'Organization').length;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-1">
          <TrendingUp className="w-4 h-4 text-green-400" />
          <span className="text-xs text-gray-500">Repos</span>
        </div>
        <p className="text-2xl font-bold text-white">{repos.length}</p>
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-yellow-500">⭐</span>
          <span className="text-xs text-gray-500">Total Stars</span>
        </div>
        <p className="text-2xl font-bold text-white">
          {totalStars >= 1000000 ? (totalStars / 1000000).toFixed(1) + 'M' : (totalStars / 1000).toFixed(0) + 'k'}
        </p>
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-1">
          <Building2 className="w-4 h-4 text-purple-400" />
          <span className="text-xs text-gray-500">Organizações</span>
        </div>
        <p className="text-2xl font-bold text-white">{orgCount}</p>
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-blue-400">💻</span>
          <span className="text-xs text-gray-500">Top Lang</span>
        </div>
        <p className="text-lg font-bold text-white truncate">
          {topLanguages[0]?.[0] || 'N/A'}
        </p>
      </div>
    </div>
  );
}
