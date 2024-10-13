import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Layout = (props: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="layout">
      <Header toggleSidebar={toggleSidebar} />

      <div className="wrapper">
        <Sidebar
          className={isSidebarOpen ? "" : "hidden"}
          closeSidebar={closeSidebar}
        />

        <div className="content-wrapper">{props.children}</div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
