"use client";

import React from "react";
import { motion } from "framer-motion";

export function Testimonials() {
  const reviews = [
    {
      name: "Shreyash Virnodkar",
      date: "2 February 2026",
      text: "such a useful app, if you're ordering groceries on a daily basis, this app would save your time & money!",
      color: "bg-peach"
    },
    {
      name: "Abhiti Shrivastava",
      date: "14 April 2026",
      text: "useful app, very nice initiative but you should add flipkart minutes, and amazon now too",
      color: "bg-sage"
    },
    {
      name: "Suriya A",
      date: "10 February 2026",
      text: "Great app...Please try to include Amazon Fresh",
      color: "bg-plum"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 relative bg-background overflow-hidden border-t-8 border-foreground snap-start min-h-screen flex items-center scroll-mt-24">
      {/* Background Grid Pattern */}
      <div className="bg-grid-pattern opacity-[0.05]" />


      <div className="max-w-[1600px] mx-auto relative z-10">
        
        <div className="text-center mb-24 flex flex-col items-center">
          <h2 className="font-headline text-6xl md:text-[8rem] font-black uppercase text-foreground leading-[0.9] mb-6">
            User <br />
            <span className="italic text-peach">Reviews</span>
          </h2>
          <div className="bg-sage text-foreground shadow-neumorphic rounded-full font-headline font-black px-8 py-3 transform -rotate-2">
            Real Feedback
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {reviews.map((review, idx) => {
            // Soften rotations
            const rotations = ["rotate-[-2deg]", "translate-y-6", "rotate-[2deg]"];
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, type: "spring", bounce: 0.4 }}
                className={`w-full md:w-1/3 ${rotations[idx]}`}
              >
                <div className="p-8 md:p-10 border-4 border-foreground rounded-[40px] bg-background text-foreground shadow-soft hover:shadow-inner-soft-sm hover:-translate-y-2 transition-all duration-300 relative group overflow-hidden">
                  <div className={`absolute -top-10 -right-10 w-32 h-32 ${review.color} rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  <div className="font-headline text-8xl font-black opacity-10 absolute top-4 right-6 text-foreground">
                    "
                  </div>

                  <div className="mb-10 relative z-10 pt-4">
                    <p className="font-body font-medium text-xl leading-relaxed text-foreground/80">
                      {review.text}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-5 border-t border-foreground/10 pt-6 relative z-10">
                    <div className={`w-14 h-14 rounded-full ${review.color} text-white flex items-center justify-center shadow-inner-soft-sm font-headline font-black text-2xl`}>
                      {review.name[0].toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-subheading font-bold text-lg text-foreground">{review.name}</h4>
                      <p className="font-body text-sm text-foreground/50">{review.date}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-10 py-6 bg-foreground text-white border-4 border-foreground rounded-[30px] shadow-soft transform rotate-1"
          >
            <p className="font-headline text-2xl md:text-3xl font-black uppercase tracking-tight">
              You spoke and we listened! <span className="text-sage">Amazon Now</span> and <span className="text-peach">Flipkurt Minutes</span> now available on QuickV!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
