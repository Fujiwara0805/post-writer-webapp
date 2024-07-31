import Link from "next/link";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../../components/ui/button";
import React from "react";
import MainNav from "../../components/main-nav";
import { marketingConfing } from "../../config/marketing";

const Marketinglayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="container z-40 bg-background">
        <div className="h-20 py-6 flex items-center justify-between">
          {/* marketingConfingのデータをpropsで渡す */}
          <MainNav navItems={marketingConfing.mainNav} />
          <nav>
            <Link
              href={"/login"}
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
            >
              ログイン
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Marketinglayout;
