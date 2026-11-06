import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Award,
  Users,
} from "lucide-react";

const faculty = [
  {
    name: "Dr. Ananya Sharma",
    subject: "Physics",
    qualification: "Ph.D. in Physics",
    experience: "12 Years Experience",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600",
    description:
      "Specializes in making complex physics concepts easy to understand through practical examples.",
  },
  {
    name: "Rahul Mehta",
    subject: "Mathematics",
    qualification: "M.Sc. Mathematics",
    experience: "10 Years Experience",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    description:
      "Helps students develop strong problem-solving skills and build confidence in mathematics.",
  },
  {
    name: "Dr. Priya Verma",
    subject: "Biology",
    qualification: "M.Sc. Biotechnology",
    experience: "9 Years Experience",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600",
    description:
      "Passionate about biology education, conceptual learning and medical entrance preparation.",
  },
  {
    name: "Amit Kumar",
    subject: "Chemistry",
    qualification: "M.Sc. Chemistry",
    experience: "8 Years Experience",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600",
    description:
      "Focuses on connecting theoretical chemistry with practical applications and experiments.",
  },
];

const highlights = [
  {
    icon: Users,
    number: "25+",
    label: "Expert Educators",
  },
  {
    icon: GraduationCap,
    number: "15+",
    label: "Average Years of Expertise",
  },
  {
    icon: BookOpen,
    number: "20+",
    label: "Subjects Covered",
  },
  {
    icon: Award,
    number: "100%",
    label: "Student Commitment",
  },
];

export default function Faculty() {
  return (
    <main className="min-h-screen bg-[#f7f9fd]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#09265f] to-[#2469c9] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            Meet Our Educators
          </p>

          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold sm:text-5xl">
            Learn From Experienced Teachers
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-blue-100">
            Great teachers inspire great achievements. Meet the dedicated
            educators who guide our students towards success.
          </p>

          <div className="mt-7 flex gap-3 text-sm text-blue-100">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span>/</span>
            <span className="font-semibold text-white">Faculty</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700">
            OUR FACULTY
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Meet the People Behind Your Success
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            Our faculty combines subject expertise, teaching experience and a
            student-first approach to create an effective learning environment.
          </p>
        </div>

        {/* Faculty Cards */}
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((teacher) => (
            <article
              key={teacher.name}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-blue-700 shadow">
                  {teacher.subject}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-extrabold text-slate-900">
                  {teacher.name}
                </h3>

                <p className="mt-2 text-sm font-semibold text-blue-600">
                  {teacher.qualification}
                </p>

                <p className="mt-3 text-xs font-medium text-slate-500">
                  {teacher.experience}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  {teacher.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Faculty Highlights */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Our Teaching Strength
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              A team committed to quality education and student growth.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-100 bg-[#f7f9fd] p-6 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-4 text-3xl font-extrabold text-slate-900">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-xs font-semibold text-slate-500">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#0b2d68] p-8 text-white sm:flex-row sm:items-center sm:p-12">
          <div>
            <h2 className="text-2xl font-extrabold">
              Ready to Start Learning?
            </h2>
            <p className="mt-3 text-sm text-blue-100">
              Connect with our team and find the right course for you.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-800 hover:bg-blue-50"
          >
            Contact Us
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
