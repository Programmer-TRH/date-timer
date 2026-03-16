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
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <div className="md:hidden border-t">
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
                      : "text-foreground hover:text-primary",
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="#"
              className="flex items-center gap-2 text-sm font-medium text-[#e91e63] hover:text-[#c2185b] transition-colors py-2"
            >
              <User className="w-4 h-4" />
              BECOME A PROFESSIONAL
            </Link>
            <Button className="bg-black text-white hover:bg-gray-800 w-full">
              Login
            </Button>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
