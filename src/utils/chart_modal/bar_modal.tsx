import { EyeIcon, Download, Trash2Icon } from "lucide-react";

export const Modal = ({ isOpen }: any) => {
  if (!isOpen) return null; 

  return (
    <div className="absolute flex items-center justify-center">
      <div className=" flex flex-col bg-white w-[150px]  px-4 py-4 rounded-md shadow-md border">
        <div className="mt-4 flex gap-3">
          <button className=" text-white rounded"> <EyeIcon className="text-grey h-5 w-5" /> </button>
          <p className="text-[14px] leading-[20px] font-norma;" > View</p>
        </div>

        <div className="mt-4 flex gap-3">
          <button className=" text-white rounded"> <Download className="text-grey h-5 w-5" /> </button>
          <p className="text-[14px] leading-[20px] font-norma;" > Export </p>
        </div>

        <div className="mt-4 flex gap-3">
          <button> <Trash2Icon className="h-5 w-5 text-red " /> </button>
          <p className="text-[14px] leading-[20px] font-normal text-red" > Remove</p>
        </div>
      </div>
    </div>
  );
};
