import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PenIcon, Trash2Icon } from "lucide-react";
import CreateModal from "../../../../../utils/customer_modal/create_modal";
import { deleteCustomer } from "../../../../../redux/customer/customerSlice";
import UpdateModal from "../../../../../utils/customer_modal/update_modal";

const CustomerList = () => {
  const customers = useSelector((state: any) => state.customers.customers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const openModal = (customer: any) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCustomer(null);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 5;

  // Pagination Logic
  const totalPages = Math.ceil(customers.length / customersPerPage);
  const startIndex = (currentPage - 1) * customersPerPage;
  const endIndex = startIndex + customersPerPage;
  const currentCustomers = customers.slice(startIndex, endIndex);
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
    dispatch(deleteCustomer({ id: id }));
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div>
        <button
          onClick={isModalOpen ? closeModal : openModal}
          className="cursor-pointer bg-purple text-white px-4 py-3 rounded-md relative mb-6"
        >
          Create +
        </button>
        <div className="relative">
          <CreateModal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
      </div>
      <div className="overflow-x-auto shadow-md rounded-lg">
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
                Email
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentCustomers.map((customer: any) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  {customer.image && (
                    <div className="flex items-center">
                      <img
                        src={customer.image}
                        alt={customer.name}
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {customer.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{customer.email}</div>
                </td>
                <td className="px-8 py-4 text-right text-sm font-medium">
                  <div className="flex gap-3 justify-end">
                    <button onClick={() => openModal(customer)}>
                      <PenIcon className="w-5 h-5 text-blue-500 hover:text-blue-700" />
                    </button>
                    <button
                      className="text-red hover:text-red mr-3"
                      title="Delete"
                      onClick={() => handleDelete(customer.id)}
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

      {selectedCustomer && (
        <UpdateModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          customer={selectedCustomer}
        />
      )}

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
    </div>
  );
};

export default CustomerList;
