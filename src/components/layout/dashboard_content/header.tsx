import { useEffect, useState } from "react";
import { avatar, searchIcon } from "../../../assets";
import { BellIcon, EnvelopeIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
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

  const toggleSidebar = () => {
    setMenuCollapsed((prev) => !prev);
  };
  return (
    <div className="bg-white text-black flex justify-between px-4 py-3 shadow-md">
      {/* Left Section */}
      <div className="flex flex-col w-full lg:w-[100%]">
        <h2 className=" lg:text-[24px] font-[700] leading-[31.2px] text-[#111827]">
          Hi, Taylor!
        </h2>
        <p className="lg:text-[14px] text-[#718096] leading-[22.4px] font-[400]">
          Let's check your store today.
        </p>
      </div>

      {/* Middle Section */}
      <div className=" hidden lg:flex items-center w-full lg:w-[60%] mt-3 lg:mt-0 gap-6">
        <div className="relative w-full max-w-[300px]">
          <input
            type="text"
            className="w-full h-10 pl-10 pr-4 border border-[#D9D9D9] rounded-lg text-sm outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Search..."
          />
          <span className="absolute left-3 top-2.5">
            <img
              src={searchIcon}
              alt="search_icon"
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </div>

        <div className="flex gap-2">
          <button className="p-2 text-[#111827] hover:text-purple">
            <EnvelopeIcon className="h-5 w-5" />
            <div className="relative bottom-[20px] left-3.5 w-2 h-2 mb-[-0.5rem] rounded-full bg-[#FD6A6A]" />
          </button>
          <button className="p-2 text-[#111827] hover:text-purple">
            <BellIcon className="h-5 w-5" />
            <div className="relative bottom-[20px] left-[0.65rem] w-2 h-2 mb-[-0.5rem] rounded-full bg-[#FD6A6A]" />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center w-full lg:w-[31%] lg:justify-end mt-3 lg:mt-0 cursor-pointer">
        <div className="flex items-center gap-4 border-l border-gray-200 pl-4">
          <img
            src={avatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="text-sm font-semibold block">Tynisha Obey</p>

          {/* Sidebar Toggle Button (visible on small screens) */}
          <button
            className=" p-2 text-black  rounded-md md:hidden"
            onClick={toggleSidebar}
          >
            {menuCollapsed ? <Bars3Icon className="w-6 h-6 text-red" />: <XMarkIcon className="w-6 h-6 text-red" />}
          </button>
        </div>
      </div>
    </div>
  );
}
