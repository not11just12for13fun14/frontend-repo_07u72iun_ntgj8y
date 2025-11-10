import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />

      <section id="dashboard" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-teal-50 via-white to-blue-50 p-8">
            <h3 className="text-2xl font-bold tracking-tight">Personalized dashboard</h3>
            <p className="mt-2 text-slate-600 max-w-2xl">Choose your region and stage, pick your current subjects, and Medify will tailor your study plan with Today’s Plan, Latest Notes, Flashcards Review, and Upcoming Exams.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-white border border-slate-200 p-4">
                <p className="text-sm text-slate-500">Today’s Study Plan</p>
                <p className="mt-2 font-semibold">Cardio: ECG basics • Pharma: Beta‑blockers</p>
              </div>
              <div className="rounded-xl bg-white border border-slate-200 p-4">
                <p className="text-sm text-slate-500">Latest Notes</p>
                <p className="mt-2 font-semibold">Heart failure pathophysiology</p>
              </div>
              <div className="rounded-xl bg-white border border-slate-200 p-4">
                <p className="text-sm text-slate-500">Flashcards Review</p>
                <p className="mt-2 font-semibold">12 cards due • High‑Yield</p>
              </div>
              <div className="rounded-xl bg-white border border-slate-200 p-4">
                <p className="text-sm text-slate-500">Upcoming Exams</p>
                <p className="mt-2 font-semibold">USMLE Step 1 • 42 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
