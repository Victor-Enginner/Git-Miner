#!/usr/bin/env node
// Adiciona repositórios ao src/data/featured.ts com dados reais da API do GitHub.
//
//   node scripts/add-repo.mjs <url|owner/repo> <categoria> "<badge>" ["descrição"]
//   node scripts/add-repo.mjs --file lista.json
//
// lista.json: [{ "repo": "owner/name", "category": "agents", "badge": "🤖 X", "description": "opcional", "country": "opcional" }]
// Token: GITHUB_TOKEN, ou o login do `gh` se existir (sem token o limite é 60 req/h).

import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const FEATURED = resolve(dirname(fileURLToPath(import.meta.url)), '../src/data/featured.ts');

const ARRAYS = {
  agents: 'multiAgentRepos',
  hacking: 'hackingRepos',
  code: 'codeModelRepos',
  media: 'mediaRepos',
  gov: 'govMilitaryRepos',
  'local-llm': 'localLLMRepos',
  devtools: 'devToolsRepos',
  all: 'originalFeatured',
};

function token() {
  if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN;
  try {
    return execSync('gh auth token', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  } catch {
    return '';
  }
}

const BS = String.fromCharCode(92);
const q = (v) =>
  "'" + String(v).split(BS).join(BS + BS).split("'").join(BS + "'").replace(/\s*[\r\n]+\s*/g, ' ') + "'";
const parseRepo = (v) => v.replace(/^https?:\/\/github\.com\//, '').replace(/\.git$/, '').replace(/\/+$/, '');

async function fetchRepo(fullName, tk) {
  const res = await fetch(`https://api.github.com/repos/${fullName}`, {
    headers: { Accept: 'application/vnd.github+json', ...(tk ? { Authorization: `Bearer ${tk}` } : {}) },
  });
  if (!res.ok) throw new Error(`${fullName}: GitHub respondeu ${res.status}`);
  return res.json();
}

function toEntry(r, { category, badge, description, country }) {
  const desc = description || r.description;
  if (!desc) throw new Error(`${r.full_name}: sem descrição no GitHub, passe uma manualmente`);
  const lines = [
    `    full_name: ${q(r.full_name)},`,
    `    name: ${q(r.name)},`,
    `    owner: { login: ${q(r.owner.login)}, avatar_url: ${q(r.owner.avatar_url.split('?')[0])}, type: ${q(r.owner.type)} },`,
    `    description: ${q(desc)},`,
    `    html_url: ${q(r.html_url)},`,
    `    stargazers_count: ${r.stargazers_count},`,
    `    forks_count: ${r.forks_count},`,
    `    language: ${q(r.language || 'Markdown')},`,
    `    topics: [${(r.topics || []).slice(0, 5).map(q).join(', ')}],`,
    `    category: ${q(category)},`,
    ...(country ? [`    country: ${q(country)},`] : []),
    `    badge: ${q(badge)}`,
  ];
  return `  {\n${lines.join('\n')}\n  }`;
}

// Novos repos entram no TOPO do array: a aba "Destaques" mostra só os 6 primeiros de cada seção.
function insert(src, arrayName, entry) {
  const marker = `export const ${arrayName}: FeaturedRepo[] = [`;
  const start = src.indexOf(marker);
  if (start < 0) throw new Error(`array ${arrayName} não encontrado em featured.ts`);
  const at = start + marker.length;
  const rest = src.slice(at);
  const hasItems = /^\s*\{/.test(rest);
  return `${src.slice(0, at)}
${entry}${hasItems ? ',' : ''}${rest}`;
}

async function main() {
  const args = process.argv.slice(2);
  let items;
  if (args[0] === '--file') items = JSON.parse(readFileSync(args[1], 'utf8'));
  else if (args.length >= 3) items = [{ repo: args[0], category: args[1], badge: args[2], description: args[3] }];
  else {
    console.error('uso: add-repo.mjs <url|owner/repo> <categoria> "<badge>" ["descrição"]  |  --file lista.json');
    process.exit(1);
  }

  const tk = token();
  let src = readFileSync(FEATURED, 'utf8');
  const ok = [];
  const fail = [];

  for (const it of [...items].reverse()) {
    try {
      const arr = ARRAYS[it.category];
      if (!arr) throw new Error(`categoria inválida "${it.category}" (${Object.keys(ARRAYS).join(', ')})`);
      const r = await fetchRepo(parseRepo(it.repo), tk);
      if (src.toLowerCase().includes(`full_name: '${r.full_name.toLowerCase()}'`)) {
        fail.push(`${r.full_name}: já existe no featured.ts`);
        continue;
      }
      src = insert(src, arr, toEntry(r, it));
      ok.push(`${r.full_name} (${r.stargazers_count}★) -> ${it.category}`);
    } catch (e) {
      fail.push(e.message);
    }
  }

  if (ok.length) writeFileSync(FEATURED, src);
  ok.forEach((l) => console.log('+', l));
  fail.forEach((l) => console.log('!', l));
  if (fail.length) process.exitCode = 1;
}

main();
