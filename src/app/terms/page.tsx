import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6 bg-background min-h-screen">
        <div className="max-w-4xl mx-auto space-y-12">
          <h1 className="font-headline text-6xl md:text-8xl font-black uppercase leading-none border-b-8 border-foreground pb-8">
            Terms <span className="text-peach">& Conditions</span>
          </h1>
          
          <div className="font-body text-xl md:text-2xl leading-relaxed space-y-8 text-foreground/80">
            <p className="font-bold text-2xl text-foreground">
              Welcome to QuickV! These Terms and Conditions (“Terms”) govern your use of the QuickV app, website, and services (collectively, the “Services”) provided by QuickV (“we,” “us,” or “our”). By accessing or using our Services, you agree to comply with these Terms.
            </p>

            <section className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase text-foreground">1. Services Provided</h2>
              <div className="space-y-4">
                <h3 className="font-bold text-xl uppercase">1.1 Comparison Platform</h3>
                <p>QuickV provides a platform to compare grocery products, prices, and availability from various vendors (“Content”). We do not sell, endorse, or warrant the quality, accuracy, or fitness of any products displayed on the app.</p>

                <h3 className="font-bold text-xl uppercase">1.2 Licensing and Quality Control Disclaimer</h3>
                <p>QuickV does not assume responsibility for the licensing, quality, or safety of any items sold by vendors. Vendors are solely responsible for the products and services they offer.</p>

                <h3 className="font-bold text-xl uppercase">1.3 Modifications to Services</h3>
                <p>We may update or modify the Services at any time to improve functionality or address technical issues.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase text-foreground">2. Account and User Responsibilities</h2>
              <div className="space-y-4">
                <h3 className="font-bold text-xl uppercase">2.1 Account Creation</h3>
                <p>To access certain features, you must register for a QuickV account by providing accurate and complete information. You are responsible for safeguarding your account credentials.</p>

                <h3 className="font-bold text-xl uppercase">2.2 Authorized Use</h3>
                <p>You may use the Services for personal, non-commercial purposes only. Unauthorized commercial use or resale of Content is prohibited.</p>

                <h3 className="font-bold text-xl uppercase">2.3 Unauthorized Access</h3>
                <p>You must notify QuickV immediately if you suspect unauthorized use of your account. QuickV is not liable for losses resulting from unauthorized access due to your negligence.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase text-foreground">3. Allowed and Prohibited Usage</h2>
              <div className="space-y-4">
                <h3 className="font-bold text-xl uppercase">3.1 Permitted Usage</h3>
                <ul className="list-disc pl-8 space-y-2">
                  <li>Use QuickV for personal, lawful purposes to compare grocery and fast moving products and services.</li>
                  <li>Incorporate limited Content into personal reports or presentations with proper attribution: Source: QuickV.</li>
                </ul>

                <h3 className="font-bold text-xl uppercase">3.2 Prohibited Usage</h3>
                <ul className="list-disc pl-8 space-y-2">
                  <li>Using automated tools (e.g., bots, scrapers) to extract or collect data from the Services.</li>
                  <li>Modifying, reverse-engineering, or decompiling any aspect of the Services.</li>
                  <li>Using the Services to distribute malicious software or engage in fraudulent activities.</li>
                  <li>Inputting Content into third-party databases without prior written permission.</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase text-foreground">4. Intellectual Property and Ownership</h2>
              <div className="space-y-4">
                <h3 className="font-bold text-xl uppercase">4.1 QuickV Content</h3>
                <p>All intellectual property rights in the Services and Content belong to QuickV or our licensors. You may not reproduce, distribute, or create derivative works without prior consent.</p>

                <h3 className="font-bold text-xl uppercase">4.2 Vendor Content</h3>
                <p>Product information displayed on QuickV is owned by respective vendors. QuickV is not responsible for inaccuracies or misrepresentations.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase text-foreground">5. Disclaimers and Assumption of Risk</h2>
              <div className="space-y-4">
                <h3 className="font-bold text-xl uppercase">5.1 General Disclaimer</h3>
                <p>QuickV provides information “as-is” and “as-available.” We make no guarantees about the accuracy, reliability, or completeness of the Content.</p>

                <h3 className="font-bold text-xl uppercase">5.2 Assumption of Risk</h3>
                <p>Your decisions based on the Services are made at your own risk. QuickV disclaims liability for errors or omissions in the Content.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase text-foreground">6. Liability Limitations</h2>
              <div className="space-y-4">
                <h3 className="font-bold text-xl uppercase">6.1 Exclusion of Certain Damages</h3>
                <p>QuickV will not be liable for indirect, incidental, or consequential damages arising from your use of the Services.</p>

                <h3 className="font-bold text-xl uppercase">6.2 Liability Cap</h3>
                <p>QuickV’s total liability will not exceed the fees you paid (if any) in the 12 months preceding the event causing the liability.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase text-foreground">7. Vendor and Third-Party Responsibility</h2>
              <p>QuickV acts as an informational intermediary. Vendors are solely responsible for compliance with applicable laws and for the quality of the goods they sell. Links to third-party websites are provided for convenience, and QuickV is not responsible for their content or practices.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase text-foreground">8. Termination</h2>
              <p>QuickV reserves the right to suspend or terminate your access to the Services for violations of these Terms. Upon termination, you must discontinue all use and delete any Content you may have downloaded.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase text-foreground">9. Choice of Law and Jurisdiction</h2>
              <p>These Terms are governed by the laws of Indian Jurisdiction. Disputes will be resolved exclusively in the courts of Indian Jurisdiction.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase text-foreground">10. Changes to Terms</h2>
              <p>We may revise these Terms at any time. Continued use of the Services indicates your acceptance of the updated Terms.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase text-foreground">11. Contact Information</h2>
              <p>If you have questions about these Terms, please contact us at <a href="mailto:quickv@ciot.com" className="text-peach underline font-bold">quickv@ciot.com</a>.</p>
            </section>

            <p className="font-bold text-center pt-12 border-t-4 border-foreground/10">
              By using QuickV, you confirm that you have read and agreed to these Terms and Conditions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
