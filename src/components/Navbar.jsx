import { Stethoscope, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 text-white flex items-center justify-center shadow-sm">
            <Stethoscope className="h-5 w-5" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-semibold tracking-tight text-slate-900">Medify</span>
            <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
              <Sparkles className="h-3 w-3 text-teal-600" /> beta
            </span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#library" className="hover:text-slate-900 transition-colors">Library</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 items-center rounded-lg border border-slate-300 px-3 text-sm font-medium text-slate-700 hover:bg-slate-50">Sign in</button>
          <button className="inline-flex h-9 items-center rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 px-4 text-sm font-semibold text-white shadow-sm hover:shadow-md transition-shadow">Get started</button>
        </div>
      </div>
    </header>
  );
}
