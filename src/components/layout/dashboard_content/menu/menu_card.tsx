import { useEffect, useState } from "react";
import { Card } from "../../../ui/card";
// import MenuContent from "./menu_content/main_content";

import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { RootState } from "../../../../redux/store";

function MenuCard() {
  const menus = useSelector((state: RootState) => state.menu.menus);
  const menus1 = useSelector((state: RootState) => state.menu1.menus);
  const menus2 = useSelector((state: RootState) => state.menu2.menus);

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1280) setSlidesPerView(3.93); // Desktop large
      else if (width >= 1024) setSlidesPerView(3); // Desktop
      else if (width >= 768) setSlidesPerView(2); // Tablet
      else setSlidesPerView(1); // Mobile
    };

    handleResize(); // Run on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [toggle, setToggle] = useState<string>("all");
  return (
    <Card className="py-8 px-4">
      {/* Header Section */}
      <section className="flex justify-between gap-2 text-black px-8 mb-1 border-b overflow-scroll">
        <div className="flex flex-col">
          <p className="font-[700] text-[18px] leading-[24px] text-off-black">
            Menu
          </p>
        </div>

        <div className="flex gap-5 text-base font-medium text-[#5F6D7E]">
          <button
            className={`py-2 cursor-pointer leading-[22px] font-[600] text-[15px]  ${
              toggle === "all"
                ? "bg-white border-b-2 border-[#6C5DD3] text-[#6C5DD3]"
                : ""
            }`}
            onClick={() => setToggle("all")}
          >
            All Category
          </button>

          <button
            className={`py-2 cursor-pointer leading-[22px] font-[600]  text-[15px] ${
              toggle === "Breakfast"
                ? "bg-white border-b-2 border-[#6C5DD3] text-[#6C5DD3]"
                : ""
            }`}
            onClick={() => setToggle("Breakfast")}
          >
            Breakfast
          </button>

          <button
            className={`py-2 cursor-pointer  leading-[22px] font-[600] text-[15px] ${
              toggle === "Lunch"
                ? "bg-white border-b-2 border-[#6C5DD3] text-[#6C5DD3]"
                : ""
            }`}
            onClick={() => setToggle("Lunch")}
          >
            Lunch
          </button>

          <button
            className={`py-2 cursor-pointer leading-[22px] font-[600]  text-[15px] ${
              toggle === "Dinner"
                ? "bg-white border-b-2 border-[#6C5DD3] text-[#6C5DD3]"
                : ""
            }`}
            onClick={() => setToggle("Dinner")}
          >
            Dinner
          </button>
        </div>
      </section>
      <div className="mt-4">
        <div className="pb-0 h-auto">
          <div className="lg:flex block gap-4 transition-all w-full ">
            <Swiper
              navigation
              spaceBetween={20}
              slidesPerView={1}
              className="lg:w-[62%] w-full lg:pb-0 mb-4"
            >
              {toggle === "all" &&
                menus.map((menu) => (
                  <SwiperSlide key={menu.id}>
                    {menu.image && (
                      <div>
                        <img
                          src={menu.image}
                          alt={menu.name}
                          className="w-full h-[250px] rounded-lg"
                        />
                      </div>
                    )}
                       <div className="relative mb-[-73px] md:w-[95%] w-[90%] mx-4 px-4 py-4 bg-white opacity-80 lg:h-[79px] h-[79px] rounded-[6px] border bottom-[6rem] flex justify-between">
                      <div>
                        <p className="text-[14px] w-auto font-[700] leading-[20px] text-[#1E293B]">
                          {menu.name}
                        </p>
                        <p className="text-[14px] font-[400] leading-[20px] text-[#64748B] ">
                          {menu.served}
                        </p>
                      </div>
                      <div className=" font-[500] text-[14px] leading-[21px] text-[#1E293B]">
                        {menu.price}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
              navigation
              spaceBetween={20}
              slidesPerView={1}
              className="lg:w-[35%] w-full"
            >
              {toggle === "all" &&
                menus1.map((menu1) => (
                  <SwiperSlide key={menu1.id}>
                    {menu1.image && (
                      <div>
                        <img
                          src={menu1.image}
                          alt={menu1.name}
                          className="w-full h-[250px] rounded-lg"
                        />
                      </div>
                    )}
                    <div className="relative mb-[-73px] md:w-[93%] w-[90%] mx-4 px-4 py-4 bg-white opacity-80 lg:h-[79px] h-[79px] rounded-[6px] border bottom-[6rem] flex justify-between">
                      <div>
                        <p className="text-[14px] w-auto font-[700] leading-[20px] text-[#1E293B]">
                          {menu1.name}
                        </p>
                        <p className="text-[14px] font-[400] leading-[20px] text-[#64748B] ">
                          {menu1.served}
                        </p>
                      </div>
                      <div className=" font-[500] text-[14px] leading-[21px] text-[#1E293B]">
                        {menu1.price}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>

        {/* // menu 2 */}
        <Swiper
          navigation
          spaceBetween={20}
          slidesPerView={slidesPerView}
          className="w-full mt-5 swiper-container"
        >
          {menus2.map((menu2) => (
            <SwiperSlide key={menu2.id}>
              {menu2.image && (
                <div>
                  <img
                    src={menu2.image}
                    alt={menu2.name}
                    className="w-full h-[230px] rounded-lg"
                  />
                </div>
              )}
              <div className="relative mb-[-73px] w-[90%] mx-4 px-4 py-4 bg-white opacity-80 lg:h-[79px] h-[79px] rounded-[6px] border bottom-[6rem] flex justify-between">
                <div>
                  <p className="text-[14px] w-auto font-[700] leading-[20px] text-[#1E293B]">
                    {menu2.name}
                  </p>
                  <p className="text-[14px] font-[400] leading-[20px] text-[#64748B] ">
                    {menu2.served}
                  </p>
                </div>
                <div className=" font-[500] text-[14px] leading-[21px] text-[#1E293B]">
                  {menu2.price}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Card>
  );
}

export default MenuCard;
