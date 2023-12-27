import { useAuth } from "../../context/AuthContext";
import BackButton from "../../ui/BackButton";
import LoaneesDisplay from "./LoaneesDisplay";
import NewLoanModal from "./NewLoanModal";

export default function LoaneesLayout() {
  const {storedUser} = useAuth();
  return (
    
    <>
    <div className="flex justify-between items-start">
    <BackButton />
    {storedUser?.role === 'admin' && <NewLoanModal />}
    </div>
    <div className="mt-2">
    <LoaneesDisplay />
    </div>
    </>
  )
}
