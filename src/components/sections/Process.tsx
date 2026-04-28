"use client";

import React from "react";
import { motion } from "framer-motion";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Download",
      desc: "Get QuickV free on iOS or Android. Sign up in 30 seconds."
    },
    {
      num: "02",
      title: "Search or List",
      desc: "Search any product or create a shopping list with what you need."
    },
    {
      num: "03",
      title: "Compare and Pick",
      desc: "See all platform prices side by side. Best deal highlighted automatically."
    },
    {
      num: "04",
      title: "Order and Track",
      desc: "One tap to order. Track your delivery in real-time within QuickV."
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-background snap-start min-h-screen flex items-center scroll-mt-24">
      {/* Soft background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-sage/10 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        <div className="mb-24 flex flex-col items-center text-center">
          <div className="bg-plum text-white shadow-inner-soft-sm rounded-full font-headline text-xl font-black uppercase px-8 py-3 mb-8 transform -rotate-1 border border-plum/20">
            Execution Flow
          </div>
          <h2 className="font-headline text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight leading-[1.1] text-foreground">
            Four steps to <br />
            <span className="text-outline text-sage">smarter shopping.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`relative group ${idx % 2 !== 0 ? 'lg:translate-y-16' : ''}`}
            >
              {/* Abstract Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-[80%] w-[50%] border-t-4 border-dashed border-foreground/20 z-0" />
              )}
              
              <div className="relative z-10 p-8 md:p-10 border border-foreground/10 rounded-[40px] bg-background transition-all duration-500 hover:-translate-y-2 hover:bg-plum hover:text-white shadow-soft group-hover:shadow-neumorphic">
                <div className="absolute -top-10 -left-4 font-headline text-7xl font-black text-foreground opacity-20 group-hover:text-white group-hover:opacity-100 transition-colors duration-300">
                  {step.num}
                </div>
                
                <h3 className="font-headline text-3xl font-black uppercase mb-4 mt-6 pt-4 border-t border-foreground/10 group-hover:border-white/20">{step.title}</h3>
                <p className="font-body text-xl font-medium leading-relaxed opacity-90">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
