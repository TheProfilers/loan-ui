import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import DownloadLoan from "./features/loans/DownloadLoan";
import AccountSettings from "./pages/AccountSettings";
import Home from "./pages/Home";
import LoanDetails from "./pages/LoanDetails";
import LoaneeDetails from "./pages/LoaneeDetails";
import Loanees from "./pages/Loanees";
import Loans from "./pages/Loans";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import ShopAgentDetails from "./pages/ShopAgentDetails";
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
          <Route path="/" element={<Loanees />} />
          <Route path="/home" element={<Home />} />
          
          <Route path="/agents" element={<ShopAgents/>} />
          <Route path="agents/:id" element={<ShopAgentDetails/>} />
          <Route path="loanees/:id" element={<LoaneeDetails/>} />
          <Route path="loans" element={<Loans/>} />
          <Route path="loans/:id" element={<LoanDetails/>} />
          <Route path="download/:id" element={<DownloadLoan/>} />
          <Route path="settings" element={<Settings/>} />
          <Route path="accounts" element={<AccountSettings/>} />
          
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
