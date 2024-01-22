import BackButton from "../../ui/BackButton";
import AgentsList from "./AgentsList";

export default function AssignStockLayout() {
  return (
   <>
   <div className="flex justify-between items-start pt-2 mb-4">
    <BackButton />
    <h3 className="text-orange-500 font-medium text-lg">Choose Agent To Assign Stock</h3>

   </div>
   <AgentsList />
   </>
  )
}
