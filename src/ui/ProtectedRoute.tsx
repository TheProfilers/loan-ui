import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const { storedUser } = useAuth();
  console.log(storedUser);
  useEffect(() => {
    if (!storedUser) navigate("/login");
  }, [storedUser, navigate]);
  return storedUser ? children : null;
}
