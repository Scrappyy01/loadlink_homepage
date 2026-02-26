import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Get Started Free | LoadLink",
  description:
    "Create your free LoadLink account and start shipping smarter today.",
};

export default function GetStartedPage() {
  return (
    <>
      <main className="min-h-screen flex items-center pt-16 pb-10 px-[5%] md:px-[8%] bg-gray-50">
        <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left: CTA text */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-loadlink-navy mb-5 leading-tight">
              Ready to experience the LoadLink difference?
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Join thousands of businesses and individuals across Australia who
              trust LoadLink to move what matters most.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="https://parcelfreight.loadlink.com.au/parcel-freight"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-loadlink-orange text-white px-8 py-3.5 rounded-full font-semibold hover:bg-loadlink-navy transition-colors duration-300"
              >
                Create Free Account
              </Link>
              <Link
                href="/contact"
                className="bg-white border border-gray-200 text-loadlink-navy px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>

          {/* Right: login screenshot preview */}
          <div className="flex-[1.4] w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/images/Login_01.png"
                alt="LoadLink portal login preview"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
