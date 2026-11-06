import {
  Trophy,
  Medal,
  Award,
  TrendingUp,
  ArrowRight,
  Star,
  GraduationCap,
} from "lucide-react";

const toppers = [
  {
    name: "Aarav Sharma",
    exam: "JEE Advanced 2026",
    rank: "AIR 125",
    score: "98.8%",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Ananya Gupta",
    exam: "NEET 2026",
    rank: "AIR 210",
    score: "99.2%",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500",
    color: "bg-purple-100 text-purple-700",
  },
  {
    name: "Rohan Verma",
    exam: "JEE Main 2026",
    rank: "99.5 Percentile",
    score: "99.5%",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    color: "bg-green-100 text-green-700",
  },
];

const statistics = [
  { value: "2,500+", label: "Students Enrolled" },
  { value: "95%", label: "Success Rate" },
  { value: "150+", label: "Top Ranks" },
  { value: "500+", label: "Selections" },
];

const testimonials = [
  {
    name: "Priya Singh",
    course: "NEET Preparation",
    review:
      "The teachers helped me understand difficult concepts and stay consistent with my preparation. The regular tests made a big difference.",
  },
  {
    name: "Aditya Kumar",
    course: "JEE Preparation",
    review:
      "The study material and doubt-clearing sessions helped me improve my confidence. I am grateful to the entire faculty.",
  },
  {
    name: "Neha Sharma",
    course: "Foundation Course",
    review:
      "The learning environment is supportive and the teachers explain every topic in a very simple way.",
  },
];

export default function Results() {
  return (
    <main className="min-h-screen bg-[#f7f9fd]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#09265f] to-[#2469c9] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            Our Achievements
          </p>

          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold sm:text-5xl">
            Success Stories That Inspire Us
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-blue-100">
            Every achievement represents dedication, hard work and the right
            guidance. Celebrate the success of our students.
          </p>

          <div className="mt-7 flex gap-3 text-sm text-blue-100">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span>/</span>
            <span className="font-semibold text-white">Results</span>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="mx-auto max-w-7xl px-5">
        <div className="-mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-lg sm:grid-cols-4 sm:p-8">
          {statistics.map((item) => (
            <div key={item.label} className="text-center">
              <h2 className="text-3xl font-extrabold text-blue-700">
                {item.value}
              </h2>
              <p className="mt-2 text-xs font-semibold text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Toppers */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="text-center">
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-xs font-bold text-yellow-700">
            STUDENT ACHIEVEMENTS
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our Star Performers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
            Meet some of the students whose dedication and determination have
            made us proud.
          </p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {toppers.map((student) => (
            <article
              key={student.name}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={student.image}
                  alt={student.name}
                  className="h-full w-full object-cover"
                />

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow">
                  <Trophy size={15} className="text-yellow-500" />
                  Top Performer
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {student.name}
                  </h3>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${student.color}`}
                  >
                    {student.score}
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-500">{student.exam}</p>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-xs font-semibold text-slate-500">
                    Achievement
                  </span>
                  <span className="font-extrabold text-blue-700">
                    {student.rank}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Results Highlights */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700">
                OUR COMMITMENT
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Every Student Deserves the Opportunity to Succeed
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                We focus on individual learning, regular assessments,
                personalized guidance and continuous improvement. Our goal is to
                help every student reach their potential.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Regular mock tests and performance analysis",
                  "Personalized doubt-clearing sessions",
                  "Experienced and supportive faculty",
                  "Structured study plans and learning material",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <Award size={16} />
                    </span>
                    <p className="text-sm font-semibold text-slate-700">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-blue-50 p-7">
                <TrendingUp className="text-blue-600" size={30} />
                <h3 className="mt-6 text-3xl font-extrabold text-slate-900">
                  95%
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Student Success Rate
                </p>
              </div>

              <div className="mt-10 rounded-2xl bg-yellow-50 p-7">
                <Trophy className="text-yellow-600" size={30} />
                <h3 className="mt-6 text-3xl font-extrabold text-slate-900">
                  150+
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Top Rank Achievements
                </p>
              </div>

              <div className="rounded-2xl bg-purple-50 p-7">
                <GraduationCap className="text-purple-600" size={30} />
                <h3 className="mt-6 text-3xl font-extrabold text-slate-900">
                  500+
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Successful Selections
                </p>
              </div>

              <div className="mt-10 rounded-2xl bg-green-50 p-7">
                <Medal className="text-green-600" size={30} />
                <h3 className="mt-6 text-3xl font-extrabold text-slate-900">
                  10+
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Years of Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700">
            STUDENT STORIES
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            What Our Students Say
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
            >
              <div className="flex gap-1 text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <h3 className="font-extrabold text-slate-900">{item.name}</h3>
                <p className="mt-1 text-xs text-blue-600">{item.course}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#0b2d68] p-8 text-white sm:flex-row sm:items-center sm:p-12">
          <div>
            <h2 className="text-2xl font-extrabold">
              Your Success Story Starts Here
            </h2>
            <p className="mt-3 text-sm text-blue-100">
              Take the first step towards achieving your academic goals.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-800 hover:bg-blue-50"
          >
            Enquire Now
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
