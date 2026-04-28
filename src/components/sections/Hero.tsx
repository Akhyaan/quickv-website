"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yPhone = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const rotateShapes = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen pt-16 pb-12 px-4 md:px-8 lg:px-12 flex items-center justify-center overflow-hidden bg-background snap-start scroll-mt-24">
      
      {/* Background Text - Toned down opacity and size for readability */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.02]">
        <h1 className="font-headline text-[25vw] font-black tracking-tighter leading-none whitespace-nowrap">
          QUICKV
        </h1>
      </motion.div>

      {/* Soft Neumorphic Background Shapes */}
      <motion.div style={{ rotate: rotateShapes }} className="absolute top-1/4 -right-20 w-[40vw] h-[40vw] bg-peach/20 rounded-full blur-[100px] pointer-events-none" />
      <motion.div style={{ rotate: rotateShapes }} className="absolute bottom-1/4 -left-20 w-[30vw] h-[30vw] bg-sage/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          style={{ y: yText }}
          className="lg:col-span-7 space-y-8 md:space-y-10 relative"
        >
          {/* Faux structural lines - Adjusted to be more subtle and less prone to edge-hitting */}
          <div className="absolute -left-6 md:-left-10 top-0 w-px h-full bg-foreground/5" />
          <div className="absolute left-0 -top-10 w-full h-px bg-foreground/5" />

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-6 py-2 bg-background text-peach shadow-inner-soft-sm font-subheading text-xs md:text-sm font-bold uppercase tracking-widest border border-peach/20 rounded-full">
              India's Only Aggregator
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="font-headline text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] text-foreground uppercase tracking-tight"
          >
            Every Store.<br />
            <span className="italic font-light text-peach lowercase pr-4">one app.</span><br />
            <span className="relative inline-block text-foreground">
              Real Savings.
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-sage/50 -z-10 rounded-full" />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-body text-base md:text-lg lg:text-xl font-medium text-foreground/80 max-w-2xl leading-relaxed border-l-4 border-peach pl-6"
          >
            QuickV brings Blinkit, Zepto, Swiggy Instamart, BigBasket and more under one roof. Compare prices, add to cart, and save.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-8 pt-4"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                href="https://apps.apple.com/in/app/quickv/id6743402423" 
                target="_blank" 
                rel="noreferrer" 
                variant="primary" 
                size="xl" 
                className="w-full sm:w-auto shadow-none rounded-[20px] bg-[#000000] text-white hover:bg-[#1a1a1a] hover:shadow-none !shadow-none"
              >
                <svg className="w-8 h-8 mr-3 fill-current" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-82.3-20.8-40.8 0-78.2 23.3-99.3 59.9-42.3 73.3-11 181.1 29.8 240 20 28.9 43.9 61.3 75.3 61.3 30.2 0 41.7-18.4 78.1-18.4 36.3 0 46.9 18.4 78.1 18.4 31.8 0 52.4-29.2 72.3-58.2 23-33.6 32.4-66.2 32.7-67.8-.8-.4-63.5-24.4-63.5-96.6zM233.5 125.1c16.3-19.6 27.2-46.9 24.2-74.1-23.3 1-51.5 15.5-68.2 34.9-15 17.4-28.1 45.4-24.6 71.9 25.8 2 52.3-13.1 68.6-32.7z"/></svg>
                Download iOS
              </Button>
              
              <Button 
                href="https://play.google.com/store/apps/details?id=com.quickV.app&pcampaignid=web_share" 
                target="_blank" 
                rel="noreferrer" 
                variant="outline" 
                size="xl" 
                className="w-full sm:w-auto shadow-none border-4 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-[20px]"
              >
                <svg className="w-8 h-8 mr-3 fill-current" viewBox="0 0 512 512"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.3 18-28.5-1.2-40.8zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z"/></svg>
                Get Android
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Phone Mockup */}
        <motion.div
          style={{ y: yPhone }}
          className="lg:col-span-5 relative h-[50vh] lg:h-[70vh] flex justify-center lg:justify-end items-center pointer-events-none mt-12 lg:mt-24"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-[200px] md:w-[260px] lg:w-[300px] aspect-[1/2.1] shadow-neumorphic rounded-[48px] border-[8px] border-background overflow-hidden bg-background"
          >
            <Image
              src="/images/home.jpeg"
              alt="QuickV App Screenshot"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          
          {/* Neumorphic Floating Badges - Adjusted positions for better visibility */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-1/4 -left-4 md:-left-8 lg:-left-12 bg-sage text-white font-headline font-black text-xl md:text-2xl px-6 py-3 shadow-soft rounded-[20px] pointer-events-auto border-2 border-white/20 whitespace-nowrap"
          >
            CHEAPEST CART!
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/3 -right-4 md:-right-6 lg:-right-8 bg-plum text-white font-headline font-black text-2xl md:text-3xl px-6 py-3 shadow-soft rounded-[20px] pointer-events-auto border-2 border-white/20 whitespace-nowrap"
          >
            SAVE 20%
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
