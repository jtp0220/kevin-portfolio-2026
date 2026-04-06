import "../styles/index.css";
import heroImg from "../assets/images/hero.jpg";
import Logo from "../assets/svg/logo.svg?react";

export default function Hero() {
  return (
    <section id="home" style={{ backgroundImage: `url(${heroImg})` }} className={`flex max-h-300 min-h-screen items-center justify-center overflow-hidden bg-cover bg-center`}>
      <Logo className="w-200 p-10 text-white" />
    </section>
  );
}
