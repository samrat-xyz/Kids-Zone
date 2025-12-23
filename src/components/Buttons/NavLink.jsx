"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }) {
  const pathname = usePathname();

  const isActive =
    pathname === href ||
    (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`font-medium ${
        isActive ? "text-primary" : "text-gray-500"
      }`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
