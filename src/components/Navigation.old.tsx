"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown, LogOut, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface NavLink {
  href: string;
  label: string;
  isDropdown?: boolean;
  dropdownItems?: NavLink[];
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About Us" },
  { 
    href: "#", 
    label: "More", 
    isDropdown: true,
    dropdownItems: [
      { href: "/faq", label: "FAQ" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/legal/terms", label: "Terms of Service" },
    ]
  },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  
  const pathname = usePathname();
  const router = useRouter();
  const { user, signOut } = useAuth();

  // Handle scroll for sticky header effect
  useEffect(() => {
    let rafId: number | null = null;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        setIsScrolled(currentScrollY > 8);
        lastScrollY = currentScrollY;
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Handle active section detection with IntersectionObserver
  useEffect(() => {
    const sections = navLinks.map(link => 
      document.querySelector(link.href.substring(1))
    ).filter(Boolean) as Element[];

    if (sections.length === 0) return;

    const observerOptions = {
      rootMargin: "-40% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // Close mobile menu on link click
  const handleLinkClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Handle escape key for mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Lock body scroll
      document.body.style.overflow = "hidden";
      // Set aria-hidden on main content
      const main = document.querySelector("main");
      if (main) main.setAttribute("aria-hidden", "true");
    } else {
      // Unlock body scroll
      document.body.style.overflow = "";
      // Remove aria-hidden from main content
      const main = document.querySelector("main");
      if (main) main.removeAttribute("aria-hidden");
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
      const main = document.querySelector("main");
      if (main) main.removeAttribute("aria-hidden");
    };
  }, [isMobileMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen || !mobileMenuRef.current) return;

    const focusableElements = mobileMenuRef.current.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    // Focus first element when menu opens
    firstElement?.focus();

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);

    return () => {
      document.removeEventListener("keydown", handleTabKey);
    };
  }, [isMobileMenuOpen]);

  const getLinkClassName = (href: string) => {
    const isActive = activeSection === href.substring(1);
    const baseClasses = "px-3 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";
    const colorClasses = isActive
      ? "text-primary font-medium"
      : "text-muted-foreground hover:text-primary";
    return `${baseClasses} ${colorClasses}`;
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md supports-[backdrop-filter]:bg-background/80"
            : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        }`}
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h2 className="text-xl font-bold text-primary">YourBrand</h2>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={getLinkClassName(link.href)}
                    aria-current={activeSection === link.href.substring(1) ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Button variant="outline" className="mr-2">
                  Sign In
                </Button>
                <Button>
                  Get Started
                </Button>
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden">
              <button
                ref={hamburgerRef}
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <span className="sr-only">
                  {isMobileMenuOpen ? "Close menu" : "Open menu"}
                </span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay and Panel */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={toggleMobileMenu}
            aria-hidden="true"
          />

          {/* Mobile Menu Panel */}
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="fixed top-0 right-0 z-50 h-full w-64 bg-background shadow-xl md:hidden transform transition-transform duration-300"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-foreground hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`block ${getLinkClassName(link.href)}`}
                  aria-current={activeSection === link.href.substring(1) ? "page" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="border-t px-4 py-4 space-y-2">
              <Button variant="outline" className="w-full" onClick={handleLinkClick}>
                Sign In
              </Button>
              <Button className="w-full" onClick={handleLinkClick}>
                Get Started
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
