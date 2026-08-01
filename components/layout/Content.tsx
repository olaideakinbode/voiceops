interface ContentProps {
  children: React.ReactNode;
}

export default function Content({
  children,
}: ContentProps) {
  return (
    <main className="flex-1 overflow-auto p-8">
      {children}
    </main>
  );
}