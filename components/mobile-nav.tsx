import Link from "next/link";
import React from "react";
import { NavItem } from "../types";

interface MobileNavProps {
  navItems: NavItem[];
}

const MobileNav = ({ navItems }: MobileNavProps) => {
  return (
    <div className="fixed top-16 inset-0 z-50 p-6 shadow-md md:hidden animate-in slide-in-from-bottom-80">
      <div className="grid gap-6 bg-white p-4 text-popover-foreground shadow-md">
        <Link href={"/"} className="">
          <span>Post Writer</span>
        </Link>
        <nav className="text-sm flex gap-4">
          {navItems?.map((item, index) => (
            <>
              <Link
                href={item.href}
                key={index}
                className="p-2 font-medium hover:underline"
              >
                {item.title}
              </Link>
            </>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
