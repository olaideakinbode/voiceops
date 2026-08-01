import Brand from "./Brand";
import Navigation from "./Navigation";
import UserProfile from "./UserProfile";

export default function Sidebar() {
  return (
    <aside className="flex h-full w-[264px] flex-col border-r bg-slate-900 text-white">

      <Brand />

      {/* Navigation */}
      <Navigation />

      {/* Push footer to the bottom */}
      <div className="flex-1" />

      {/* User Profile */}
      <UserProfile />
    </aside>
  );
}