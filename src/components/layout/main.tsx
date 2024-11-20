import Charts from "./dashboard_content/charts"
import Customer from "./dashboard_content/customers"
import DashboardCard from "./dashboard_content/dashboard_card"
import Menu from "./dashboard_content/menu/menu"


function DashboardContent () {
  return (
      <div className="py-8">
          <DashboardCard/>
          <Charts/>
          <Customer />
          <Menu/>
      </div>
  )
}

export default DashboardContent
