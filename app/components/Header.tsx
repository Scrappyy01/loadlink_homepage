"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const navItems = [
  {
    label: "Services",
    href: "#",
    children: [
      {
        label: "Parcel Freight",
        href: "https://parcelfreight.loadlink.com.au/parcel-freight",
        description: "Compare rates and book parcel delivery",
      },
      {
        label: "LoadLink Connect",
        href: "https://portal.loadlink.com.au/register/",
        description: "Quote your freight for free and get it moving",
      },
      {
        label: "Carriers Loadboard",
        href: "https://app.loadlink.com.au/listings/",
        description: "Find freight to haul near you",
      },
      {
        label: "Tracking",
        href: "/#tracking",
        description: "Real-time shipment tracking",
      },
    ],
  },
  {
    label: "Integrations",
    href: "#",
    children: [
      {
        label: "Shopify",
        href: "/integrations/shopify",
        description: "Connect your Shopify store",
      },
      {
        label: "WooCommerce",
        href: "/integrations/woocommerce",
        description: "Connect your WooCommerce store",
      },
      {
        label: "All Integrations",
        href: "/#connect-ecommerce",
        description: "View all ecommerce integrations",
      },
    ],
  },
  {
    label: "About",
    href: "#",
    children: [
      {
        label: "About Us",
        href: "/about-us",
        description: "Learn about LoadLink",
      },
      { label: "FAQ", href: "/faq", description: "Frequently asked questions" },
      {
        label: "Partners",
        href: "/partners",
        description: "Our delivery partners",
      },
      {
        label: "Our Advantages",
        href: "/advantages",
        description: "Why businesses choose LoadLink",
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header({
  forceScrolled = false,
  ctaHref = "/get-started",
  ctaTarget = "_self",
}: {
  forceScrolled?: boolean;
  ctaHref?: string;
  ctaTarget?: string;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolledState, setScrolledState] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrolled = forceScrolled || scrolledState;

  useEffect(() => {
    const handleScroll = () => setScrolledState(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          scrolled
            ? "py-3 bg-white/90 backdrop-blur-xl shadow-[0_1px_30px_rgba(0,0,0,0.08)] border-b border-gray-200/50"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-[5%] md:px-[8%]">
          <Link
            href="/"
            className="relative z-10 hover:opacity-80 transition-opacity"
            aria-label="LoadLink — Go to homepage"
          >
            <Image
              src={
                scrolled
                  ? "/images/Icons/Loadlink-Logo.svg"
                  : "/images/Icons/logo-loadlink-white.svg"
              }
              alt="LoadLink Australia — Parcel Freight and Logistics Marketplace"
              width={140}
              height={35}
              className={`transition-all duration-300 ${scrolled ? "h-[32px]" : "h-[38px]"} w-auto`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-lg hover:bg-loadlink-orange/10 cursor-pointer ${
                      scrolled ? "text-loadlink-navy" : "text-white"
                    } hover:text-loadlink-orange`}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-[280px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 origin-top ${
                      openDropdown === item.label
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors group"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <span className="text-sm font-semibold text-loadlink-navy group-hover:text-loadlink-orange transition-colors">
                            {child.label}
                          </span>
                          <span className="text-xs text-gray-400">
                            {child.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-lg hover:bg-loadlink-orange/10 ${
                    scrolled ? "text-loadlink-navy" : "text-white"
                  } hover:text-loadlink-orange`}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              href={ctaHref}
              target={ctaTarget}
              rel={ctaTarget === "_blank" ? "noopener noreferrer" : undefined}
              className="ml-4 bg-loadlink-orange text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-loadlink-orange/90 hover:shadow-lg hover:shadow-loadlink-orange/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started Free
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
              scrolled ? "text-loadlink-navy" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-white z-[999] transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav
          className="flex flex-col p-8 pt-24 gap-1"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  className="w-full flex items-center justify-between text-loadlink-navy font-medium text-lg py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === item.label ? null : item.label,
                    )
                  }
                  aria-expanded={mobileExpanded === item.label}
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileExpanded === item.label
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-6 pb-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2.5 px-4 text-gray-600 rounded-lg hover:bg-gray-50 hover:text-loadlink-orange transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="text-sm font-medium">
                          {child.label}
                        </span>
                        <span className="block text-xs text-gray-400 mt-0.5">
                          {child.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-loadlink-navy font-medium text-lg py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href={ctaHref}
            target={ctaTarget}
            rel={ctaTarget === "_blank" ? "noopener noreferrer" : undefined}
            className="mt-6 bg-loadlink-orange text-white px-6 py-4 rounded-xl font-semibold hover:bg-loadlink-orange/90 transition-all text-center text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started Free
          </Link>
        </nav>
      </div>
    </>
  );
}
