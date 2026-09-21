import { useEffect, useRef, useState } from 'react';
import { Search, Github, Flame, RefreshCw, Menu, X } from 'lucide-react';
import { trendingSearches } from '../data/featured';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onRefresh: () => void;
  loading: boolean;
}

export default function Header({ searchQuery, onSearchChange, onRefresh, loading }: HeaderProps) {
  const [showSearches, setShowSearches] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/95 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 via-red-500 to-purple-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-950 animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-bold text-white tracking-tight">
                Repo<span className="text-orange-400">Miner</span>
              </p>
              <p className="text-[10px] text-gray-500 -mt-0.5 uppercase tracking-widest">GitHub Trending</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-4 relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setShowSearches(true)}
                onBlur={() => setTimeout(() => setShowSearches(false), 200)}
                placeholder="Buscar repositórios, linguagens, empresas..."
                className="w-full pl-10 pr-14 py-2.5 bg-gray-900 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all"
              />
              <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-gray-700 bg-gray-800 px-1.5 py-0.5 text-[10px] font-medium text-gray-400 sm:block">
                Ctrl K
              </kbd>
            </div>
            
            {/* Trending Searches Dropdown */}
            {showSearches && (
              <div className="absolute top-full mt-2 w-full bg-gray-900 border border-gray-700 rounded-xl shadow-2xl p-3 z-50">
                <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">🔥 Buscas populares</p>
                <div className="flex flex-wrap gap-1.5">
                  {trendingSearches.map((search) => (
                    <button
                      key={search}
                      onClick={() => { onSearchChange(search); setShowSearches(false); }}
                      className="px-2.5 py-1 text-xs bg-gray-800 hover:bg-orange-500/20 hover:text-orange-400 text-gray-300 rounded-lg transition-all border border-gray-700 hover:border-orange-500/50"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onRefresh}
              disabled={loading}
              className="p-2.5 rounded-xl bg-gray-900 border border-gray-700 hover:border-orange-500/50 hover:bg-gray-800 transition-all group"
              title="Atualizar"
            >
              <RefreshCw className={`w-4 h-4 text-gray-400 group-hover:text-orange-400 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2.5 rounded-xl bg-gray-900 border border-gray-700 hover:border-orange-500/50 hover:bg-gray-800 transition-all group"
              title="GitHub"
            >
              <Github className="w-4 h-4 text-gray-400 group-hover:text-orange-400" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden p-2.5 rounded-xl bg-gray-900 border border-gray-700"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-gray-400" /> : <Menu className="w-4 h-4 text-gray-400" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
