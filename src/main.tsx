import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Admissions from "./pages/admissions/admissions";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import CourseDetails from "./pages/courseDetails/courseDetails";
import FAQ from "./pages/FAQ/FAQ";
import Blog from "./pages/blog/blog";
import BlogDetails from "./pages/blogDetail/blogDetails";
import Courses from "./pages/courses/courses";
import Faculty from "./pages/faculty/faculty";
import Gallery from "./pages/gallery/gallery";
import Results from "./pages/results/results";
import "./index.css";
import Navbar from "./components/header/header";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/admissions"
          element={
            <Layout>
              <Admissions />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/course-details"
          element={
            <Layout>
              <CourseDetails />
            </Layout>
          }
        />
        <Route
          path="/faq"
          element={
            <Layout>
              <FAQ />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/blog-details"
          element={
            <Layout>
              <BlogDetails />
            </Layout>
          }
        />
        <Route
          path="/courses"
          element={
            <Layout>
              <Courses />
            </Layout>
          }
        />
        <Route
          path="/faculty"
          element={
            <Layout>
              <Faculty />
            </Layout>
          }
        />
        <Route
          path="/gallery"
          element={
            <Layout>
              <Gallery />
            </Layout>
          }
        />
        <Route
          path="/results"
          element={
            <Layout>
              <Results />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
