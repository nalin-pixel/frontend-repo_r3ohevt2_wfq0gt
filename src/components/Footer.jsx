import { Github, Twitter, Globe, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="community" className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-semibold">NEONPREDICT</h4>
          <p className="mt-3 text-slate-400 text-sm">A premium, global prediction and strategy simulator. Practice, learn, and compete — without financial risk.</p>
        </div>
        <div>
          <h5 className="text-slate-200 font-medium">Languages</h5>
          <ul className="mt-3 text-slate-400 text-sm space-y-1">
            <li>English</li>
            <li>Bahasa Indonesia</li>
            <li>日本語</li>
            <li>Español</li>
            <li>العربية</li>
          </ul>
        </div>
        <div>
          <h5 className="text-slate-200 font-medium">Connect</h5>
          <div className="mt-3 flex items-center gap-3 text-slate-300">
            <a href="#" aria-label="GitHub" className="hover:text-white"><Github className="h-5 w-5"/></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="h-5 w-5"/></a>
            <a href="#" aria-label="Website" className="hover:text-white"><Globe className="h-5 w-5"/></a>
            <a href="#" aria-label="Email" className="hover:text-white"><Mail className="h-5 w-5"/></a>
          </div>
        </div>
      </div>
      <div className="px-6 pb-8 text-center text-slate-500 text-xs">© {new Date().getFullYear()} NeonPredict — Virtual-only predictions. Not gambling.</div>
    </footer>
  );
}
