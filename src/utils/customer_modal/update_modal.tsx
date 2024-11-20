import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCustomer } from "../../redux/customer/customerSlice";

interface UpdateModalProps {
  isOpen: boolean;
  closeModal: () => void;
  customer: {
    id: any;
    name: string;
    email: string;
    image?: string | null;
  };
}

export default function UpdateModal({ isOpen, closeModal, customer }: UpdateModalProps) {
  const { id, name, email, image } = customer;

  const [cName, setCName] = useState(name);
  const [cEmail, setCEmail] = useState(email);
  const [cImage, setCImage] = useState(image || null);

  const dispatch = useDispatch();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.result) {
          setCImage(reader.result.toString());
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(
      updateCustomer({
        id,
        name: cName,
        email: cEmail,
        image: cImage,
      })
    );

    closeModal(); 
  };

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[90%] max-w-md p-6 rounded-lg shadow-lg relative">
        <h2 className="text-lg font-semibold text-gray-800 text-center py-4">
          Update Customer
        </h2>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={cName}
            onChange={(e) => setCName(e.target.value)}
            className="border border-grey py-2 rounded-md px-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={cEmail}
            onChange={(e) => setCEmail(e.target.value)}
            className="border border-grey py-2 rounded-md px-2"
          />
          <div className="flex flex-col">
            {cImage && (
              <img
                src={
                  typeof cImage === "string"
                    ? cImage
                    : URL.createObjectURL(cImage)
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
