import BackButton from "../../ui/BackButton";
import NewLoanModal from "./NewLoanModal";

export default function LoaneesLayout() {
  return (
    
    <>
    <div className="flex justify-between items-start">
    <BackButton />
    <NewLoanModal />
    </div>
    </>
  )
}
