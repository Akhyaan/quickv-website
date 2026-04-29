"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Providers", href: "#providers" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Team", href: "#team" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-7xl rounded-[40px] px-8 py-6 flex items-center justify-between ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 overflow-hidden rounded-xl">
          <Image 
            src="/images/favicon.ico" 
            alt="QuickV Logo" 
            fill 
            className="object-contain"
          />
        </div>
        <span className="font-headline font-bold text-4xl tracking-tight">QuickV</span>
      </div>

      <div className="hidden lg:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="font-subheading text-lg font-bold hover:text-peach transition-colors relative group uppercase tracking-wide"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-peach transition-all group-hover:w-full rounded-full"></span>
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Button 
          href="#contact" 
          variant="outline" 
          size="md" 
          className="hidden md:inline-flex border-2 rounded-full px-10 h-14 hover:bg-foreground hover:text-background transition-all shadow-none font-black text-lg uppercase tracking-tight"
        >
          Contact Us
        </Button>
      </div>
    </motion.nav>
  );
}
