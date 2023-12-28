import { useEffect } from "react";
import { BsJustify } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function TopNav() {
  const {storedUser,logout} = useAuth();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!storedUser) navigate('/login')
  },[storedUser])
const handleLogout = () => {
    logout();
    
}
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
    <label htmlFor="my-drawer-2" className="cursor-pointer font-bold text-2xl drawer-button lg:hidden"><BsJustify /></label>
      <a className="btn btn-ghost text-xl">Fare Loans</a>
    </div>
    <div className="flex-none gap-2">
      
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          
          <li onClick={handleLogout} ><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}
