import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Search,
  BookOpen,
  // Tag,
  ChevronRight,
} from "lucide-react";

const categories = [
  "All",
  "Exam Preparation",
  "Study Tips",
  "Admissions",
  "News & Updates",
];

const articles = [
  {
    id: 1,
    title: "10 Effective Study Habits Every Student Should Develop",
    excerpt:
      "Discover practical study techniques that can help students improve concentration, manage time and achieve better academic results.",
    category: "Study Tips",
    date: "October 25, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900",
    featured: true,
  },
  {
    id: 2,
    title: "How to Prepare for JEE Main: A Complete Guide",
    excerpt:
      "A structured preparation strategy covering Physics, Chemistry, Mathematics and mock tests.",
    category: "Exam Preparation",
    date: "October 20, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?w=900",
  },
  {
    id: 3,
    title: "NEET Preparation: Tips to Improve Your Biology Score",
    excerpt:
      "Learn how to approach Biology effectively with revision strategies and regular practice.",
    category: "Exam Preparation",
    date: "October 16, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=900",
  },
  {
    id: 4,
    title: "Admissions Open for the New Academic Session",
    excerpt:
      "Explore available courses, admission requirements and how to apply for the upcoming session.",
    category: "Admissions",
    date: "October 12, 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900",
  },
  {
    id: 5,
    title: "Why Mock Tests Matter in Competitive Examinations",
    excerpt:
      "Understand how mock tests help students build confidence, improve accuracy and manage exam time.",
    category: "Study Tips",
    date: "October 08, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=900",
  },
  {
    id: 6,
    title: "New Learning Programs and Student Activities at EduPro",
    excerpt:
      "Take a look at upcoming learning activities and academic initiatives at our institute.",
    category: "News & Updates",
    date: "October 02, 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;

    const matchesSearch =
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles.find((article) => article.featured);

  return (
    <main className="min-h-screen bg-[#f7f9fd]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#09265f] to-[#2469c9] px-5 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold text-blue-200">Home / Blog</p>

          <div className="mt-8 max-w-2xl">
            <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-bold">
              EDU PRO KNOWLEDGE HUB
            </span>

            <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">
              Ideas, Insights & Learning Resources
            </h1>

            <p className="mt-5 text-sm leading-7 text-blue-100">
              Explore study tips, exam preparation strategies, educational news
              and useful resources to support your learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="mx-auto max-w-7xl px-5 pt-14">
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-sm lg:grid-cols-2">
          <div className="min-h-[280px]">
            <img
              src={featuredArticle?.image}
              alt={featuredArticle?.title}
              className="h-full min-h-[280px] w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10">
            <span className="w-fit rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700">
              FEATURED ARTICLE
            </span>

            <h2 className="mt-5 text-2xl font-extrabold leading-snug text-slate-900 sm:text-3xl">
              {featuredArticle?.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              {featuredArticle?.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-2">
                <CalendarDays size={15} />
                {featuredArticle?.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={15} />
                {featuredArticle?.readTime}
              </span>
            </div>

            <a
              href={`/blog/${featuredArticle?.id}`}
              className="mt-7 inline-flex w-fit items-center gap-2 font-bold text-blue-600 hover:text-blue-800"
            >
              Read Article
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Latest Articles
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
              Explore Our Blog
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Useful knowledge and updates for students and parents.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full lg:max-w-sm">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles
            .filter((article) => !article.featured)
            .map((article) => (
              <article
                key={article.id}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-blue-700">
                    {article.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={14} />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold leading-snug text-slate-900 transition group-hover:text-blue-600">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {article.excerpt}
                  </p>

                  <a
                    href={`/blog/${article.id}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600"
                  >
                    Read More
                    <ChevronRight size={17} />
                  </a>
                </div>
              </article>
            ))}
        </div>

        {filteredArticles.filter((article) => !article.featured).length ===
          0 && (
          <div className="mt-10 rounded-2xl bg-white p-12 text-center">
            <BookOpen size={35} className="mx-auto text-slate-300" />
            <h3 className="mt-4 font-bold text-slate-800">No articles found</h3>
            <p className="mt-2 text-sm text-slate-500">
              Try another search term or category.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-5 font-bold text-blue-600"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-3xl bg-blue-50 px-6 py-12 text-center sm:px-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600">
            <BookOpen size={27} />
          </div>

          <h2 className="mt-5 text-2xl font-extrabold text-slate-900">
            Stay Updated with EduPro
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
            Get educational updates, preparation tips and important
            announcements.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing! (Demo only)");
            }}
            className="mx-auto mt-7 flex max-w-lg flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
