import "../styles/index.css";

import { useState } from "react";
import { HeaderData } from "../constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <Sandwich open={open} setOpen={() => setOpen(!open)} />
      <Navbar open={open} setOpen={() => setOpen(false)} />
    </header>
  );
}

interface headerState {
  open: boolean;
  setOpen: () => void;
}

function Name() {
  return (
    <div className="z-10 text-center md:text-left">
      <div className="font-lexend text-lg">KEVIN TRAN × PIANO</div>
      <div className="text-sm">Piano Performance Portfolio</div>
    </div>
  );
}

function Sandwich(params: headerState) {
  return (
    <button className="fixed top-1.5 right-1.5 z-10 m-3 flex h-10 w-10 flex-col items-center justify-center gap-1 p-3 md:hidden" onClick={params.setOpen}>
      <div className={`h-0.5 w-5 rounded bg-black duration-300 ease-in-out ${params.open ? "translate-y-1.5 rotate-45" : ""}`}></div>
      <div className={`h-0.5 w-5 rounded bg-black duration-300 ease-in-out ${params.open ? "scale-0" : ""}`}></div>
      <div className={`h-0.5 w-5 rounded bg-black duration-300 ease-in-out ${params.open ? "-translate-y-1.5 -rotate-45" : ""}`}></div>
    </button>
  );
}

function Navbar(params: headerState) {
  return (
    <nav className="fixed flex h-20 w-full items-center justify-center gap-50 bg-white">
      <Name />
      <div className={`${params.open ? "" : "translate-x-full"} fixed top-0 right-0 flex h-full w-full flex-col items-center space-y-5 bg-white pt-20 transition-transform duration-300 ease-in-out md:static md:top-auto md:right-auto md:flex md:h-15 md:w-auto md:max-w-full md:translate-x-0 md:flex-row md:justify-center md:space-y-0 md:space-x-3 md:pt-0 md:transition-none`}>
        <ul className="flex w-full flex-col items-center justify-center md:w-auto md:flex-row md:space-x-1">
          {HeaderData.navTabs.map((item, index) => (
            <NavTab key={index} {...item} setOpen={params.setOpen} />
          ))}
        </ul>
      </div>
    </nav>
  );
}

function NavTab({ label, href, setOpen }: { label: string; href: string; setOpen: () => void }) {
  return (
    <li className="font-lexend w-full px-3 py-4 text-center transition-colors hover:bg-black hover:text-white md:w-auto md:rounded-lg md:py-1">
      <a href={href} onClick={setOpen}>
        {label}
      </a>
    </li>
  );
}
