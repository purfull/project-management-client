import React from "react"
import SideNavBar from "./SideNavBar.tsx"
import TopNavBar from "./TopNavBar.tsx"

const DashboardScreen = () => {
    return(
        <div style={{display: "flex",width: "100%",height: '100vh', backgroundColor: '#F7F7F9'}}>
            <SideNavBar/>
            <TopNavBar/>
        </div>
    )
}

export default DashboardScreen;