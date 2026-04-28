"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function Screenshots() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [10, -10]);

  const screenshots = [
    "/images/ss1.jpeg",
    "/images/ss2.jpeg",
    "/images/ss3.jpeg",
    "/images/ss4.jpeg",
    "/images/ss5.jpeg",
    "/images/ss6.jpeg"
  ];

  return (
    <section ref={containerRef} className="py-40 relative bg-background overflow-hidden border-y-[8px] border-foreground">
      {/* Background massive typography */}
      <div className="absolute top-1/4 left-0 w-full -translate-y-1/2 z-0 pointer-events-none opacity-[0.02]">
        <h2 className="font-headline text-[25vw] font-black uppercase whitespace-nowrap text-center tracking-tighter">
          INTERFACE INTERFACE
        </h2>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 mb-24 relative z-10 text-center flex flex-col items-center">
        <div className="bg-sage text-white shadow-neumorphic rounded-full font-headline text-xl font-black uppercase px-8 py-3 mb-8 transform -rotate-1 border border-sage/20">
          System Interface
        </div>
        <h2 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tight text-foreground leading-[1.1]">
          Inside <span className="italic text-peach">QuickV</span>
        </h2>
      </div>

      <div className="w-full relative z-10 perspective-[2000px]">
        <motion.div 
          style={{ rotateX }}
          className="w-full flex gap-10 px-6 md:px-20 overflow-x-auto pb-16 pt-8 snap-x snap-mandatory hide-scrollbar items-center"
        >
          {screenshots.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, rotateY: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.8, type: "spring", bounce: 0.3 }}
              whileHover={{ scale: 1.05, y: -10, rotateY: -5 }}
              className="snap-center shrink-0 w-[280px] md:w-[320px] aspect-[1/2.16] rounded-[48px] shadow-neumorphic border-[8px] border-background overflow-hidden relative bg-background group cursor-grab active:cursor-grabbing"
            >
              <Image 
                src={src} 
                alt={`QuickV App Screenshot ${idx + 1}`} 
                fill 
                className="object-cover pointer-events-none" 
              />
              
              {/* Highlight Overlay on Hover */}
              <div className="absolute inset-0 bg-peach/0 group-hover:bg-peach/10 transition-colors duration-300 pointer-events-none" />
              
              <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md text-foreground font-headline font-black px-4 py-2 rounded-full text-sm shadow-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                0{idx + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
