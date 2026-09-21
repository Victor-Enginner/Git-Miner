import { useState, useEffect, useCallback } from 'react';
import { GitHubRepo, TimeRange, SortBy } from '../types';

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
      
      if (category === 'featured' || category === 'agents' || category === 'hacking' || 
          category === 'code' || category === 'media' || category === 'gov' || category === 'local-llm' || category === 'manual') {
        // For featured categories, we still fetch trending repos but with relevant keywords
        const categoryKeywords: Record<string, string> = {
          'agents': 'topic:ai-agents OR topic:multi-agent OR topic:autonomous stars:>3000',
          'hacking': 'topic:security OR topic:penetration-testing OR topic:red-team stars:>2000',
          'code': 'topic:code-assistant OR topic:copilot OR topic:ai-coding stars:>2000',
          'media': 'topic:image-generation OR topic:video-generation OR topic:stable-diffusion stars:>3000',
          'gov': 'topic:government OR topic:military OR topic:sovereign-ai stars:>1000',
          'local-llm': 'topic:local-llm OR topic:llm-inference OR topic:on-device stars:>3000',
          'manual': 'stars:>1000',
          'featured': 'stars:>5000',
        };
        query = `${categoryKeywords[category] || 'stars:>5000'} pushed:>${dateRange}`;
      } else if (category === 'ai') {
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
