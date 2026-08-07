"use client";

import { usePathname } from "next/navigation";
import { navigation } from "@/lib/navigation";
import NavItem from "./NavItem";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      {navigation.map((item) => (
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