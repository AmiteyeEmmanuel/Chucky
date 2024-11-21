import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {  updateMenu2 } from "../../../redux/menu/menuSlice";

interface UpdateModalProps {
  isOpen: boolean;
  closeModal: () => void;
  menu: {
    id: any;
    name: string;
    price: string;
    served: string;
    category: string;
    image?: string | null;
  };
}

export default function MenuUpdate2({
  isOpen,
  closeModal,
  menu,
}: UpdateModalProps) {
  
  const { id, name, price, served, category, image } = menu;

  const [Name, setName] = useState(name || "");
  const [Price, setPrice] = useState(price || "");
  const [Served, setServed] = useState(served || "");
  const [Category, setCategory] = useState(category || "");
  const [Image, setImage] = useState(image || null);

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

    dispatch(
      updateMenu2({
        id,
        name: Name,
        price: Price,
        served: Served,
        category: Category,
        image: Image,
      })
    );

    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[90%] max-w-md p-6 rounded-lg shadow-lg relative">
        <h2 className="text-lg font-semibold text-gray-800 text-center py-4">
          Update Menu
        </h2>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            className="border border-grey py-2 rounded-md px-2"
          />
          <input
            type="text"
            placeholder="Price"
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-grey py-2 rounded-md px-2"
          />
          <input
            type="text"
            placeholder="Served"
            value={Served}
            onChange={(e) => setServed(e.target.value)}
            className="border border-grey py-2 rounded-md px-2"
          />
          <input
            type="text"
            placeholder="Category"
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-grey py-2 rounded-md px-2"
          />
          <div className="flex flex-col">
            {Image && (
              <img
                src={
                  typeof Image === "string" ? Image : URL.createObjectURL(Image)
                }
                alt="Preview"
                className="w-20 h-20 object-cover rounded-full mb-3"
              />
            )}
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          <div className="mt-6 flex justify-end gap-2">
            <button
              type="button"
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
      </div>
    </div>
  );
}
