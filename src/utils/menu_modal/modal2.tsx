import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMenu2 } from "../../redux/menu/menuSlice";
import { v4 as uuid } from "uuid";

export default function MenuModal2({ isOpen, closeModal }: any) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [served, SetServed] = useState("");
  const [category, SetCategory] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.result) {
          setImage(reader.result.toString());
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !price || !served || !category) {
      alert("Please fill in all fields");
      return;
    }

    const newMenu = {
      id: uuid(), 
      name,
      price,
      served,
      category,
      image,
    };

    dispatch(addMenu2(newMenu));
    setName("");
    setPrice("");
    SetServed("");
    SetCategory("");
    setImage(null);

    closeModal(); 
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-grey bg-opacity-50">
      <div className="bg-white w-[90%] max-w-md p-6 rounded-lg shadow-lg relative">
        <h2 className="text-lg font-semibold text-gray-800 text-center py-4">
          {" "}
          Add New Menu{" "}
        </h2>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-grey py-2 rounded-md px-2"
          />
          <input
            type="string"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-grey py-2 rounded-md px-2"
          />

          <input
            type="text"
            placeholder="Served"
            value={served}
            onChange={(e) => SetServed(e.target.value)}
            className="border border-grey py-2 rounded-md px-2"
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => SetCategory(e.target.value)}
            className="border border-grey py-2 rounded-md px-2"
          />
          <input
            className=""
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {/* Footer Buttons */}
          <div className="mt-6 flex justify-end gap-2">
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple text-white rounded hover:bg-purple"
            >
              Confirm
            </button>
          </div>
        </form>

        {/* Close Modal Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
