import { useState } from "react";

function Navbar() {
  const [nav,setNav] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass px-10 py-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold gradient-text">
        Velan.dev
      </h1>

      <ul className="hidden md:flex gap-8 text-gray-300">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;