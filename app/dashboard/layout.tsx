export default function RootLayout({
  children,
  create,
  todos,
}: Readonly<{
  children: React.ReactNode;
  create: React.ReactNode;
  todos: React.ReactNode;
}>) {
  return (
    <>
      <div className="">{children}</div>
      <div className="flex gap-4">
        <div className="w-2/3">{todos}</div>
        <div className="w-1/3">{create}</div>
      </div>
    </>
  );
}