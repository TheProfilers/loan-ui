import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({children}:{children:ReactNode}) {
    const navigate = useNavigate();
    const user = localStorage.getItem('user')
    useEffect(()=>{
        if(!user) navigate('/login')
    },[user,navigate])
  return user ? children : null;
}
