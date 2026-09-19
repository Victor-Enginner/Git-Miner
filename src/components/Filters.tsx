import { TimeRange, SortBy, Category } from '../types';
import { Clock, TrendingUp, Star, Filter } from 'lucide-react';

interface FiltersProps {
  timeRange: TimeRange;
  sortBy: SortBy;
  language: string;
  category: Category;
  onTimeRangeChange: (range: TimeRange) => void;
  onSortByChange: (sort: SortBy) => void;
  onLanguageChange: (lang: string) => void;
  onCategoryChange: (cat: Category) => void;
}

const languages = [
  'all', 'TypeScript', 'JavaScript', 'Python', 'Rust', 'Go', 
  'Java', 'C++', 'C#', 'Ruby', 'Swift', 'Kotlin', 'PHP', 'Dart'
];

const categories: { value: Category; label: string; icon: string }[] = [
  { value: 'all', label: 'Todos', icon: '🌐' },
  { value: 'featured', label: 'Destaques', icon: '⭐' },
  { value: 'ai', label: 'AI / ML', icon: '🧠' },
  { value: 'devtools', label: 'Dev Tools', icon: '🛠️' },
  { value: 'web', label: 'Web', icon: '🌍' },
  { value: 'database', label: 'Database', icon: '🗄️' },
  { value: 'cloud', label: 'Cloud', icon: '☁️' },
];

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
