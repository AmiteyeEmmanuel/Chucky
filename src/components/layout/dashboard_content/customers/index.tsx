import CustomerMap from "./map/customer-map";
import List from "./customer/list";

function Customer() {
  return (
    <section className="flex flex-wrap gap-4 transition-all mt-6 w-full ">
      <div className="xl:w-[68%] w-full">
        <CustomerMap />
      </div>
      <div className="xl:w-[30%] w-full">
        <List />
      </div>
    </section>
  );
}

export default Customer;
