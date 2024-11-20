import DashboardContent from "../components/layout/main";
import DashboardLayout from "../components/layout/dashboard_content/dashboard_layout";

function Dashboard() {
  return (
    <section className="max-w-[1500px] mx-auto  bg-grey-white py-1">
      <DashboardLayout>
        <DashboardContent />
      </DashboardLayout>
    </section>
  );
}

export default Dashboard;
