import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Loanees from "./pages/Loanees";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ShopAgents from "./pages/ShopAgents";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime:0,
      },
    },
  })
  return (
   
    <AuthProvider>
       <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }>
          <Route path="/" element={<Home />} />
          <Route path="/loanees" element={<Loanees />} />
          <Route path="/agents" element={<ShopAgents/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<div>404</div>} />

      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    </AuthProvider>
  );
}
