import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Performances from "./components/Performances";
import Footer from "./components/Footer";
import Lessons from "./components/Lessons";
import Compositions from "./components/Compositions";
export default function App() {
  return (
    <main className="">
      <Header />
      <div className="flex flex-col">
        <Hero />
        <About />
        <Performances />
        <Compositions />
        <Lessons />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
