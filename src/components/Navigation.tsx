"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown, LogOut, User, ShoppingCart } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";

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

    const handleScroll = () => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 8);
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // Close mobile menu on link click
  const handleLinkClick = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, []);

  // Handle sign out
  const handleSignOut = async () => {
    await signOut();
    router.push("/");
    setIsUserMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  // Handle escape key for mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
          hamburgerRef.current?.focus();
        }
        setIsDropdownOpen(false);
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const getLinkClassName = (href: string) => {
    const isActive = isLinkActive(href);
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
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h2 className="text-xl font-bold text-primary">Olyncha</h2>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <div key={link.label} className="relative">
                    {link.isDropdown ? (
                      <div ref={dropdownRef}>
                        <button
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className={`${getLinkClassName("#")} inline-flex items-center`}
                          aria-expanded={isDropdownOpen}
                          aria-haspopup="true"
                        >
                          {link.label}
                          <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                        </button>
                        
                        {isDropdownOpen && (
                          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background border">
                            <div className="py-1">
                              {link.dropdownItems?.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary"
                                  onClick={() => setIsDropdownOpen(false)}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={getLinkClassName(link.href)}
                        aria-current={isLinkActive(link.href) ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {user ? (
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 px-3 py-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-expanded={isUserMenuOpen}
                    aria-haspopup="true"
                  >
                    {user.photoURL ? (
                      <Image
                        src={user.photoURL}
                        alt={user.displayName || "User"}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    ) : (
                      <User className="h-6 w-6" />
                    )}
                    <span className="text-sm font-medium">{user.displayName || user.email}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${isUserMenuOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-background border">
                      <div className="py-1">
                        <Link
                          href="/cart"
                          className="flex items-center px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Cart
                        </Link>
                        <Link
                          href="/order-status"
                          className="flex items-center px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          Orders
                        </Link>
                        <hr className="my-1" />
                        <button
                          onClick={handleSignOut}
                          className="flex items-center w-full px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary text-left"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link href="/auth/login">
                    <Button variant="outline">Sign In</Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button>Sign Up</Button>
                  </Link>
                </>
              )}
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

            {/* User info for mobile */}
            {user && (
              <div className="px-4 py-3 border-b">
                <div className="flex items-center space-x-2">
                  {user.photoURL ? (
                    <Image
                      src={user.photoURL}
                      alt={user.displayName || "User"}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  ) : (
                    <User className="h-8 w-8" />
                  )}
                  <div>
                    <p className="text-sm font-medium">{user.displayName}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.isDropdown ? (
                    <>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full text-left flex items-center justify-between ${getLinkClassName("#")}`}
                      >
                        {link.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isDropdownOpen && (
                        <div className="pl-4 space-y-1">
                          {link.dropdownItems?.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={handleLinkClick}
                              className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`block ${getLinkClassName(link.href)}`}
                      aria-current={isLinkActive(link.href) ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              
              {user && (
                <>
                  <Link
                    href="/cart"
                    onClick={handleLinkClick}
                    className={`block ${getLinkClassName("/cart")}`}
                  >
                    Cart
                  </Link>
                  <Link
                    href="/order-status"
                    onClick={handleLinkClick}
                    className={`block ${getLinkClassName("/order-status")}`}
                  >
                    My Orders
                  </Link>
                </>
              )}
            </div>

            <div className="border-t px-4 py-4 space-y-2">
              {user ? (
                <Button 
                  variant="outline" 
                  className="w-full justify-start" 
                  onClick={handleSignOut}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              ) : (
                <>
                  <Link href="/auth/login" onClick={handleLinkClick}>
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/auth/signup" onClick={handleLinkClick}>
                    <Button className="w-full">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
