type NavItemProps = {
  label: string;
};

export default function NavItem({ label }: NavItemProps) {
  return (
    <div className="px-4 py-2">
      {label}
    </div>
  );
}