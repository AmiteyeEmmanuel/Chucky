import DashboardLayout from "../components/layout/dashboard_content/dashboard_layout";
import CustomerList from "../components/layout/dashboard_content/features/customers/customer_list";

function Customer() {
  return (
    <DashboardLayout>
       <CustomerList />
    </DashboardLayout>
  );
}

export default Customer;
