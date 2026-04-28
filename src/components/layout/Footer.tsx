import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 px-6 relative overflow-hidden border-t-8 border-peach">
      <div className="max-w-[1600px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left: Branding & Contact */}
        <div className="lg:col-span-4 space-y-8">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-white p-2">
              <Image 
                src="/images/favicon.ico" 
                alt="QuickV Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <span className="font-headline font-black text-4xl tracking-tight text-white uppercase">QuickV</span>
          </div>
          
          <div className="space-y-2">
            <a href="mailto:nitins@ciot.com" className="font-body text-xl font-bold hover:text-peach transition-colors">
              nitins@ciot.com
            </a>
            <p className="font-body text-sm opacity-60 max-w-xs">
              Powered by Char-IOT Software Solutions Private Limited @ 2026
            </p>
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <h4 className="font-headline text-xl font-black uppercase text-peach">Company</h4>
            <ul className="space-y-4 font-subheading text-lg font-bold">
              <li><Link href="/#about" className="hover:text-peach transition-colors">About</Link></li>
              <li><Link href="/#contact" className="hover:text-peach transition-colors">Contact</Link></li>
              <li><Link href="/#faq" className="hover:text-peach transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-headline text-xl font-black uppercase text-peach">Legal</h4>
            <ul className="space-y-4 font-subheading text-lg font-bold">
              <li><Link href="/terms" className="hover:text-peach transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-peach transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Right: CTA */}
        <div className="lg:col-span-4 space-y-8">
          <h4 className="font-headline text-3xl font-black uppercase">Let's try out!</h4>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              href="https://apps.apple.com/in/app/quickv/id6743402423" 
              target="_blank" 
              rel="noreferrer" 
              variant="primary" 
              size="md" 
              className="w-full sm:w-auto rounded-xl shadow-none"
            >
              iOS App
            </Button>
            <Button 
              href="https://play.google.com/store/apps/details?id=com.quickV.app&pcampaignid=web_share" 
              target="_blank" 
              rel="noreferrer" 
              variant="secondary" 
              size="md" 
              className="w-full sm:w-auto rounded-xl shadow-none"
            >
              Android App
            </Button>
          </div>
        </div>
      </div>

      {/* Background massive logo */}
      <div className="absolute -bottom-10 -right-20 pointer-events-none opacity-[0.05] select-none">
        <h2 className="font-headline text-[20vw] font-black leading-none uppercase">QUICKV</h2>
      </div>
    </footer>
  );
}
