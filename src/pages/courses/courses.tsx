import { useState } from "react";
import {
  BookOpen,
  Clock,
  ArrowRight,
  GraduationCap,
  FlaskConical,
  Laptop,
  Calculator,
  Microscope,
} from "lucide-react";

interface Course {
  title: string;
  category: string;
  description: string;
  duration: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: CourseColor;
}
const courses: Course[] = [
  {
    title: "JEE Main & Advanced",
    category: "Engineering",
    description:
      "Complete preparation for engineering entrance examinations with expert guidance.",
    duration: "12–24 Months",
    icon: Calculator,
    color: "blue",
  },
  {
    title: "NEET Preparation",
    category: "Medical",
    description:
      "Focused preparation in Physics, Chemistry and Biology for medical aspirants.",
    duration: "12–24 Months",
    icon: Microscope,
    color: "green",
  },
  {
    title: "Foundation Classes",
    category: "School Education",
    description:
      "Build strong academic fundamentals for students from classes 6 to 10.",
    duration: "Academic Year",
    icon: BookOpen,
    color: "purple",
  },
  {
    title: "Computer Courses",
    category: "Skill Development",
    description:
      "Learn computer fundamentals, programming and practical digital skills.",
    duration: "3–12 Months",
    icon: Laptop,
    color: "orange",
  },
  {
    title: "Science Coaching",
    category: "School Education",
    description:
      "Improve your understanding of Physics, Chemistry and Mathematics.",
    duration: "6–12 Months",
    icon: FlaskConical,
    color: "pink",
  },
  {
    title: "Competitive Exams",
    category: "Government Exams",
    description: "Prepare for SSC, Banking and other competitive examinations.",
    duration: "6–12 Months",
    icon: GraduationCap,
    color: "cyan",
  },
];
type CourseColor = "blue" | "green" | "purple" | "orange" | "pink" | "cyan";
const colors: Record<CourseColor, string> = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-green-50 text-green-600",
  purple: "bg-purple-50 text-purple-600",
  orange: "bg-orange-50 text-orange-600",
  pink: "bg-pink-50 text-pink-600",
  cyan: "bg-cyan-50 text-cyan-600",
};

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");

  // Filter courses based on the selected category
  const filteredCourses =
    selectedCategory === "All Courses"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f7f9fd]">
      {/* Page Banner */}
      <section className="bg-gradient-to-r from-[#09265f] to-[#2469c9] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            Explore Our Programs
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold sm:text-5xl">
            Find the Right Course for Your Future
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-blue-100">
            Discover learning programs designed to help you achieve your
            academic goals and build a successful career.
          </p>
        </div>
      </section>

      {/* Course Introduction */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700">
            OUR COURSES
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Explore Our Learning Programs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
            Choose from a wide range of courses designed around your interests,
            strengths and career ambitions.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            "All Courses",
            "Engineering",
            "Medical",
            "School Education",
            "Government Exams",
            "Skill Development",
          ].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2.5 text-xs font-bold transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-500 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => {
            const Icon = course.icon;
            return (
              <article
                key={course.title}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgba(15,40,90,0.05)] transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className={`rounded-xl p-4 ${colors[course.color]}`}>
                    <Icon size={27} />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-bold text-slate-600">
                    {course.category}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-slate-900">
                  {course.title}
                </h3>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                  {course.description}
                </p>
                <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5 text-xs font-semibold text-slate-500">
                  <Clock size={15} />
                  Duration: {course.duration}
                </div>
                <a
                  href="/contact"
                  className="mt-5 flex items-center justify-between rounded-xl bg-blue-50 px-4 py-3 text-sm font-bold text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white"
                >
                  Enquire Now
                  <ArrowRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
