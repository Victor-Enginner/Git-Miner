import { useEffect } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { Flame } from 'lucide-react';
import { AuroraFlow } from '@/components/ui/aurora-flow';
import { FlippingWordSwap } from '@/components/ui/flipping-word-swap';
import { allFeaturedRepos } from '@/data/featured';

function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
  return num.toString();
}

function CountUp({ to, format = (n) => n.toString() }: { to: number; format?: (n: number) => string }) {
  const value = useMotionValue(0);
  const text = useTransform(value, (v) => format(Math.round(v)));

  useEffect(() => {
    const controls = animate(value, to, { duration: 1.6, ease: 'easeOut' });
    return () => controls.stop();
  }, [to, value]);

  return <motion.span>{text}</motion.span>;
}

const AURORA_COLORS = ['#030712', '#1e0b3a', '#5b1d6b', '#c2410c', '#fdba74'];

const chips = [
  { label: '🔴 Red Team', className: 'bg-red-500/10 text-red-300 border-red-500/30' },
  { label: '🤖 Multi-Agentes', className: 'bg-purple-500/10 text-purple-300 border-purple-500/30' },
  { label: '💻 Code Models', className: 'bg-green-500/10 text-green-300 border-green-500/30' },
  { label: '🎬 Mídia AI', className: 'bg-pink-500/10 text-pink-300 border-pink-500/30' },
  { label: '🏛️ Gov/Militar', className: 'bg-blue-500/10 text-blue-300 border-blue-500/30' },
  { label: '🦙 LLM Local', className: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30' },
  { label: '🛠️ Dev Tools', className: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30' },
];

export default function Hero() {
  const totalStars = allFeaturedRepos.reduce((sum, r) => sum + r.stargazers_count, 0);

  const stats = [
    { label: 'repos curados', node: <CountUp to={allFeaturedRepos.length} /> },
    { label: 'estrelas somadas', node: <CountUp to={totalStars} format={formatNumber} /> },
    { label: 'categorias', node: <CountUp to={7} /> },
  ];

  return (
    <AuroraFlow
      colors={AURORA_COLORS}
      opacity={0.55}
      speed={0.6}
      vignette
      className="min-h-[480px] border-b border-white/5"
    >
      <div className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-4 pb-28 pt-16 text-center sm:px-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-md">
            <Flame className="h-4 w-4 text-orange-400" />
            <span className="text-sm text-gray-300">Mineração Massiva de Repositórios Open Source</span>
          </div>

          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl">
            Descubra Repositórios
            <br />
            <FlippingWordSwap
              word1="em Alta"
              word2="antes de todos"
              className="text-orange-400"
              toClassName="text-fuchsia-300"
            />
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-300/80 sm:text-base">
            AI Agents • Red Team • Code Models • Multi-Agentes • Geração de Mídia • LLMs Locais •
            Modelos Governamentais — curadoria à mão, com dados reais do GitHub.
          </p>

          <div className="mt-8 grid w-full max-w-xl grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-black/30 px-3 py-4 backdrop-blur-md">
                <div className="text-2xl font-black tabular-nums text-white sm:text-3xl">{s.node}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {chips.map((c) => (
              <span key={c.label} className={`rounded-full border px-2.5 py-1 text-[11px] backdrop-blur-sm ${c.className}`}>
                {c.label}
              </span>
            ))}
          </div>

        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-gray-950 to-transparent" />
      </div>
    </AuroraFlow>
  );
}
