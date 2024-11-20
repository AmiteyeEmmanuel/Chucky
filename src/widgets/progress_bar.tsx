import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const CircularProgress: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const progressEndValue = 86;
  const speed = 50;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < progressEndValue) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col  w-full h-[230px] relative top-[254px] p-[18px] gap-[16px] rounded-[10px] bg-[#F8F9FB] shadow-md">
      {/* Circular Progress Container */}
      <div className="relative flex items-center justify-center w-[65px] h-[65px] gap-[10px]">
        {/* Circular Line Progress */}
        <div
          className="relative top-0 left-0 w-[50px] h-[50px] rounded-full"
          style={{
            background: `conic-gradient(
              #6C5DD3 ${progress * 3.6}deg,
              #ededed ${progress * 3.6}deg
            )`,
          }}
        ></div>

        {/* Inner Circle */}
        <div className="absolute flex items-center justify-center w-[40px] h-[40px] bg-white rounded-full">
          <span className="text-[13px] font-semibold text-[#6C5DD3]">
            {progress}%
          </span>
        </div>
      </div>

      {/* Subscription */}
      <div>
        <h3 className="font-[600] text-[15px] leading-[22px] text-[#272D37]">
          {" "}
          Subscription Plan{" "}
        </h3>
        <p className="font-[400] leading-[20px] mt-2 text-[15px] text-[#5F6D7E]">
          Your Subscription plan will expire soon please upgrade!
        </p>

        <p className=" mt-1 font-[600] text-[14px] leading-[20px] text-[#6C5DD3]">
          Upgrade
        </p>
      </div>

      <button className="absolute top-4 right-4 text-[#5F6D7E] hover:text-gray-800">
         <X className="w-4 h-4"/>
      </button>
    </div>
  );
};

export default CircularProgress;
