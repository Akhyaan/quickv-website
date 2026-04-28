"use client";

import React from "react";
import { motion } from "framer-motion";

export function Providers() {
  const providers = [
    "Blinkit", "Zepto", "Swiggy Instamart", "BigBasket", 
    "JioMart", "Flipkart Minutes", "Amazon Now", "BigBasket"
  ];

  const repeatedProviders = [...providers, ...providers, ...providers];

  return (
    <section id="providers" className="py-20 bg-background text-foreground overflow-hidden relative border-y-[8px] border-foreground snap-start min-h-screen flex flex-col justify-center scroll-mt-24">
      {/* Soft neumorphic background accents combined with brutalist noise */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0icmdiYSgwLDAsMCwwLjAzKSIvPjwvc3ZnPg==')] z-0" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-sage/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-plum/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-6 mb-16 relative z-10 text-center">
        <h2 className="font-headline text-5xl md:text-7xl font-black uppercase leading-[1.1] tracking-tighter">
          Providers <br className="md:hidden" />
          <span className="text-peach italic">We Cover</span>
        </h2>
        <p className="font-body text-xl font-medium mt-4 text-foreground/70 max-w-2xl mx-auto">
          We aggregate prices from all major quick commerce providers so you always get the best deal.
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-10 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        {/* Marquee Row 1 */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            className="flex items-center gap-8 whitespace-nowrap"
          >
            {repeatedProviders.map((provider, idx) => (
              <div key={`r1-${idx}`} className="px-10 py-5 bg-background rounded-full border-4 border-foreground shadow-neumorphic flex items-center justify-center">
                <span className="font-headline text-3xl font-black uppercase tracking-wide text-foreground">
                  {provider}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Marquee Row 2 (Reverse) */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
            className="flex items-center gap-8 whitespace-nowrap"
          >
            {repeatedProviders.map((provider, idx) => (
              <div key={`r2-${idx}`} className="px-10 py-5 bg-foreground rounded-full border-4 border-foreground shadow-soft flex items-center justify-center">
                <span className="font-headline text-3xl font-black uppercase tracking-wide text-background">
                  {provider}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
