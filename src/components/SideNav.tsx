import { BsBriefcase, BsFillBagCheckFill, BsFillPeopleFill, BsGear, BsHouseDoor } from "react-icons/bs";
import { FiCreditCard } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function SideNav() {
  const {storedUser} = useAuth();
 

  
    const routes =[
        {
            label: "Home",
            path: '/home',
            icon: <BsHouseDoor />,
            roles: ["admin"],
        },
        {
            label: "Borrowers",
            path: "/",
            icon: <BsBriefcase />
        },
        {
          label: "Agents",
          path: "/agents",
          icon: <BsFillPeopleFill />,
          //roles: ["admin"],
      },
      {
        label: "Loans",
        path: "/loans",
        icon: <BsFillBagCheckFill />
    },
    {
      label: "Stock",
      path: "/assign-stock",
      icon: <FiCreditCard />,
     // roles: ["admin"],
  },
      {
        label: "Settings",
        path: "/settings",
        icon: <BsGear />,
        roles: ["admin"],
    }
    ]
  return (
    <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      {/* {
        routes.map((route, index) => (
            <li key={index} ><NavLink to={route.path} className="flex space-x-2 my-1" >
                <span className="text-xl">{route.icon}</span>
                <span className="text-lg">{route.label}</span>
                </NavLink></li>
        ))
      } */}
      {routes.map(
          (route, index) =>
            (!route.roles || route.roles.includes(storedUser?.role!)) && (
              <li key={index}>
                <NavLink to={route.path} className="flex space-x-2 my-1">
                  <span className="text-xl">{route.icon}</span>
                  <span className="text-lg">{route.label}</span>
                </NavLink>
              </li>
            )
        )}
     
    </ul>
  
  </div>
  )
}
