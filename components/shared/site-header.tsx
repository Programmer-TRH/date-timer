import { Button } from "../ui/button";
import Link from "next/link";
import NavLists from "./nav-lists";
import MobileNav from "./mobile-nav";
import UserIcon from "../icon/user-icon";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="wrapper flex h-16 items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold">SET</span>
          <span className="text-2xl font-bold text-primary">MySpace</span>
        </div>

        <NavLists />

        <div className="hidden xl:flex items-center gap-4">
          <Link
            href="#"
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <UserIcon className="w-4 h-4" />
            BECOME A PROFESSIONAL
          </Link>
          <Button className="bg-black text-white hover:bg-gray-800 px-6">
            Login
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
