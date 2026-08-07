import DateRange from "./DateRange";
import FilterButton from "./FilterButton";
import NotificationButton from "./NotificationButton";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
  <div className="flex items-center justify-between px-8 py-4">

    <div>
      <h1 className="text-xl font-semibold text-slate-900">
        Operations Command Center
      </h1>

      <p className="mt-1 text-sm text-slate-500">
        Real-time overview of your AI voice operations
      </p>
    </div>

    <div className="flex items-center gap-4">
      <DateRange />
      <FilterButton />
      <NotificationButton />
      <Avatar />
  
      {/* your existing DateRange */}
      {/* your existing FilterButton */}
      {/* your existing NotificationButton */}
      {/* your existing Avatar */}
    </div>

  </div>
</header>
  );
}

  