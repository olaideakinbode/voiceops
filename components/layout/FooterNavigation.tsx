"use client";

import { usePathname } from "next/navigation";
import { footerNavigation } from "@/lib/navigation";
import NavItem from "./NavItem";

export default function FooterNavigation() {
  const pathname = usePathname();

  return (
    <nav>
      {footerNavigation.map((item) => (
        <NavItem
  key={item.href}
  label={item.label}
  href={item.href}
  icon={item.icon}
  isActive={pathname === item.href}
/>
      ))}
    </nav>
  );
}