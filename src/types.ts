export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  owner: {
    login: string;
    avatar_url: string;
    type: string;
  };
  topics: string[];
  open_issues_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string | null;
  watchers_count: number;
  size: number;
  license: {
    name: string;
    spdx_id: string;
  } | null;
}

export interface TrendingRepo extends GitHubRepo {
  starsToday?: number;
  starsThisWeek?: number;
}

export type TimeRange = 'daily' | 'weekly' | 'monthly';
export type SortBy = 'stars' | 'forks' | 'updated';
export type Category = 'all' | 'ai' | 'devtools' | 'web' | 'database' | 'cloud' | 'featured';
