import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />

        <Content>
          {children}
        </Content>
      </div>
    </div>
  );
}