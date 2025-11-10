import { Mic, FilePlus2, Image, Tags, Files, Sparkles, Share2, CalendarClock } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 text-white flex items-center justify-center">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
    <p className="mt-1 text-slate-600 text-sm">{desc}</p>
  </div>
);

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-40 max-w-4xl bg-gradient-to-b from-teal-200/40 via-blue-200/30 to-transparent blur-2xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Clarity-first workspace</h2>
          <p className="mt-3 text-slate-600">Create medical notes faster with structure, auto-formatting, and one-click flashcards. Organize by subject, tag for exams, and plan your day.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Feature icon={FilePlus2} title="Powerful editor" desc="Headings, bullets, tables, images, and references built for medicine." />
          <Feature icon={Mic} title="Voice to text" desc="Dictate on the go with accurate transcription and medical terms." />
          <Feature icon={Image} title="Insert diagrams" desc="Drop textbook snippets, charts, and flow‑charts inline." />
          <Feature icon={Tags} title="Smart tags" desc="High‑Yield, Exam Recall, Must Revise — filter in a tap." />
          <Feature icon={Sparkles} title="Auto flashcards" desc="Convert any note into crisp Q/A and mnemonic cards." />
          <Feature icon={CalendarClock} title="Planner" desc="Spaced repetition with reminders and Pomodoro focus." />
          <Feature icon={Files} title="Libraries" desc="Store mnemonics, diagrams, and crowd‑voted best picks." />
          <Feature icon={Share2} title="Collaboration" desc="Share privately, create groups, and discuss under topics." />
        </div>
      </div>
    </section>
  );
}
