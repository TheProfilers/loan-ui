import BackButton from "../../ui/BackButton";
import NewShopModal from "./NewShopModal";

export default function ShopsLayout() {
  return (
    <>
    <div className="flex justify-between items-start mt-3">
    <div className="flex space-x-2">
    <BackButton/>
    <h3 className="font-medium text-lg text-orange-500">Shops</h3>
    </div>
    <NewShopModal/>
    </div>
    </>
  )
}
