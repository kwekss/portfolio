import Navbar from "../components/Navbar";
import Homepage from "../components/Homepage";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
      <section className=" min-h-screen">
        <Navbar />
        <Homepage />
      </section>
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
};

export default HomePage;
