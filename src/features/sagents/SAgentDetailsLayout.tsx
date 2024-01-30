import { useAuth } from "../../context/AuthContext";
import BackButton from "../../ui/BackButton";
import FloatDisplay from "./FloatDisplay";
import NewAgentFloatModal from "./NewAgentFloatModal";

export default function SAgentDetailsLayout() {
  const {storedUser} = useAuth()
  return (
    <>
      <BackButton />

      <div className="flex justify-between items-start mt-2">
        <h1 className="text-lg font-medium text-orange-600">FLOAT</h1>

        { storedUser?.role ==='admin' ? <NewAgentFloatModal /> : "Borrow"}
      </div>
      <FloatDisplay/>
    </>
  );
}
