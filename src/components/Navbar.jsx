import React, { useState, useEffect } from "react";
import Link from "next/link";


// components
import Dropdown from "./Dropdown";
import Container from "./Container";

// asetss
import Logo from "@/assets/Logo";
import Volume from "@/assets/Volume";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop } = document.documentElement || document.body;
      const shouldShowButton = scrollTop > 250;
      setIsVisible(shouldShowButton);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex justify-between items-center sm:px-12 bg-white sticky top-0 z-[9999]">
      <Link
        href="#"
        className={`scroll-button hidden sm:block ${
          isVisible
            ? "invisible sm:visible bg-[#0B59D6] px-4 py-2 text-lg rounded-lg text-white"
            : "block sm:invisible"
        }`}
      >
        Start Practicing
      </Link>
      <div className={`scroll-button ${isVisible ? "visible" : "block"}`}>
        <Logo />
      </div>
      <div className="flex items-center gap-3">
        <Volume />
        <Dropdown />
      </div>
    </nav>
  );
}
