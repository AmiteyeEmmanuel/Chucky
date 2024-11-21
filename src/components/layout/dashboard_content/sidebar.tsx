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

  return (
    <div
      className={`flex flex-col  h-full md:h-[1150px] justify-between px-5 bg-white pt-8 transform transition-transform duration-300 ${
        menuCollapsed ? "-translate-x-full" : "translate-x-0"
      } fixed z-40 top-0 left-0 w-[271px] md:relative md:translate-x-0 md:block`}
    >
      {/* Sidebar Content */}
      <div>
        {/* Dashboard logo */}
        <div className="mb-2 text-center flex gap-4">
          <Link to="/">
            <img
              src={Logo}
              className="w-14 h-14 bg-[#6C5DD3] relative px-2 rounded-br-3xl rounded-tl-3xl"
              alt="Logo"
            />
          </Link>
           <div className="text-justify relative bottom-2">
              <h1 className="text-[30px] font-custom font-[800] text-[#2D2D2D]"> Chucky </h1>
              <p className="font-custom font-[600] text-[14px] leading-[17.86px] text-[#2D2d2D]"> Admin Dashboard</p>
           </div>
        </div>

        {/* Menu Items */}
        <div className="mt-20">
          {Menu.map((menu) => {
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
                }`}
                onMouseEnter={() => setHoveredMenu(menu.path)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <a
                  href={menu.path}
                  className={`w-6 cursor-pointer ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  <img
                    src={
                      isActive || hoveredMenu === menu.path
                        ? menu.activeIcon
                        : menu.icon
                    }
                    alt={menu.name}
                  />
                </a>
                {!menuCollapsed && (
                  <a
                    className={`cursor-pointer ${
                      isActive ? "text-white py-1 rounded-xl" : ""
                    }`}
                    href={menu.path}
                  >
                    {menu.name}
                  </a>
                )}
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
      </div>

      {/* Progress Bar */}
      <div className="lg:block hidden">
        <CircularProgress />
      </div>
    </div>
  );
}

export default Sidebar;

