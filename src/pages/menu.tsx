import DashboardLayout from "../components/layout/dashboard_content/dashboard_layout";
import MenuList from "../components/layout/dashboard_content/features/menu";

function Customer() {
  return (
    <section className="max-w-[1500px] mx-auto  bg-grey-white py-1">
      <DashboardLayout>
        <MenuList />
      </DashboardLayout>
    </section>
  );
}

export default Customer;
