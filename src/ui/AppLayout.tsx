import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";

export default function AppLayout() {
  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <TopNav/>

    <div className="px-4 pt-2">
    <Outlet/>
    </div>
  
  </div> 
 {/* side bar section */}
 <SideNav />
</div>
  )
}
