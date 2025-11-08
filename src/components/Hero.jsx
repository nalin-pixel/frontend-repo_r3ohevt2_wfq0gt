import Spline from '@splinetool/react-spline';
import { Rocket, ShieldCheck, Globe2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/90"/>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sky-200 mb-6">
            <ShieldCheck className="h-4 w-4"/>
            <span className="text-xs">Virtual prediction platform • No real gambling</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Predict. Simulate. Dominate the Economy.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300">
            A global, AI-powered strategy arena with virtual tokens, real-time analytics, and a 3D command center. Premium performance. Zero monetary risk.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-md bg-sky-500 hover:bg-sky-600 text-white px-5 py-3 font-medium transition">
              <Rocket className="h-5 w-5"/>
              Get Started
            </a>
            <a href="#analytics" className="inline-flex items-center gap-2 rounded-md border border-white/10 hover:bg-white/5 text-slate-200 px-5 py-3 font-medium transition">
              <Globe2 className="h-5 w-5"/>
              Live Analytics
            </a>
          </div>
        </div>
      </div>

      <div className="absolute -top-24 right-0 w-[40rem] h-[40rem] opacity-40 blur-3xl bg-sky-500/30 rounded-full pointer-events-none"/>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] opacity-30 blur-3xl bg-indigo-500/20 rounded-full pointer-events-none"/>
    </section>
  );
}
