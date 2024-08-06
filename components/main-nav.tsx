"use client";
import Link from "next/link";
import React, { useState } from "react";
import { NavItem } from "../types";
import MobileNav from "./mobile-nav";

interface MainNavProps {
  navItems: NavItem[];
  children?: React.ReactNode;
}

// 渡されたpropsをnavItemsで受け取る（同じ名前）
const MainNav = ({ navItems }: MainNavProps) => {
  // 表示状態（メニュー）
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  // スマホサイズのメニューの開閉処理
  const MobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
    console.log(showMobileMenu);
  };

  return (
    <div className="flex items-center md:gap-10">
      <Link href={"/"} className="hidden md:flex items-center space-x-2">
        <span className="">Post Writer</span>
      </Link>
      {/* ナビゲーションの表示 */}
      <nav className="md:flex gap-6 hidden">
        {navItems?.map((item, index) => (
          <>
            <Link
              href={item.href}
              key={index}
              className="text-lg sm:text-sm font-medium hover:text-foreground/80"
            >
              {item.title}
            </Link>
          </>
        ))}
      </nav>
      {/* スマホサイズの時はハンバーガーメニューを表示 */}
      <button className="md:hidden" onClick={MobileMenuToggle}>
        <span>メニュー</span>
      </button>
      {showMobileMenu && <MobileNav navItems={navItems} />}
    </div>
  );
};

export default MainNav;
