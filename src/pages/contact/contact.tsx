import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    description: "Monday to Saturday",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@edupro.in",
    description: "We usually respond within 24 hours",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "123 Education Park, New Delhi",
    description: "India - 110001",
    color: "bg-green-100 text-green-600",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Demo only: no enquiry is sent to a server.
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-[#f7f9fd]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#09265f] to-[#2469c9] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            We're Here to Help
          </p>

          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold sm:text-5xl">
            Let's Talk About Your Learning Goals
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-blue-100">
            Have questions about our courses or admissions? Get in touch with
            our team. We're happy to guide you.
          </p>

          <div className="mt-7 flex gap-3 text-sm text-blue-100">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span>/</span>
            <span className="font-semibold text-white">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="mx-auto max-w-7xl px-5 pt-16">
        <div className="grid gap-5 md:grid-cols-3">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                >
                  <Icon size={23} />
                </div>

                <h3 className="mt-5 font-extrabold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-bold text-blue-700">
                  {item.value}
                </p>

                <p className="mt-2 text-xs text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form and Information */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-5">
        {/* Enquiry Form */}
        <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm sm:p-10 lg:col-span-3">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700">
            SEND AN ENQUIRY
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-slate-900">
            We'd Love to Hear From You
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Fill out the form below and our admissions team will help you find
            the right course.
          </p>

          {submitted && (
            <div className="mt-6 flex items-start gap-3 rounded-xl bg-green-50 p-4 text-green-700">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-bold">Demo submission successful!</p>
                <p className="mt-1 text-xs">
                  This is a frontend demonstration. No enquiry has been sent.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-bold text-slate-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold text-slate-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
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
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  pattern="[0-9+\-\s]{10,15}"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold text-slate-700">
                  Interested Course *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                >
                  <option value="">Select a course</option>
                  <option value="JEE Preparation">JEE Preparation</option>
                  <option value="NEET Preparation">NEET Preparation</option>
                  <option value="Foundation Classes">Foundation Classes</option>
                  <option value="Computer Courses">Computer Courses</option>
                  <option value="Competitive Exams">Competitive Exams</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold text-slate-700">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us how we can help..."
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-700 sm:w-auto"
            >
              Submit Enquiry
              <Send size={17} />
            </button>
          </form>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl bg-[#0b2d68] p-8 text-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <MessageCircle size={25} />
            </div>

            <h3 className="mt-6 text-2xl font-extrabold">
              Need Quick Assistance?
            </h3>

            <p className="mt-3 text-sm leading-7 text-blue-100">
              Our admissions team can help you with course details, fee
              information, batches and admission procedures.
            </p>

            <a
              href="tel:+919876543210"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-800 hover:bg-blue-50"
            >
              Call Our Team
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-extrabold text-slate-900">
              Opening Hours
            </h3>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="text-sm text-slate-600">
                  Monday - Saturday
                </span>
                <span className="text-sm font-bold text-slate-900">
                  08:00 AM - 08:00 PM
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Sunday</span>
                <span className="text-sm font-bold text-slate-900">
                  09:00 AM - 02:00 PM
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-xl bg-blue-50 p-4">
              <Clock className="shrink-0 text-blue-600" size={20} />
              <p className="text-xs leading-5 text-slate-600">
                Timings may vary during holidays and examination periods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="mb-7">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Find Our Institute
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Visit us at our campus. We'd be happy to welcome you.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <iframe
            title="EduPro Institute Location"
            src="https://www.google.com/maps?q=New+Delhi+India&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-2xl bg-blue-50 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Still Have Questions?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
            Get in touch with our team and take the first step towards achieving
            your academic goals.
          </p>

          <a
            href="mailto:info@edupro.in"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-blue-700"
          >
            Email Us
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
