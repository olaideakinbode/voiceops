import {
  Home,
  MessageSquare,
  Bell,
  BarChart3,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    label: "Command Center",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "Conversations",
    href: "/conversations",
    icon: MessageSquare,
  },
  {
    label: "Alerts",
    href: "/alerts",
    icon: Bell,
  },
  {
    label: "Reports",
    href: "/reports",
    icon: BarChart3,
  },
];

export const footerNavigation = [
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];