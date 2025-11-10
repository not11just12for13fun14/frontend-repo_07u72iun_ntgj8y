import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Zn7XRxnnbSat5OJG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/70 px-3 py-1 text-xs text-teal-700 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
            Designed for medical students
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Study calmer. Remember longer. Perform better.
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Medify is a premium workspace to create smart notes, generate flashcards, and plan high‑yield revision — all in one elegant, distraction‑free interface.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 px-5 py-3 text-white font-semibold shadow-sm hover:shadow-md transition-shadow">Start free</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-slate-700 font-medium bg-white/70 backdrop-blur hover:bg-white">Explore features</a>
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-gradient-to-br from-teal-200/40 via-blue-200/30 to-transparent blur-3xl" />
          <div className="relative rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl p-4 bg-gradient-to-br from-teal-50 to-white border border-teal-100">
                <p className="text-slate-900 font-semibold">Smart Notes</p>
                <p className="text-slate-600 mt-1">Headings, images, voice‑to‑text</p>
              </div>
              <div className="rounded-xl p-4 bg-gradient-to-br from-blue-50 to-white border border-blue-100">
                <p className="text-slate-900 font-semibold">Flashcards</p>
                <p className="text-slate-600 mt-1">Auto‑generate from notes</p>
              </div>
              <div className="rounded-xl p-4 bg-gradient-to-br from-cyan-50 to-white border border-cyan-100">
                <p className="text-slate-900 font-semibold">Planner</p>
                <p className="text-slate-600 mt-1">Spaced repetition + Pomodoro</p>
              </div>
              <div className="rounded-xl p-4 bg-gradient-to-br from-sky-50 to-white border border-sky-100">
                <p className="text-slate-900 font-semibold">Library</p>
                <p className="text-slate-600 mt-1">Mnemonics & diagrams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
