import { useSelector } from "react-redux";
import { Card, CardContent } from "../../../../ui/card";
import { RootState } from "../../../../../redux/store";

function List() {
  const customers = useSelector(
    (state: RootState) => state.customers.customers
  );

  return (
    <Card className="flex flex-col h-[60vh]">
      {/* Header Section */}
      <section className="flex justify-between gap-2 text-black px-6 py-3">
        <div className="flex flex-col">
          <p className="font-[700] text-[18px] leading-[24px] text-off-black">
            Customers List
          </p>
        </div>
      </section>

      {/* Scrollable Content */}
      <div className="flex-grow overflow-y-auto overflow-x-hidden md:px-4 px-0 w-full">
        <CardContent className="pb-0 h-auto">
          {customers.map((customer) => (
            <div key={customer.id} className="flex w-full gap-4 relative">
              <div className="py-[6px]">
                {customer.image && (
                  <div>
                    <img
                      src={customer.image}
                      alt={customer.name}
                      className="w-[40px] h-[40px] rounded-full block"
                    />
                  </div>
                )}
              </div>
              <div className="py-1">
                <p className="text-[14px] font-[700] leading-[20px] text-[#1E293B]">
                  {customer.name}
                </p>
                <p className="text-[14px] font-[400] leading-[20px] text-[#64748B] ">{customer.email}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </div>
    </Card>
  );
}

export default List;
