import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6 bg-background min-h-screen">
        <div className="max-w-4xl mx-auto space-y-12">
          <h1 className="font-headline text-6xl md:text-8xl font-black uppercase leading-none border-b-8 border-foreground pb-8">
            Privacy <span className="text-peach">Policy</span>
          </h1>
          
          <div className="font-body text-xl md:text-2xl leading-relaxed space-y-8 text-foreground/80">
            <p className="font-bold text-2xl text-foreground">
              Thank you for using QuickV! This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you access or use our website, mobile application, and related services (collectively referred to as the “Services”). By accessing QuickV, you agree to the terms described in this Privacy Policy.
            </p>

            <section className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase text-foreground">1. Information We Collect</h2>
              <div className="space-y-4">
                <h3 className="font-bold text-xl uppercase">1.1 Information You Provide to Us</h3>
                <p>When you use QuickV, we may collect the following personal information:</p>
                <ul className="list-disc pl-8 space-y-2">
                  <li><strong>Account Information:</strong> Name, email address, phone number, and password when you create an account.</li>
                  <li><strong>Payment Information:</strong> If applicable, billing details and transaction information (collected by secure third-party payment processors).</li>
                  <li><strong>Communication Information:</strong> Information you provide when you contact customer support or participate in surveys.</li>
                  <li><strong>Profile Information:</strong> Optional details you choose to share, such as preferences and saved items.</li>
                </ul>

                <h3 className="font-bold text-xl uppercase">1.2 Information Collected Automatically</h3>
                <p>When you access our Services, we automatically collect certain information, including:</p>
                <ul className="list-disc pl-8 space-y-2">
                  <li><strong>Device Information:</strong> Information about your device, operating system, and browser type.</li>
                  <li><strong>Usage Data:</strong> Details about how you use QuickV, including access times, pages viewed, and interactions.</li>
                  <li><strong>Location Data:</strong> Approximate location based on your IP address or device GPS (with your consent).</li>
                  <li><strong>Cookies and Tracking:</strong> Information collected through cookies and other tracking technologies to improve your experience.</li>
                </ul>

                <h3 className="font-bold text-xl uppercase">1.3 Information from Third Parties</h3>
                <p>We may receive additional information from partners, analytics providers, and marketing agencies to enhance our services and personalize user experiences.</p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase text-foreground">2. How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li><strong>To Provide and Improve the Services:</strong> Ensuring smooth operation, delivering product comparison results, and enhancing user experience.</li>
                <li><strong>To Process Transactions:</strong> Facilitating payments and providing purchase confirmations.</li>
                <li><strong>To Personalize Content:</strong> Customizing search results and product recommendations.</li>
                <li><strong>To Communicate with You:</strong> Sending service updates, marketing messages (with your consent), and responding to inquiries.</li>
                <li><strong>To Improve Security:</strong> Detecting and preventing fraudulent activities and unauthorized access.</li>
                <li><strong>To Conduct Analytics:</strong> Analyzing usage patterns and user preferences to optimize the platform.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase text-foreground">3. How We Share Your Information</h2>
              <p>We do not sell your personal information. However, we may share your data under the following circumstances:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li><strong>With Service Providers:</strong> Partners who assist with data analysis, customer support, payment processing, and marketing.</li>
                <li><strong>With Vendors:</strong> To facilitate your product search and purchases, we may share data with Q-commerce vendors.</li>
                <li><strong>For Legal Compliance:</strong> When required to comply with legal obligations or protect our rights and users.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase text-foreground">4. Data Retention</h2>
              <p>We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase text-foreground">5. Your Privacy Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li><strong>Access and Correction:</strong> Request access to your personal information and correct inaccuracies.</li>
                <li><strong>Data Deletion:</strong> Request the deletion of your personal information, subject to legal obligations.</li>
                <li><strong>Opt-Out of Marketing:</strong> Unsubscribe from marketing communications by following the opt-out instructions.</li>
              </ul>
              <p>To exercise these rights, please contact us at <a href="mailto:quickv@ciot.com" className="text-peach underline font-bold">quickv@ciot.com</a>.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase text-foreground">6. Cookies and Tracking Technologies</h2>
              <p>We use cookies and similar technologies to enhance user experience and analyze usage patterns. You can manage cookie preferences through your browser settings.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase text-foreground">7. Data Security</h2>
              <p>We implement industry-standard measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no system is completely secure, and we cannot guarantee absolute security.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase text-foreground">8. International Data Transfers</h2>
              <p>If you access QuickV from outside of Indian jurisdictions, please note that your information may be transferred to and processed in countries with different data protection laws.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase text-foreground">9. Children’s Privacy</h2>
              <p>QuickV is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we discover that we have inadvertently collected such data, we will take immediate steps to delete it.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase text-foreground">10. Changes to this Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time. We encourage you to review it periodically. Continued use of the Services constitutes your acceptance of the changes.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-headline text-3xl font-black uppercase text-foreground">11. Contact Us</h2>
              <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:quickv@ciot.com" className="text-peach underline font-bold">quickv@ciot.com</a>.</p>
            </section>

            <p className="font-bold text-center pt-12 border-t-4 border-foreground/10">
              By using QuickV, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
