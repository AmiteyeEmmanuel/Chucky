import { useState } from "react";
import List from "./list";
import List1 from "./list1";
import List2 from "./list2";

export default function MenuList() {
  const [currentComponent, setCurrentComponent] = useState("List"); // Track the current component

  // Function to render the selected component
  const renderComponent = () => {
    switch (currentComponent) {
      case "List":
        return <List />;
      case "List1":
        return <List1 />;
      case "List2":
        return <List2 />;
      default:
        return <List />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Render the current component */}
      <div>{renderComponent()}</div>

      {/* Buttons to switch between components */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setCurrentComponent("List")}
          className={`px-4 py-2 rounded-md ${
            currentComponent === "List"
              ? "bg-purple text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Show First Menu
        </button>
        <button
          onClick={() => setCurrentComponent("List1")}
          className={`px-4 py-2 rounded-md ${
            currentComponent === "List1"
              ? "bg-purple text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Show Second Menu
        </button>
        <button
          onClick={() => setCurrentComponent("List2")}
          className={`px-4 py-2 rounded-md ${
            currentComponent === "List2"
              ? "bg-purple text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Show Third Menu
        </button>
      </div>
    </div>
  );
}
