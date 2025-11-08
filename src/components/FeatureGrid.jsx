import { Trophy, BarChart3, Cpu, Languages, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Trophy,
    title: 'Worldwide Leaderboards',
    desc: 'Compete with players across the globe with region-aware rankings and prestige titles.'
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    desc: 'AI-enhanced insights, trends, and probability forecasting displayed live.'
  },
  {
    icon: Cpu,
    title: '3D Command Center',
    desc: 'Interactive dashboard with live charts, 3D scenes, and immersive control panels.'
  },
  {
    icon: Languages,
    title: 'Multi-language',
    desc: 'English, Indonesian, Japanese, Spanish, Arabic and more with locale-aware UI.'
  },
  {
    icon: Zap,
    title: 'Token-based Predictions',
    desc: 'Practice strategies using virtual tokens and gamified tournaments. No real money.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'Hardened auth, encryption, and global CDN for performance and safety.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Engineered for Scale</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">Designed for prediction strategy without financial risk, blending premium UX with high performance.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 hover:from-white/10 hover:to-white/[0.04] transition">
              <div className="h-12 w-12 rounded-lg bg-sky-500/20 border border-sky-500/30 text-sky-300 flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <Icon className="h-6 w-6"/>
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 -top-10 h-20 bg-gradient-to-b from-slate-900/0 to-slate-950 pointer-events-none"/>
    </section>
  );
}
