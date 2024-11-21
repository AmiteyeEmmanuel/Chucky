import CustomerMap from "./map/customer-map";
import List from "./customer/list";

function Customer() {
  return (
    <section className="flex flex-wrap gap-4 transition-all mt-10 w-full ">
      <div className="lg:w-[68%] w-full">
        <CustomerMap />
      </div>
      <div className="lg:w-[30%] w-full">
        <List />
      </div>
    </section>
  );
}

export default Customer;
