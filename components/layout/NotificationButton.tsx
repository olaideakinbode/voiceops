import { Bell } from "lucide-react";

export default function NotificationButton() {
  return (
    <button className="rounded-lg p-2 hover:bg-slate-100 transition-colors">
      <Bell size={20} className="text-slate-500" />
    </button>
  );
}