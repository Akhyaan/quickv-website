"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

export function Team() {
  const nitin = { 
    name: "Nitin Sharma", 
    role: "Founder", 
    description: "Nitin is a seasoned technology leader with 25 years at Microsoft, where he drove innovation and delivered impactful solutions. Five years ago, he transitioned to entrepreneurship, leveraging his expertise to solve real-world problems with technology.",
    linkedin: "https://www.linkedin.com/in/iamnitins/",
    image: "/images/Nitin.jpeg"
  };

  return (
    <section id="team" className="py-24 px-6 relative bg-background border-y-8 border-foreground overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="bg-grid-pattern opacity-[0.05]" />


      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">
            The <span className="italic text-peach">Visionary</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-peach transform rotate-2 rounded-[40px] z-0" />
          <Card className="relative z-10 p-10 md:p-16 border-4 border-foreground shadow-soft rounded-[40px] bg-background flex flex-col md:flex-row items-center gap-12">
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
              <div className="absolute inset-0 bg-sage rounded-full transform -rotate-6 shadow-soft-sm" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-foreground shadow-inner-soft">
                <Image 
                  src={nitin.image} 
                  alt={nitin.name} 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 text-center md:text-left">
              <div>
                <h3 className="font-headline text-4xl md:text-5xl font-black uppercase mb-2">{nitin.name}</h3>
                <p className="font-subheading text-xl font-bold text-peach uppercase tracking-widest">{nitin.role}</p>
              </div>
              
              <p className="font-body text-lg md:text-xl font-medium leading-relaxed text-foreground/80">
                {nitin.description}
              </p>

              <a 
                href={nitin.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-white rounded-full font-subheading font-bold hover:bg-peach transition-colors shadow-soft-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
