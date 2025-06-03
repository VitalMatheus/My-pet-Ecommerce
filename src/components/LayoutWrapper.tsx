"use client";

import { usePathname } from "next/navigation";
import Header from "./Header/header";
import Footer from "./Footer/footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const isAuthPage = path === "/login" || path === "/signup";

  return (
    <>
      {!isAuthPage && <Header />}
      <div className="flex-grow">{children}</div>
      {!isAuthPage && <Footer />}
    </>
  );
}
