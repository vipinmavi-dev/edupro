import { useState } from "react";
import {
  ArrowRight,
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const galleryImages = [
  {
    title: "Modern Classroom",
    category: "Campus",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000",
  },
  {
    title: "Group Learning",
    category: "Activities",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1000",
  },
  {
    title: "Science Laboratory",
    category: "Facilities",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1000",
  },
  {
    title: "Student Discussion",
    category: "Activities",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000",
  },
  {
    title: "Library",
    category: "Facilities",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1000",
  },
  {
    title: "Graduation Celebration",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1000",
  },
  {
    title: "Computer Lab",
    category: "Facilities",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000",
  },
  {
    title: "Learning Together",
    category: "Activities",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000",
  },
  {
    title: "Campus Activities",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1000",
  },
];

const categories = ["All", "Campus", "Facilities", "Activities", "Events"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState({
    title: "",
    category: "",
    image: "",
  });

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((item) => item.category === activeCategory);

  const currentIndex = filteredImages.findIndex(
    (item) => item.title === selectedImage?.title
  );

  const showPrevious = () => {
    const index =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;

    setSelectedImage(filteredImages[index]);
  };

  const showNext = () => {
    const index = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[index]);
  };

  return (
    <main className="min-h-screen bg-[#f7f9fd]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#09265f] to-[#2469c9] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            Moments at EduPro
          </p>

          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold sm:text-5xl">
            A Glimpse Into Our Learning Community
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-blue-100">
            Explore the classrooms, facilities, events and everyday moments that
            make learning at EduPro special.
          </p>

          <div className="mt-7 flex gap-3 text-sm text-blue-100">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span>/</span>
            <span className="font-semibold text-white">Gallery</span>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700">
            OUR GALLERY
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Life at EduPro
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
            Every photograph tells a story of learning, collaboration, discovery
            and achievement.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-xs font-bold transition ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-500 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((item, index) => (
            <button
              key={item.title}
              onClick={() => setSelectedImage(item)}
              className={`group relative overflow-hidden rounded-2xl bg-slate-200 text-left ${
                index % 5 === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                  index % 5 === 0 ? "h-80" : "h-80"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-90" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur">
                  {item.category}
                </span>

                <div className="mt-3 flex items-center justify-between">
                  <h3 className="text-lg font-extrabold">{item.title}</h3>

                  <span className="rounded-full bg-white/20 p-2 backdrop-blur transition group-hover:bg-white group-hover:text-blue-700">
                    <ImageIcon size={18} />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <p className="py-16 text-center text-slate-500">
            No images found in this category.
          </p>
        )}
      </section>

      {/* Lightbox */}
      {selectedImage.title !== "" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() =>
            setSelectedImage({
              title: "",
              category: "",
              image: "",
            })
          }
        >
          <button
            onClick={() =>
              setSelectedImage({
                title: "",
                category: "",
                image: "",
              })
            }
            className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            aria-label="Close image"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrevious();
            }}
            className="absolute left-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft size={26} />
          </button>

          <div
            className="w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage?.image}
              alt={selectedImage?.title}
              className="mx-auto max-h-[75vh] w-full rounded-xl object-contain"
            />

            <div className="mt-5 text-center text-white">
              <h3 className="text-xl font-bold">{selectedImage?.title}</h3>
              <p className="mt-1 text-sm text-slate-300">
                {selectedImage?.category}
              </p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-8"
            aria-label="Next image"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#0b2d68] p-8 text-white sm:flex-row sm:items-center sm:p-12">
          <div>
            <h2 className="text-2xl font-extrabold">
              Be a Part of Our Learning Journey
            </h2>
            <p className="mt-3 text-sm text-blue-100">
              Visit our institute and experience the EduPro environment.
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
