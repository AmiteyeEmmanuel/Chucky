import DashboardLayout from "../components/layout/dashboard_content/dashboard_layout";
import CustomerList from "../components/layout/dashboard_content/features/customers/customer_list";

function Customer() {
  return (
    <section className="max-w-[1500px] mx-auto  bg-grey-white py-1">
      <DashboardLayout>
        <CustomerList />
      </DashboardLayout>
    </section>
  );
}

export default Customer;
