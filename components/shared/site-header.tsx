import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import NavLists from "./nav-lists";
import MobileNav from "./mobile-nav";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="wrapper flex h-16 items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-secondary">SET</span>
          <span className="text-2xl font-bold text-primary">MySpace</span>
        </div>

        <NavLists />

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#"
            className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <User className="w-4 h-4" />
            BECOME A PROFESSIONAL
          </Link>
          <Button className="bg-black text-white hover:bg-gray-800 px-6">
            Login
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      <MobileNav />
    </header>
  );
}
