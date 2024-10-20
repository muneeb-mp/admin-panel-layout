import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <SidebarProvider>
    <div className="flex flex-col min-h-dvh">
      <Header />
      <div className="flex-grow flex">
        {/* <AppSidebar /> */}
        <main className="flex-grow bg-gray-100">{children}</main>
      </div>
      <Footer />
    </div>
    // </SidebarProvider>
  );
};

export default Layout;
