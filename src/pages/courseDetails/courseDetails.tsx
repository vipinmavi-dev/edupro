import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Clock,
  GraduationCap,
  CheckCircle2,
  // CalendarDays,
  Users,
  Award,
  ChevronDown,
} from "lucide-react";

const course = {
  title: "JEE Main & Advanced Preparation",
  subtitle:
    "Build a strong foundation and prepare confidently for engineering entrance examinations.",
  category: "Engineering Entrance",
  duration: "12–24 Months",
  level: "Class 11 & 12",
  mode: "Classroom / Online",
  image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200",
};

const subjects = [
  {
    name: "Physics",
    topics: [
      "Mechanics",
      "Thermodynamics",
      "Electromagnetism",
      "Optics",
      "Modern Physics",
    ],
  },
  {
    name: "Chemistry",
    topics: [
      "Physical Chemistry",
      "Organic Chemistry",
      "Inorganic Chemistry",
      "Chemical Bonding",
    ],
  },
  {
    name: "Mathematics",
    topics: [
      "Algebra",
      "Calculus",
      "Coordinate Geometry",
      "Trigonometry",
      "Vectors",
    ],
  },
];

const benefits = [
  "Experienced subject matter experts",
  "Structured study material",
  "Regular mock tests and assessments",
  "Personal doubt-clearing sessions",
  "Performance tracking and feedback",
  "Exam preparation strategies",
];

const faqs = [
  {
    question: "Who can join this course?",
    answer:
      "Students studying in or preparing to enter Class 11 and Class 12 can enquire about this program. Final eligibility depends on the batch.",
  },
  {
    question: "What is the course duration?",
    answer:
      "The program is available in different durations, typically ranging from 12 to 24 months.",
  },
  {
    question: "Are mock tests included?",
    answer:
      "The demo course structure includes regular practice tests and performance assessments.",
  },
  {
    question: "How can I know the course fees?",
    answer:
      "Contact the admission team for the latest fee structure and available payment options.",
  },
];

export default function CourseDetails() {
  const [openFaq, setOpenFaq] = useState(0);
  const [openSubject, setOpenSubject] = useState(0);

  return (
    <main className="min-h-screen bg-[#f7f9fd]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#09265f] to-[#2469c9] px-5 py-16 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <span className="rounded-full bg-white/15 px-4 py-2">
                {course.category}
              </span>
              <span className="rounded-full bg-white/15 px-4 py-2">
                Popular Course
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
              {course.title}
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-blue-100">
              {course.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-blue-100">
              <span className="flex items-center gap-2">
                <Clock size={17} />
                {course.duration}
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap size={17} />
                {course.level}
              </span>
            </div>

            <a
              href="/admissions"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-800 hover:bg-blue-50"
            >
              Enquire for Admission
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="relative">
            <img
              src={course.image}
              alt="Student preparing for entrance examinations"
              className="h-[340px] w-full rounded-3xl object-cover shadow-2xl"
            />

            <div className="absolute -bottom-5 left-5 rounded-xl bg-white p-5 text-slate-900 shadow-xl">
              <p className="text-xs font-semibold text-slate-500">
                Learning Mode
              </p>
              <p className="mt-1 font-extrabold">{course.mode}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700">
              COURSE OVERVIEW
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-slate-900">
              Prepare for Your Engineering Career
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Our JEE preparation program focuses on conceptual understanding,
              problem-solving skills and examination practice. Students get
              structured guidance across Physics, Chemistry and Mathematics.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              The learning approach combines classroom teaching, practice
              assignments, mock examinations and individual guidance to help
              students prepare systematically.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Clock, label: "Duration", value: course.duration },
                {
                  icon: GraduationCap,
                  label: "Eligibility",
                  value: course.level,
                },
                { icon: BookOpen, label: "Subjects", value: "3 Core Subjects" },
                { icon: Users, label: "Learning Mode", value: course.mode },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-5"
                  >
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{item.label}</p>
                      <p className="mt-1 text-sm font-bold text-slate-900">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enquiry Card */}
          <aside className="h-fit rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <GraduationCap size={25} />
            </div>

            <h3 className="mt-5 text-xl font-extrabold text-slate-900">
              Interested in This Course?
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Speak with our counsellors to understand the batch schedule,
              eligibility and fees.
            </p>

            <a
              href="/admissions"
              className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white hover:bg-blue-700"
            >
              Apply Now
              <ArrowRight size={17} />
            </a>

            <a
              href="/contact"
              className="mt-3 flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-bold text-slate-700 hover:bg-slate-50"
            >
              Contact Us
            </a>
          </aside>
        </div>
      </section>

      {/* Syllabus */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700">
              COURSE CURRICULUM
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-slate-900">
              Subjects & Syllabus
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
              Explore the major subjects and topics covered in this program.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {subjects.map((subject, index) => (
              <div
                key={subject.name}
                className="overflow-hidden rounded-2xl border border-slate-200"
              >
                <button
                  onClick={() =>
                    setOpenSubject(openSubject === index ? -1 : index)
                  }
                  className="flex w-full items-center justify-between bg-white p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                      <BookOpen size={22} />
                    </div>
                    <span className="font-extrabold text-slate-900">
                      {subject.name}
                    </span>
                  </div>

                  <ChevronDown
                    size={20}
                    className={`text-slate-500 transition ${
                      openSubject === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openSubject === index && (
                  <div className="grid gap-3 border-t border-slate-100 bg-[#f7f9fd] p-6 sm:grid-cols-2">
                    {subject.topics.map((topic) => (
                      <div
                        key={topic}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2 size={16} className="text-green-600" />
                        {topic}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700">
              WHY CHOOSE THIS COURSE
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-slate-900">
              Everything You Need to Prepare with Confidence
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              A structured learning experience designed to support students
              throughout their preparation journey.
            </p>

            <div className="mt-8 space-y-5">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="shrink-0 text-green-600" />
                  <p className="text-sm font-semibold text-slate-700">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-blue-50 p-8 sm:p-10">
            <Award size={42} className="text-blue-600" />

            <h3 className="mt-6 text-2xl font-extrabold text-slate-900">
              Learn. Practice. Improve.
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Consistent practice and meaningful feedback help students identify
              their strengths and work on areas that need improvement.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white p-5">
                <h4 className="text-xl font-extrabold text-blue-700">3</h4>
                <p className="mt-1 text-xs text-slate-500">Core Subjects</p>
              </div>
              <div className="rounded-xl bg-white p-5">
                <h4 className="text-xl font-extrabold text-blue-700">12–24</h4>
                <p className="mt-1 text-xs text-slate-500">Months Duration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-5">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-slate-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-sm font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={19}
                    className={`shrink-0 text-slate-500 transition ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <p className="border-t border-slate-100 bg-[#f7f9fd] p-5 text-sm leading-7 text-slate-500">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#0b2d68] p-8 text-white sm:flex-row sm:items-center sm:p-12">
          <div>
            <h2 className="text-2xl font-extrabold">
              Ready to Begin Your Preparation?
            </h2>
            <p className="mt-3 text-sm text-blue-100">
              Contact our admission team and take the next step.
            </p>
          </div>

          <a
            href="/admissions"
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
