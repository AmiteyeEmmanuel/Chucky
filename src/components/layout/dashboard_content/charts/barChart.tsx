import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import {
  BarChart as BarGraph,
  XAxis,
  ResponsiveContainer,
  Bar,
} from "recharts";
import { Card } from "../../../ui/card";
import { useState } from "react";
import { Modal } from "../../../../utils/chart_modal/bar_modal";

const revenue = [
  {
    month: "Jan",
    total: 180,
    fill: ["#E6E8F0"],
  },
  {
    month: "Feb",
    total: 350,
    fill: "#E6E8F0",
  },
  {
    month: "Mar",
    total: 280,
    fill: "#33C600",
  },
  {
    month: "Apr",
    total: 200,
    fill: "#E6E8F0",
  },
  {
    month: "May",
    total: 250,
    fill: "#E6E8F0",
  },
  {
    month: "Jun",
    total: 400,
    fill: "#A833FF",
  },
  {
    month: "Jul",
    total: 230,
    fill: "#E6E8F0",
  },
  {
    month: "Aug",
    total: 360,
    fill: "#E6E8F0",
  },
  {
    month: "Sep",
    total: 80,
    fill: "#E6E8F0",
  },
  {
    month: "Oct",
    total: 300,
    fill: "#FF4CE2",
  },
  {
    month: "Nov",
    total: 190,
    fill: "#E6E8F0",
  },
  {
    month: "Dec",
    total: 250,
    fill: "#E6E8F0",
  },
];

export const BarChart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <Card className="flex flex-col">
      <section className="flex justify-between gap-2 text-black border-b p-8  mb-4">
        <p className=" font-[800] text-[18px] leading-[24px] font-sans"> Revenue </p>
        <div className="cursor-pointer">
          <button
            className="cursor-pointer"
            onClick={isModalOpen ? closeModal : openModal}
          >
            <EllipsisHorizontalIcon className="h-6 w-6 transition-transform duration-300 cursor-pointer" />
          </button>
            <div className="relative right-32">
            <Modal isOpen={isModalOpen} closeModal={closeModal} />
            </div>
        </div>
      </section>
      <div className="p-8">
        <h1 className=" leading-[32px] text-[32px] font-[700] pb-20">
          {" "}
          $112,340
        </h1>
        <ResponsiveContainer width={"100%"} height={200}>
          <BarGraph
            data={revenue}
            margin={{ top: 0, bottom: 15, right: 0, left: 2 }}
            barCategoryGap="16%"
          >
            <XAxis
              dataKey={"month"}
              tickLine={false}
              axisLine={true}
              stroke={"fill"}
              fontSize={14}
              padding={{ left: 1, right: 0 }}
            ></XAxis>
            <Bar
              dataKey={"total"}
              radius={[5, 5, 5, 5]}
              stroke="#E6E8F0"
              fill="#E6E8F0"
            />
          </BarGraph>
        </ResponsiveContainer>
        <div className="md:flex md:flex-row flex flex-col gap-5">
          <div className="flex gap-2">
            <div className="bg-custom-gradient1 w-[12px] h-[12px] rounded relative top-[2px]" />
            <p className="text-grey text-[12px] leading-[16px] align-middle font-normal">
              Pending (10%)
            </p>
          </div>

          <div className="flex gap-2">
            <div className="bg-custom-gradient2 w-[12px] h-[12px] rounded relative top-[2px]" />
            <p className="text-grey text-[12px] leading-[16px] align-middle font-normal">
              Income
            </p>
          </div>

          <div className="flex gap-2">
            <div className="bg-custom-gradient3 w-[12px] h-[12px] rounded relative top-[2px]" />
            <p className="text-grey text-[12px] leading-[16px] align-middle font-normal">
              Expance
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
