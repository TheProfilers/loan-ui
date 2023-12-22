import BackButton from "../../ui/BackButton";
import LoaneesDisplay from "./LoaneesDisplay";
import NewLoanModal from "./NewLoanModal";

export default function LoaneesLayout() {
  return (
    
    <>
    <div className="flex justify-between items-start">
    <BackButton />
    <NewLoanModal />
    </div>
    <div className="mt-2">
    <LoaneesDisplay />
    </div>
    </>
  )
}
