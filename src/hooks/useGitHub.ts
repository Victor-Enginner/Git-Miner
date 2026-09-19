import { useState, useEffect, useCallback } from 'react';
import { GitHubRepo, TimeRange, SortBy } from '../types';
import { giantCompanyRepos } from '../data/featured';

const GITHUB_API = 'https://api.github.com';

function getDateRange(timeRange: TimeRange): string {
  const now = new Date();
  let daysBack = 1;
  
  switch (timeRange) {
    case 'daily': daysBack = 1; break;
    case 'weekly': daysBack = 7; break;
    case 'monthly': daysBack = 30; break;
  }
  
  const date = new Date(now.getTime() - daysBack * 24 * 60 * 60 * 1000);
  return date.toISOString().split('T')[0];
}

export function useTrendingRepos(timeRange: TimeRange, sortBy: SortBy, language: string, category: string) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRepos = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      let query = '';
      const dateRange = getDateRange(timeRange);
      
      if (category === 'featured') {
        // Fetch featured repos specifically
        const orgs = giantCompanyRepos.slice(0, 10).join(' ');
        query = `stars:>5000 pushed:>${dateRange} sort:stars-desc`;
        const response = await fetch(
          `${GITHUB_API}/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=30`
        );
        if (!response.ok) throw new Error('API rate limit or error');
        const data = await response.json();
        setRepos(data.items || []);
        setLoading(false);
        return;
      }

      if (category === 'ai') {
        query = `topic:artificial-intelligence OR topic:machine-learning OR topic:llm OR topic:ai pushed:>${dateRange} stars:>1000`;
      } else if (category === 'devtools') {
        query = `topic:developer-tools OR topic:cli OR topic:devops pushed:>${dateRange} stars:>1000`;
      } else if (category === 'web') {
        query = `topic:web OR topic:frontend OR topic:framework pushed:>${dateRange} stars:>1000`;
      } else if (category === 'database') {
        query = `topic:database OR topic:sql OR topic:nosql pushed:>${dateRange} stars:>1000`;
      } else if (category === 'cloud') {
        query = `topic:cloud OR topic:kubernetes OR topic:docker pushed:>${dateRange} stars:>1000`;
      } else {
        query = `stars:>5000 pushed:>${dateRange}`;
      }

      if (language && language !== 'all') {
        query += ` language:${language}`;
      }

      const sortField = sortBy === 'updated' ? 'updated' : sortBy;
      const response = await fetch(
        `${GITHUB_API}/search/repositories?q=${encodeURIComponent(query)}&sort=${sortField}&order=desc&per_page=40`
      );
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      
      const data = await response.json();
      setRepos(data.items || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch repos');
    } finally {
      setLoading(false);
    }
  }, [timeRange, sortBy, language, category]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return { repos, loading, error, refetch: fetchRepos };
}

export function useRepoDetails(owner: string, repo: string) {
  const [repoData, setRepoData] = useState<GitHubRepo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`${GITHUB_API}/repos/${owner}/${repo}`);
        if (response.ok) {
          const data = await response.json();
          setRepoData(data);
        }
      } catch {
        // Silent fail
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [owner, repo]);

  return { repoData, loading };
}
