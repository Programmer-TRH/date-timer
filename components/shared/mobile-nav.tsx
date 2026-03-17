"use client";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu, User } from "lucide-react";
import { headerNavItems } from "@/lib/data/header-nav-items";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const handleClick = () => {
    setOpen(false);
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="xl:hidden"
        aria-label="Open menu"
        aria-expanded={false} // dynamic if possible
        aria-controls="mobile-menu"
      >
        <Menu className="text-foreground" />
      </SheetTrigger>
      <SheetContent
        className="xl:hidden p-4 text-foreground"
        id="mobile-menu"
        aria-labelledby="mobile-menu-sidebar"
      >
        <div className="flex items-center mt-8">
          <span className="text-2xl font-bold">SET</span>
          <span className="text-2xl font-bold text-primary">MySpace</span>
        </div>
        <div className="border-t">
          <nav className="flex flex-col p-4 gap-4">
            {headerNavItems.map((item) => {
              const isActive = pathname === item.link;
              return (
                <Link
                  key={item.id}
                  href={item.link}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-foreground hover:text-primary cursor-pointer",
                  )}
                  onClick={handleClick}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="#"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
              onClick={handleClick}
            >
              <User className="w-4 h-4" />
              BECOME A PROFESSIONAL
            </Link>
            <Button
              className="bg-black text-white hover:bg-gray-800 px-6 cursor-pointer"
              onClick={handleClick}
            >
              Login
            </Button>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
