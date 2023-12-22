import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Loanees from "./pages/Loanees";
import AppLayout from "./ui/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/loanees" element={<Loanees />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
