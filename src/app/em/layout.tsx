import MainNavbar from "@/components/navbar/main-navbar";

export default function EmLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="overflow-hidden scroll-smooth bg-gradient-to-tl from-blue-900 via-teal-900 to-sky-900 bg-fixed">
      <MainNavbar />
      {children}
    </div>
  );
}
