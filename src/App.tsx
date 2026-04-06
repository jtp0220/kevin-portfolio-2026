import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Lessons from "./components/Lessons";
export default function App() {
  return (
    <main className="">
      <Header />
      <div className="flex flex-col">
        <Hero />
        <About />
        <Work />
        <Lessons />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
