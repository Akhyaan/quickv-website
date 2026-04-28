"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative bg-background overflow-hidden border-b-8 border-foreground snap-start min-h-screen flex items-center scroll-mt-24">
      
      {/* Background Grid Pattern */}
      <div className="bg-grid-pattern" />


      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12 border-b-8 border-foreground pb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-headline text-7xl lg:text-9xl font-black uppercase max-w-4xl leading-[0.85]"
          >
            What is <br/><span className="text-peach italic lowercase">QuickV?</span>
          </motion.h2>
          <p className="font-body text-2xl md:text-4xl text-foreground font-bold max-w-xl bg-sage p-6 border-4 border-foreground shadow-soft transform rotate-3">
            QuickV is your ultimate Q-commerce companion, dedicated to making your shopping experience smarter and more economical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="transform -translate-y-12"
          >
            <Card className="h-full flex flex-col items-center text-center gap-8 bg-peach text-white border-white rounded-none p-12 transform -skew-x-6 hover:skew-x-0 transition-transform duration-500">
              <div className="w-20 h-20 bg-foreground text-background flex items-center justify-center rounded-none text-4xl font-black transform skew-x-6">
                1
              </div>
              <h3 className="font-headline text-4xl font-black uppercase transform skew-x-6">What Makes It Better?</h3>
              <p className="font-body text-xl font-medium leading-relaxed transform skew-x-6">
                We analyze and compare the prices and delivery times from various Q-commerce apps, ensuring you always get the best deal.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="transform translate-y-12"
          >
            <Card className="h-full flex flex-col items-center text-center gap-8 bg-foreground text-background border-peach rounded-none p-12 transform -skew-x-6 hover:skew-x-0 transition-transform duration-500">
              <div className="w-20 h-20 bg-peach text-white flex items-center justify-center rounded-none text-4xl font-black transform skew-x-6">
                2
              </div>
              <h3 className="font-headline text-4xl font-black uppercase transform skew-x-6">How It Helps You?</h3>
              <p className="font-body text-xl font-medium leading-relaxed transform skew-x-6">
                Empowers customers to make informed financial decisions effortlessly, saving both time and money.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="transform -translate-y-4"
          >
            <Card className="h-full flex flex-col items-center text-center gap-8 bg-sage text-foreground border-foreground rounded-none p-12 transform -skew-x-6 hover:skew-x-0 transition-transform duration-500">
              <div className="w-20 h-20 bg-background border-4 border-foreground text-foreground flex items-center justify-center rounded-none text-4xl font-black transform skew-x-6">
                3
              </div>
              <h3 className="font-headline text-4xl font-black uppercase transform skew-x-6">What to Expect?</h3>
              <p className="font-body text-xl font-medium leading-relaxed transform skew-x-6">
                A hassle-free way to shop and discover the best at your fingertips with QuickV!
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
