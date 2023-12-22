import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Loanees from "./pages/Loanees";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }>
          <Route path="/" element={<Home />} />
          <Route path="/loanees" element={<Loanees />} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<div>404</div>} />

      </Routes>
    </BrowserRouter>
  );
}
