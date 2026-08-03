import { footerNavigation } from "@/lib/navigation";
import NavItem from "./NavItem";

export default function FooterNavigation() {
  return (
    <nav>
      {footerNavigation.map((item) => (
        <NavItem
          key={item.href}
          label={item.label}
          href={item.href}
          icon={item.icon}
        />
      ))}
    </nav>
  );
}