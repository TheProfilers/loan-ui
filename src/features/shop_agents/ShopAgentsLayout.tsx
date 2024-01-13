import { useAuth } from "../../context/AuthContext";
import BackButton from "../../ui/BackButton";
import NewShopAgentModal from "./NewShopAgentModal";
import ShopAgentDisplay from "./ShopAgentDisplay";

export default function ShopAgentsLayout() {
  const {storedUser} = useAuth();
  return (
    <>
    <div className="flex justify-between">
        <BackButton/>
        {storedUser?.role ==='admin' && <NewShopAgentModal/>}
    </div>
    <ShopAgentDisplay/>
    </>
  )
}
