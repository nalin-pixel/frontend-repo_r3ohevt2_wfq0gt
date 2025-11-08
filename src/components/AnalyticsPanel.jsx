import { useEffect, useMemo, useRef } from 'react';
import { TrendingUp, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

// Lightweight canvas line chart to avoid extra deps
function MiniChart({ points = 50, color = '#22d3ee' }) {
  const canvasRef = useRef(null);
  const data = useMemo(() => {
    const arr = Array.from({ length: points }, (_, i) => {
      const base = Math.sin(i / 4) * 10 + 40;
      const noise = (Math.random() - 0.5) * 8;
      return Math.max(4, base + noise);
    });
    return arr;
  }, [points]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = (canvas.width = canvas.offsetWidth * devicePixelRatio);
    const h = (canvas.height = canvas.offsetHeight * devicePixelRatio);

    ctx.scale(devicePixelRatio, devicePixelRatio);
    ctx.clearRect(0, 0, w, h);

    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    const step = (canvas.offsetWidth - 16) / (data.length - 1);
    data.forEach((v, i) => {
      const x = 8 + i * step;
      const y = canvas.offsetHeight - (v / 100) * (canvas.offsetHeight - 16) - 8;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();

    // gradient fill
    const grad = ctx.createLinearGradient(0, 0, 0, canvas.offsetHeight);
    grad.addColorStop(0, color + '55');
    grad.addColorStop(1, color + '00');
    ctx.fillStyle = grad;
    ctx.lineTo(canvas.offsetWidth - 8, canvas.offsetHeight - 8);
    ctx.lineTo(8, canvas.offsetHeight - 8);
    ctx.closePath();
    ctx.fill();
  }, [color, data]);

  return <canvas ref={canvasRef} className="w-full h-28 rounded-md"/>;
}

export default function AnalyticsPanel() {
  return (
    <section id="analytics" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">AI Analytics & Live Trends</h2>
            <p className="mt-2 text-slate-300 max-w-2xl">Streaming insights, anomaly detection and trend projections refreshed in real-time.</p>
          </div>
          <div className="flex items-center gap-3 text-sky-300">
            <Activity className="h-5 w-5"/>
            <span className="text-sm">Simulated live feed</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Market Momentum', color: '#38bdf8' },
            { title: 'Win Probability', color: '#a78bfa' },
            { title: 'Volatility Index', color: '#34d399' },
          ].map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">{c.title}</h3>
                  <p className="text-slate-400 text-sm">Last 24h</p>
                </div>
                <TrendingUp className="h-5 w-5 text-slate-300"/>
              </div>
              <div className="mt-4">
                <MiniChart color={c.color} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 -bottom-10 h-20 bg-gradient-to-t from-slate-900/0 to-slate-950 pointer-events-none"/>
    </section>
  );
}
