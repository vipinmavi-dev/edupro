import { useMemo, useState } from "react";
import {
  Search,
  ChevronDown,
  HelpCircle,
  BookOpen,
  GraduationCap,
  IndianRupee,
  ClipboardList,
  MessageCircle,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { name: "All Questions", icon: HelpCircle },
  { name: "Courses", icon: BookOpen },
  { name: "Admissions", icon: ClipboardList },
  { name: "Fees & Payments", icon: IndianRupee },
  { name: "Classes & Exams", icon: GraduationCap },
];

const faqs = [
  {
    category: "Courses",
    question: "What courses are offered by EduPro?",
    answer:
      "EduPro offers coaching programs for JEE, NEET, foundation classes and other competitive examinations. Please visit our Courses page for program details.",
  },
  {
    category: "Courses",
    question: "Can I attend a demo class before enrolling?",
    answer:
      "Students can contact our admission team to enquire about demo classes and available trial sessions.",
  },
  {
    category: "Courses",
    question: "Are online classes available?",
    answer:
      "Depending on the program, online and classroom learning options may be available. Contact our team to confirm the current batch options.",
  },
  {
    category: "Courses",
    question: "Do you provide study materials?",
    answer:
      "Study materials and practice resources are included in selected programs. Details can be confirmed with the course counsellor.",
  },
  {
    category: "Admissions",
    question: "How can I apply for admission?",
    answer:
      "Visit the Admissions page, complete the enquiry form and our admission team will guide you through the next steps.",
  },
  {
    category: "Admissions",
    question: "What documents are required for admission?",
    answer:
      "Commonly requested documents include recent photographs, previous academic records and identity proof. Requirements may vary by program.",
  },
  {
    category: "Admissions",
    question: "Can I change my selected course after admission?",
    answer:
      "Course changes may be possible depending on availability and institute policies. Please contact the admission team for assistance.",
  },
  {
    category: "Fees & Payments",
    question: "How can I know the course fees?",
    answer:
      "Course fees depend on the selected program and duration. Contact our admission team for the latest fee structure.",
  },
  {
    category: "Fees & Payments",
    question: "Are installment payment options available?",
    answer:
      "Installment options may be available for selected programs. Please confirm the payment schedule with the institute.",
  },
  {
    category: "Fees & Payments",
    question: "Is the admission fee refundable?",
    answer:
      "Refund policies depend on the institute's terms and conditions. Please review the applicable policy before making a payment.",
  },
  {
    category: "Classes & Exams",
    question: "What are the class timings?",
    answer:
      "Class timings depend on the selected course and batch. Contact the institute for the latest timetable.",
  },
  {
    category: "Classes & Exams",
    question: "Are regular tests conducted?",
    answer:
      "The academic program may include periodic tests, practice assignments and mock examinations to help students evaluate their progress.",
  },
  {
    category: "Classes & Exams",
    question: "What happens if I miss a class?",
    answer:
      "Please contact your academic coordinator to understand the available options for missed classes or revision support.",
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "All Questions" || faq.category === activeCategory;

      const query = search.toLowerCase();

      const matchesSearch =
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setOpenFaq(0);
  };

  return (
    <main className="min-h-screen bg-[#f7f9fd]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#09265f] to-[#2469c9] px-5 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold text-blue-200">Home / FAQ</p>

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-bold">
              HELP & SUPPORT
            </span>

            <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">
              Frequently Asked Questions
            </h1>

            <p className="mt-5 text-sm leading-7 text-blue-100">
              Find answers to common questions about our courses, admissions,
              fees and academic programs.
            </p>

            <div className="relative mx-auto mt-9 max-w-xl">
              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setOpenFaq(0);
                }}
                placeholder="Search your question..."
                className="w-full rounded-xl border border-white/20 bg-white py-4 pl-14 pr-5 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:ring-4 focus:ring-blue-300/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid items-start gap-10 lg:grid-cols-4">
          {/* Categories */}
          <aside className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <h3 className="mb-5 text-lg font-extrabold text-slate-900">
              Categories
            </h3>

            <div className="space-y-2">
              {categories.map((category) => {
                const Icon = category.icon;
                const active = activeCategory === category.name;

                return (
                  <button
                    key={category.name}
                    onClick={() => handleCategoryChange(category.name)}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                      active
                        ? "bg-blue-600 text-white"
                        : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    <Icon size={18} />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Questions */}
          <div className="lg:col-span-3">
            <div className="mb-7 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  {activeCategory}
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Browse our most frequently asked questions.
                </p>
              </div>

              <span className="shrink-0 rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700">
                {filteredFaqs.length} Questions
              </span>
            </div>

            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                      className="flex w-full items-center justify-between gap-5 p-5 text-left sm:p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-0.5 rounded-lg bg-blue-50 p-2 text-blue-600">
                          <HelpCircle size={19} />
                        </div>

                        <span className="text-sm font-bold leading-6 text-slate-800 sm:text-base">
                          {faq.question}
                        </span>
                      </div>

                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-slate-400 transition ${
                          openFaq === index ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>

                    {openFaq === index && (
                      <div className="border-t border-slate-100 bg-[#f7f9fd] px-6 py-5 sm:pl-20">
                        <p className="text-sm leading-7 text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="rounded-2xl bg-white p-12 text-center">
                  <Search size={36} className="mx-auto text-slate-300" />

                  <h3 className="mt-4 font-extrabold text-slate-800">
                    No questions found
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Try a different search term or select another category.
                  </p>

                  <button
                    onClick={() => {
                      setSearch("");
                      setActiveCategory("All Questions");
                      setOpenFaq(0);
                    }}
                    className="mt-5 text-sm font-bold text-blue-600"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="grid gap-8 rounded-3xl bg-[#0b2d68] p-8 text-white sm:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <MessageCircle size={35} className="text-blue-200" />

            <h2 className="mt-5 text-2xl font-extrabold sm:text-3xl">
              Still Have Questions?
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-blue-100">
              Our team is here to help you. Contact us and get guidance
              regarding courses, admissions and learning programs.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-800 hover:bg-blue-50"
            >
              Contact Us
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10"
            >
              Admission Enquiry
              <Phone size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
