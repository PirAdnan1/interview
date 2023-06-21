import React from "react"
import Link from "next/link"

// components
import Dropdown from "./Dropdown"


// asetss
import Logo from "@/assets/Logo"
import Volume from "@/assets/Volume"


export default function Navbar() {
  return (
    <nav className="flex justify-between items-center sm:px-12 bg-white sticky top-0 z-[9999]">
        <Link href="#" className="bg-[#0B59D6] sm:px-5 py-2 rounded-md text-white">Start Practicing</Link>
        <Logo />
        <div className="flex items-center gap-3">
        <Volume />
        <Dropdown />
        </div>
    </nav>
  )
}
