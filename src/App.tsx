import { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Filters from './components/Filters';
import FeaturedRepos from './components/FeaturedRepos';
import RepoCard from './components/RepoCard';
import Stats from './components/Stats';
import LoadingSkeleton from './components/LoadingSkeleton';
import { useTrendingRepos } from './hooks/useGitHub';
import { TimeRange, SortBy } from './types';
import { AlertCircle, Rocket, Github } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [timeRange, setTimeRange] = useState<TimeRange>('weekly');
  const [sortBy, setSortBy] = useState<SortBy>('stars');
  const [language, setLanguage] = useState('all');
  const [category, setCategory] = useState<string>('all');

  const { repos, loading, error, refetch } = useTrendingRepos(timeRange, sortBy, language, category);

  const filteredRepos = useMemo(() => {
    if (!searchQuery.trim()) return repos;
    const query = searchQuery.toLowerCase();
    return repos.filter(
      (repo) =>
        repo.name.toLowerCase().includes(query) ||
        repo.full_name.toLowerCase().includes(query) ||
        repo.owner.login.toLowerCase().includes(query) ||
        (repo.description?.toLowerCase().includes(query)) ||
        (repo.language?.toLowerCase().includes(query)) ||
        (repo.topics?.some((t) => t.toLowerCase().includes(query)))
    );
  }, [repos, searchQuery]);

  const totalStars = useMemo(
    () => filteredRepos.reduce((sum, r) => sum + r.stargazers_count, 0),
    [filteredRepos]
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onRefresh={refetch}
          loading={loading}
        />

        <Hero />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Featured Repos */}
          <FeaturedRepos activeCategory={category} />

          {/* Filters */}
          <div className="mt-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 border border-gray-700 rounded-xl">
                <Rocket className="w-4 h-4 text-cyan-400" />
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">Mineração GitHub API</h2>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent" />
            </div>
            <Filters
              timeRange={timeRange}
              sortBy={sortBy}
              language={language}
              category={category}
              onTimeRangeChange={setTimeRange}
              onSortByChange={setSortBy}
              onLanguageChange={setLanguage}
              onCategoryChange={setCategory}
            />
          </div>

          {/* Stats */}
          {!loading && filteredRepos.length > 0 && (
            <Stats repos={filteredRepos} totalStars={totalStars} />
          )}

          {/* Error State */}
          {error && (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Erro ao buscar repositórios</h3>
              <p className="text-gray-500 text-sm mb-4 text-center max-w-md">
                {error}. A API do GitHub tem um limite de 60 requisições por hora para usuários não autenticados.
              </p>
              <button
                onClick={refetch}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-medium transition-colors"
              >
                Tentar novamente
              </button>
            </div>
          )}

          {/* Loading State */}
          {loading && <LoadingSkeleton />}

          {/* Repos Grid */}
          {!loading && !error && (
            <>
              {filteredRepos.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                    <Github className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Nenhum repositório encontrado</h3>
                  <p className="text-gray-500 text-sm">
                    Tente ajustar os filtros ou a busca.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredRepos.map((repo, index) => (
                    <RepoCard key={repo.id} repo={repo} index={index} />
                  ))}
                </div>
              )}
            </>
          )}

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <span className="text-[10px]">🔥</span>
                </div>
                <span className="text-sm text-gray-500">
                  RepoMiner — Minerador Massivo de Repositórios GitHub
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-600">
                  Powered by GitHub API • 100% Open Source • Free
                </span>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-orange-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
