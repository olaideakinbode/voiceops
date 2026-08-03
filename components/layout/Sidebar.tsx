import FooterNavigation from "./FooterNavigation";
import Brand from "./Brand";
import Navigation from "./Navigation";
import UserProfile from "./UserProfile";

export default function Sidebar() {
  return (
    <aside className="w-56 bg-slate-950 text-white flex flex-col border-r border-slate-800">

      <div className="px-6 pt-8">
        <Brand />
      </div>

      <div className="flex-1 px-3 mt-8">
        <Navigation />
      </div>

      <div className="px-3 py-4 border-t border-slate-800">
        <FooterNavigation />
      </div>

      <div className="border-t border-slate-800 p-4">
        <UserProfile />
      </div>

    </aside>
  );
}