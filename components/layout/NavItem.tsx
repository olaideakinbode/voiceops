"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

type NavItemProps = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export default function NavItem({
  label,
  href,
  icon,
}: NavItemProps) {
  const Icon = icon;
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
  <Link
  href={href}
  className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
    isActive
      ? "bg-violet-600 text-white"
      : "text-slate-300 hover:bg-slate-800 hover:text-white"
  }`}
>
  <Icon size={18} />
  <span className="text-sm font-medium">{label}</span>
</Link>
  );
}