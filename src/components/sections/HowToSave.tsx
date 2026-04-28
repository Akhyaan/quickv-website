"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function HowToSave() {
  return (
    <section className="py-40 px-6">
      <div className="max-w-[1600px] mx-auto rounded-none bg-foreground text-background overflow-hidden relative border-16 border-background shadow-[30px_30px_0px_#FF5A36] transform rotate-1 transition-transform hover:rotate-0 duration-500">
        
        {/* Abstract Background Noise */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] z-0 mix-blend-overlay" />
        
        {/* Background massive typography */}
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 pointer-events-none opacity-[0.05] overflow-hidden text-white">
          <h2 className="font-headline text-[30vw] font-black uppercase text-center leading-none tracking-tighter">
            SAVE SAVE
          </h2>
        </div>

        {/* Gradient Blobs */}
        <div className="absolute top-0 -left-20 w-[40vw] h-[40vw] bg-peach/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 -right-20 w-[30vw] h-[30vw] bg-sage/20 rounded-full blur-[100px] pointer-events-none" />

        
        <div className="relative z-10 p-16 md:p-32 flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="flex-1 space-y-12 text-center lg:text-left relative">
            <div className="absolute -left-10 top-0 w-2 h-full bg-peach" />
            
            <h2 className="font-headline text-5xl md:text-[6rem] font-black uppercase leading-[0.85] tracking-tighter">
              Stop <br className="hidden md:block" />
              <span className="text-outline-white italic pr-4">Overpaying.</span>
            </h2>
            <p className="font-body text-xl md:text-2xl font-bold text-white/90 max-w-2xl mx-auto lg:mx-0">
              Join thousands of smart shoppers saving money every single day. 
            </p>
            
            <div className="inline-block bg-peach text-white font-headline text-3xl font-black uppercase px-8 py-4 border-4 border-background transform -skew-x-12">
              Scan to initiate
            </div>
          </div>

          <motion.div 
            initial={{ scale: 0.9, rotate: 0 }}
            whileInView={{ scale: 1, rotate: 3 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="flex-shrink-0 flex flex-col sm:flex-row gap-6 bg-white p-6 border-8 border-foreground shadow-[15px_15px_0px_#00E676] rounded-[20px] max-w-full"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-background border-4 border-foreground p-3 rounded-xl overflow-hidden group">
                <Image 
                  src="/images/qrcode_apps.apple.com.png" 
                  alt="App Store QR" 
                  width={200} 
                  height={200} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform" 
                />
              </div>
              <span className="font-headline font-black text-sm uppercase tracking-widest text-foreground">iOS</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-background border-4 border-foreground p-3 rounded-xl overflow-hidden group">
                <Image 
                  src="/images/qrappstore.png" 
                  alt="Play Store QR" 
                  width={200} 
                  height={200} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform" 
                />
              </div>
              <span className="font-headline font-black text-sm uppercase tracking-widest text-foreground">Android</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
