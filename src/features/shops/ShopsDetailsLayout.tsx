import BackButton from "../../ui/BackButton";
import NewSAgents from "../sagents/NewSAgents";
import SAgents from "../sagents/SAgents";

export default function ShopsDetailsLayout() {
  return (
    <>
    <div className="flex justify-between items-start mt-3 mb-2">
        <div className="flex space-x-2">
            <BackButton />
            <h3>Agents</h3>
        </div>
        <NewSAgents/>
    </div>

    <SAgents/>
    </>
  )
}
