import React from "react"
import SideNavBar from "./SideNavBar.tsx"
import TopNavBar from "./TopNavBar.tsx"

const DashboardScreen = () => {
    return(
        <div style={{display: "flex",width: "100%"}}>
            <SideNavBar/>
            <TopNavBar/>
        </div>
    )
}

export default DashboardScreen;