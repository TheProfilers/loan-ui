import BackButton from "../../ui/BackButton";
import NewShopAgentModal from "./NewShopAgentModal";
import ShopAgentDisplay from "./ShopAgentDisplay";

export default function ShopAgentsLayout() {
  return (
    <>
    <div className="flex justify-between">
        <BackButton/>
        <NewShopAgentModal/>
    </div>
    <ShopAgentDisplay/>
    </>
  )
}
