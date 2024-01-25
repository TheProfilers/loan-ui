import BackButton from "../../ui/BackButton";

export default function ShopsDetailsLayout() {
  return (
    <>
    <div className="flex justify-between items-start mt-3">
        <div className="flex space-x-2">
            <BackButton />
            <h3>Agents</h3>
        </div>
    </div>
    </>
  )
}
