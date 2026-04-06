import "../styles/index.css";
import heroImg from "../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section id="home" className="max-h-screen overflow-hidden">
      <img src={heroImg} alt="" className="h-full w-full object-cover" />
    </section>
  );
}
