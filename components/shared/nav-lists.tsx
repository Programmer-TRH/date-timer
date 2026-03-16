"use client";
import { headerNavItems } from "@/lib/data/header-nav-items";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavLists() {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex items-center gap-8">
      {headerNavItems.map((item) => {
        const isActive = pathname === item.link;
        return (
          <Link
            key={item.id}
            href={item.link}
            className={cn(
              "text-sm font-medium transition-colors",
              isActive ? "text-primary" : "text-foreground hover:text-primary",
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
