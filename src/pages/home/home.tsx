import { Link } from "react-router-dom";

const stats = [
  ["🏆", "5000+", "Happy Students"],
  ["👥", "95%", "Success Rate"],
  ["🏛️", "20+", "Years Experience"],
  ["⭐", "4.8/5", "Student Rating"],
];

const benefits = [
  ["▣", "Expert Faculty", "Learn from the best industry experts"],
  ["♙", "Personalized Attention", "Dedicated support for every student"],
  ["✎", "Proven Results", "Consistent top ranks every year"],
  ["◆", "Modern Infrastructure", "Smart classrooms & online support"],
];

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate grid min-h-[440px] overflow-hidden rounded-2xl bg-gradient-to-r from-[#09265f] via-[#123b85] to-[#2469c9] text-white md:grid-cols-[1.05fr_.95fr]"
    >
      <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="relative z-10 px-7 py-12 sm:px-10 lg:px-12">
        <span className="inline-flex rounded-full border border-white/15 bg-blue-500/30 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-100">
          Build Your Dream Career
        </span>
        <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          Your Success{" "}
          <span className="block bg-gradient-to-r from-sky-300 to-blue-200 bg-clip-text text-transparent">
            Our Mission
          </span>
        </h1>
        <p className="mt-5 max-w-md text-base leading-7 text-blue-100 sm:text-lg">
          Expert guidance, personalized learning and proven results for a
          brighter future.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/courses"
            className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-blue-400"
          >
            Explore Courses <span>→</span>
          </Link>
          {/* <Link
            to="/"
            className="rounded-xl border border-white/40 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/15"
          >
            <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/70 text-[10px]">
              ▶
            </span>
            Watch Video
          </Link> */}
        </div>
      </div>
      <div className="relative flex min-h-[280px] items-end justify-center px-5 pt-8 md:min-h-full">
        <div className="absolute bottom-10 right-8 h-64 w-64 rounded-full bg-blue-400/30 blur-2xl md:h-80 md:w-80" />
        <img
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=85"
          alt="Student studying with books"
          className="relative z-10 h-[300px] w-full max-w-[430px] rounded-t-[48%] object-cover object-center shadow-2xl shadow-blue-950/30 md:h-[390px]"
        />
        <div className="absolute bottom-12 left-5 z-20 hidden rounded-xl border border-white/20 bg-white/10 px-4 py-3 shadow-lg backdrop-blur md:block">
          <p className="text-xs text-blue-100">Learn today, lead tomorrow</p>
          <p className="mt-1 text-lg font-bold">Your future starts here</p>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section
      aria-label="Institute achievements"
      className="grid grid-cols-2 gap-3 rounded-2xl bg-blue-50/90 p-4 sm:grid-cols-4 sm:gap-2 sm:px-6 sm:py-5"
    >
      {stats.map(([icon, value, label]) => (
        <div
          key={label}
          className="flex items-center justify-center gap-3 py-2"
        >
          <span className="text-2xl" aria-hidden="true">
            {icon}
          </span>
          <div>
            <p className="text-xl font-extrabold leading-tight text-blue-950">
              {value}
            </p>
            <p className="mt-1 text-[11px] font-medium text-slate-600 sm:text-xs">
              {label}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

function Benefits() {
  return (
    <section className="py-12 sm:py-16">
      <div className="text-center">
        <span className="rounded-full bg-blue-50 px-4 py-1.5 text-[11px] font-bold text-blue-700">
          Why Choose EduPro?
        </span>
        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Your Growth, Our Priority
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
          The right guidance, resources and learning environment to help every
          student reach their potential.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(([icon, title, description]) => (
          <article
            key={title}
            className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-[0_8px_30px_rgba(15,40,90,0.06)] transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-blue-600">
              {icon}
            </div>
            <h3 className="mt-4 text-sm font-extrabold text-slate-900">
              {title}
            </h3>
            <p className="mt-2 text-xs leading-5 text-slate-500">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function BottomCallout() {
  return (
    <section className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-r from-[#09265f] to-[#1e58ad] px-7 py-8 text-white sm:px-10">
      <div className="absolute -right-8 -top-20 h-56 w-56 rounded-full border-[30px] border-white/5" />
      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-extrabold sm:text-2xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-2 max-w-xl text-sm text-blue-100">
            Join thousands of successful students and take the first step
            towards your dream.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-800 transition hover:bg-blue-50"
        >
          Enquire Now <span className="ml-2">→</span>
        </Link>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6f8fc] text-slate-900">
      <main className="mx-auto max-w-7xl space-y-7 px-4 py-5 sm:px-6 sm:py-7 lg:px-8">
        <Hero />
        <Stats />
        <Benefits />
        <BottomCallout />
      </main>
      <footer className="mt-10 border-t border-slate-200 bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-left">
          <span className="font-bold text-slate-800">EduPro</span>
          <span>
            © {new Date().getFullYear()} EduPro Institute. All rights reserved.
          </span>
          <span>Learn. Grow. Succeed.</span>
        </div>
      </footer>
    </div>
  );
}
