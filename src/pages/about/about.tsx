import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  BookOpen,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make quality education accessible and empower students with the knowledge, confidence and skills needed to achieve their goals.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become a trusted learning destination that inspires curiosity, encourages excellence and shapes future leaders.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "We believe in integrity, dedication, individual attention, continuous improvement and a student-first approach.",
    color: "bg-pink-100 text-pink-600",
  },
];

const features = [
  "Experienced and dedicated faculty",
  "Student-focused learning environment",
  "Regular tests and performance tracking",
  "Personalized doubt-clearing sessions",
  "Structured study material",
  "Career guidance and counselling",
];

const stats = [
  { number: "10+", label: "Years of Experience" },
  { number: "2,500+", label: "Students Guided" },
  { number: "25+", label: "Expert Educators" },
  { number: "20+", label: "Learning Programs" },
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#f7f9fd]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#09265f] to-[#2469c9] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            Get to Know Us
          </p>

          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold sm:text-5xl">
            Education That Inspires. Excellence That Lasts.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-blue-100">
            We are committed to helping students discover their potential
            through quality education, expert guidance and continuous support.
          </p>

          <div className="mt-7 flex gap-3 text-sm text-blue-100">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="font-semibold text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000"
            alt="Students learning together"
            className="h-[420px] w-full rounded-3xl object-cover"
          />

          <div className="absolute -bottom-6 right-5 rounded-2xl bg-white p-6 shadow-xl sm:right-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">10+</h3>
                <p className="text-xs font-semibold text-slate-500">
                  Years of Excellence
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 lg:pl-5">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700">
            WHO WE ARE
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Building Strong Foundations for a Brighter Future
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-500">
            EduPro is a learning institution dedicated to academic excellence
            and the overall development of students. We believe that every
            student has unique abilities and deserves the right guidance to
            succeed.
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            Through experienced educators, structured learning programs and a
            supportive environment, we aim to make learning meaningful, engaging
            and effective.
          </p>

          <div className="mt-7 space-y-3">
            {features.slice(0, 4).map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="shrink-0 text-green-600" size={19} />
                <span className="text-sm font-semibold text-slate-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/courses"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Explore Our Courses
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <h3 className="text-3xl font-extrabold text-blue-700 sm:text-4xl">
                {item.number}
              </h3>
              <p className="mt-2 text-xs font-semibold text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700">
            WHAT DRIVES US
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our Purpose and Principles
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
            Everything we do is guided by our commitment to meaningful education
            and student success.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Learning Approach */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700">
              WHY CHOOSE EDUPRO
            </span>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              More Than Just Classroom Learning
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              We focus on creating an environment where students can ask
              questions, explore ideas, learn from mistakes and grow with
              confidence.
            </p>

            <div className="mt-8 space-y-5">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="shrink-0 text-green-600" size={20} />
                  <p className="text-sm font-semibold text-slate-700">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600"
              alt="Classroom learning"
              className="h-64 w-full rounded-2xl object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600"
              alt="Students studying"
              className="mt-10 h-64 w-full rounded-2xl object-cover"
            />
            <div className="col-span-2 rounded-2xl bg-blue-50 p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                  <BookOpen size={28} />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900">
                    Learning With Purpose
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Knowledge, confidence and practical understanding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#0b2d68] p-8 text-white sm:flex-row sm:items-center sm:p-12">
          <div>
            <h2 className="text-2xl font-extrabold">
              Become Part of the EduPro Community
            </h2>
            <p className="mt-3 text-sm text-blue-100">
              Let's work together to make your learning journey successful.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-800 hover:bg-blue-50"
          >
            Get in Touch
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
