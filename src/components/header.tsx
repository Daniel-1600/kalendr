"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className=" fixed w-full border-b bg-background text-foreground">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-indigo-600">Kalendr</h1>

        {/* { Desktop navigation (hidden on mobile)} */}
        <nav className=" hidden md:flex gap-6 text-sm font-medium">
          <a href="#features" className="hover:text-indigo-600 transition">
            Features
          </a>
          <a href="#about" className="hover:text-indigo-600 transition">
            About
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </a>
        </nav>

        {/* {Desktop buttons} */}
        <div className="hidden md:flex space-x-4">
          <Link href={"/register"}>
            <Button> login </Button>
          </Link>

          <Link href="/register">
            <Button> Register </Button>
          </Link>
        </div>

        {/* {mobile menu buttons (visible on only mobiles )} */}
        <button
          className="md:hidden "
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {" "}
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <nav className="flex flex-col gap-4 text-sm font-medium">
              <a
                href="#features"
                className="block py-2 hover:text-indigo-600 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#about"
                className="block py-2 hover:text-indigo-600 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block py-2 hover:text-indigo-600 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>

            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="w-full">
                Login
              </Button>
              <Button className="w-full">Register</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
