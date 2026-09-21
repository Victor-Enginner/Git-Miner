import { TimeRange, SortBy } from '../types';
import { Clock, TrendingUp, Filter } from 'lucide-react';
import {
  categories, languages, allFeaturedRepos, multiAgentRepos, hackingRepos, codeModelRepos,
  mediaRepos, govMilitaryRepos, localLLMRepos, devToolsRepos, manualMinedRepos,
} from '../data/featured';

// Quantos repos curados existem por categoria (as demais categorias vêm só da API do GitHub).
const curatedCount: Record<string, number> = {
  featured: allFeaturedRepos.length,
  agents: multiAgentRepos.length,
  hacking: hackingRepos.length,
  code: codeModelRepos.length,
  media: mediaRepos.length,
  gov: govMilitaryRepos.length,
  'local-llm': localLLMRepos.length,
  devtools: devToolsRepos.length,
  manual: manualMinedRepos.length,
};

interface FiltersProps {
  timeRange: TimeRange;
  sortBy: SortBy;
  language: string;
  category: string;
  onTimeRangeChange: (range: TimeRange) => void;
  onSortByChange: (sort: SortBy) => void;
  onLanguageChange: (lang: string) => void;
  onCategoryChange: (cat: string) => void;
}

export default function Filters({
  timeRange, sortBy, language, category,
  onTimeRangeChange, onSortByChange, onLanguageChange, onCategoryChange
}: FiltersProps) {
  return (
    <div className="space-y-4">
      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => onCategoryChange(cat.value)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all border ${
              category === cat.value
                ? 'bg-orange-500/20 border-orange-500/50 text-orange-400 shadow-lg shadow-orange-500/10'
                : 'bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-300'
            }`}
          >
            <span className="mr-1">{cat.icon}</span>
            {cat.label}
            {curatedCount[cat.value] !== undefined && (
              <span className="ml-1.5 rounded-md bg-white/10 px-1.5 py-0.5 text-[10px] tabular-nums text-gray-400">
                {curatedCount[cat.value]}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Filters Row */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Time Range */}
        <div className="flex items-center gap-1 bg-gray-900 border border-gray-700 rounded-xl p-1">
          <Clock className="w-3.5 h-3.5 text-gray-500 ml-2" />
          {(['daily', 'weekly', 'monthly'] as TimeRange[]).map((range) => (
            <button
              key={range}
              onClick={() => onTimeRangeChange(range)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                timeRange === range
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {range === 'daily' ? 'Hoje' : range === 'weekly' ? 'Semana' : 'Mês'}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="flex items-center gap-1 bg-gray-900 border border-gray-700 rounded-xl p-1">
          <TrendingUp className="w-3.5 h-3.5 text-gray-500 ml-2" />
          {([
            { value: 'stars' as SortBy, label: 'Estrelas' },
            { value: 'forks' as SortBy, label: 'Forks' },
            { value: 'updated' as SortBy, label: 'Recentes' },
          ]).map((sort) => (
            <button
              key={sort.value}
              onClick={() => onSortByChange(sort.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                sortBy === sort.value
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {sort.label}
            </button>
          ))}
        </div>

        {/* Language Filter */}
        <div className="flex items-center gap-1 bg-gray-900 border border-gray-700 rounded-xl p-1">
          <Filter className="w-3.5 h-3.5 text-gray-500 ml-2" />
          <select
            value={language}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="bg-transparent text-xs text-gray-300 pr-6 py-1.5 focus:outline-none cursor-pointer appearance-none"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang} className="bg-gray-900">
                {lang === 'all' ? 'Todas Linguagens' : lang}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
