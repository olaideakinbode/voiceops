import NavItem from "./NavItem";
export default function Navigation() {
  return (
    <nav>
        <NavItem label="Command Center" />
        <NavItem label="Conversations" />
        <NavItem label="Alerts" />
        <NavItem label="Reports" />
    </nav>
  );
}