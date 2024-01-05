import { useAuth } from "../../context/AuthContext";
import BackButton from "../../ui/BackButton";
import LoaneesDisplay from "./LoaneesDisplay";
import NewLoaneeModal from "./NewLoaneeModal";

export default function LoaneesLayout() {
  const {storedUser} = useAuth();
  return (
    
    <>
    <div className="flex justify-between items-start">
    <BackButton />
    {storedUser?.role === 'admin' && <NewLoaneeModal />}
    </div>
    <div className="mt-2">
    <LoaneesDisplay />
    </div>
    </>
  )
}
