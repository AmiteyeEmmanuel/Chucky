import React from 'react'
import UpdateModal from '../utils/customer_modal/update_modal'
import DashboardLayout from '../components/layout/dashboard_content/dashboard_layout'

function UpdateCustomerList() {
  return (
    <DashboardLayout>
         <UpdateModal />
    </DashboardLayout>
  )
}

export default UpdateCustomerList