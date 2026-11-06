import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  CalendarDays,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Share2,
} from "lucide-react";
import {
  FaFacebook as Facebook,
  FaLinkedin as Linkedin,
  FaTwitter as Twitter,
} from "react-icons/fa"; // Import social media icons

const articles = [
  {
    id: "1",
    title: "10 Effective Study Habits Every Student Should Develop",
    category: "Study Tips",
    date: "October 25, 2026",
    readTime: "5 min read",
    author: "EduPro Academic Team",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200",
    intro:
      "Developing effective study habits is one of the most important steps toward academic success. A consistent approach to learning can improve concentration, confidence and overall performance.",
    sections: [
      {
        heading: "1. Create a Consistent Study Schedule",
        paragraphs: [
          "A regular study schedule helps students build discipline and manage their time effectively. Set aside dedicated hours for each subject and try to follow the same routine every day.",
          "Make sure your schedule includes short breaks to help maintain concentration.",
        ],
      },
      {
        heading: "2. Set Clear and Achievable Goals",
        paragraphs: [
          "Instead of studying without a plan, decide what you want to complete in each session. Small and measurable goals make it easier to track progress.",
          "For example, aim to complete one chapter, solve a set of questions or revise a particular topic.",
        ],
      },
      {
        heading: "3. Practice Active Learning",
        paragraphs: [
          "Reading the same material repeatedly is not always effective. Try explaining concepts in your own words, solving problems and testing yourself regularly.",
          "Active learning helps you identify gaps in your understanding.",
        ],
      },
      {
        heading: "4. Avoid Distractions",
        paragraphs: [
          "Keep your phone away while studying and choose a quiet place where you can focus. Avoid switching between multiple tasks.",
          "A focused study session is often more productive than several hours of distracted studying.",
        ],
      },
      {
        heading: "5. Revise Regularly",
        paragraphs: [
          "Revision helps strengthen memory and improve understanding. Review previously studied topics at regular intervals rather than waiting until the examination.",
          "Practice questions and short revision notes can make this process easier.",
        ],
      },
    ],
    conclusion:
      "Good study habits are developed gradually through consistency and practice. Start with a few simple changes, monitor your progress and improve your routine over time.",
  },
  {
    id: "2",
    title: "How to Prepare for JEE Main: A Complete Guide",
    category: "Exam Preparation",
    date: "October 20, 2026",
    readTime: "7 min read",
    author: "EduPro Academic Team",
    image:
      "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?w=1200",
    intro:
      "Preparing for JEE Main requires a clear strategy, strong fundamentals and consistent practice. A well-planned approach can make the preparation journey more manageable.",
    sections: [
      {
        heading: "1. Understand the Examination Pattern",
        paragraphs: [
          "Begin by understanding the examination structure, subjects and syllabus. Review the latest official examination information before preparing your study plan.",
        ],
      },
      {
        heading: "2. Build Strong Fundamentals",
        paragraphs: [
          "Focus on understanding concepts in Physics, Chemistry and Mathematics. Strong fundamentals make it easier to solve complex problems.",
        ],
      },
      {
        heading: "3. Practice Previous Year Questions",
        paragraphs: [
          "Previous year questions help you understand question patterns and identify topics that need more attention.",
        ],
      },
      {
        heading: "4. Take Regular Mock Tests",
        paragraphs: [
          "Mock tests help improve time management and identify areas for improvement. Analyse your mistakes after every test.",
        ],
      },
    ],
    conclusion:
      "Consistency matters more than last-minute preparation. Follow a realistic schedule and regularly review your progress.",
  },
];

const relatedArticles = [
  {
    title: "NEET Preparation: Tips to Improve Your Biology Score",
    category: "Exam Preparation",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500",
    link: "/blog/3",
  },
  {
    title: "Why Mock Tests Matter in Competitive Examinations",
    category: "Study Tips",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500",
    link: "/blog/5",
  },
];

export default function BlogDetails() {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);

  const article = articles.find((item) => item.id === id);

  const handleShare = async () => {
    const shareData = {
      title: article?.title,
      text: article?.intro,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (error) {
      console.error("Sharing was cancelled or unavailable.", error);
    }
  };

  if (!article) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
        <BookOpen size={48} className="text-blue-500" />
        <h1 className="mt-5 text-2xl font-extrabold text-slate-900">
          Article Not Found
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          The article you are looking for may have been moved or removed.
        </p>
        <Link
          to="/blog"
          className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f9fd]">
      {/* Breadcrumb Hero */}
      <section className="bg-gradient-to-r from-[#09265f] to-[#2469c9] px-5 py-12 text-white">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-blue-100 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <div className="mt-8">
            <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-bold">
              {article.category}
            </span>

            <h1 className="mt-6 max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl">
              {article.title}
            </h1>

            <div className="mt-7 flex flex-wrap gap-5 text-sm text-blue-100">
              <span className="flex items-center gap-2">
                <User size={16} />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <CalendarDays size={16} />
                {article.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid items-start gap-10 lg:grid-cols-3">
          {/* Article */}
          <article className="min-w-0 lg:col-span-2">
            <img
              src={article.image}
              alt={article.title}
              className="h-[280px] w-full rounded-2xl object-cover sm:h-[420px]"
            />

            <div className="mt-8 flex items-center justify-between gap-4 rounded-xl border border-slate-100 bg-white p-4">
              <div>
                <p className="text-xs text-slate-400">Share this article</p>
                <div className="mt-2 flex items-center gap-3 text-slate-500">
                  <Facebook size={18} />
                  <Linkedin size={18} />
                  <Twitter size={18} />
                </div>
              </div>

              <button
                onClick={handleShare}
                className="flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2.5 text-sm font-bold text-blue-700 hover:bg-blue-100"
              >
                <Share2 size={16} />
                {copied ? "Link Copied" : "Share"}
              </button>
            </div>

            <div className="mt-8 rounded-2xl bg-white p-6 sm:p-9">
              <p className="text-base leading-8 text-slate-600">
                {article.intro}
              </p>

              <div className="mt-8 space-y-9">
                {article.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                      {section.heading}
                    </h2>

                    {section.paragraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        className="mt-4 text-sm leading-8 text-slate-600"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </section>
                ))}
              </div>

              <div className="mt-10 rounded-xl border-l-4 border-blue-600 bg-blue-50 p-6">
                <h3 className="font-extrabold text-slate-900">
                  Final Thoughts
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {article.conclusion}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-7">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600"
                >
                  <ArrowLeft size={16} />
                  All Articles
                </Link>

                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600"
                >
                  Explore Courses
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-7">
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-lg font-extrabold text-slate-900">
                About EduPro
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                EduPro is dedicated to helping students learn effectively
                through structured courses, expert guidance and regular
                practice.
              </p>
              <Link
                to="/about"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600"
              >
                Know More
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-lg font-extrabold text-slate-900">
                Related Articles
              </h3>

              <div className="mt-6 space-y-6">
                {relatedArticles.map((item) => (
                  <Link
                    to={item.link}
                    key={item.title}
                    className="group flex gap-4"
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="h-20 w-20 rounded-xl object-cover"
                    />
                    <div>
                      <p className="text-xs font-semibold text-blue-600">
                        {item.category}
                      </p>
                      <h4 className="mt-2 text-sm font-bold leading-5 text-slate-800 group-hover:text-blue-600">
                        {item.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#0b2d68] p-7 text-white">
              <BookOpen size={30} />
              <h3 className="mt-5 text-xl font-extrabold">
                Ready to Start Learning?
              </h3>
              <p className="mt-3 text-sm leading-6 text-blue-100">
                Explore our courses and find the right learning program.
              </p>
              <Link
                to="/courses"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-800"
              >
                Explore Courses
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
