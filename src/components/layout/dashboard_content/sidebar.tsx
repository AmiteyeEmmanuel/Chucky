import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Menu } from "../../../context/user_menu";
import { Logo } from "../../../assets";
import CircularProgress from "../../../widgets/progress_bar";

interface SidebarProps { 
  menuCollapsed: boolean;
}

function Sidebar({ menuCollapsed }: SidebarProps) {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const location = useLocation();

  const menuRendered = Menu;

  return (
    <div
      className={`flex flex-col w-[271px] h-[1150px] justify-between px-5 bg-white pt-8 ${menuCollapsed ? 'max-w-[100px]' : ''}`}>
      <div>
        {/* Dashboard logo */}
        <div className={`mb-2 ${menuCollapsed ? "text-center" : ""}`}>
          <div className="">
            <Link
              to="/"
              className={`cursor-pointer ${menuCollapsed ? "block" : ""}`}
            >
              <img
                src={Logo}
                className={`transition-all duration-300 w-full h-full ${
                  menuCollapsed ? "w-full h-full mx-auto" : "w-full h-full"
                }`}
              />
            </Link>
          </div>
        </div>

        <div className="mt-24">
          {menuRendered.map((menu) => {
            const isActive = location.pathname === menu.path;
            return (
              <div
                key={menu.path}
                className={`flex items-center mt-[40px] ml-[-0.5rem] text-black text-lg gap-4 py-3 px-6 ${
                  isActive
                    ? "bg-purple rounded-xl font-bold text-white"
                    : hoveredMenu === menu.path
                    ? "bg-purple text-white rounded-xl py-3 px-2"
                    : ""
                } ${menuCollapsed ? "" : ''}`}
                onMouseEnter={() => {
                  setHoveredMenu(menu.path);
                }}
                onMouseLeave={() => {
                  setHoveredMenu(null);
                }}
              >
                <a
                  href={menu.path}
                  className={`w-6 cursor-pointer text-black ${
                    isActive ? "text-white" : ""
                  }`}
                >
                  <img
                    className="fill-current text-white"
                    src={
                      isActive || hoveredMenu === menu.path
                        ? menu.activeIcon
                        : menu.icon
                    }
                    alt={menu.name}
                  />
                </a>
                {!menuCollapsed &&
                  <a
                    className={`cursor-pointer ${
                      isActive ? "text-white py-1 rounded-xl" : ""
                    }`}
                    href={menu.path}
                  >
                    {menu.name}
                  </a>
                }

                  {/* Icon2 (Optional) */}
                  {menu.icon2 && (
                  <button className="relative left-[60px] hidden md:block">
                    <img
                      src={menu.icon2}
                      alt={`${menu.name} icon`}
                      className="w-6 h-6"
                    />
                  </button>
                )}
                
              </div>

        
            );
          })}
        </div>

        <div className="lg:block hidden">
          <CircularProgress />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;