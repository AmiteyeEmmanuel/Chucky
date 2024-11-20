import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { PenIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { deleteMenu2 } from "../../../../../redux/menu/menuSlice";
import MenuModal2 from "../../../../../utils/menu_modal/modal2";

export default function List2() {
  const menus = useSelector((state: RootState) => state.menu2.menus);

  const [currentPage, setCurrentPage] = useState(1);
  const menuPerPage = 7;

  // Pagination Logic
  const totalPages = Math.ceil(menus.length / menuPerPage);
  const startIndex = (currentPage - 1) * menuPerPage;
  const endIndex = startIndex + menuPerPage;
  const currentMenu = menus.slice(startIndex, endIndex);
  const dispatch = useDispatch();

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleDelete = (id: any) => {
    dispatch(deleteMenu2({ id }));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className="flex gap-4 overflow-scroll">
        <div className="mb-6">
          <button
            onClick={isModalOpen ? closeModal : openModal}
            className="bg-purple text-white px-4 py-3 rounded-md"
          >
            Create +
          </button>
          <MenuModal2 isOpen={isModalOpen} closeModal={closeModal} />
        </div>
      </div>
      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-lg mt-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Served
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentMenu.map((menu) => (
              <tr key={menu.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  {menu.image && (
                    <img
                      src={menu.image}
                      alt={menu.name}
                      className="w-10 h-10 rounded-full"
                    />
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {menu.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {menu.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {menu.served}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {menu.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex gap-3 justify-end">
                    <Link to={`/customers/edit/${menu.id}`} title="Edit">
                      <PenIcon className="w-5 h-5 text-blue-500 hover:text-blue-700" />
                    </Link>
                    <button
                      onClick={() => handleDelete(menu.id)}
                      title="Delete"
                      className="text-red hover:text-red"
                    >
                      <Trash2Icon className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
}
