import React from "react";

interface DropdownListProps {
  items: { name: string }[];
  isVisible: boolean;
  width: string;
}

const DropdownList: React.FC<DropdownListProps> = ({ items, isVisible, width }) => {
  return (
    <div
      className={`relative -mb-[30px] py-2 overflow-hidden transition-all duration-300  ${
        isVisible ? "max-h-[500px]" : "max-h-0"
      } `}
      style={{ width }}
    >
      {items.map((item, index) => (
        <a
          key={index}
          className="block px-2 py-2 relative bottom-4 cursor-pointer  text-white"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default DropdownList;
