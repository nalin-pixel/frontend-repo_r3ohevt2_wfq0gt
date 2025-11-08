import { useState } from 'react';
import { Globe, Menu, X, User, Shield, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-sky-300">
            <Sparkles className="h-6 w-6" />
            <span className="font-semibold tracking-wide">NEONPREDICT</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
            <a href="#features" className="hover:text-sky-300 transition">Features</a>
            <a href="#analytics" className="hover:text-sky-300 transition">Analytics</a>
            <a href="#community" className="hover:text-sky-300 transition">Community</a>
            <a href="#security" className="hover:text-sky-300 transition flex items-center gap-1"><Shield className="h-4 w-4"/>Security</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 text-slate-200 hover:bg-white/5 transition">
              <Globe className="h-4 w-4"/>
              EN
            </button>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-sky-500 hover:bg-sky-600 text-white transition">
              <User className="h-4 w-4"/>
              Sign in
            </button>
          </div>

          <button aria-label="Open menu" className="md:hidden text-slate-200" onClick={() => setOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/80">
          <div className="absolute top-4 right-4">
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded bg-white/10 text-slate-200">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-20 px-6 space-y-6 text-lg text-slate-200">
            <a href="#features" onClick={() => setOpen(false)} className="block">Features</a>
            <a href="#analytics" onClick={() => setOpen(false)} className="block">Analytics</a>
            <a href="#community" onClick={() => setOpen(false)} className="block">Community</a>
            <a href="#security" onClick={() => setOpen(false)} className="block">Security</a>
            <div className="pt-4 flex items-center gap-3">
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 text-slate-200">
                <Globe className="h-4 w-4"/> EN
              </button>
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-sky-500 text-white">
                <User className="h-4 w-4"/> Sign in
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
