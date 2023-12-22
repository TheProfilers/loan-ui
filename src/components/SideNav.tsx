import { BsHouseDoor } from "react-icons/bs";
import { NavLink } from "react-router-dom";
export default function SideNav() {
    const routes =[
        {
            label: "Home",
            path: "/",
            icon: <BsHouseDoor />
        },
        {
            label: "Loanees",
            path: "/loanees",
            icon: <BsHouseDoor />
        }
    ]
  return (
    <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      {
        routes.map((route, index) => (
            <li key={index} ><NavLink to={route.path} className="flex space-x-2" >
                <span>{route.icon}</span>
                <span>{route.label}</span>
                </NavLink></li>
        ))
      }
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
  )
}
