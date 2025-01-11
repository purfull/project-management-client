import React from "react"
import SideNavBar from "./SideNavBar.tsx"
import TopNavBar from "./TopNavBar.tsx"
import PrjtMngmntTable from "./EmployeeTable.tsx"

const DashboardScreen = () => {
    return (
        <div style={{ display: "flex", width: "100%", backgroundColor: '#F7F7F9' }}>
            <SideNavBar />
            <div style={{ width: "94%" }}>
                <TopNavBar />
                <PrjtMngmntTable />
            </div>

        </div>


    )
}

export default DashboardScreen;