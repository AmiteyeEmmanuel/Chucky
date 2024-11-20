import React, { useState } from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

import {
  Card,
  CardContent,
  CardFooter,
} from "../../../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../ui/chart";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { GreenChart, PurpleChart } from "../../../../assets";
import { PieModal } from "../../../../utils/chart_modal/pie_modal";

const chartData = [
  { name: "Daily customer", customers: 22, fill: "var(--color-chrome)" },
  { name: "customer", customers: 25, fill: "var(--color-safari)" },
  { name: "Weekly new customer", customers: 35, fill: "var(--color-firefox)" },
];

const desktopData = [
    { month: "january", total: 82.3, fill: "var(--color-january)" },
  ]

const chartConfig = {
  customers: {
    label: "Customers",
  },
  chrome: {
    label: "Chrome",
    color: "hsla(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  january: {
    label: "January",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function PieGraph() {
  const totalCustomers = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.customers, 0);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Card className="flex flex-col">
      <section className="flex justify-between gap-2 text-black border-b p-6 mb-4">
        <div className="flex flex-col">
          <p className=" font-[800] text-[18px] leading-[24px]"> Customers </p>
          <p className="font-[400] text-[12px] leading-[16px] text-grey">
            Customers that buy our products
          </p>
        </div>
        <div className="">
          <button
            className="cursor-pointer"
            onClick={isModalOpen ? closeModal : openModal}
          >
            <EllipsisHorizontalIcon className="h-6 w-6 transition-transform duration-300 cursor-pointer" />
          </button>
            <div className="relative right-32">
            <PieModal isOpen={isModalOpen} closeModal={closeModal} />
            </div>
        </div>
      </section>
      <div className="md:flex gap-6 transition-all mt-10 px-4 w-full mb-10">
        <CardContent className="flex pb-0 h-[220px] md:w-[50%] w-full  md:mx-0  mx-auto relative">
          <ChartContainer
            config={chartConfig}
            className="aspect-square max-h-[250px]"
          >
            <PieChart className="shadow-md rounded-full">
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
                <Pie data={desktopData} dataKey="total" outerRadius={53} />
              <Pie
                data={chartData}
                dataKey="customers"
                nameKey="name"
                innerRadius={65}
                outerRadius={90}
                strokeWidth={5}
                activeIndex={0}
                activeShape={({
                  outerRadius = 0,
                  ...props 
                }: PieSectorDataItem) => (
                  <Sector {...props} outerRadius={outerRadius + 10} />
                )}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="text-[18px] font-[700] leading-[24px]"
                            fill="#0049C6"
                          >
                            {totalCustomers.toLocaleString()}.3%
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="text-muted text-[12px] font-[400] leading-[20px]"
                            fill="#0049C6"
                          >
                            Total
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>

        <div className="flex flex-col mt-6 w-[25%] justify-center">
             <div className="flex gap-4 pb-8">
                <img src={PurpleChart} alt="PurpleChart" />
                 <div className="w-full">
                     <p className=" font-[700] leading-[20px] text-[14px]"> + 18% </p>
                     <p className="font-[400] text-[12px] leading-[16px] text-grey w-[91px]">Daily customers</p>
                 </div>
             </div>

             <div className="flex gap-4">
                <img src={GreenChart} alt="PurpleChart" />
                 <div>
                     <p className=" font-[700] leading-[20px] text-[14px]"> + 14% </p>
                     <p className="font-[400] text-[12px] leading-[16px] text-grey w-[131px]">Weekly new customers</p>
                 </div>
             </div>
        </div>
      </div>

      <CardFooter className="flex gap-2 justify-center">
        <div className="flex gap-2">
          <div className="bg-custom-gradient4 w-[12px] h-[12px] rounded-full relative top-[2px]" />
          <p className="text-grey text-[12px] leading-[16px] align-middle font-[600]">
            Current customers
          </p>
        </div>

        <div className="flex gap-2">
          <div className="bg-custom-gradient5 w-[12px] h-[12px] rounded-full relative top-[2px]" />
          <p className="text-grey text-[12px] leading-[14.52px] align-middle font-[600]">
            New customers
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
