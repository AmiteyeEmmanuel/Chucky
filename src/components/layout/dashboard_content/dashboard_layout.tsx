import { ReactNode, useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";

interface DashboardLayoutProps {
  children: ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  const [menuCollapsed, setMenuCollapsed] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMenuCollapsed(true);
      } else {
        setMenuCollapsed(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex h-auto bg-grey-white shadow-lg">
      {/* Sidebar */}
      <div
        className={` ${
          menuCollapsed ? "mx-2" : ""
        } transition-all ease-in-out duration-300`}
      >
        {/* Sidebar content */}
        <Sidebar menuCollapsed={menuCollapsed} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-[100%] overflow-hidden">
        <div>
          <Header />
        </div>
        {/* Body */}
        <div className="flex-grow overflow-hidden p-4">
          {/* Body content */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
