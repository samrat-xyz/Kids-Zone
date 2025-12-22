"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavLink({ href, children }) {
  const pathname = usePathname();
  return (
    <Link
      className={`${pathname.startsWith(href) && "text-primary"} font-medium`}
      href={href}
    >
      {children}
    </Link>
  );
}

export default NavLink;
