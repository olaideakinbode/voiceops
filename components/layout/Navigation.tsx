import { navigation } from "@/lib/navigation";
import NavItem from "./NavItem";

export default function Navigation() {
  return (
    <nav>
      {navigation.map((item) => (
        <NavItem
  key={item.href}
  label={item.label}
  href={item.href}
  icon={item.icon}
/>      ))}
    </nav>
  );
}