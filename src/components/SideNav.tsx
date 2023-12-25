import { BsBriefcase, BsFillPeopleFill, BsHouseDoor } from "react-icons/bs";
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
            icon: <BsBriefcase />
        },
        {
          label: "Agents",
          path: "/agents",
          icon: <BsFillPeopleFill />
      }
    ]
  return (
    <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      {
        routes.map((route, index) => (
            <li key={index} ><NavLink to={route.path} className="flex space-x-2 my-1" >
                <span className="text-xl">{route.icon}</span>
                <span className="text-lg">{route.label}</span>
                </NavLink></li>
        ))
      }
     
    </ul>
  
  </div>
  )
}
