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

  return (
  <Link
  href={href}
  className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-200 hover:bg-slate-800 transition-colors"
>
  <Icon size={18} />
  <span className="text-sm font-medium">{label}</span>
</Link>
  );
}