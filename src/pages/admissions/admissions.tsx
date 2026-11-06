import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ClipboardList,
  FileText,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  CalendarDays,
  IndianRupee,
  HelpCircle,
  Phone,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose Your Course",
    description:
      "Explore our programs and select the course that matches your academic goals.",
  },
  {
    number: "02",
    title: "Submit Application",
    description:
      "Complete the admission enquiry form with your personal and academic details.",
  },
  {
    number: "03",
    title: "Counselling Session",
    description:
      "Connect with our counsellors to understand the course, batches and eligibility.",
  },
  {
    number: "04",
    title: "Confirm Admission",
    description:
      "Complete the required formalities and receive your admission confirmation.",
  },
];

const documents = [
  "Recent passport-size photographs",
  "Previous class mark sheet",
  "School or college identity card",
  "Valid student identity proof",
  "Parent or guardian contact details",
];

const courses = [
  "JEE Main & Advanced",
  "NEET Preparation",
  "Foundation Classes",
  "Computer Courses",
  "Competitive Exams",
  "Other",
];

export default function Admissions() {
  const [form, setForm] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    course: "",
    qualification: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Demo only: connect an API to receive real applications.
    setSubmitted(true);

    setForm({
      studentName: "",
      parentName: "",
      phone: "",
      email: "",
      course: "",
      qualification: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-[#f7f9fd]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#09265f] to-[#2469c9] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            Join EduPro
          </p>

          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold sm:text-5xl">
            Take the First Step Towards Your Future
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-blue-100">
            Start your learning journey with expert guidance, structured
            programs and a supportive academic environment.
          </p>

          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <a href="/" className="hover:text-white">
            Home
          </a>
          <span>/</span>
          <span className="font-semibold text-white">Admissions</span>
        </div>
        <Link
          to="#application"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-800 hover:bg-blue-50"
        >
          Apply for Admission
          <ArrowRight size={17} />
        </Link>
      </section>

      {/* Quick Highlights */}
      <section className="mx-auto max-w-7xl px-5 pt-14">
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            {
              icon: GraduationCap,
              title: "Multiple Programs",
              text: "Choose from academic and competitive courses.",
            },
            {
              icon: UsersIcon,
              title: "Personal Guidance",
              text: "Get help from our admission counsellors.",
            },
            {
              icon: ClipboardList,
              title: "Simple Process",
              text: "A clear and guided admission journey.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Icon size={24} />
                </div>

                <div>
                  <h3 className="font-extrabold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Admission Process */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700">
            HOW TO JOIN
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Admission Process
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
            Follow these simple steps to begin your journey with EduPro.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
            >
              <span className="text-4xl font-extrabold text-blue-100">
                {step.number}
              </span>

              <h3 className="mt-5 text-lg font-extrabold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility and Documents */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700">
              ELIGIBILITY
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-slate-900">
              Who Can Apply?
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Students interested in academic improvement, entrance examinations
              and skill development can explore our programs. Eligibility
              depends on the selected course.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Students seeking school-level academic support",
                "Students preparing for JEE and NEET",
                "Students interested in competitive examinations",
                "Learners looking to develop computer skills",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-green-600"
                    size={19}
                  />
                  <p className="text-sm font-semibold text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#f7f9fd] p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                <FileText size={25} />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Required Documents
              </h2>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Keep these documents ready during the admission process.
              Requirements may vary by course.
            </p>

            <div className="mt-7 space-y-4">
              {documents.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-700">
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Information */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="rounded-3xl bg-gradient-to-r from-[#0b2d68] to-[#2469c9] p-8 text-white sm:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <IndianRupee size={26} />
              </div>

              <h2 className="mt-6 text-3xl font-extrabold">
                Course Fees & Payment Information
              </h2>

              <p className="mt-4 text-sm leading-7 text-blue-100">
                Course fees vary depending on the program, duration and batch.
                Contact our admission team for the latest fee structure and
                available payment options.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-800 hover:bg-blue-50"
              >
                Enquire About Fees
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="rounded-2xl bg-white/10 p-7">
              <h3 className="text-xl font-extrabold">Admission Enquiries</h3>

              <div className="mt-6 space-y-5">
                <div className="flex items-center gap-3">
                  <CalendarDays size={21} className="text-blue-200" />
                  <span className="text-sm text-blue-50">
                    Contact us for current batch schedules
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <PhoneIcon />
                  <span className="text-sm text-blue-50">+91 98765 43210</span>
                </div>

                <div className="flex items-center gap-3">
                  <MailIcon />
                  <span className="text-sm text-blue-50">info@edupro.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section
        id="application"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-20"
      >
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-100 bg-white p-7 shadow-sm sm:p-10">
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700">
              APPLY NOW
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-slate-900">
              Admission Enquiry Form
            </h2>

            <p className="mt-3 text-sm text-slate-500">
              Share your details and our team will help you with the next steps.
            </p>
          </div>

          {submitted && (
            <div className="mt-7 flex gap-3 rounded-xl bg-green-50 p-4 text-green-700">
              <CheckCircle2 size={21} className="shrink-0" />
              <div>
                <p className="text-sm font-bold">Demo application submitted!</p>
                <p className="mt-1 text-xs">
                  This is a frontend-only demonstration. No application has been
                  sent to EduPro.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-bold text-slate-700">
                  Student Name *
                </label>
                <input
                  name="studentName"
                  value={form.studentName}
                  onChange={handleChange}
                  placeholder="Enter student name"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold text-slate-700">
                  Parent / Guardian Name
                </label>
                <input
                  name="parentName"
                  value={form.parentName}
                  onChange={handleChange}
                  placeholder="Enter parent name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-bold text-slate-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  pattern="[0-9+\-\s]{10,15}"
                  placeholder="Enter phone number"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold text-slate-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-bold text-slate-700">
                  Select Course *
                </label>
                <select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                >
                  <option value="">Choose a course</option>
                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold text-slate-700">
                  Last Qualification
                </label>
                <input
                  name="qualification"
                  value={form.qualification}
                  onChange={handleChange}
                  placeholder="e.g. Class 10 / Class 12"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold text-slate-700">
                Additional Information
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your learning goals..."
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Submit Application
              <ArrowRight size={17} />
            </button>

            <p className="text-center text-xs text-slate-400">
              By submitting, you agree to be contacted regarding your enquiry.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-5">
          <div className="text-center">
            <HelpCircle className="mx-auto text-blue-600" size={35} />
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900">
              Admission Questions?
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {[
              {
                q: "How can I apply for admission?",
                a: "Submit the enquiry form above or contact our admission team directly.",
              },
              {
                q: "Can I get details about course fees?",
                a: "Yes. Contact our team for the current fee structure and payment details.",
              },
              {
                q: "Are counselling sessions available?",
                a: "You can contact our team to arrange a counselling session.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-slate-100 bg-[#f7f9fd] p-6"
              >
                <h3 className="font-bold text-slate-900">{item.q}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Small reusable icons for the contact details.
function UsersIcon() {
  return <GraduationCap size={24} />;
}

function PhoneIcon() {
  return <Phone size={21} className="text-blue-200" />;
}

function MailIcon() {
  return <FileText size={21} className="text-blue-200" />;
}
